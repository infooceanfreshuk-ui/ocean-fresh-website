import { siteConfig } from "../config/site";
import { Button } from "./ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function SeafoodCategories() {
  return (
    <section id="categories" className="py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-900 mb-4 tracking-tight">
              Our Seafood
            </h2>
            <p className="text-xl font-medium text-ocean-600 mb-2">
              Fresh. Frozen. Trusted.
            </p>
            <p className="text-ocean-700/80 text-lg">
              Explore our wide variety of premium catches, processed with care for the global market.
            </p>
          </div>
          <Button variant="outline" className="rounded-full gap-2 group w-fit bg-white hover:bg-ocean-50 hover:text-ocean-900 border-ocean-200">
            View All Products
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 w-full">
          {siteConfig.categories.map((category, idx) => (
            <div 
              key={category.id} 
              className="group relative bg-white border border-ocean-100 rounded-2xl p-3 md:p-4 lg:p-5 flex items-center justify-between overflow-hidden shadow-sm hover:shadow-lg hover:shadow-ocean-200/40 hover:border-ocean-300 transition-all duration-500 cursor-pointer"
            >
              {/* Animated subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-50/0 via-ocean-50/0 to-ocean-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex items-center gap-4 md:gap-6">
                {/* Number */}
                <div className="hidden sm:block text-3xl md:text-4xl font-black text-ocean-50 group-hover:text-ocean-100 transition-colors duration-500 w-12 md:w-16 tracking-tighter">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-ocean-900 mb-1 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {category.name}
                  </h3>
                  <p className="text-ocean-600 text-xs md:text-sm group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-out line-clamp-1 md:line-clamp-none">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 md:gap-6">
                {/* Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-ocean-50 relative overflow-hidden border-2 border-white shadow-sm group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-md transition-all duration-700 ease-out shrink-0">
                  <Image src={category.image} alt={category.name} fill className="object-cover" />
                </div>
                
                {/* Arrow Icon */}
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-400 group-hover:bg-ocean-600 group-hover:text-white transition-colors duration-500 hidden md:flex flex-shrink-0 border border-ocean-100 group-hover:border-ocean-600 group-hover:scale-110">
                  <ArrowUpRight size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
