import styles from "./constants/style"
import Stats from "./components/Stats"
import heladeraLavarropas from '../../public/heladera-lavarropas.webp'
import Hero from './components/Hero'
import Features from './components/Features'
import Heladeras from './components/Heladeras'
import Lavarropas from './components/Lavarropas'
import Zones from './components/Zones'
import CTA from './components/CTA'

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
      img={heladeraLavarropas}
    />
      <div className={`${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
        <Features />
        <Heladeras />
        <Lavarropas />
        <Zones />
        <CTA />
    </div>
    </div>
  )
}

export default Home;