import menuData from '@/data/menu.json'
import tables from '@/data/tables.json'
import { toSlug } from '@/lib/slug'
import { absoluteUrl } from '@/lib/paths'

export async function GET() {
  const categories = Object.keys(menuData as Record<string, unknown[]>).map((category) => `/menu/${toSlug(category)}`)
  const tablePaths = (tables as string[]).map((id) => `/t/${encodeURIComponent(id)}`)
  const urls = ["", "/menu", "/qr", ...categories, ...tablePaths]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${absoluteUrl(u)}</loc></url>`).join("\n")}
</urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}

