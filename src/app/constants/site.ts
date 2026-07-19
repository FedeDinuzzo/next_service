// Configuración de marca. Es lo único que cambia entre next_service y next_drean.
// El código nuevo (rutas /zonas, llms.txt, OG dinámica) lee de acá.

export const SITE = {
  brand: "Electrolux",
  legalName: "Service Electrolux",
  domain: "https://service-electrolux.ar",

  // Gradiente de marca (celeste/teal Electrolux). En next_drean es el azul Drean.
  gradient: "linear-gradient(135deg, #5ce1e6 0%, #33bbcf 60%, #2596a8 100%)",
  gradientStops: ["#5ce1e6", "#33bbcf", "#2596a8"] as const,

  // Color de texto "ink" para labels sobre feature-card-set (no hay token
  // Tailwind semántico para este rol; en next_drean equivale a navy oscuro).
  ink: "#ffffff",

  // Teléfono principal para botones "Llamar".
  phonePrimaryDisplay: "011 4383-8283",
  phonePrimaryTel: "01143838283",
} as const;

export type SiteConfig = typeof SITE;
