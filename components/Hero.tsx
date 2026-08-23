"use client";

import { ArrowRight, ShieldCheck, Globe2, Building2, PackageCheck } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { companyInfo } from "@/config/company";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-lg shadow-ocean-100/50 border border-ocean-50">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <span className="px-4 py-2 bg-ocean-50 text-ocean-700 rounded-full text-sm font-bold uppercase tracking-wider">
                {companyInfo.legalName}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ocean-900 leading-tight">
                Global Sourcing. <br />
                UK <span className="text-ocean-600">Processing</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-ocean-800/80 max-w-xl leading-relaxed">
                We combine strong international seafood sourcing with advanced UK-based processing and professional packaging for retail and wholesale.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/products">
                  <Button size="lg" className="rounded-full text-base gap-2 group">
                    Explore Our Seafood
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/export">
                  <Button size="lg" variant="outline" className="rounded-full text-base gap-2 group">
                    Discover MAP
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { icon: ShieldCheck, text: "BI 307 Approved" },
                  { icon: Globe2, text: "Global Sourcing" },
                  { icon: Building2, text: "UK Processing" },
                  { icon: PackageCheck, text: "Retail Ready" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-start gap-2"
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="bg-ocean-50 p-2.5 rounded-2xl shadow-sm text-ocean-600">
                      <item.icon size={20} />
                    </div>
                    <span className="text-xs font-medium text-ocean-900/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image area */}
            <div className="relative h-[500px] lg:h-[600px] w-full animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
              {/* Organic Shape Container */}
              <div className="absolute inset-0 bg-ocean-200/50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[morph_8s_ease-in-out_infinite]" />
              <div className="absolute inset-4 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden bg-ocean-300">
                <div className="w-full h-full bg-gradient-to-br from-ocean-300 to-ocean-600 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/products/seabass.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
