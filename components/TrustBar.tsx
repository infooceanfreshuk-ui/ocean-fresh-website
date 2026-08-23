import { ShieldCheck, Anchor, MapPin, Building } from "lucide-react";
import { companyInfo } from "@/config/company";

export function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "BI 307 Approved",
      description: "Birmingham City Council Full Approval",
    },
    {
      icon: Anchor,
      title: "HACCP Controlled",
      description: "Rigorous food-safety management",
    },
    {
      icon: MapPin,
      title: "Global Sourcing",
      description: "Trusted networks in India & Sri Lanka",
    },
    {
      icon: Building,
      title: "UK Operations",
      description: "Advanced processing & cold storage",
    },
  ];

  return (
    <section id="about" className="py-12 px-4 md:px-6 relative z-20 -mt-12">
      <div className="container mx-auto">
        <div className="bg-ocean-white rounded-3xl shadow-xl shadow-ocean-deep/5 p-8 md:p-10 border border-ocean-blue/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:divide-x divide-marine-gray">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 lg:px-6 first:pl-0 last:pr-0">
                <div className="bg-marine-surface p-3 rounded-2xl text-aqua shrink-0">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-ocean-deep mb-1">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
