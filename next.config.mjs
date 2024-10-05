/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static exports
  basePath: "/BigBangLive", // Correct base path (repository name)
  reactStrictMode: true,
  trailingSlash: true, // Ensures that all paths include a trailing slash for GitHub Pages
};

export default nextConfig;
