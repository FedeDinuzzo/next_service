// import { people01, people02, people03, mapa, instagram, linkedin, telefono, like, shield, star, capitalFederal, zonaSur, zonaNorte, navContacto, navHeladera, navLavarropas, navInicio  } from "../public"
import { toSlugUrl } from "../utils/slug";

export type NavLink = {
  id: string;
  img: string;
  title: string;
};

export const navLinks: NavLink[] = [
  {
    id: "",
    img: "navInicio",
    title: "Inicio",
  },
  {
    id: "heladeras",
    img: "navHeladera",
    title: "Heladeras",
  },
  {
    id: "lavarropas",
    img: "navLavarropas",
    title: "Lavarropas",
  },
  {
    id: "contacto",
    img: "navContacto",
    title: "Contacto",
  },
];

export type Feature = {
  id: string;
  icon: string;
  title: string;
  content: string;
};

export const features: Feature[] = [
  {
    id: "feature-1",
    icon: "star",
    title: "Calidad",
    content:
      "Nos esmeramos cada día para garantizar la plena satisfacción de nuestros clientes",
  },
  {
    id: "feature-2",
    icon: "shield",
    title: "100% Comprometidos",
    content:
      "Lo más importante de brindar un servicio es cumplir con nuestra palabra",
  },
  {
    id: "feature-3",
    icon: "like",
    title: "Confianza",
    content:
      "La mejor forma de crecer no es vendiendo un servicio, sino fidelizando a nuestros clientes",
  },
];

export type FeedbackItem = {
  id: string;
  content: string;
  name: string;
  title: string;
  rating: number;
  categoria: string;
};

export const feedback: FeedbackItem[] = [
  {
    id: "feedback-1",
    content:
      "Tenía el lavarropas roto. Vinieron y lo arreglaron en el día. Me dejaron el lavarropas funcionando perfecto.",
    name: "Martina Ramos",
    title: "Recoleta - CABA",
    rating: 5,
    categoria: "lavarropas",
  },
  {
    id: "feedback-2",
    content:
      "Vinieron de otro service a reparar mi heladera pero volvió a fallar. Encontré esta web y me lo solucionaron en el momento.",
    name: "Augusto Weich",
    title: "Lanús - Buenos Aires",
    rating: 5,
    categoria: "heladera",
  },
  {
    id: "feedback-3",
    content:
      "Mi heladera no funcionaba, tenía medicamentos que necesitaban refrigeración. Me solucionaron el problema en el día.",
    name: "Martín Álvarez",
    title: "Villa Devoto - CABA",
    rating: 5,
    categoria: "heladera",
  },
  {
    id: "feedback-4",
    content:
      "Muy buen trato y cumplieron en horario. Me explicaron el problema y quedó solucionado en una visita.",
    name: "Laura Fernández",
    title: "Palermo - CABA",
    rating: 4,
    categoria: "general",
  },
  {
    id: "feedback-5",
    content:
      "Técnicos prolijos, rápidos y confiables. Volvería a llamarlos sin duda.",
    name: "Ricardo C.",
    title: "Avellaneda - Buenos Aires",
    rating: 5,
    categoria: "general",
  },
  {
    id: "feedback-6",
    content:
      "Me atendieron rápido y resolvieron todo el mismo día. Muy conforme.",
    name: "Julieta N.",
    title: "Caballito - CABA",
    rating: 5,
    categoria: "general",
  },
  {
    id: "feedback-7",
    content:
      "La atención fue buena aunque llegaron un poco tarde. Igual solucionaron el problema.",
    name: "Carlos M.",
    title: "San Fernando - Buenos Aires",
    rating: 4,
    categoria: "general",
  },
  {
    id: "feedback-8",
    content:
      "Servicio muy profesional. Trajeron los repuestos originales y dejaron todo funcionando.",
    name: "Sofía A.",
    title: "Belgrano - CABA",
    rating: 5,
    categoria: "general",
  },
  {
    id: "feedback-9",
    content:
      "Solucionaron el error en el panel del lavarropas en menos de 1 hora. ¡Gracias!",
    name: "Matías E.",
    title: "Quilmes - Buenos Aires",
    rating: 5,
    categoria: "lavarropas",
  },
  {
    id: "feedback-10",
    content:
      "Mi heladera tenía pérdida. Vinieron el sábado y ya quedó lista. Muy agradecida.",
    name: "Paula V.",
    title: "Flores - CABA",
    rating: 5,
    categoria: "heladera",
  },
];

