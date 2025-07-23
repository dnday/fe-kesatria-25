"use client";
import { useState, useEffect } from "react";

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} ${className}`}>
      <div className="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
    </div>
  );
};

const SkeletonLoader = ({ className = "", children }) => (
  <div className={`animate-pulse ${className}`}>
    {children || <div className="bg-gray-200 rounded h-4 w-full"></div>}
  </div>
);

const ProgressiveLoader = ({
  isLoading,
  error,
  children,
  fallback,
  errorFallback,
}) => {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay to prevent flash
      const timer = setTimeout(() => setShowFallback(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (error) {
    return (
      errorFallback || (
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">Something went wrong</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      )
    );
  }

  if (isLoading || showFallback) {
    return (
      fallback || (
        <div className="flex justify-center items-center py-8">
          <LoadingSpinner size="lg" />
        </div>
      )
    );
  }

  return children;
};

export { LoadingSpinner, SkeletonLoader, ProgressiveLoader };
export default LoadingSpinner;
