export async function GET() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"
  const urls = ["", "/qr"]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join("\n")}
</urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}

