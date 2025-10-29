const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const repositoryFullName = process.env.GITHUB_REPOSITORY || 'sudenurozturkk/dortayaklikafe'
const [repoOwner = 'sudenurozturkk', repoName = 'dortayaklikafe'] = repositoryFullName.split('/')
const customBasePath = process.env.CUSTOM_BASE_PATH
const customSiteUrl = process.env.CUSTOM_SITE_URL
const isUserOrOrgSite = repoName?.toLowerCase().endsWith('.github.io')

const resolvedBasePath = customBasePath ?? (isGitHubActions ? (isUserOrOrgSite ? '' : `/${repoName}`) : '')
const resolvedSiteUrl = customSiteUrl ?? (isGitHubActions
  ? (isUserOrOrgSite ? `https://${repoName}` : `https://${repoOwner}.github.io/${repoName}`)
  : 'http://localhost:3000'
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: resolvedBasePath,
  assetPrefix: resolvedBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: resolvedBasePath,
    NEXT_PUBLIC_SITE_URL: resolvedSiteUrl
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true
  }
}

module.exports = nextConfig

