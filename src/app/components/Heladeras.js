import Image from "next/image";
import styles, { layout } from "../constants/style";
import atencion from "../../public/Atencion.webp";
import heladeraFrente from "../../public/heladera-frente.webp";
import whiteGradient from "../../public/whiteGradient.svg";
import pinkGradient from "../../public/pinkGradient.svg";
import Button from "./animations/Button";

const Heladeras = () => (
  <section id="product" className={`${layout.sectionReverse} mt-6 md:mt-20 xl:mt-0 px-6 xl:px-0 `}>
    <Image
      src={whiteGradient}
      className="absolute z-0 w-[60%] h-[45%] md:h-[100%] md:w-[0%] md:top-48 left-0 rounded-r-full "
      alt="white gradient"
    />
    <Image
      src={pinkGradient}
      className="absolute z-0 w-[80%] h-[90%] md:w-[50%] top-80 md:top-48 left-0 rounded-r-full"
      alt="pink gradient"
    />

    <div className={layout.sectionImgReverse}>
      <Image
        src={heladeraFrente}
        alt="heladera"
        loading="lazy"
        className="w-[280px] md:w-[320px] xl:w-auto lg:mr-36  mt-10 md:mt-0"
      />
      <div className="absolute pt-52 pl-28 md:pl-32 lg:pl-48 md:w-[86%] xl:w-auto">
        <Image src={atencion} alt="atencion tecnica inmediata" loading="lazy" />
      </div>
    </div>

    <div className="lg:pr-8 relative z-10">
      <h2 className={styles.heading2}>
        Reparación de <br className="sm:block hidden" />
        Heladeras Electrolux
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Servicio Técnico Especializado en Heladeras Familiares, Tropicales, No Frost y Freezers. Repuestos originales
      </p>
      <Button link="heladeras" text="Service Heladeras" aria-label="Ir a la sección de heladeras" styles="mt-5" />
    </div>
  </section>
);

export default Heladeras;
