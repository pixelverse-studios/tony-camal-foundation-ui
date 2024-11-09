// remix.config.ts
import type { AppConfig } from '@remix-run/dev'

const config: AppConfig = {
  serverBuildPath: 'netlify/functions/index.js',
  publicPath: '/build/',
  server: '@remix-run/netlify',
  // Optional: specify ignored files
  ignoredRouteFiles: ['**/.*']
}

export default config
