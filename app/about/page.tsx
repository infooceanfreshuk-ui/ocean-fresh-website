import { companyInfo } from "@/config/company";
import { ArrowRight, Globe, Ship, Building2, ShieldCheck, PackageCheck, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-marine-surface rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative border border-ocean-blue/15 shadow-sm text-center">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
              From Fresh Fish to Modern Seafood Distribution
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              {companyInfo.legalName} is a growing UK seafood importer, processor, wholesaler and retailer established in {companyInfo.established.split(" ")[2]}. 
              What began as a home-delivery service sourcing fresh fish from the London market has developed into an international 
              seafood sourcing and UK-based processing operation.
            </p>
          </div>
          {/* Decorative graphic */}
          <div className="absolute right-0 bottom-0 opacity-10 w-96 h-96 bg-seafoam rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
      </section>

      {/* Timeline / Our Story */}
      <section className="py-16 bg-white border-t border-ocean-blue/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-seafoam rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* 2024 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-aqua shadow-[0_0_0_4px_rgba(14,165,233,0.2)]"></div>
                <div className="w-0.5 h-full bg-ocean-white mt-2 min-h-[100px] group-last:hidden"></div>
              </div>
              <div className="bg-ocean-50/50 rounded-3xl p-8 border border-ocean-blue/15 flex-1 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-text-primary mb-2">2024 — Established</h3>
                <p className="text-text-muted leading-relaxed">
                  {companyInfo.legalName} was established in {companyInfo.established}, beginning with home delivery and fresh fish sourced from the London market.
                </p>
              </div>
            </div>

            {/* International Sourcing */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-fresh-aqua"></div>
                <div className="w-0.5 h-full bg-ocean-white mt-2 min-h-[100px] group-last:hidden"></div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-ocean-blue/15 flex-1 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="text-aqua" />
                  <h3 className="text-2xl font-bold text-text-primary">International Sourcing</h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Sourcing expanded through shipments from India and later trusted supplier relationships in Sri Lanka.
                </p>
              </div>
            </div>

            {/* UK Processing */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-fresh-aqua"></div>
                <div className="w-0.5 h-full bg-ocean-white mt-2 min-h-[100px] group-last:hidden"></div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-ocean-blue/15 flex-1 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-aqua" />
                  <h3 className="text-2xl font-bold text-text-primary">UK Processing & Distribution</h3>
                </div>
                <p className="text-text-muted leading-relaxed mb-4">
                  The Birmingham operation developed to support a complete lifecycle:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Fish processing", "Preparation", "Cold storage", "Packaging", "Relabelling", "Distribution"].map(item => (
                    <span key={item} className="px-3 py-1 bg-marine-surface text-marine-teal rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Wholesale & Retail */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-fresh-aqua"></div>
                <div className="w-0.5 h-full bg-ocean-white mt-2 min-h-[100px] group-last:hidden"></div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-ocean-blue/15 flex-1 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-text-primary mb-3">Wholesale & Retail</h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  The company developed a robust customer base across diverse sectors:
                </p>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.customerGroups.map(group => (
                    <span key={group} className="px-3 py-1 bg-ocean-white text-ocean-deep rounded-full text-sm font-medium">{group}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Food Safety */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-fresh-aqua"></div>
                <div className="w-0.5 h-full bg-ocean-white mt-2 min-h-[100px] group-last:hidden"></div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-ocean-blue/15 flex-1 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-aqua" />
                  <h3 className="text-2xl font-bold text-text-primary">Food Safety & Compliance</h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Food safety became a core operational priority, supported by HACCP-based controls and official {companyInfo.approval.authority} full approval ({companyInfo.approval.number}).
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-aqua shadow-[0_0_0_4px_rgba(14,165,233,0.2)]"></div>
              </div>
              <div className="bg-ocean-50/50 rounded-3xl p-8 border border-marine-gray flex-1 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <PackageCheck className="text-ocean-blue" />
                    <h3 className="text-2xl font-bold text-text-primary">Next Generation Packaging</h3>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    Ocean Fresh is investing in Modified Atmosphere Packaging (MAP) technology to develop professionally presented retail-ready seafood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Future Direction */}
      <section className="py-24 bg-ocean-deep text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6 text-seafoam">
                <Target size={32} />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-xl text-ocean-white leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-white">Looking Ahead (Future Direction)</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-seafoam shrink-0 mt-1" size={20} />
                  <span className="text-marine-surface">Expand the range of retail-ready seafood.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-seafoam shrink-0 mt-1" size={20} />
                  <span className="text-marine-surface">Develop premium marinated ready-to-cook seafood products.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-seafoam shrink-0 mt-1" size={20} />
                  <span className="text-marine-surface">Increase wholesale distribution across the UK.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-seafoam shrink-0 mt-1" size={20} />
                  <span className="text-marine-surface">Supply convenience retailers, regional wholesalers and supermarkets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-seafoam shrink-0 mt-1" size={20} />
                  <span className="text-marine-surface">Explore future export opportunities, including markets such as India.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
