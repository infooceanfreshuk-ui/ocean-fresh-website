"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck, ShieldCheck, Leaf, Globe, Search, User, ShoppingCart, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/config/site";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products", hasDropdown: true },
  { name: "Our Story", href: "/about" },
  { name: "Sustainability", href: "/quality" },
  { name: "Bulk Orders", href: "/export" },
];

export function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = siteConfig.products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Bar */}
        <div className={`bg-[#0c1a2e] text-white/80 py-2.5 px-4 md:px-8 text-xs font-medium transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
          <div className="container mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-white" />
                <span>Worldwide Shipping</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck size={14} className="text-white" />
                <span>HACCP Certified</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <Leaf size={14} className="text-white" />
                <span>Premium Quality Seafood</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 divide-x divide-white/20">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                <Globe size={14} />
                <span>EN</span>
                <ChevronDown size={12} />
              </div>
              <Link href="#" className="pl-4 md:pl-6 hover:text-white transition-colors hidden sm:block">Track Order</Link>
              <Link href="#" className="pl-4 md:pl-6 hover:text-white transition-colors">Help</Link>
              <Link href="/contact" className="pl-4 md:pl-6 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
          <div className="container mx-auto max-w-[1440px] px-4 md:px-8 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center h-12 w-40 md:h-16 md:w-52">
              <Image
                src="/images/logo.jpeg"
                alt="Ocean Fresh"
                fill
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#0c1a2e] font-semibold text-sm hover:text-ocean-blue transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
                </Link>
              ))}
            </nav>

            {/* Right Icons & CTA */}
            <div className="flex items-center gap-4 sm:gap-6 relative z-50">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-[#0c1a2e] hover:text-ocean-blue transition-colors hidden sm:block"
              >
                <Search size={22} strokeWidth={1.5} />
              </button>
              <button className="text-[#0c1a2e] hover:text-ocean-blue transition-colors hidden sm:block">
                <User size={22} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-[#0c1a2e] hover:text-ocean-blue transition-colors relative mr-2"
              >
                <ShoppingCart size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-ocean-blue text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <Link href="/products" className="hidden lg:block">
                <Button 
                  className="bg-[#0c1a2e] text-white hover:bg-ocean-blue rounded-full px-6 py-5 font-semibold gap-2 shadow-sm"
                >
                  Shop Seafood
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-1 text-[#0c1a2e]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[104px] md:top-[120px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl"
          >
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12 py-8">
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search for premium seafood..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-4 pl-14 pr-4 text-lg text-[#0c1a2e] font-semibold focus:outline-none focus:ring-2 focus:ring-ocean-blue/20 focus:border-ocean-blue transition-all"
                />
              </div>
              
              {searchQuery && (
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Search Results</h3>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {searchResults.slice(0, 4).map(p => (
                        <Link 
                          key={p.id} 
                          href={`/products/${p.id}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-16 h-12 bg-gray-100 rounded-lg relative overflow-hidden shrink-0">
                            <Image src={p.image} alt={p.name} fill className="object-cover" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-sm text-[#0c1a2e] group-hover:text-ocean-blue transition-colors">{p.name}</span>
                            <span className="text-xs text-gray-500">${(20 + (p.id.length % 10)).toFixed(2)} / kg</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No products found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-semibold text-[#0c1a2e] flex items-center justify-between border-b border-gray-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={20} className="text-gray-400" />}
                </Link>
              ))}
              <div className="pt-4 flex gap-4">
                <Button className="flex-1 bg-[#0c1a2e] text-white py-6 rounded-full font-semibold">
                  Shop Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
