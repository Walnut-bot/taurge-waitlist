import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taurge - Le Studio IA dédié aux teams de Scanlation",
  description:
    "Sortez vos chapitres de Manga, Manhwa et Webtoon 3x plus vite grâce au cleaning automatisé, OCR contextuel et studio de lettrage synchronisé.",
  keywords: [
    "scanlation",
    "manga translation",
    "manhwa cleaner",
    "inpainting manga",
    "lettrage webtoon",
    "redrawer",
    "taurge",
  ],
  authors: [{ name: "Taurge Team" }],
  openGraph: {
    title: "Taurge | Studio IA pour la Scanlation",
    description:
      "Du cleaning automatisé au lettrage intelligent : l'espace tout-en-un pour les teams de scan.",
    url: "https://taurge.app",
    siteName: "Taurge",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taurge - Accélérez vos releases de Scanlation",
    description:
      "Cleaning en 1 clic, OCR multilingue et studio de lettrage pour Traducteurs, Cleaners et Letterers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#09090B] text-zinc-100 antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
