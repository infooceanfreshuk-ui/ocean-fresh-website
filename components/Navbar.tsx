"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Our Story", href: "/#about" },
  { name: "Seafood", href: "/#products" },
  { name: "Processing", href: "/#processing" },
  { name: "Traceability", href: "/#quality" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? "bg-ocean-white/95 backdrop-blur-xl border-b border-ocean-deep/5 py-3" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center h-10 w-48 group">
            <Image
              src="/images/logo.jpeg"
              alt="Ocean Fresh"
              fill
              className={`object-contain transition-all duration-700 origin-left ${
                isScrolled ? "scale-90" : "scale-100"
              } mix-blend-multiply`}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${
                  isScrolled ? "text-ocean-deep hover:text-fresh-aqua" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 relative z-50">
            <Link href="/contact" className="hidden lg:block">
              <Button 
                className={`rounded-none px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-500 ${
                  isScrolled 
                    ? "bg-ocean-deep text-ocean-white hover:bg-ocean-navy"
                    : "bg-white text-ocean-deep hover:bg-marine-surface"
                }`}
              >
                Partner With Us
              </Button>
            </Link>
            
            <button
              className={`lg:hidden p-2 transition-colors ${
                isScrolled || isMobileMenuOpen ? "text-ocean-deep" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ocean-white pt-28 px-6 lg:hidden"
          >
            <div className="flex flex-col space-y-8 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-light text-ocean-deep hover:text-fresh-aqua transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-10"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-none py-8 text-sm font-bold tracking-widest uppercase bg-ocean-deep text-ocean-white">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
