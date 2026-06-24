import Image from "next/image";
import styles from "../constants/style";
import SolicitarTecnico from "./SolicitarTecnico";

import robotHand from "../../public/robotHand.png";
import heroVector from "../../public/Vector.svg";
import autorizado from "../../public/autorizado.svg";
import heladerasLavarropas from "../../public/heladera-lavarropas.webp";
import heladeraHero from "../../public/heladeraHero.webp";
import lavarropasHero from "../../public/lavarropasHero.webp";
import phone from "../../public/phone.webp";

type HeroProps = {
  textOne: string;
  textTwo: string;
  textThree: string;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  descriptionMobile?: string;
  descriptionDesktop?: string;
  img: number | string;
  ruta: number;
};

const Hero = ({
  textOne,
  textTwo,
  textThree,
  titleOne,
  titleTwo,
  titleThree,
  descriptionMobile,
  descriptionDesktop,
  img,
  ruta,
}: HeroProps) => {
  const condicion = 1;

  const imagenSeleccionada =
    img === 1
      ? heladerasLavarropas
      : img === 2
        ? heladeraHero
        : img === 3
          ? lavarropasHero
          : phone;

  const altSeleccionado =
    img === 1
      ? "heladera y lavarropas electrolux"
      : img === 2
        ? "heladera electrolux"
        : img === 3
          ? "lavarropas electrolux"
          : "telefono de contacto";

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col md:gap-6 sm:pl-6 xl:px-6 ${styles.paddingY} mt-0 sm:mt-20 md:mt-28 lg:mt-20 xl:-mt-8 xl:-mb-16 overflow-x-hidden md:overflow-x-visible`}
    >
      <div
        className={`flex-1 px-6 md:px-0 ${styles.flexStartHero} flex-col xl:px-0 sm:px-1`}
      >
        <div className="h-[36px] lg:h-[38px] fadeTop flex flex-row items-center -mt-4 sm:mt-0 lg:mt-6 xl:-mt-12 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-3 shadow-[0_8px_12px_rgba(0,0,0,0.4)]">
          <Image
            src={autorizado}
            height={26}
            width={26}
            priority
            fetchPriority="high"
            alt="autorizado"
            className="-ml-1 mr-2"
          />
          <p
            className={`font-poppins font-normal text-dimWhite text-[14px] md:text-[15px] xl:text-[17px] leading-[30px] flex text-[#ffffff]`}
          >
            <span className="pr-1 text-[#ffffff]">{textOne}</span>
            <span className="text-[#999999]">{textTwo}</span>
            <span className="pl-1 text-[#ffffff]">{textThree}</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="fadeLeft flex-1 font-poppins font-semibold text-[40px] sm:text-[50px] md:text-[60px] xl:text-[72px] text-white leading-[44px] sm:leading-[58px] md:leading-[68px] xl:leading-[90px]">
            {titleOne} <br className="sm:block hidden" />
            <span className="text-gradient">{titleTwo}</span>
            <span className="block">{titleThree}</span>
          </h1>
          {condicion === ruta && (
            <div className="ss:flex hidden sm:mr-40 mr-0 md:mr-0">
              <SolicitarTecnico />
            </div>
          )}
        </div>

        <div className="appear2">
          <p
            className={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden fadeLeft`}
          >
            {descriptionMobile ??
              "Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux."}
          </p>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-4 hidden sm:block fadeLeft`}
          >
            {descriptionDesktop ??
              "Servicio técnico Electrolux en CABA y Buenos Aires. Reparamos heladeras y lavarropas con repuestos originales. Atendemos urgencias en el día."}
          </p>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}
      >
        <div className="w-[6%] sm:w-[34%] md:w-[14%]" />
        <div className="w-[94%] sm:w-[70%] md:w-[98%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] ss:pb-[600px] md:pb-[420px] lg:pb-[640px]">
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
            sizes="(max-width: 640px) 90vw, (max-width: 1060px) 50vw, 674px"
            className="absolute heroImg md:-mt-9 xl:mt-0"
            alt={altSeleccionado}
          />

          <Image
            src={robotHand}
            height={730}
            width={754}
            priority
            fetchPriority="low"
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 540px"
            className="absolute robotHand mt-4 md:-mt-4 -right-16 md:-right-24"
            alt="fondo degradado"
          />
        </div>
      </div>

      {condicion === ruta && (
        <div className={`ss:hidden mb-4 ${styles.flexCenter}`}>
          <SolicitarTecnico />
        </div>
      )}
    </section>
  );
};

export default Hero;
