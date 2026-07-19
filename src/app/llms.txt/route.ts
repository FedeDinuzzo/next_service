import { authorizedServices, getLocationsByZone } from "../constants";
import { SITE } from "../constants/site";

export function GET(): Response {
  const zoneGroups = getLocationsByZone();

  const zonesBlock = zoneGroups
    .map((group) => {
      const lines = group.locations
        .map((location) => `  - ${location.name}: ${SITE.domain}/zonas/${location.slug}`)
        .join("\n");
      return `${group.zoneTitle}:\n${lines}`;
    })
    .join("\n\n");

  const authorizedBlock = authorizedServices
    .map((service) => `  - ${service.name}: ${service.url}`)
    .join("\n");

  const body = `# ${SITE.legalName}

> Servicio técnico autorizado ${SITE.brand} de heladeras y lavarropas a domicilio en Ciudad Autónoma de Buenos Aires y Gran Buenos Aires.

## Servicios
- Reparación de heladeras ${SITE.brand}: ${SITE.domain}/heladeras
- Reparación de lavarropas ${SITE.brand}: ${SITE.domain}/lavarropas
- Contacto y presupuestos: ${SITE.domain}/contacto
- Índice de zonas de atención: ${SITE.domain}/zonas

## Zonas de atención
${zonesBlock}

## Otras marcas atendidas (red de servicios autorizados)
${authorizedBlock}

## Contacto
- Teléfono: ${SITE.phonePrimaryDisplay}
- Sitio: ${SITE.domain}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
