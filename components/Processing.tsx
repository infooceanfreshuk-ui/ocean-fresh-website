"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { textReveal, staggerContainer } from "@/lib/animations";

const stages = [
  { id: "01", title: "Preparation", desc: "Fresh seafood is selected and prepared under controlled hygiene and temperature conditions.", img: "/images/process/preparation.png" },
  { id: "02", title: "Packaging System", desc: "The seafood is placed into a suitable food-grade tray and packaging system.", img: "/images/process/packaging-system.png" },
  { id: "03", title: "Gas Flushing", desc: "The air inside the package is replaced with a controlled food-packaging gas mixture selected for the product.", img: "/images/process/gas-flushing.png" },
  { id: "04", title: "Sealing", desc: "The tray is heat-sealed to create a controlled internal atmosphere.", img: "/images/process/sealing.png" },
  { id: "05", title: "Chilled Distribution", desc: "The finished product remains chilled throughout storage and distribution to maintain quality and presentation.", img: "/images/process/chilled-distribution.png" },
];

export function Processing() {
  return (
    <section className="bg-ocean-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <motion.div variants={textReveal}>
            <span className="text-ocean-blue text-sm tracking-[0.2em] font-bold uppercase block mb-4">
              The Process
            </span>
          </motion.div>
          <motion.h2 variants={textReveal} className="text-4xl md:text-6xl font-light text-ocean-deep tracking-tight">
            How We Ensure Perfection
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {stages.map((stage, i) => (
            <div 
              key={stage.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl group"
                >
                  <Image 
                    src={stage.img} 
                    alt={stage.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-ocean-deep/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: i % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <div className="text-ocean-navy text-6xl md:text-8xl font-serif italic mb-4 opacity-10">
                  {stage.id}
                </div>
                <h3 className="text-3xl md:text-5xl font-light text-ocean-deep mb-6 tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
                  {stage.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
