const ContactStructuredData = () => {
  const baseUrl = "https://service-electrolux.ar";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contacto - Service Electrolux",
    url: `${baseUrl}/contacto`,
    about: {
      "@type": "LocalBusiness",
      name: "Service Electrolux",
      url: baseUrl,
      sameAs: [
        "https://www.instagram.com/atencion.tecnica/",
        "https://maps.google.com/?q=Montevideo+1083,+C1019+Cdad.+Autónoma+de+Buenos+Aires",
      ],
    },
    mainEntity: {
      "@type": "ContactPage",
      name: "Contacto",
      description:
        "Página de contacto autorizado de Service Electrolux. Solicita una visita técnica o envíanos tu consulta.",
      url: `${baseUrl}/contacto`,
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
