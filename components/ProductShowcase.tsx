import { siteConfig } from "../config/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductShowcase() {
  const allProducts = siteConfig.products;

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-ocean-white">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-ocean-deep tracking-tighter mb-4">
              Featured Export Catalog
            </h2>
            <p className="text-lg text-text-muted">
              A selection of our highest-grade catches, processed for international wholesale.
            </p>
          </div>
          <Link href="/products" className="hidden md:flex items-center gap-2 text-ocean-blue font-bold hover:text-ocean-deep transition-colors group">
            View Full Catalog
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {allProducts.map((product) => (
            <div 
              key={product.id}
              className="group flex flex-col gap-4"
            >
              <div className="aspect-[4/3] bg-white rounded-2xl relative overflow-hidden border border-marine-gray/50 shadow-sm group-hover:shadow-md transition-all duration-500">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/10 transition-colors duration-500" />
              </div>
              
              <div className="px-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-ocean-deep text-lg leading-tight group-hover:text-ocean-blue transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-marine-teal bg-marine-surface px-2 py-1 rounded-sm shrink-0">
                    Export
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
          <Link href="/products" className="flex items-center gap-2 text-ocean-blue font-bold hover:text-ocean-deep transition-colors group">
            View Full Catalog
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
