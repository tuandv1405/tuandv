/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  poweredByHeader: false,
  // sharp is not bundled for linux in the standalone build; the site has a single photo.
  images: { unoptimized: true },
};

module.exports = nextConfig;
