import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Evans Obi - Executive Technology Strategy";
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
          fontSize: 64,
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          fontWeight: 700,
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            marginBottom: 20,
            opacity: 0.8,
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          Consulting
        </div>
        <div style={{ lineHeight: 1.1 }}>Evans Obi</div>
        <div
          style={{ fontSize: 24, marginTop: 40, opacity: 0.6, fontWeight: 400 }}
        >
          Technology Strategy for Growing Organizations
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
