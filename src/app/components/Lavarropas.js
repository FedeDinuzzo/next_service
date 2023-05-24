import Image from 'next/image'
import lavarropas from '../../public/lavarropas-frente.webp'
import styles, { layout } from "@/app/constants/style"
import Button from './animations/Button'
import blueGradient from "../../public/blueGradient.svg"

const Lavarropas = () => (
  <section id="product" className={`${layout.section} -mb-28 -mt-8 md:mt-0 xl:-my-20 xl:-mb-40`}>
    <Image src={blueGradient} className="absolute z-[0] w-[70%] h-[120%] -mt-[80px] md:w-[50%] md:h-[160%] md:-mt-[480px] -right-[0%] rounded-l-full" alt="blue gradient" />
    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <Button link="lavarropas" text="Service Lavarropas" aria-label="Ir a la sección de lavarropas" styles="mt-12" />
    </div>
    <div className={layout.sectionImgReverse}>
      <Image src={lavarropas} alt="lavarropas" loading="lazy" className="w-[240px] md:w-[280px] xl:w-auto lg:ml-36"/>
    </div>
  </section>
)

export default Lavarropas