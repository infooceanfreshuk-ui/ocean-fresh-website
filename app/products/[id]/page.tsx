import { getProduct } from "@/lib/shopify";
import { ProductDetailsClient } from "@/components/ProductDetailsClient";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
