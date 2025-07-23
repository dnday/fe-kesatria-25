// Performance optimization utilities

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Debounce function for performance
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (srcArray) => {
  return Promise.all(srcArray.map(preloadImage));
};

// Check if device is mobile
export const isMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth <= 768;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get connection speed
export const getConnectionSpeed = () => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    return navigator.connection?.effectiveType || 'unknown';
  }
  return 'unknown';
};
