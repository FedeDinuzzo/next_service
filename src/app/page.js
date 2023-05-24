import styles from "./constants/style"
import Hero from './components/Hero'
import Stats from "./components/Stats"
import { lazy, Suspense } from "react"

const Features = lazy(() => import('./components/Features'))
const Heladeras = lazy(() => import('./components/Heladeras'))
const Lavarropas = lazy(() => import('./components/Lavarropas'))
const Zones = lazy(() => import('./components/Zones'))
const CTA = lazy(() => import('./components/CTA'))

export const metadata = {
  alternates: {
    canonical: "https://service-electrolux.ar/",
  },
}

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