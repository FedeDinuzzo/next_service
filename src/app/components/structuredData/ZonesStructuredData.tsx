import { zoneDetails } from "../../constants";

const ZonesStructuredData = () => {
  const baseUrl = "https://service-electrolux.ar";
  const areas = Object.values(zoneDetails).flatMap((zone) =>
    zone.places.map((place) => ({
      "@type": "Place",
      name: place,
      address: {
        "@type": "PostalAddress",
        addressLocality: place,
        addressRegion: zone.title,
        addressCountry: "AR",
      },
    }))
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Servicio técnico Electrolux",
    provider: {
      "@type": "LocalBusiness",
      name: "Service Electrolux",
      url: baseUrl,
    },
    areaServed: areas,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default ZonesStructuredData;
