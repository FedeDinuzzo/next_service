import styles from "@/app/constants/style"
import Image from 'next/image'
import SolicitarTecnico from "./SolicitarTecnico"
import robotHand from "../../public/robot-hand.webp"
import heroVector from "../../public/Vector.svg"
import autorizado from "../../public/autorizado.svg"
import heladerasLavarropas from "../../public/heladera-lavarropas.webp"
import heladeraHero from "../../public/heladeraHero.webp"
import lavarropasHero from "../../public/lavarropasHero.webp"
import phone from "../../public/phone.webp"
import Ball from "./animations/Ball"

const Hero = ({ textOne, textTwo, textThree, titleOne, titleTwo, titleThree, img , ruta }) => { 
  const condcion = 1

  return(
    <section id="home" className={`-m-6 flex md:flex-row flex-col ${styles.paddingY} md:mt-[56px] lg:mt-[72px] xl:-mt-16`}>
      <div className={`flex-1 ${styles.flexStartHero} flex-col xl:px-0 sm:px-16 px-6 h-[74vh]`}>
        <div className="max-h-[40px] fadeTop flex flex-row items-center -mt-4 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={autorizado} height="32px" width="32px" priority className="-ml-2" alt="autorizado" />
        
          <p className={`${styles.paragraph} flex`}>
            <span className="pr-1 text-white">{textOne}</span>
            {textTwo} {" "}
            <span className="pl-1 text-white">{textThree}</span>
          </p>
        </div>
      
        <div className="flex flex-row justify-between items-center w-full">
          <div className="absolute z-[0] w-[60%] h-[20%] -left-[50%] rounded-full bg-white blur-[250px]" />
          <h1 className="fadeLeft flex-1 font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px]">
            {titleOne} <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">{titleTwo}</span> {" "}
          </h1>
        
          </div></div>
    </section>
  )
}

export default Hero
