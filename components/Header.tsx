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
    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between px-6 h-16 md:h-20 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg border border-ocean-50"
              : "bg-white shadow-sm border border-ocean-50"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center h-full group relative overflow-hidden w-40 md:w-56 rounded-xl">
            <Image
              src="/images/logo.jpeg"
              alt="Ocean Fresh Logo"
              fill
              className="object-contain mix-blend-multiply scale-[2.5] md:scale-[2.8] group-hover:scale-[3] transition-transform origin-center"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-ocean-900 hover:text-ocean-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex rounded-full">Request a Quote</Button>
            
            <button
              className="lg:hidden p-2 text-ocean-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-ocean-900 p-2 hover:bg-ocean-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-2 rounded-full">Request a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
}
