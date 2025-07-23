"use client";
import Image from "next/image";
import { useState } from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  lazy = true,
  placeholder = "blur",
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  sizes,
  fill = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image failed to load</span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    className: `${className} ${
      isLoading ? "opacity-0" : "opacity-100"
    } transition-opacity duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    priority,
    placeholder: lazy ? placeholder : "empty",
    blurDataURL: lazy ? blurDataURL : undefined,
    sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    quality: 85,
    ...props,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return <Image {...imageProps} width={width} height={height} />;
};

export default OptimizedImage;
