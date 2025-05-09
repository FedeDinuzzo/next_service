"use client";

import React from "react";

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Service Electrolux",
    image: "https://www.service-electrolux.ar/opengraph-image.jpg",
    "@id": "https://www.service-electrolux.ar",
    url: "https://www.service-electrolux.ar",
    telephone: "+54 911 3629-9090",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Montevideo 1083",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressRegion: "CABA",
      postalCode: "C1019",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.598887,
      longitude: -58.392608,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],

    serviceType: [
      {
        "@type": "Service",
        name: "Reparación de heladeras Electrolux",
        areaServed: {
          "@type": "Place",
          name: "Buenos Aires",
        },
      },
      {
        "@type": "Service",
        name: "Reparación de lavarropas Electrolux",
        areaServed: {
          "@type": "Place",
          name: "Buenos Aires",
        },
      },
    ],
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.8",
    //   reviewCount: "150",
    // },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default StructuredData;
