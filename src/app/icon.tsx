import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon provisoire aux couleurs de la marque.
// ⚠️ À remplacer par le vrai logo du client dès réception.
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(140deg, #ff2e88, #d0196e)",
          color: "#fff",
          fontSize: 32,
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: -1,
        }}
      >
        CV
      </div>
    ),
    size
  );
}
