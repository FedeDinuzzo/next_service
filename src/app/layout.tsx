import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "../styles/global.css";
import styles from "./constants/style";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TrackingListener from "./components/TrackingListener";
import LeadTracking from "./components/LeadTracking";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8fafc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://service-electrolux.ar"),
  title: "▹ Service Electrolux | Servicio Técnico de Heladeras y Lavarropas",
  description: "Servicio técnico especializado Electrolux en heladeras y lavarropas. Reparaciones a domicilio en el día con garantía escrita. ¡Consultanos por WhatsApp!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://service-electrolux.ar/",
    title: "▹ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresá y contactanos - Servicio Técnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
    images: [
      {
        url: "https://service-electrolux.ar/opengraph-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Service Electrolux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title: "▹ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresá y contactanos - Servicio Técnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
    images: [
      {
        url: "https://service-electrolux.ar/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Service Electrolux",
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
    "reparacion de heladeras y lavarropas electrolux",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={`${font.variable} bg-primary`} suppressHydrationWarning>
        {/* GTM fallback para navegadores sin JS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9JFL5RV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ScrollToTop />
        <NavBar />
        <TrackingListener />
        <LeadTracking />
        <div className={`bg-primary ${styles.flexCenter} relative`}>
          <div className={`${styles.boxWidth}`}>
            <main className="py-6">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
