"use client";

import { useMemo, useState } from "react";
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
  const normalizedQuery = toSlugUrl(query);

  const allLocations = useMemo(
    () => groups.flatMap((group) => group.locations),
    [groups],
  );

  const filteredLocations = useMemo(() => {
    if (!normalizedQuery) return allLocations;

    return allLocations.filter(
      (location) =>
        location.slug.includes(normalizedQuery) ||
        toSlugUrl(location.zoneTitle).includes(normalizedQuery),
    );
  }, [allLocations, normalizedQuery]);

  return (
    <div className={`${styles.paddingX} pb-16`}>
      <div className="max-w-[900px] mx-auto mb-8">
        <label htmlFor="zonas-search" className="sr-only">
          Buscar localidad o zona
        </label>
        <input
          id="zonas-search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscá tu barrio o zona (ej: Banfield, Palermo, Zona Sur...)"
          className="w-full rounded-[16px] feature-card-set px-5 py-4 font-poppins text-[15px] placeholder:text-dimWhite outline-none focus:ring-2"
          style={{ color: SITE.ink }}
        />
        {normalizedQuery ? (
          <p className="mt-2 font-poppins text-dimWhite text-[13px]">
            {filteredLocations.length} localidad
            {filteredLocations.length === 1 ? "" : "es"} encontrada
            {filteredLocations.length === 1 ? "" : "s"}
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
