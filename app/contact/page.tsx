import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/config/company";
import { Building, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 mt-12 mb-16 text-center max-w-4xl">
        <span className="px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
          Business Enquiries
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-ocean-900 mb-6 mt-4">Partner with {companyInfo.brandName}</h1>
        <p className="text-xl text-ocean-700/80 mb-8">
          We welcome wholesale enquiries from convenience retailers, regional wholesalers, supermarkets, and food-service businesses.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 bg-ocean-900 text-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/bg-pattern.png')", backgroundSize: 'cover' }}></div>
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8">{companyInfo.legalName}</h3>
              
              <ul className="space-y-6 flex-1">
                <li className="flex gap-4">
                  <Building className="shrink-0 text-ocean-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-ocean-100 mb-1">UK Operation</h4>
                    <p className="text-ocean-200/90">{companyInfo.operation} based processing and distribution.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="shrink-0 text-ocean-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-ocean-100 mb-1">Address</h4>
                    <p className="text-ocean-200/90">{companyInfo.contact.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="shrink-0 text-ocean-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-ocean-100 mb-1">Phone</h4>
                    <p className="text-ocean-200/90">{companyInfo.contact.phone}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="shrink-0 text-ocean-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-ocean-100 mb-1">Email</h4>
                    <p className="text-ocean-200/90">{companyInfo.contact.email}</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-ocean-700/50">
                <div className="flex gap-4">
                  <Clock className="shrink-0 text-ocean-400" size={20} />
                  <span className="text-ocean-200/90">Mon - Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2 bg-ocean-50 p-8 md:p-12 rounded-[2rem] border border-ocean-100 shadow-sm">
            <h3 className="text-2xl font-bold text-ocean-900 mb-6">Send an Enquiry</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-ocean-900">Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-ocean-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-ocean-900">Company Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-ocean-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-ocean-900">Email Address</label>
                <input type="email" className="w-full h-12 px-4 rounded-xl border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-ocean-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-ocean-900">Phone Number</label>
                <input type="tel" className="w-full h-12 px-4 rounded-xl border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-ocean-500" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-ocean-900">Enquiry Type</label>
                <select defaultValue="" className="w-full h-12 px-4 rounded-xl border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white" required>
                  <option value="" disabled>Select an option</option>
                  <option value="wholesale">Wholesale Supply</option>
                  <option value="retail">Retail Supply</option>
                  <option value="map">MAP Ready-to-Cook Seafood</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-ocean-900">Message & Requirements</label>
                <textarea rows={5} className="w-full p-4 rounded-xl border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-ocean-500" placeholder="Please specify your product interests and approximate volumes..." required></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <Button size="lg" className="w-full md:w-auto px-12 rounded-xl">Submit Enquiry</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
      
    </main>
  );
}
