import { Poppins } from '@next/font/google'
import styles from '@/styles/global.css'
import NavBar from './components/NavBar'
import { Suspense } from "react"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import('./components/Footer'), {
  suspense: true,
})

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400', '600']
})

export default function RootLayout ({ children }) {
  return (
    <>
    <html className='appear bg-primary'>  
    <body className={`${font.variable}`}>
      <NavBar />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>{children}</main>
          <Suspense fallback={`Loading...`}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </body>
    </html>
  </>
  )
}
