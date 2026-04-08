"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera } from "lucide-react";

// Replace these with real photos from @plomberie.archimede
// Place images in /public/images/ and update the src paths below.
// Recommended: download 6–9 photos from Instagram and name them photo-1.jpg, photo-2.jpg, etc.
const photos = [
  {
    src: "https://picsum.photos/seed/plomb1/800/600",
    alt: "Réalisation plomberie 1",
    thumb: "https://picsum.photos/seed/plomb1/400/300",
  },
  {
    src: "https://picsum.photos/seed/plomb2/800/600",
    alt: "Réalisation plomberie 2",
    thumb: "https://picsum.photos/seed/plomb2/400/300",
  },
  {
    src: "https://picsum.photos/seed/plomb3/800/600",
    alt: "Réalisation plomberie 3",
    thumb: "https://picsum.photos/seed/plomb3/400/300",
  },
  {
    src: "https://picsum.photos/seed/plomb4/800/600",
    alt: "Réalisation plomberie 4",
    thumb: "https://picsum.photos/seed/plomb4/400/300",
  },
  {
    src: "https://picsum.photos/seed/plomb5/800/600",
    alt: "Réalisation plomberie 5",
    thumb: "https://picsum.photos/seed/plomb5/400/300",
  },
  {
    src: "https://picsum.photos/seed/plomb6/800/600",
    alt: "Réalisation plomberie 6",
    thumb: "https://picsum.photos/seed/plomb6/400/300",
  },
];

const slides = photos.map((p) => ({ src: p.src, alt: p.alt }));

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  function openAt(index: number) {
    setPhotoIndex(index);
    setLightboxOpen(true);
  }

  return (
    <section id="realisations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nos réalisations
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-4">
            Notre travail en images
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Découvrez quelques-unes de nos réalisations. Retrouvez-nous également sur{" "}
            <a
              href="https://www.instagram.com/plomberie.archimede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              @plomberie.archimede
            </a>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openAt(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Image
                src={photo.thumb}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                <Camera
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Instagram link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/plomberie.archimede"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-medium px-6 py-3 rounded-xl transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Voir plus sur Instagram
          </a>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </section>
  );
}
