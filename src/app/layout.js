import { Poppins } from '@next/font/google'
import styles from '@/styles/global.css'
import NavBar from './components/NavBar'
import { lazy, Suspense } from "react"
import Head from 'next/head'

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400', '600']
})

const Footer = lazy(() => import('./components/Footer'))

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <Head>
        <title>▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA</title>
        <meta name="description" content="Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.ico" /> 
      </Head>
      <body className={`${font.variable} appear bg-primary`}>
        <NavBar />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <main className='p-6'>{children}</main>
            <Suspense fallback={`Loading...`}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  )
}
