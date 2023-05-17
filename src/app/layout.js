import { Poppins } from '@next/font/google'
import styles from '@/styles/global.css'
import NavBar from './components/NavBar'
import { Suspense } from "react"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import('./components/Footer'), {
  suspense: true,
})

export const metadata = {
  meta: 'charset="UTF-8"',
  meta: 'http-equiv="X-UA-Compatible" content="IE=edge"',
  meta: 'name="viewport"',
  content: 'width=device-width, initial-scale=1.0, user-scalable=no',
  link: 'rel="icon" href="/favicon.ico"'
}

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400','600']
})



export default function RootLayout({ children }) {
  return (
    <>
      <html lang='es'>
        <body className={`${font.variable} appear bg-primary`}>
          <NavBar />
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <main className='p-6'>{children}</main>
                {/* <Suspense fallback={`Loading...`}>
                  <Footer />
                </Suspense> */}
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