export type StatItem = {
  id: string;
  title: string;
  value: string;
};

export const stats: StatItem[] = [
  {
    id: "stats-1",
    title: "Diagnóstico Preciso",
    value: "100%",
  },
  {
    id: "stats-2",
    title: "años de trayectoria",
    value: "+30",
  },
  {
    id: "stats-3",
    title: "clientes satisfechos",
    value: "+99.999",
  },
];

export type FooterLink = {
  name: string;
  link: string;
  id: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerLinks: FooterSection[] = [
  {
    title: "Medios de pago",
    links: [
      {
        name: "Efectivo",
        link: "",
        id: "",
      },
      {
        name: "Transferencia",
        link: "",
        id: "",
      },
      {
        name: "Mercado Pago",
        link: "",
        id: "",
      },
    ],
  },
  {
    title: "Páginas",
    links: [
      {
        name: "Inicio",
        link: "/",
        id: "",
      },
      {
        name: "Heladeras",
        link: "/heladeras",
        id: "",
      },
      {
        name: "Lavarropas",
        link: "/lavarropas",
        id: "",
      },
      {
        name: "Ubicaciones",
        link: "/zonas",
        id: "",
      },
      {
        name: "Contacto",
        link: "/contacto",
        id: "",
      },
    ],
  },
  {
    title: "Teléfonos",
    links: [
      {
        name: "011 4383-8283",
        link: "tel:01143838283",
        id: "",
      },
      {
        name: "011 4382-8369",
        link: "tel:01143828369",
        id: "",
      },
    ],
  },
];

export type SocialItem = {
  id: string;
  icon: string;
  link: string;
};

export const socialMedia: SocialItem[] = [
  {
    id: "social-media-1",
    icon: "instagram",
    link: "https://www.instagram.com/service-electrolux",
  },
  {
    id: "social-media-2",
    icon: "telefono",
    link: "011 4382-8369",
  },
  {
    id: "social-media-3",
    icon: "mapa",
    link: "",
  },
  {
    id: "social-media-4",
    icon: "linkedin",
    link: "https://www.linkedin.com/A&T",
  },
];

export type ZoneItem = {
  id: string;
  logo: string;
  width: number;
};

export type ZoneDetail = {
  title: string;
  subtitle: string;
  places: string[];
};

export type ZoneSummary = {
  id: string;
  title: string;
};

export const zones: ZoneItem[] = [
  {
    id: "client-1",
    logo: "capitalFederal",
    width: 333,
  },
  {
    id: "client-3",
    logo: "zonaNorte",
    width: 249,
  },
  {
    id: "client-2",
    logo: "zonaSur",
    width: 207,
  },
];

export const zoneDetails: Record<string, ZoneDetail> = {
  "client-1": {
    title: "Capital Federal",
    subtitle: "Barrios que cubrimos",
    places: [
      "Agronomia",
      "Almagro",
      "Balvanera",
      "Barracas",
      "Belgrano",
      "Boca",
      "Boedo",
      "Caballito",
      "Chacarita",
      "Coghlan",
      "Colegiales",
      "Constitucion",
      "Flores",
      "Floresta",
      "La Paternal",
      "Liniers",
      "Mataderos",
      "Monte Castro",
      "Monserrat",
      "Nueva Pompeya",
      "Núñez",
      "Palermo",
      "Parque Avellaneda",
      "Parque Chacabuco",
      "Parque Chas",
      "Parque Patricios",
      "Puerto Madero",
      "Recoleta",
      "Retiro",
      "Saavedra",
      "San Cristobal",
      "San Nicolas",
      "San Telmo",
      "Velez Sarsfield",
      "Versalles",
      "Villa Crespo",
      "Villa del Parque",
      "Villa Devoto",
      "Villa General Mitre",
      "Villa Lugano",
      "Villa Luro",
      "Villa Ortuzar",
      "Villa Pueyrredon",
      "Villa Real",
      "Villa Riachuelo",
      "Villa Santa Rita",
      "Villa Soldati",
      "Villa Urquiza",
    ],
  },
  "client-2": {
    title: "Zona Sur",
    subtitle: "Localidades que cubrimos",
    places: [
      "Adrogue",
      "Avellaneda",
      "Banfield",
      "Bernal",
      "Berazategui",
      "Crucecita",
      "Florencio Varela",
      "Gerli",
      "Lanus",
      "Lavallol",
      "Lomas de Zamora",
      "Quilmes",
      "Remedios de Escalada",
      "Sarandi",
      "Temperley",
      "Valentin Alsina",
      "Villa Dominico",
      "Wilde",
    ],
  },
  "client-3": {
    title: "Zona Norte",
    subtitle: "Localidades que cubrimos",
    places: [
      "Vicente Lopez",
      "San Isidro",
      "Olivos",
      "Martinez",
      "Florida",
      "La Lucila",
      "Acassuso",
    ],
  },
};

export const zoneSummaries: ZoneSummary[] = [
  { id: "client-1", title: "Capital Federal" },
  { id: "client-2", title: "Zona Sur" },
  { id: "client-3", title: "Zona Norte" },
];

export type AuthorizedService = {
  id: string;
  name: string;
  url: string;
};

export const authorizedServices: AuthorizedService[] = [
  {
    id: "service-at",
    name: "Service A&T",
    url: "https://reparacion-heladeras.ar/",
  },
  {
    id: "service-drean",
    name: "Service Drean",
    url: "https://servicedrean.ar/",
  },
  { id: "service-gafa", name: "Service Gafa", url: "https://servicegafa.ar/" },
  {
    id: "service-patrick",
    name: "Service Patrick",
    url: "https://servicepatrick.ar/",
  },
];

const formatAuthorizedServicesList = (services: AuthorizedService[]) => {
  if (services.length === 0) return "";
  if (services.length === 1) return services[0].name;
  const names = services.map((service) => service.name);
  return `${names.slice(0, -1).join(", ")} y ${names[names.length - 1]}`;
};

export const authorizedServicesFaqIntro =
  "Sí, contamos con una red de servicios autorizados para otras marcas. Podés consultarlos acá:";
export const authorizedServicesFaqOutro =
  'También los encontrás en el footer en "Red de servicios autorizados".';

const authorizedServicesListText =
  formatAuthorizedServicesList(authorizedServices);
const homeAuthorizedServicesAnswer = `Sí, contamos con una red de servicios autorizados para otras marcas: ${authorizedServicesListText}. ${authorizedServicesFaqOutro}`;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaqItems: FaqItem[] = [
  {
    id: "home-faq-1",
    question: "¿Hacen service de heladeras Electrolux en CABA?",
    answer:
      "Sí, realizamos service de heladeras Electrolux en CABA y zonas cercanas, con técnicos especializados y repuestos originales.",
  },
  {
    id: "home-faq-2",
    question: "¿Hacen service de lavarropas Electrolux en el día?",
    answer:
      "Sí, contamos con visitas rápidas y solución en el día para la mayoría de fallas de lavarropas Electrolux.",
  },
  {
    id: "home-faq-3",
    question: "¿Ofrecen garantía por la reparación?",
    answer:
      "Sí, todas nuestras reparaciones incluyen garantía escrita y respaldo técnico.",
  },
  {
    id: "home-faq-4",
    question: "¿Qué zonas cubren?",
    answer:
      "Atendemos Capital Federal, Zona Norte y Zona Sur. Consultanos por tu barrio para confirmar cobertura.",
  },
  {
    id: "home-faq-5",
    question: "¿Trabajan con repuestos originales?",
    answer:
      "Sí, utilizamos repuestos originales o equivalentes de primera calidad según la disponibilidad.",
  },
  {
    id: "home-faq-6",
    question: "¿Cómo solicito una visita técnica?",
    answer:
      "Podés llamarnos o escribirnos por WhatsApp y coordinamos una visita en el horario que te convenga.",
  },
  {
    id: "home-faq-authorized-services",
    question: "¿Tienen service para otras marcas?",
    answer: homeAuthorizedServicesAnswer,
  },
  {
    id: "home-faq-8",
    question: "¿Qué tipo de problemas arreglan con más frecuencia?",
    answer:
      "Sí. Arreglamos fallas comunes de heladeras y lavarropas Electrolux: heladeras que no enfrían, hacen hielo de más, pierden agua o hacen ruidos; y lavarropas que no cargan agua, no desagotan, no centrifugan o presentan fallas eléctricas/electrónicas.",
  },
  {
    id: "home-faq-9",
    question: "¿Cuánto cuesta el service técnico Electrolux?",
    answer:
      'Depende de la falla y del repuesto (si requiere cambio). Te pasamos un estimado rápido con solo 3 datos: modelo, zona y síntoma (por ejemplo "no enfría / no centrifuga"). Si hace falta, coordinamos visita para diagnóstico y presupuesto.',
  },
  {
    id: "home-faq-10",
    question:
      "¿Qué información necesitan para enviarme un presupuesto más preciso?",
    answer:
      "Modelo del equipo (si lo tenés a mano), tu zona/barrio, y el síntoma: cuándo empezó, si hubo cortes de luz, si aparece un error o si hace ruidos/olor a quemado.",
  },
  {
    id: "home-faq-11",
    question: "¿Atienden urgencias o situaciones críticas?",
    answer:
      "Sí. Si la heladera tiene alimentos/medicación y perdió frío, o si el lavarropas pierde mucha agua o hay olor a quemado, recomendamos contactarnos por WhatsApp o teléfono para priorizar la visita.",
  },
  {
    id: "home-faq-12",
    question: "¿Se puede reparar en una sola visita?",
    answer:
      "En la mayoría de los casos, sí. Si el repuesto está disponible y el diagnóstico es claro, se resuelve en el día. Si requiere un repuesto específico, coordinamos la segunda visita apenas esté listo.",
  },
];

export const heladerasFaqItems: FaqItem[] = [
  {
    id: "heladeras-faq-1",
    question: "¿Hacen service de heladeras Electrolux en CABA?",
    answer:
      "Sí, realizamos service de heladeras Electrolux en CABA y alrededores con técnicos especializados.",
  },
  {
    id: "heladeras-faq-2",
    question: "¿Reparan heladeras no frost Electrolux?",
    answer:
      "Sí, trabajamos con heladeras no frost, tropicales, familiares y freezers Electrolux.",
  },
  {
    id: "heladeras-faq-3",
    question: "¿Cuánto tarda la reparación?",
    answer:
      "En la mayoría de los casos resolvemos en el día, según disponibilidad de repuestos.",
  },
  {
    id: "heladeras-faq-4",
    question: "¿Tienen repuestos originales?",
    answer:
      "Sí, usamos repuestos originales o equivalentes de primera calidad para asegurar durabilidad.",
  },
  {
    id: "heladeras-faq-5",
    question: "¿Ofrecen garantía por el service?",
    answer: "Sí, todas las reparaciones incluyen garantía escrita.",
  },
  {
    id: "heladeras-faq-6",
    question: "¿Cómo solicito una visita técnica?",
    answer:
      "Llamanos o escribinos por WhatsApp y coordinamos la visita técnica.",
  },
  {
    id: "heladeras-faq-7",
    question: "¿Qué hago si mi heladera Electrolux no enfría pero el freezer sí?",
    answer:
      "Suele estar relacionado con circulación de aire o sistema No Frost (ventilación/ducto/congelamiento interno). Lo ideal es un diagnóstico técnico en domicilio para evitar que vuelva a fallar.",
  },
  {
    id: "heladeras-faq-8",
    question: "¿Por qué mi heladera Electrolux hace hielo o escarcha en exceso?",
    answer:
      "Puede ser una falla en el sistema de deshielo (No Frost), sensores o drenaje, o incluso burletes/puerta mal sellada. Lo revisamos y dejamos el equipo funcionando sin acumulación de hielo.",
  },
  {
    id: "heladeras-faq-9",
    question: "¿Mi heladera Electrolux pierde agua: lo reparan a domicilio?",
    answer:
      "Sí. La pérdida de agua suele venir de drenaje obstruido, bandeja, mangueras o condensación por mal cierre. Se corrige en la visita.",
  },
  {
    id: "heladeras-faq-10",
    question: "¿La heladera hace ruidos raros: es normal o es falla?",
    answer:
      "Algunos ruidos son normales (expansión/contracción), pero si hay golpes constantes, zumbidos fuertes o vibración, puede ser ventilador, motor, nivelación o componentes internos. Lo diagnosticamos en el momento.",
  },
  {
    id: "heladeras-faq-11",
    question: '¿Qué significa que "no corta" y trabaja todo el tiempo?',
    answer:
      "Cuando la heladera no corta puede haber problemas de sensores/termostato, falta de gas, mala ventilación o puerta que no sella bien. Es importante revisarlo porque aumenta consumo y puede dañar el sistema.",
  },
  {
    id: "heladeras-faq-12",
    question: "¿Reparan heladeras Electrolux que no encienden o no arrancan?",
    answer:
      "Sí. Diagnósticamos fallas eléctricas/electrónicas y de arranque (placa, protector, cableado, etc.) y te indicamos la mejor solución.",
  },
];

export const lavarropasFaqItems: FaqItem[] = [
  {
    id: "lavarropas-faq-1",
    question: "¿Hacen service de lavarropas Electrolux en CABA?",
    answer:
      "Sí, brindamos service de lavarropas Electrolux en CABA y alrededores con técnicos especializados.",
  },
  {
    id: "lavarropas-faq-2",
    question: "¿Reparan lavarropas Electrolux que no centrifugan?",
    answer:
      "Sí, solucionamos fallas de centrifugado, bomba, placa y bloqueo de puerta.",
  },
  {
    id: "lavarropas-faq-3",
    question: "¿Cuánto tarda la reparación?",
    answer:
      "En la mayoría de los casos resolvemos en el día, según la disponibilidad de repuestos.",
  },
  {
    id: "lavarropas-faq-4",
    question: "¿Tienen repuestos originales?",
    answer:
      "Sí, trabajamos con repuestos originales o equivalentes de primera calidad.",
  },
  {
    id: "lavarropas-faq-5",
    question: "¿Ofrecen garantía por el service?",
    answer: "Sí, todas las reparaciones incluyen garantía escrita.",
  },
  {
    id: "lavarropas-faq-6",
    question: "¿Cómo solicito una visita técnica?",
    answer:
      "Contactanos por teléfono o WhatsApp y coordinamos la visita técnica.",
  },
  {
    id: "lavarropas-faq-7",
    question: "¿Mi lavarropas Electrolux no centrifuga: tiene arreglo?",
    answer:
      "Sí. Puede ser por desagote, carga desequilibrada, correa/rodamiento, bomba o electrónica. Lo diagnosticamos en domicilio y te decimos la causa real.",
  },
  {
    id: "lavarropas-faq-8",
    question: "¿Qué significa el error E1 en lavarropas Electrolux?",
    answer:
      "Generalmente indica un problema de desagote obstruido (circuito de desagüe). Si persiste, conviene revisión técnica para evitar daños y desbordes.",
  },
  {
    id: "lavarropas-faq-9",
    question: "¿Qué significa el error E2 (o 2 parpadeos) en Electrolux?",
    answer:
      "Suele indicar que se excedió el tiempo de carga de agua (problema de entrada/presión/filtro/manguera). Lo revisamos y corregimos.",
  },
  {
    id: "lavarropas-faq-10",
    question: "¿Qué significa el error E3 (o 3 parpadeos) en Electrolux?",
    answer:
      "Se asocia a una falla en la resistencia de calentamiento de agua. Requiere diagnóstico técnico para reparar de forma segura.",
  },
  {
    id: "lavarropas-faq-11",
    question: "¿El lavarropas Electrolux pierde agua: lo pueden solucionar?",
    answer:
      "Sí. Puede ser mangueras, bomba, retenes, cuba o sellos. Evaluamos el origen y reparamos para que no vuelva a perder.",
  },
  {
    id: "lavarropas-faq-12",
    question: "¿El lavarropas hace ruido fuerte al girar o vibra demasiado?",
    answer:
      "Puede ser carga desbalanceada, amortiguadores, rulemanes, correa o problemas mecánicos. Revisamos y dejamos el equipo estable para evitar daños mayores.",
  },
];

// ---------------------------------------------------------------------------
// Modelo de localidades para /zonas y /zonas/[slug].
// Se deriva de zoneDetails (no duplica data): 73 localidades entre
// Capital Federal, Zona Sur y Zona Norte.
// ---------------------------------------------------------------------------

export type Location = {
  slug: string;
  name: string;
  zoneId: string;
  zoneTitle: string;
};

let locationsCache: Location[] | null = null;

export const getLocations = (): Location[] => {
  if (locationsCache) return locationsCache;

  locationsCache = Object.entries(zoneDetails).flatMap(([zoneId, zone]) =>
    zone.places.map((place) => ({
      slug: toSlugUrl(place),
      name: place,
      zoneId,
      zoneTitle: zone.title,
    }))
  );

  return locationsCache;
};

export const getLocationBySlug = (slug: string): Location | undefined =>
  getLocations().find((location) => location.slug === slug);

export const getNearbyLocations = (slug: string, count = 6): Location[] => {
  const location = getLocationBySlug(slug);
  if (!location) return [];

  return getLocations()
    .filter(
      (candidate) =>
        candidate.zoneId === location.zoneId && candidate.slug !== slug
    )
    .slice(0, count);
};

export const getLocationsByZone = (): Array<{
  zoneId: string;
  zoneTitle: string;
  locations: Location[];
}> =>
  zoneSummaries.map((summary) => ({
    zoneId: summary.id,
    zoneTitle: summary.title,
    locations: getLocations().filter(
      (location) => location.zoneId === summary.id
    ),
  }));

export const locationIntro = (location: Location): string =>
  `Service técnico de heladeras y lavarropas en ${location.name}, ${location.zoneTitle}. ` +
  `Técnicos especializados a domicilio, diagnóstico rápido y repuestos originales, con atención prioritaria para tu barrio.`;

export const locationFaqItems = (location: Location): FaqItem[] => [
  {
    id: `${location.slug}-faq-1`,
    question: `¿Hacen service de heladeras y lavarropas en ${location.name}?`,
    answer: `Sí, atendemos ${location.name} y toda la zona de ${location.zoneTitle} con técnicos especializados a domicilio.`,
  },
  {
    id: `${location.slug}-faq-2`,
    question: "¿Cuánto tarda la visita técnica?",
    answer:
      "En la mayoría de los casos coordinamos la visita el mismo día y resolvemos en una sola vez, según disponibilidad de repuestos.",
  },
  {
    id: `${location.slug}-faq-3`,
    question: "¿Trabajan con repuestos originales?",
    answer:
      "Sí, utilizamos repuestos originales o equivalentes de primera calidad, y todas las reparaciones incluyen garantía escrita.",
  },
  {
    id: `${location.slug}-faq-4`,
    question: "¿Atienden urgencias en la zona?",
    answer:
      "Sí. Si la heladera perdió frío con alimentos o medicación adentro, o el lavarropas pierde agua, priorizamos la visita por WhatsApp o teléfono.",
  },
];
