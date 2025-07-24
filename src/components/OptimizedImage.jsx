import Image from "next/image";

/**
 * OptimizedImage component - Enhanced Next.js Image component
 * Uses Next.js built-in optimization with lazy loading and blur placeholders
 * Provides consistent API and additional optimization features
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  fill = false,
  sizes = "100vw",
  blurDataURL,
  loading = "lazy",
  ...props
}) => {
  // For local images, use the built-in optimization
  const isLocalImage = src?.startsWith("/");

  // When priority is true, don't set loading prop (Next.js handles it automatically)
  const loadingProp = priority ? undefined : loading;

  return (
    <Image
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      {...(loadingProp && { loading: loadingProp })}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      {...(isLocalImage && {
        loader: ({ src, width }) => `${src}?w=${width}&q=${quality}`,
      })}
      {...props}
    />
  );
};

export default OptimizedImage;
