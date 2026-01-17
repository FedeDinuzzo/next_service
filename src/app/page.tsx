import Stats from "./components/Stats";
import type { Metadata } from "next";
import { lazy, Suspense } from "react";
import styles from "./constants/style";
import Hero from "./components/Hero";
import HomeStructuredData from "./components/structuredData/HomeStructuredData";
import FaqStructuredData from "./components/structuredData/FaqStructuredData";
import FAQ from "./components/FAQ";

const Features = lazy(() => import("./components/Features"));
const Heladeras = lazy(() => import("./components/Heladeras"));
const Lavarropas = lazy(() => import("./components/Lavarropas"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Zones = lazy(() => import("./components/Zones"));
const CTA = lazy(() => import("./components/CTA"));

export const metadata: Metadata = {
  alternates: {
    canonical: "https://servicedrean.ar/",
  },
};

const faqItems = [
  {
    question: "¿Hacen service de heladeras Drean en CABA?",
    answer:
      "Si, realizamos service de heladeras Drean en CABA y zonas cercanas, con tecnicos especializados y repuestos originales.",
  },
  {
    question: "¿Hacen service de lavarropas Drean en el dia?",
    answer:
      "Si, contamos con visitas rapidas y solucion en el dia para la mayoria de fallas de lavarropas Drean.",
  },
  {
    question: "¿Ofrecen garantia por la reparacion?",
    answer:
      "Si, todas nuestras reparaciones incluyen garantia escrita y respaldo tecnico.",
  },
  {
    question: "¿Que zonas cubren?",
    answer:
      "Atendemos Capital Federal, Zona Norte y Zona Sur. Consultanos por tu barrio para confirmar cobertura.",
  },
  {
    question: "¿Trabajan con repuestos originales?",
    answer:
      "Si, utilizamos repuestos originales o equivalentes de primera calidad segun la disponibilidad.",
  },
  {
    question: "¿Como solicito una visita tecnica?",
    answer:
      "Podes llamarnos o escribirnos por WhatsApp y coordinamos una visita en el horario que te convenga.",
  },
];

function Home() {
  return (
    <>
      <HomeStructuredData />
      <FaqStructuredData pageUrl="https://servicedrean.ar/" items={faqItems} />
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service"
            titleTwo="Drean"
            titleThree="Especializado"
            img={1}
            ruta={1}
          />
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
            </div>
          </div>
          <Suspense fallback={`Loading...`}>
            <Features />
            <Heladeras />
            <Lavarropas />
            <div className="hidden md:block md:my-0 md:mt-20">
              <Testimonials />
            </div>
            <Zones />
            <FAQ
              title="Preguntas frecuentes"
              subtitle="Respuestas claras sobre service de heladeras y lavarropas Drean"
              items={faqItems}
            />
            <CTA />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Home;
