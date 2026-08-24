import { siteConfig } from "../config/site";
import { ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="quality" className="py-24 md:py-32 px-4 md:px-8 bg-marine-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-ocean-deep tracking-tighter mb-6">
              Uncompromising Quality.
            </h2>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12 max-w-xl">
              Our commitment to food safety is absolute. From the moment of catch to final retail packaging, every step of our supply chain is rigorously monitored and certified to the highest international standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.certifications.map((cert, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-marine-gray/50 shadow-sm flex items-center gap-4 group hover:border-ocean-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-marine-surface flex items-center justify-center text-marine-teal group-hover:bg-ocean-deep group-hover:text-white transition-colors shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="font-bold text-ocean-deep">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square md:aspect-[4/5] bg-ocean-deep rounded-[3rem] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('/images/products/salmon.jpg')] bg-cover bg-center mix-blend-overlay opacity-50 hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="bg-ocean-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-3">Retail-Ready MAP Technology</h3>
                  <p className="text-ocean-white/90 leading-relaxed text-sm md:text-base">
                    We utilize advanced Modified Atmosphere Packaging (MAP) technology to dramatically extend shelf life, maintain pristine presentation, and ensure absolute freshness for global retail markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
