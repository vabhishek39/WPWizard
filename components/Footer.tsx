import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-red-500 to-red-800 rounded-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                WP<span className="text-red-500">BUILDIFY</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Premium real estate agency specializing in luxury properties, providing exceptional service and exclusive listings worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/properties" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Properties</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Property Sales</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Property Management</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Real Estate Investments</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-sm">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">123 Luxury Avenue, Suite 500<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-zinc-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-zinc-400 text-sm">info@wpbuildify.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} wpbuildify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
