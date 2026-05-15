import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Lithos 3D — betonowy koszyczek Method Feeder";

const TAGS = ["0% ołowiu", "Druk 3D", "Made in Poland"];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        background: "#F9F9F8",
        padding: "72px 80px",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(126,161,128,0.22) 0%, transparent 70%)",
          display: "flex"
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 52 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 18,
            background: "#2C3033",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#F9F9F8",
            fontSize: 28,
            fontWeight: 700
          }}
        >
          L
        </div>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#2C3033", letterSpacing: "-0.03em" }}>
          Lithos 3D
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 14, marginBottom: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#2C3033",
            letterSpacing: "-0.04em",
            lineHeight: 1
          }}
        >
          Naturalnie
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 400,
            fontStyle: "italic",
            color: "#5F8463",
            letterSpacing: "-0.04em",
            lineHeight: 1
          }}
        >
          na dnie.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#6B7173",
          lineHeight: 1.4,
          maxWidth: 720,
          marginBottom: 52
        }}
      >
        Koszyczki Method Feeder z zbrojonego betonu. Zero ołowiu, druk 3D, produkowane w Polsce.
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {TAGS.map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 999,
              background: "#E4ECDF",
              color: "#4A6B4D",
              fontSize: 18,
              fontWeight: 600
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  );
}
