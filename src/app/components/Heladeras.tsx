import Image from "next/image";
import styles, { layout } from "../constants/style";
import heladeraFrente from "../../public/heladera-frente.webp";
import whiteGradient from "../../public/whiteGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import Button from "./animations/Button";
import ImmediateAttentionBadge from "./ImmediateAttentionBadge";
import Reveal from "./Reveal";

const Heladeras = () => (
  <section id="product" className={`${layout.sectionReverse} mt-24 lg:mt-36 xl:mt-0 px-6 xl:px-0 `}>
    <Image
      src={whiteGradient}
      className="absolute z-0 w-[60%] h-[45%] md:h-[100%] md:w-[0%] md:-top-[500px] left-0 rounded-r-full "
      alt="white gradient"
    />
    <Image
      src={pinkGradient}
      className="absolute z-0 w-[80%] h-[90%] md:w-[50%] top-40 md:-top-[500px]  left-0 rounded-r-full"
      alt="pink gradient"
    />

    <div className={`${layout.sectionImgReverse} flex-col items-center md:items-start`}>
      <div className="relative flex flex-col items-center md:items-start">
        <Reveal variant="image" className="inline-block">
          <Image
            src={heladeraFrente}
            alt="heladera"
            loading="lazy"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 390px"
            className="w-[280px] md:w-[320px] max-w-[390px] h-auto lg:mr-36 mt-10 md:mt-0"
          />
        </Reveal>
        <div className="mt-4 md:mt-0 md:absolute md:pt-52 md:pl-32 lg:pl-48">
          <ImmediateAttentionBadge textClassName="text-[12px] sm:text-[13px]" />
        </div>
      </div>
    </div>

    <Reveal variant="text" className="lg:pr-8 relative z-10">
      <h2 className={styles.heading2}>
        Reparación de <br className="sm:block hidden" />
        Heladeras Electrolux
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Servicio Técnico Especializado en Heladeras Familiares, Tropicales, No Frost y Freezers. Repuestos originales
      </p>
      <Button link="heladeras" text="Service Heladeras" aria-label="Ir a la sección de heladeras" styles="mt-5" />
    </Reveal>
  </section>
);

export default Heladeras;
