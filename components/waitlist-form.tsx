"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Copy, Check, Share2, Loader2, Lock } from "lucide-react";
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
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#a855f7", "#ec4899", "#22c55e"],
        });
      } catch (e) {
        // Ignorer
      }
    } else {
      setServerError(res.message || "Une erreur est survenue.");
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
    `Je viens de rejoindre la waitlist de @TaurgeApp, le studio IA qui fait gagner 3x plus de temps aux teams de scanlation ! Rejoignez la liste prioritaire ici : ${getShareUrl()}`
  );

  if (successData) {
    return (
      <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-indigo-500/30 bg-zinc-900/90 backdrop-blur-md shadow-2xl shadow-indigo-500/10 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">
          Votre team est inscrite !
        </h3>
        <p className="text-sm text-zinc-400 mb-6">
          Votre place dans la file d'attente est verrouillée :
        </p>

        <div className="py-3 px-6 rounded-xl bg-zinc-950/80 border border-zinc-800 mb-6 inline-block">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-0.5">
            Position Actuelle
          </span>
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
            #{successData.position}
          </span>
        </div>

        <p className="text-xs text-zinc-300 mb-3">
          Partagez votre lien exclusif pour remonter dans la file d'attente :
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="truncate text-xs bg-zinc-950 border border-zinc-800 px-3 py-2.5 rounded-lg text-zinc-300 flex-1 text-left select-all">
            {getShareUrl()}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="shrink-0 h-10 px-3"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>

        <a
          href={`https://twitter.com/intent/tweet?text=${tweetText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full h-11 px-4 rounded-xl text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-md"
        >
          <Share2 className="w-4 h-4" />
          Partager sur X (Twitter)
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Input
              {...register("email")}
              type="email"
              placeholder="votre.email@domaine.com"
              disabled={loading}
              className={errors.email ? "border-rose-500 focus-visible:ring-rose-500" : ""}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="h-12 px-6 font-semibold shrink-0 group"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Inscription...
              </>
            ) : (
              <>
                Boostez votre team de scan
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>

        {errors.email && (
          <p className="text-xs text-rose-400 text-left pl-1">
            {errors.email.message}
          </p>
        )}

        {serverError && (
          <p className="text-xs text-rose-400 text-left pl-1">
            {serverError}
          </p>
        )}

        <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 pt-1">
          <Lock className="w-3.5 h-3.5 text-zinc-400" />
          <span>Zéro spam. Accès prioritaire garanti pour les 100 premières teams.</span>
        </div>
      </form>
    </div>
  );
}
