"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Location } from "../constants";
import { toSlugUrl } from "../utils/slug";
import { getWhatsAppNumber, VALID_WPP_NUMBERS } from "../utils/whatsapp";
import { SITE } from "../constants/site";
import styles from "../constants/style";
import barrioImages from "../constants/barrioImages.json";

type ZoneGroup = {
  zoneId: string;
  zoneTitle: string;
  locations: Location[];
};

type ZonasSearchProps = {
  groups: ZoneGroup[];
};

type BarrioImage = {
  file: string;
  creditTitle: string;
  creditUrl: string;
  fallback: boolean;
};

const images = barrioImages as Record<string, BarrioImage | null>;

const getWhatsAppUrl = (location: Location) => {
  const number = getWhatsAppNumber();
  if (!VALID_WPP_NUMBERS.includes(number)) return "";

  const message = `Hola, quiero un service ${SITE.brand} en ${location.zoneTitle}, barrio ${location.name}.`;
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
};

const ZonaCard = ({ location }: { location: Location }) => {
  const whatsappUrl = getWhatsAppUrl(location);
  const image = images[location.slug];
  const zonaHref = `/zonas/${location.slug}`;

  return (
    <div className="rounded-[20px] feature-card-set overflow-hidden flex flex-col relative">
      <Link
        href={zonaHref}
        aria-label={`Ver zona de ${location.name}`}
        className="block group"
      >
        <div className="relative w-full h-[150px] overflow-hidden">
          {image ? (
            <Image
              src={`/zonas/${image.file}`}
              alt={`${location.name}, ${location.zoneTitle}`}
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full" style={{ background: SITE.gradient }} />
          )}
          <span
            className="absolute top-2 right-2 rounded-full px-3 py-1.5 text-[12px] font-poppins font-semibold text-white shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
            style={{ background: SITE.gradient }}
          >
            Ver zona →
          </span>
        </div>

        <div className="p-5 pb-0">
          <p
            className="font-poppins font-semibold text-[16px] leading-[22px]"
            style={{ color: SITE.ink }}
          >
            {location.name}
          </p>
          <p className="font-poppins text-dimWhite text-[13px]">{location.zoneTitle}</p>
          <p className="font-poppins text-dimWhite text-[13px] leading-[19px] mt-3">
            Servicio técnico de heladeras y lavarropas en {location.name}
          </p>
        </div>
      </Link>

      {image ? (
        <a
          href={image.creditUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute top-2 left-2 text-[9px] font-poppins text-white/80 bg-black/30 rounded px-1.5 py-0.5 hover:text-white"
        >
          Foto: Wikipedia
        </a>
      ) : null}

      <div className="p-5 pt-3 flex items-center gap-2">
        <a
          href={whatsappUrl || undefined}
          target="_blank"
          rel="noreferrer"
          className="js-track-whatsapp flex-1 text-center rounded-[12px] px-3 py-2 text-[13px] font-poppins font-semibold text-white transition hover:opacity-90"
          style={{ background: SITE.gradient }}
          data-lead-action="whatsapp"
          data-lead-clicked-to={whatsappUrl}
          data-track-label={`zonas_card_wpp_${location.slug}`}
          aria-label={`Consultar por WhatsApp service en ${location.name}`}
        >
          WhatsApp
        </a>
        <a
          href={`tel:${SITE.phonePrimaryTel}`}
          className="js-track-call flex-1 text-center rounded-[12px] px-3 py-2 text-[13px] font-poppins font-semibold border border-secondary/20 transition hover:bg-secondary/5"
          style={{ color: SITE.ink }}
          data-track-label={`zonas_card_call_${location.slug}`}
          aria-label={`Llamar por service en ${location.name}`}
        >
          Llamar
        </a>
      </div>
    </div>
  );
};

const ZonasSearch = ({ groups }: ZonasSearchProps) => {
  const [query, setQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const normalizedQuery = toSlugUrl(query);

  const allLocations = useMemo(
    () => groups.flatMap((group) => group.locations),
    [groups],
  );

  const filteredLocations = useMemo(() => {
    const byZone =
      selectedZone === "all"
        ? allLocations
        : allLocations.filter((location) => location.zoneId === selectedZone);

    if (!normalizedQuery) return byZone;

    return byZone.filter(
      (location) =>
        location.slug.includes(normalizedQuery) ||
        toSlugUrl(location.zoneTitle).includes(normalizedQuery),
    );
  }, [allLocations, normalizedQuery, selectedZone]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isFiltering = normalizedQuery.length > 0 || selectedZone !== "all";
  const selectedZoneTitle =
    groups.find((group) => group.zoneId === selectedZone)?.zoneTitle ?? null;

  return (
    <div className={`${styles.paddingX} pb-16`}>
      <div className="max-w-[900px] mx-auto mb-8">
        <label htmlFor="zonas-search" className="sr-only">
          Buscar localidad o zona
        </label>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex items-center gap-2 rounded-[16px] feature-card-set px-2 py-2"
        >
          <input
            id="zonas-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscá tu barrio o zona (ej: Banfield, Palermo, Zona Sur...)"
            className="flex-1 min-w-0 bg-transparent px-3 py-2 font-poppins text-[15px] placeholder:text-dimWhite outline-none"
            style={{ color: SITE.ink }}
          />

          <div className="relative shrink-0" ref={filterRef}>
            <button
              type="button"
              onClick={() => setIsFilterOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={isFilterOpen}
              aria-label="Filtrar por zona"
              title="Filtrar por zona"
              className="relative flex items-center justify-center w-11 h-11 rounded-[12px] border border-secondary/20 transition hover:bg-secondary/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 5h16M7 12h10M10 19h4"
                  stroke={SITE.ink}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {selectedZone !== "all" ? (
                <span
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
                  style={{ background: SITE.gradient }}
                  aria-hidden="true"
                />
              ) : null}
            </button>

            {isFilterOpen ? (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 rounded-[12px] feature-card-set p-2 z-10 shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
              >
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={selectedZone === "all"}
                  onClick={() => {
                    setSelectedZone("all");
                    setIsFilterOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-[8px] font-poppins text-[14px] hover:bg-secondary/5"
                  style={{
                    color: SITE.ink,
                    fontWeight: selectedZone === "all" ? 600 : 400,
                  }}
                >
                  Todas las zonas
                </button>
                {groups.map((group) => (
                  <button
                    key={group.zoneId}
                    type="button"
                    role="menuitemradio"
                    aria-checked={selectedZone === group.zoneId}
                    onClick={() => {
                      setSelectedZone(group.zoneId);
                      setIsFilterOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-[8px] font-poppins text-[14px] hover:bg-secondary/5"
                    style={{
                      color: SITE.ink,
                      fontWeight: selectedZone === group.zoneId ? 600 : 400,
                    }}
                  >
                    {group.zoneTitle}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            aria-label="Buscar"
            title="Buscar"
            className="shrink-0 flex items-center justify-center w-11 h-11 rounded-[12px] text-white transition hover:opacity-90"
            style={{ background: SITE.gradient }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-5.6-5.6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        {isFiltering ? (
          <p className="mt-2 font-poppins text-dimWhite text-[13px]">
            {filteredLocations.length} localidad
            {filteredLocations.length === 1 ? "" : "es"} encontrada
            {filteredLocations.length === 1 ? "" : "s"}
            {selectedZoneTitle ? ` en ${selectedZoneTitle}` : ""}
          </p>
        ) : null}
      </div>

      {filteredLocations.length === 0 ? (
        <p className="text-center font-poppins text-dimWhite">
          No encontramos tu localidad. Consultanos por WhatsApp y confirmamos cobertura.
        </p>
      ) : (
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLocations.map((location) => (
            <ZonaCard key={location.slug} location={location} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ZonasSearch;
