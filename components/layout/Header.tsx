'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, Sparkles, Home, Building, Wind, Key, Droplets } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPromo, setShowPromo] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Areas', href: '/areas' },
  ];

  const services = [
    { name: 'Residential Cleaning', href: '/services#residential', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { name: 'Commercial Cleaning', href: '/services#commercial', icon: Building, color: 'from-purple-500 to-pink-500' },
    { name: 'Carpet Cleaning', href: '/services#carpet', icon: Droplets, color: 'from-green-500 to-emerald-500' },
    { name: 'Window Cleaning', href: '/services#window', icon: Wind, color: 'from-orange-500 to-yellow-500' },
    { name: 'End of Lease', href: '/services#end-of-lease', icon: Key, color: 'from-red-500 to-rose-500' },
    { name: 'Spring Cleaning', href: '/services#spring', icon: Sparkles, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <>
      {/* Promotional Banner */}
      {showPromo && (
        <div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-2 px-4 animate-slide-up">
          <div className="container mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-medium">New Year Special: Get 20% OFF on your first booking!</span>
            </div>
            <button 
              onClick={() => setShowPromo(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close promotion"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          showPromo ? 'top-[38px]' : 'top-0'
        } ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-white/95 backdrop-blur-md shadow-md py-4'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden transform transition-transform group-hover:scale-110 shadow-lg bg-white p-1">
                  <Image 
                    src={Logo}
                    alt="Smart Home Care Logo" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                  Smart Home Care
                </h1>
                <p className="text-xs text-gray-500 font-medium">Premium Cleaning Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group flex items-center gap-1 ${
                      pathname === item.href 
                        ? 'text-emerald-600' 
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>

                  {/* Services Mega Menu */}
                  {item.hasDropdown && servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl p-6 animate-fade-in border border-gray-100">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f6f6f6] transition-all group"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                                <Icon size={20} className="text-white" />
                              </div>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
                                {service.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link 
                          href="/services" 
                          className="text-sm text-emerald-600 hover:text-amber-600 font-semibold flex items-center gap-2 group"
                          onClick={() => setServicesOpen(false)}
                        >
                          View All Services
                          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Phone & CTA */}
            <div className="flex items-center space-x-4">
              {/* Phone Number - Hidden on small screens */}
              <a 
                href="tel:1300762782" 
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone size={16} className="group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Call Us</div>
                  <div className="font-semibold leading-tight">1300 SMART</div>
                </div>
              </a>

              {/* CTA Button */}
              <Link
                href="/booking"
                className="hidden lg:inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Get Free Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-slide-up border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-between ${
                      pathname === item.href 
                        ? 'text-emerald-600 bg-emerald-50 font-semibold' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                    )}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <a 
                    href="tel:1300762782"
                    className="flex items-center justify-center space-x-2 text-gray-700 border-2 border-emerald-600 px-6 py-3 rounded-full font-semibold text-sm hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    <Phone size={18} />
                    <span>Call 1300 SMART</span>
                  </a>
                  <Link
                    href="/booking"
                    className="flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
