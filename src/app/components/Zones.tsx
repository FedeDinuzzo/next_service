"use client";

import { useEffect, useState } from "react";
import { zoneDetails, zones, zoneSummaries } from "../constants/index";
import styles from "../constants/style";
import { getWhatsAppNumber, VALID_WPP_NUMBERS } from "../utils/whatsapp";
import Reveal, { RevealGroup } from "./Reveal";

type ZoneId = "client-1" | "client-2" | "client-3";

const Zones = () => {
  const [activeZoneId, setActiveZoneId] = useState<ZoneId | null>(null);

  const activeZone = activeZoneId ? zoneDetails[activeZoneId] : null;
  const activeZoneLabel = activeZoneId
    ? zoneSummaries.find((zone) => zone.id === activeZoneId)?.title
    : null;

  useEffect(() => {
    if (activeZoneId) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [activeZoneId]);

  const toSlug = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");

  const getWhatsAppTargetUrl = (place: string) => {
    const number = getWhatsAppNumber();
    if (!VALID_WPP_NUMBERS.includes(number)) {
      return "";
    }

    const zona = activeZoneLabel ?? "mi zona";
    const message = `Hola, quiero un service Electrolux en ${zona}, barrio ${place}.`;
    return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      message,
    )}`;
  };

  const handleWhatsAppRedirect = (place: string) => {
    const targetUrl = getWhatsAppTargetUrl(place);
    if (!targetUrl) {
      console.error("Invalid WhatsApp number:", getWhatsAppNumber());
      return;
    }

    window.open(targetUrl, "_blank");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveZoneId(null);
    };
    if (activeZoneId) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeZoneId]);

  return (
    <>
    <Reveal variant="heavy">
      <section
        className={`${styles.flexCenter} ${styles.paddingY} my-4 -mt-12 md:mt-32 md:mb-20 lg:mb-0 lg:mt-28 lg:-my-16 xl:my-0`}
      >
        <div className="w-full">
          <div className="px-6 xl:px-0 max-w-[900px] mx-auto md:hidden">
            <h2 className={styles.heading2}>Zonas de cobertura</h2>
          </div>

          {/* ✅ Contenedor corregido:
            - md: mantiene flex wrap
            - lg+: flex-row sin wrap + justify-between dentro de max-w centrado
        */}
          <RevealGroup
            variant="card"
            className={[
              `${styles.flexCenter} flex-col md:flex-row flex-wrap`,
              "md:w-full",
              "gap-4 md:gap-6",
              "px-6 md:px-0 mt-6 md:mt-0 z-[10]",
              "lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center",
              "lg:max-w-[1100px] lg:mx-auto",
              "lg:gap-0",
            ].join(" ")}
          >
            {zones.map((zone) => {
              const zoneId = zone.id as ZoneId;

              const alt =
                zoneId === "client-1"
                  ? "Capital Federal"
                  : zoneId === "client-2"
                    ? "Zona Sur"
                    : "Zona Norte";

              return (
                <div
                  key={zone.id}
                  className={[
                    "w-full",
                    "md:flex-1",
                    "min-w-[340px]",
                    "my-1",
                    // ✅ En lg fijamos el ancho del “slot” para que los 3 sean idénticos
                    "lg:w-80 lg:flex-none lg:my-0",
                    `${styles.flexCenter}`,
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setActiveZoneId(zoneId)}
                    className={[
                      "group relative flex w-full md:w-80 lg:w-80",
                      "cursor-pointer items-center justify-between gap-4",
                      "rounded-[20px] px-6 py-4 text-left",
                      "transition-transform duration-300 hover:scale-[1.02]",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary",
                      // ✅ En lg sin fondo / sin sombra como querías
                      "feature-card-set lg:bg-transparent lg:shadow-none",
                    ].join(" ")}
                    aria-label={`Ver cobertura de ${alt}`}
                  >
                    <span className="flex items-center gap-3 pointer-events-none">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-white transition-colors group-hover:text-secondary"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5Z"
                        />
                      </svg>

                      <span className="font-poppins font-black text-[22px] sm:text-[24px] md:text-[28px] text-white transition-colors group-hover:text-secondary">
                        {zoneId === "client-1" ? (
                          <>
                            <span className="hidden">Capital Federal</span>
                            <span className="inline lg:hidden">CABA</span>
                            <span className="hidden lg:inline">
                              Capital Federal
                            </span>
                          </>
                        ) : (
                          alt
                        )}
                      </span>
                    </span>

                    <span
                      className="ml-2 md:hidden pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white group-hover:text-secondary transition-colors"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              );
            })}
          </RevealGroup>
        </div>

      </section>
    </Reveal>

    {activeZone ? (
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
        <button
          type="button"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-label="Cerrar"
          onClick={() => setActiveZoneId(null)}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="zone-modal-title"
          className="relative w-[90vw] max-w-[520px] mx-auto rounded-[24px] bg-black-gradient p-6 shadow-2xl modal-pop"
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-gradient text-primary font-black text-[16px] shadow-[0_10px_24px_rgba(10,27,111,0.28)] transition hover:scale-[1.02]"
            onClick={() => setActiveZoneId(null)}
            aria-label="Cerrar modal"
          >
            ✕
          </button>

          <h3
            id="zone-modal-title"
            className="font-poppins font-semibold text-white text-[22px] mb-2"
          >
            {activeZone.title}
          </h3>

          <p className="font-poppins text-dimWhite text-[15px] mb-4">
            {activeZone.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1 zone-scroll">
            {activeZone.places.map((place) => (
              <button
                key={place}
                type="button"
                onClick={() => handleWhatsAppRedirect(place)}
                className="js-track-whatsapp rounded-[14px] bg-[#11101d] px-2 py-2 text-[14px] text-center font-poppins font-semibold transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                aria-label={`Consultar service en ${place}`}
                data-lead-action="whatsapp"
                data-lead-clicked-to={getWhatsAppTargetUrl(place)}
                data-track-label={`zones_barrio_${toSlug(place)}`}
              >
                <span className="bg-[linear-gradient(135deg,#5ce1e6_0%,#33bbcf_60%,#2596a8_100%)] text-transparent bg-clip-text">
                  {place}
                </span>
              </button>
            ))}
          </div>

          <p className="font-poppins text-dimWhite text-[13px] mt-4">
            Consultanos si tu zona no figura y coordinamos la visita.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="tel:01143838283"
              className="js-track-call inline-flex items-center justify-center rounded-[14px] px-5 py-3 font-poppins font-semibold text-primary bg-blue-gradient shadow-[0_16px_36px_rgba(10,27,111,0.28)] transition hover:-translate-y-0.5"
              data-track-label="zones_call_btn"
            >
              <span className="block sm:hidden">Llama y repara hoy</span>
              <span className="hidden sm:block">
                Llamanos y reservá tu reparación
              </span>
            </a>
          </div>
        </div>
      </div>
    ) : null}
    </>
  );
};

export default Zones;
