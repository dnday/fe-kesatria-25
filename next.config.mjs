/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable Sharp for image optimization
    loader: "default",
    formats: ["image/webp", "image/avif"],
    // Allow optimization of external images if needed
    remotePatterns: [
      // Add domains if you have external images
    ],
    // Enable experimental features for better performance
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimize image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
