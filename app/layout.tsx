import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ocean Fresh | Premium Seafood Exporter",
  description: "Premium Seafood, Exported Fresh from the Ocean. We source the finest seafood and deliver quality you can trust, across the globe.",
};

import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
