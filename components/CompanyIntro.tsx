"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/config/company";
import { textReveal, staggerContainer } from "@/lib/animations";

export function CompanyIntro() {
  return (
    <section className="bg-ocean-white py-40 px-6 lg:px-12 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="container mx-auto max-w-[1440px]">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1200px] mx-auto"
        >
          <motion.div variants={textReveal} className="mb-12">
            <span className="text-ocean-deep/50 text-sm tracking-[0.2em] font-medium uppercase">
              Our Company
            </span>
          </motion.div>
          
          <motion.h2 
            variants={textReveal}
            className="text-4xl md:text-6xl lg:text-8xl font-light text-ocean-deep leading-[1.1] tracking-tight"
          >
            Bridging the gap between the <span className="font-serif italic text-ocean-blue">ocean</span> and the <span className="font-serif italic text-ocean-blue">market</span>.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-20">
            <motion.div variants={textReveal} className="text-xl md:text-2xl text-ocean-deep/70 font-light leading-relaxed">
              At {companyInfo.brandName}, we orchestrate a seamless global supply chain. By sourcing the finest catches directly from the rich waters of India and Sri Lanka, we ensure unparalleled freshness and quality at the source.
            </motion.div>
            
            <motion.div variants={textReveal} className="text-xl md:text-2xl text-ocean-deep/70 font-light leading-relaxed">
              Our advanced UK-based processing facilities then elevate these raw ingredients, delivering retail-ready and wholesale seafood solutions to the world's most demanding markets.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
