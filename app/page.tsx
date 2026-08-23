import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SeafoodCategories } from "@/components/SeafoodCategories";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactSection } from "@/components/ContactSection";
import { ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/config/company";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Hero />
      <div 
        className="bg-cover bg-center bg-fixed w-full h-full relative" 
        style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
      >
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        <div className="relative z-10">
          <TrustBar />
          <SeafoodCategories />
          <ProductShowcase />
          <WhyChooseUs />

          {/* Future Direction Teaser */}
          <section className="py-16 px-4 md:px-6">
            <div className="container mx-auto">
              <div className="bg-ocean-white rounded-[2rem] p-8 md:p-12 border border-marine-gray flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <Target className="text-ocean-blue" size={24} />
                    <h3 className="text-2xl font-bold text-text-primary">Looking Ahead</h3>
                  </div>
                  <p className="text-lg text-text-muted max-w-2xl">
                    Expanding our range of retail-ready seafood, developing marinated ready-to-cook products, and increasing wholesale distribution across the UK and beyond.
                  </p>
                </div>
                <Link href="/about">
                  <button className="whitespace-nowrap px-8 py-4 bg-white text-text-primary rounded-full font-semibold shadow-sm hover:shadow-md transition-all border border-marine-gray flex items-center gap-2">
                    Our Vision <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <ContactSection />
        </div>
      </div>
    </main>
  );
}
