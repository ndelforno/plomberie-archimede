import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Plomberie Archimède — Plombier à Valbonne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #e8f3ff 0%, #ffffff 50%, #fdf5e8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            background: "#3bc9f5",
            color: "white",
            borderRadius: "999px",
            padding: "10px 28px",
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "32px",
            letterSpacing: "0.05em",
          }}
        >
          📍 Valbonne · Côte d'Azur
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "baseline",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "80px", fontWeight: 900, color: "#3bc9f5" }}>
            Plomberie
          </span>
          <span style={{ fontSize: "80px", fontWeight: 900, color: "#b8762a", fontStyle: "italic" }}>
            Archimède
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#b8762a",
            marginBottom: "40px",
            fontStyle: "italic",
          }}
        >
          👑 Le plombier des rois, le roi des plombiers 👑
        </div>

        {/* Services pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["🚨 Urgences 7j/7", "🔧 Plomberie générale", "📋 Devis gratuit"].map((s) => (
            <div
              key={s}
              style={{
                background: "white",
                border: "2px solid #e2e8f0",
                borderRadius: "16px",
                padding: "12px 24px",
                fontSize: "22px",
                color: "#1a1a2e",
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
