"use client";

import { siteConfig } from "../config/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShoppingCart, Snowflake, ShieldCheck, Truck, Leaf } from "lucide-react";
import { Button } from "./ui/Button";
import { useCart } from "@/context/CartContext";

export function ProductShowcase({ products }: { products?: any[] }) {
  const { addToCart, setIsCartOpen } = useCart();
  
  // Take exactly 10 products for the 5x2 grid if no products are passed
  const featuredProducts = products || siteConfig.products.slice(0, 10);

  return (
    <section className="relative bg-white pt-24 pb-0 overflow-hidden w-full">
      
      {/* Top right wave graphic */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-[300px] pointer-events-none z-0">
        <svg className="absolute right-0 top-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C30,20 70,-10 100,20 L100,0 Z" fill="#e0f2fe" />
          <path d="M10,0 C40,30 80,0 100,40 L100,0 Z" fill="#bae6fd" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 md:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-500 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase">
                Our Seafood
              </span>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0c1a2e] tracking-tight mb-4 leading-tight">
              Premium catches. Ready for the <span className="text-ocean-blue">world</span>.
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl">
              A selection of our highest-grade seafood, expertly processed for international wholesale and retail.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6 shrink-0">
            {/* Circular Stamp */}
            <div className="hidden md:flex w-24 h-24 rounded-full border border-gray-200 items-center justify-center relative bg-white/50 backdrop-blur-sm">
               <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="curve" d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="transparent"/>
                    <text className="text-[11px] font-bold fill-gray-400 uppercase tracking-widest">
                      <textPath href="#curve" startOffset="0%">
                        From Ocean To The World &bull;
                      </textPath>
                    </text>
                 </svg>
               </div>
               {/* Inner icon */}
               <div className="text-ocean-blue">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                    <path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                 </svg>
               </div>
            </div>
            
            <Link href="/products" className="flex items-center gap-2 text-ocean-blue font-semibold hover:text-[#0c1a2e] transition-colors group text-sm">
              View Full Catalog
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
          {featuredProducts.map((product, idx) => {
            // Determine badge type based on index to mix it up like the design
            const isPremium = idx === 2 || idx === 4 || idx === 7;
            const badgeText = isPremium ? "PREMIUM" : "EXPORT";
            const badgeBg = isPremium ? "bg-amber-100/80 text-amber-800" : "bg-blue-50 text-ocean-blue";
            
            // Determine placeholder location based on index
            const location = isPremium ? "Global Sourcing" : (idx === 2 ? "Southeast Asia" : "Indian Ocean");
            
            const title = product.title || product.name;
            const id = product.id;
            const handle = product.handle || product.id;
            const imageUrl = product.images?.edges?.[0]?.node?.url || product.image || "/images/placeholder.jpg";
            const priceAmount = product.priceRange?.minVariantPrice?.amount ? parseFloat(product.priceRange.minVariantPrice.amount) : 0;
            
            return (
              <div 
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                
                <div className="p-4 md:p-5 flex flex-col grow">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-serif font-bold text-[#0c1a2e] text-lg leading-tight line-clamp-2">
                      {title}
                    </h3>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shrink-0 ${badgeBg}`}>
                      {badgeText}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 mb-5">
                    <MapPin size={12} strokeWidth={2} />
                    <span className="text-[10px] md:text-xs truncate">
                      {location} <span className="mx-1">|</span> Grade A
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <Link href={`/products/${handle}`} className="grow">
                      <button 
                        className="w-full bg-[#0c1a2e] text-white font-semibold py-2.5 px-4 rounded-full hover:bg-ocean-blue transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        Shop Now
                        <ArrowRight size={14} />
                      </button>
                    </Link>
                    <button 
                      onClick={() => {
                        addToCart({
                          productId: id,
                          variantId: product.variants?.edges?.[0]?.node?.id || "",
                          name: title,
                          image: imageUrl,
                          price: priceAmount,
                          form: "Whole",
                          weight: "1 kg",
                          quantity: 1
                        });
                        setIsCartOpen(true);
                      }}
                      className="w-10 h-10 shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-[#0c1a2e] hover:border-ocean-blue hover:text-ocean-blue transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Features Footer */}
        <div className="border-t border-gray-200 py-8 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 lg:divide-x divide-gray-200">
            {[
              { icon: Snowflake, title: "Cold Chain Assured", desc: "Freshness at every step" },
              { icon: ShieldCheck, title: "HACCP Certified", desc: "International food safety standards" },
              { icon: Truck, title: "Worldwide Shipping", desc: "Reliable global distribution" },
              { icon: Leaf, title: "Traceable Sourcing", desc: "From ocean to your table" }
            ].map((feature, i) => (
              <div key={i} className={`flex items-center gap-4 ${i !== 0 ? 'lg:pl-8' : ''}`}>
                <feature.icon size={28} strokeWidth={1.5} className="text-[#0c1a2e] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[#0c1a2e] font-semibold text-sm">{feature.title}</span>
                  <span className="text-gray-500 text-xs">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section Footer with Script and Waves */}
      <div className="relative h-[250px] w-full flex items-end">
        {/* Ocean background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
          <svg className="absolute top-[-1px] left-0 right-0 w-full h-[50px] z-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff"></path>
          </svg>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2644&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 relative z-20 pb-8 flex justify-between items-end">
          <div className="font-script text-4xl md:text-5xl lg:text-6xl text-[#0c1a2e]/60 -rotate-3 leading-none">
            Quality<br />
            <span className="ml-8">Beyond Borders</span>
          </div>
          
          <div className="flex items-center gap-4 hidden sm:flex">
            <span className="text-gray-500 font-semibold tracking-widest uppercase text-xs">Ocean Fresh</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
