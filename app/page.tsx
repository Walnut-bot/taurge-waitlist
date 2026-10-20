import React from "react";
import { Sparkles, Wand2, Users, Flame, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    icon: Sparkles,
    title: "OCR & Traduction Contextuelle",
    description:
      "Extraction automatique ultra-précise des raws multilingues (Japonais, Coréen, Chinois). Une IA entraînée sur les mangas qui respecte le ton, l'argot et les subtilités culturelles.",
    badge: "Traduction IA",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Wand2,
    title: "Cleaning & Redraw Automatisés",
    description:
      "Terminé les heures passées sur le tampon de duplication et la plume. Notre algorithme inpainting efface les bulles et SFX tout en reconstruisant fidèlement les trames de fond en 1 clic.",
    badge: "Inpainting & Clean",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Studio de Lettrage & Workflow",
    description:
      "Fini les allers-retours infernaux et les fichiers PSD perdus sur Discord. Un éditeur typographique collaboratif en temps réel où chaque membre voit les modifications instantanément.",
    badge: "Collab & Typeset",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
];

const highlights = [
  "Inpainting de trames manga en < 2 secondes",
  "OCR optimisé Webtoons verticaux & Raws double-page",
  "Gestionnaire de polices de lettrage par série",
  "Export PSD multicalques & WebP haute fidélité",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Background Decorators & Grid */}
      <div className="fixed inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="fixed top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed top-[45%] right-[-15%] w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[450px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 border border-indigo-400/30">
            <span className="font-black text-white text-lg tracking-tight">T</span>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white block leading-none">Taurge</span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase">Scanlation Studio</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800/90 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline">Bêta privée :</span> 100 places prioritaires
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20 text-center">
        
        {/* Badge supérieur */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-indigo-500/15 text-indigo-300 text-xs sm:text-sm font-semibold mx-auto mb-8 shadow-inner backdrop-blur-md">
          <Flame className="w-4 h-4 text-orange-400 shrink-0" />
          <span>Accès Bêta Fermé • Pour les teams Manga, Manhwa & Webtoon</span>
        </div>

        {/* Titre Principal Ultra-Impactant */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          Sortez vos chapitres{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 underline decoration-indigo-500/40 decoration-wavy underline-offset-8">
            3x plus vite
          </span>{" "}
          avec le studio IA dédié au scan.
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Du cleaning automatisé par IA au lettrage intelligent : l'espace de travail collaboratif pensé sur-mesure pour les traducteurs, cleaners, redrawers et letterers.
        </p>

        {/* Formulaire d'inscription */}
        <WaitlistForm />

        {/* Preuve sociale & Avatars */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex -space-x-2.5 overflow-hidden">
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces" alt="Worker 1" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces" alt="Worker 2" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=96&h=96&fit=crop&crop=faces" alt="Worker 3" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=faces" alt="Worker 4" />
          </div>
          <div className="text-left text-xs sm:text-sm">
            <span className="font-bold text-white block sm:inline">+140 passionnés</span>{" "}
            <span className="text-zinc-400">ont déjà rejoint la liste cette semaine</span>
          </div>
        </div>

        {/* BARRE D'ARGUMENTS CLÉS */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-300 font-medium leading-tight">{item}</span>
            </div>
          ))}
        </div>

        {/* SECTION FONCTIONNALITÉS TEASER */}
        <section className="mt-28 text-left">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              Conçu pour votre workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Pensé pour chaque maillon de votre chaîne de release
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Fini l'assemblage laborieux d'outils disparates. Taurge unifie le flux de production du raw au chapitre final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 ${feature.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800/90 border border-zinc-700/60 px-3 py-1 rounded-full shadow-sm">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center text-xs text-indigo-400 font-semibold group-hover:text-indigo-300">
                    Découvrir l'outil <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SECTION NOTE DU FONDATEUR */}
        <section className="mt-24 max-w-2xl mx-auto w-full">
          <div className="relative p-7 sm:p-9 rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 backdrop-blur-xl text-left shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md border border-indigo-400/30">
                QC
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Mot du fondateur</h4>
                <p className="text-xs text-indigo-400 font-medium">Ancien QC Discord & Développeur de Taurge</p>
              </div>
            </div>
            
            <blockquote className="text-sm sm:text-base text-zinc-300 italic leading-relaxed border-l-2 border-indigo-500/50 pl-4 my-2">
              « Ancien QC (Chapter Checker) sur Discord, je connais par cœur les nuits blanches passées pour sortir les releases à temps avec des membres introuvables au dernier moment. J'ai construit Taurge en public pour régler nos vrais problèmes de production. »
            </blockquote>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-800/80 py-8 px-6 text-center text-xs text-zinc-400 bg-zinc-950/60 backdrop-blur-md">
        <p>© 2026 Taurge. Tous droits réservés. Bâti avec passion pour la communauté Scanlation.</p>
      </footer>
    </div>
  );
}
