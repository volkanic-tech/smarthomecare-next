'use client';

import { Award, ShieldCheck, HeartHandshake, ListChecks, HelpCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HomeCarePackagesPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                MAXIMISING YOUR FUNDING
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Home Care Packages & <span className="text-[#0a9fe1]">Trilogy Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              Understanding the My Aged Care system can be overwhelming. We are here to make it simple, transparent, and more valuable for you.
            </p>
          </div>
        </div>
      </section>

      {/* Navigating HCP Levels */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a9fe1] mb-4">Understanding HCP Levels</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Home Care Packages are government-funded subsidies designed to help older Australians live at home longer. They are allocated across four levels of care needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: 'Level 1', desc: 'Basic care needs', color: 'from-blue-100 to-blue-50', text: 'text-blue-600' },
              { level: 'Level 2', desc: 'Low care needs', color: 'from-green-100 to-green-50', text: 'text-green-600' },
              { level: 'Level 3', desc: 'Intermediate care needs', color: 'from-orange-100 to-orange-50', text: 'text-orange-600' },
              { level: 'Level 4', desc: 'High care needs', color: 'from-red-100 to-red-50', text: 'text-red-600' }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${pkg.color} rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1`}>
                <h3 className={`text-3xl font-bold ${pkg.text} mb-2`}>{pkg.level}</h3>
                <p className="text-gray-700 font-medium">{pkg.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-[#f370ae] font-semibold italic">
              "No matter what level you are approved for, Smart Home Care Services is here to deliver exceptional support."
            </p>
          </div>
        </div>
      </section>

      {/* Trilogy Care Partnership */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-2 bg-[#f370ae]/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-[#f370ae]">STRATEGIC PARTNERSHIP</span>
                </div>
                <h2 className="text-4xl font-bold text-[#0a9fe1] mb-6">The Smart Home Care + Trilogy Care Advantage</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We have formed a strategic partnership with <strong>Trilogy Care</strong>, Australia's leading provider of self-managed and care-managed Home Care Packages. What does this mean for you?
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-[#0a9fe1]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a9fe1] mb-1">Low Management Fees</h4>
                      <p className="text-gray-600">Traditional providers often charge high administrative fees. Trilogy Care's flat-fee structure means more of your funding goes directly to your care.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#f370ae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="text-[#f370ae]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#f370ae] mb-1">Direct Local Support</h4>
                      <p className="text-gray-600">You get the financial efficiency of Trilogy Care combined with the warm, local, on-the-ground support of Smart Home Care Services.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ListChecks className="text-[#0a9fe1]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a9fe1] mb-1">Maximum Hours of Care</h4>
                      <p className="text-gray-600">By reducing overheads, you unlock significantly more hours of our premium in-home care services every fortnight.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] p-8 rounded-3xl text-white text-center shadow-lg transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Award size={64} className="mx-auto mb-6 text-white/90" />
                  <h3 className="text-3xl font-bold mb-4">Stretch Your Funding Further</h3>
                  <p className="text-lg opacity-90 mb-8 leading-relaxed">
                    Why let administration fees eat into the care you deserve? Our partnership ensures transparency, giving you full control over how and where your package is spent.
                  </p>
                  <Link href="/contact" className="inline-block bg-white text-[#0a9fe1] font-bold px-8 py-3 rounded-full hover:shadow-lg transition-transform hover:scale-105">
                    Speak to our Funding Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Guide */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a9fe1] mb-4">Simple 3-Step Guide to Starting or Switching</h2>
            <p className="text-lg text-[#f370ae]">We handle the paperwork so you don't have to.</p>
          </div>
          <div className="relative border-l-4 border-[#0a9fe1]/20 ml-6 md:ml-0 md:border-none space-y-12 md:space-y-0">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#0a9fe1]/20 to-[#f370ae]/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: '1',
                  title: 'Contact Us for a Chat',
                  desc: 'Reach out for a free, no-obligation consultation. We\'ll discuss your needs and explain how the funding works.',
                  icon: HelpCircle
                },
                {
                  step: '2',
                  title: 'Set Up with Trilogy Care',
                  desc: 'We\'ll seamlessly guide you through engaging Trilogy Care as your package host, ensuring all paperwork is handled stress-free.',
                  icon: ListChecks
                },
                {
                  step: '3',
                  title: 'Begin Your Tailored Care',
                  desc: 'Our dedicated Smart Home Care team will start delivering compassionate, high-quality services directly to your door.',
                  icon: CheckCircle2
                }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 text-center">
                  <div className="absolute left-[-42px] top-0 md:static md:mx-auto w-16 h-16 bg-white rounded-full border-4 border-[#0a9fe1] flex items-center justify-center mb-6 shadow-lg text-[#0a9fe1]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">Step {item.step}: {item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] via-[#f370ae] to-[#0a9fe1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Maximise Your HCP?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards better care today. Our local team is ready to guide you.
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
