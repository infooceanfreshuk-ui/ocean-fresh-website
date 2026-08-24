import { Hero } from "@/components/Hero";
import { CompanyIntro } from "@/components/CompanyIntro";
import { GlobalScale } from "@/components/GlobalScale";
import { SeafoodStory } from "@/components/SeafoodStory";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Processing } from "@/components/Processing";
import { Quality } from "@/components/Quality";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-ocean-white">
      <Hero />
      <div className="w-full h-full relative z-20 bg-ocean-white">
        <div id="about">
          <CompanyIntro />
          <GlobalScale />
        </div>
        <div id="products">
          <SeafoodStory />
          <ProductShowcase />
        </div>
        <div id="processing">
          <Processing />
        </div>
        <div id="quality">
          <Quality />
        </div>
        <CTASection />
      </div>
    </main>
  );
}
