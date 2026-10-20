"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Copy, Check, Share2, Loader2, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import confetti from "canvas-confetti";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToWaitlist } from "@/app/actions/subscribe";

const formSchema = z.object({
  email: z.string().email("Veuillez saisir une adresse e-mail valide."),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    position: number;
    basePosition: number;
    referralCount: number;
    referralCode: string;
    isReturningUser: boolean;
    message?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setServerError(null);

    const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const refCode = urlParams ? urlParams.get("ref") || undefined : undefined;

    const res = await subscribeToWaitlist({
      email: values.email,
      referralCode: refCode,
    });

    setLoading(false);

    if (res.success && res.position && res.referralCode) {
      setSuccessData({
        position: res.position,
        basePosition: res.basePosition || res.position,
        referralCount: res.referralCount || 0,
        referralCode: res.referralCode,
        isReturningUser: !!res.isReturningUser,
        message: res.message,
      });

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ff5c5c", "#f472b6", "#a855f7", "#22c55e"],
        });
      } catch (e) {
        // Ignorer si indisponible
      }
    } else {
      setServerError(res.message || "Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const getShareUrl = () => {
    if (typeof window === "undefined" || !successData) return "";
    return `${window.location.origin}?ref=${successData.referralCode}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tweetText = encodeURIComponent(
    `Je viens de réserver mon accès sur @TaurgeApp, le studio IA qui booste les teams de scanlation 3x plus vite ! Rejoignez la bêta prioritaire ici : ${getShareUrl()}`
  );

  if (successData) {
    const placesWon = (successData.basePosition - successData.position);

    return (
      <div className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-3xl border border-[#ff5c5c]/40 bg-[#160E22]/95 backdrop-blur-2xl shadow-2xl shadow-[#ff5c5c]/15 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 shadow-inner">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
          {successData.isReturningUser ? "Statut de votre inscription" : "Votre team est inscrite !"}
        </h3>
        <p className="text-sm text-zinc-400 mb-6">
          {successData.message || "Votre accès prioritaire à la version Bêta est réservé."}
        </p>

        {/* Badge position dynamique */}
        <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0D0914] to-[#160E22] border border-white/10 mb-4 inline-flex flex-col items-center min-w-[220px]">
          <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-semibold mb-1">
            Votre Rang Effectif
          </span>
          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c5c] via-[#f472b6] to-[#ff5c5c]">
            #{successData.position}
          </span>
          {placesWon > 0 && (
            <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +{placesWon} places gagnées !
            </span>
          )}
        </div>

        {/* Compteur de filleuls */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs text-zinc-300 bg-white/5 border border-white/10 py-2 px-3 rounded-xl max-w-sm mx-auto">
          <Users className="w-3.5 h-3.5 text-[#ff5c5c]" />
          <span><strong>{successData.referralCount}</strong> {successData.referralCount > 1 ? "membres parrainés" : "membre parrainé"}</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">+5 places par ami invité</span>
        </div>

        {/* Bloc lien exclusif */}
        <div className="bg-[#0D0914]/80 border border-white/10 rounded-2xl p-4 mb-5 text-left">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5c5c]" />
            Votre lien exclusif pour remonter dans la file :
          </div>
          <div className="flex items-center gap-2">
            <div className="truncate text-xs font-mono bg-[#160E22] border border-white/10 px-3 py-2.5 rounded-xl text-zinc-300 flex-1 select-all">
              {getShareUrl()}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="shrink-0 h-10 px-3.5 rounded-xl border-white/15"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 font-medium text-xs">
                  <Check className="w-3.5 h-3.5" /> Copié
                </span>
              ) : (
                <span className="flex items-center gap-1 text-zinc-200 text-xs">
                  <Copy className="w-3.5 h-3.5" /> Copier
                </span>
              )}
            </Button>
          </div>
        </div>

        <a
          href={`https://twitter.com/intent/tweet?text=${tweetText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full h-12 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#ff5c5c] to-[#e63946] text-white hover:brightness-110 transition-all shadow-md active:scale-[0.98]"
        >
          <Share2 className="w-4 h-4" />
          Partager sur X (Twitter)
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <div className="flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl bg-[#160E22]/80 border border-white/15 shadow-2xl backdrop-blur-xl">
          <div className="relative flex-1">
            <Input
              {...register("email")}
              type="email"
              placeholder="votre.email@domaine.com"
              disabled={loading}
              className={errors.email ? "border-rose-500 focus:ring-rose-500/30" : ""}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="h-12 px-6 text-sm font-semibold shrink-0 group bg-gradient-to-r from-[#ff5c5c] to-[#e63946] hover:brightness-110 text-white shadow-lg shadow-[#ff5c5c]/25 border-0"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Vérification...
              </>
            ) : (
              <>
                <span>Commencer un chapitre</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>

        {errors.email && (
          <p className="text-xs text-rose-400 text-center font-medium">
            {errors.email.message}
          </p>
        )}

        {serverError && (
          <p className="text-xs text-rose-400 text-center font-medium">
            {serverError}
          </p>
        )}

        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-1">
          <ShieldCheck className="w-4 h-4 text-[#ff5c5c] shrink-0" />
          <span>Zéro spam. Chaque ami invité vous fait doubler 5 personnes.</span>
        </div>
      </form>
    </div>
  );
}