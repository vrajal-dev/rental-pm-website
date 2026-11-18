import type { NextConfig } from 'next';

// Static export: `next build` writes plain HTML, CSS and JS to out/.
// A static export cannot set HTTP headers; see public/_headers and the README.
const nextConfig: NextConfig = {
  output: 'export',
  // /features/ -> out/features/index.html works on any static host.
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
