'use client';

import { Shield, Users, Award, Clock, CheckCircle, Heart, Star, Sparkles, TrendingUp, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                ABOUT US
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              About <span className="text-[#0a9fe1]">Smart Home Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f370ae] leading-relaxed animate-slide-up animation-delay-200">
              Melbourne's trusted premium cleaning service provider since 2020. We're dedicated to delivering exceptional cleaning services with a personal touch.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Home/imge01.png" 
                  alt="Professional Cleaning Team" 
                  width={600} 
                  height={600} 
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 animate-slide-up order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full">
                <span className="text-sm font-semibold text-[#0a9fe1]">WHAT WE DO</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#0a9fe1]">Cleaning You Can Count On</span>
                <br />
                <span className="text-[#f370ae]">Friendly And Always Spotless</span>
              </h2>
              
              <p className="text-lg text-[#f370ae] leading-relaxed">
                Our products and services have earned the trust of hundreds of households, bringing comfort, reliability, and satisfaction to families across the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0a9fe1]">CORE BELIEFS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1]">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Our Foundation */}
            <div className="bg-white rounded-3xl p-8 shadow-lg animate-slide-up">
              <h3 className="text-2xl font-bold text-[#0a9fe1] mb-4">Our Foundation</h3>
              <p className="text-[#f370ae] mb-8 leading-relaxed">
                A mission-driven cleaning company focused on trust, reliability, and care. A mission-driven cleaning company focused on trust, reliability, and care.
              </p>
              
              <div className="space-y-6 pt-6 border-t border-[#f6f6f6]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#f370ae] mb-1">Based In</p>
                    <p className="font-bold text-[#0a9fe1]">Melbourne</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#f370ae] mb-1">Founded</p>
                    <p className="font-bold text-[#0a9fe1]">2020</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-[#f370ae] mb-1">Working Hours</p>
                  <p className="font-bold text-[#0a9fe1]">Monday - Saturday, 08.00 AM - 06.00 PM</p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
                <Image 
                  src="/Home/imge01.png" 
                  alt="Our Cleaning Team" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Our Vision and Mission */}
            <div className="space-y-8 animate-slide-up animation-delay-300">
              {/* Our Vision */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0a9fe1] mb-4">Our Vision</h3>
                <p className="text-[#f370ae] leading-relaxed">
                  To redefine home care through exceptional service and genuine care.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0a9fe1] mb-4">Our Mission</h3>
                <p className="text-[#f370ae] leading-relaxed">
                  To deliver consistent, high-quality cleaning services that improve our clients' daily lives while upholding environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '5,000+', label: 'Happy Customers', icon: Users },
              { number: '50,000+', label: 'Cleans Completed', icon: Sparkles },
              { number: '4.9/5', label: 'Average Rating', icon: Star },
              { number: '5 Years', label: 'Experience', icon: TrendingUp }
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

      {/* Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0a9fe1]">OUR TEAMS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1] mb-2">
              Meet The People
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1]">
              Behind The Sparkle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Cleaning Specialist',
                image: '/team/member1.jpg'
              },
              {
                name: 'Michael Chen',
                role: 'Team Supervisor',
                image: '/team/member2.jpg'
              },
              {
                name: 'Emma Williams',
                role: 'Eco-Cleaning Expert',
                image: '/team/member3.jpg'
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-[#f6f6f6] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 bg-gradient-to-br from-[#0a9fe1]/20 to-[#f370ae]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users size={64} className="text-[#0a9fe1]/40" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#0a9fe1] mb-2">{member.name}</h3>
                  <p className="text-[#f370ae] font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">Our Core Values</h2>
            <p className="text-xl text-[#f370ae]">What drives us every single day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'All our team members are police-checked, fully insured, and thoroughly vetted. Your security is our priority.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in every job we do. Quality is never compromised.'
              },
              {
                icon: Heart,
                title: 'Care & Respect',
                description: 'We treat every property with the care and respect it deserves, as if it were our own.'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction is our success. We go above and beyond to exceed your expectations.'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'Punctual, consistent, and dependable. You can always count on us to be there when we say we will.'
              },
              {
                icon: CheckCircle,
                title: 'Integrity',
                description: 'Honest pricing, transparent communication, and ethical practices in everything we do.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">{value.title}</h3>
                  <p className="text-[#f370ae]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">Why Choose Us?</h2>
            <p className="text-xl text-[#f370ae]">The reasons Melbourne trusts us</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Professional & Trained Staff',
                description: 'Our cleaning professionals undergo rigorous training and continuous education to stay updated with the latest cleaning techniques and safety standards.'
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Products',
                description: 'We use only environmentally friendly, non-toxic cleaning products that are safe for your family, pets, and the planet.'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'We work around your schedule with convenient booking options including same-day and next-day service availability.'
              },
              {
                icon: CheckCircle,
                title: 'Quality Guarantee',
                description: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right—no questions asked.'
              },
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Comprehensive insurance coverage protects your property and gives you complete peace of mind.'
              },
              {
                icon: TrendingUp,
                title: 'Competitive Pricing',
                description: 'Premium quality doesn\'t mean premium prices. We offer transparent, competitive rates with no hidden fees.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#f6f6f6] rounded-2xl p-6 border-l-4 border-[#0a9fe1] hover:shadow-lg transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-xl flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a9fe1] mb-2">{item.title}</h3>
                      <p className="text-[#f370ae]">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0a9fe1]">PRICING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a9fe1] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-[#f370ae]">
              Affordable plans tailored to your cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Clean */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all animate-slide-up">
              <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">Basic Clean</h3>
              <p className="text-[#f370ae] mb-6">
                A basic cleaning service covering essential areas to keep your space comfortable.
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#0a9fe1]">$59</span>
                <span className="text-[#f370ae]">/session</span>
              </div>

              <a 
                href="/booking" 
                className="block w-full bg-gradient-to-r from-[#f370ae] to-[#0a9fe1] text-white text-center py-4 rounded-full font-bold mb-8 hover:scale-105 transition-all shadow-lg"
              >
                Book Your First Cleaning
              </a>

              <div className="space-y-3 pt-6 border-t border-[#f6f6f6]">
                <p className="font-bold text-[#0a9fe1] mb-4">Benefits:</p>
                {[
                  'General surface cleaning',
                  'Dusting of furniture and fixtures',
                  'Floor sweeping and mopping',
                  'Trash collection and disposal'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-[#0a9fe1] flex-shrink-0" size={20} />
                    <span className="text-[#f370ae]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep Clean - Featured */}
            <div className="bg-gradient-to-br from-[#0a9fe1] to-[#0a9fe1]/90 rounded-3xl p-8 shadow-2xl transform md:scale-105 hover:shadow-xl transition-all animate-slide-up animation-delay-200">
              <h3 className="text-2xl font-bold text-white mb-3">Deep Clean</h3>
              <p className="text-white/90 mb-6">
                A thorough cleaning service that goes beyond the surface to ensure every corner is spotless.
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$129</span>
                <span className="text-white/90">/session</span>
              </div>

              <a 
                href="/booking" 
                className="block w-full bg-gradient-to-r from-[#f370ae] to-[#f370ae]/90 text-white text-center py-4 rounded-full font-bold mb-8 hover:scale-105 transition-all shadow-lg"
              >
                Book Your First Cleaning
              </a>

              <div className="space-y-3 pt-6 border-t border-white/20">
                <p className="font-bold text-white mb-4">Benefits:</p>
                {[
                  'Includes everything in Basic Clean',
                  'Bathroom and kitchen scrubbing',
                  'Appliance exterior and interior cleaning',
                  'Baseboard and window sill detailing'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-white flex-shrink-0" size={20} />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Move-In/Out Clean */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all animate-slide-up animation-delay-300">
              <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">Move-In/Out Clean</h3>
              <p className="text-[#f370ae] mb-6">
                A specialized cleaning service designed to prepare your space for a fresh start.
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#0a9fe1]">$179</span>
                <span className="text-[#f370ae]">/session</span>
              </div>

              <a 
                href="/booking" 
                className="block w-full bg-gradient-to-r from-[#f370ae] to-[#0a9fe1] text-white text-center py-4 rounded-full font-bold mb-8 hover:scale-105 transition-all shadow-lg"
              >
                Book Your First Cleaning
              </a>

              <div className="space-y-3 pt-6 border-t border-[#f6f6f6]">
                <p className="font-bold text-[#0a9fe1] mb-4">Benefits:</p>
                {[
                  'Top-to-bottom cleaning',
                  'Inside cabinets and drawers',
                  'Interior windows and blinds',
                  'Light fixture and ceiling fan dusting'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-[#0a9fe1] flex-shrink-0" size={20} />
                    <span className="text-[#f370ae]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">Loved by Thousands</h2>
            <p className="text-xl text-[#f370ae]">Real stories from real customers across Melbourne</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael O\'Brien',
                location: 'Richmond, VIC',
                rating: 5,
                text: 'The carpet cleaning service was exceptional. Removed stains I thought were permanent. Very impressed!',
                service: 'Carpet Cleaning'
              },
              {
                name: 'Lisa Wang',
                location: 'Docklands, VIC',
                rating: 5,
                text: 'Our office has been using Smart Home Care for 2 years. Consistently excellent work and very professional staff.',
                service: 'Commercial'
              },
              {
                name: 'David Anderson',
                location: 'Hawthorn, VIC',
                rating: 5,
                text: 'Spring cleaning service was fantastic! They cleaned areas I didn\'t even think about. House looks brand new!',
                service: 'Spring Clean'
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">"</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f370ae" className="text-[#f370ae]" />
                  ))}
                </div>
                <p className="text-[#0a9fe1] mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center pt-4 border-t border-[#f6f6f6]">
                  <div>
                    <p className="font-bold text-[#0a9fe1]">{testimonial.name}</p>
                    <p className="text-sm text-[#f370ae]">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-white bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] via-[#f370ae] to-[#0a9fe1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Sparkles className="mx-auto mb-6 animate-pulse" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers across Melbourne
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-[#0a9fe1] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
