"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { textReveal, staggerContainer } from "@/lib/animations";

import { siteConfig } from "@/config/site";

export function SeafoodStory() {
  return (
    <section className="bg-ocean-white py-40 px-6 lg:px-12 relative">
      <div className="container mx-auto max-w-[1440px]">
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div>
            <motion.div variants={textReveal} className="mb-8">
              <span className="text-ocean-deep/50 text-sm tracking-[0.2em] font-medium uppercase">
                Product Categories
              </span>
            </motion.div>
            <motion.h2 variants={textReveal} className="text-5xl md:text-7xl font-light text-ocean-deep tracking-tight max-w-2xl">
              From the ocean to your inventory.
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {siteConfig.categories.map((cat, i) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/products" className="block group cursor-pointer relative h-[500px] lg:h-[700px] overflow-hidden bg-ocean-deep">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div className="overflow-hidden">
                      <div className="text-fresh-aqua text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Global Catch
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-light text-white mb-2">
                        {cat.name}
                      </h3>
                      <p className="text-white/70 text-lg font-light translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {cat.description}
                      </p>
                    </div>
                    
                    <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-ocean-deep transition-all duration-500 shrink-0">
                      <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
