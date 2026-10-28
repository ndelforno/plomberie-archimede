const services = [
  {
    emoji: "🚨",
    bgColor: "#fdf5e8",
    borderColor: "#e8c98a",
    accentColor: "#b8762a",
    title: "Dépannage d'urgence",
    description:
      "Fuite d'eau, canalisation bouchée, dégât des eaux ? On rapplique dare-dare pour limiter les dégâts !",
    features: [
      "Fuites et canalisations bouchées",
      "Dégâts des eaux",
      "Coupure d'eau d'urgence",
    ],
  },
  {
    emoji: "🔧",
    bgColor: "#f0f7ff",
    borderColor: "#b8d8f8",
    accentColor: "#3bc9f5",
    title: "Plomberie générale",
    description:
      "Robinetterie, sanitaires, salle de bain clé en main ou simple entretien — on gère tout avec le sourire.",
    features: [
      "Robinetterie et sanitaires",
      "Salles de bain clé en main",
      "Chauffe-eau et ballons",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#f0f7ff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-bold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#b8762a" }}
          >
            Ce qu&apos;on fait
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "#1a1a2e" }}>
            Nos services 🛠️
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Du petit dépannage à la grosse rénovation, Archimède est là pour vous !
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border-2 p-8 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: service.bgColor,
                borderColor: service.borderColor,
              }}
            >
              <div className="text-5xl mb-5">{service.emoji}</div>

              <h3
                className="text-xl font-extrabold mb-3"
                style={{ color: service.accentColor }}
              >
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700 text-sm">
                    <span style={{ color: service.accentColor }}>✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block text-white font-bold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 shadow-md"
            style={{ backgroundColor: "#b8762a" }}
          >
            Je veux un devis gratuit ! 📞
          </a>
        </div>
      </div>
    </section>
  );
}
