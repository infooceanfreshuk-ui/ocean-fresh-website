"use client";

import { ArrowRight, ShieldCheck, Globe2, Building2, PackageCheck } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { companyInfo } from "@/config/company";
import { useRef } from "react";
import { ScrollVideo } from "./ScrollVideo";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Pinned Video Container - Dedicated purely to the video scroll animation */}
      <section ref={containerRef} className="h-[300vh] relative bg-black">
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black">
          <ScrollVideo src="/videos/hero-scroll.mp4" containerRef={containerRef} />
        </div>
      </section>

      {/* 
        The Hero Text Section - Now completely below the video, acting as a full-screen section.
        It appears only after the scroll animation is 100% complete.
      */}
      <section id="home" className="min-h-[100svh] w-full bg-white flex flex-col items-center justify-center py-20 px-4 md:px-8 text-center relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-10 flex flex-col items-center">
            
            <span className="px-6 py-2.5 bg-ocean-50 text-ocean-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm border border-ocean-100">
              {companyInfo.legalName}
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-ocean-900 leading-[1.1]">
              Global Sourcing. <br />
              UK <span className="text-ocean-600">Processing</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-ocean-900/70 max-w-3xl leading-relaxed font-medium mx-auto">
              We combine strong international seafood sourcing with advanced UK-based processing and professional packaging for retail and wholesale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 w-full sm:w-auto">
              <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full text-lg px-8 py-7 gap-2 group shadow-xl">
                  Explore Our Seafood
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/export" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full text-lg px-8 py-7 gap-2 group border-ocean-200 hover:bg-ocean-50 transition-colors text-ocean-900">
                  Discover MAP
                </Button>
              </Link>
            </div>

            {/* Trust badges - Full width grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-ocean-100/50 mt-12 w-full">
              {[
                { icon: ShieldCheck, text: "BI 307 Approved" },
                { icon: Globe2, text: "Global Sourcing" },
                { icon: Building2, text: "UK Processing" },
                { icon: PackageCheck, text: "Retail Ready" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div className="bg-ocean-50 p-4 rounded-2xl shadow-sm text-ocean-600 border border-ocean-100">
                    <item.icon size={28} />
                  </div>
                  <span className="text-base font-semibold text-ocean-900/80">{item.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
