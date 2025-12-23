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
      borderColor: 'border-[#0a9fe1]'
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
      borderColor: 'border-[#f370ae]'
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
      borderColor: 'border-[#0a9fe1]'
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
      borderColor: 'border-[#f370ae]'
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
      borderColor: 'border-[#0a9fe1]'
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
      borderColor: 'border-[#f370ae]'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Our <span className="text-[#0a9fe1]">Cleaning Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f370ae] leading-relaxed animate-slide-up animation-delay-200">
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
                  className={`group bg-[#f6f6f6] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up border-b-4 ${service.borderColor}`}
                  style={{ animationDelay: `${index * 100}ms` }}
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
                        <Icon size={80} className="text-[#0a9fe1]/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-[#0a9fe1] mb-2">{service.title}</h3>
                    <p className="text-[#f370ae] font-semibold mb-3">{service.tagline}</p>
                    <p className="text-[#f370ae] leading-relaxed mb-4">{service.description}</p>
                    
                    <div className="bg-[#f6f6f6] rounded-xl p-4 mb-4">
                      <div className="text-2xl font-bold text-[#0a9fe1] mb-1">
                        {service.pricing.from}
                      </div>
                      <div className="text-sm text-[#f370ae]">
                        {service.pricing.details}
                      </div>
                    </div>

                    <a
                      href={`#${service.id}-details`}
                      className="inline-flex items-center gap-2 text-[#0a9fe1] font-semibold hover:gap-3 transition-all"
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
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={`${service.id}-details`}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-all animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content Side */}
                  <div className="lg:w-5/12">
                    <div className="inline-block w-20 h-20 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={40} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a9fe1] mb-3">
                      {service.title}
                    </h2>
                    <p className="text-[#f370ae] text-lg font-semibold mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[#f370ae] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="bg-[#f6f6f6] rounded-xl p-6 mb-6">
                      <div className="text-3xl font-bold text-[#0a9fe1] mb-2">
                        {service.pricing.from}
                      </div>
                      <div className="text-sm text-[#f370ae]">
                        {service.pricing.details}
                      </div>
                    </div>

                    <a
                      href="/booking"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Book Now
                      <ArrowRight size={20} />
                    </a>
                  </div>

                  {/* Features Side */}
                  <div className="lg:w-7/12">
                    <h3 className="text-xl font-bold text-[#0a9fe1] mb-6">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#0a9fe1] flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-[#f370ae]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] via-[#f370ae] to-[#0a9fe1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
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
