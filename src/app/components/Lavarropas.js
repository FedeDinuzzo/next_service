import Image from 'next/image'
import lavarropas from '../../public/lavarropas-frente.webp'
import styles, { layout } from "@/app/constants/style"
import Link from 'next/link'

const Lavarropas = () => (
  <section id="product" className={`${layout.section} -mb-28 -mt-8 md:mt-0 xl:-my-20 xl:-mb-40`}>
    {/* <div className="absolute z-[0] w-[24%] h-[70%] -right-[0%] rounded-l-full blue__gradient" /> */}

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <Link href="/lavarropas" aria-label="Ir a la sección lavarropas">ver mas
        <div type="button" className={`mt-6 xl:mt-10 py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
          Mas Información
        </div>
      </Link>
    </div>
    
    <div className={layout.sectionImgReverse}>
      <Image src={lavarropas} alt="lavarropas" loading="lazy" className="w-[240px] md:w-[280px] xl:w-auto lg:ml-36"/>
    </div>
    
  </section>
)

export default Lavarropas