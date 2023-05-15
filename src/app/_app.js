import '@/styles/global.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function App({ Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-sacle=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${poppins.variable}`}>
        <Component {...pageProps} />
      </main> 
    </>
  )
}
