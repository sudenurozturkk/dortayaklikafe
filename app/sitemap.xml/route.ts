import { absoluteUrl } from '@/lib/paths'

export async function GET() {
  const urls = ["", "/qr"]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${absoluteUrl(u)}</loc></url>`).join("\n")}
</urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}

