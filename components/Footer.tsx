import Link from "next/link";
import { siteConfig } from "../config/site";

export function Footer() {
  return (
    <footer className="bg-ocean-deep text-white py-8 border-t border-ocean-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-marine-gray text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-marine-gray">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
