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
  basePosition?: number;
  referralCount?: number;
  referralCode?: string;
  isReturningUser?: boolean;
};

// Bonus : chaque filleul fait remonter de 5 places dans la file d'attente
const PLACES_PER_REFERRAL = 5;

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

  // Mode secours si Supabase n'est pas branché
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {
      success: true,
      position: 142,
      basePosition: 142,
      referralCount: 0,
      referralCode: "TAURGE-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
      isReturningUser: false,
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
      // Calculer sa position brute d'arrivée (basePosition)
      const { count: baseCount } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true })
        .lte("created_at", existingUser.created_at);

      // Calculer le nombre réel de personnes qu'il a parrainées
      const { count: refCount } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true })
        .eq("referred_by", existingUser.referral_code);

      const basePosition = baseCount || 1;
      const referrals = refCount || 0;
      // Recalcul du rang effectif (avec un minimum à 1)
      const effectivePosition = Math.max(1, basePosition - (referrals * PLACES_PER_REFERRAL));

      return {
        success: true,
        message: referrals > 0 
          ? `Bon retour ! Vous avez parrainé ${referrals} ${referrals > 1 ? 'membres' : 'membre'} et gagné ${referrals * PLACES_PER_REFERRAL} places !`
          : "Bon retour ! Partagez votre lien ci-dessous pour remonter dans la file d'attente.",
        position: effectivePosition,
        basePosition: basePosition,
        referralCount: referrals,
        referralCode: existingUser.referral_code,
        isReturningUser: true,
      };
    }

    // 2. Générer un code de parrainage unique pour le nouveau membre
    const newReferralCode = "TG-" + Math.random().toString(36).substring(2, 7).toUpperCase();

    // 3. Insérer le nouveau membre dans Supabase
    const { error: insertError } = await supabase.from("waitlist").insert({
      email,
      referral_code: newReferralCode,
      referred_by: referralCode ? referralCode.trim().toUpperCase() : null,
    });

    if (insertError) {
      console.error("Erreur insertion Supabase :", insertError);
      return { success: false, message: "Une erreur est survenue lors de l'enregistrement." };
    }

    // 4. Position totale du nouvel arrivant
    const { count: totalCount } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    const position = totalCount || 1;

    return {
      success: true,
      position: position,
      basePosition: position,
      referralCount: 0,
      referralCode: newReferralCode,
      isReturningUser: false,
    };
  } catch (err) {
    console.error("Erreur serveur subscribeToWaitlist :", err);
    return {
      success: false,
      message: "Problème de connexion au serveur. Réessayez dans un instant.",
    };
  }
}