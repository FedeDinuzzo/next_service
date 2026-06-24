import Image from "next/image";
import lavarropas from "../../public/lavarropas-frente.webp";
import styles, { layout } from "../constants/style";
import Button from "./animations/Button";
import Reveal from "./Reveal";
import blueGradient from "../../public/blueGradient.svg";

const Lavarropas = () => (
  <section
    id="product"
    className={`${layout.section} mt-24 md:mt-0 lg:mt-16 lg:-mb-32 xl:-my-20 xl:-mb-56 px-6 xl:px-0`}
  >
    {/* 🔽 Gradiente de fondo contenido dentro del section */}
    <Image
      src={blueGradient}
      className="absolute z-0 w-[70%] h-[20%] md:w-[45%] md:h-[40%] md:-mt-[600px] -right-[0] rounded-l-full pointer-events-none"
      alt="blue gradient"
    />

    {/* 🔼 Contenido visible */}

    <Reveal variant="text" className="lg:pr-8 relative z-10 ">
      <h2 className={styles.heading2}>
        Reparación de <br className="sm:block hidden" />
        Lavarropas Electrolux
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Servicio técnico especializado en Lavarropas de Carga frontal y Carga
        superior Electrolux. Repuestos originales
      </p>
      <Button
        link="lavarropas"
        text="Service Lavarropas"
        aria-label="Ir a la sección de lavarropas"
        styles="mt-5"
      />
    </Reveal>

    <div className={`${layout.sectionImgReverse} relative z-10`}>
      <Reveal variant="image" className="inline-block">
        <Image
          src={lavarropas}
          alt="lavarropas"
          loading="lazy"
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
          className="w-[240px] md:w-[280px] max-w-[320px] h-auto lg:ml-36 mt-10 md:mt-0 lg:mt-10"
        />
      </Reveal>
    </div>
  </section>
);

export default Lavarropas;
