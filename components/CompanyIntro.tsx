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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mt-20">
            <motion.div variants={textReveal} className="text-lg md:text-xl text-ocean-deep/70 font-light leading-relaxed">
              {companyInfo.legalName} is a growing UK seafood importer, processor, wholesaler and retailer established in 2024. What began as a home-delivery service sourcing fresh fish from the London market has developed into an international seafood sourcing and UK-based processing operation, with established supplier relationships in India and Sri Lanka.
            </motion.div>
            
            <motion.div variants={textReveal} className="text-lg md:text-xl text-ocean-deep/70 font-light leading-relaxed">
              Our Birmingham operation combines seafood sourcing, processing, cold storage and professional packaging, supported by HACCP-based food-safety controls and Birmingham City Council full approval <strong className="font-bold text-ocean-deep">(BI 307)</strong>.
            </motion.div>

            <motion.div variants={textReveal} className="text-lg md:text-xl text-ocean-deep/70 font-light leading-relaxed">
              We are now investing in Modified Atmosphere Packaging (MAP) technology to develop modern, retail-ready seafood products designed to support freshness, presentation and efficient distribution. By combining strong food-safety management with modern packaging technology, Ocean Fresh is building the foundations for the next stage of its growth across the UK seafood market.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
