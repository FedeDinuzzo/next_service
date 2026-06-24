import Hero from "../components/Hero";
import styles, { layout } from "../constants/style";
import Image from "next/image";
import type { Metadata } from "next";
import blueGradient from "../../public/blueGradient.svg";
import ContactStructuredData from "../components/structuredData/ContactoStructuredData";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import { FaPhoneAlt } from "react-icons/fa";
import ImmediateAttentionBadge from "../components/ImmediateAttentionBadge";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contacto | Servicio Técnico Electrolux | Pedir Presupuesto",
  description:
    "Comunicate con nuestro servicio técnico especializado Electrolux. Solicitá tu presupuesto o visita técnica a domicilio por WhatsApp o teléfono hoy mismo.",
  alternates: {
    canonical: "https://service-electrolux.ar/contacto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://service-electrolux.ar/contacto",
    title: "▹ Service ELECTROLUX ✓ Contacto",
    description:
      "Ingresá y contactanos, agentes ELECTROLUX disponibles ✓ EN EL DÍA - Servicio Técnico de heladeras y lavarropas Electrolux",
    siteName: "Service Electrolux contacto",
    images: [
      {
        url: "https://service-electrolux.ar/contacto/opengraph-image.jpg",
        width: 600,
        height: 600,
        type: "image/jpeg",
        alt: "Service Electrolux contacto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title: "▹ Service ELECTROLUX ✓ Contacto",
    description:
      "Ingresá y contactanos, agentes ELECTROLUX disponibles ✓ EN EL DÍA - Servicio Técnico de heladeras y lavarropas Electrolux",
    images: [
      {
        url: "https://service-electrolux.ar/contacto/opengraph-image.jpg",
        width: 600,
        height: 600,
        alt: "Service Electrolux contacto",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#f8fafc",
};

function contacto() {
  return (
    <div className={`${styles.flexStart} contacto-page`}>
      <ContactStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: "https://service-electrolux.ar/" },
          { name: "Contacto", item: "https://service-electrolux.ar/contacto" },
        ]}
      />
      <div className={`${styles.boxWidth}`}>
        <Hero
          textOne="URGENCIAS"
          textTwo="POR"
          textThree="WHATSAPP"
          titleOne="Contactanos"
          titleTwo="Y Resolvemos"
          titleThree="Tu Problema"
          descriptionMobile="Contactanos para servicio técnico Electrolux en CABA y Buenos Aires."
          descriptionDesktop="Contactá al servicio técnico Electrolux en CABA y Buenos Aires. Atendemos urgencias en el día y coordinamos visita a domicilio."
          img={""}
          ruta={0}
        />
        <div
          className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pb-[100px] md:pb-24 lg:pb-0`}
        >
          <Image
            src={blueGradient}
            className="rotate-180 absolute z-[0] w-[80%] h-[80%] left-0 md:-left-80 rounded-r-full"
            alt="pink gradient"
          />
          <div className={`${styles.boxWidth} flex flex-col items-center`}>
            <section
              id="product"
              className={`${layout.sectionReverse} -mt-20 md:-mt-4 lg:-mt-8 w-full items-center text-center md:items-start md:text-left`}
            >
              <div className="z-[10] flex-1 flex items-center justify-center md:items-start md:justify-start">
                <div className="relative w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[360px] pl-2 sm:pl-0">
                  <div className="contact-orbit contact-orbit-lg" />
                  <div className="contact-orbit contact-orbit-md" />
                  <div className="contact-orbit contact-orbit-sm" />

                  <div className="contact-call-card absolute left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 lg:-left-6 top-24 sm:top-6 lg:px-8 lg:py-5 text-center sm:text-left items-center sm:items-start">
                    <div className="text-[#ffffff] font-poppins font-semibold text-[28px] sm:text-[30px] leading-[34px]">
                      Llámenos
                    </div>
                    <div className="text-[#dfe9ff] font-poppins text-[15px] leading-[22px]">
                      Líneas disponibles
                    </div>
                  </div>

                  <Link
                    href="/#wpp-form"
                    className="absolute left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 md:left-28 lg:left-48 bottom-2 sm:bottom-6"
                  >
                    <ImmediateAttentionBadge />
                  </Link>
                </div>
              </div>

              <div
                className={`${layout.sectionImgReverse} items-center md:items-start`}
              >
                <Reveal
                  variant="card"
                  className="flex flex-col items-center md:items-start sm:w-[100%] my-12 mb-20 lg:mb-44 z-[10]"
                >
                  <a
                    href="tel:1143838283"
                    className="js-track-call"
                    data-track-label="contact_phone_1"
                  >
                    <div
                      className={`flex flex-row p-6 lg:ml-12 w-[340px] sm:w-auto max-w-[470px] rounded-[20px] feature-card-set sm:ml-0`}
                    >
                      <div
                        className={`w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full ${styles.flexCenter} bg-blue-gradient ring-1 ring-white/20`}
                      >
                        <FaPhoneAlt
                          className="text-primary text-[22px] md:text-[26px]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 flex flex-col ml-2 md:ml-6 pt-2 align-center">
                        <h2 className="whitespace-nowrap font-poppins font-semibold text-white text-[28px] lg:text-[36px] leading-[23px] mb-1">
                          011 4383-8283
                        </h2>
                        <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">
                          Haz click para llamar
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:1143828369"
                    className="js-track-call"
                    data-track-label="contact_phone_2"
                  >
                    <div
                      className={`flex flex-row p-6 lg:ml-12 mt-4 w-[340px] sm:w-auto max-w-[470px] rounded-[20px] feature-card-set sm:ml-0`}
                    >
                      <div
                        className={`w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full ${styles.flexCenter} bg-blue-gradient ring-1 ring-white/20`}
                      >
                        <FaPhoneAlt
                          className="text-primary text-[22px] md:text-[26px]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 flex flex-col ml-2 md:ml-6 pt-2 align-center">
                        <h2 className="whitespace-nowrap font-poppins font-semibold text-white text-[28px] lg:text-[36px] leading-[23px] mb-1">
                          011 4382-8369
                        </h2>
                        <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">
                          Haz click para llamar
                        </p>
                      </div>
                    </div>
                  </a>
                </Reveal>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contacto;
