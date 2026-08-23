import { Button } from "./ui/Button";
import { PackageCheck, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function WhyChooseUs() {
  return (
    <section id="quality" className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-ocean-900 rounded-[3rem] overflow-hidden shadow-xl shadow-ocean-200/50 relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/bg-pattern.png')", backgroundSize: 'cover' }}></div>
          <div className="grid lg:grid-cols-2 relative z-10">
            
            {/* Left Content */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <span className="px-4 py-2 bg-ocean-800/80 text-ocean-300 border border-ocean-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6 w-fit">
                Innovation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Retail-Ready <br /> MAP Technology
              </h2>
              <p className="text-xl text-ocean-200/90 mb-12 leading-relaxed">
                We are investing in Modified Atmosphere Packaging (MAP) technology to develop modern, retail-ready seafood products designed to support freshness, presentation, and efficient distribution.
              </p>
              
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-3 bg-ocean-800/50 p-4 rounded-xl border border-ocean-700">
                  <PackageCheck className="text-ocean-400 shrink-0" size={24} />
                  <span className="text-ocean-100 font-medium">Controlled food-packaging gas mixture</span>
                </div>
                <div className="flex items-center gap-3 bg-ocean-800/50 p-4 rounded-xl border border-ocean-700">
                  <ShieldCheck className="text-ocean-400 shrink-0" size={24} />
                  <span className="text-ocean-100 font-medium">Works alongside HACCP & hygiene controls</span>
                </div>
              </div>
              
              <Link href="/export">
                <Button className="w-fit rounded-full bg-ocean-100 text-ocean-900 hover:bg-white hover:text-ocean-950 gap-2 font-semibold px-8 py-6">
                  Discover Our MAP Range
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-64 lg:h-auto w-full bg-ocean-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-ocean-900 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('/images/products/salmon.jpg')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20 text-ocean-100/90 text-center px-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Modern Presentation</h3>
                  <p className="max-w-xs mx-auto">Standardised packaged format suitable for modern retail environments.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
