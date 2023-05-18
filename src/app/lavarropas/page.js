import Hero from '../components/Hero'
import styles from "@/app/constants/style"
import reparacionLavarropas from '../../public/reparaciones-lavarropas.webp'
import tecnicoLavarropas from '../../public/tecnicoLavarropas.webp'
import step2v from '../../public/step2v.webp'
import { lazy, Suspense } from "react"

export const metadata = {
  title: '▷ Service de Lavarropas ❄️ ELECTROLUX | Autorizado',
  name: "description", 
  content: "Se rompio tu lavarropas ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de lavarropas Electrolux"
}

const WorkForm = lazy(() => import('../components/WorkForm'))
const Repair = lazy(() => import('../components/Repair'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const CTA = lazy(() => import('../components/CTA'))

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
          img={3}
          ruta={1}
        />
        <Suspense fallback={`Loading...`}>
          <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />
          <Repair gadget="lavarropas" step={step2v}/>
          <Testimonials />
          <CTA />
        </Suspense>
      </div>
    </div>
  )
}

export default lavarropas