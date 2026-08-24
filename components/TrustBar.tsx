import { ShieldCheck, Anchor, MapPin, Building } from "lucide-react";

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
    <section className="bg-white py-16 md:py-24 border-b border-marine-gray/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-6 p-4 rounded-full bg-marine-surface text-ocean-blue group-hover:bg-ocean-blue group-hover:text-white transition-colors duration-500">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3 tracking-tight">{item.title}</h3>
              <p className="text-base text-text-muted font-medium max-w-[250px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
