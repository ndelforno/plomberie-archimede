import { MapPin } from "lucide-react";

const zones = [
  { name: "Valbonne", primary: true },
  { name: "Sophia Antipolis", primary: true },
  { name: "Antibes", primary: true },
  { name: "Mougins", primary: true },
  { name: "Grasse", primary: true },
  { name: "Biot", primary: false },
  { name: "Vallauris", primary: false },
  { name: "Cannes", primary: false },
  { name: "Le Cannet", primary: false },
  { name: "Cagnes-sur-Mer", primary: false },
  { name: "Roquefort-les-Pins", primary: false },
  { name: "Châteauneuf-Grasse", primary: false },
];

export default function ZoneIntervention() {
  return (
    <section id="zone" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-bold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#b8762a" }}
          >
            Secteur d&apos;intervention
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl mb-4"
            style={{ color: "#1a1a2e" }}
          >
            On intervient près de chez vous 📍
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Plomberie Archimède intervient sur Valbonne et toute la région de Sophia Antipolis jusqu&apos;à Cannes et Grasse.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden border-2 shadow-sm" style={{ borderColor: "#b8d8f8" }}>
            <iframe
              title="Zone d'intervention Plomberie Archimède"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d90000!2d7.0059!3d43.6408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* City list */}
          <div>
            <h3 className="font-extrabold text-lg mb-6" style={{ color: "#1a1a2e" }}>
              Communes desservies
            </h3>
            <div className="flex flex-wrap gap-3">
              {zones.map((zone) => (
                <span
                  key={zone.name}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={
                    zone.primary
                      ? { backgroundColor: "#dceeff", borderColor: "#3bc9f5", color: "#1a6a8a" }
                      : { backgroundColor: "#f8f8f8", borderColor: "#e2e8f0", color: "#64748b" }
                  }
                >
                  <MapPin size={13} />
                  {zone.name}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Vous n&apos;êtes pas dans la liste ? Contactez-nous — on intervient dans toutes les Alpes-Maritimes.
            </p>
            <a
              href="tel:+33685286520"
              className="mt-6 inline-flex items-center gap-2 text-white font-extrabold px-6 py-3 rounded-full transition-transform hover:scale-[1.02] shadow-md"
              style={{ backgroundColor: "#b8762a" }}
            >
              <MapPin size={16} />
              Vérifier ma zone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
