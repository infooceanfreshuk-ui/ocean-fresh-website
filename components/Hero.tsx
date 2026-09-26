"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, Truck, Snowflake, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [showContent, setShowContent] = useState(false);
  const frameCount = 120;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/hero-sequence/frame_${i.toString().padStart(3, '0')}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };
      // For images that might fail to load
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) setImages(loadedImages);
      }
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = window.innerHeight * 2;
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      
      setShowContent(scrollFraction > 0.75);
      
      requestAnimationFrame(() => {
        if (images[frameIndex]) {
          const img = images[frameIndex];
          const hRatio = canvas.width / img.width;
          const vRatio = canvas.height / img.height;
          const ratio = Math.max(hRatio, vRatio);
          const centerShift_x = (canvas.width - img.width * ratio) / 2;
          const centerShift_y = (canvas.height - img.height * ratio) / 2;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, img.width, img.height,
                             centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        handleScroll();
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  return (
    <section className="relative w-full bg-[#0c1a2e] h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

      <div className="relative pt-[140px] md:pt-[160px] pb-52 w-full flex-grow flex flex-col justify-center">
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0 bg-[#0c1a2e]">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/90 via-[#0c1a2e]/50 to-transparent z-10" />
        </div>

        {/* Content Content */}
        <div className="container relative z-20 mx-auto max-w-[1440px] px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className={`max-w-2xl pointer-events-${showContent ? 'auto' : 'none'}`}
          >

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.1] mb-6">
              Premium <br />
              Seafood. <br />
              <span>Global Reach.</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-lg mb-8 font-light leading-relaxed">
              High-quality, sustainably sourced seafood delivered worldwide. Freshness you can trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/products" className="w-full sm:w-auto">
                <Button className="w-full rounded-full px-8 py-6 bg-white text-[#0c1a2e] hover:bg-gray-100 font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-105">
                  Shop Now
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full rounded-full px-8 py-6 bg-transparent text-white border-white/30 hover:bg-white/10 font-bold text-sm flex items-center justify-center gap-2 backdrop-blur-sm">
                  <Play size={18} />
                  Explore Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Info Cards (Placed absolutely at the bottom of the container) */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-30 container mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Leaf, label: "Sustainably\nSourced" },
              { icon: Truck, label: "Worldwide\nShipping" },
              { icon: Snowflake, label: "Cold Chain\nAssured" },
              { icon: ShieldCheck, label: "HACCP\nCertified" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                className={`flex items-center gap-3 md:gap-4 text-white pointer-events-${showContent ? 'auto' : 'none'}`}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                  <item.icon size={20} className="text-white" />
                </div>
                <span className="text-[10px] md:text-sm font-medium leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
