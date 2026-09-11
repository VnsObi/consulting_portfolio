import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Evans Obi — Technical Architect & Engineering Leader";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            marginBottom: 32,
            opacity: 0.65,
            textTransform: "uppercase",
            letterSpacing: "4px",
            fontWeight: 600,
          }}
        >
          Evans Obi
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.15,
            fontWeight: 700,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Technical Architect &amp;</span>
          <span>Engineering Leader</span>
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 48,
            opacity: 0.6,
            fontWeight: 400,
          }}
        >
          Systems · Infrastructure · Security · Product
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
