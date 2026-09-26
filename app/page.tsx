import { Hero } from "@/components/Hero";
import { CompanyIntro } from "@/components/CompanyIntro";
import { ProductShowcase } from "@/components/ProductShowcase";
import { getProducts } from "@/lib/shopify";
import { Processing } from "@/components/Processing";
import { Quality } from "@/components/Quality";
import { CTASection } from "@/components/CTASection";

export default async function Home() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 5);

  return (
    <main className="min-h-screen bg-ocean-white">
      <Hero />
      <div className="w-full h-full relative z-20 bg-ocean-white">
        <div id="about">
          <CompanyIntro />

        </div>
        <div id="products">
          <ProductShowcase products={featuredProducts} />
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
