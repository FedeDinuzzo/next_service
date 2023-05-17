import Image from 'next/image'
import styles, { layout } from "@/app/constants/style"
import Button from "./animations/Button"
import atencion from '../../../public/Atencion.webp'
import heladeraFrente from '../../../public/heladera-frente.webp'


const Heladeras = () => (
  <section id="product" className={`${layout.sectionReverse} mt-6 md:mt-20 xl:mt-0`}>
    <div className="absolute z-[3] w-[30%] h-[30%] -left-[30%] -mt-[20%] rounded-full white__gradient"/>
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 mt-[10%] rounded-full pink__gradient"/>
    
    <div className={layout.sectionImgReverse}>
      <Image src={heladeraFrente} alt="heladera" loading="lazy" className="w-[280px] md:w-[320px] xl:w-auto lg:mr-36"/>
      <div className='absolute pt-52 pl-28 md:pl-32 lg:pl-48 md:w-[86%] xl:w-auto'>
        <Image src={atencion} alt="atencion tecnica inmediata" loading="lazy" />
      </div>
    </div>

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Heladeras Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio Técnico Especializado en Heladeras Familiares, Tropicales, No Frost y Freezers. Repuestos originales</p>
      <Button styles="mt-6 xl:mt-10" text="Mas Información" link="heladeras"/>
    </div>
  </section>
);

export default Heladeras;
