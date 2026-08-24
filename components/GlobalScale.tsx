"use client";

import { motion } from "framer-motion";
import { textReveal, staggerContainer } from "@/lib/animations";

export function GlobalScale() {
  const stats = [
    { number: "25+", label: "Countries Served" },
    { number: "3", label: "Processing Facilities" },
    { number: "15+", label: "Seafood Species" },
    { number: "20+", label: "Years of Experience" },
  ];

  return (
    <section className="bg-ocean-deep text-ocean-white py-40 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1440px]">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1200px] mx-auto"
        >
          <motion.div variants={textReveal} className="mb-24 text-center">
            <span className="text-white/50 text-sm tracking-[0.2em] font-medium uppercase">
              Global Scale
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={textReveal}
                className="flex flex-col items-center justify-center text-center border-l border-white/10 first:border-l-0"
              >
                <div className="text-7xl lg:text-9xl font-light tracking-tighter mb-6 font-serif italic text-white">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-[0.15em] text-white/60 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
