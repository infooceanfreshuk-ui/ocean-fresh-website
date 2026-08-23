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
    if (video) {
      // Force initialization for mobile decoders
      const initVideo = async () => {
        try {
          await video.play();
          video.pause();
        } catch (e) {
          // Play might fail if not interacted, but muted autoPlay usually works
        }
      };
      initVideo();
    }
  }, []);

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
            
            // Ensure target time is slightly > 0 for iOS bugs
            let targetTime = progress * video.duration;
            if (targetTime <= 0) targetTime = 0.01;
            // Prevent going past duration
            if (targetTime >= video.duration) targetTime = video.duration - 0.01;

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
    
    // Initial call
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
      autoPlay
      style={{ willChange: 'transform' }}
      onLoadedData={() => setIsLoaded(true)}
    />
  );
}
