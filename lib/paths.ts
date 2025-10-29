const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const normalize = (value: string) => value.replace(/\/$/, '')
const ensureLeadingSlash = (value: string) => (value.startsWith('/') ? value : `/${value}`)

export const basePath = normalize(rawBasePath)
export const siteUrl = normalize(rawSiteUrl)

export const asset = (path: string) => {
  const normalizedPath = ensureLeadingSlash(path)
  return `${basePath}${normalizedPath}`
}

export const absoluteUrl = (path = '') => {
  if (!path) {
    return siteUrl
  }

  const normalizedPath = ensureLeadingSlash(path)
  return `${siteUrl}${normalizedPath}`
}


