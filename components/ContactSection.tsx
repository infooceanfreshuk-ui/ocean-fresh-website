import { siteConfig } from "../config/site";
import { Button } from "./ui/Button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-6 border-t border-ocean-100/50 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1 - Visit Us */}
          <div>
            <h3 className="text-xl font-bold text-ocean-900 mb-6">Visit Us</h3>
            <h4 className="font-semibold text-ocean-700 mb-4">{siteConfig.name}</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-ocean-700/80">
                <MapPin className="shrink-0 text-ocean-400" size={20} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-3 text-ocean-700/80">
                <Clock className="shrink-0 text-ocean-400" size={20} />
                <span>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Stay Updated */}
          <div>
            <h3 className="text-xl font-bold text-ocean-900 mb-6">Stay Updated</h3>
            <p className="text-ocean-700/80 mb-6">Subscribe to our newsletter for latest updates & offers.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-12 px-4 rounded-xl border border-ocean-100 bg-ocean-50/50 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                required
              />
              <Button type="submit" className="rounded-xl w-full">Subscribe</Button>
            </form>
          </div>

          {/* Column 3 - Let's Connect */}
          <div>
            <h3 className="text-xl font-bold text-ocean-900 mb-6">Let&apos;s Connect</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-ocean-700/80 hover:text-ocean-900 transition-colors">
                <Phone className="shrink-0 text-ocean-400" size={20} />
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </li>
              <li className="flex gap-3 text-ocean-700/80 hover:text-ocean-900 transition-colors">
                <Mail className="shrink-0 text-ocean-400" size={20} />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              {/* Social icons placeholders */}
              <a href={siteConfig.contact.linkedin} className="w-10 h-10 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 hover:bg-ocean-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">in</span>
              </a>
              <a href={siteConfig.contact.instagram} className="w-10 h-10 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 hover:bg-ocean-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">ig</span>
              </a>
              <a href={siteConfig.contact.facebook} className="w-10 h-10 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 hover:bg-ocean-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">fb</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
