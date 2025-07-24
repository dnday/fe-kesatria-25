import Image from "next/image";
import { getOptimizedImageProps } from "@/utils/imageOptimization";

/**
 * Optimized Image component wrapper with Sharp integration
 *
 * @param {Object} props - Image component props
 * @param {string} props.optimizationType - Type of optimization (hero, background, icon, content)
 * @param {boolean} props.priority - Whether this image should be prioritized
 * @param {number} props.quality - Image quality (1-100)
 * @param {string} props.sizes - Responsive sizes string
 * @param {Object} props.customConfig - Override default configurations
 */
const OptimizedImage = ({
  optimizationType = "content",
  customConfig = {},
  ...props
}) => {
  // Get optimized configuration based on type
  const optimizedProps = getOptimizedImageProps(optimizationType, customConfig);

  // Merge with provided props (props override optimized props)
  const finalProps = {
    ...optimizedProps,
    ...props,
  };

  return (
    <Image
      {...finalProps}
      // Ensure we always have these Sharp optimization settings
      loading={finalProps.priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
};

export default OptimizedImage;
