"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Copy, Check, Share2, Loader2, ShieldCheck, Sparkles } from "lucide-react";
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
    referralCode: string;
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
        referralCode: res.referralCode,
      });

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#FF5C5C", "#E63946", "#F472B6", "#FF9999", "#FFFFFF"],
        });
      } catch (e) {
        // Ignorer si non disponible
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
    return (
      <div className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-3xl border border-[#FF5C5C]/40 bg-[#150E20]/95 backdrop-blur-2xl shadow-2xl shadow-[#FF5C5C]/20 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-2xl bg-[#FF5C5C]/15 text-[#FF5C5C] flex items-center justify-center mx-auto mb-4 border border-[#FF5C5C]/30 shadow-inner">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
          Votre team est inscrite !
        </h3>
        <p className="text-sm text-zinc-300 mb-6">
          Votre accès prioritaire à la version Bêta de Taurge est réservé.
        </p>

        {/* Badge position */}
        <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1E142E] to-[#120B1D] border border-white/10 mb-6 inline-flex flex-col items-center min-w-[200px]">
          <span className="text-[11px] uppercase tracking-widest text-[#FF7A7A] font-semibold mb-1">
            Position dans la file
          </span>
          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C5C] via-[#F472B6] to-[#FDA4AF]">
            #{successData.position}
          </span>
        </div>

        <div className="bg-[#0D0816]/80 border border-white/10 rounded-2xl p-4 mb-5 text-left">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5C5C]" />
            Remontez dans la liste avec votre lien exclusif :
          </div>
          <div className="flex items-center gap-2">
            <div className="truncate text-xs font-mono bg-[#160E22] border border-white/10 px-3 py-2.5 rounded-xl text-zinc-200 flex-1 select-all">
              {getShareUrl()}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="shrink-0 h-10 px-3.5 rounded-xl border-[#FF5C5C]/30 text-white hover:border-[#FF5C5C]"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-[#FF5C5C] font-semibold text-xs">
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
          className="inline-flex items-center justify-center gap-2 w-full h-12 px-6 rounded-xl text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-md active:scale-[0.98]"
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
        <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-[#181024]/80 border border-white/[0.12] shadow-2xl backdrop-blur-xl">
          <div className="relative flex-1">
            <Input
              {...register("email")}
              type="email"
              placeholder="votre.email@scanlation.org"
              disabled={loading}
              className={errors.email ? "border-rose-500 focus:ring-rose-500/30" : ""}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="h-12 px-6 text-sm font-semibold shrink-0 group shadow-lg shadow-[#FF5C5C]/25 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Inscription en cours...
              </>
            ) : (
              <>
                <span>Rejoindre la waitlist</span>
                <span className="ml-1.5 font-bold text-base group-hover:translate-x-1 transition-transform inline-block">→</span>
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
          <ShieldCheck className="w-4 h-4 text-[#FF5C5C] shrink-0" />
          <span>Accès prioritaire garanti pour les 100 premières teams. Zéro spam.</span>
        </div>
      </form>
    </div>
  );
}
