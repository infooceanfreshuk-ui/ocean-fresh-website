import { getProducts } from "@/lib/shopify";
import { ProductGrid } from "@/components/ProductGrid";

export default async function ProductsPage() {
  const allProducts = await getProducts();

  return (
    <main className="min-h-screen bg-ocean-white pt-40 pb-24 px-6 lg:px-12">
      <ProductGrid allProducts={allProducts} />
    </main>
  );
}
