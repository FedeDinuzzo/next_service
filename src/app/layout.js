import { Poppins } from '@next/font/google'
import styles from '@/styles/global.css'
import NavBar from './components/NavBar'
import { lazy, Suspense } from "react"

export const metadata = {
  title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
  description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website", 
    url: "https://service-electrolux.ar/", 
    title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
    description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
    siteName: "Service de Heladeras y Lavarropas Electrolux",
    images: [
      {
        url: '/service-electrolux.jpg',
        width: 600,
        height: 600,
        alt: 'heladera y lavarropas electrolux',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: "servicio, service, electrolux, heladeras, lavarropas, reparacion, arreglo, tecnicos, asistencia, capital federal, zona norte, zona sur, servicio tecnico de heladeras y lavarropas electrolux, service de lavarropas y heladeras electrolux, reparacion de heladeras y lavarropas electrlux",
  creator: "Federico Di Nuzzo",
  generator: "Next.js",
  publisher: "Vercel",
  verification: {
    google: 'google',
  },
}

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400', '600']
})

const Footer = lazy(() => import('./components/Footer'))

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${font.variable} bg-primary`}>
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
