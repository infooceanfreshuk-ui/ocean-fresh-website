"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
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
