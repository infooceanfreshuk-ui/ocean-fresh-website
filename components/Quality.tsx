"use client";

import { motion } from "framer-motion";
import { textReveal, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const standards = [
  { title: "HACCP Certified", desc: "Rigorous food safety management at every critical control point." },
  { title: "ISO 22000", desc: "Internationally recognized standard for food safety." },
  { title: "BRCGS Compliant", desc: "Meeting the highest global standards for food packaging and safety." },
  { title: "Cold-Chain Integrity", desc: "Unbroken temperature control from vessel to destination." },
];

export function Quality() {
  return (
    <section className="bg-ocean-deep py-32 px-6 lg:px-12 relative overflow-hidden text-ocean-white">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <motion.div variants={textReveal} className="mb-8">
              <span className="text-white/50 text-sm tracking-[0.2em] font-medium uppercase">
                Uncompromising Quality
              </span>
            </motion.div>
            
            <motion.h2 
              variants={textReveal}
              className="text-4xl md:text-6xl font-light text-white leading-[1.1] tracking-tight mb-12"
            >
              Certified excellence for the world's finest markets.
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12">
              {standards.map((std, i) => (
                <motion.div key={i} variants={textReveal} className="border-t border-white/10 pt-6">
                  <h4 className="text-xl font-medium text-white mb-3 tracking-wide">{std.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{std.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] w-full max-w-lg mx-auto"
            >
              <Image 
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2000&auto=format&fit=crop" 
                alt="Quality Inspection" 
                fill 
                className="object-cover rounded-none filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
