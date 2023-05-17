import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Repair from '../components/Repair'
import WorkForm from '../components/WorkForm'
import CTA from '../components/CTA'
import styles from "@/app/constants/style"
import heladeraHero from '../../../public/heladeraHero.webp'
import reparacionHeladeras from '../../../public/reparaciones-heladeras.webp'
import tecnicoHeladeras from '../../../public/tecnicoHeladeras.webp'
import step2 from '../../../public/step2.webp'

export const metadata = {
  title: '▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado',
  description: 'Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux',
}

function heladeras() {
  return (
    <div className={`${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}>
        <Hero    
          textOne="SERVICIO"
          textTwo="TÉCNICO"
          textThree="AUTORIZADO"
          titleOne="Service De" 
          titleTwo="De Heladeras" 
          titleThree="Electrolux" 
          img={heladeraHero}
          ruta={1}
        />
        <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />
        <Repair gadget="heladera" step={step2}/>
        <Testimonials />
        <CTA />
      </div>  
    </div>  

  )
}

export default heladeras