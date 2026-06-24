import styles from "../constants/style";
import Button from "./animations/Button";
import Reveal from "./Reveal";

const CTA = () => (
  <Reveal variant="cta">
    <section className={`${styles.paddingX} ${styles.flexCenter} ${styles.marginY} pt-8 pb-20 md:pt-0 md:pb-0`}>
    <div
      id="solicitarTecnico"
      className={`z-[10] ${styles.flexCenter} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow w-full sm:flex-row flex-col`}
    >
      <div className="flex-1 flex flex-col text-center md:text-left mt-5 md:mt-0">
        <h2 className={styles.heading2}>Solicita un Service Hoy!</h2>
        <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
          Nuestros representantes están disponibles. Cuéntenos su problema y con gusto le ayudaremos.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mb-4 md:mb-0`}>
        <Button
          href="tel:1143838283"
          text="Llamada telefónica"
          className="js-track-call"
          data-track-label="cta_call"
        />
      </div>
    </div>
    </section>
  </Reveal>
);

export default CTA;

