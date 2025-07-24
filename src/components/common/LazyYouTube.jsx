import { useEffect, useRef, useState } from "react";

/**
 * Lazy-loading, privacy-friendly YouTube embed.
 * Replaces the heavy iframe with a lightweight thumbnail + play button
 * until the user clicks to load the actual player.
 *
 * Props:
 *   videoId   – YouTube video ID (e.g. "zuJbK71Zjfo")
 *   title     – accessible title for the iframe
 *   className – optional extra classes
 */
export default function LazyYouTube({ videoId, title, className = "" }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const containerRef = useRef(null);

  // Optional: Intersection-observer to auto-load when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // preload thumbnail
          const img = new Image();
          img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoId]);

  // Build the actual iframe only after click
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video rounded-2xl overflow-hidden ${className}`}
    >
      {!showPlayer ? (
        // Thumbnail + play button
        <button
          type="button"
          aria-label={`Play video: ${title}`}
          onClick={() => setShowPlayer(true)}
          className="w-full h-full bg-cover bg-center relative focus:outline-none"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white drop-shadow-lg"
            viewBox="0 0 68 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
              fill="currentColor"
            />
            <path d="M45 24L27 14v20l18-10z" fill="#000" fillOpacity=".8" />
          </svg>
        </button>
      ) : (
        // Actual iframe
        <iframe
          className="w-full h-full"
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
