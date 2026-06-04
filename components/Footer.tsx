import Link from "next/link";
import { Phone, Mail, MapPin, HardHat, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-wider text-white uppercase font-serif">
                Pankaj Singh <span className="text-amber-500">Builder</span>
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                Construction Company
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building dreams into reality with premium quality construction, renovation, and architectural services. We deliver excellence in every project we undertake.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center"
                  >
                    <span className="h-1 w-1 bg-amber-500 rounded-full mr-2"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">Our Services</h3>
            <ul className="space-y-4">
              {['Residential Construction', 'Commercial Construction', 'Building Renovation', 'Interior Finishing', 'Civil Construction'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center">
                    <span className="h-1 w-1 bg-amber-500 rounded-full mr-2"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  60C, Sunrise Enclave,<br />
                  Sector 127,<br />
                  Sahibzada Ajit Singh Nagar,<br />
                  Punjab 140307, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  +91 99159 48508<br/>
                  <span className="text-xs text-gray-500">(Phone & WhatsApp)</span>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@pankajsinghbuilder.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pankaj Singh Builder. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
