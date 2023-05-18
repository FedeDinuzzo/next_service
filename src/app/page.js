import styles from "./constants/style"
import Hero from './components/Hero'
import Stats from "./components/Stats"
import { lazy, Suspense } from "react"

import Image from 'next/image'
import heroVector from "../public/Vector.svg"
import heladerasLavarropas from "../public/heladera-lavarropas.webp"

export const metadata = {
  title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
  description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
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
         <Hero />
         {/*
          textOne="SERVICIO"
          textTwo="TÉCNICO"
          textThree="AUTORIZADO"
          titleOne="Service"
          titleTwo="Electrolux"
          titleThree="Especializado"
          img={1}
          ruta={1}
        /> */}
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