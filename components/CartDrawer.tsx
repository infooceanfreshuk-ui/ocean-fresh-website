"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createCart, addToCart } from "@/lib/shopify";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true);
      
      // Filter out items without variantId (e.g. from the old localstorage)
      const validItems = items.filter(i => i.variantId);
      if (validItems.length === 0) {
        alert("Your cart has invalid items. Please clear your cart and try again.");
        setIsCheckingOut(false);
        return;
      }

      // Create cart in Shopify
      const cart = await createCart();
      if (!cart || !cart.id) throw new Error("Failed to create cart");

      // Map local items to Shopify line items
      const lines = validItems.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.quantity
      }));

      // Add lines to cart
      const updatedCart = await addToCart(cart.id, lines);
      if (updatedCart && updatedCart.checkoutUrl) {
        window.location.href = updatedCart.checkoutUrl;
      } else {
        throw new Error("Failed to get checkout URL");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error creating your checkout. Please try again.");
      setIsCheckingOut(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent body scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[100] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[101] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif font-bold text-[#0c1a2e]">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-[#0c1a2e] transition-colors rounded-full hover:bg-gray-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                <Trash2 size={32} className="opacity-20" />
              </div>
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-ocean-blue font-bold text-sm hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white">
                <div className="w-20 h-20 rounded-xl bg-gray-50 relative overflow-hidden shrink-0 border border-gray-100">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-[#0c1a2e] leading-tight">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium mb-3">
                    {item.weight} • {item.form}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-gray-200 rounded-lg h-7 w-24">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex-1 flex items-center justify-center text-gray-500 hover:text-[#0c1a2e]"
                      >
                        <Minus size={12} />
                      </button>
                      <div className="flex-1 text-center font-bold text-[11px] text-[#0c1a2e]">
                        {item.quantity}
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex-1 flex items-center justify-center text-gray-500 hover:text-[#0c1a2e]"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-bold text-sm text-[#0c1a2e]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium text-sm">Subtotal</span>
              <span className="text-xl font-bold text-[#0c1a2e]">${cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleCheckout} 
              disabled={isCheckingOut}
              className={`w-full bg-[#0c1a2e] text-white font-bold py-4 px-4 rounded-xl hover:bg-ocean-blue transition-colors flex items-center justify-center gap-2 text-sm shadow-md ${isCheckingOut ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isCheckingOut ? 'Creating Secure Checkout...' : 'Checkout securely'}
              {!isCheckingOut && <ArrowRight size={16} />}
            </button>
            <p className="text-[10px] text-center text-gray-400 mt-4 font-medium">
              Taxes and shipping calculated at checkout.
            </p>
            <p className="text-[10px] text-center text-red-500 mt-2 font-bold">
              Because the exact catch weight varies, the total may not be exact. 
              This will be an authorization amount and any difference will be refunded.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
