"use client";
import Image from "next/image";
import styles from "../constants/style";
import SolicitarTecnico from "./SolicitarTecnico";

import robotHand from "../../public/robot-hand.webp";
import heroVector from "../../public/Vector.svg";
import autorizado from "../../public/autorizado.svg";
import heladerasLavarropas from "../../public/heladera-lavarropas.webp";
import heladeraHero from "../../public/heladeraHero.webp";
import lavarropasHero from "../../public/lavarropasHero.webp";
import phone from "../../public/phone.webp";

const Hero = ({ textOne, textTwo, textThree, titleOne, titleTwo, titleThree, img, ruta }) => {
  const condicion = 1;

  const imagenSeleccionada =
    img === 1 ? heladerasLavarropas : img === 2 ? heladeraHero : img === 3 ? lavarropasHero : phone;

  const altSeleccionado =
    img === 1
      ? "heladera y lavarropas drean"
      : img === 2
      ? "heladera drean"
      : img === 3
      ? "lavarropas drean"
      : "telefono de contacto";

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col md:pl-6 xl:px-6 ${styles.paddingY} md:mt-[56px] lg:-mt-[24px] xl:-mt-16`}
    >
      <div className={`flex-1 px-6 md:px-0 ${styles.flexStartHero} flex-col xl:px-0 sm:px-1`}>
        <div className="max-h-[40px] fadeTop flex flex-row items-center -mt-4 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image
            src={autorizado}
            height={32}
            width={32}
            priority
            fetchPriority="high"
            className="-ml-2"
            alt="autorizado"
          />
          <p className={`${styles.paragraph} flex`}>
            <span className="pr-1 text-white">{textOne}</span>
            {textTwo} <span className="pl-1 text-white">{textThree}</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="fadeLeft flex-1 font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px]">
            {titleOne} <br className="sm:block hidden" />
            <span className="text-gradient">{titleTwo}</span>
            <span className="block">{titleThree}</span>
          </h1>
          {condicion === ruta && (
            <div className="ss:flex hidden md:mr-4 mr-0">
              <SolicitarTecnico />
            </div>
          )}
        </div>

        <div className="appear2">
          <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden`}>
            Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Drean.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 hidden md:block`}>
            Servicio técnico Drean en CABA y Buenos Aires. Reparamos heladeras y lavarropas con repuestos
            originales. Atendemos urgencias en el día.
          </p>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}>
        <div className="w-[6%] sm:w-[34%] md:w-[14%]" />
        <div className="w-[94%] sm:w-[70%] md:w-[98%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
          <Image
            src={heroVector}
            height={767}
            width={768}
            priority
            fetchPriority="high"
            className="absolute right-[12%] heroVector"
            alt="hero-bg-effect"
          />

          <Image
            src={imagenSeleccionada}
            height={652}
            width={674}
            priority
            fetchPriority="high"
            className="absolute heroImg md:-mt-12 xl:mt-0"
            alt={altSeleccionado}
          />

          <Image
            src={robotHand}
            height={652}
            width={674}
            priority
            fetchPriority="low"
            className="absolute robotHand md:-mt-12 xl:mt-0"
            alt="fondo degradado"
          />
        </div>
      </div>

      {condicion === ruta && (
        <div className={`ss:hidden my-12 ${styles.flexCenter}`}>
          <SolicitarTecnico />
        </div>
      )}
    </section>
  );
};

export default Hero;
