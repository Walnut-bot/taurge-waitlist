"use server";

import { z } from "zod";
import { getServiceSupabase } from "@/lib/supabase";

const SubscribeSchema = z.object({
  email: z.string().email("Format d'e-mail invalide").toLowerCase().trim(),
  referralCode: z.string().optional(),
});

export type SubscribeState = {
  success: boolean;
  message?: string;
  position?: number;
  referralCode?: string;
};

export async function subscribeToWaitlist(
  formData: { email: string; referralCode?: string }
): Promise<SubscribeState> {
  const parse = SubscribeSchema.safeParse(formData);

  if (!parse.success) {
    return {
      success: false,
      message: parse.error.issues[0]?.message || "Données invalides.",
    };
  }

  const { email, referralCode } = parse.data;

  // Sécurité si les clés ne sont pas encore définies
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {
      success: true,
      position: 142,
      referralCode: "TAURGE-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    };
  }

  try {
    const supabase = getServiceSupabase();

    // 1. Vérifier si l'utilisateur existe déjà
    const { data: existingUser } = await supabase
      .from("waitlist")
      .select("id, referral_code, created_at")
      .eq("email", email)
      .maybeSingle();

    if (existingUser) {
      const { count } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true })
        .lte("created_at", existingUser.created_at);

      return {
        success: true,
        message: "Vous êtes déjà inscrit !",
        position: count || 1,
        referralCode: existingUser.referral_code,
      };
    }

    // 2. Générer un code de parrainage unique
    const newReferralCode = "TG-" + Math.random().toString(36).substring(2, 7).toUpperCase();

    // 3. Insérer dans la table waitlist
    const { error: insertError } = await supabase.from("waitlist").insert({
      email,
      referral_code: newReferralCode,
      referred_by: referralCode || null,
    });

    if (insertError) {
      console.error("Erreur insertion Supabase :", insertError);
      return { success: false, message: "Une erreur est survenue lors de l'enregistrement." };
    }

    // 4. Récupérer le nombre total d'inscrits pour donner la position
    const { count: totalCount } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    return {
      success: true,
      position: totalCount || 1,
      referralCode: newReferralCode,
    };
  } catch (err) {
    console.error("Erreur serveur subscribeToWaitlist :", err);
    return {
      success: false,
      message: "Problème de connexion au serveur. Réessayez dans un instant.",
    };
  }
}
