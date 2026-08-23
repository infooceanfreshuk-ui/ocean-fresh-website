"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollVideoProps {
  src: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollVideo({ src, containerRef }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (video.duration && !isNaN(video.duration)) {
            const rect = container.getBoundingClientRect();
            const scrollableDistance = rect.height - window.innerHeight;
            
            // Calculate scroll progress constrained between 0 and 1
            const scrolled = Math.max(0, Math.min(-rect.top, scrollableDistance));
            
            let progress = 0;
            if (scrollableDistance > 0) {
              progress = scrolled / scrollableDistance;
            }
            
            // Map scroll progress to video duration
            const targetTime = progress * video.duration;

            // Update time directly rather than continuously lerping, which crashes performance
            // Only update if difference is > 0.04s (approx 24fps) to prevent decoder thrashing
            if (Math.abs(video.currentTime - targetTime) > 0.04) {
              video.currentTime = targetTime;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLoaded, containerRef]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover absolute inset-0 pointer-events-none"
      preload="auto"
      muted
      playsInline
      onLoadedMetadata={() => setIsLoaded(true)}
    />
  );
}
