import type { Metadata } from "next";
import { Geist, Pacifico } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://plomberie-archimede.vercel.app"; // update when custom domain is set

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plomberie Archimède — Plombier à Valbonne & Côte d'Azur",
    template: "%s | Plomberie Archimède",
  },
  description:
    "Plombier professionnel à Valbonne et ses environs (Sophia Antipolis, Antibes, Mougins, Grasse). Dépannage d'urgence 7j/7, installation, rénovation. Devis gratuit et sans engagement.",
  keywords: [
    "plombier Valbonne",
    "plomberie Valbonne",
    "plombier urgence Valbonne",
    "dépannage plomberie Valbonne",
    "plombier Sophia Antipolis",
    "plombier Antibes",
    "plombier Mougins",
    "plombier Grasse",
    "plombier Côte d'Azur",
    "plombier Alpes-Maritimes",
    "devis plomberie gratuit",
    "plomberie salle de bain",
    "chauffe-eau plombier",
    "fuite eau urgence",
    "Plomberie Archimède",
  ],
  authors: [{ name: "Plomberie Archimède" }],
  creator: "Plomberie Archimède",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Plomberie Archimède — Le plombier des rois, le roi des plombiers",
    description:
      "Plombier professionnel à Valbonne et ses environs. Dépannage d'urgence 7j/7, installation, rénovation. Devis gratuit.",
    url: siteUrl,
    siteName: "Plomberie Archimède",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plomberie Archimède — Plombier à Valbonne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plomberie Archimède — Plombier à Valbonne",
    description: "Dépannage d'urgence 7j/7, installation, rénovation. Devis gratuit.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${pacifico.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
