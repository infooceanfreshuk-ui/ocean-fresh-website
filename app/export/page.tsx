import { PackageCheck, ShieldAlert, Sparkles, TrendingUp, Presentation, Recycle, Store, Route, Award, ArrowRight } from "lucide-react";

export default function ExportPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-marine-surface rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-sm border border-ocean-blue/15">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <span className="px-4 py-2 bg-ocean-white text-marine-teal rounded-full text-sm font-bold uppercase tracking-wider">
                Innovation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
                Modified Atmosphere Packaging (MAP)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Modified Atmosphere Packaging, commonly called MAP, is a food-packaging technology in which the atmosphere inside a sealed package is replaced or modified with a controlled mixture of food-packaging gases before the package is sealed.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-ocean-200 to-ocean-100 rounded-[3rem] p-8 flex flex-col items-center justify-center text-center">
                <PackageCheck size={80} className="text-ocean-blue mb-6" />
                <h3 className="text-2xl font-bold text-text-primary mb-4">Retail-Ready Seafood</h3>
                <p className="text-text-muted">
                  Designed to help maintain product quality and presentation during the intended storage and distribution period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-2xl flex gap-6 items-start">
          <ShieldAlert className="text-orange-600 shrink-0 mt-1" size={32} />
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-2">Important Information</h3>
            <p className="text-orange-800/90 leading-relaxed">
              MAP is not a replacement for refrigeration or HACCP controls. It is a packaging technology that works alongside good hygiene, temperature control, appropriate processing and validated food-safety procedures. The performance of MAP depends on factors including species, product condition, gas composition, packaging material, sealing performance, temperature and validated shelf-life.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-ocean-deep text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How MAP Works</h2>
            <p className="text-ocean-white/80 text-lg">
              A simplified overview of our MAP process for retail-ready seafood distribution.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-ocean-blue -z-10 -translate-y-1/2"></div>
            
            {[
              { step: "1", title: "Fresh Fish", desc: "Selected under controlled hygiene." },
              { step: "2", title: "Preparation", desc: "Placed into a food-grade tray." },
              { step: "3", title: "Gas Flushing", desc: "Air replaced with controlled gas." },
              { step: "4", title: "Sealing", desc: "Heat-sealed for controlled atmosphere." },
              { step: "5", title: "Chilled Distribution", desc: "Remains chilled throughout supply chain." }
            ].map((item, i, arr) => (
              <div key={i} className="flex flex-col items-center text-center w-full md:w-1/5 group">
                <div className="w-16 h-16 rounded-full bg-ocean-navy border-4 border-ocean-deep flex items-center justify-center text-2xl font-bold text-fresh-aqua mb-6 group-hover:scale-110 group-hover:bg-marine-teal transition-all">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-seafoam px-4">{item.desc}</p>
                {i < arr.length - 1 && (
                  <ArrowRight className="md:hidden text-marine-teal my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MAP Technology Matters */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-6">Why MAP Technology Matters</h2>
            <p className="text-lg text-text-muted">
              Transforming the way seafood is presented, stored, and distributed across the UK market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Freshness & Quality", desc: "A controlled package atmosphere can help support seafood quality during chilled storage when correctly designed." },
              { icon: TrendingUp, title: "Shelf-Life Management", desc: "MAP can help extend the commercially useful shelf life of suitable chilled seafood products." },
              { icon: Presentation, title: "Professional Presentation", desc: "Sealed tray packaging creates a consistent, modern retail presentation and protects the product." },
              { icon: Recycle, title: "Reduced Food Waste", desc: "Better preservation of product quality can support improved stock rotation and reduce avoidable waste." },
              { icon: Store, title: "Retail Readiness", desc: "MAP provides a standardised packaged format suitable for modern retail environments." },
              { icon: Route, title: "Wider Distribution", desc: "Professionally packaged seafood can support structured supply to convenience retailers and supermarkets." },
              { icon: Award, title: "Brand Development", desc: "MAP gives Ocean Fresh an opportunity to build a recognisable packaged seafood range with consistent presentation." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-ocean-50/50 p-8 rounded-3xl border border-ocean-blue/15 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-ocean-white flex items-center justify-center text-ocean-blue mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
