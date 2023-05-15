import styles, { layout } from '@/app/constants/style'
import Button from "./Button"
import Image from "next/image"
import ellipse from "../../../public/ellipse.webp"
import step1 from "../../../public/step1.webp"
import step2 from "../../../public/step2.webp"
import step3 from "../../../public/step3.webp"
import step4 from "../../../public/step4.webp"

const repair = ({ gadget, step }) => (
  <section id="product" className={`${layout.section} mt-12 sm:mt-24 lg:mt-28 lg:-mb-20 xl:-mt-8 xl:-mb-40 md:-mt-8 md:-mb-8`}>
    <div className="absolute z-[3] w-[30%] h-[30%] -left-[30%] -mt-[20%] rounded-full white__gradient"/>
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 mt-[10%] rounded-full pink__gradient"/>

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Forma de Trabajo, <br className="sm:block hidden" />Reparaciones Ideales</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Arregla tu {gadget} electrolux en el momento con el metodo mas eficáz del mercado. Somos la solución que necesitas.</p>
      <Button styles="mt-6 xl:mt-10" text="Contactanos" link="" />
    </div>
    
    <div className={`${layout.sectionImgReverse} mb-[400px] sm:mb-[500px] lg:mb-[640px] md:ml-12`}>
      <div className="absolute mt-96">
        <Image src={ellipse} alt="step4" loading="lazy" />
      </div>
      <div className="absolute mt-96">
        <Image src={step1} alt="step1" loading="lazy" />
      </div>
      <div className="absolute mt-96">
        <Image src={step} alt="step2" loading="lazy" />
      </div>
      <div className="absolute mt-96">
        <Image src={step3} alt="step3" loading="lazy" />
      </div>
      <div className="absolute mt-96">
        <Image src={step4} alt="step4" loading="lazy" />
      </div>
    </div>
    
  </section>
);

export default repair;