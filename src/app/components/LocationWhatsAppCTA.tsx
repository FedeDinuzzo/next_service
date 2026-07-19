"use client";

import { getWhatsAppNumber, VALID_WPP_NUMBERS } from "../utils/whatsapp";
import { SITE } from "../constants/site";

type Props = {
  locationName: string;
  zoneTitle: string;
  className?: string;
};

const LocationWhatsAppCTA = ({ locationName, zoneTitle, className = "" }: Props) => {
  const handleClick = () => {
    const number = getWhatsAppNumber();
    if (!VALID_WPP_NUMBERS.includes(number)) {
      console.error("Invalid WhatsApp number:", number);
      return;
    }

    const message = `Hola, quiero un service ${SITE.brand} en ${zoneTitle}, barrio ${locationName}.`;
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`js-track-whatsapp inline-flex items-center justify-center rounded-[14px] px-6 py-3 font-poppins font-semibold text-white shadow-[0_16px_36px_rgba(10,27,111,0.28)] transition hover:-translate-y-0.5 ${className}`}
      style={{ background: SITE.gradient }}
      data-lead-action="whatsapp"
      data-track-label={`location_${locationName}_wpp`}
      aria-label={`Consultar por WhatsApp service en ${locationName}`}
    >
      Consultar por WhatsApp
    </button>
  );
};

export default LocationWhatsAppCTA;
