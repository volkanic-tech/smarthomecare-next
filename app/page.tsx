'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Sparkles, Clock, Shield, Award, Users, Calendar, Phone, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Professional & Modern */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6] pt-24 pb-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0a9fe1]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#f370ae]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#0a9fe1] rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#f370ae] rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#f370ae] animate-fade-in">
                Your Trusted Cleaning
                <span className="text-[#0a9fe1]"> Partner In Melbourne</span>
                <span className="block mt-2 text-[#0a9fe1]">–</span>
                <span className="block text-3xl md:text-4xl mt-4 text-[#f370ae]">
                  Quality, Care & Consistency.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#0a9fe1] leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
                Smart Home Care Services delivers professional cleaning solutions across Melbourne—residential, 
                commercial, and specialized services. From single home cleaning to large-scale projects, we handle 
                it all. Book a cleaner today and experience why we're among the top-rated cleaning companies in Melbourne.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Link 
                  href="/booking"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a9fe1] text-white rounded-xl font-semibold text-lg hover:bg-[#0a9fe1]/90 transition-all hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  Get Instant Booking
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link 
                  href="/booking"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f370ae] text-white rounded-xl font-semibold text-lg hover:bg-[#f370ae]/90 transition-all hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  Get a Quote
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>

            {/* Right Content - Professional Team Display */}
            <div className="relative animate-fade-in animation-delay-300">
              {/* Certified Badge */}
              <div className="absolute top-8 left-8 z-20 bg-gradient-to-br from-[#0a9fe1] to-[#0a9fe1]/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-float border border-white/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Award className="text-[#0a9fe1]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Certified Cleaning</p>
                  <p className="text-sm opacity-90">Experts</p>
                </div>
              </div>

              {/* Professional Team Image */}
              <div className="relative bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-3xl p-1 shadow-2xl">
                <div className="relative rounded-3xl overflow-hidden h-[500px]">
                  <Image
                    src="/Home/imge01.png"
                    alt="Professional Cleaning Team - Smart Home Care Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Google Reviews Badge */}
              <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl animate-float animation-delay-1000 border border-[#0a9fe1]/10">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#0a9fe1] font-semibold">Reviews</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#FBBC05" className="text-[#FBBC05]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, text: 'Fully Insured', color: 'text-[#0a9fe1]' },
              { icon: Award, text: 'Police Checked', color: 'text-[#f370ae]' },
              { icon: Sparkles, text: 'Eco-Friendly', color: 'text-[#0a9fe1]' },
              { icon: CheckCircle, text: '100% Guarantee', color: 'text-[#f370ae]' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="relative flex flex-col items-center gap-3 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up border border-white/50 group overflow-hidden"
                  style={{ animationDelay: `${i * 100 + 600}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a9fe1]/5 to-[#f370ae]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon className={`${item.color} relative z-10 group-hover:scale-110 transition-transform`} size={32} />
                  <span className="text-sm font-semibold text-[#0a9fe1] relative z-10">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#0a9fe1] to-transparent"></div>

      {/* Stats Section */}
      <section className="py-20 bg-[#0a9fe1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '5,000+', label: 'Happy Clients', icon: Users },
              { number: '50,000+', label: 'Cleans Done', icon: Sparkles },
              { number: '4.9/5', label: 'Rating', icon: Star },
              { number: '100%', label: 'Satisfaction', icon: TrendingUp }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center text-white animate-scale-in" style={{ animationDelay: `${i * 150}ms` }}>
                  <Icon className="mx-auto mb-3 opacity-80" size={32} />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full">
                <span className="text-sm font-semibold text-[#0a9fe1]">WHY CHOOSE US</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1] leading-tight">
                Why Smart Home Care Is The Right Choice For Quality
              </h2>
              
              <p className="text-lg text-[#f370ae]">
                Discover a range of services designed to bring comfort
              </p>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in animation-delay-300">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0a9fe1]/20 to-[#0a9fe1]/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-[#0a9fe1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-3">
                  Trained & Vetted Cleaners
                </h3>
                <p className="text-[#f370ae]">
                  Only skilled, background-checked professionals.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0a9fe1]/20 to-[#0a9fe1]/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-[#0a9fe1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-[#f370ae]">
                  We work around your time, not the other way around.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0a9fe1]/20 to-[#0a9fe1]/10 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="text-[#0a9fe1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-3">
                  Eco-Conscious Approach
                </h3>
                <p className="text-[#f370ae]">
                  Safe for kids, pets, and the environment. Safe for kids, pets.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0a9fe1]/20 to-[#0a9fe1]/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-[#0a9fe1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-3">
                  Satisfaction Guarantee
                </h3>
                <p className="text-[#f370ae]">
                  Driven by a passion for excellence that shapes our work every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Interactive Cards */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#0a9fe1]">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1] mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-lg text-[#f370ae] max-w-3xl mx-auto">
              Discover a range of services designed to bring comfort and cleanliness into every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Standard Home Cleaning', 
                desc: 'Keep your space fresh with regular dusting, mopping, and surface care.',
                image: '/Services/services01.jpg',
                borderColor: 'border-[#0a9fe1]'
              },
              { 
                title: 'Deep Cleaning', 
                desc: 'Intensive cleaning for kitchens, bathrooms, and overlooked areas.',
                image: '/Services/services02.jpg',
                borderColor: 'border-[#f370ae]'
              },
              { 
                title: 'Move-In/Move-Out Cleaning', 
                desc: 'Ensure your new beginning or final handover is spotless.',
                image: '/Services/services03.jpg',
                borderColor: 'border-[#0a9fe1]'
              },
              { 
                title: 'Window Cleaning', 
                desc: 'Crystal-clear views, inside and out, for residential and commercial.',
                image: '/Services/services01.jpg',
                borderColor: 'border-[#f370ae]'
              },
              { 
                title: 'Carpet Cleaning', 
                desc: 'Deep clean and revitalize your carpets with professional techniques.',
                image: '/Services/services02.jpg',
                borderColor: 'border-[#0a9fe1]'
              },
              { 
                title: 'Spring Cleaning', 
                desc: 'Complete deep-clean transformation for a fresh seasonal start.',
                image: '/Services/services03.jpg',
                borderColor: 'border-[#f370ae]'
              }
            ].map((service, i) => (
              <div 
                key={i}
                className={`group bg-[#f6f6f6] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up border-b-4 ${service.borderColor}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-72 bg-gradient-to-br from-[#0a9fe1]/10 to-[#f370ae]/10 overflow-hidden">
                  {service.image ? (
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={80} className="text-[#0a9fe1]/30" />
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">{service.title}</h3>
                  <p className="text-[#f370ae] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a9fe1] via-[#f370ae] to-[#0a9fe1]"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-3 h-3 bg-[#0a9fe1]/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-10 w-3 h-3 bg-[#f370ae]/20 rounded-full"></div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">Simple. Fast. Easy.</h2>
            <p className="text-xl text-[#f370ae]">Book your service in 60 seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Calendar, title: 'Choose Service', desc: 'Select from our range of premium cleaning services' },
              { step: '02', icon: Clock, title: 'Pick Date & Time', desc: 'Flexible scheduling that fits your lifestyle' },
              { step: '03', icon: Zap, title: 'Relax & Enjoy', desc: 'Our professionals handle everything with care' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative text-center">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae]"></div>
                  )}
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-full mb-6 shadow-xl">
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <Icon className="text-[#0a9fe1]" size={40} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-[#f370ae] to-[#0a9fe1] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">{item.title}</h3>
                  <p className="text-[#f370ae]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Carousel */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">Loved by Thousands</h2>
            <p className="text-xl text-[#f370ae]">Real stories from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Homeowner',
                location: 'Brighton, VIC',
                text: 'Absolutely outstanding! The attention to detail is incredible. My home has never looked this good.',
                rating: 5
              },
              {
                name: 'James Chen',
                role: 'Property Manager',
                location: 'South Yarra, VIC',
                text: 'Professional, reliable, and thorough. They got us our full bond back without any issues!',
                rating: 5
              },
              {
                name: 'Emma Thompson',
                role: 'Business Owner',
                location: 'Carlton, VIC',
                text: 'Using them for 6 months now. Consistently excellent service. Highly recommend!',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all relative border border-[#f6f6f6] hover:border-[#0a9fe1]/20 hover:-translate-y-1 group">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">"</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f370ae" className="text-[#f370ae]" />
                  ))}
                </div>
                <p className="text-[#0a9fe1] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#0a9fe1]">{testimonial.name}</p>
                  <p className="text-sm text-[#f370ae]">{testimonial.role}</p>
                  <p className="text-sm text-[#0a9fe1]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] via-[#f370ae] to-[#0a9fe1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Sparkles className="mx-auto mb-6 animate-pulse" size={48} />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready for a Sparkling Clean?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 5,000+ satisfied customers. Get your instant quote now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking"
              className="group px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a 
              href="tel:1300762782"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              1300 SMART
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
