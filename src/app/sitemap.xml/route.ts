export function GET(): Response {
  const now = new Date().toISOString();
  const base = "https://www.service-electrolux.ar";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">

  <url>
    <loc>${base}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${base}/opengraph-image.jpg</image:loc>
      <image:title>Service de Heladeras y Lavarropas Electrolux</image:title>
      <image:caption>Servicio técnico especializado en CABA</image:caption>
    </image:image>
  </url>

  <url>
    <loc>${base}/heladeras</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${base}/heladeras/opengraph-image.jpg</image:loc>
      <image:title>Reparación de Heladeras Electrolux</image:title>
      <image:caption>Reparación urgente de heladeras no frost</image:caption>
    </image:image>
  </url>

  <url>
    <loc>${base}/lavarropas</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${base}/lavarropas/opengraph-image.jpg</image:loc>
      <image:title>Reparación de Lavarropas Electrolux</image:title>
      <image:caption>Solución en el día para lavarropas que no centrifugan</image:caption>
    </image:image>
  </url>

  <url>
    <loc>${base}/contacto</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${base}/contacto/opengraph-image.jpg</image:loc>
      <image:title>Formulario de contacto</image:title>
      <image:caption>Solicitá tu visita técnica sin cargo</image:caption>
    </image:image>
  </url>

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
