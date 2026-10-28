"use client";

import { useActionState, useEffect, useRef } from "react";
import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#f0f7ff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-bold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#b8762a" }}
          >
            On vous répond vite !
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl mb-4"
            style={{ color: "#1a1a2e" }}
          >
            Demandez votre devis gratuit 📋
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Décrivez votre problème ou votre projet — on revient vers vous rapidement.
            Sans engagement, c&apos;est promis !
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-extrabold text-lg" style={{ color: "#1a1a2e" }}>
              Nous contacter directement
            </h3>

            <a
              href="tel:+33685286520"
              className="flex items-center gap-3 text-slate-700 hover:text-[#3bc9f5] transition-colors group"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#dceeff" }}
              >
                <Phone size={18} style={{ color: "#3bc9f5" }} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                  Téléphone
                </p>
                <p className="font-bold">06 85 28 65 20</p>
              </div>
            </a>

            <a
              href="mailto:plomberiearchimede@gmail.com"
              className="flex items-center gap-3 text-slate-700 hover:text-[#3bc9f5] transition-colors group"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#dceeff" }}
              >
                <Mail size={18} style={{ color: "#3bc9f5" }} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                  Email
                </p>
                <p className="font-bold">plomberiearchimede@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/plomberie.archimede"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-700 hover:text-[#3bc9f5] transition-colors group"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#dceeff" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px]"
                  fill="#3bc9f5"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                  Instagram
                </p>
                <p className="font-bold">@plomberie.archimede</p>
              </div>
            </a>

            {/* Urgency card */}
            <div
              className="rounded-3xl p-6 text-white mt-4"
              style={{ backgroundColor: "#b8762a" }}
            >
              <p className="text-xl mb-1">🚨</p>
              <h4 className="font-extrabold mb-2">Urgence plomberie ?</h4>
              <p className="text-amber-100 text-sm mb-4">
                Ne perdez pas une seconde — appelez directement, on arrive !
              </p>
              <a
                href="tel:+33685286520"
                className="inline-flex items-center gap-2 bg-white font-bold px-4 py-2.5 rounded-full text-sm hover:bg-red-50 transition-colors"
                style={{ color: "#b8762a" }}
              >
                <Phone size={16} />
                Appeler maintenant
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl border-2 p-8 shadow-sm" style={{ borderColor: "#b8d8f8" }}>
            {state.status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#e6f9ee" }}
                >
                  <CheckCircle size={32} style={{ color: "#22a855" }} />
                </div>
                <h3 className="text-xl font-extrabold mb-2" style={{ color: "#1a1a2e" }}>
                  Message envoyé ! 🎉
                </h3>
                <p className="text-slate-500 mb-6">
                  On a bien reçu votre demande et on vous recontacte très vite !
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="font-semibold hover:underline text-sm"
                  style={{ color: "#3bc9f5" }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form ref={formRef} action={formAction} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Nom complet <span style={{ color: "#b8762a" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full border-2 border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3bc9f5] transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Téléphone <span style={{ color: "#b8762a" }}>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="06 85 28 65 20"
                      className="w-full border-2 border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3bc9f5] transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-slate-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    className="w-full border-2 border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3bc9f5] transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-bold text-slate-700 mb-1.5"
                  >
                    Type de demande <span style={{ color: "#b8762a" }}>*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full border-2 border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#3bc9f5] transition bg-white"
                  >
                    <option value="">Sélectionnez…</option>
                    <option value="urgence">🚨 Urgence</option>
                    <option value="devis">📋 Demande de devis</option>
                    <option value="entretien">🔧 Entretien / maintenance</option>
                    <option value="autre">💬 Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-700 mb-1.5"
                  >
                    Décrivez votre besoin <span style={{ color: "#b8762a" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre problème ou votre projet…"
                    className="w-full border-2 border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3bc9f5] transition resize-none"
                  />
                </div>

                {state.status === "error" && (
                  <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    Une erreur s&apos;est produite. Veuillez réessayer ou nous appeler directement.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full flex items-center justify-center gap-2 text-white font-extrabold px-6 py-4 rounded-full transition-transform hover:scale-[1.02] disabled:opacity-60"
                  style={{ backgroundColor: "#b8762a" }}
                >
                  {pending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer ma demande !
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Réponse sous 24h · Devis 100% gratuit et sans engagement 😊
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
