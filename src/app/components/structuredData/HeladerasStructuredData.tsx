"use client";

import React from "react";
import { feedback } from "../../constants";

const HeladerasStructuredData = () => {
  const heladeraReviews = feedback.filter((f) => f.categoria === "heladera");

  const averageRating = heladeraReviews.reduce((acc, curr) => acc + curr.rating, 0) / heladeraReviews.length;

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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      bestRating: "5",
      ratingCount: heladeraReviews.length.toString(),
    },
    review: heladeraReviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewBody: r.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default HeladerasStructuredData;
