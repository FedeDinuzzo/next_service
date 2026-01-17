const ContactStructuredData = () => {
  const baseUrl = "https://servicedrean.ar";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contacto - Service Drean",
    url: `${baseUrl}/contacto`,
    about: {
      "@type": "LocalBusiness",
      name: "Service Drean",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ContactPage",
      name: "Contacto",
      description:
        "Página de contacto autorizado de Service Drean. Solicita una visita técnica o envíanos tu consulta.",
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
