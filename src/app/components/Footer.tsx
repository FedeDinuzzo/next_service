"use client";

import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import styles from "../constants/style";
import { authorizedServices, footerLinks } from "../constants/index";

import logo from "../../public/logo.svg";

import WhatsappFooterForm from "./WhatsappFooterForm";
import Reveal from "./Reveal";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showServicesModal, setShowServicesModal] = useState(false);

  useEffect(() => {
    const scrollToWppForm = () => {
      if (window.location.hash !== "#wpp-form") return;

      let attempts = 0;
      const maxAttempts = 30;

      const timer = window.setInterval(() => {
        const target = document.getElementById("wpp-form");

        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY;
          const offset = window.innerHeight * 0.2;
          window.scrollTo({ top: top - offset, behavior: "smooth" });
          window.clearInterval(timer);
          return;
        }

        attempts += 1;
        if (attempts >= maxAttempts) window.clearInterval(timer);
      }, 120);
    };

    scrollToWppForm();
    window.addEventListener("hashchange", scrollToWppForm);
    return () => window.removeEventListener("hashchange", scrollToWppForm);
  }, []);

  useEffect(() => {
    if (showServicesModal) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [showServicesModal]);

  const handleHomeClick = (event: React.MouseEvent) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const renderLinkColumn = (footerLink: (typeof footerLinks)[number]) => {
    const isPages = footerLink.title === "Páginas";
    const isPhones = footerLink.title === "Teléfonos";

    // En Home:
    // - "Páginas" NO en LG+ (desktop)
    // - "Páginas" SÍ en < LG (md + mobile) para tu layout pedido
    const columnVisibilityClass = isHome && isPages ? "block lg:hidden" : "block";
    const columnPlacementClass = isPhones ? "col-start-1 row-start-2 sm:col-auto sm:row-auto" : "";

    return (
      <div className={[columnVisibilityClass, columnPlacementClass].join(" ")}>
        <div className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</div>

        <ul className="list-none mt-4">
          {footerLink.links.map((linkItem, index) => (
            <li
              key={`${footerLink.title}-${linkItem.name}`}
              className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary ${
                index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              {linkItem.link ? (
                linkItem.link.startsWith("/") ? (
                  <Link
                    href={linkItem.link}
                    aria-label={`Enlace a ${linkItem.name}`}
                    onClick={linkItem.link === "/" ? handleHomeClick : undefined}
                  >
                    {linkItem.name}
                  </Link>
                ) : (
                  <Link
                    href={linkItem.link}
                    aria-label={`Enlace a ${linkItem.name}`}
                    className={
                      isPhones && linkItem.link.startsWith("tel:")
                        ? "js-track-call"
                        : undefined
                    }
                    data-track-label={
                      isPhones && linkItem.link.startsWith("tel:")
                        ? `footer_phone_${index + 1}`
                        : undefined
                    }
                  >
                    {linkItem.name}
                  </Link>
                )
              ) : (
                <span>{linkItem.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  /**
   * LINKS EN HOME:
   * - En LG+: mostrar solo Medios de pago + Teléfonos (2 cols) porque el form es la 3ra col.
   * - En <LG: mostrar Medios + Teléfonos + Páginas (3 cols) debajo.
   */
  const homeLinks = footerLinks.filter((f) => f.title !== "Páginas"); // para LG+ (sin Páginas)
  const allLinks = footerLinks; // para no-home y para <LG en Home (Páginas visible por la clase)

  return (
    <div className={`bg-primary mb-12 lg:mb-0 lg:mt-12 xl:-mt-2 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} z-[10]`}>
        <section className={`${styles.paddingY}`}>
          {/* GRID PRINCIPAL:
              - Base: 1 col
              - MD: 2 cols (Brand | Form) + Links abajo span 2
              - LG: 12 cols para armar (Brand 4) (Links 4) (Form 4) en Home
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 w-full items-start mb-8">
            {/* BRAND */}
            <Reveal variant="text" className="md:col-span-1 lg:col-span-4">
              <Image
                src={logo}
                alt="logo"
                loading="lazy"
                width={189}
                height={35}
                className="w-[266px] h-auto"
              />
              <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                Bien hecho es mejor que bien dicho. Tu service de confianza.
              </p>
            </Reveal>

            {/* FORM (SOLO HOME)
                - MD: col 2 (al lado del brand)
                - LG: col 9-12 (tercera columna del bloque derecho)
            */}
            {isHome ? (
              <div
                id="wpp-form"
                className="md:col-span-1 lg:col-span-4 lg:col-start-9 w-full max-w-[420px] lg:max-w-none"
              >
                <WhatsappFooterForm />
              </div>
            ) : null}

            {/* LINKS
                - Home:
                  - MD: abajo (span 2)
                  - LG+: columna 5-8 (2 columnas internas: Medios + Teléfonos)
                - No-Home:
                  - MD: abajo (span 2)
                  - LG+: columna 5-12 (3 columnas internas: Medios + Teléfonos + Páginas)
            */}
            <Reveal
              variant="text"
              className={[
                "md:col-span-2 md:row-start-2", // en md siempre abajo, ocupando el ancho completo
                isHome
                  ? "lg:col-span-4 lg:col-start-5 lg:row-start-1"
                  : "lg:col-span-8 lg:col-start-5 lg:row-start-1",
              ].join(" ")}
            >
              <div
                className={[
                  "grid gap-8",
                  // En mobile: 1 col
                  // En sm: 2 cols (para que no se aplaste)
                  // En md: 3 cols (querés ver 3 columnas abajo en home también)
                  // En lg+:
                  //  - Home: 2 cols (porque la 3ra col es el form)
                  //  - No-Home: 3 cols
                  "grid-cols-2 sm:grid-cols-2 md:grid-cols-3",
                  isHome ? "lg:grid-cols-2" : "lg:grid-cols-3",
                ].join(" ")}
              >
                {(isHome ? allLinks : allLinks)
                  // En no-home: se muestran todos siempre
                  // En home: "Páginas" se maneja con la clase "block lg:hidden" (visible <lg, oculto lg+)
                  .map((footerLink) => (
                    <Fragment key={footerLink.title}>{renderLinkColumn(footerLink)}</Fragment>
                  ))}
              </div>
            </Reveal>
          </div>

          {/* BOTTOM BAR */}
          <Reveal
            variant="text"
            className="w-full flex gap-2 md:gap-0 justify-between items-center md:flex-row flex-col-reverse pt-2 md:pt-6 border-t-[1px] border-t-[#3F3E45] md:mb-6 mb-0"
          >
            <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
              Copyright © 2026 |{" "}
              <span className="text-secondary">
                <span className="sm:hidden">Service Electrolux A&amp;T</span>
                <span className="hidden sm:inline">Servicio Técnico Electrolux A&amp;T</span>
              </span>
            </p>

            <div className="flex flex-row md:mt-0 mt-6 items-center">
              <button
                type="button"
                onClick={() => setShowServicesModal(true)}
                className="mx-3 rounded-[14px] px-3 py-2 text-[12px] font-poppins font-semibold bg-blue-gradient text-primary"
              >
                <span className="sm:hidden">Servicios autorizados</span>
                <span className="hidden sm:inline">Red de servicios autorizados</span>
              </button>
              <a
                href="https://www.instagram.com/atencion.tecnica/"
                aria-label="Instagram"
                className="js-track-instagram mx-2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-blue-gradient"
                data-track-label="footer_instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-[18px] text-primary" />
              </a>
              <a
                href="https://maps.google.com/?q=Montevideo+1083,+C1019+Cdad.+Autónoma+de+Buenos+Aires"
                aria-label="Ubicación"
                className="js-track-maps mx-2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-blue-gradient"
                data-track-label="footer_maps"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt className="text-[18px] text-primary" />
              </a>
              <a
                href="tel:01143838283"
                aria-label="Teléfono"
                className="js-track-call mx-2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-blue-gradient"
                data-track-label="footer_social_tel"
              >
                <FaPhoneAlt className="text-[18px] text-primary" />
              </a>
            </div>
          </Reveal>
        </section>
      </div>

      {showServicesModal ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Cerrar"
            onClick={() => setShowServicesModal(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
            className="relative w-[90vw] max-w-[520px] mx-auto rounded-[24px] bg-black-gradient p-6 shadow-2xl modal-pop"
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-gradient text-primary font-black text-[16px] shadow-[0_10px_24px_rgba(10,27,111,0.28)] transition hover:scale-[1.02]"
              onClick={() => setShowServicesModal(false)}
              aria-label="Cerrar modal"
            >
              ?
            </button>
            <h3 id="services-modal-title" className="font-poppins font-semibold text-white text-[22px] mb-2">
              Red de servicios autorizados
            </h3>
            <p className="font-poppins text-dimWhite text-[15px] mb-4">
              Sitios oficiales de marcas con las que trabajamos.
            </p>
            <div className="flex flex-col gap-3">
              {authorizedServices.map((site) => (
                <a
                  key={site.id}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[14px] bg-[#11101d] px-3 py-2 text-[14px] font-poppins font-semibold text-center"
                >
                  <span className="bg-[linear-gradient(135deg,#5ce1e6_0%,#33bbcf_60%,#2596a8_100%)] text-transparent bg-clip-text">
                    {site.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
