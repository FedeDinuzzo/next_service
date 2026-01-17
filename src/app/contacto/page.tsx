import Hero from "../components/Hero";
import styles, { layout } from "../constants/style";
import Image from "next/image";
import callButton from "../../public/callButton.png";
import ellipse2 from "../../public/ellipse2.webp";
import callUs from "../../public/callUs.webp";
import type { Metadata } from "next";
import blueGradient from "../../public/blueGradient.svg";
import ContactStructuredData from "../components/structuredData/ContactoStructuredData";
import BreadcrumbStructuredData from "../components/structuredData/BreadcrumbStructuredData";

export const metadata: Metadata = {
  title: "Contacto Service Drean | Agentes Disponibles",
  description: "Ingresa y haz tu consulta! Prespuestos SIN CARGO",
  alternates: {
    canonical: "https://servicedrean.ar/contacto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://servicedrean.ar/contacto",
    title: "▷ Service DREAN ❄️ Contacto",
    description:
      "Ingresa y Contactanos, agentes DREAN disponibles ✓ EN EL DIA - Servicio Tecnico de Heladeras y lavarropas Drean",
    siteName: "Service Drean contacto",
    images: [
      {
        url: "https://servicedrean.ar/contacto/opengraph-image.jpg",
        width: 600,
        height: 600,
        alt: "service drean contacto",
      },
    ],
  },
};

function contacto() {
  return (
    <div className={`${styles.flexStart}`}>
      <ContactStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Inicio", item: "https://servicedrean.ar/" },
          { name: "Contacto", item: "https://servicedrean.ar/contacto" },
        ]}
      />
      <div className={`${styles.boxWidth}`}>
        <Hero
          textOne="URGENCIAS"
          textTwo="POR"
          textThree="WHATSAPP"
          titleOne="Contactanos"
          titleTwo="Y Resolvemos"
          titleThree="Tu Problema"
          img={""}
          ruta={0}
        />
        <div
          className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pb-[320px] sm:pb-[480px] lg:pb-0 xl:pb-[160px]`}
        >
          <Image
            src={blueGradient}
            className="rotate-180 absolute z-[0] w-[80%] h-[80%] left-0 md:-left-80 rounded-r-full"
            alt="pink gradient"
          />
          <div className={`${styles.boxWidth} flex flex-col items-center`}>
            <section id="product" className={`${layout.sectionReverse} -mt-20 md:-mt-20 lg:-mt-8 w-full`}>
              <div className="z-[10] w-[50%]">
                <div className="absolute right-[5%] sm:right-auto max-w-[350px] sm:max-w-full">
                  <Image src={ellipse2} alt="Frio" />
                </div>
                <div className="absolute right-[5%] sm:right-auto max-w-[340px] sm:max-w-full">
                  <Image src={callUs} alt="Call Us" />
                </div>
              </div>

              <div className={layout.sectionImgReverse}>
                <div className="sm:w-[100%] my-12 md:mb-[300px] xl:mb-0 z-[10]">
                  <a href="tel:1143838283">
                    <div
                      className={`flex flex-row p-6 lg:ml-12 w-[340px] sm:w-auto max-w-[470px] rounded-[20px] feature-card-set`}
                    >
                      <div
                        className={`w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
                      >
                        <Image src={callButton} alt="icon" />
                      </div>
                      <div className="flex-1 flex flex-col ml-2 md:ml-6 pt-2 align-center">
                        <h2 className="whitespace-nowrap font-poppins font-semibold text-white text-[28px] lg:text-[36px] leading-[23px] mb-1">
                          011 4383-8283
                        </h2>
                        <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">
                          Haz click para llamar
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="tel:1143828369">
                    <div className={`flex flex-row p-6 lg:ml-12 mt-4 max-w-[470px] rounded-[20px] feature-card-set`}>
                      <div
                        className={`w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
                      >
                        <Image src={callButton} alt="icon" />
                      </div>
                      <div className="flex-1 flex flex-col ml-2 md:ml-6 pt-2 align-center">
                        <h2 className="whitespace-nowrap font-poppins font-semibold text-white text-[28px] lg:text-[36px] leading-[23px] mb-1">
                          011 4382-8369
                        </h2>
                        <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">
                          Haz click para llamar
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contacto;
