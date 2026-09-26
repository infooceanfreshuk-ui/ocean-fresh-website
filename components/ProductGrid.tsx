"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { textReveal, staggerContainer } from "@/lib/animations";
import { ArrowRight, MapPin, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function ProductGrid({ allProducts }: { allProducts: any[] }) {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <div className="container mx-auto max-w-[1440px]">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mb-24 flex flex-col items-center text-center"
      >
        <motion.div variants={textReveal} className="mb-8">
          <span className="text-ocean-deep/50 text-sm tracking-[0.2em] font-medium uppercase">
            Our Catch
          </span>
        </motion.div>
        <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-light tracking-tight text-ocean-deep mb-8 max-w-4xl">
          Premium products for global markets.
        </motion.h1>
        <motion.p variants={textReveal} className="text-xl text-ocean-deep/70 font-light max-w-2xl leading-relaxed">
          Explore our complete selection of fresh and frozen seafood, sourced responsibly and processed under strict HACCP controls.
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {allProducts.map((product, idx) => {
          const isPremium = idx % 5 === 2 || idx % 5 === 4 || idx === 7;
          const badgeText = isPremium ? "PREMIUM" : "EXPORT";
          const badgeBg = isPremium ? "bg-amber-100/80 text-amber-800" : "bg-blue-50 text-ocean-blue";
          
          const location = isPremium ? "Global Sourcing" : (idx % 3 === 2 ? "Southeast Asia" : "Indian Ocean");
          
          const imageUrl = product.images?.edges?.[0]?.node?.url || "/images/placeholder.jpg";
          const priceAmount = parseFloat(product.priceRange?.minVariantPrice?.amount || "0");

          return (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 5) * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col group"
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <Image 
                  src={imageUrl} 
                  alt={product.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              
              <div className="p-4 md:p-5 flex flex-col grow text-left">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-serif font-bold text-[#0c1a2e] text-lg leading-tight line-clamp-2">
                    {product.title}
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
                
                <div className="font-bold text-[#0c1a2e] mb-4">${priceAmount.toFixed(2)}</div>

                <div className="flex items-center gap-2 mt-auto">
                  <Link href={`/products/${product.handle}`} className="grow">
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
                        productId: product.id,
                        variantId: product.variants?.edges?.[0]?.node?.id || "",
                        name: product.title,
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
