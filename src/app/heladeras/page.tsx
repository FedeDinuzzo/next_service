import Hero from "../components/Hero";
import styles from "../constants/style";
import reparacionHeladeras from "../../public/reparaciones-heladeras.webp";
import tecnicoHeladeras from "../../public/tecnicoHeladeras.webp";
import step2 from "../../public/step2.webp";
import { lazy, Suspense } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import blueGradient from "../../public/blueGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import HeladerasStructuredData from "../components/structuredData/HeladerasStructuredData";
import FaqStructuredData from "../components/structuredData/FaqStructuredData";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "▷ Service de Heladeras ❄️ DREAN | Autorizado",
  description:
    "Se rompió tu heladera DREAN? ✓ Nosotros te la reparamos EN EL DÍA - Servicio Técnico de heladeras Drean",
  alternates: {
    canonical: "https://servicedrean.ar/heladeras",
  },
  keywords: [
    "servicio",
    "service",
    "drean",
    "heladeras",
    "reparacion",
    "arreglo",
    "tecnicos",
    "asistencia",
    "capital federal",
    "zona norte",
    "zona sur",
    "servicio tecnico de heladeras drean",
    "service de heladeras drean",
    "reparacion de heladeras drean",
  ],
  openGraph: {
    type: "website",
    url: "https://servicedrean.ar/heladeras",
    title: "▷ Service de Heladeras ❄️ DREAN | Autorizado",
    description:
      "Se rompió tu heladera DREAN? ✓ Nosotros te la reparamos EN EL DÍA - Servicio Técnico de heladeras Drean",
    siteName: "Service de Heladeras Drean",
    images: [
      {
        url: "https://servicedrean.ar/heladeras/opengraph-image.jpeg",
        alt: "Service de heladeras Drean",
      },
    ],
  },
};

const faqItems = [
  {
    question: "¿Hacen service de heladeras Drean en CABA?",
    answer:
      "Si, realizamos service de heladeras Drean en CABA y alrededores con tecnicos especializados.",
  },
  {
    question: "¿Reparan heladeras no frost Drean?",
    answer:
      "Si, trabajamos con heladeras no frost, tropicales, familiares y freezers Drean.",
  },
  {
    question: "¿Cuanto tarda la reparacion?",
    answer:
      "En la mayoria de los casos resolvemos en el dia, segun disponibilidad de repuestos.",
  },
  {
    question: "¿Tienen repuestos originales?",
    answer:
      "Si, usamos repuestos originales o equivalentes de primera calidad para asegurar durabilidad.",
  },
  {
    question: "¿Ofrecen garantia por el service?",
    answer:
      "Si, todas las reparaciones incluyen garantia escrita.",
  },
  {
    question: "¿Como solicito una visita tecnica?",
    answer:
      "Llamanos o escribinos por WhatsApp y coordinamos la visita tecnica.",
  },
];

const WorkForm = lazy(() => import("../components/WorkForm"));
const Repair = lazy(() => import("../components/Repair"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));

function Heladeras() {
  return (
    <>
      <HeladerasStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: "https://servicedrean.ar/" },
          { name: "Heladeras", item: "https://servicedrean.ar/heladeras" },
        ]}
      />
      <FaqStructuredData pageUrl="https://servicedrean.ar/heladeras" items={faqItems} />
      <div className={`${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service De"
            titleTwo="Heladeras"
            titleThree="Drean"
            img={2}
            ruta={1}
          />
          <Image
            src={pinkGradient}
            className="absolute w-[80%] h-[38%] md:w-[60%] -left-[12%] rounded-r-full"
            alt="pink gradient"
          />

          <Suspense fallback={`Loading...`}>
            <div className=" z-10">
              <Image
                src={blueGradient}
                className="absolute w-[60%] h-[70%] -mt-[40px] md:w-[40%] md:h-[80%] md:-mt-50 -right-[0%] rounded-l-full"
                alt="blue gradient"
              />
              <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />

              <Repair gadget="heladera" step={step2} />

              <FAQ
                title="Preguntas frecuentes sobre heladeras Drean"
                subtitle="Service, repuestos y garantia para tu heladera"
                items={faqItems}
              />
              <Testimonials />

              <CTA />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Heladeras;
