import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const alt = `${siteConfig.legalTradeName} — restaurant de box de riz à composer à ${siteConfig.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 10% 0%, #ff2e88 0%, transparent 55%), radial-gradient(ellipse at 100% 20%, #22e0ff 0%, transparent 50%), #0b0616",
          fontFamily: "sans-serif",
          color: "#f6f0ff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22e0ff",
            fontWeight: 700,
          }}
        >
          {siteConfig.street} · {siteConfig.city}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 92, fontWeight: 900, lineHeight: 1 }}>
          Crousty Vice
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#f6f0ffcc",
          }}
        >
          Composez votre box de riz
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            gap: 16,
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <span style={{ display: "flex", padding: "12px 26px", borderRadius: 999, background: "#ff2e88", color: "#fff" }}>
            Ouvert {siteConfig.hours.short}
          </span>
          <span
            style={{
              display: "flex",
              padding: "12px 26px",
              borderRadius: 999,
              border: "2px solid #22e0ff66",
              color: "#eafcff",
            }}
          >
            Dès {siteConfig.priceFrom}
          </span>
        </div>
      </div>
    ),
    size
  );
}
