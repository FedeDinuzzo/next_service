import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Repair from '../components/Repair'
import WorkForm from '../components/WorkForm'
import CTA from '../components/CTA'
import styles from "@/app/constants/style"
import lavarropasHero from '../../../public/lavarropasHero.webp'
import reparacionLavarropas from '../../../public/reparaciones-lavarropas.webp'
import tecnicoLavarropas from '../../../public/tecnicoLavarropas.webp'
import step2v from '../../../public/step2v.webp'


function lavarropas() {
  return (
    <div className={`${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}>
        <Hero
          textOne="SERVICIO"
          textTwo="TÉCNICO"
          textThree="AUTORIZADO"
          titleOne="Service De" 
          titleTwo="Lavarropas" 
          titleThree="Electrolux" 
          img={lavarropasHero}
        />
        <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />
        <Repair gadget="lavarropas" step={step2v}/>
        <Testimonials />
        <CTA />
      </div>
    </div>
  )
}

export default lavarropas