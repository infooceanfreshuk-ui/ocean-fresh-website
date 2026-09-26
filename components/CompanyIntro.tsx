"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo } from "@/config/company";
import { ArrowRight, Ship, Globe, Leaf, Fish, Settings, Package } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";

export function CompanyIntro() {
  return (
    <section className="bg-[#f4f8fb] relative overflow-hidden flex flex-col justify-center min-h-screen py-12 md:py-20 w-full z-10">
      
      {/* Top Right Curved Image */}
      <div className="absolute top-0 right-0 w-[40%] md:w-[45%] h-[400px] z-0 opacity-90 hidden md:block">
        <svg width="0" height="0">
          <clipPath id="topRightCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0.2,0 L 1,0 L 1,1 L 0.8,1 C 0.5,1 0.4,0.6 0,0.5 C 0.1,0.2 0.15,0 0.2,0 Z" />
          </clipPath>
        </svg>
        <div 
          className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1544326557-418c32ec83cc?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"
          style={{ clipPath: "url(#topRightCurve)" }}
        />
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-gray-400"></div>
            <span className="text-gray-500 text-xs tracking-[0.2em] font-semibold uppercase">
              Our Company
            </span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0c1a2e] leading-[1.1] tracking-tight mb-6">
            Bridging the gap between the <span className="text-ocean-blue">ocean</span> and the <span className="text-ocean-blue">market</span>.
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Sourcing the world's finest seafood and delivering it closer to people, 
            with integrity, quality and a sustainable future in mind.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-between gap-8 py-6 border-y border-gray-200 mb-8 md:mb-12">
          <div className="flex items-center gap-12 flex-wrap">
            <div className="flex items-center gap-4">
              <Ship size={32} strokeWidth={1.5} className="text-[#0c1a2e]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Established</span>
                <span className="text-[#0c1a2e] font-bold">2024</span>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <Globe size={32} strokeWidth={1.5} className="text-[#0c1a2e]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">UK Seafood</span>
                <span className="text-[#0c1a2e] font-bold text-sm md:text-base">Importer &bull; Processor &bull; Wholesaler</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <Leaf size={32} strokeWidth={1.5} className="text-[#0c1a2e]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Sourcing</span>
                <span className="text-[#0c1a2e] font-bold text-sm md:text-base">India &bull; Sri Lanka &bull; UK</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex shrink-0">
            {/* Rotating Stamp - Simplified placeholder for the image stamp */}
            <div className="w-24 h-24 rounded-full border border-dashed border-gray-300 flex items-center justify-center animate-spin-slow relative">
              <div className="absolute inset-2 border border-gray-200 rounded-full flex items-center justify-center">
                 <span className="text-[10px] text-ocean-blue font-bold text-center leading-none">
                   FRESHER<br/>SEAS
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12">
          
          <div className="flex flex-col gap-4 relative">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ocean-blue mb-2">
              <Fish size={24} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#0c1a2e]">Our Journey</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Ocean Fresh Birmingham Ltd is a growing UK seafood importer, processor, 
              wholesaler and retailer established in 2024. What began as a home-delivery service 
              sourcing fresh fish from the London market has developed into an international seafood 
              sourcing and UK-based processing operation, with established supplier relationships 
              in India and Sri Lanka.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 relative">
            <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ocean-blue mb-2">
              <Settings size={24} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#0c1a2e]">Our Operations</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Our Birmingham operation combines seafood sourcing, processing, cold 
              storage and professional packaging, supported by <strong className="font-bold text-ocean-blue">HACCP-based food-safety controls</strong> and Birmingham City Council full approval <strong className="font-bold text-[#0c1a2e]">(BI 307)</strong>.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 relative">
            <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ocean-blue mb-2">
              <Package size={24} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#0c1a2e]">Our Future</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We are now investing in Modified Atmosphere Packaging (MAP) technology 
              to develop modern, retail-ready seafood products designed to support freshness, 
              presentation and efficient distribution. By combining strong food-safety management 
              with modern packaging technology, Ocean Fresh is building the foundations for the 
              next stage of its growth across the UK seafood market.
            </p>
          </div>
          
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex items-center gap-6">
            <Link href="/about">
              <Button className="bg-[#0c1a2e] text-white hover:bg-ocean-blue rounded-full px-8 py-7 font-bold text-sm gap-2">
                Discover Our Story
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 hidden sm:flex">
              <div className="w-12 h-px bg-gray-400"></div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Quality Seafood</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">A Brighter Tomorrow</span>
              </div>
            </div>
          </div>
          
          {/* Cursive Signature */}
          <div className="hidden md:block">
            <span className="font-script text-4xl lg:text-5xl text-gray-400 opacity-60 -rotate-6 inline-block leading-none">
              From Ocean <br/>
              to Your Table
            </span>
          </div>
        </div>
        
      </div>

      {/* Bottom Wave Image (Water overlapping) */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] z-0 overflow-hidden">
         <svg className="absolute top-0 left-0 right-0 w-full h-[60px] z-10 transform translate-y-[-1px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f4f8fb"></path>
        </svg>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-bottom opacity-80 mix-blend-multiply" />
      </div>

    </section>
  );
}
