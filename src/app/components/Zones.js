"use client";

import { useEffect, useMemo, useState } from "react";
import { zones } from "../constants/index";
import styles from "../constants/style";
import Image from "next/image";
import capitalFederal from "../../public/capitalFederal.webp";
import zonaSur from "../../public/zonaSur.webp";
import zonaNorte from "../../public/zonaNorte.webp";

const Zones = () => {
  const [activeZoneId, setActiveZoneId] = useState(null);

  const zoneDetails = useMemo(
    () => ({
      "client-1": {
        title: "Capital Federal",
        subtitle: "Barrios que cubrimos",
        places: [
          "Agronomia",
          "Almagro",
          "Balvanera",
          "Barracas",
          "Belgrano",
          "Boca",
          "Boedo",
          "Caballito",
          "Chacarita",
          "Coghlan",
          "Colegiales",
          "Constitucion",
          "Flores",
          "Floresta",
          "La Paternal",
          "Liniers",
          "Mataderos",
          "Monte Castro",
          "Monserrat",
          "Nueva Pompeya",
          "Nunez",
          "Palermo",
          "Parque Avellaneda",
          "Parque Chacabuco",
          "Parque Chas",
          "Parque Patricios",
          "Puerto Madero",
          "Recoleta",
          "Retiro",
          "Saavedra",
          "San Cristobal",
          "San Nicolas",
          "San Telmo",
          "Velez Sarsfield",
          "Versalles",
          "Villa Crespo",
          "Villa del Parque",
          "Villa Devoto",
          "Villa General Mitre",
          "Villa Lugano",
          "Villa Luro",
          "Villa Ortuzar",
          "Villa Pueyrredon",
          "Villa Real",
          "Villa Riachuelo",
          "Villa Santa Rita",
          "Villa Soldati",
          "Villa Urquiza",
        ],
      },
      "client-2": {
        title: "Zona Sur",
        subtitle: "Localidades que cubrimos",
        places: [
          "Adrogue",
          "Avellaneda",
          "Banfield",
          "Bernal",
          "Berazategui",
          "Crucecita",
          "Don Bosco",
          "Florencio Varela",
          "Gerli",
          "Lanus",
          "Lavallol",
          "Lomas de Zamora",
          "Quilmes",
          "Remedios de Escalada",
          "Sarandi",
          "Temperley",
          "Valentin Alsina",
          "Villa Dominico",
          "Wilde",
        ],
      },
      "client-3": {
        title: "Zona Norte",
        subtitle: "Localidades que cubrimos",
        places: [
          "Vicente Lopez",
          "San Isidro",
          "Olivos",
          "Martinez",
          "Florida",
          "La Lucila",
        ],
      },
    }),
    []
  );

  const activeZone = activeZoneId ? zoneDetails[activeZoneId] : null;

  useEffect(() => {
    if (activeZoneId) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [activeZoneId]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveZoneId(null);
      }
    };
    if (activeZoneId) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeZoneId]);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} my-4 lg:my-12 xl:my-0`}>
      <div className={`${styles.flexCenter} flex-wrap md:w-full z-[10] gap-4`}>
        {zones.map((zone) => {
          const image =
            zone.id === "client-1" ? capitalFederal : zone.id === "client-2" ? zonaSur : zonaNorte;
          const alt =
            zone.id === "client-1"
              ? "Capital Federal"
              : zone.id === "client-2"
              ? "Zona Sur"
              : "Zona Norte";

          return (
            <div key={zone.id} className={`flex-1 ${styles.flexCenter} min-w-[270px] my-1`}>
              <button
                type="button"
                onClick={() => setActiveZoneId(zone.id)}
                className="transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00064F]"
                aria-label={`Ver cobertura de ${alt}`}
              >
                <Image src={image} alt={alt} loading="lazy" width={zone.width} height={53} className="" />
              </button>
            </div>
          );
        })}
      </div>

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
            className="relative w-full max-w-[520px] rounded-[24px] bg-black-gradient p-6 shadow-2xl modal-pop"
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-dimWhite hover:text-white transition"
              onClick={() => setActiveZoneId(null)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <h3 id="zone-modal-title" className="font-poppins font-semibold text-white text-[22px] mb-2">
              {activeZone.title}
            </h3>
            <p className="font-poppins text-dimWhite text-[15px] mb-4">{activeZone.subtitle}</p>
            <div className="grid grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1">
              {activeZone.places.map((place) => (
                <div
                  key={place}
                  className="rounded-[14px] bg-black-gradient-2 px-4 py-2 text-dimWhite text-[14px] text-center"
                >
                  {place}
                </div>
              ))}
            </div>
            <p className="font-poppins text-dimWhite text-[13px] mt-4">
              Consultanos si tu zona no figura y coordinamos la visita.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Zones;
