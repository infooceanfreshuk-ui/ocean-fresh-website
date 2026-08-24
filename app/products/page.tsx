"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { textReveal, staggerContainer } from "@/lib/animations";

export default function ProductsPage() {
  const allProducts = siteConfig.products;

  return (
    <main className="min-h-screen bg-ocean-white pt-40 pb-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-[1440px]">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-24 flex flex-col items-center text-center"
        >
          <motion.div variants={textReveal} className="mb-8">
            <span className="text-ocean-deep/50 text-sm tracking-[0.2em] font-medium uppercase">
              Our Catch
            </span>
          </motion.div>
          <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-light tracking-tight text-ocean-deep mb-8 max-w-4xl">
            Premium products for global markets.
          </motion.h1>
          <motion.p variants={textReveal} className="text-xl text-ocean-deep/70 font-light max-w-2xl leading-relaxed">
            Explore our complete selection of fresh and frozen seafood, sourced responsibly and processed under strict HACCP controls.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {allProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-[4/5] bg-ocean-deep rounded-none relative overflow-hidden mb-6">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" 
                />
              </div>
              
              <div className="px-2">
                <h3 className="font-light text-ocean-deep text-xl md:text-2xl mb-2">
                  {product.name}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ocean-blue">
                  {product.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
