"use client";

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, Sparkles, Shield, UserCheck, Car, Leaf, Heart, Shirt, Utensils, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services', hasDropdown: true },
    { name: 'Home Care Packages', href: '/home-care-packages' },
    { name: 'Service Areas', href: '/areas' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Home Safety & Maintenance', href: '/services#home-safety', icon: Shield, color: 'from-blue-500 to-cyan-500' },
    { name: 'Personal Care Support', href: '/services#personal-care', icon: UserCheck, color: 'from-purple-500 to-pink-500' },
    { name: 'Assisted Transport', href: '/services#transport', icon: Car, color: 'from-green-500 to-emerald-500' },
    { name: 'Garden & Outdoor Care', href: '/services#garden', icon: Leaf, color: 'from-orange-500 to-yellow-500' },
    { name: 'Home Cleaning', href: '/services#cleaning', icon: Sparkles, color: 'from-red-500 to-rose-500' },
    { name: 'Social Companionship', href: '/services#companionship', icon: Heart, color: 'from-indigo-500 to-purple-500' },
    { name: 'Linen & Laundry Care', href: '/services#laundry', icon: Shirt, color: 'from-teal-500 to-emerald-500' },
    { name: 'Meal Preparation', href: '/services#meals', icon: Utensils, color: 'from-orange-400 to-red-400' },
    { name: 'Shopping & Errands', href: '/services#shopping', icon: ShoppingBag, color: 'from-blue-400 to-indigo-500' },
  ];

  return (
    <>
      {/* Promotional Banner */}
      {showPromo && (
        <div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white py-2 px-4 animate-slide-up">
          <div className="container mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-medium">Proudly serving Tasmanian seniors in Devonport, Burnie, Launceston, and Hobart.</span>
            </div>
            <div className="hidden sm:block whitespace-nowrap">
              <h1 className="text-base xl:text-lg font-bold bg-[#0a9fe1] bg-clip-text text-transparent leading-tight">
                Smart Home Care
              </h1>
              <p className="text-[11px] xl:text-xs text-gray-500 font-medium hidden md:block">
                Empowering Independence, Enriching Lives
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-2.5 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-colors group flex items-center whitespace-nowrap ${
                  pathname === item.href
                    ? "text-[#0a9fe1]"
                    : "text-gray-700 hover:text-[#0a9fe1]"
                }`}
              >
                <span className="whitespace-nowrap">{item.name}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] transition-all ${
                    pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="flex items-center space-x-2 xl:space-x-4 shrink-0">
            {/* Phone Number - Visible on xl+ screens */}
            <a
              href="tel:0403103555"
              className="hidden xl:flex items-center space-x-2 text-gray-700 hover:text-[#0a9fe1] transition-colors group whitespace-nowrap"
            >
              <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#f6f6f6] flex items-center justify-center group-hover:bg-[#0a9fe1] transition-colors shrink-0">
                <Phone
                  size={15}
                  className="group-hover:text-white transition-colors"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-[#0a9fe1] bg-clip-text text-transparent">
                  Smart Home Care
                </h1>
                <p className="text-xs text-gray-500 font-medium">Empowering Independence, Enriching Lives</p>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center bg-[#0a9fe1] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-xs xl:text-sm hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden group whitespace-nowrap shrink-0"
            >
              <span className="relative z-10 whitespace-nowrap">
                Book Free Consultation
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#f370ae] to-[#0a9fe1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#f6f6f6] transition-colors"
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
                  className={`font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-between whitespace-nowrap ${
                    pathname === item.href
                      ? "text-[#0a9fe1] bg-[#0a9fe1]/10 font-semibold"
                      : "text-gray-700 hover:text-[#0a9fe1] hover:bg-[#f6f6f6]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                  {pathname === item.href && (
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] shrink-0"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side - Phone & CTA */}
            <div className="flex items-center space-x-4">
              {/* Phone Number - Hidden on small screens */}
              <a 
                href="tel:1300762782" 
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-[#0a9fe1] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#f6f6f6] flex items-center justify-center group-hover:bg-[#0a9fe1] transition-colors">
                  <Phone size={16} className="group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Call Us</div>
                  <div className="font-semibold leading-tight">1300 SMART</div>
                </div>
              </a>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f370ae] to-[#0a9fe1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-[#f6f6f6] transition-colors"
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
                        ? 'text-[#0a9fe1] bg-[#0a9fe1]/10 font-semibold' 
                        : 'text-gray-700 hover:text-[#0a9fe1] hover:bg-[#f6f6f6]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0a9fe1] to-[#f370ae]"></div>
                    )}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <a 
                    href="tel:1300762782"
                    className="flex items-center justify-center space-x-2 text-gray-700 border-2 border-[#0a9fe1] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0a9fe1] hover:text-white transition-all"
                  >
                    <Phone size={18} />
                    <span>Call 1300 SMART</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-6 py-3 rounded-full font-semibold text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
