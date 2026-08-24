"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Export", href: "/export" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-ocean-white/95 backdrop-blur-md shadow-sm border-b border-marine-gray/50 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full relative w-40 md:w-48 group">
            <Image
              src="/images/logo.jpeg"
              alt="Ocean Fresh Logo"
              fill
              className={`object-contain transition-all duration-500 origin-left ${
                isScrolled ? "scale-100" : "scale-110"
              } mix-blend-multiply`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-ocean-blue after:transition-all hover:after:w-full ${
                  isScrolled ? "text-ocean-deep hover:text-ocean-blue" : "text-ocean-deep hover:text-ocean-blue"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hidden md:block">
              <Button 
                variant="default"
                className={`rounded-full px-8 py-6 text-sm font-bold tracking-wider uppercase transition-all duration-500 shadow-xl ${
                  isScrolled 
                    ? "bg-ocean-deep text-ocean-white hover:bg-ocean-navy"
                    : "bg-ocean-deep text-ocean-white hover:bg-ocean-navy hover:-translate-y-1"
                }`}
              >
                Request Quote
              </Button>
            </Link>
            
            <button
              className="lg:hidden p-2 text-ocean-deep hover:text-marine-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[70px] bg-ocean-white/95 backdrop-blur-xl border-b border-marine-gray/50 transition-all duration-500 origin-top overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-ocean-deep p-3 border-b border-marine-gray/30 hover:bg-marine-surface hover:pl-6 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4 rounded-xl py-6 text-base font-bold bg-ocean-deep text-ocean-white">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
