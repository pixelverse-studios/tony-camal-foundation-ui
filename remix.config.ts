// remix.config.js
module.exports = {
  serverBuildTarget: 'netlify',
  // Ensure output is set to "server" or "serverless" as needed
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  output: 'server'
  // Other configurations
}
