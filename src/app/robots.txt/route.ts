export function GET() {
  const body = `User-agent: *
Disallow:

Sitemap: https://www.service-electrolux.ar/sitemap.xml`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
