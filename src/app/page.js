import Hero from './components/Hero'
import Heladeras from './components/Heladeras'
import Lavarropas from './components/Lavarropas'
import Zones from './components/Zones'
import CTA from './components/CTA'
import Features from './components/Features'
import { zones } from "@/app/constants/index"
import styles, {layout} from "./constants/style"
import Image from 'next/image'
import Stats from "./components/Stats"
import heladeraLavarropas from '../../public/heladera-lavarropas.webp'
import Ball from "./components/animations/Ball"
import autorizado from "../../public/autorizado.svg"
import robotHand from "../../public/robot-hand.webp"
import heroVector from "../../public/Vector.svg"
import { stats } from '@/app/constants/index'
import Button from './components/Button'
import lavarropas from '../../public/lavarropas-frente.webp'
import atencion from '../../public/Atencion.webp'
import heladeraFrente from '../../public/heladera-frente.webp'

function Home() {
  return (
    <>
    <div className={`${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}>
      <section id="home" class={`flex md:flex-row flex-col ${styles.paddingY} lg:mt-[4px] xl:-mt-16`}>
    <div className={`flex-1 ${styles.flexStartHero} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="fadeTop flex flex-row items-center -mt-9 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={autorizado} alt="autorizado" class="w-[32px] h-[32px]" 
        priority
        sizes=""
        />
        <p className={`${styles.paragraph} `}>
          <span className="text-white">hola </span>
          como {" "}
          <span className="text-white">estas</span>
        </p>
      </div>
      
      <div className="flex flex-row justify-between items-center w-full">
        <div className="absolute z-[0] w-[60%] h-[20%] -left-[50%] rounded-full bg-white blur-[250px]" />
        <h1 className="fadeLeft flex-1 font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px]">
          soy <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">fede</span> {" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
        <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-2 border-[#5ce1e6] p-[2px] cursor-pointer z-[1]`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
          <span className="text-gradient">Solicitar</span>
        </p>
        <Image src="/arrow-up.svg" width="23" height="23" alt="arrow" className="object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">un Técnico</span>
      </p>
    </div>
  </div>
        </div>
      </div>

      <h1 className="fadeLeft font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px] w-full">
        federico
      </h1>
      <div className="appear2">
        <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux.</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 hidden md:block`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux. Desliza e infórmate acerca de nuestra forma de trabajo.</p>
      </div>
    </div>
    

    <div className="absolute z-[0] w-[40%] h-[70%] top-[0%] right-0 lg:-right-[15%] rounded-full blue__gradient opacity-80" />
    <div className="absolute z-[0] w-[40%] h-[40%] -top-[20%] right-0 rounded-full pink__gradient" />
    <div className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}>
      <div className="w-[6%] sm:w-[34%] md:w-[14%] xl:w-[0%]"/>
      <div className="w-[94%] sm:w-[70%] md:w-[86%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
        <div className="absolute right-[12%]">
          <Image src={heroVector} alt="" className="heroVector" 
          priority
          sizes=""
          />
        </div>
        <div className="absolute">
          <Image src={heladeraLavarropas} alt="fondo" className="heroImg"         
          priority
          sizes=""
          /> 
        </div>
        
        <div className="balls">
        <div className="absolute left-[15%] top-[54%] hidden xl:block">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div className="absolute left-[13%] top-[54%] block md:hidden">
          <Ball w={36} h={200} cx={20} cy={40} r={10} cyAnimate={20} duration={4} /> 
        </div>
        <div className="absolute left-[15%] top-[54%] hidden md:block lg:hidden">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div className="absolute left-[15%] top-[54%] hidden lg:block xl:hidden">
          <Ball w={60} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>


        <div className="absolute left-[58%] top-[50%] block md:hidden">
          <Ball w={66} h={132} cx={33} cy={40} r={16} cyAnimate={20} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden md:block lg:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden lg:block xl:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[64%] top-[50%] hidden xl:block">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>

        <div className="absolute left-[1%] block md:hidden">
          <Ball w={100} h={200} cx={50} cy={60} r={26} cyAnimate={40} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden md:block lg:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden lg:block xl:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div className="absolute left-[6%] hidden xl:block">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div> 
        </div>

        <div className="absolute md:w-full md:h-full ">
          <Image src={robotHand} alt="fondo" className="robotHand" 
          priority
          sizes=""
          />
        </div>
      </div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
    <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-2 border-[#5ce1e6] p-[2px] cursor-pointer z-[1]`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
          <span className="text-gradient">Solicitar</span>
        </p>
        <Image src="/arrow-up.svg" width="23" height="23" alt="arrow" className="object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">un Técnico</span>
      </p>
    </div>
  </div>
    </div>
  </section>
      <div className={`${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
        <section className={`sm:${styles.flexCenter} flex-row flex-wrap mb-10 md:mb-20 m-6 md:-mt-48 lg:-mt-24 xl:mt-0`}>
    {/* <Counter from={0} to={100} /> */}
    {stats.map((stat) => (
      <div key={stat.id} className={`sm:flex-1 flex justify-start items-center flex-row m-3 lg:m-0`}>
        <h4 className='font-poppins font-semibold sm:text-[40px] xs:text-[36px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-poppins font-normal sm:text-[20px] xs:text-[18px] text-[16px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
        </div>
      </div>
        <Features />
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
      <Button styles="mt-6 xl:mt-10" text="Mas Información" link=""/>
    </div>
  </section>
  <section id="product" className={`${layout.section} -mb-28 -mt-8 md:mt-0 xl:-my-20 xl:-mb-40`}>
    <div className="absolute z-[0] w-[24%] h-[70%] -right-[0%] rounded-l-full blue__gradient" />

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>Reparación de <br className="sm:block hidden" />Lavarropas Electrolux</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Servicio técnico especializado en Lavarropas de Carga frontal y Carga superior Electrolux. Repuestos originales</p>
      <Button styles="mt-6 xl:mt-10" text="Mas Información" link="" />
    </div>
    
    <div className={layout.sectionImgReverse}>
      <Image src={lavarropas} alt="lavarropas" loading="lazy" className="w-[240px] md:w-[280px] xl:w-auto lg:ml-36"/>
    </div>
    
  </section>
  <section className={`${styles.flexCenter} ${styles.paddingY} my-4 lg:my-12 xl:my-0`}>
    <div className={`${styles.flexCenter} flex-wrap md:w-full z-[10]`}>
      {zones.map((zone) => (
        <div key={zone.id} className={`flex-1 ${styles.flexCenter} min-w-[270px]`}>\
          <Image src={`/${zone.logo}.webp`} alt="zones" loading="lazy" width={zone.width} height={53} className=""/>
        </div>
      ))};
    </div>
  </section>
  <section className={`${styles.flexCenter} ${styles.marginY} py-8 md:py-0`}>
    <div className={`z-[10] ${styles.flexCenter} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow w-full sm:flex-row flex-col`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Solicita un Service Hoy!</h2>
      <p className={`${styles.paragraph} max-w-[520px] mt-5`}>Nuestros representantes están disponibles. Cuéntenos su problema y con gusto le ayudaremos.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mb-4 md:mb-0`}>
      <Button text="Llamada telefónica" link="" />
    </div>
    </div>
  </section>
      </div>
      </div>
    </>
  )
}

export default Home
