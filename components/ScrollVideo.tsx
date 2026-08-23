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

    let animationFrameId: number;
    let targetTime = 0;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      
      // Calculate scroll progress constrained between 0 and 1
      const scrolled = Math.max(0, Math.min(-rect.top, scrollableDistance));
      
      let progress = 0;
      if (scrollableDistance > 0) {
        progress = scrolled / scrollableDistance;
      }
      
      // Map scroll progress to video duration
      if (video.duration) {
        targetTime = progress * video.duration;
      }
    };

    // Smoothly interpolate current time to target time using requestAnimationFrame
    const updateVideoTime = () => {
      if (video.duration && !isNaN(video.duration)) {
        const diff = targetTime - video.currentTime;
        
        // Easing function for premium cinematic feel
        if (Math.abs(diff) > 0.01) {
          video.currentTime += diff * 0.1;
        } else {
          video.currentTime = targetTime;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    animationFrameId = requestAnimationFrame(updateVideoTime);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, containerRef]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover absolute inset-0 pointer-events-none"
      preload="metadata"
      muted
      playsInline
      onLoadedMetadata={() => setIsLoaded(true)}
    />
  );
}
