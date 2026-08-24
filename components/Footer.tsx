"use client";

import Link from "next/link";
import { companyInfo } from "@/config/company";
import { motion } from "framer-motion";
import { textReveal, staggerContainer } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="bg-ocean-deep pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-32"
        >
          {/* Brand Info */}
          <motion.div variants={textReveal} className="lg:col-span-5">
            <h3 className="text-4xl font-serif italic text-white tracking-tighter mb-8">{companyInfo.legalName || "Ocean Fresh."}</h3>
            <p className="text-ocean-white/50 leading-relaxed max-w-sm text-lg font-light">
              Premium global seafood supply, processing, and export logistics.
            </p>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div variants={textReveal} className="lg:col-span-2">
            <h4 className="text-white/40 font-bold mb-8 tracking-[0.2em] uppercase text-xs">Products</h4>
            <ul className="space-y-4 text-ocean-white/80 font-light">
              <li><Link href="/products" className="hover:text-fresh-aqua transition-colors">Shrimp</Link></li>
              <li><Link href="/products" className="hover:text-fresh-aqua transition-colors">Fish</Link></li>
              <li><Link href="/products" className="hover:text-fresh-aqua transition-colors">Cephalopods</Link></li>
              <li><Link href="/products" className="hover:text-fresh-aqua transition-colors">Value Added</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={textReveal} className="lg:col-span-2">
            <h4 className="text-white/40 font-bold mb-8 tracking-[0.2em] uppercase text-xs">Company</h4>
            <ul className="space-y-4 text-ocean-white/80 font-light">
              <li><Link href="/about" className="hover:text-fresh-aqua transition-colors">Our Story</Link></li>
              <li><Link href="/processing" className="hover:text-fresh-aqua transition-colors">Processing</Link></li>
              <li><Link href="/quality" className="hover:text-fresh-aqua transition-colors">Traceability</Link></li>
              <li><Link href="/contact" className="hover:text-fresh-aqua transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={textReveal} className="lg:col-span-3">
            <h4 className="text-white/40 font-bold mb-8 tracking-[0.2em] uppercase text-xs">Location</h4>
            <ul className="space-y-4 text-ocean-white/80 font-light">
              <li>{companyInfo.contact?.address || "Birmingham, UK"}</li>
              <li><a href={`mailto:${companyInfo.contact?.email}`} className="hover:text-fresh-aqua transition-colors">{companyInfo.contact?.email || "info@oceanfresh.co.uk"}</a></li>
              <li><a href={`tel:${companyInfo.contact?.phone}`} className="hover:text-fresh-aqua transition-colors">{companyInfo.contact?.phone || "+44 0000 000000"}</a></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/10 text-ocean-white/30 text-xs tracking-widest uppercase"
        >
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.legalName || "Ocean Fresh"}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
      
      {/* Massive Background Text Overlay */}
      <div className="absolute -bottom-[5%] left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03]">
        <h2 className="text-[18vw] font-black text-white whitespace-nowrap tracking-tighter leading-none">
          OCEAN FRESH
        </h2>
      </div>
    </footer>
  );
}
