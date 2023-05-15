import styles from "./constants/style"
import Stats from "./components/Stats"
import heladeraLavarropas from '../../public/heladera-lavarropas.webp'
import dynamic from 'next/dynamic'
import Hero from './components/Hero'

const Features = dynamic(() => import('./components/Features'), {
  ssr: false,
});

const Heladeras = dynamic(() => import('./components/Heladeras'), {
  ssr: false,
});

const Lavarropas = dynamic(() => import('./components/Lavarropas'), {
  ssr: false,
});

const Zones = dynamic(() => import('./components/Zones'), {
  ssr: false,
});

const CTA = dynamic(() => import('./components/CTA'), {
  ssr: false,
});

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