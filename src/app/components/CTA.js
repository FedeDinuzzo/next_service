import styles from '@/app/constants/style'
import Button from './animations/Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} py-8 md:py-0`}>
    <div className={`z-[10] ${styles.flexCenter} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow w-full sm:flex-row flex-col`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Solicita un Service Hoy!</h2>
      <p className={`${styles.paragraph} max-w-[520px] mt-5`}>Nuestros representantes están disponibles. Cuéntenos su problema y con gusto le ayudaremos.</p>
    </div>

    <div id="solicitarTecnico" className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mb-4 md:mb-0`}>
      <Button text="Llamada telefónica" link="tel:01143838283" />
    </div>
    </div>
  </section>
);

export default CTA;
