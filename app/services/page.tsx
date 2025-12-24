'use client';

import { Home, Building2, Sparkles, Key, Wind, Droplets, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: 'residential',
      icon: Home,
      title: 'Standard Home Cleaning',
      tagline: 'Your home, sparkling clean',
      description: 'Keep your space fresh with regular dusting, mopping, and surface care. Professional home cleaning services tailored to your needs.',
      features: [
        'General surface cleaning',
        'Dusting of furniture and fixtures',
        'Floor sweeping and mopping',
        'Trash collection and disposal',
        'Kitchen and bathroom sanitization',
        'Window cleaning (interior)',
        'Regular weekly or fortnightly service',
        'One-off deep cleaning available'
      ],
      pricing: {
        from: '$59/session',
        details: 'Affordable plans for regular maintenance.'
      },
      image: '/Services/services01.jpg',
      accentColor: 'emerald'
    },
    {
      id: 'deep',
      icon: Sparkles,
      title: 'Deep Cleaning',
      tagline: 'Thorough clean from top to bottom',
      description: 'A thorough cleaning service that goes beyond the surface to ensure every corner is spotless.',
      features: [
        'Includes everything in Basic Clean',
        'Bathroom and kitchen scrubbing',
        'Appliance exterior and interior cleaning',
        'Baseboard and window sill detailing',
        'Behind and under furniture',
        'Light fixtures and ceiling fans',
        'Wall spot cleaning',
        'Inside cupboards and drawers'
      ],
      pricing: {
        from: '$129/session',
        details: 'Comprehensive deep-clean transformation.'
      },
      image: '/Services/services02.jpg',
      accentColor: 'blue'
    },
    {
      id: 'move',
      icon: Key,
      title: 'Move-In/Move-Out Cleaning',
      tagline: 'Bond back guaranteed',
      description: 'A specialized cleaning service designed to prepare your space for a fresh start. 100% bond-back guarantee.',
      features: [
        'Top-to-bottom cleaning',
        'Inside cabinets and drawers',
        'Interior windows and blinds',
        'Light fixture and ceiling fan dusting',
        'Kitchen appliance deep cleaning',
        'Bathroom sanitization',
        'Wall and skirting board cleaning',
        'Carpet steam cleaning (optional)'
      ],
      pricing: {
        from: '$179/session',
        details: 'Ensure spotless handover or move-in.'
      },
      image: '/Services/services03.jpg',
      accentColor: 'emerald'
    },
    {
      id: 'window',
      icon: Wind,
      title: 'Window Cleaning',
      tagline: 'Crystal clear views',
      description: 'Professional window cleaning for residential and commercial properties, including high-rise buildings.',
      features: [
        'Interior and exterior window cleaning',
        'High-rise window cleaning',
        'Glass door and partition cleaning',
        'Frame and sill cleaning',
        'Streak-free finish guaranteed',
        'Screen cleaning',
        'Skylight cleaning',
        'Safety equipment for high access'
      ],
      pricing: {
        from: '$80',
        details: 'Price varies by number and accessibility.'
      },
      image: '/Services/services01.jpg',
      accentColor: 'blue'
    },
    {
      id: 'carpet',
      icon: Droplets,
      title: 'Carpet Cleaning',
      tagline: 'Deep clean for lasting freshness',
      description: 'Professional steam cleaning and stain removal services that restore your carpets and upholstery to like-new condition.',
      features: [
        'Hot water extraction (steam cleaning)',
        'Stain and odor removal',
        'Pet stain treatment',
        'Carpet protection treatment',
        'Upholstery cleaning',
        'Rug and mattress cleaning',
        'Fast drying techniques',
        'Eco-friendly products'
      ],
      pricing: {
        from: '$25/room',
        details: 'Minimum charge $80. Upholstery from $60.'
      },
      image: '/Services/services02.jpg',
      accentColor: 'emerald'
    },
    {
      id: 'spring',
      icon: Sparkles,
      title: 'Spring Cleaning',
      tagline: 'Complete seasonal refresh',
      description: 'Comprehensive deep cleaning service that reaches every corner of your property for a complete seasonal transformation.',
      features: [
        'Detailed cleaning of all rooms',
        'Inside cupboards and drawers',
        'Behind and under furniture',
        'Light fixtures and ceiling fans',
        'Window and blind cleaning',
        'Wall and baseboard cleaning',
        'Oven and range hood deep clean',
        'Skirting boards and door frames'
      ],
      pricing: {
        from: '$350',
        details: 'Standard 3-bedroom house. Customizable.'
      },
      image: '/Services/services03.jpg',
      accentColor: 'blue'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold text-emerald-700">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Cleaning Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-slide-up animation-delay-200">
              Discover a range of services designed to bring comfort and cleanliness into every corner of your home.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid with Images */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up border border-slate-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
                    {service.image ? (
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={80} className="text-slate-300" />
                      </div>
                    )}
                    {/* Floating Icon Badge */}
                    <div className={`absolute top-4 right-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                      service.accentColor === 'emerald' 
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' 
                        : 'bg-gradient-to-br from-blue-500 to-blue-600'
                    }`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    {/* Bottom Accent Bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                      service.accentColor === 'emerald'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}></div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      service.accentColor === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                    }`}>{service.title}</h3>
                    <p className="text-slate-700 font-semibold mb-3">{service.tagline}</p>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 mb-4 border border-slate-100">
                      <div className={`text-2xl font-bold mb-1 ${
                        service.accentColor === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                      }`}>
                        {service.pricing.from}
                      </div>
                      <div className="text-sm text-slate-600">
                        {service.pricing.details}
                      </div>
                    </div>

                    <a
                      href={`#${service.id}-details`}
                      className={`inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                        service.accentColor === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                      }`}
                    >
                      View Details
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={`${service.id}-details`}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slide-up border border-slate-200/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-0`}>
                    {/* Image Side */}
                    <div className={`relative lg:col-span-5 h-64 lg:h-auto min-h-[400px] ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-900/70 z-10"></div>
                      {service.image && (
                        <Image 
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                        <div className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-4 shadow-2xl ${
                          service.accentColor === 'emerald'
                            ? 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                            : 'bg-gradient-to-br from-blue-500 to-blue-600'
                        }`}>
                          <Icon className="text-white" size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          {service.title}
                        </h2>
                        <p className="text-white/90 text-lg font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:col-span-7 p-8 md:p-10 ${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    
                      <div className={`relative overflow-hidden rounded-2xl p-6 mb-8 border-2 ${
                        service.accentColor === 'emerald'
                          ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-200'
                          : 'bg-gradient-to-br from-blue-50 to-white border-blue-200'
                      }`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Starting From</p>
                        <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                          service.accentColor === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                        }`}>
                          {service.pricing.from}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          {service.pricing.details}
                        </div>
                      </div>

                      <a
                        href="/booking"
                        className={`inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg ${
                          service.accentColor === 'emerald'
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                        }`}
                      >
                        Book This Service
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Features Side */}
                    <div className="lg:col-span-12 px-8 md:px-10 pb-8 md:pb-10 pt-0">
                      <div className="flex items-center gap-3 mb-8">
                        <div className={`w-1.5 h-10 rounded-full ${
                          service.accentColor === 'emerald' ? 'bg-gradient-to-b from-emerald-400 to-emerald-600' : 'bg-gradient-to-b from-blue-400 to-blue-600'
                        }`}></div>
                        <h3 className="text-3xl font-bold text-slate-800">What's Included</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg hover:-translate-y-1">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className={`absolute inset-0 ${
                                service.accentColor === 'emerald'
                                  ? 'bg-gradient-to-br from-emerald-50/50 to-transparent'
                                  : 'bg-gradient-to-br from-blue-50/50 to-transparent'
                              }`}></div>
                            </div>
                            {/* Mini decorative image */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full transform translate-x-6 -translate-y-6"></div>
                            </div>
                            <div className="relative p-5">
                              <div className={`flex items-center justify-center w-10 h-10 rounded-xl mb-3 shadow-sm ${
                                service.accentColor === 'emerald'
                                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                                  : 'bg-gradient-to-br from-blue-500 to-blue-600'
                              }`}>
                                <CheckCircle className="text-white" size={20} />
                              </div>
                              <span className="text-slate-700 font-medium leading-snug block">{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Sparkles className="mx-auto mb-6 animate-pulse" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Need Something Else?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We offer customized cleaning packages to suit your specific needs. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Get a Quote
              <ArrowRight size={20} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
