import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2C3033",
        borderRadius: 40
      }}
    >
      <span
        style={{
          fontSize: 96,
          fontWeight: 700,
          color: "#F9F9F8",
          letterSpacing: "-0.04em"
        }}
      >
        L
      </span>
    </div>,
    { ...size }
  );
}
