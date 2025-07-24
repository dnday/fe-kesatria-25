/**
 * Performance optimization utilities
 * Provides lazy loading and intersection observer utilities
 */

// Lazy loading utility for images
export const lazyLoadImages = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadResource = (href, asType) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = asType;
  document.head.appendChild(link);
};

// Debounce function for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Optimize font loading
export const optimizeFontLoading = () => {
  // Preload critical fonts
  preloadResource(
    "/fonts/PrimeformProDemo/PrimeformProDemo-Regular.otf",
    "font"
  );
  preloadResource("/fonts/PrimeformProDemo/PrimeformProDemo-Bold.otf", "font");
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Initialize lazy loading
  lazyLoadImages();

  // Optimize font loading
  optimizeFontLoading();

  // Initialize intersection observers
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      lazyLoadImages();
    });
  }
};
