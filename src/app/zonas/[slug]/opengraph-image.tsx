import { ImageResponse } from "next/og";
import { getLocationBySlug } from "../../constants";
import { SITE } from "../../constants/site";

export const alt = "Servicio técnico de heladeras y lavarropas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { slug: string };

export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  const name = location?.name ?? "tu zona";
  const zoneTitle = location?.zoneTitle ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: SITE.gradient,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            color: "rgba(255,255,255,0.75)",
            marginBottom: 24,
          }}
        >
          SERVICE {SITE.brand.toUpperCase()} · A DOMICILIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Heladeras y lavarropas en {name}
        </div>
        {zoneTitle ? (
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "rgba(255,255,255,0.85)",
              marginTop: 24,
            }}
          >
            {zoneTitle}
          </div>
        ) : null}
      </div>
    ),
    { ...size },
  );
}
