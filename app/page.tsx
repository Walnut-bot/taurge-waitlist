import React from "react";
import { Sparkles, Wand2, Users, CheckCircle2, ArrowUpRight, Zap, Check, Layers, Image as ImageIcon, Cpu, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    icon: Sparkles,
    title: "OCR Manga & Traduction Contextuelle",
    description:
      "Détection automatique instantanée du texte vertical et horizontal (Japonais, Coréen, Chinois). Une IA entraînée sur les mangas qui comprend le lore, l'argot et les expressions idiomatiques.",
    badge: "OCR & Traduction IA",
    gradient: "from-[#FF5C5C]/20 to-[#F472B6]/20",
    iconColor: "text-[#FF5C5C]",
  },
  {
    icon: Wand2,
    title: "Cleaning & Redraw en 1 Clic",
    description:
      "Dites adieu aux heures passées sur le tampon de duplication. Notre modèle inpainting efface bulles et onomatopées tout en régénérant les trames et décors avec fidélité absolue.",
    badge: "Inpainting & Clean",
    gradient: "from-[#F472B6]/20 to-[#E63946]/20",
    iconColor: "text-[#F472B6]",
  },
  {
    icon: Users,
    title: "Studio de Lettrage Collaboratif",
    description:
      "Fini le chaos des fichiers PSD échangés sur Discord. Un éditeur typographique temps réel où traducteurs, cleaners et letterers travaillent simultanément sur le même chapitre.",
    badge: "Typeset & Workflow",
    gradient: "from-[#FF7A7A]/20 to-[#FF5C5C]/20",
    iconColor: "text-[#FF7A7A]",
  },
];

