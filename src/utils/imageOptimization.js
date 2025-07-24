/**
 * Image optimization utilities for Next.js with Sharp
 */

// Common image configurations for Sharp optimization
export const imageConfigs = {
  // High priority images (above the fold, critical content)
  hero: {
    priority: true,
    quality: 85,
    placeholder: "blur",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  },

  // Background images and decorative elements
  background: {
    priority: false,
    quality: 75,
    placeholder: "blur",
    sizes: "100vw",
  },

  // Icons and small graphics
  icon: {
    priority: false,
    quality: 80,
    placeholder: "blur",
    sizes: "(max-width: 768px) 50px, 100px",
  },

  // Content images
  content: {
    priority: false,
    quality: 80,
    placeholder: "blur",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw",
  },
};

// Generate blur data URL for placeholder
export const generateBlurDataURL = (width = 10, height = 10) => {
  const canvas = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
  </svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(canvas).toString("base64")}`;
};

// Common blur data URL (can be used for most images)
export const defaultBlurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// Responsive image sizes for different viewports
export const responsiveSizes = {
  // Full width images
  fullWidth: "100vw",

  // Half width images
  halfWidth: "(max-width: 768px) 100vw, 50vw",

  // Third width images
  thirdWidth: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",

  // Quarter width images
  quarterWidth: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",

  // Small decorative elements
  decorative: "(max-width: 768px) 30vw, 20vw",
};

// Image format recommendations
export const formatRecommendations = {
  // For photographs and complex images
  photos: ["image/avif", "image/webp", "image/jpeg"],

  // For graphics and simple illustrations
  graphics: ["image/avif", "image/webp", "image/png"],

  // For icons (keep SVG when possible)
  icons: ["image/svg+xml", "image/avif", "image/webp", "image/png"],
};

// Helper function to get optimized image props
export const getOptimizedImageProps = (type = "content", customConfig = {}) => {
  const baseConfig = imageConfigs[type] || imageConfigs.content;

  return {
    ...baseConfig,
    blurDataURL: defaultBlurDataURL,
    ...customConfig,
  };
};
