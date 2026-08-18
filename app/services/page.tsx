'use client';

import { Shield, UserCheck, Car, Leaf, Sparkles, Heart, Shirt, Utensils, ShoppingBag, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'home-safety',
      icon: Shield,
      title: 'Home Safety, Minor Repairs & Comfort Maintenance',
      tagline: 'Keep your home a safe haven.',
      description: 'We understand the importance of a secure living environment. Our team assists with minor maintenance tasks that ensure your home remains safe, accessible, and comfortable year-round.',
      features: [
        'Changing lightbulbs',
        'Minor pathway clearing',
        'Testing smoke alarms',
        'Adjusting trip hazards',
        'Basic home comfort checks'
      ],
      empowerment: 'You can move freely and safely around your home without worrying about maintenance risks.',
      borderColor: 'border-[#0a9fe1]'
    },
    {
      id: 'personal-care',
      icon: UserCheck,
      title: 'Dignified Personal Care & Morning Routine Support',
      tagline: 'Start every day with confidence and grace.',
      description: 'Personal care is deeply private. Our compassionate caregivers provide discrete, respectful assistance tailored to your exact preferences, ensuring you look and feel your best.',
      features: [
        'Assistance with showering/bathing',
        'Grooming and dressing',
        'Personal hygiene support',
        'Morning and evening routines'
      ],
      empowerment: 'Maintains your personal dignity and wellbeing, helping you face the day with confidence.',
      borderColor: 'border-[#f370ae]'
    },
    {
      id: 'transport',
      icon: Car,
      title: 'Independent Mobility & Assisted Transport Services',
      tagline: 'Stay connected to the people and places you love.',
      description: 'Giving up driving shouldn\'t mean giving up your active life. Our safe, reliable transport services ensure you never miss an appointment or a social gathering.',
      features: [
        'Transport to medical appointments',
        'Driving to social events',
        'Visiting family and friends',
        'Assistance navigating public spaces'
      ],
      empowerment: 'Eliminates the stress of travel and keeps you actively engaged in your local community.',
      borderColor: 'border-[#0a9fe1]'
    },
    {
      id: 'garden',
      icon: Leaf,
      title: 'Garden Sanctuary & Outdoor Living Care',
      tagline: 'Enjoy the beauty of your garden without the strain.',
      description: 'A well-kept garden is a source of joy. We provide gentle upkeep so you can continue to enjoy your outdoor spaces safely.',
      features: [
        'Light weeding',
        'Watering plants',
        'Sweeping paths',
        'Minor pruning',
        'Keeping outdoor areas safe and tidy'
      ],
      empowerment: 'Allows you to relax in a beautiful, hazard-free outdoor environment that brings you peace.',
      borderColor: 'border-[#f370ae]'
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      title: 'Gentle Home Cleaning & Domestic Housekeeping',
      tagline: 'A fresh, clean home for your comfort and health.',
      description: 'Let us take the burden of household chores off your shoulders. We provide meticulous, gentle cleaning services that respect your space and belongings.',
      features: [
        'Vacuuming and mopping',
        'Dusting surfaces',
        'Wiping down kitchen/bathroom surfaces',
        'General tidying'
      ],
      empowerment: 'Frees up your time and energy, providing a hygienic and uplifting environment to live in.',
      borderColor: 'border-[#0a9fe1]'
    },
    {
      id: 'companionship',
      icon: Heart,
      title: 'Meaningful Social Connection & Heartfelt Companionship',
      tagline: 'Because a good chat can brighten the whole day.',
      description: 'Emotional wellbeing is just as important as physical health. Our caregivers provide genuine companionship, sharing stories, hobbies, and a warm cup of tea.',
      features: [
        'Friendly conversation',
        'Playing cards or board games',
        'Sharing hobbies',
        'Reading together',
        'Enjoying a walk'
      ],
      empowerment: 'Fosters joy, reduces isolation, and keeps your mind active and engaged.',
      borderColor: 'border-[#f370ae]'
    },
    {
      id: 'laundry',
      icon: Shirt,
      title: 'Fresh Linen, Laundry & Wardrobe Care',
      tagline: 'The comfort of fresh clothes and crisp sheets.',
      description: 'Managing laundry can be physically demanding. We handle your washing and wardrobe organisation with care, ensuring you always have what you need ready to wear.',
      features: [
        'Washing, drying, folding',
        'Light ironing',
        'Changing bed linen',
        'Organising clothing'
      ],
      empowerment: 'Removes the physical strain of heavy lifting and ensures you always feel fresh and comfortable.',
      borderColor: 'border-[#0a9fe1]'
    },
    {
      id: 'meals',
      icon: Utensils,
      title: 'Nourishing Meal Preparation & Daily Culinary Support',
      tagline: 'Delicious, home-cooked meals tailored just for you.',
      description: 'Good nutrition is the foundation of health. We assist with meal planning and preparation, catering to your dietary requirements and personal tastes.',
      features: [
        'Grocery inventory',
        'Preparing breakfasts, lunches, or dinners',
        'Batch cooking',
        'Post-meal kitchen clean-up'
      ],
      empowerment: 'Ensures you maintain a healthy diet with meals you genuinely enjoy, without the exhaustion of cooking.',
      borderColor: 'border-[#f370ae]'
    },
    {
      id: 'shopping',
      icon: ShoppingBag,
      title: 'Guided Shopping & Essential Daily Errands',
      tagline: 'Hassle-free management of your daily essentials.',
      description: 'Whether you want to browse the aisles together or prefer us to handle the list, we make sure your pantry is stocked and your errands are complete.',
      features: [
        'Grocery shopping (accompanied or on your behalf)',
        'Picking up prescriptions',
        'Posting mail',
        'Running basic local errands'
      ],
      empowerment: 'Keeps your household running smoothly while giving you the choice to participate as much or as little as you like.',
      borderColor: 'border-[#0a9fe1]'
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
              Tailored, High-Quality <span className="text-[#0a9fe1]">In-Home Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              Your home, your routine, your choices. We offer a comprehensive suite of flexible services designed to support your independence and enhance your quality of life. Explore how we can help you thrive at home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Overview) */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group bg-[#f6f6f6] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up border-b-4 ${service.borderColor}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#0a9fe1]/10 to-[#f370ae]/10 flex items-center justify-center overflow-hidden">
                    <Icon size={80} className="text-[#0a9fe1]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 bg-white flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-[#0a9fe1] mb-2">{service.title}</h3>
                    <p className="text-[#f370ae] font-semibold mb-3">{service.tagline}</p>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>

                    <a
                      href={`#${service.id}-details`}
                      className="inline-flex items-center gap-2 text-[#0a9fe1] font-semibold hover:gap-3 transition-all mt-auto"
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
                >
                  {/* Content Side */}
                  <div className="lg:w-1/2">
                    <div className="inline-block w-20 h-20 bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={40} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a9fe1] mb-3">
                      {service.title}
                    </h2>
                    <p className="text-[#f370ae] text-lg font-semibold mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-[#0a9fe1]/5 rounded-xl p-6 mb-6 border-l-4 border-[#0a9fe1]">
                      <p className="font-semibold text-[#0a9fe1] mb-1">How this empowers you:</p>
                      <p className="text-gray-700 italic">"{service.empowerment}"</p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Enquire About This Service
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  {/* Features Side */}
                  <div className="lg:w-1/2 lg:pl-12">
                    <h3 className="text-2xl font-bold text-[#0a9fe1] mb-6">Included Tasks:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-[#f6f6f6] p-4 rounded-xl">
                          <CheckCircle className="text-[#0a9fe1] flex-shrink-0 mt-0.5" size={24} />
                          <span className="text-gray-700 font-medium">{feature}</span>
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
          <Heart className="mx-auto mb-6 animate-pulse" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Design Your Care Plan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reach out to our local Tasmanian team today for a confidential, no-obligation conversation about how we can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Book a Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:1300762782"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Call 1300 SMART
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
