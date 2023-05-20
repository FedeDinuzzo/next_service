import Image from 'next/image'
import lavarropas from '../../public/lavarropas-frente.webp'
import styles, { layout } from "@/app/constants/style"
import Link from 'next/link'
import blueGradient from "../../public/blueGradient.svg"

const Lavarropas = () => (
  <section id="product" className={`${layout.section} -mb-28 -mt-8 md:mt-0 xl:-my-20 xl:-mb-40`}>
    <Image src={blueGradient} className="absolute z-[0] w-[30%] h-[100%] -mt-56 -right-[0%] rounded-l-full" alt="blue gradient" />
    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <div className={`w-fit py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg mt-6 xl:mt-10`}>
        <Link href="/lavarropas" aria-label="Ir a la sección lavarropas">
          <p>Lavarropas Info</p>
        </Link>
      </div>
    </div>
    
    <div className={layout.sectionImgReverse}>
      <Image src={lavarropas} alt="lavarropas" loading="lazy" className="w-[240px] md:w-[280px] xl:w-auto lg:ml-36"/>
    </div>
    
  </section>
)

export default Lavarropas