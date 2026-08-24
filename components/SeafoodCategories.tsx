import { siteConfig } from "../config/site";
import { Button } from "./ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SeafoodCategories() {
  // Helper to determine asymmetrical grid spanning
  const getGridClass = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto h-[400px] md:h-[600px]"; // Big featured
      case 1: return "md:col-span-1 md:row-span-1 aspect-square h-[400px] md:h-auto"; // Top right small
      case 2: return "md:col-span-1 md:row-span-1 aspect-square h-[400px] md:h-auto"; // Bottom right small
      case 3: return "md:col-span-1 md:row-span-2 aspect-square md:aspect-auto h-[400px] md:h-[600px]"; // Left tall
      case 4: return "md:col-span-2 md:row-span-1 aspect-[2/1] h-[400px] md:h-auto"; // Right wide
      case 5: return "md:col-span-2 md:row-span-1 aspect-[2/1] h-[400px] md:h-auto"; // Left wide
      case 6: return "md:col-span-1 md:row-span-1 aspect-square h-[400px] md:h-auto"; // Right small
      default: return "md:col-span-1 aspect-square h-[400px] md:h-auto";
    }
  };

  return (
    <section id="categories" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-marine-gray pb-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black text-ocean-deep tracking-tighter mb-6">
              Our Premium <br/>Selections.
            </h2>
            <p className="text-xl md:text-2xl font-medium text-text-muted leading-relaxed">
              Explore our curated variety of global catches. Processed with exacting standards for the world's finest markets.
            </p>
          </div>
          <Link href="/products">
            <Button size="lg" className="rounded-full px-8 py-7 text-lg font-bold bg-ocean-deep text-white hover:bg-ocean-navy transition-all">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full auto-rows-fr">
          {siteConfig.categories.map((category, idx) => (
            <Link 
              href={`/products`}
              key={category.id} 
              className={`group relative overflow-hidden rounded-2xl block ${getGridClass(idx)}`}
            >
              <div className="absolute inset-0 bg-ocean-deep">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                      {category.name}
                    </h3>
                    <p className="text-ocean-white/80 text-sm md:text-base max-w-[80%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-75">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-ocean-deep transition-colors duration-500 shrink-0">
                    <ArrowUpRight size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
