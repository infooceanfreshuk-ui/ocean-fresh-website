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
            
            const scrolled = Math.max(0, Math.min(-rect.top, scrollableDistance));
            let progress = scrollableDistance > 0 ? scrolled / scrollableDistance : 0;
            const targetTime = progress * video.duration;

            // Extremely aggressive throttle: 
            // 1. Only seek if the video is NOT currently seeking (prevents browser lockups)
            // 2. Only seek if time difference is > 0.08s (~12fps) to drastically reduce decoder strain
            if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.08) {
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
      style={{ willChange: 'transform' }} // Hint browser to hardware accelerate
      onLoadedMetadata={() => setIsLoaded(true)}
    />
  );
}
