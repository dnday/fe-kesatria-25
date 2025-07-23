"use client";
import { lazy, Suspense } from "react";

const LazyComponentWrapper = ({
  componentPath,
  fallback = (
    <div className="animate-pulse bg-gray-200 h-64 w-full rounded"></div>
  ),
  ...props
}) => {
  const LazyComponent = lazy(() => import(componentPath));

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyComponentWrapper;
