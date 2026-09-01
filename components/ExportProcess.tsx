import { Waves, ShieldCheck, Factory, Package, Ship } from "lucide-react";

export function ExportProcess() {
  const steps = [
    {
      icon: Waves,
      title: "Ocean Sourcing",
      description: "Directly sourced from trusted vessels in the Indian Ocean, ensuring sustainable and fresh catches.",
    },
    {
      icon: Factory,
      title: "Processing",
      description: "Rapidly transported to our advanced facilities for precision cleaning and filleting.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous HACCP and ISO 22000 compliant inspections guarantee uncompromised food safety.",
    },
    {
      icon: Package,
      title: "MAP Packaging",
      description: "Sealed using Modified Atmosphere Packaging to lock in freshness and extend shelf life.",
    },
    {
      icon: Ship,
      title: "Global Export",
      description: "Dispatched via advanced cold-chain logistics to international retail markets.",
    },
    {
      image: "/images/final-product.jpeg",
      title: "Final Product",
      description: "Ready for retail shelves, clearly labeled with quality assurances.",
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white border-b border-marine-gray/50">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-ocean-deep tracking-tighter mb-6">
            The Journey to Quality.
          </h2>
          <p className="text-lg md:text-xl text-text-muted">
            From the depths of the ocean to global retail shelves, our supply chain is engineered for absolute freshness and transparency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-[2px] bg-marine-gray/50" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-marine-surface border-4 border-white shadow-xl flex items-center justify-center text-ocean-blue group-hover:bg-ocean-blue group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 relative overflow-hidden">
                  {step.icon ? (
                    <step.icon size={32} strokeWidth={1.5} />
                  ) : (
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  )}
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-ocean-deep text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm z-10">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ocean-deep mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
