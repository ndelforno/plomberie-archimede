"use client";

import { useEffect } from "react";
import React from "react";

// HOW TO ACTIVATE THIS WIDGET:
// 1. Go to https://behold.so and create a free account
// 2. Click "Add feed" → connect @plomberie.archimede Instagram account (OAuth)
// 3. Customise the layout (grid, number of posts, etc.)
// 4. Click "Get embed code" → copy the feed ID (looks like: AbCdEfGhIjKl)
// 5. Replace BEHOLD_FEED_ID below with your actual feed ID

const BEHOLD_FEED_ID = "qkEWzblPa9AmtlmpzgY2";

const isConfigured = BEHOLD_FEED_ID.length > 0;

export default function InstagramFeed() {
  useEffect(() => {
    if (isConfigured && !document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://w.behold.so/widget.js";
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section id="instagram" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-bold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#b8762a" }}
          >
            Suivez-nous
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl mb-4"
            style={{ color: "#1a1a2e" }}
          >
            Nos dernières réalisations 📸
          </h2>
          <a
            href="https://www.instagram.com/plomberie.archimede"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:underline"
            style={{ color: "#3bc9f5" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @plomberie.archimede
          </a>
        </div>

        {/* Widget or placeholder */}
        {isConfigured ? (
          <div className="rounded-3xl overflow-hidden" style={{ minHeight: "500px" }}>
            {/* @ts-expect-error custom element */}
            <behold-widget feed-id={BEHOLD_FEED_ID} style={{ "--behold-columns": "4", "--behold-gap": "8px" } as React.CSSProperties} />
          </div>
        ) : (
          /* Placeholder shown until Behold is configured */
          <div
            className="rounded-3xl border-2 border-dashed p-12 text-center"
            style={{ borderColor: "#3bc9f5", backgroundColor: "#f0fbff" }}
          >
            <div className="text-5xl mb-4">📱</div>
            <h3 className="font-display text-xl mb-2" style={{ color: "#1a1a2e" }}>
              Flux Instagram en cours de configuration
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              Les dernières publications d&apos;Instagram apparaîtront ici automatiquement
              une fois le widget activé.
            </p>
            <a
              href="https://www.instagram.com/plomberie.archimede"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-transform hover:scale-105"
              style={{ backgroundColor: "#3bc9f5" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Voir sur Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
