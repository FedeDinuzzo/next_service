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
    "Se rompió tu lavarropas ELECTROLUX? ✓ Nosotros te lo reparamos EN EL DÍA - Servicio Técnico de lavarropas Electrolux",
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
    url: "https://service-electrolux.ar/lavarropas",
    title: "▷ Service de Lavarropas❄️ ELECTROLUX | Autorizado",
    description:
      "Se rompió tu lavarropas ELECTROLUX? ✓ Nosotros te lo reparamos EN EL DÍA - Servicio Técnico de lavarropas Electrolux",
    siteName: "Service de Lavarropas Electrolux",
  },
};

const WorkForm = lazy(() => import("../components/WorkForm"));
const Repair = lazy(() => import("../components/Repair"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));

function Lavarropas() {
  return (
    <div className={styles.flexStart}>
      <div className={`${styles.boxWidth}`}>
        {/* 🔽 Gradientes al fondo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={pinkGradient}
            className="absolute w-[80%] h-[100%] md:w-[50%] -mt-96 -left-[12%] rounded-r-full"
            alt="pink gradient"
          />
          <Image
            src={blueGradient}
            className="absolute w-[60%] h-[100%] -mt-[40px] md:w-[40%] md:h-[120%] md:-mt-50 -right-[0%] rounded-l-full"
            alt="blue gradient"
          />
        </div>

        {/* 🔼 Contenido encima */}
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
          <div className="relative z-10">
            <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />
            <Repair gadget="lavarropas" step={step2v} />
            <Testimonials />
            <CTA />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Lavarropas;
