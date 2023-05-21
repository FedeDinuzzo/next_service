export default async function sitemap() {
  const routes = ['', '/heladeras', '/lavarropas', '/contacto'].map((route) => ({
    url: `http://service-electrolux.ar/${route}`,
    lastModified: new Date().toISOString()
  }))

  return routes
}