import React from "react";
import { Sparkles, Wand2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    icon: Sparkles,
    title: "OCR & Traduction Contextuelle",
    description:
      "Extraction automatique des raws multilingues (JP/KR/CN) et traduction IA qui respecte le ton et les nuances de l'œuvre d'origine.",
    badge: "Traduction",
  },
  {
    icon: Wand2,
    title: "Cleaning & Redraw Automatisés",
    description:
      "Adieu les heures passées sur le tampon de duplication. Notre IA efface le texte et reconstruit les arrière-plans (inpainting) en 1 clic.",
    badge: "Cleaning",
  },
  {
    icon: Users,
    title: "Studio de Lettrage & Workflow",
    description:
      "Fini les allers-retours infernaux sur Discord. Éditeur visuel pour le lettrage et espace synchronisé pour toute l'équipe.",
    badge: "Lettrage & Collab",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-100 flex flex-col justify-between overflow-hidden">
      {/* Background Decorators & Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Navigation Minimale */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="font-black text-white text-base tracking-tighter">T</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Taurge</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Bêta privée en préparation
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl mx-auto px-6 pt-12 pb-24 text-center">
        
        {/* Badge supérieur */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium mx-auto mb-8 shadow-sm backdrop-blur-md">
          <span>🚀 Accès anticipé Bêta | Pour les teams de Scanlation</span>
        </div>

        {/* Titre Principal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Sortez vos chapitres{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">
            3x plus vite
          </span>{" "}
          avec le studio IA dédié à la scanlation.
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Du cleaning automatisé au lettrage intelligent : l'espace de travail tout-en-un conçu pour les traducteurs, cleaners et letterers de manga, manhwa et webtoon.
        </p>

        {/* Formulaire de Waitlist */}
        <WaitlistForm />

        {/* Preuve sociale */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" alt="Worker 1" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces" alt="Worker 2" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=64&h=64&fit=crop&crop=faces" alt="Worker 3" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-950" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces" alt="Worker 4" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-zinc-300">
            Rejoint par <span className="text-indigo-400 font-bold">+120 workers</span> cette semaine.
          </p>
        </div>

        {/* SECTION FONCTIONNALITÉS TEASER */}
        <section className="mt-28 text-left">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Pensé pour chaque maillon de votre chaîne de release
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Fini l'assemblage laborieux d'outils disparates. Taurge unifie le flux de production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="flex flex-col justify-between group hover:border-indigo-500/40">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-800/60 px-2.5 py-1 rounded-md">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SECTION NOTE DU FONDATEUR */}
        <section className="mt-20 max-w-2xl mx-auto w-full">
          <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 backdrop-blur-sm text-left relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-sm">
                QC
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Mot du fondateur</h4>
                <p className="text-xs text-zinc-400">Ancien QC & Développeur de Taurge</p>
              </div>
            </div>
            <blockquote className="text-sm sm:text-base text-zinc-300 italic leading-relaxed">
              « Ancien QC (Chapter Checker) sur Discord, je connais les nuits blanches passées pour sortir les releases à temps. J'ai construit Taurge en public pour régler nos vrais problèmes. »
            </blockquote>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 py-8 px-6 text-center text-xs text-zinc-400">
        <p>© 2026 Taurge. Tous droits réservés. Bâti pour la communauté Scanlation.</p>
      </footer>
    </div>
  );
}
