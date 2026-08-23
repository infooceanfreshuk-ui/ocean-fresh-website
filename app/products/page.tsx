import { SeafoodCategories } from "@/components/SeafoodCategories";
import { ProductShowcase } from "@/components/ProductShowcase";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6 mt-12 mb-8 text-center max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight text-ocean-900 mb-6">Premium Products</h1>
        <p className="text-xl text-ocean-700/80">Explore our wide selection of fresh and frozen seafood, meticulously processed and packed for international export.</p>
      </div>
      
      <SeafoodCategories />
      <ProductShowcase />
    </main>
  );
}
