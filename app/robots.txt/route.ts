export async function GET() {
  const body = `User-agent: *
Allow: /`
  return new Response(body, { headers: { "Content-Type": "text/plain" } })
}

