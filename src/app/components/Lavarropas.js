import Image from "next/image";
import lavarropas from "../../public/lavarropas-frente.webp";
import styles, { layout } from "../constants/style";
import Button from "./animations/Button";
import blueGradient from "../../public/blueGradient.svg";
const Lavarropas = () => (
  <section id="product" className={`${layout.section} mt-10 md:mt-0 xl:-my-20 xl:-mb-40 px-6 xl:px-0`}>
    {/* 🔽 Gradiente de fondo contenido dentro del section */}
    <Image
      src={blueGradient}
      className="absolute z-0 w-[70%] h-[20%] md:w-[45%] md:h-[40%] md:-mt-80 -right-[0] rounded-l-full pointer-events-none"
      alt="blue gradient"
    />

    {/* 🔼 Contenido visible */}
    <div className="lg:pr-8 relative z-10">
      <h2 className={styles.heading2}>
        Reparación de <br className="sm:block hidden" />
        Lavarropas Drean
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Drean. Repuestos originales
      </p>
      <Button link="lavarropas" text="Service Lavarropas" aria-label="Ir a la sección de lavarropas" styles="mt-5" />
    </div>

    <div className={`${layout.sectionImgReverse} relative z-10`}>
      <Image
        src={lavarropas}
        alt="lavarropas"
        loading="lazy"
        className="w-[240px] md:w-[280px] xl:w-auto lg:ml-36 mt-10 md:mt-0"
      />
    </div>
  </section>
);

export default Lavarropas;
