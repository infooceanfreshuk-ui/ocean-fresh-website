import { siteConfig } from "../config/site";
import { ShoppingCart, MessageSquare } from "lucide-react";
import Image from "next/image";

export function ProductShowcase() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-ocean-blue/20 flex-1 max-w-[100px] md:max-w-[200px]" />
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mx-8 tracking-tight text-center">
            Recommended For You
          </h2>
          <div className="h-px bg-ocean-blue/20 flex-1 max-w-[100px] md:max-w-[200px]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.products.map((product) => (
            <div 
              key={product.id}
              className="bg-ocean-white rounded-3xl p-4 border border-ocean-blue/15 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="aspect-square bg-marine-surface rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center p-4">
                <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="px-2 pb-2">
                <h3 className="font-bold text-ocean-deep text-lg mb-1">{product.name}</h3>
                {(product as any).specs && <p className="text-sm text-text-muted mb-4">{(product as any).specs}</p>}
                
                <div className="flex items-center justify-between mt-4">
                  <span className="font-medium text-marine-teal text-sm">Export Quality</span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-marine-surface text-ocean-blue font-medium text-sm hover:bg-ocean-navy hover:text-white transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
