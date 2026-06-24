import Hero from "../components/Hero";
import styles from "../constants/style";
import tecnicoHeladeras from "../../public/tecnicoHeladeras.webp";
import step2 from "../../public/step2.webp";
import Image from "next/image";
import type { Metadata } from "next";
import blueGradient from "../../public/blueGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import HeladerasStructuredData from "../components/structuredData/HeladerasStructuredData";
import FaqStructuredData from "../components/structuredData/FaqStructuredData";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import FAQ from "../components/FAQ";
import { heladerasFaqItems } from "../constants";
import ServiceHighlightsCard from "../components/ServiceHighlightsCard";
import WorkForm from "../components/WorkForm";
import Repair from "../components/Repair";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Servicio Técnico de Heladeras Electrolux | Reparación en el Día",
  description:
    "¿Tu heladera Electrolux no enfría o no arranca? Servicio técnico especializado a domicilio. Reparaciones urgentes en el día con garantía escrita.",
  alternates: {
    canonical: "https://service-electrolux.ar/heladeras",
  },
  keywords: [
    "servicio",
    "service",
    "electrolux",
    "heladeras",
    "reparacion",
    "arreglo",
    "tecnicos",
    "asistencia",
    "capital federal",
    "zona norte",
    "zona sur",
    "servicio tecnico de heladeras electrolux",
    "service de heladeras electrolux",
    "reparacion de heladeras electrolux",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://service-electrolux.ar/heladeras",
    title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado",
    description:
      "¿Se rompió tu heladera ELECTROLUX? ✓ Nosotros te la reparamos EN EL DÍA - Servicio Técnico de heladeras Electrolux",
    siteName: "Service de Heladeras Electrolux",
    images: [
      {
        url: "https://service-electrolux.ar/heladeras/opengraph-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Service de heladeras Electrolux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado",
    description:
      "¿Se rompió tu heladera ELECTROLUX? ✓ Nosotros te la reparamos EN EL DÍA - Servicio Técnico de heladeras Electrolux",
    images: [
      {
        url: "https://service-electrolux.ar/heladeras/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Service de heladeras Electrolux",
      },
    ],
  },
};

const serviceItems = [
  { id: "gas", label: "Carga de gas" },
  { id: "nofrost", label: "Sistema No-Frost" },
  { id: "compresor", label: "Motocompresor" },
  { id: "canierias", label: "Cañerías" },
  { id: "puertas", label: "Puertas y burletes" },
  { id: "placas", label: "Plaquetas y sensores" },
];

function Heladeras() {
  return (
    <>
      <HeladerasStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: "https://service-electrolux.ar/" },
          { name: "Heladeras", item: "https://service-electrolux.ar/heladeras" },
        ]}
      />
      <FaqStructuredData
        pageUrl="https://service-electrolux.ar/heladeras"
        items={heladerasFaqItems.slice(0, 4)}
      />
      <div className={`${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service de"
            titleTwo="Heladeras"
            titleThree="Electrolux"
            descriptionMobile="Service de heladeras Electrolux en CABA y Buenos Aires con repuestos originales."
            descriptionDesktop="Servicio técnico de heladeras Electrolux en CABA y Buenos Aires. Diagnóstico rápido, repuestos originales y urgencias en el día."
            img={2}
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
              technical={tecnicoHeladeras}
              repairContent={
                <ServiceHighlightsCard
                  title="Reparaciones"
                  items={serviceItems}
                />
              }
              steps={[
                { id: "step-1", label: "Vamos a tu domicilio" },
                { id: "step-2", label: "Revisamos la heladera" },
                { id: "step-3", label: "Te hacemos un presupuesto" },
                { id: "step-4", label: "La reparamos en el momento" },
              ]}
            />

            <Repair
              gadget="heladera"
              step={step2}
              steps={[
                { id: "step-1", label: "Vamos a tu domicilio" },
                { id: "step-2", label: "Revisamos la heladera" },
                { id: "step-3", label: "Te hacemos un presupuesto" },
                { id: "step-4", label: "La reparamos en el momento" },
              ]}
            />

            <FAQ
              title="Preguntas frecuentes sobre heladeras Electrolux"
              subtitle="Service, repuestos y garantía para tu heladera"
              items={heladerasFaqItems}
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

export default Heladeras;
