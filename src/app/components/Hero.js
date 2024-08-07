import styles from "../constants/style";
import Image from "next/image";
import SolicitarTecnico from "./SolicitarTecnico";
import robotHand from "../../public/robot-hand.webp";
import heroVector from "../../public/Vector.svg";
import autorizado from "../../public/autorizado.svg";
import heladerasLavarropas from "../../public/heladera-lavarropas.webp";
import heladeraHero from "../../public/heladeraHero.webp";
import lavarropasHero from "../../public/lavarropasHero.webp";
import phone from "../../public/phone.webp";
import Ball from "./animations/Ball.js";

const Hero = ({
  textOne,
  textTwo,
  textThree,
  titleOne,
  titleTwo,
  titleThree,
  img,
  ruta,
}) => {
  const condcion = 1;

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col md:pl-6 xl:px-6 ${styles.paddingY} md:mt-[56px] lg:-mt-[24px] xl:-mt-16`}
    >
      <div
        className={`flex-1 px-6 md:px-0  ${styles.flexStartHero} flex-col xl:px-0 sm:px-1`}
      >
        <div className="max-h-[40px] fadeTop flex flex-row items-center -mt-4 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image
            src={autorizado}
            height="32px"
            width="32px"
            priority
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
            {titleOne} <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{titleTwo}</span>{" "}
            <span className="block">{titleThree}</span>{" "}
          </h1>

          {condcion === ruta ? (
            <div className="ss:flex hidden md:mr-4 mr-0">
              <SolicitarTecnico />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="appear2">
          <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden`}>
            Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux.
          </p>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 hidden md:block`}
          >
            Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux.
            Desliza e infórmate acerca de nuestra forma de trabajo.
          </p>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}
      >
        <div className="w-[6%] sm:w-[34%] md:w-[14%]" />
        <div className="w-[94%] sm:w-[70%] md:w-[98%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
          <Image
            src={heroVector}
            height="767px"
            width="768px"
            priority
            className="absolute right-[12%] heroVector"
            alt="hero-bg-effect"
          />

          {img == 1 ? (
            <Image
              src={heladerasLavarropas}
              height="652px"
              width="674px"
              priority
              className="absolute heroImg md:-mt-12 xl:mt-0"
              alt="heladera y lavarropas electrolux"
            />
          ) : img == 2 ? (
            <Image
              src={heladeraHero}
              height="652px"
              width="674px"
              priority
              className="absolute heroImg md:-mt-12 xl:mt-0"
              alt="heladera electrolux"
            />
          ) : img == 3 ? (
            <Image
              src={lavarropasHero}
              height="652px"
              width="674px"
              priority
              className="absolute heroImg md:-mt-12 xl:mt-0"
              alt="lavarropas electrolux"
            />
          ) : (
            <Image
              src={phone}
              height="652px"
              width="674px"
              priority
              className="absolute heroImg md:-mt-12 xl:mt-0"
              alt="telefono de contacto"
            />
          )}

          {/* <div className="balls">
          <div className="absolute left-[15%] top-[54%] hidden xl:block">
            <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
          </div>
        <div className="absolute left-[13%] top-[54%] block md:hidden">
          <Ball w={36} h={200} cx={20} cy={40} r={10} cyAnimate={20} duration={4} /> 
        </div>
        <div className="absolute left-[15%] top-[54%] hidden md:block lg:hidden">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div className="absolute left-[15%] top-[54%] hidden lg:block xl:hidden">
          <Ball w={60} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>


        <div className="absolute left-[58%] top-[50%] block md:hidden">
          <Ball w={66} h={132} cx={33} cy={40} r={16} cyAnimate={20} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden md:block lg:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden lg:block xl:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden xl:block">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>

        <div className="absolute left-[1%] block md:hidden">
          <Ball w={100} h={200} cx={50} cy={60} r={26} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden md:block lg:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden lg:block xl:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden xl:block">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div> 
        </div> */}

          <Image
            src={robotHand}
            height="652px"
            width="674px"
            priority
            className="absolute robotHand md:-mt-12 xl:mt-0"
            alt="fondo degradado"
          />
        </div>
      </div>

      {condcion == ruta ? (
        <div className={`ss:hidden my-12 ${styles.flexCenter}`}>
          <SolicitarTecnico />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Hero;
