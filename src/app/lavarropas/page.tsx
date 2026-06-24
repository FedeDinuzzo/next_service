import Hero from "../components/Hero";
import styles from "../constants/style";
import tecnicoLavarropas from "../../public/Tecnico-de-lavarropas-electrolux.jpg";
import step2v from "../../public/step2v.webp";
import Image from "next/image";
import type { Metadata } from "next";
import blueGradient from "../../public/blueGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import LavarropasStructuredData from "../components/structuredData/LavarropasStructuredData";
import FaqStructuredData from "../components/structuredData/FaqStructuredData";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import FAQ from "../components/FAQ";
import { lavarropasFaqItems } from "../constants";
import ServiceHighlightsCard from "../components/ServiceHighlightsCard";
import WorkForm from "../components/WorkForm";
import Repair from "../components/Repair";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Servicio Técnico de Lavarropas Electrolux | Reparación en el Día",
  description:
    "¿Tu lavarropas Electrolux no centrifuga o pierde agua? Servicio técnico especializado a domicilio. Reparaciones en el día con repuestos y garantía escrita.",
  alternates: {
    canonical: "https://service-electrolux.ar/lavarropas",
  },
  keywords: [
    "servicio",
    "service",
    "electrolux",
    "lavarropas",
    "reparacion",
    "arreglo",
    "tecnicos",
    "asistencia",
    "capital federal",
    "zona norte",
    "zona sur",
    "servicio tecnico de lavarropas electrolux",
    "service de lavarropas electrolux",
    "reparacion de lavarropas electrolux",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://service-electrolux.ar/lavarropas",
    title: "▷ Service de Lavarropas ❄️ ELECTROLUX | Autorizado",
    description:
      "¿Se rompió tu lavarropas ELECTROLUX? ✓ Nosotros te lo reparamos EN EL DÍA - Servicio Técnico de lavarropas Electrolux",
    siteName: "Service de Lavarropas Electrolux",
    images: [
      {
        url: "https://service-electrolux.ar/lavarropas/opengraph-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Service de lavarropas Electrolux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title: "▹ Service de Lavarropas 🧺 ELECTROLUX | Autorizado",
    description:
      "¿Se rompió tu lavarropas ELECTROLUX? ✓ Nosotros te lo reparamos EN EL DÍA - Servicio Técnico de lavarropas Electrolux",
    images: [
      {
        url: "https://service-electrolux.ar/lavarropas/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Service de lavarropas Electrolux",
      },
    ],
  },
};

const serviceItems = [
  { id: "bomba", label: "Bomba y desagote" },
  { id: "centrifugado", label: "Centrifugado" },
  { id: "placa", label: "Placa y sensores" },
  { id: "motor", label: "Motor y correa" },
  { id: "carga", label: "Carga de agua" },
  { id: "puerta", label: "Bloqueo de puerta" },
];

function Lavarropas() {
  return (
    <>
      <LavarropasStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: "https://service-electrolux.ar/" },
          { name: "Lavarropas", item: "https://service-electrolux.ar/lavarropas" },
        ]}
      />
      <FaqStructuredData
        pageUrl="https://service-electrolux.ar/lavarropas"
        items={lavarropasFaqItems.slice(0, 4)}
      />
      <div className={styles.flexStart}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service de"
            titleTwo="Lavarropas"
            titleThree="Electrolux"
            descriptionMobile="Service de lavarropas Electrolux en CABA y Buenos Aires con técnicos especializados."
            descriptionDesktop="Servicio técnico de lavarropas Electrolux en CABA y Buenos Aires. Reparación en el día, repuestos originales y garantía escrita."
            img={3}
            ruta={1}
          />
          <Image
            src={pinkGradient}
            className="absolute w-[80%] h-[38%] md:w-[60%] -left-[12%] rounded-r-full"
            alt="pink gradient"
          />

          <div className="z-10">
            <Image
              src={blueGradient}
              className="absolute w-[60%] h-[70%] -mt-[40px] md:w-[40%] md:h-[80%] md:-mt-50 -right-[0%] rounded-l-full"
              alt="blue gradient"
            />
            <WorkForm
              technical={tecnicoLavarropas}
              repairContent={
                <ServiceHighlightsCard
                  title="Reparaciones"
                  items={serviceItems}
                />
              }
              steps={[
                { id: "step-1", label: "Vamos a tu domicilio" },
                { id: "step-2", label: "Revisamos el lavarropas" },
                { id: "step-3", label: "Te hacemos un presupuesto" },
                { id: "step-4", label: "Lo reparamos en el momento" },
              ]}
            />

            <Repair
              gadget="lavarropas"
              step={step2v}
              steps={[
                { id: "step-1", label: "Vamos a tu domicilio" },
                { id: "step-2", label: "Revisamos el lavarropas" },
                { id: "step-3", label: "Te hacemos un presupuesto" },
                { id: "step-4", label: "Lo reparamos en el momento" },
              ]}
            />
            <FAQ
              title="Preguntas frecuentes sobre lavarropas Electrolux"
              subtitle="Service rápido, repuestos y garantía"
              items={lavarropasFaqItems}
            />
            <div className="lg:mt-12 lg:mb-36">
              <Testimonials />
            </div>
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lavarropas;
