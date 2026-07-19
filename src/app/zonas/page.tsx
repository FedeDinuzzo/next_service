import type { Metadata } from "next";
import styles from "../constants/style";
import { getLocationsByZone } from "../constants";
import { SITE } from "../constants/site";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import ZonesStructuredData from "../components/structuredData/ZonesStructuredData";
import ZonasSearch from "../components/ZonasSearch";
import CTA from "../components/CTA";

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
          <section
            className={`${styles.paddingX} ${styles.paddingY} pt-16 md:pt-24`}
          >
            <div className="max-w-[900px] mx-auto text-center md:text-left">
              <h1 className={styles.heading2}>
                Servicio técnico de heladeras y lavarropas en Zona Sur, Zona
                Norte y CABA
              </h1>
              <p className={`${styles.paragraph} mt-5`}>
                Elegí tu localidad para ver tiempos de atención, servicios
                disponibles y contacto directo. Atendemos {totalLocations}{" "}
                localidades de Capital Federal, Zona Sur y Zona Norte.
              </p>
            </div>
          </section>

          <ZonasSearch groups={zoneGroups} />

          <CTA />
        </div>
      </div>
    </>
  );
}

export default ZonasPage;
