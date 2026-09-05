"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Shield,
  UserCheck,
  Car,
  Leaf,
  Heart,
  Shirt,
  Utensils,
  ShoppingBag,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  const navigation: { name: string; href: string; hasDropdown?: boolean }[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services", hasDropdown: true },
    { name: "Home Care Packages", href: "/home-care-packages" },
    { name: "Service Areas", href: "/areas" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    {
      name: "Home Safety & Maintenance",
      href: "/services#home-safety",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Personal Care Support",
      href: "/services#personal-care",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Assisted Transport",
      href: "/services#transport",
      icon: Car,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Garden & Outdoor Care",
      href: "/services#garden",
      icon: Leaf,
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Home Cleaning",
      href: "/services#cleaning",
      icon: Sparkles,
      color: "from-red-500 to-rose-500",
    },
    {
      name: "Social Companionship",
      href: "/services#companionship",
      icon: Heart,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Linen & Laundry Care",
      href: "/services#laundry",
      icon: Shirt,
      color: "from-teal-500 to-emerald-500",
    },
    {
      name: "Meal Preparation",
      href: "/services#meals",
      icon: Utensils,
      color: "from-orange-400 to-red-400",
    },
    {
      name: "Shopping & Errands",
      href: "/services#shopping",
      icon: ShoppingBag,
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg py-3"
          : "bg-white/95 backdrop-blur-md shadow-md py-4"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="relative">
              <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-xl overflow-hidden transform transition-transform group-hover:scale-110 shadow-lg bg-white p-1">
                <Image
                  src={Logo}
                  alt="Smart Home Care Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
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
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`relative px-2.5 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-colors group flex items-center gap-1 whitespace-nowrap ${
                    pathname === item.href
                      ? "text-[#0a9fe1]"
                      : "text-gray-700 hover:text-[#0a9fe1]"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform shrink-0 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] transition-all ${
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
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
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform shrink-0`}
                            >
                              <Icon size={20} className="text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0a9fe1] transition-colors whitespace-nowrap">
                              {service.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="text-sm text-[#0a9fe1] hover:text-[#f370ae] font-semibold flex items-center gap-2 group"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services
                        <span className="transform group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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
              <div className="text-sm">
                <div className="text-[11px] text-gray-500 leading-tight">Call Us</div>
                <div className="font-semibold leading-tight text-xs xl:text-sm">0403 103 555</div>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center bg-[#0a9fe1] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-xs xl:text-sm hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden group whitespace-nowrap shrink-0"
            >
              <span className="relative z-10 whitespace-nowrap">Book Free Consultation</span>
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
              <div className="pt-4 space-y-3">
                <a
                  href="tel:0403103555"
                  className="flex items-center justify-center space-x-2 text-gray-700 border-2 border-[#0a9fe1] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0a9fe1] hover:text-white transition-all whitespace-nowrap"
                >
                  <Phone size={18} />
                  <span>Call 0403 103 555</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
