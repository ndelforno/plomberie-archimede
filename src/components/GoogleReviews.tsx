"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PLACE_ID = "ChIJ8eRkzMz270kRFFL8muZnqwA";

const reviews = [
  {
    author: "Nicolas Delforno",
    rating: 5,
    time: "il y a 10 mois",
    text: "Le roi des plombier !!! Le plombier des rois !!! Le GOAT tout simplement !",
  },
  {
    author: "Guillaume Medici",
    rating: 5,
    time: "il y a 10 mois",
    text: "Artisan très sérieux, minutieux et réactif. Je travaille avec cette entreprise depuis de nombreuses années, je la recommande vivement.",
  },
  {
    author: "Mariel Gilles",
    rating: 5,
    time: "il y a 10 mois",
    text: "Toujours de bons conseils et très professionnel, j'ai eu à plusieurs reprises recours aux services de cette entreprise et j'en suis complètement satisfaite. C'est tellement difficile de trouver des artisans honnêtes que je ne peux que le recommander.",
  },
  {
    author: "Vince",
    rating: 5,
    time: "il y a 10 mois",
    text: "Sérieux, réactif et de très bon conseil, Jérémy a su nous accompagner dans notre projet de salle de bain et nous éviter des dépenses inutiles.",
  },
  {
    author: "Marion B",
    rating: 5,
    time: "il y a 10 mois",
    text: "Parfait ! J'ai pu faire appel à Jérémy à plusieurs reprises pour des installations, mise en place (chauffe eau, vmc, etc) et il est très efficace, professionnel.",
  },
  {
    author: "Sebastien Daumas",
    rating: 5,
    time: "il y a 10 mois",
    text: "Plombier très professionnel et surtout honnête. Je n'hésite pas à faire appel à l'entreprise Archimède pour mes divers travaux de plomberie. Je recommande 👍",
  },
  {
    author: "Philippe Khaldi",
    rating: 5,
    time: "il y a 7 mois",
    text: "Disponible, professionnel, merci pour un dépannage dans les 12 heures.... Bravo Jérémy... et Merci !",
  },
  {
    author: "Aurelie Bondi",
    rating: 5,
    time: "il y a 10 mois",
    text: "J'ai contacté cette personne suite à une recommandation, il a su tout de suite trouver le problème et le régler. Très professionnel.",
  },
  {
    author: "Emilie R.",
    rating: 5,
    time: "il y a 10 mois",
    text: "Plombier très réactif, qui fournit un travail de qualité ! Je recommande +++",
  },
  {
    author: "Laura De Stefano",
    rating: 5,
    time: "il y a 10 mois",
    text: "Excellent service, très professionnel.",
  },
  {
    author: "Bizz Academy",
    rating: 5,
    time: "il y a 3 semaines",
    text: "⭐⭐⭐⭐⭐",
  },
  {
    author: "Pierre Bourguignon",
    rating: 5,
    time: "il y a 2 mois",
    text: "C'est la deuxième fois que je fais appel à ce professionnel de la plomberie.\nRapidité, efficacité, prix correctes… et en plus il est sympa.\n\nPour mes travaux… ce sera toujours lui.",
  },
  {
    author: "Gaelle Palandri",
    rating: 5,
    time: "il y a 4 mois",
    text: "Jeremy est un artisan très sérieux, qui m'a accompagnée dans mon projet de rénovation d'une petite salle de bain. Il est de très bons conseils et a pris le temps de bien comprendre le projet pour m'aiguiller, même sur des sujets qui ne concernaient pas directement la salle de bain.\nLe défi était de taille étant donné qu'on était dans un vieil immeuble de 1789: les murs n'étaient pas droits et s'effritaient, l'ancienne plomberie semblait un peu douteuse... Mais lui et son équipe ont réussi à donner vie à mon projet !\nJe tiens aussi à souligner que c'est une personne très honnête, qui ne pousse pas à la consommation et est disponible. Je suis vraiment contente qu'on me l'ait conseillé (bouche-à-oreille), je le recommande vivement !",
  },
];

const overallRating = 5.0;
const totalReviews = 13;

const reviewUrl = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;
const allReviewsUrl = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4" fill={i <= rating ? "#f59e0b" : "#e2e8f0"} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const MAX_CHARS = 180;

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > MAX_CHARS;

  return (
    <p className="text-slate-600 text-sm leading-relaxed flex-1">
      {isLong && !expanded ? text.slice(0, MAX_CHARS).trimEnd() + "…" : text}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-1 font-semibold hover:underline"
          style={{ color: "#3bc9f5" }}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </p>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  const colors = ["#3bc9f5", "#b8762a", "#4a7fa8", "#6b8fa8", "#a07840"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

export default function GoogleReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24" style={{ backgroundColor: "#f0f7ff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-bold text-sm uppercase tracking-widest mb-3" style={{ color: "#b8762a" }}>
            Avis clients
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "#1a1a2e" }}>
            Ce que disent nos clients ⭐
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-7 h-7" fill="#f59e0b" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-extrabold" style={{ color: "#1a1a2e" }}>
              {overallRating.toFixed(1)}
            </span>
            <span className="text-slate-500 text-sm">({totalReviews} avis Google)</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md border-2 flex items-center justify-center transition-transform hover:scale-110"
            style={{ borderColor: "#b8d8f8" }}
            aria-label="Précédent"
          >
            <ChevronLeft size={22} style={{ color: "#3bc9f5" }} />
          </button>

          {/* Next button */}
          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md border-2 flex items-center justify-center transition-transform hover:scale-110"
            style={{ borderColor: "#b8d8f8" }}
            aria-label="Suivant"
          >
            <ChevronRight size={22} style={{ color: "#3bc9f5" }} />
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex gap-5">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 border-2 flex flex-col gap-3 flex-shrink-0"
                  style={{
                    borderColor: "#b8d8f8",
                    flex: "0 0 calc(33.333% - 14px)",
                    minWidth: "280px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={review.author} />
                    <div>
                      <p className="font-bold text-sm text-slate-900">{review.author}</p>
                      <p className="text-xs text-slate-400">{review.time}</p>
                    </div>
                  </div>

                  <Stars rating={review.rating} />

                  <ReviewText text={review.text} />

                  <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs text-slate-400">Avis Google</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href={allReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-full border-2 transition-transform hover:scale-105"
            style={{ color: "#3bc9f5", borderColor: "#3bc9f5" }}
          >
            Voir tous les avis Google
          </a>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-4 rounded-full transition-transform hover:scale-105 shadow-md"
            style={{ backgroundColor: "#b8762a" }}
          >
            ✍️ Laisser un avis
          </a>
        </div>

      </div>
    </section>
  );
}
