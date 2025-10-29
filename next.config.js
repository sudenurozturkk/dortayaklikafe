const repoName = 'dortayaklikafe'
const githubDomain = 'https://sudenurozturk.github.io'
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const computedBasePath = isGitHubActions ? `/${repoName}` : ''
const computedSiteUrl = isGitHubActions ? `${githubDomain}/${repoName}` : 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: computedBasePath,
  assetPrefix: computedBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
    NEXT_PUBLIC_SITE_URL: computedSiteUrl
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true
  }
}

module.exports = nextConfig

