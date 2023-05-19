import styles from "./constants/style"
import Hero from './components/Hero'
import Stats from "./components/Stats"
import { lazy, Suspense } from "react"

export const metadata = {
  title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
  description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
  icon: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
  category: "Servicio tecnico",
  openGraph: {
    type: "website", 
    url: "https://service-electrolux.ar/lavarropas", 
    title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
  description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
    siteName: "Service de Lavarropas Electrolux",
    images: [
      {
        url: '/lavarropasElectrolux.jpg',
        alt: 'lavarropas electrolux',
      },
      {
        url: '/tecnicoLavarropas.jpg',
        alt: 'tecnico reparando lavarropas electrolux',
      },
    ],
  },
  index: true,
  follow: true,
  keywords: "website, responsive, seo friendly, servicio, service, electrolux, lavarropas, reparacion, arreglo, tecnicos, asistencia, capital federal, zona norte, zona sur, servicio tecnico de lavarropas electrolux, service de lavarropas electrolux, reparacion de lavarropas electrlux",
  creator: "Federico Di Nuzzo",
  generator: "Next.js",
  publisher: "Vercel",
}

const Features = lazy(() => import('./components/Features'))
const Heladeras = lazy(() => import('./components/Heladeras'))
const Lavarropas = lazy(() => import('./components/Lavarropas'))
const Zones = lazy(() => import('./components/Zones'))
const CTA = lazy(() => import('./components/CTA'))

function Home() {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero
          textOne="SERVICIO"
          textTwo="TÉCNICO"
          textThree="AUTORIZADO"
          titleOne="Service"
          titleTwo="Electrolux"
          titleThree="Especializado"
          img={1}
          ruta={1}
        />
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
          </div>
        </div>
        <Suspense fallback={`Loading...`}>
          <Features />
          <Heladeras />
          <Lavarropas />
          <Zones />
          <CTA />
        </Suspense>
      </div>
    </div>
  )
}

export default Home