"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  CalendarCheck,
  HeartHandshake,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoFallback, setMailtoFallback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setMailtoFallback(data.mailtoUrl || "");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "An unexpected error occurred. Please call or email us directly."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                WE ARE HERE FOR YOU
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Get In <span className="text-[#0a9fe1]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              Whether you are ready to start care, need help understanding your
              Home Care Package, or just want to chat about your options, our
              friendly Tasmanian team is ready to listen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Sidebar */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Contact Form (Left Column) */}
            <div className="lg:col-span-7 flex flex-col">
              {status === "success" ? (
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-emerald-100 flex-1 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-xs">
                    <CheckCircle2 size={36} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                    Message Sent Successfully
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Thank You for Reaching Out!
                  </h2>
                  <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
                    Your message has been delivered to our local Tasmanian care team (<strong>info@smarthomecare.com.au</strong>). We will review your enquiry and get back to you promptly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center justify-center gap-2 bg-[#0a9fe1] hover:bg-[#0883bb] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="tel:0403103555"
                      className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-full font-bold text-sm transition-all"
                    >
                      <Phone size={16} />
                      Call 0403 103 555
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6 flex-1 flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0a9fe1] bg-[#0a9fe1]/10 px-3 py-1 rounded-full">
                        Direct Message
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                        How Can We Help You?
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Fill in the form below and our local care team will get in
                        touch within 24 hours.
                      </p>
                    </div>

                    {status === "error" && (
                      <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
                        <p className="font-semibold">{errorMessage}</p>
                        {mailtoFallback && (
                          <a
                            href={mailtoFallback}
                            className="text-[#0a9fe1] underline font-bold mt-1 inline-block"
                          >
                            Click here to send via your email app
                          </a>
                        )}
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700 bg-gray-50/50"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700 bg-gray-50/50"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700 bg-gray-50/50"
                          placeholder="0400 000 000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                          Topic of Enquiry *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700 bg-gray-50/50"
                        >
                          <option value="">Select an option</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Home Care Package Discussion">
                            Home Care Package Discussion
                          </option>
                          <option value="Private Care Rates & Options">
                            Private Care Rates &amp; Options
                          </option>
                          <option value="Employment & Join Our Team">
                            Employment &amp; Join Our Team
                          </option>
                          <option value="Client Feedback">Client Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700 bg-gray-50/50"
                          placeholder="Please share any details about your care needs or questions..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-3">
                      We respect your privacy. Your information is 100%
                      confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar - Contact Info & Care Team Image (Right Column) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#0a9fe1] to-[#0883bb] rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">Contact Info</h3>
                </div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-85 font-semibold mb-0.5">
                        Phone (Direct Line)
                      </p>
                      <a
                        href="tel:0403103555"
                        className="text-lg font-bold hover:text-white/80 transition"
                      >
                        0403 103 555
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-85 font-semibold mb-0.5">
                        Email Us
                      </p>
                      <a
                        href="mailto:info@smartcareservices.com.au"
                        className="text-sm font-bold hover:text-white/80 transition break-all"
                      >
                        info@smartcareservices.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-85 font-semibold mb-0.5">
                        Head Office
                      </p>
                      <a
                        href="https://share.google/wrN5qUvX3IKFxh6tc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold hover:text-white/80 transition block leading-snug underline-offset-2 hover:underline"
                      >
                        45 Forbes St, Devonport TAS 7310
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-85 font-semibold mb-0.5">
                        Office Hours
                      </p>
                      <p className="text-base font-bold">
                        Mon - Fri: 8 AM - 5 PM
                      </p>
                      <p className="text-xs opacity-90">
                        In-home care delivered 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Care Team Image Card with Overlay Reassurance Badge */}
              <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                <img
                  src="/Contact Us/image01.jpeg"
                  alt="Smart Home Care Diverse Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="text-lg font-bold">
                    Compassionate &amp; Qualified Support
                  </h4>
                  <p className="text-xs text-white/85">
                    Local coordinators and support workers dedicated to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Reassurance / What to Expect Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-[#f370ae]/10 rounded-full mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f370ae]">
                Seamless Consultation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Happens When You{" "}
              <span className="text-[#0a9fe1]">Contact Us?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base">
              Starting aged care should be supportive, transparent, and
              stress-free. Here is what you can expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#f8fbff] rounded-3xl p-6 border border-blue-50/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0a9fe1]/10 text-[#0a9fe1] flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a9fe1]">
                  Step 01
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                  Friendly Initial Chat
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We listen carefully to your unique lifestyle, home
                  environment, and personal funding requirements.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0a9fe1]">
                <CheckCircle2 size={16} />
                No obligation &amp; confidential
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#fff9fb] rounded-3xl p-6 border border-pink-50/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#f370ae]/10 text-[#f370ae] flex items-center justify-center mb-4">
                  <CalendarCheck size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#f370ae]">
                  Step 02
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                  Free In-Home Visit
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our Tasmanian care manager meets you at home at a time that
                  suits you and your family.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#f370ae]">
                <CheckCircle2 size={16} />
                Tailored care planning
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f8fbff] rounded-3xl p-6 border border-blue-50/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0a9fe1]/10 text-[#0a9fe1] flex items-center justify-center mb-4">
                  <HeartHandshake size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a9fe1]">
                  Step 03
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                  Care Team Matching
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We match you with qualified, friendly local support workers
                  who feel like family.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0a9fe1]">
                <CheckCircle2 size={16} />
                Dedicated ongoing support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                OUR COMMUNITY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              Proudly <span className="text-[#0a9fe1]">Tasmanian</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Delivering professional and compassionate aged care services across Tasmania.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200/60">
            <div className="h-[400px] md:h-[460px] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525049.805566373!2d145.41901306352033!3d-42.00227183652875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e205ab04c44f9%3A0x67399fcb6bb2fb8b!2sTasmania!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Office Info Bottom Bar */}
            <div className="p-6 md:p-8 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#0a9fe1]/10 flex items-center justify-center text-[#0a9fe1] shrink-0 mx-auto sm:mx-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Devonport Head Office</h3>
                  <p className="text-gray-600 text-sm">45 Forbes St, Devonport TAS 7310</p>
                </div>
              </div>

              <a
                href="https://share.google/wrN5qUvX3IKFxh6tc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0a9fe1] hover:bg-[#0883bb] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105 shrink-0"
              >
                Get Directions
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
