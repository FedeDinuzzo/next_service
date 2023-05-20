import Image from 'next/image'
import styles, { layout } from "@/app/constants/style"
import Link from 'next/link'
import atencion from '../../public/Atencion.webp'
import heladeraFrente from '../../public/heladera-frente.webp'
import whiteGradient from '../../public/whiteGradient.svg'
import pinkGradient from "../../public/pinkGradient.svg"

const Heladeras = () => (
  <section id="product" className={`${layout.sectionReverse} mt-6 md:mt-20 xl:mt-0`}>
    <Image src={whiteGradient} className="absolute z-[0] w-[60%] h-[20%] -left-[50%] rounded-full bg-white blur-[250px]" alt="white gradient" />
    <Image src={pinkGradient} className="absolute z-[0] w-[30%] h-[100%] -mt-16 left-[0%] rounded-r-full" alt="pink gradient" />
    <div className={layout.sectionImgReverse}>
      <Image src={heladeraFrente} alt="heladera" loading="lazy" className="w-[280px] md:w-[320px] xl:w-auto lg:mr-36"/>
      <div className='absolute pt-52 pl-28 md:pl-32 lg:pl-48 md:w-[86%] xl:w-auto'>
        <Image src={atencion} alt="atencion tecnica inmediata" loading="lazy" />
      </div>
    </div>

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Heladeras Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio Técnico Especializado en Heladeras Familiares, Tropicales, No Frost y Freezers. Repuestos originales</p>
      <div className={`w-fit py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg mt-6 xl:mt-10`}>
        <Link href="/heladeras" aria-label="Ir a la sección heladeras">
          <p>Heladeras Info</p>
        </Link>
      </div>
    </div>
  </section>
)

export default Heladeras
