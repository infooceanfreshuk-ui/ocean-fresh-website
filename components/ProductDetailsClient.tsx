"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { 
  ChevronLeft, ChevronRight, Play, Leaf, Snowflake, ShieldCheck, 
  Globe, Minus, Plus, ArrowRight, FileText, ShoppingCart, Truck, Shield, RotateCcw, Fish, CheckCircle
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export function ProductDetailsClient({ product }: { product: any }) {
  
  // State for form selections
  const [selectedForm, setSelectedForm] = useState("Whole Fish");
  const [selectedWeight, setSelectedWeight] = useState("1 kg");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Product Details");
  const [showToast, setShowToast] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  const productName = product.title || "Product";
  const productDescription = product.description || "";
  const imageUrl = product.images?.edges?.[0]?.node?.url || "/images/placeholder.jpg";
  const allImages = product.images?.edges?.map((edge: any) => edge.node.url) || [imageUrl];
  
  // Extract variants from Shopify
  const variants = product.variants?.edges?.map((edge: any) => edge.node) || [];
  
  // Find the variant that matches the selected weight
  const selectedVariant = variants.find((v: any) => v.title.toLowerCase() === selectedWeight.replace(' ', '').toLowerCase() || v.title === selectedWeight) || variants[0];
  
  const priceAmount = selectedVariant ? parseFloat(selectedVariant.price.amount) : 0;
  
  const unitPrice = priceAmount;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      variantId: selectedVariant.id,
      name: productName,
      image: imageUrl,
      price: unitPrice,
      form: selectedForm,
      weight: selectedWeight,
      quantity: quantity
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart({
      productId: product.id,
      variantId: selectedVariant.id,
      name: productName,
      image: imageUrl,
      price: unitPrice,
      form: selectedForm,
      weight: selectedWeight,
      quantity: quantity
    });
    setIsCartOpen(true);
  };

  // Thumbnail images
  const thumbnails = allImages.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f4f8fb] pt-32 pb-24">
      {/* Top Navbar / Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 mb-8">
        <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2 text-gray-500">
            <Link href="/" className="hover:text-ocean-blue">Home</Link>
            <span>&rsaquo;</span>
            <Link href="/products" className="hover:text-ocean-blue">Shop</Link>
            <span>&rsaquo;</span>
            <span>Fish</span>
            <span>&rsaquo;</span>
            <span className="text-gray-900 font-medium">{productName}</span>
          </div>
          <div className="flex items-center gap-6 text-gray-500 font-semibold">
            <button className="flex items-center gap-1 hover:text-[#0c1a2e]">
              <ChevronLeft size={14} /> Previous
            </button>
            <div className="w-px h-3 bg-gray-300"></div>
            <button className="flex items-center gap-1 hover:text-[#0c1a2e]">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Main 3-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          
          {/* Left Column: Media Gallery (approx 40%) */}
          <div className="w-full lg:w-[40%] flex gap-4 h-[500px]">
            {/* Thumbnails */}
            <div className="w-20 shrink-0 flex flex-col gap-3 h-full overflow-y-auto hidden sm:flex hide-scrollbar">
              {thumbnails.map((img: string, idx: number) => (
                <div key={idx} className={`w-full aspect-[4/3] rounded-lg border-2 overflow-hidden cursor-pointer ${idx === 0 ? 'border-ocean-blue' : 'border-transparent'}`}>
                  <Image src={img} alt="thumbnail" width={80} height={60} className="object-cover w-full h-full" />
                </div>
              ))}

            </div>
            
            {/* Main Image */}
            <div className="grow relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <Image src={imageUrl} alt={productName} fill className="object-cover" />
              
              {/* Zoom icon bottom right */}
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-700 hover:text-ocean-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              
              {/* Cursive overlay text */}
              <div className="absolute bottom-6 left-6 font-script text-white text-3xl -rotate-6 drop-shadow-md">
                Freshness <br/> You Can Trust
              </div>
            </div>
          </div>
          
          {/* Center Column: Product Info (approx 30%) */}
          <div className="w-full lg:w-[30%] flex flex-col pt-2">
            <span className="text-[9px] font-bold uppercase tracking-widest text-ocean-blue bg-blue-50 px-3 py-1.5 rounded-sm self-start mb-4">
              Premium Quality
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c1a2e] leading-[1.1] mb-3">
              {productName}
            </h1>
            
            <p className="text-base text-ocean-blue font-semibold mb-3">
              Clean Oceans. Better Tomorrows.
            </p>
            
            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-amber-400">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-700">4.8</span>
              <span className="text-xs text-gray-500">(124 reviews)</span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-10 pr-4">
              Premium {productName} sourced from sustainable fisheries. Known for its firm texture, mild flavor and versatility, it's a preferred choice for global markets.
            </p>
            
            {/* 4 Circular Badges */}
            <div className="grid grid-cols-4 gap-2 mt-auto">
              {[
                { icon: Leaf, label: "Sustainably\nSourced" },
                { icon: Snowflake, label: "Flash\nFrozen" },
                { icon: ShieldCheck, label: "HACCP\nCertified" },
                { icon: Globe, label: "Export\nQuality" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-ocean-blue">
                    <badge.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] text-gray-600 font-medium text-center leading-tight whitespace-pre-line">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Purchasing Card (approx 30%) */}
          <div className="w-full lg:w-[30%]">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col h-full">
              
              {/* Price Row */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-3xl font-bold text-[#0c1a2e]">${totalPrice.toFixed(2)}</span>
                  <span className="text-gray-500 font-semibold ml-2 text-sm">
                    {quantity > 1 ? `($${unitPrice.toFixed(2)} ea)` : ` / ${selectedWeight}`}
                  </span>
                </div>
                <span className="bg-green-50 text-green-600 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-sm">
                  In Stock
                </span>
              </div>
              

              {/* Select Weight */}
              <div className="mb-6">
                <span className="text-[11px] font-bold text-[#0c1a2e] mb-2 block">Select Weight</span>
                <div className="grid grid-cols-2 gap-2">
                  {["500g", "1 kg"].map(weight => (
                    <button 
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`py-2 px-1 text-[10px] font-bold rounded-lg border transition-colors ${selectedWeight === weight ? 'border-ocean-blue bg-blue-50 text-ocean-blue' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <span className="text-[11px] font-bold text-[#0c1a2e] mb-2 block">Quantity (kg)</span>
                <div className="flex items-center border border-gray-200 rounded-lg h-10 w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-[#0c1a2e]"
                  >
                    <Minus size={14} />
                  </button>
                  <div className="flex-1 text-center font-bold text-sm text-[#0c1a2e]">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-[#0c1a2e]"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-auto mb-6">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-[#0c1a2e] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-ocean-blue transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Add to Cart
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="w-full bg-white text-[#0c1a2e] border border-gray-200 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <ShoppingCart size={16} />
                  Buy Now
                </button>
              </div>
              
              {/* Trust badges */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-600">
                  <Truck size={12} className="text-[#0c1a2e]" /> Worldwide Shipping
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-600">
                  <ShieldCheck size={12} className="text-[#0c1a2e]" /> Secure Payment
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-600">
                  <RotateCcw size={12} className="text-[#0c1a2e]" /> Easy Returns
                </div>
              </div>

            </div>
          </div>
          
        </div>
        
        {/* Tabs Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] overflow-hidden mb-16">
          <div className="flex border-b border-gray-100 overflow-x-auto hide-scrollbar">
            <div className="py-5 px-8 font-bold text-xs whitespace-nowrap border-b-[3px] border-ocean-blue text-ocean-blue">
              Product Details
            </div>
          </div>
          
          <div className="p-8 md:p-10">
            {activeTab === "Product Details" && (
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="flex-1">
                  <p className="text-gray-500 leading-relaxed text-sm">
                    Our {productName} is carefully sourced from trusted fisheries, processed under strict food safety standards, and packed to preserve freshness. With its mild, buttery flavor and firm texture, it is ideal for a wide range of culinary applications, from grilling to baking.
                  </p>
                </div>
                
                <div className="flex-1 flex flex-col gap-3 border-l border-gray-100 pl-8">
                  {[
                    { label: "Scientific Name:", val: "Lates calcarifer" },
                    { label: "Origin:", val: "Southeast Asia" },
                    { label: "Available Forms:", val: "Whole, Fillet, Steak" },
                    { label: "Storage:", val: "Keep frozen at -18°C" },
                    { label: "Shelf Life:", val: "18 months" }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-ocean-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-500 font-medium">{spec.label}</span>
                      <span className="font-semibold text-gray-700">{spec.val}</span>
                    </div>
                  ))}
                </div>
                

              </div>
            )}
            {activeTab !== "Product Details" && (
              <div className="h-40 flex items-center justify-center text-gray-400">
                Content for {activeTab} goes here.
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <h2 className="font-serif text-3xl font-bold text-[#0c1a2e]">You May Also Like</h2>
            <Link href="/products" className="text-ocean-blue font-bold text-xs flex items-center gap-1 hover:text-[#0c1a2e] uppercase tracking-wider">
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {siteConfig.products.slice(0, 4).map((p) => (
              <div key={p.id} className="min-w-[280px] md:min-w-0 md:w-1/4 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm flex items-center p-3 gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-24 h-16 bg-gray-100 rounded-lg relative overflow-hidden shrink-0">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col grow">
                  <span className="font-bold text-[#0c1a2e] text-sm leading-tight mb-1">{p.name}</span>
                  <div className="flex items-center text-xs">
                    <span className="font-bold text-[#0c1a2e]">${(20 + (p.id.length % 10)).toFixed(2)}</span>
                    <span className="text-gray-500 ml-1">/ kg</span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#0c1a2e] hover:border-ocean-blue hover:text-ocean-blue shrink-0 mr-1">
                  <ShoppingCart size={14} />
                </button>
              </div>
            ))}
            
            {/* Nav buttons for carousel (visual only) */}
            <div className="hidden md:flex flex-col justify-center items-center gap-2 shrink-0 ml-2">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0c1a2e] hover:border-[#0c1a2e]">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0c1a2e] hover:border-[#0c1a2e]">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#0c1a2e] text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle size={20} className="text-green-400" />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Added to Cart</span>
            <span className="text-xs text-white/80">{quantity}x {productName} ({selectedWeight})</span>
          </div>
        </div>
      )}

    </main>
  );
}
