import Hero from '../components/Hero'
import styles from "@/app/constants/style"
import reparacionHeladeras from '../../public/reparaciones-heladeras.webp'
import tecnicoHeladeras from '../../public/tecnicoHeladeras.webp'
import step2 from '../../public/step2.webp'
import { lazy, Suspense } from "react"

export const metadata = {
  title: '▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado',
  description: 'Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux',
  keywords: ["servicio", "service", "electrolux", "heladeras", "reparacion", "arreglo", "tecnicos", "asistencia", "capital federal", "zona norte", "zona sur", "servicio tecnico de heladeras electrolux", "service de heladeras electrolux", "reparacion de heladeras electrolux"],
  openGraph: {
    type: "website", 
    url: "https://service-electrolux.ar/heladeras", 
    title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado", 
    description: "Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux", 
    siteName: "Service de Heladeras Electrolux",
  },
}

const WorkForm = lazy(() => import('../components/WorkForm'))
const Repair = lazy(() => import('../components/Repair'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const CTA = lazy(() => import('../components/CTA'))

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
          img={2}
          ruta={1}
        />
        <Suspense fallback={`Loading...`}>
          <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />
          <Repair gadget="heladera" step={step2}/>
          <Testimonials />
          <CTA />
        </Suspense>
      </div>  
    </div>  

  )
}

export default heladeras