"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Clock,
  Shield,
  Award,
  Users,
  Calendar,
  Phone,
  TrendingUp,
  Zap,
  Heart,
  Car,
  Leaf,
  Shirt,
  Utensils,
  ShoppingBag,
  MapPin,
  HandHeart,
  Users2,
  UserCheck,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6] pt-24 pb-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0a9fe1]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#f370ae]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mt-12">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#f370ae] animate-fade-in">
                Exceptional, Compassionate
                <span className="text-[#0a9fe1] block"> Home Care for</span>
                <span className="text-[#0a9fe1]">Tasmanian Seniors</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
                Experience dignity, comfort, and independence in the place you
                know and love. We provide tailored, reliable in-home support
                across Tasmania to help you live life on your own terms.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a9fe1] text-white rounded-xl font-semibold text-lg hover:bg-[#0a9fe1]/90 transition-all hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  Explore Our Services
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f370ae] text-white rounded-xl font-semibold text-lg hover:bg-[#f370ae]/90 transition-all hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  Speak with Our Care Team
                  <Phone size={20} />
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-3xl p-1 shadow-2xl">
                <div className="relative rounded-3xl overflow-hidden h-[500px]">
                  <Image
                    src="/Home/Image101.png"
                    alt="Compassionate Care Team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                text: "100% Tasmanian Local",
                color: "text-[#0a9fe1]",
              },
              {
                icon: Award,
                text: "Proud Trilogy Care Partner",
                color: "text-[#f370ae]",
              },
              {
                icon: CheckCircle,
                text: "Tailored Care Plans",
                color: "text-[#0a9fe1]",
              },
              {
                icon: Users2,
                text: "Vetted Caregivers",
                color: "text-[#f370ae]",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center gap-3 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up border border-white/50 group overflow-hidden"
                  style={{ animationDelay: `${i * 100 + 600}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a9fe1]/5 to-[#f370ae]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon
                    className={`${item.color} relative z-10 group-hover:scale-110 transition-transform`}
                    size={32}
                  />
                  <span className="text-sm font-semibold text-[#0a9fe1] relative z-10 text-center">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Overview */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#0a9fe1]">
              EMPOWERING INDEPENDENCE, ENRICHING LIVES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a9fe1] mb-8 leading-tight">
            At Smart Home Care Services, we believe that growing older should
            never mean giving up independence.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Our mission is to provide compassionate, reliable, and personalised
            home care that empowers older Australians to continue living safely
            and confidently in the place they know and love. We are proud
            locals, deeply committed to the Tasmanian community.
          </p>
          <Link
            href="/about"
            className="text-[#f370ae] font-semibold text-lg hover:underline inline-flex items-center gap-2"
          >
            Read Our Full Story <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Trilogy Care Partnership Banner */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            {/* Extremely subtle, clean background glow inside the card */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a9fe1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            {/* Left Content Column */}
            <div className="flex-1 text-left relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#f370ae]/10 text-[#f370ae] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-[#f370ae]/50">
                <Award size={16} /> Strategic Partnership
              </div>

              <h2 className="text-3xl md:text-5xl font-bold  mb-6 leading-tight text-[#0a9fe1]">
                Unlock the Full Value of Your <br className="hidden xl:block" />
                <span className="text-[#f370ae]">Home Care Package</span>
              </h2>

              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl">
                Are high management fees eating into your care hours? Through
                our strategic partnership with <strong>Trilogy Care </strong>
                Australia's leading HCP management provider, we help you stretch
                your funding further.
              </p>

              {/* Clean Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  "Low Management Fees",
                  "100% Transparent Pricing",
                  "More Dedicated Care Hours",
                  "Complete Financial Control",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <div className="bg-[#0a9fe1]/10 rounded-full p-1.5 shrink-0">
                      <CheckCircle size={18} className="text-[#0a9fe1]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/home-care-packages"
                className="inline-flex items-center gap-3 bg-[#0a9fe1] hover:bg-[#0883bb] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#0a9fe1]/20 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Learn About Our Partnership
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right Column: Official Trilogy Care Logo Card */}
            <div className="w-full lg:w-[400px] shrink-0 relative z-10">
              <div className="bg-[#f8fbff] rounded-3xl p-8 md:p-10 text-center border border-blue-50 shadow-inner">
                <span className="inline-block px-4 py-1.5 bg-white text-gray-400 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm mb-8">
                  Official Partner
                </span>

                {/* Trilogy Care Logo Container */}
                <div className="w-full flex items-center justify-center min-h-[100px] mb-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <img
                    src="https://trilogycare.com.au/_next/static/media/202509_Tc_Logo_01.823a9381.svg"
                    alt="Trilogy Care Logo"
                    className="w-full max-w-[220px] h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  {/* Inline SVG Fallback */}
                  <div className="hidden items-center justify-center gap-3">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 15 C58 25 58 35 50 45 C42 35 42 25 50 15 Z"
                        fill="#F05252"
                      />
                      <path
                        d="M15 50 C25 42 35 42 45 50 C35 58 25 58 15 50 Z"
                        fill="#F5B041"
                      />
                      <path
                        d="M50 85 C42 75 42 65 50 55 C58 65 58 75 50 85 Z"
                        fill="#36B3A8"
                      />
                    </svg>
                    <span className="text-[#2B4C7E] font-extrabold text-xl tracking-tight">
                      Trilogy Care
                    </span>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="inline-flex items-center justify-center gap-2 text-sm font-bold text-gray-600 bg-white py-3 px-6 rounded-full border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                  <ShieldCheck size={20} className="text-[#0a9fe1]" />
                  <span>Approved HCP Provider</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1] mb-4">
              Our Premium Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored support designed to help you maintain your lifestyle
              safely at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Home Safety & Minor Repairs",
                icon: Shield,
                image:
                  "https://plus.unsplash.com/premium_photo-1726761637367-afdcd05c2da6?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Keep your home safe, functional, and hazard-free. We handle the minor repairs and safety checks so you can relax in total comfort.",
              },
              {
                title: "Dignified Personal Care",
                icon: UserCheck,
                image:
                  "https://plus.unsplash.com/premium_photo-1753382834716-9df70c51d637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
                desc: "Start your day with confidence. We offer respectful, discrete assistance with bathing, dressing, and grooming to maintain your dignity.",
              },
              {
                title: "Independent Mobility & Transport",
                icon: Car,
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
                desc: "Stay connected to your community. We provide safe, reliable transport to medical appointments, social events, and family visits.",
              },
              {
                title: "Garden Sanctuary & Outdoor Care",
                icon: Leaf,
                image:
                  "https://images.unsplash.com/photo-1779636489740-6077a4198be6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Enjoy your outdoor spaces without the heavy lifting. We help maintain your garden’s beauty and safety year-round.",
              },
              {
                title: "Gentle Home Cleaning",
                icon: Sparkles,
                image:
                  "https://plus.unsplash.com/premium_photo-1676934738359-5776825f93be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "A clean home is a comfortable home. We take care of sweeping, mopping, dusting, and general tidying with a gentle touch.",
              },
              {
                title: "Meaningful Social Connection",
                icon: Heart,
                image:
                  "https://plus.unsplash.com/premium_photo-1663100660770-ee436c2e033a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
                desc: "Combat loneliness with a friendly face. We offer engaging conversation, shared hobbies, and genuine companionship.",
              },
              {
                title: "Fresh Linen & Laundry Care",
                icon: Shirt,
                image:
                  "https://plus.unsplash.com/premium_photo-1761262862895-8deb4076a96f?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Enjoy the comfort of fresh clothes and crisp sheets. We manage your washing, drying, ironing, and wardrobe organisation.",
              },
              {
                title: "Nourishing Meal Preparation",
                icon: Utensils,
                image:
                  "https://images.unsplash.com/photo-1541557435984-1c79685a082b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Savour delicious, healthy meals tailored to your dietary needs. We assist with recipe planning, cooking, and kitchen cleanup.",
              },
              {
                title: "Guided Shopping & Errands",
                icon: ShoppingBag,
                image:
                  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
                desc: "Never worry about running out of essentials. We can accompany you to the shops or handle grocery runs on your behalf.",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border-t-4 border-[#0a9fe1] group cursor-pointer hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm">
                      <Icon className="text-[#0a9fe1]" size={24} />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0a9fe1] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-10 px-4 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#f6f6f6] rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden border border-gray-100">
            {/* Subtle corner gradients matching hero section */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f370ae]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0a9fe1]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <Heart className="mx-auto text-[#f370ae] mb-6" size={48} />

            <h2 className="text-3xl md:text-5xl font-bold text-[#0a9fe1] mb-6">
              Peace of Mind for{" "}
              <span className="text-[#f370ae]">You and Your Family</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto relative z-10">
              Every visit is delivered with compassion, professionalism, and
              respect. We don't just provide care, we build meaningful
              relationships that promote independence, improve wellbeing, and
              bring peace of mind to families knowing their loved ones are in
              safe, caring hands.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Coverage Section - Split Layout Variation */}
      <section className="py-5 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Column: Typography & Intro */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#f370ae] rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-blue-100/50">
                <MapPin size={16} /> 100% Tasmanian
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1] mb-6 leading-tight">
                Proudly Serving <br className="hidden md:block" />
                <span className="text-[#f370ae]">Our Local Communities</span>
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                We provide premium, personalized care across Tasmania. Wherever
                you are, our dedicated local team is right around the corner,
                ready to support you.
              </p>

              {/* Added a Trust Indicator */}
              <div className="flex items-center gap-4 bg-[#f8fbff] border border-blue-50 p-4 rounded-2xl w-fit shadow-sm">
                <div className="bg-white text-[#0a9fe1] p-2.5 rounded-xl shadow-[0_4px_10px_rgb(0,0,0,0.03)] border border-pink-50">
                  <Heart size={24} className="fill-[#f370ae]/10" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0a9fe1]">
                    Dedicated Support
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    Local caregivers you can trust
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Location Grid */}
            <div className="flex-1 w-full relative">
              {/* Subtle background blob for depth behind the cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0a9fe1]/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                {[
                  { name: "Devonport", region: "North West" },
                  { name: "Burnie", region: "North West" },
                  { name: "Launceston", region: "Northern Region" },
                  { name: "Hobart", region: "Greater Hobart" },
                ].map((location, idx) => (
                  <div
                    key={idx}
                    className={`group bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(10,159,225,0.08)] hover:border-[#0a9fe1]/20 transition-all duration-300 flex flex-col hover:-translate-y-1 ${
                      idx === 1 || idx === 3 ? "sm:translate-y-8" : "" // Staggers the right column on larger screens
                    }`}
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0a9fe1] group-hover:scale-110 transition-all duration-300 border border-blue-100/50">
                      <MapPin
                        size={24}
                        className="text-[#0a9fe1] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#0a9fe1] transition-colors duration-300">
                        {location.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                        {location.region}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] to-[#0883bb] text-white relative overflow-hidden">
        {/* Soft Background Glows for Depth without being chaotic */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f370ae]/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to discover a better standard of care?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can support your unique needs and help you or
            your loved ones maintain independence at home.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
            >
              Book Your Free Consultation Today
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
