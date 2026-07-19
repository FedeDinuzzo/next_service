import type { Metadata } from "next";
import styles from "../constants/style";
import { getLocationsByZone } from "../constants";
import { SITE } from "../constants/site";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import ZonesStructuredData from "../components/structuredData/ZonesStructuredData";
import ZonasSearch from "../components/ZonasSearch";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: `▹ Zonas de Atención ${SITE.brand} | Service Técnico a Domicilio`,
  description: `Encontrá tu localidad y conocé el service técnico de heladeras y lavarropas ${SITE.brand} más cercano. Cobertura en CABA, Zona Sur y Zona Norte.`,
  alternates: {
    canonical: `${SITE.domain}/zonas`,
  },
  keywords: [
    "zonas de atencion",
    "ubicaciones",
    "servicio tecnico a domicilio",
    "reparacion de heladeras cerca",
    "reparacion de lavarropas cerca",
    SITE.brand.toLowerCase(),
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: `${SITE.domain}/zonas`,
    title: `Zonas de atención ${SITE.brand}`,
    description: `Cobertura de service técnico ${SITE.brand} por localidad: heladeras y lavarropas a domicilio.`,
    siteName: SITE.legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: `Zonas de atención ${SITE.brand}`,
    description: `Cobertura de service técnico ${SITE.brand} por localidad.`,
  },
};

const zoneGroups = getLocationsByZone();
const totalLocations = zoneGroups.reduce(
  (acc, group) => acc + group.locations.length,
  0,
);

function ZonasPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: `${SITE.domain}/` },
          { name: "Ubicaciones", item: `${SITE.domain}/zonas` },
        ]}
      />
      <ZonesStructuredData />
      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <Reveal variant="title">
            <section
              className={`${styles.paddingX} ${styles.paddingY} pt-16 md:pt-24 pb-4`}
            >
              <div className="max-w-[760px] mx-auto text-center">
                <div className="flex justify-center mb-5">
                  <span
                    className="flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_24px_rgba(10,27,111,0.28)]"
                    style={{ background: SITE.gradient }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fill="#ffffff"
                        d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5Z"
                      />
                    </svg>
                  </span>
                </div>
                <h1 className={styles.heading2}>
                  Servicio técnico de heladeras y lavarropas en{" "}
                  <span className="text-gradient">
                    Zona Sur, Zona Norte y CABA
                  </span>
                </h1>
                <p className={`${styles.paragraph} mt-5 max-w-[560px] mx-auto`}>
                  Elegí tu localidad para ver tiempos de atención, servicios
                  disponibles y contacto directo. Atendemos {totalLocations}{" "}
                  localidades de Capital Federal, Zona Sur y Zona Norte.
                </p>
              </div>
            </section>
          </Reveal>

          <ZonasSearch groups={zoneGroups} />

          <CTA />
        </div>
      </div>
    </>
  );
}

export default ZonasPage;
