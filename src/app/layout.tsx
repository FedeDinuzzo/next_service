import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Poppins } from "@next/font/google";
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
  title:
    "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
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
    title:
      "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title:
      '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA"',
    description:
      "ervice autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-K9JFL5RV" />
      <body className={`${font.variable} bg-primary`}>
        <NavBar />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <main className="p-6">{children}</main>
            <Suspense fallback={`Loading...`}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
