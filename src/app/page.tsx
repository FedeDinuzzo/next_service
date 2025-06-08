import Stats from "./components/Stats";
import type { Metadata } from "next";
import { lazy, Suspense } from "react";
import styles from "./constants/style";
import Hero from "./components/Hero";
import HomeStructuredData from "./components/structuredData/HomeStructuredData";

const Features = lazy(() => import("./components/Features"));
const Heladeras = lazy(() => import("./components/Heladeras"));
const Lavarropas = lazy(() => import("./components/Lavarropas"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Zones = lazy(() => import("./components/Zones"));
const CTA = lazy(() => import("./components/CTA"));

export const metadata: Metadata = {
  alternates: {
    canonical: "https://service-electrolux.ar/",
  },
};

function Home() {
  return (
    <>
      <HomeStructuredData />
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service"
            titleTwo="Electrolux"
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
            <div className="my-10 md:my-0 md:mt-20">
              <Testimonials />
            </div>
            <Zones />

            <CTA />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Home;
