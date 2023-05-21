import Hero from '../components/Hero'
import styles from "@/app/constants/style"
import reparacionLavarropas from '../../public/reparaciones-lavarropas.webp'
import tecnicoLavarropas from '../../public/tecnicoLavarropas.webp'
import step2v from '../../public/step2v.webp'
import { lazy, Suspense } from "react"

export const metadata = {
  title: '▷ Service de Lavarropas ❄️ ELECTROLUX | Autorizado',
  description: 'Se rompio tu lavarropas ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de lavarropas Electrolux',
  keywords: "servicio, service, electrolux, lavarropas, reparacion, arreglo, tecnicos, asistencia, capital federal, zona norte, zona sur, servicio tecnico de lavarropas electrolux, service de lavarropas electrolux, reparacion de lavarropas electrolux",
  openGraph: {
    type: "website",
    url: "https://service-electrolux.ar/lavarropas",
    title: "▷ Service de Lavarropas❄️ ELECTROLUX | Autorizado",
    description: "Se rompio tu lavarropas ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de lavarropas Electrolux",
    siteName: "Service de Lavarropas Electrolux",
    images: [
      {
        url: '/service-lavarropas-electrolux.jpg',
        width: 600,
        height: 600,
        alt: 'lavarropas electrolux',
      },
    ],
  },
}

const WorkForm = lazy(() => import('../components/WorkForm'))
const Repair = lazy(() => import('../components/Repair'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const CTA = lazy(() => import('../components/CTA'))

function lavarropas() {
  return (
    <>
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
            <Repair gadget="lavarropas" step={step2v} />
            <Testimonials />
            <CTA />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default lavarropas