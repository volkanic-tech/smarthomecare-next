import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Send, Award, Shield, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-amber-100 px-4 py-2 rounded-full mb-4">
                <Award className="text-emerald-600" size={18} />
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  Join 5,000+ Happy Customers
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Get Exclusive Cleaning Tips & Offers
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for expert cleaning advice, seasonal tips, and special discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3.5 rounded-full border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                  <span>Subscribe</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            {/* Company Info - Spans 4 columns on large screens */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg bg-white p-1 group-hover:scale-110 transition-transform">
                  <Image 
                    src={Logo}
                    alt="Smart Home Care Logo" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                    Smart Home Care
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">Premium Cleaning Services</p>
                </div>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Melbourne's trusted premium cleaning service provider since 2020. We deliver exceptional cleaning services with a personal touch, ensuring every space shines.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                  <Shield className="text-emerald-600" size={16} />
                  <span className="text-xs font-semibold text-gray-700">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                  <Clock className="text-amber-600" size={16} />
                  <span className="text-xs font-semibold text-gray-700">24/7 Support</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-700 hover:border-transparent transition-all hover:scale-110"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold text-gray-900 mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Services', href: '/services' },
                  { name: 'Service Areas', href: '/areas' },
                  { name: 'Booking', href: '/booking' },
                  { name: 'Contact Us', href: '/contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-emerald-600 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold text-gray-900 mb-4 relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Residential Cleaning', href: '/services#residential' },
                  { name: 'Commercial Cleaning', href: '/services#commercial' },
                  { name: 'Carpet Cleaning', href: '/services#carpet' },
                  { name: 'Window Cleaning', href: '/services#window' },
                  { name: 'End of Lease', href: '/services#end-of-lease' },
                  { name: 'Spring Cleaning', href: '/services#spring' }
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-emerald-600 transition-colors"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold text-gray-900 mb-4 relative inline-block">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600"></span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:1300762782" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all flex-shrink-0">
                      <Phone size={18} className="text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Call Us Now</p>
                      <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">1300 SMART CLEAN</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@smarthomecare.com.au" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center group-hover:from-amber-600 group-hover:to-amber-700 transition-all flex-shrink-0">
                      <Mail size={18} className="text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                      <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors break-all">info@smarthomecare.com.au</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Location</p>
                      <p className="font-semibold text-gray-900">Melbourne, Victoria</p>
                      <p className="text-xs text-gray-500 mt-1">Serving All Metro Areas</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Smart Home Care Services. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
