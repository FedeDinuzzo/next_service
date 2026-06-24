import Stats from "./components/Stats";
import type { Metadata } from "next";
import styles from "./constants/style";
import {
  authorizedServices,
  authorizedServicesFaqIntro,
  authorizedServicesFaqOutro,
  homeFaqItems,
} from "./constants";
import Hero from "./components/Hero";
import HomeStructuredData from "./components/structuredData/HomeStructuredData";
import FaqStructuredData from "./components/structuredData/FaqStructuredData";
import ZonesStructuredData from "./components/structuredData/ZonesStructuredData";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Heladeras from "./components/Heladeras";
import Lavarropas from "./components/Lavarropas";
import Testimonials from "./components/Testimonials";
import Zones from "./components/Zones";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://service-electrolux.ar/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://service-electrolux.ar/",
        title: "▷ Service ELECTROLUX ❄️ Heladeras y Lavarropas | A DOMICILIO",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresá y contactanos - Servicio Técnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
    images: [
      {
        url: "https://service-electrolux.ar/opengraph-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title: "▹ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresá y contactanos - Servicio Técnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
    images: [
      {
        url: "https://service-electrolux.ar/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Service Electrolux",
      },
    ],
  },
};

const faqItems = homeFaqItems.map((item) => {
  if (item.id !== "home-faq-authorized-services") return item;
  return {
    ...item,
    answer: (
      <>
        {authorizedServicesFaqIntro}{" "}
        {authorizedServices.map((service, index) => (
          <span key={service.id}>
            <a
              href={service.url}
              target="_blank"
              rel="noreferrer"
              className="underline text-secondary"
            >
              {service.name}
            </a>
            {index < authorizedServices.length - 1 ? ", " : ""}
          </span>
        ))}
        . {authorizedServicesFaqOutro}
      </>
    ),
  };
});

function Home() {
  return (
    <>
      <HomeStructuredData />
      <ZonesStructuredData />
      <FaqStructuredData
        pageUrl="https://service-electrolux.ar/"
        items={homeFaqItems.slice(0, 4)}
      />
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service"
            titleTwo="Electrolux"
            titleThree="Autorizado"
            descriptionMobile="Service en CABA y Buenos Aires de heladeras y lavarropas Electrolux."
            descriptionDesktop="Servicio técnico Electrolux en CABA y Buenos Aires. Reparamos heladeras y lavarropas con repuestos originales. Atendemos urgencias en el día."
            img={1}
            ruta={1}
          />
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
            </div>
          </div>
          <Features />
          <Heladeras />
          <Lavarropas />
          <div className="hidden md:block md:my-0 md:mt-20">
            <Testimonials />
          </div>
          <Zones />
          <FAQ
            title="Preguntas frecuentes"
            subtitle="Respuestas claras sobre service de heladeras y lavarropas Electrolux"
            items={faqItems}
          />
          <CTA />
        </div>
      </div>
    </>
  );
}

export default Home;
