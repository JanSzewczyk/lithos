import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 18,
        fontWeight: 600,
        background: "#2C3033",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#F9F9F8",
        borderRadius: 8
      }}
    >
      L
    </div>,
    { ...size }
  );
}
