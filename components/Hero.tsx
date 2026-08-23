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
      {/* Pinned Video Container - Plays unobstructed during the scroll */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <ScrollVideo src="/videos/hero-scroll.mp4" containerRef={containerRef} />
        {/* Optional overlay for the very end when text comes up */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 to-transparent opacity-0 transition-opacity duration-1000" />
      </div>

      {/* 
        The Hero Text Card - Positioned at the very end of the 300vh scroll area.
        This means it will naturally scroll into view ONLY AFTER the video animation has completed.
      */}
      <div className="absolute bottom-0 w-full min-h-[100svh] flex items-center justify-center z-10 pointer-events-none pb-16">
        <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/20">
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
            {/* Right area empty */}
            <div className="hidden lg:block h-full min-h-[500px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
