export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20"
      style={{
        background: "linear-gradient(160deg, #e8f3ff 0%, #ffffff 50%, #fff5f5 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3bc9f5 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #b8762a 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Fun badge */}
        <div
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-md"
          style={{ backgroundColor: "#3bc9f5" }}
        >
          <span>📍</span>
          Valbonne &amp; Côte d&apos;Azur
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight mb-4">
          <span style={{ color: "#3bc9f5" }}>Plomberie</span>{" "}
          <span style={{ color: "#b8762a" }}>
            Archimède
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-display text-xl sm:text-2xl mb-6 tracking-wide"
          style={{ color: "#b8762a" }}
        >
          👑 Le plombier des rois, le roi des plombiers 👑
        </p>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Fuite d&apos;eau ? Canalisation bouchée ? Rénovation complète ?<br />
          On s&apos;occupe de tout — vite, bien, et sans prise de tête !
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="text-white font-bold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#b8762a" }}
          >
            Demander un devis gratuit 🔧
          </a>
          <a
            href="#instagram"
            className="font-bold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 border-2"
            style={{ color: "#3bc9f5", borderColor: "#3bc9f5", backgroundColor: "transparent" }}
          >
            Voir nos réalisations
          </a>
        </div>

        {/* Fun stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { emoji: "⚡", value: "Urgences", label: "24h/24, 7j/7" },
            { emoji: "💬", value: "Devis", label: "Gratuit & rapide" },
            { emoji: "✅", value: "Travaux", label: "Garantis" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100"
            >
              <span className="text-3xl">{stat.emoji}</span>
              <span className="font-extrabold text-lg" style={{ color: "#3bc9f5" }}>
                {stat.value}
              </span>
              <span className="text-slate-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#f0f7ff"
          />
        </svg>
      </div>
    </section>
  );
}
