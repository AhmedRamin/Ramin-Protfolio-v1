/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` produces a fully static site in ./out
  // Deployable to Vercel, Netlify, GitHub Pages or any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
