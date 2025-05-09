"use client";

import React from "react";

const LavarropasStructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reparación de Lavarropas Electrolux",
    description:
      "Servicio técnico especializado en reparación de lavarropas Electrolux automáticos, de carga frontal y superior. Repuestos originales y atención en el día.",
    serviceType: "Reparación de lavarropas",
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
      name: "Servicios de reparación de lavarropas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de bomba de desagote",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de correas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de rodamientos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de plaquetas electrónicas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de motor o tachos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reparación de puerta",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cambio de burletes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Problemas de centrifugado",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Error en el panel / display",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "No arranca",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "No carga agua",
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
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default LavarropasStructuredData;
