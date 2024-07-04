import Hero from "../components/Hero";
import styles from "../constants/style";
import reparacionLavarropas from "../../public/reparaciones-lavarropas.webp";
import tecnicoLavarropas from "../../public/tecnicoLavarropas.webp";
import step2v from "../../public/step2v.webp";
import { lazy, Suspense } from "react";
import Image from "next/image";
import blueGradient from "../../public/blueGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "▷ Service de Lavarropas ❄️ ELECTROLUX | Autorizado",
  description:
    "Se rompio tu lavarropas ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de lavarropas Electrolux",
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
    url: "https://service-electrolux.ar/lavarropas",
    title: "▷ Service de Lavarropas❄️ ELECTROLUX | Autorizado",
    description:
      "Se rompio tu lavarropas ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de lavarropas Electrolux",
    siteName: "Service de Lavarropas Electrolux",
  },
};

const WorkForm = lazy(() => import("../components/WorkForm"));
const Repair = lazy(() => import("../components/Repair"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));

function lavarropas() {
  return (
    <>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service De"
            titleTwo="Lavarropas"
            titleThree="Electrolux"
            img={3}
            ruta={1}
          />
          <Suspense fallback={`Loading...`}>
            <WorkForm
              repair={reparacionLavarropas}
              technical={tecnicoLavarropas}
            />
            <Image
              src={pinkGradient}
              className="absolute z-[0] w-[80%] h-[120%] md:w-[50%] -mt-96 -left-[12%] rounded-r-full"
              alt="pink gradient"
            />
            <Repair gadget="lavarropas" step={step2v} />
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
    </>
  );
}

export default lavarropas;
