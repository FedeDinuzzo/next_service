import Hero from "../components/Hero";
import styles from "../constants/style";
import reparacionLavarropas from "../../public/reparaciones-lavarropas.webp";
import tecnicoLavarropas from "../../public/tecnicoLavarropas.webp";
import step2v from "../../public/step2v.webp";
import { lazy, Suspense } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import blueGradient from "../../public/blueGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import LavarropasStructuredData from "../components/structuredData/LavarropasStructuredData";
import FaqStructuredData from "../components/structuredData/FaqStructuredData";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "▷ Service de Lavarropas ❄️ DREAN | Autorizado",
  description:
    "Se rompió tu lavarropas DREAN? ✓ Nosotros te lo reparamos EN EL DÍA - Servicio Técnico de lavarropas Drean",
  alternates: {
    canonical: "https://servicedrean.ar/lavarropas",
  },
  keywords: [
    "servicio",
    "service",
    "drean",
    "lavarropas",
    "reparacion",
    "arreglo",
    "tecnicos",
    "asistencia",
    "capital federal",
    "zona norte",
    "zona sur",
    "servicio tecnico de lavarropas drean",
    "service de lavarropas drean",
    "reparacion de lavarropas drean",
  ],
  openGraph: {
    type: "website",
    url: "https://servicedrean.ar/lavarropas",
    title: "▷ Service de Lavarropas❄️ DREAN | Autorizado",
    description:
      "Se rompió tu lavarropas DREAN? ✓ Nosotros te lo reparamos EN EL DÍA - Servicio Técnico de lavarropas Drean",
    siteName: "Service de Lavarropas Drean",
    images: [
      {
        url: "https://servicedrean.ar/lavarropas/opengraph-image.jpeg",
        alt: "Service de lavarropas Drean",
      },
    ],
  },
};

const faqItems = [
  {
    question: "¿Hacen service de lavarropas Drean en CABA?",
    answer:
      "Si, brindamos service de lavarropas Drean en CABA y alrededores con tecnicos especializados.",
  },
  {
    question: "¿Reparan lavarropas Drean que no centrifugan?",
    answer:
      "Si, solucionamos fallas de centrifugado, bomba, placa y bloqueo de puerta.",
  },
  {
    question: "¿Cuanto tarda la reparacion?",
    answer:
      "En la mayoria de los casos resolvemos en el dia, segun la disponibilidad de repuestos.",
  },
  {
    question: "¿Tienen repuestos originales?",
    answer:
      "Si, trabajamos con repuestos originales o equivalentes de primera calidad.",
  },
  {
    question: "¿Ofrecen garantia por el service?",
    answer:
      "Si, todas las reparaciones incluyen garantia escrita.",
  },
  {
    question: "¿Como solicito una visita tecnica?",
    answer:
      "Contactanos por telefono o WhatsApp y coordinamos la visita tecnica.",
  },
];

const WorkForm = lazy(() => import("../components/WorkForm"));
const Repair = lazy(() => import("../components/Repair"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));

function Lavarropas() {
  return (
    <>
      {" "}
      <LavarropasStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: "https://servicedrean.ar/" },
          { name: "Lavarropas", item: "https://servicedrean.ar/lavarropas" },
        ]}
      />
      <FaqStructuredData pageUrl="https://servicedrean.ar/lavarropas" items={faqItems} />
      <div className={styles.flexStart}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service De"
            titleTwo="Lavarropas"
            titleThree="Drean"
            img={3}
            ruta={1}
          />
          <Image
            src={pinkGradient}
            className="absolute w-[80%] h-[38%] md:w-[60%] -left-[12%] rounded-r-full"
            alt="pink gradient"
          />

          <Suspense fallback={`Loading...`}>
            <div className="z-10">
              <Image
                src={blueGradient}
                className="absolute w-[60%] h-[70%] -mt-[40px] md:w-[40%] md:h-[80%] md:-mt-50 -right-[0%] rounded-l-full"
                alt="blue gradient"
              />
              <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />

              <Repair gadget="lavarropas" step={step2v} />
              <FAQ
                title="Preguntas frecuentes sobre lavarropas Drean"
                subtitle="Service rapido, repuestos y garantia"
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

export default Lavarropas;
