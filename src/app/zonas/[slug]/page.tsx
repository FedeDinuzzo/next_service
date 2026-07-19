import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../constants/style";
import {
  getLocationBySlug,
  getLocations,
  getNearbyLocations,
  locationIntro,
  locationFaqItems,
  authorizedServices,
} from "../../constants";
import { SITE } from "../../constants/site";
import Hero from "../../components/Hero";
import Heladeras from "../../components/Heladeras";
import Lavarropas from "../../components/Lavarropas";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import Reveal from "../../components/Reveal";
import Button from "../../components/animations/Button";
import LocationWhatsAppCTA from "../../components/LocationWhatsAppCTA";
import LocationStructuredData from "../../components/structuredData/LocationStructuredData";
import FaqStructuredData from "../../components/structuredData/FaqStructuredData";
import BreadcrumbStructuredData from "../../components/structuredData/BreadcrumbStructuredData";

type PageParams = { slug: string };

export function generateStaticParams() {
  return getLocations().map((location) => ({ slug: location.slug }));
}

// Lista fija de 73 localidades: cualquier slug fuera de generateStaticParams
// debe devolver 404 real, no renderizarse on-demand.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const title = `Servicio Técnico de Heladeras y Lavarropas en ${location.name} | ${SITE.brand}`;
  const description = `¿Se rompió tu heladera o lavarropas ${SITE.brand} en ${location.name}? Técnicos a domicilio en ${location.zoneTitle}, presupuesto sin cargo y garantía escrita.`;
  const pageUrl = `${SITE.domain}/zonas/${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    keywords: [
      `servicio tecnico de heladeras en ${location.name.toLowerCase()}`,
      `reparacion de lavarropas en ${location.name.toLowerCase()}`,
      `tecnico de heladeras ${location.name.toLowerCase()}`,
      SITE.brand.toLowerCase(),
      location.zoneTitle.toLowerCase(),
    ],
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: pageUrl,
      title,
      description,
      siteName: SITE.legalName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ZonaLocationPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearby = getNearbyLocations(location.slug, 8);
  const faqItems = locationFaqItems(location);
  const pageUrl = `${SITE.domain}/zonas/${location.slug}`;

  return (
    <>
      <LocationStructuredData location={location} />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: `${SITE.domain}/` },
          { name: "Ubicaciones", item: `${SITE.domain}/zonas` },
          { name: location.name, item: pageUrl },
        ]}
      />
      <FaqStructuredData pageUrl={pageUrl} items={faqItems} />

      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="A DOMICILIO"
            titleOne="Service"
            titleTwo={SITE.brand}
            titleThree={`en ${location.name}`}
            descriptionMobile={`Service de heladeras y lavarropas ${SITE.brand} en ${location.name}.`}
            descriptionDesktop={locationIntro(location)}
            img={1}
            ruta={1}
            showBadge={false}
          />

          <section
            className={`${styles.paddingX} pb-8 relative z-10 ss:mt-56 sm:mt-8 lg:-mt-20 xl:mt-0`}
          >
            <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
              <LocationWhatsAppCTA
                locationName={location.name}
                zoneTitle={location.zoneTitle}
                className="w-full sm:w-auto"
              />
              <a
                href={`tel:${SITE.phonePrimaryTel}`}
                className="js-track-call w-full sm:w-auto inline-flex items-center justify-center rounded-[14px] px-6 py-3 font-poppins font-semibold border border-secondary/20 transition hover:bg-secondary/5"
                style={{ color: SITE.ink }}
                data-track-label={`location_${location.slug}_call`}
              >
                Llamar {SITE.phonePrimaryDisplay}
              </a>
            </div>
          </section>

          <Heladeras
            title={
              <>
                Reparación de <br className="sm:block hidden" />
                Heladeras en {location.name}
              </>
            }
            description={`Servicio técnico especializado en heladeras ${SITE.brand} en ${location.name}, ${location.zoneTitle}. Diagnóstico rápido y repuestos originales a domicilio.`}
          />

          <Lavarropas
            title={
              <>
                Reparación de <br className="sm:block hidden" />
                Lavarropas en {location.name}
              </>
            }
            description={`Servicio técnico especializado en lavarropas ${SITE.brand} en ${location.name}, ${location.zoneTitle}. Reparación en el día con garantía escrita.`}
          />

          <FAQ
            title={`Preguntas frecuentes sobre service en ${location.name}`}
            subtitle="Service, repuestos y garantía en tu zona"
            items={faqItems}
          />

          <div className="lg:mt-12 lg:mb-36">
            <Testimonials />
          </div>

          <Reveal variant="heavy">
            <section className={`${styles.paddingX} py-12`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  id="solicitarTecnico"
                  className={`md:col-span-2 z-[10] ${styles.flexCenter} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow w-full sm:flex-row flex-col`}
                >
                  <div className="flex-1 flex flex-col text-center md:text-left mt-5 md:mt-0">
                    <h2 className={styles.heading2}>Solicita un Service Hoy!</h2>
                    <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
                      Nuestros representantes están disponibles. Cuéntenos su
                      problema y con gusto le ayudaremos.
                    </p>
                  </div>
                  <div
                    className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mb-4 md:mb-0`}
                  >
                    <Button
                      href={`tel:${SITE.phonePrimaryTel}`}
                      text="Llamada telefónica"
                      className="js-track-call"
                      data-track-label="cta_call"
                    />
                  </div>
                </div>

                <div className="feature-card-set rounded-[20px] p-6">
                  <p
                    className="font-poppins font-semibold text-[16px] mb-4"
                    style={{ color: SITE.ink }}
                  >
                    Marcas que atendemos
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/"
                      className="col-span-2 rounded-[12px] px-4 py-2.5 text-center text-[13px] font-poppins font-semibold text-white transition hover:opacity-90"
                      style={{ background: SITE.gradient }}
                    >
                      {SITE.legalName}
                    </Link>
                    {authorizedServices.map((service) => (
                      <a
                        key={service.id}
                        href={service.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-[12px] border border-secondary/20 px-3 py-2.5 text-center text-[13px] font-poppins font-semibold text-secondary transition hover:bg-secondary/5"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>

                {nearby.length > 0 ? (
                  <div className="feature-card-set rounded-[20px] p-6">
                    <p
                      className="font-poppins font-semibold text-[16px] mb-4"
                      style={{ color: SITE.ink }}
                    >
                      Zonas cercanas a {location.name}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {nearby.map((nearbyLocation) => (
                        <Link
                          key={nearbyLocation.slug}
                          href={`/zonas/${nearbyLocation.slug}`}
                          className="rounded-[12px] border border-secondary/20 px-3 py-2.5 text-center text-[13px] font-poppins font-semibold text-secondary transition hover:bg-secondary/5 hover:scale-[1.02]"
                        >
                          {nearbyLocation.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </>
  );
}
