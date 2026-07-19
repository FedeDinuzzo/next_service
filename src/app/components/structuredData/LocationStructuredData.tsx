import type { Location } from "../../constants";
import { SITE } from "../../constants/site";

type Props = {
  location: Location;
};

const LocationStructuredData = ({ location }: Props) => {
  const pageUrl = `${SITE.domain}/zonas/${location.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Servicio técnico de heladeras y lavarropas ${SITE.brand}`,
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.zoneTitle,
      },
    },
    provider: {
      "@type": "LocalBusiness",
      name: SITE.legalName,
      url: SITE.domain,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default LocationStructuredData;
