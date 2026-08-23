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
    <section id="home" ref={containerRef} className="h-[300vh] relative bg-ocean-950">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Layer: Cinematic Scroll Video */}
        <ScrollVideo src="/videos/hero-scroll.mp4" containerRef={containerRef} />
        
        {/* Subtle Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/80 via-ocean-900/40 to-transparent pointer-events-none" />

        {/* Foreground Layer: Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Card - Restricted to left side to show video clearly on the right */}
            <div className="bg-white/85 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="space-y-8">
                <span className="px-4 py-2 bg-ocean-50 text-ocean-700 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm border border-ocean-100">
                  {companyInfo.legalName}
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ocean-900 leading-tight">
                  Global Sourcing. <br />
                  UK <span className="text-ocean-600">Processing</span>.
                </h1>
                
                <p className="text-lg md:text-xl text-ocean-900/80 max-w-xl leading-relaxed font-medium">
                  We combine strong international seafood sourcing with advanced UK-based processing and professional packaging for retail and wholesale.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/products">
                    <Button size="lg" className="rounded-full text-base gap-2 group shadow-lg">
                      Explore Our Seafood
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/export">
                    <Button size="lg" variant="outline" className="rounded-full text-base gap-2 group bg-white/50 border-ocean-200 hover:bg-white transition-colors">
                      Discover MAP
                    </Button>
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-ocean-100/50 mt-8">
                  {[
                    { icon: ShieldCheck, text: "BI 307 Approved" },
                    { icon: Globe2, text: "Global Sourcing" },
                    { icon: Building2, text: "UK Processing" },
                    { icon: PackageCheck, text: "Retail Ready" },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3"
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="bg-ocean-50 p-2 rounded-xl shadow-sm text-ocean-600 border border-ocean-100">
                        <item.icon size={18} />
                      </div>
                      <span className="text-sm font-semibold text-ocean-900/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right area empty to show the premium video clearly */}
            <div className="hidden lg:block h-full min-h-[500px]">
              {/* The video is visible through this side of the card, acting as the primary visual */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
