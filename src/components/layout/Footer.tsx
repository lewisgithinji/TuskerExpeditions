import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Award, Shield, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-savanna-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">Tusker Expeditions</div>
                <div className="text-sm text-gray-400">East African Safaris</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover the soul of East Africa with authentic safari experiences, 
              cultural immersion, and sustainable tourism that benefits local communities.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-savanna-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-savanna-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-savanna-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-savanna-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/packages/safari-tours" className="block text-gray-400 hover:text-white transition-colors">
                Safari Packages
              </Link>
              <Link href="/destinations" className="block text-gray-400 hover:text-white transition-colors">
                Destinations
              </Link>
              <Link href="/accommodations" className="block text-gray-400 hover:text-white transition-colors">
                Accommodations
              </Link>
              <Link href="/vehicles" className="block text-gray-400 hover:text-white transition-colors">
                Vehicle Fleet
              </Link>
              <Link href="/packages/custom-packages/ai-planner" className="block text-gray-400 hover:text-white transition-colors">
                AI Trip Planner
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Popular Destinations</h3>
            <div className="space-y-3">
              <Link href="/destinations/kenya/masai-mara" className="block text-gray-400 hover:text-white transition-colors">
                Masai Mara, Kenya
              </Link>
              <Link href="/destinations/tanzania/serengeti" className="block text-gray-400 hover:text-white transition-colors">
                Serengeti, Tanzania
              </Link>
              <Link href="/destinations/kenya/amboseli" className="block text-gray-400 hover:text-white transition-colors">
                Amboseli, Kenya
              </Link>
              <Link href="/destinations/tanzania/ngorongoro" className="block text-gray-400 hover:text-white transition-colors">
                Ngorongoro, Tanzania
              </Link>
              <Link href="/destinations/uganda/bwindi" className="block text-gray-400 hover:text-white transition-colors">
                Bwindi, Uganda
              </Link>
              <Link href="/destinations/kenya/samburu" className="block text-gray-400 hover:text-white transition-colors">
                Samburu, Kenya
              </Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact & Support</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-savanna-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                  <p className="text-gray-400 text-sm">Westlands Business District</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-savanna-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+254 700 000 000</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Hotline</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-savanna-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@tuskerexpeditions.com</p>
                  <p className="text-gray-400 text-sm">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-500 focus:outline-none focus:border-savanna-gold"
                />
                <button className="px-4 py-2 bg-savanna-gold text-white rounded-r-md hover:bg-savanna-gold/90 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2">Get safari tips, exclusive offers, and travel inspiration</p>
            </div>
          </div>
        </div>

        {/* Certifications and Trust Badges */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-savanna-gold" />
              <div>
                <p className="text-white font-medium">Licensed Tour Operator</p>
                <p className="text-gray-400 text-sm">Kenya Tourism Board Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-savanna-gold" />
              <div>
                <p className="text-white font-medium">Safety First</p>
                <p className="text-gray-400 text-sm">Comprehensive Insurance Coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="h-6 w-6 text-savanna-gold" />
              <div>
                <p className="text-white font-medium">Eco-Friendly</p>
                <p className="text-gray-400 text-sm">Sustainable Tourism Practices</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Tusker Expeditions. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}