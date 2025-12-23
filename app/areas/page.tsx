'use client';

import { MapPin, Phone, Clock, CheckCircle, Sparkles } from 'lucide-react';

export default function AreasPage() {
  const areas = [
    {
      region: 'Inner Melbourne',
      suburbs: [
        'Melbourne CBD', 'Carlton', 'Fitzroy', 'Collingwood', 'Richmond',
        'South Yarra', 'Prahran', 'St Kilda', 'South Melbourne', 'Port Melbourne',
        'Docklands', 'Southbank', 'East Melbourne', 'North Melbourne', 'West Melbourne'
      ]
    },
    {
      region: 'Eastern Suburbs',
      suburbs: [
        'Hawthorn', 'Kew', 'Camberwell', 'Box Hill', 'Doncaster',
        'Balwyn', 'Surrey Hills', 'Mont Albert', 'Blackburn', 'Ringwood',
        'Mitcham', 'Nunawading', 'Forest Hill', 'Vermont', 'Templestowe'
      ]
    },
    {
      region: 'South Eastern Suburbs',
      suburbs: [
        'Caulfield', 'Bentleigh', 'Brighton', 'Malvern', 'Toorak',
        'Armadale', 'Glen Iris', 'Oakleigh', 'Clayton', 'Cheltenham',
        'Moorabbin', 'Mentone', 'Mordialloc', 'Frankston', 'Dandenong'
      ]
    },
    {
      region: 'Northern Suburbs',
      suburbs: [
        'Brunswick', 'Coburg', 'Preston', 'Reservoir', 'Thornbury',
        'Northcote', 'Heidelberg', 'Ivanhoe', 'Bundoora', 'Mill Park',
        'Epping', 'Thomastown', 'Greensborough', 'Eltham', 'Diamond Creek'
      ]
    },
    {
      region: 'Western Suburbs',
      suburbs: [
        'Footscray', 'Yarraville', 'Williamstown', 'Newport', 'Altona',
        'Sunshine', 'St Albans', 'Deer Park', 'Caroline Springs', 'Werribee',
        'Point Cook', 'Hoppers Crossing', 'Tarneit', 'Melton', 'Sunbury'
      ]
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
                WHERE WE SERVE
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Service <span className="text-[#0a9fe1]">Areas</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f370ae] leading-relaxed animate-slide-up animation-delay-200">
              We proudly service all Melbourne metro suburbs. Professional cleaning services delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f370ae] mb-8 text-center">
              Melbourne <span className="text-[#0a9fe1]">Metropolitan Area</span>
            </h2>
            <div className="bg-gradient-to-br from-[#0a9fe1]/10 via-[#f370ae]/5 to-[#0a9fe1]/10 rounded-3xl h-96 flex items-center justify-center mb-8 border-2 border-[#0a9fe1]/20">
              <div className="text-center animate-float">
                <MapPin className="mx-auto mb-4 text-[#0a9fe1]" size={64} />
                <p className="text-2xl font-bold text-[#f370ae] mb-2">All Melbourne Suburbs Covered</p>
                <p className="text-[#0a9fe1] text-lg">From CBD to outer suburbs - we're here for you</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 animate-slide-up animation-delay-200">
                <CheckCircle className="text-[#0a9fe1] flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[#0a9fe1] mb-1">Wide Coverage</h3>
                  <p className="text-sm text-[#f370ae]">All Melbourne metro suburbs serviced</p>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-slide-up animation-delay-300">
                <Clock className="text-[#0a9fe1] flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[#0a9fe1] mb-1">Fast Response</h3>
                  <p className="text-sm text-[#f370ae]">Same-day service available</p>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-slide-up animation-delay-400">
                <Phone className="text-[#0a9fe1] flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[#0a9fe1] mb-1">Easy Booking</h3>
                  <p className="text-sm text-[#f370ae]">Call or book online anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs by Region */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                OUR COVERAGE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              Suburbs We <span className="text-[#0a9fe1]">Service</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#f6f6f6] to-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-[#0a9fe1]/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-[#0a9fe1] mb-6 flex items-center gap-2">
                  <MapPin className="text-[#f370ae]" size={28} />
                  {area.region}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {area.suburbs.map((suburb, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2 text-[#f370ae]">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      <span className="text-sm font-medium">{suburb}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Suburb */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 animate-scale-in">
            <Sparkles className="mx-auto mb-6 text-[#0a9fe1]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#f370ae] mb-4">
              Don't See Your <span className="text-[#0a9fe1]">Suburb Listed?</span>
            </h2>
            <p className="text-xl text-[#f370ae] mb-8">
              We're constantly expanding our service area. Contact us to check if we cover your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="tel:1300000000"
                className="inline-block bg-white text-[#0a9fe1] px-8 py-4 rounded-full font-bold text-lg border-2 border-[#0a9fe1] hover:bg-[#0a9fe1] hover:text-white transition-all"
              >
                Call 1300 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              Why Choose <span className="text-[#0a9fe1]">Smart Home Care?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚗',
                title: 'Local Team',
                description: 'Our teams are based across Melbourne, ensuring quick response times and local knowledge.'
              },
              {
                icon: '⏰',
                title: 'Flexible Scheduling',
                description: 'We work around your schedule with convenient booking times including weekends.'
              },
              {
                icon: '💯',
                title: 'Consistent Quality',
                description: 'Same high-quality service across all areas - no matter where you are in Melbourne.'
              },
              {
                icon: '🌟',
                title: 'Same-Day Service',
                description: 'Need urgent cleaning? We offer same-day service subject to availability in most areas.'
              },
              {
                icon: '🔒',
                title: 'Fully Insured',
                description: 'Complete peace of mind with comprehensive insurance coverage and police-checked staff.'
              },
              {
                icon: '🌱',
                title: 'Eco-Friendly',
                description: 'We use environmentally friendly, non-toxic products safe for your family and pets.'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#f6f6f6] to-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-[#0a9fe1]/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 200}ms` }}>{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-3">{feature.title}</h3>
                <p className="text-[#f370ae]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white animate-slide-up">
            <Sparkles className="mx-auto mb-6 animate-float" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Get a free quote in minutes - no obligation required
            </p>
            <a
              href="/booking"
              className="inline-block bg-white text-[#0a9fe1] px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Your Free Quote Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
