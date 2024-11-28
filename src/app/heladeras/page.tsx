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

export const metadata: Metadata = {
  title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado",
  description:
    "Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux",
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
      "Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux",
    siteName: "Service de Heladeras Electrolux",
  },
};

const WorkForm = lazy(() => import("../components/WorkForm"));
const Repair = lazy(() => import("../components/Repair"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));

function heladeras() {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
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
        <Suspense fallback={`Loading...`}>
          <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />
          <Image
            src={pinkGradient}
            className="absolute z-[0] w-[80%] h-[120%] md:w-[50%] -mt-96 -left-[12%] rounded-r-full"
            alt="pink gradient"
          />
          <Repair gadget="heladera" step={step2} />
          <Image
            src={blueGradient}
            className="absolute z-[0] w-[60%] h-[100%] -mt-[40px] md:w-[40%] md:h-[120%] md:-mt-[280px] -right-[0%] rounded-l-full"
            alt="blue gradient"
          />
          <Testimonials />
          <CTA />
        </Suspense>
      </div>
    </div>
  );
}

export default heladeras;