const highlights = [
  "Inpainting de trames manga en < 1 seconde",
  "OCR optimisé Webtoons verticaux & Raws double-page",
  "Gestionnaire de polices de lettrage & règles typo",
  "Export PSD multicalques & WebP haute fidélité",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0D0914] text-zinc-100 flex flex-col justify-between selection:bg-[#FF5C5C] selection:text-white">
      {/* Background Decorators & Grid */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#FF5C5C]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-10%] w-[500px] h-[350px] bg-[#F472B6]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[450px] h-[300px] bg-[#E63946]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER / NAVIGATION AVEC LIGNE FINE HORIZONTALE */}
      <div className="relative z-20 w-full border-b border-white/[0.08] bg-[#0D0914]/80 backdrop-blur-md">
        <header className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo officiel : Carré rouge-corail avec kanji 訳 ('Yaku') + texte Taurge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4B4B] to-[#E63946] flex items-center justify-center shadow-lg shadow-[#FF4B4B]/30 border border-[#FF7A7A]/40 shrink-0">
              <span className="font-bold text-white text-xl leading-none select-none font-sans">
                訳
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tight text-white leading-none">
                Taurge
              </span>
              <span className="text-[10px] text-[#FF7A7A] font-semibold tracking-wider uppercase mt-0.5">
                Scanlation Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 bg-[#160E22]/90 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C5C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C5C]"></span>
            </span>
            <span className="hidden sm:inline">Bêta privée :</span> 100 places prioritaires
          </div>
        </header>
      </div>

      {/* HERO SECTION */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20 text-center">
        
        {/* Tag supérieur rouge/corail */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#FF5C5C] uppercase mx-auto mb-6">
          <span>— MANGA • MANHWA • MANHUA • WEBTOON</span>
        </div>

        {/* Titre Principal Ultra-Impactant */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          Sortez vos chapitres{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c5c] via-[#f472b6] to-[#ff5c5c]">
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
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex -space-x-2.5 overflow-hidden">
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0D0914] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces" alt="Avatar 1" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0D0914] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces" alt="Avatar 2" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0D0914] object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=96&h=96&fit=crop&crop=faces" alt="Avatar 3" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0D0914] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=faces" alt="Avatar 4" />
          </div>
          <div className="text-left text-xs sm:text-sm">
            <span className="font-bold text-white block sm:inline">+140 traducteurs & cleaners</span>{" "}
            <span className="text-zinc-400">ont déjà réservé leur place</span>
          </div>
        </div>

        {/* CARTE DE PREVIEW FAÇON STUDIO DE SCANLATION */}
        <div className="mt-14 w-full text-left">
          <div className="rounded-2xl border border-white/10 bg-[#140D20]/90 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden">
            {/* Fenêtre Studio - Barre supérieure */}
            <div className="h-11 border-b border-white/[0.08] bg-[#0E0817] px-4 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5C5C]/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="ml-3 font-mono text-[11px] text-zinc-400 font-medium hidden sm:inline">
                  Taurge Studio • raw_chapter_142_p07.png [820 × 1240 px]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FF5C5C]/15 border border-[#FF5C5C]/30 text-[11px] font-semibold text-[#FF7A7A] flex items-center gap-1">
                  <Cpu className="w-3 h-3" /> IA Active : JA 91%
                </span>
                <span className="text-[11px] font-mono text-zinc-400 hidden md:inline">Zoom: 100%</span>
              </div>
            </div>

            {/* Corps du Studio : 2 colonnes (Raw d'un côté avec bulles n°1, n°2 / Panneau droit OCR & traduction) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              {/* Colonne Gauche : Raw Manga Page Preview */}
              <div className="lg:col-span-7 p-4 sm:p-6 bg-[#0B0712] border-b lg:border-b-0 lg:border-r border-white/[0.08] relative flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3 text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <ImageIcon className="w-3.5 h-3.5 text-[#FF5C5C]" /> Raw Viewer (Double Détection Active)
                  </span>
                  <span className="text-[#FF7A7A]">Inpainting automatique : ON</span>
                </div>

                {/* Simulation de planche manga stylisée */}
                <div className="relative rounded-xl border border-white/10 bg-[#120B1B] p-4 sm:p-6 min-h-[360px] flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Trame de fond manga décorative */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Panel supérieur manga */}
                  <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
                    {/* Panel 1 */}
                    <div className="h-32 rounded-lg border border-zinc-700/60 bg-gradient-to-br from-zinc-800/80 to-zinc-950 p-3 relative flex items-center justify-center">
                      <span className="text-[10px] uppercase font-mono text-zinc-500 absolute top-2 left-2">Panel 01</span>
                      
                      {/* Bulle n°1 sur la planche */}
                      <div className="relative rounded-2xl border-2 border-[#FF5C5C] bg-[#FF5C5C]/15 px-3 py-2 shadow-lg shadow-[#FF5C5C]/20 backdrop-blur-sm animate-pulse">
                        <div className="absolute -top-2.5 -left-2 px-1.5 py-0.2 rounded-md bg-[#FF5C5C] text-white font-mono text-[9px] font-black shadow">
                          Bulle n°1
                        </div>
                        <p className="font-serif text-white font-bold text-xs tracking-wider text-center">
                          待たせたな… ここからは俺たちのターンだ！
                        </p>
                      </div>
                    </div>

                    {/* Panel 2 */}
                    <div className="h-32 rounded-lg border border-zinc-700/60 bg-gradient-to-bl from-zinc-800/80 to-zinc-950 p-3 relative flex items-center justify-center">
                      <span className="text-[10px] uppercase font-mono text-zinc-500 absolute top-2 left-2">Panel 02</span>
                      <div className="w-12 h-12 rounded-full border border-dashed border-zinc-600 flex items-center justify-center text-zinc-500 text-[10px]">
                        SFX / Clean
                      </div>
                    </div>
                  </div>

                  {/* Panel inférieur grand format */}
                  <div className="relative z-10 h-44 rounded-lg border border-zinc-700/60 bg-gradient-to-t from-zinc-900 to-zinc-950 p-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 absolute top-2 left-2">Panel 03 (Climax)</span>
                    
                    {/* Bulle n°2 sur la planche */}
                    <div className="relative rounded-2xl border-2 border-[#F472B6] bg-[#F472B6]/15 px-3.5 py-2.5 shadow-lg shadow-[#F472B6]/20 backdrop-blur-sm max-w-[210px]">
                      <div className="absolute -top-2.5 -left-2 px-1.5 py-0.2 rounded-md bg-[#F472B6] text-zinc-950 font-mono text-[9px] font-black shadow">
                        Bulle n°2
                      </div>
                      <p className="font-serif text-white font-bold text-xs tracking-wider">
                        まさか… あいつが本当に戻ってくるとは…
                      </p>
                    </div>

                    <div className="text-right text-[10px] font-mono text-zinc-400 bg-black/40 px-2 py-1 rounded border border-white/5">
                      ✓ Trame reconstruite (0.8s)
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>2 bulles sélectionnées automatiquement</span>
                  <span className="text-zinc-400 font-mono">Format: Manga N&B 600 DPI</span>
                </div>
              </div>

              {/* Colonne Droite : Panneau latéral OCR & Traduction */}
              <div className="lg:col-span-5 p-4 sm:p-6 bg-[#120B1D] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#FF5C5C]" /> Panneau Détection & Traduction
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                      Précision 98.6%
                    </span>
                  </div>

                  {/* Détail Bulle n°1 */}
                  <div className="mb-3.5 p-3.5 rounded-xl border border-[#FF5C5C]/30 bg-[#1A1026] text-left">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF5C5C]"></span>
                        <span className="text-xs font-bold text-white">Bulle n°1</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF5C5C]/20 text-[#FF7A7A] font-bold">
                        JA 91% • Détecté
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mb-1.5 bg-black/30 p-1.5 rounded border border-white/5 truncate">
                      待たせたな… ここからは俺たちのターンだ！
                    </div>
                    <div className="text-xs text-white font-medium bg-[#FF5C5C]/10 p-2 rounded-lg border border-[#FF5C5C]/20 leading-relaxed">
                      <span className="text-[#FF7A7A] font-bold mr-1">FR :</span>
                      « Désolé pour l'attente… À partir de maintenant, c'est notre tour ! »
                    </div>
                    <div className="mt-2 text-[10px] text-zinc-400 flex items-center justify-between">
                      <span>Typo: Wild Words (14pt)</span>
                      <span className="text-emerald-400 font-semibold">✓ Cleaning OK</span>
                    </div>
                  </div>

                  {/* Détail Bulle n°2 */}
                  <div className="p-3.5 rounded-xl border border-[#F472B6]/30 bg-[#1A1026] text-left">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#F472B6]"></span>
                        <span className="text-xs font-bold text-white">Bulle n°2</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F472B6]/20 text-[#F472B6] font-bold">
                        JA 94% • Détecté
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mb-1.5 bg-black/30 p-1.5 rounded border border-white/5 truncate">
                      まさか… あいつが本当に戻ってくるとは…
                    </div>
                    <div className="text-xs text-white font-medium bg-[#F472B6]/10 p-2 rounded-lg border border-[#F472B6]/20 leading-relaxed">
                      <span className="text-[#F472B6] font-bold mr-1">FR :</span>
                      « C'est impossible… Il est vraiment revenu parmi nous… »
                    </div>
                    <div className="mt-2 text-[10px] text-zinc-400 flex items-center justify-between">
                      <span>Typo: Anime Ace (12pt)</span>
                      <span className="text-emerald-400 font-semibold">✓ Cleaning OK</span>
                    </div>
                  </div>
                </div>

                {/* Footer du panneau avec bouton action */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <Layers className="w-3.5 h-3.5 text-[#FF5C5C]" />
                    <span>PSD 3 Calques prêt</span>
                  </div>
                  <span className="text-xs font-bold text-[#FF5C5C] hover:underline cursor-pointer">
                    Appliquer le lettrage →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BARRE D'ARGUMENTS CLÉS */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-[#160F22]/70 border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-[#FF5C5C] shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-300 font-medium leading-tight">{item}</span>
            </div>
          ))}
        </div>

        {/* SECTION FONCTIONNALITÉS TEASER */}
        <section className="mt-28 text-left">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1C132B]/80 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-[#FF5C5C]" />
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
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 bg-[#160E22] border border-white/10 px-3 py-1 rounded-full shadow-sm">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FF7A7A] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center text-xs text-[#FF5C5C] font-semibold group-hover:text-[#FF7A7A]">
                    Découvrir l'outil <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SECTION NOTE DU FONDATEUR */}
        <section className="mt-24 max-w-2xl mx-auto w-full">
          <div className="relative p-7 sm:p-9 rounded-3xl border border-white/10 bg-gradient-to-b from-[#181024]/90 to-[#120B1D]/90 backdrop-blur-xl text-left shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF5C5C]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4B4B] to-[#E63946] flex items-center justify-center text-white font-black text-sm shadow-md border border-[#FF7A7A]/30">
                QC
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Mot du fondateur</h4>
                <p className="text-xs text-[#FF7A7A] font-medium">Ancien QC Discord & Développeur de Taurge</p>
              </div>
            </div>
            
            <blockquote className="text-sm sm:text-base text-zinc-300 italic leading-relaxed border-l-2 border-[#FF5C5C]/60 pl-4 my-2">
              « Ancien QC (Chapter Checker) sur Discord, je connais par cœur les nuits blanches passées pour sortir les releases à temps avec des membres introuvables au dernier moment. J'ai construit Taurge en public pour régler nos vrais problèmes de production. »
            </blockquote>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.08] py-8 px-6 text-center text-xs text-zinc-400 bg-[#0A0710]/80 backdrop-blur-md">
        <p>© 2026 Taurge. Tous droits réservés. Bâti avec passion pour la communauté Scanlation.</p>
      </footer>
    </div>
  );
}
