import { feedback } from "../../constants"; // Ajustá si el path cambia

const LavarropasStructuredData = () => {
  const baseUrl = "https://servicedrean.ar";
  const lavarropasReviews = feedback.filter((f) => f.categoria === "lavarropas");

  const averageRating = lavarropasReviews.length
    ? lavarropasReviews.reduce((acc, curr) => acc + curr.rating, 0) / lavarropasReviews.length
    : 5;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reparación de Lavarropas Drean",
    description:
      "Servicio técnico especializado en reparación de lavarropas Drean automáticos, de carga frontal y superior. Repuestos originales y atención en el día.",
    serviceType: "Reparación de lavarropas",
    areaServed: {
      "@type": "Place",
      name: "Ciudad Autónoma de Buenos Aires",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Service Drean",
      url: baseUrl,
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
      ratingCount: lavarropasReviews.length.toString(),
    },
    review: lavarropasReviews.map((r) => ({
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

export default LavarropasStructuredData;
