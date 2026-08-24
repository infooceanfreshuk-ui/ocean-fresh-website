"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { textReveal, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="bg-ocean-white py-40 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1440px] text-center">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[800px] mx-auto flex flex-col items-center"
        >
          <motion.div variants={textReveal} className="mb-10">
            <span className="text-ocean-deep/50 text-sm tracking-[0.2em] font-medium uppercase">
              Begin Partnership
            </span>
          </motion.div>
          
          <motion.h2 
            variants={textReveal}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-ocean-deep leading-[1.1] tracking-tight mb-8"
          >
            Ready to secure your <span className="font-serif italic text-ocean-blue">supply line?</span>
          </motion.h2>
          
          <motion.p 
            variants={textReveal}
            className="text-xl md:text-2xl text-ocean-deep/70 font-light leading-relaxed mb-16"
          >
            Connect with our global trade team to discuss your specific seafood requirements and import logistics.
          </motion.p>
          
          <motion.div variants={textReveal}>
            <Link href="/contact">
              <Button size="lg" className="rounded-none text-sm px-16 py-8 gap-4 bg-ocean-deep text-white hover:bg-ocean-navy uppercase tracking-[0.2em] font-bold">
                Contact Our Team
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
