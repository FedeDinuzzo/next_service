"use client";

import React from "react";

const ContactStructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contacto - Service Electrolux",
    url: "https://www.service-electrolux.ar/contacto",
    about: {
      "@type": "LocalBusiness",
      name: "Service Electrolux",
      url: "https://www.service-electrolux.ar",
    },
    mainEntity: {
      "@type": "ContactPage",
      name: "Contacto",
      description:
        "Página de contacto autorizado de Service Electrolux. Solicita una visita técnica o envíanos tu consulta.",
      url: "https://www.service-electrolux.ar/contacto",
      contactOption: [
        {
          "@type": "ContactPoint",
          telephone: "+54 911 3629-9090",
          contactType: "customer service",
          areaServed: "AR",
          availableLanguage: ["es"],
        },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default ContactStructuredData;
