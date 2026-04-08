"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#instagram", label: "Réalisations" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + tagline */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Plomberie Archimède"
              width={72}
              height={72}
              className="object-contain"
              priority
            />
            <span
              className="hidden lg:block text-xs font-semibold italic leading-tight max-w-[140px]"
              style={{ color: "#3bc9f5" }}
            >
              Le plombier des rois,<br />le roi des plombiers
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-600 hover:text-[#3bc9f5] text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm"
              style={{ backgroundColor: "#b8762a" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#9c6020")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8762a")
              }
            >
              Devis gratuit !
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: "#3bc9f5" }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-700 font-medium border-b border-slate-100 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-white font-bold px-4 py-3 rounded-full transition-colors"
            style={{ backgroundColor: "#b8762a" }}
          >
            Devis gratuit !
          </a>
        </div>
      )}
    </header>
  );
}
