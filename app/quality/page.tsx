import { companyInfo } from "@/config/company";
import { ShieldCheck, Thermometer, Sparkles, Network, Activity, FileCheck, CheckCircle2 } from "lucide-react";

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero / Food Safety Trust Statement */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-ocean-900 rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-xl text-center text-white">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/bg-pattern.png')", backgroundSize: 'cover' }}></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <ShieldCheck size={64} className="mx-auto mb-8 text-ocean-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Food Safety is at the Heart of {companyInfo.brandName}
            </h1>
            <p className="text-xl md:text-2xl text-ocean-100 leading-relaxed font-light">
              Our {companyInfo.operation} operation is supported by HACCP-based food-safety controls and operates under {companyInfo.approval.authority} full approval ({companyInfo.approval.number}), covering fish processing, cold storage and re-wrapping/repackaging activities.
            </p>
          </div>
        </div>
      </section>

      {/* BI 307 Official Approval Banner */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-white rounded-[2rem] border-2 border-ocean-100 shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-ocean-200 transition-colors">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-ocean-500 mb-2">Official Food-Business Approval</p>
            <h2 className="text-3xl font-bold text-ocean-900">{companyInfo.approval.authority} Full Approval</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {companyInfo.approval.activities.map(activity => (
                <span key={activity} className="px-4 py-2 bg-ocean-50 text-ocean-800 rounded-lg text-sm font-medium">
                  {activity}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-ocean-50 px-8 py-6 rounded-2xl border border-ocean-100 flex flex-col items-center justify-center min-w-[200px]">
            <span className="text-ocean-600 text-sm font-semibold mb-1">Approval Number</span>
            <span className="text-4xl font-black text-ocean-900">{companyInfo.approval.number}</span>
          </div>
        </div>
      </section>

      {/* HACCP Content */}
      <section className="py-20 bg-ocean-50/50 border-y border-ocean-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-900 mb-6">HACCP-Based Food-Safety Controls</h2>
            <p className="text-lg text-ocean-700/80 leading-relaxed">
              HACCP (Hazard Analysis and Critical Control Points) is a preventive food-safety approach that identifies potential hazards, establishes controls, and focuses on important stages of the food process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-ocean-100 shadow-sm">
              <h3 className="text-xl font-bold text-ocean-900 mb-3">Prevention Rather Than Reaction</h3>
              <p className="text-ocean-700/80">HACCP focuses on identifying food-safety hazards and controlling them before they affect the product.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-ocean-100 shadow-sm">
              <h3 className="text-xl font-bold text-ocean-900 mb-3">Particularly Important for Seafood</h3>
              <p className="text-ocean-700/80">Seafood is highly perishable and requires controlled handling, temperature management and hygiene.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-ocean-100 shadow-sm">
              <h3 className="text-xl font-bold text-ocean-900 mb-3">Consistent Processes</h3>
              <p className="text-ocean-700/80">HACCP-based systems support repeatable procedures for receiving, processing, storage, packaging, and distribution.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-ocean-100 shadow-sm">
              <h3 className="text-xl font-bold text-ocean-900 mb-3">Customer Confidence</h3>
              <p className="text-ocean-700/80">Strong food-safety controls provide confidence to retail customers, restaurants, wholesalers, and potential supermarket customers.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-ocean-100 shadow-sm lg:col-span-2">
              <h3 className="text-xl font-bold text-ocean-900 mb-3">Retail & Wholesale Readiness</h3>
              <p className="text-ocean-700/80">Documented food-safety controls provide an important foundation for larger retail and food-service customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HACCP Matters in Seafood */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-ocean-900 mb-6">Why HACCP Matters in Seafood</h2>
            <p className="text-lg text-ocean-700/80 leading-relaxed">
              Seafood is highly perishable and can be affected by microbiological, chemical, and physical hazards. Therefore, strict controls are essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Thermometer, title: "Temperature Control", desc: "Chilled handling and temperature control are critical throughout the seafood supply chain." },
              { icon: Sparkles, title: "Hygienic Processing", desc: "Hygienic processing reduces contamination risk." },
              { icon: Network, title: "Traceability", desc: "Traceability and controlled sourcing help manage products and suppliers effectively." },
              { icon: Activity, title: "Critical Controls", desc: "HACCP-based procedures help identify hazards and establish control measures at critical stages." },
              { icon: FileCheck, title: "Documented Controls", desc: "Documented controls provide confidence to commercial customers and support larger-scale retail supply." },
              { icon: CheckCircle2, title: "Retail-Ready Seafood", desc: "Food-safety management is particularly important when seafood is processed, repackaged and placed into retail-ready formats." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ocean-900 mb-2">{feature.title}</h3>
                  <p className="text-ocean-700/80 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
