"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { companyInfo } from "@/config/company";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="h-screen relative bg-ocean-deep overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        {/* We can use an image or video here. Placeholder using standard color/gradient */}
        <div className="absolute inset-0 bg-ocean-deep/80 z-10" />
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center"
        />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center mt-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-6 py-2 bg-white/5 backdrop-blur-sm text-fresh-aqua rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-8 inline-block border border-white/10">
            {companyInfo.legalName || "Ocean Fresh UK"}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[11rem] font-medium tracking-tighter text-white leading-[0.85] max-w-[1200px]"
        >
          Premium Seafood. <br />
          <span className="text-white/60">Global Reach.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-ocean-white/70 max-w-2xl mt-12 font-light leading-relaxed"
        >
          We source the finest seafood and process it to perfection. Trusted by international buyers for uncompromising quality and traceability.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mt-12 md:mt-16 pointer-events-auto"
        >
          <Link href="/products">
            <Button size="lg" className="rounded-none text-sm px-12 py-8 gap-3 bg-white text-ocean-deep hover:bg-marine-surface uppercase tracking-widest font-bold">
              Explore Our Catch
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>

        {/* Prominent Hero Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pointer-events-auto w-full px-4"
        >
          {/* HACCP Hero Credential */}
          <div className="flex items-center gap-4 bg-ocean-deep/70 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 w-full sm:w-auto justify-center sm:justify-start shadow-xl">
            <div className="relative w-12 h-12 flex-shrink-0 bg-ocean-navy border border-white/20 rounded-full flex flex-col items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <span className="text-white font-black text-[10px] tracking-wider leading-none mt-1">HACCP</span>
              <span className="text-ocean-blue font-bold text-[4px] tracking-[0.2em] uppercase mt-0.5">Certified</span>
              <div className="w-5 h-[1px] bg-ocean-blue/50 my-1"></div>
              <svg className="w-3 h-3 text-ocean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-bold tracking-widest text-xs uppercase leading-tight mb-0.5">HACCP</p>
              <p className="text-ocean-blue font-semibold text-[10px] tracking-wider uppercase">Certified Food Safety</p>
            </div>
          </div>

          {/* FSA Rating Hero Credential */}
          <div className="flex items-center gap-4 bg-ocean-deep/70 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 w-full sm:w-auto justify-center sm:justify-start shadow-xl">
            <div className="relative w-12 h-12 flex-shrink-0 bg-[#00A859] rounded-md flex flex-col items-center justify-between shadow-lg overflow-hidden border border-[#00A859]">
              <div className="bg-black w-full text-center py-1">
                <span className="text-[#00A859] text-[5px] font-black tracking-widest block leading-none">FOOD HYGIENE RATING</span>
              </div>
              <div className="flex-1 flex items-center justify-center w-full bg-[#00A859]">
                <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center shadow-inner border border-black/20">
                  <span className="text-[#00A859] font-black text-base leading-none">5</span>
                </div>
              </div>
            </div>
            <div className="text-left">
              <p className="text-white font-bold tracking-widest text-xs uppercase leading-tight mb-0.5">Food Hygiene Rating</p>
              <p className="text-[#00A859] font-black text-[10px] tracking-wider uppercase">5 — Very Good</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
