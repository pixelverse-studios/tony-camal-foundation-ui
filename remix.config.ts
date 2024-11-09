const config = {
  serverBuildTarget: 'node-cjs', // Use 'node-esm' if your project uses ES Modules
  ignoredRouteFiles: ['**/.*'], // Ignores hidden files like .gitignore
  appDirectory: 'app', // Directory containing your Remix app
  assetsBuildDirectory: 'public/build', // Directory where assets are built
  serverBuildPath: 'build/index.js', // Path to the server build
  publicPath: '/build/' // Public URL path to assets
  // Add any additional configurations as needed
}

export default config
