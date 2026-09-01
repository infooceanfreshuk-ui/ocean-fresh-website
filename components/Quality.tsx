"use client";

import { motion } from "framer-motion";
import { textReveal, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const standards = [
  { title: "HACCP-Based Controls", desc: "Documented controls identifying hazards and establishing control measures at critical stages." },
  { title: "BI 307 Approved", desc: "Birmingham City Council Full Approval for cold store, processing, re-wrapping and repackaging." },
  { title: "Temperature Control", desc: "Chilled handling is maintained strictly throughout the entire seafood supply chain." },
  { title: "Traceability", desc: "Controlled sourcing helps us manage products and suppliers effectively." },
];

export function Quality() {
  return (
    <section className="bg-ocean-navy py-32 px-6 lg:px-12 relative overflow-hidden text-ocean-white">
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
              <span className="text-ocean-blue text-sm tracking-[0.2em] font-bold uppercase">
                Uncompromising Quality
              </span>
            </motion.div>
            
            <motion.h2 
              variants={textReveal}
              className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-8"
            >
              Food Safety at the Heart of Our Operation.
            </motion.h2>
            
            <motion.p variants={textReveal} className="text-marine-gray text-lg leading-relaxed mb-10">
              At Ocean Fresh, food safety is fundamental to the way we handle seafood. From sourcing and receiving through processing, chilled storage and packaging, our operations are built around controlled food-safety procedures. Our Birmingham operation is officially approved under Birmingham City Council approval number <strong className="text-white font-bold tracking-widest">BI 307</strong>.
            </motion.p>
            
            <motion.div variants={textReveal} className="flex flex-col sm:flex-row flex-wrap gap-10 mb-12 pt-8 border-t border-white/10">
              {/* HACCP Credential */}
              <div className="flex items-start gap-5 w-full sm:w-auto">
                <Image
                  src="/images/HACCP.jpeg"
                  alt="HACCP Certified"
                  width={64}
                  height={64}
                  className="object-contain flex-shrink-0 rounded-md bg-white p-1"
                />
              </div>

              {/* FSA Rating Credential */}
              <div className="flex items-start gap-5 w-full sm:w-auto">
                <Image 
                  src="/images/new-rating.jpeg" 
                  alt="Food Hygiene Rating 5" 
                  width={120} 
                  height={60} 
                  className="object-contain flex-shrink-0"
                />
              </div>

              {/* BI 307 Credential */}
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <Image
                  src="/images/UKBI307.jpeg"
                  alt="UK BI 307 Approved"
                  width={64}
                  height={64}
                  className="object-contain flex-shrink-0 rounded-md bg-white p-1"
                />
                <div className="pt-1">
                  <h4 className="text-white/60 text-xs leading-relaxed uppercase tracking-widest font-semibold">Birmingham City Council Approved</h4>
                </div>
              </div>
            </motion.div>
            
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
              className="relative aspect-square md:aspect-[4/5] w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=2000&auto=format&fit=crop" 
                alt="Seafood Quality Inspection on Ice" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-ocean-navy/10 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
