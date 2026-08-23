import { siteConfig } from "../config/site";
import { ShoppingCart, MessageSquare } from "lucide-react";
import Image from "next/image";

export function ProductShowcase() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-ocean-200 flex-1 max-w-[100px] md:max-w-[200px]" />
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-900 mx-8 tracking-tight text-center">
            Recommended For You
          </h2>
          <div className="h-px bg-ocean-200 flex-1 max-w-[100px] md:max-w-[200px]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl p-4 border border-ocean-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-square bg-ocean-50 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center p-4">
                <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="px-2 pb-2">
                <h3 className="font-bold text-ocean-900 text-lg mb-1">{product.name}</h3>
                {(product as any).specs && <p className="text-sm text-ocean-600 mb-4">{(product as any).specs}</p>}
                
                <div className="flex items-center justify-between mt-4">
                  <span className="font-medium text-ocean-700 text-sm">Export Quality</span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-50 text-ocean-700 font-medium text-sm hover:bg-ocean-600 hover:text-white transition-colors">
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
