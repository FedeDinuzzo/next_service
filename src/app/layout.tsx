import type { Metadata, Viewport } from "next";
import { Poppins } from "@next/font/google";
import Script from "next/script";
import "../styles/global.css";
import styles from "./constants/style";
import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://service-electrolux.ar"),
  title: "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
  description:
    "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    images:
      "https://service-electrolux-f4204ruh5-fededinuzzos-projects.vercel.app/opengraph-image.jpg?405fc21523a0661c",
    url: "https://service-electrolux.ar/",
    title: "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title: "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
    images:
      "https://service-electrolux-f4204ruh5-fededinuzzos-projects.vercel.app/opengraph-image.jpg?405fc21523a0661c",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "servicio",
    "service",
    "electrolux",
    "heladeras",
    "lavarropas",
    "reparacion",
    "arreglo",
    "tecnicos",
    "asistencia",
    "capital federal",
    "zona norte",
    "zona sur",
    "servicio tecnico de heladeras y lavarropas electrolux",
    "service de lavarropas y heladeras electrolux",
    "reparacion de heladeras y lavarropas electrlux",
  ],
  creator: "Federico Di Nuzzo",
  generator: "Next.js",
  publisher: "Vercel",
  verification: {
    google: "google",
  },
};

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
});

const Footer = lazy(() => import("./components/Footer"));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager script optimizado */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9JFL5RV');
            `,
          }}
        />
      </head>
      <body className={`${font.variable} bg-primary`}>
        {/* GTM fallback para navegadores sin JS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9JFL5RV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NavBar />
        <div className={`bg-primary ${styles.flexCenter} relative`}>
          <div className={`${styles.boxWidth}`}>
            <main className="py-6">{children}</main>
            <Suspense fallback={`Loading...`}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
