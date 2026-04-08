const badges = [
  { emoji: "⚡", title: "Réactivité", description: "On intervient vite, parce que votre temps est précieux." },
  { emoji: "🏅", title: "Qualité", description: "Matériaux pro, finitions soignées, travaux garantis." },
  { emoji: "📍", title: "Local", description: "Basé à Valbonne, on connaît le coin comme notre poche." },
  { emoji: "😊", title: "Satisfaction", description: "Un client content, c'est notre plus belle récompense." },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className="font-bold text-sm uppercase tracking-widest mb-3"
              style={{ color: "#b8762a" }}
            >
              À propos
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl mb-6"
              style={{ color: "#1a1a2e" }}
            >
              Le roi des plombiers, à votre service ! 👑
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Plomberie Archimède, c&apos;est <strong>votre artisan plombier de confiance</strong>,
                installé à Valbonne au cœur de la Côte d&apos;Azur. Particuliers,
                professionnels, copropriétés — on intervient pour tout le monde avec
                le même sérieux et la même bonne humeur.
              </p>
              <p>
                Du robinet qui goutte à la salle de bain clé en main, en passant
                par le chauffe-eau en rade un dimanche soir — on est là ! Rapidement,
                efficacement, et toujours avec le sourire.
              </p>
              <p>
                Retrouvez nos réalisations sur Instagram{" "}
                <a
                  href="https://www.instagram.com/plomberie.archimede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: "#3bc9f5" }}
                >
                  @plomberie.archimede
                </a>{" "}
                🔨
              </p>
            </div>
          </div>

          {/* Badges grid */}
          <div className="grid grid-cols-2 gap-5">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="rounded-2xl p-6 border-2 transition-transform hover:-translate-y-1"
                style={{ borderColor: "#b8d8f8", backgroundColor: "#f0f7ff" }}
              >
                <div className="text-4xl mb-3">{badge.emoji}</div>
                <h3
                  className="font-extrabold mb-1"
                  style={{ color: "#3bc9f5" }}
                >
                  {badge.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
