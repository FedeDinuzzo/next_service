import Hero from '../components/Hero'
import styles from "@/app/constants/style"
import reparacionHeladeras from '../../public/reparaciones-heladeras.webp'
import tecnicoHeladeras from '../../public/tecnicoHeladeras.webp'
import step2 from '../../public/step2.webp'
import { lazy, Suspense } from "react"

export const metadata = {
  title: '▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado',
  description: 'Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux',
  icon: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
  category: "Servicio tecnico",
  openGraph: {
    type: "website", 
    url: "https://service-electrolux.ar/heladeras", 
    title: "▷ Service de Heladeras ❄️ ELECTROLUX | Autorizado", 
    description: "Se rompio tu heladera ELECTROLUX? ✓ nosotros te lo reparamos EN EL DIA - Servicio Tecnico de heladeras Electrolux", 
    siteName: "Service de Heladeras Electrolux",
    images: [
      {
        url: '/heladeraElectrolux.jpg',
        alt: 'heladera electrolux',
      },
      {
        url: '/tecnicoHeladera.jpg',
        alt: 'tecnico reparando heladera electrolux',
      },
    ],
  },
  index: true,
  follow: true,
  keywords: "website, responsive, seo friendly, servicio, service, electrolux, heladeras, reparacion, arreglo, tecnicos, asistencia, capital federal, zona norte, zona sur, servicio tecnico de heladeras electrolux, service de heladeras electrolux, reparacion de heladeras electrlux",
  creator: "Federico Di Nuzzo",
  generator: "Next.js",
  publisher: "Vercel",
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