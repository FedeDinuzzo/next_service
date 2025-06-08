import Hero from "../components/Hero";
import styles from "../constants/style";
import reparacionHeladeras from "../../public/reparaciones-heladeras.webp";
import tecnicoHeladeras from "../../public/tecnicoHeladeras.webp";
import step2 from "../../public/step2.webp";
import { lazy, Suspense } from "react";
import Image from "next/image";
import blueGradient from "../../public/blueGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import type { Metadata } from "next";
import HeladerasStructuredData from "../components/structuredData/HeladerasStructuredData";

export const metadata: Metadata = {
  title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado",
  description:
    "Se rompió tu heladera ELECTROLUX? ✓ Nosotros te la reparamos EN EL DÍA - Servicio Técnico de heladeras Electrolux",
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
    url: "https://service-electrolux.ar/heladeras",
    title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado",
    description:
      "Se rompió tu heladera ELECTROLUX? ✓ Nosotros te la reparamos EN EL DÍA - Servicio Técnico de heladeras Electrolux",
    siteName: "Service de Heladeras Electrolux",
  },
};

const WorkForm = lazy(() => import("../components/WorkForm"));
const Repair = lazy(() => import("../components/Repair"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));

function Heladeras() {
  return (
    <>
      <HeladerasStructuredData />
      <div className={`${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service De"
            titleTwo="Heladeras"
            titleThree="Electrolux"
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

              <Testimonials type="heladera" />

              <CTA />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Heladeras;
