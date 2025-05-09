"use client";

import React from "react";

const HeladerasStructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reparación de Heladeras Electrolux",
    description:
      "Servicio técnico especializado en reparación de heladeras familiares, tropicales, no frost y freezers Electrolux. Repuestos originales y garantía de 1 año.",
    serviceType: "Reparación de heladeras",
    areaServed: {
      "@type": "Place",
      name: "Ciudad Autónoma de Buenos Aires",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Service Electrolux",
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
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de reparación",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carga de gas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistema No Frost",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de motocompresor",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de termostato",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de resistencia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de display",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de sensores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "cambio de ventilador",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "cambio de Plaqueta",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de termofusibles",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio termostato de ambiente",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "arreglo de Puertas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "cambio de burletes",
          },
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Martina Ramos",
        },
        reviewBody:
          "Tenía el lavarropas roto. Vinieron y lo arreglaron en el día. Me dejaron el lavarropas funcionando perfecto.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Augusto Weich",
        },
        reviewBody:
          "Vinieron de otro service a reparar mi heladera pero volvió a fallar. Encontré esta web y me lo solucionaron en el momento.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Martín Álvarez",
        },
        reviewBody:
          "Mi heladera no funcionaba, tenía medicamentos que necesitaban refrigeración. Me solucionaron el problema en el día.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default HeladerasStructuredData;
