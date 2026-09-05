"use client";

import Image from "next/image";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  ListChecks,
  HelpCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

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
              Home Care Packages &{" "}
              <span className="text-[#0a9fe1]">Trilogy Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              Understanding the My Aged Care system can be overwhelming. We are
              here to make it simple, transparent, and more valuable for you.
            </p>
          </div>
        </div>
      </section>

      {/* Navigating HCP Levels */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a9fe1] mb-4">
              Understanding HCP Levels
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Home Care Packages are government-funded subsidies designed to
              help older Australians live at home longer. They are allocated
              across four levels of care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "Level 1",
                desc: "Basic care needs",
                funding: "$2,818 / quarter",
                hours: "Up to 26.60 hours",
                color: "from-blue-100 to-blue-50",
                text: "text-blue-600",
              },
              {
                level: "Level 2",
                desc: "Low care needs",
                funding: "$4,955 / quarter",
                hours: "Up to 47.98 hours",
                color: "from-green-100 to-green-50",
                text: "text-green-600",
              },
              {
                level: "Level 3",
                desc: "Intermediate care needs",
                funding: "$10,787 / quarter",
                hours: "Up to 104.45 hours",
                color: "from-orange-100 to-orange-50",
                text: "text-orange-600",
              },
              {
                level: "Level 4",
                desc: "High care needs",
                funding: "$16,353 / quarter",
                hours: "Up to 158.34 hours",
                color: "from-red-100 to-red-50",
                text: "text-red-600",
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${pkg.color} rounded-2xl p-6 md:p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <h3 className={`text-3xl font-bold ${pkg.text} mb-2`}>
                    {pkg.level}
                  </h3>
                  <p className="text-gray-700 font-medium mb-6">{pkg.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 space-y-2">
                  <div className="bg-white/80 backdrop-blur-xs rounded-xl py-2 px-3 shadow-xs">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                      Quarterly Funding
                    </span>
                    <span className={`text-lg font-bold ${pkg.text}`}>
                      {pkg.funding}
                    </span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-xs rounded-xl py-2 px-3 shadow-xs">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                      Available Hours
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {pkg.hours}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-[#f370ae] font-semibold italic">
              "No matter what level you are approved for, Smart Home Care
              Services is here to deliver exceptional support."
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
                  <span className="text-sm font-semibold text-[#f370ae]">
                    STRATEGIC PARTNERSHIP
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-[#0a9fe1] mb-6">
                  The Smart Home Care + Trilogy Care Advantage
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Trilogy Care and Smart Home Care Services have partnered to
                  ensure you have access to high-quality home care services via
                  your Support at Home funding. Trilogy Care will focus on
                  assisting you with self-managing your care plan while Smart
                  Home Care Services focuses on delivering the services you need
                  to stay at home for longer.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-[#0a9fe1]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a9fe1] mb-1">
                        Low Management Fees
                      </h4>
                      <p className="text-gray-600">
                        Traditional providers often charge high administrative
                        fees. Trilogy Care's flat-fee structure means more of
                        your funding goes directly to your care.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#f370ae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="text-[#f370ae]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#f370ae] mb-1">
                        Direct Local Support
                      </h4>
                      <p className="text-gray-600">
                        You get the financial efficiency of Trilogy Care
                        combined with the warm, local, on-the-ground support of
                        Smart Home Care Services.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ListChecks className="text-[#0a9fe1]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a9fe1] mb-1">
                        Maximum Hours of Care
                      </h4>
                      <p className="text-gray-600">
                        By reducing overheads, you unlock significantly more
                        hours of our premium in-home care services every
                        fortnight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative bg-gradient-to-br from-[#0a9fe1]/5 via-white to-[#f370ae]/5 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl overflow-hidden">
                  {/* Ambient Glows */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#0a9fe1]/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f370ae]/10 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-full mb-8">
                      <Sparkles size={14} className="text-[#0a9fe1]" />
                      Trusted Aged Care Collaboration
                    </span>

                    {/* Logos Combined Layout */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                      {/* Smart Home Care Logo Box */}
                      <div className="flex-1 w-full bg-white rounded-2xl p-2 sm:p-3 shadow-md border border-gray-100 flex items-center justify-center transition-transform hover:-translate-y-1 duration-300">
                        <Image
                          src="/Logo.jpeg"
                          alt="Smart Home Care Logo"
                          width={400}
                          height={180}
                          className="w-full h-28 sm:h-32 md:h-36 object-contain"
                        />
                      </div>

                      {/* Connection Badge */}
                      <div className="w-10 h-10 rounded-full bg-[#0a9fe1] text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0 sm:-mx-2 z-10">
                        +
                      </div>

                      {/* Trilogy Care Logo Box */}
                      <div className="flex-1 w-full bg-white rounded-2xl p-2 sm:p-3 shadow-md border border-gray-100 flex items-center justify-center transition-transform hover:-translate-y-1 duration-300">
                        <Image
                          src="/Trilogy Care-Logo.png"
                          alt="Trilogy Care Logo"
                          width={400}
                          height={180}
                          className="w-full h-28 sm:h-32 md:h-36 object-contain"
                        />
                      </div>
                    </div>

                    {/* Partnership Highlight Box */}
                    <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-gray-100 shadow-sm w-full mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Complete Control & Compassionate Care
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Enjoy the freedom of Trilogy Care&apos;s low flat fees
                        paired with trusted, hands-on support from our local
                        Tasmanian care team.
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-[#f370ae] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      Speak to our Funding Experts
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Step Guide */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a9fe1] mb-4">
              How to get started
            </h2>
            <p className="text-lg text-[#f370ae]">
              We handle the paperwork so you don't have to.
            </p>
          </div>
          <div className="relative border-l-4 border-[#0a9fe1]/20 ml-6 md:ml-0 md:border-none space-y-12 md:space-y-0">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#0a9fe1]/20 to-[#f370ae]/20 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  title: "Talk to us",
                  desc: "Contact Trilogy Care or Smart Home Care Services to discuss your care needs. Our team can provide advice about the Support at Home process.",
                  icon: Phone,
                },
                {
                  step: "2",
                  title: "Care planning",
                  desc: "Our team will review your care needs to establish your individual care plan and budget.",
                  icon: ListChecks,
                },
                {
                  step: "3",
                  title: "Perfect match",
                  desc: "Smart Home Care Services will start creating your care team by sourcing care services that suit your needs.",
                  icon: HeartHandshake,
                },
                {
                  step: "4",
                  title: "Get started",
                  desc: "The services sourced by Smart Home Care Services will begin care work while Trilogy Care administers your Support at Home plan.",
                  icon: CheckCircle2,
                },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 text-center">
                  <div className="absolute left-[-42px] top-0 md:static md:mx-auto w-16 h-16 bg-white rounded-full border-4 border-[#0a9fe1] flex items-center justify-center mb-6 shadow-lg text-[#0a9fe1]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a9fe1] mb-3">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] via-[#0883bb] to-[#0a9fe1] text-white relative overflow-hidden">
        {/* Ambient Depth Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f370ae]/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-semibold tracking-wide">
              Maximise Your Funding &amp; Care
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-xs">
            Ready to Maximise Your HCP?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards better care today. Our local Tasmanian team is ready to guide you through every stage.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Book a Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0403103555"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Call 0403 103 555
            </a>
            <a
              href="mailto:info@smartcareservices.com.au"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              100% Free &amp; Confidential
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              Local Tasmanian Team
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              Trilogy Care Partner
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
