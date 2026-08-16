// Avisa a Bing/Yandex/Seznam/Naver (protocolo IndexNow) que las URLs del sitio
// cambiaron, para que reindexen sin esperar el próximo crawl pasivo.
// Lee la lista de URLs del sitemap.xml ya productivo (no la duplica a mano).
// Uso: node scripts/indexnow.mjs

const HOST = "service-electrolux.ar";
const BASE = `https://${HOST}`;
const KEY = "88c44b8f3bed24a7ba227ae793630636";
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

async function getSitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const urlList = await getSitemapUrls();
  console.log(`${urlList.length} URLs encontradas en ${BASE}/sitemap.xml`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  console.log(`IndexNow respondió ${res.status} ${res.statusText}`);
  if (!res.ok) {
    console.log(await res.text());
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
