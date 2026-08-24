"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stages = [
  { id: "01", title: "Preparation", desc: "Fresh seafood is selected and prepared under controlled hygiene and temperature conditions.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop" },
  { id: "02", title: "Packaging System", desc: "The seafood is placed into a suitable food-grade tray and packaging system.", img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2000&auto=format&fit=crop" },
  { id: "03", title: "Gas Flushing", desc: "The air inside the package is replaced with a controlled food-packaging gas mixture selected for the product.", img: "https://images.unsplash.com/photo-1605333396914-2323d5006b07?q=80&w=2000&auto=format&fit=crop" },
  { id: "04", title: "Sealing", desc: "The tray is heat-sealed to create a controlled internal atmosphere.", img: "https://images.unsplash.com/photo-1587311925979-3fa7d05fb5dc?q=80&w=2000&auto=format&fit=crop" },
  { id: "05", title: "Chilled Distribution", desc: "The finished product remains chilled throughout storage and distribution to maintain quality and presentation.", img: "https://images.unsplash.com/photo-1494412519320-ce600c92d536?q=80&w=2000&auto=format&fit=crop" },
];

export function Processing() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="bg-ocean-deep relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Images that transition based on scroll */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          {stages.map((stage, i) => {
            // Calculate opacity for each image based on scroll progress
            const start = i / stages.length;
            const end = (i + 1) / stages.length;
            const opacity = useTransform(
              scrollYProgress,
              [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
              [0, 1, 1, 0]
            );
            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [1, 1.1]
            );

            return (
              <motion.div 
                key={stage.id} 
                style={{ opacity, scale }}
                className="absolute inset-0 w-full h-full"
              >
                <Image src={stage.img} alt={stage.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-ocean-deep/30 mix-blend-multiply" />
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Text that transitions based on scroll */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-ocean-white flex items-center justify-center p-8 lg:p-20 relative">
          <div className="absolute top-12 left-12">
            <span className="text-ocean-deep/50 text-xs tracking-[0.2em] font-bold uppercase">
              The Process
            </span>
          </div>

          <div className="relative w-full max-w-lg">
            {stages.map((stage, i) => {
              const start = i / stages.length;
              const end = (i + 1) / stages.length;
              
              // Text enters from below, stays, then exits upwards
              const y = useTransform(
                scrollYProgress,
                [start - 0.1, start, end, end + 0.1],
                [50, 0, 0, -50]
              );
              
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
                [0, 1, 1, 0]
              );

              return (
                <motion.div 
                  key={stage.id}
                  style={{ opacity, y, pointerEvents: opacity.get() > 0.5 ? "auto" : "none" }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="text-fresh-aqua font-serif italic text-6xl md:text-8xl mb-8 opacity-50">
                    {stage.id}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-light text-ocean-deep mb-6 tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-lg md:text-2xl text-ocean-deep/70 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
