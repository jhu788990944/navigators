import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { SERVICES_DATA, CONTACT_DATA } from "../data";

interface ContactProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
}

export default function Contact({ selectedServiceId, setSelectedServiceId }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studyLevel: "",
    preferredDestination: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "service") {
      setSelectedServiceId(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for field
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!formData.studyLevel) {
      errors.studyLevel = "Please select your study level";
    }
    if (!formData.preferredDestination) {
      errors.preferredDestination = "Please select your preferred country";
    }
    if (!formData.message.trim()) {
      errors.message = "Please tell us about your educational goals";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate database write & email trigger delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Generate a realistic booking reference ID
      const randomId = "SMC-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomId);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", studyLevel: "", preferredDestination: "", message: "" });
    setSelectedServiceId("");
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl -z-10" />
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-indigo-400/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-sans text-xs font-semibold tracking-wide uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Start Your Journey Today
          </h2>
          <p className="font-sans text-base text-slate-400 leading-relaxed">
            Fill up the form and our Team will get back to you within 24 hours to help you navigate your future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quick Contact Details Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-2xl flex flex-col gap-6">
              <h3 className="font-sans font-bold text-xl text-white border-b border-white/10 pb-4">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <LucideIcon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                    Our Office
                  </h4>
                  <p className="font-sans text-sm text-slate-200 font-medium leading-relaxed">
                    {CONTACT_DATA.address}
                  </p>
                </div>
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <LucideIcon name="Phone" size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                      Phone
                    </h4>
                    <a href="tel:03255276689" className="font-sans text-sm text-slate-200 hover:text-emerald-400 font-medium leading-normal transition-colors">
                      03255276689
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 animate-pulse">
                    <LucideIcon name="MessageCircle" size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/923255276689"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-emerald-400 hover:text-emerald-300 font-bold leading-normal transition-colors flex items-center gap-1.5"
                    >
                      +92 325 5276689
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-sans font-medium uppercase">Chat Now</span>
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <LucideIcon name="Mail" size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                      Email
                    </h4>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="font-sans text-sm text-slate-200 hover:text-emerald-400 font-medium leading-normal truncate block transition-colors">
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center shrink-0">
                  <LucideIcon name="Clock" size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Business Hours
                  </h4>
                  <ul className="font-sans text-xs text-slate-300 font-medium space-y-1">
                    {CONTACT_DATA.hours.split("\n").map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col gap-4 group">
              <div>
                <h3 className="font-sans font-bold text-lg text-white mb-1">
                  Find Us
                </h3>
                <h4 className="font-sans text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  Our Corporate Headquarters
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed mb-4">
                  Drop by our premium executive office in DHA Phase 2, Islamabad. We're here to assist you with all your international education journeys.
                </p>
              </div>

              {/* Map Iframe */}
              <div className="rounded-2xl border border-white/10 aspect-video overflow-hidden relative">
                <iframe
                  title="Office Location Map"
                  src="https://maps.google.com/maps?q=33.5244,73.1593&hl=en&z=15&output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-90"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Stats */}
              <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Corporate Office</span>
                  <span className="font-sans text-slate-200 font-medium text-right">The Navigators Consultants, Plot 90, Ali Akbar Plaza, DHA Phase 2</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans text-slate-500 font-semibold uppercase tracking-wider text-[10px]">HQ ISLAMABAD • SECURE PIN</span>
                  <span className="font-sans text-slate-200 font-medium text-right">DHA Phase 2, Islamabad</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Map Coordinates</span>
                  <span className="font-mono text-emerald-400 font-semibold">33.5244° N | 73.1593° E</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=33.5244,73.1593"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans text-xs font-semibold rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Open in Google Maps
                <LucideIcon name="ExternalLink" size={13} />
              </a>
            </div>
          </div>

          {/* Right Side: Consultation Booking Form / Success State */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-sans font-black text-2xl text-white mb-2">
                    Send us a Message
                  </h3>
                  <p className="font-sans text-sm text-slate-400 mb-8 leading-relaxed">
                    Tell us about your educational goals and our global placement team will guide you through every milestone.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-sm font-semibold text-slate-300">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`font-sans text-sm border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-slate-900/40 text-white placeholder-slate-500 ${
                            formErrors.name ? "border-red-500/50 bg-red-950/20" : "border-white/10"
                          }`}
                        />
                        {formErrors.name && (
                          <span className="font-sans text-xs text-red-400 flex items-center gap-1 mt-0.5">
                            <LucideIcon name="AlertCircle" size={12} />
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-sm font-semibold text-slate-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`font-sans text-sm border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-slate-900/40 text-white placeholder-slate-500 ${
                            formErrors.email ? "border-red-500/50 bg-red-950/20" : "border-white/10"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="font-sans text-xs text-red-400 flex items-center gap-1 mt-0.5">
                            <LucideIcon name="AlertCircle" size={12} />
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Form row 2: Phone & Service Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-sm font-semibold text-slate-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className={`font-sans text-sm border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-slate-900/40 text-white placeholder-slate-500 ${
                            formErrors.phone ? "border-red-500/50 bg-red-950/20" : "border-white/10"
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="font-sans text-xs text-red-400 flex items-center gap-1 mt-0.5">
                            <LucideIcon name="AlertCircle" size={12} />
                            {formErrors.phone}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-sm font-semibold text-slate-300">
                          Advisory Service
                        </label>
                        <select
                          name="service"
                          value={selectedServiceId}
                          onChange={handleChange}
                          className="font-sans text-sm border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-slate-900 focus:bg-slate-900 transition-all text-white font-medium"
                        >
                          <option value="">General Counseling Inquiry</option>
                          {SERVICES_DATA.map((service) => (
                            <option key={service.id} value={service.id} className="bg-slate-900 text-white">
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Form row 3: Study Level & Preferred Destination */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-sm font-semibold text-slate-300">
                          Study Level
                        </label>
                        <select
                          name="studyLevel"
                          value={formData.studyLevel}
                          onChange={handleChange}
                          className={`font-sans text-sm border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-slate-900 focus:bg-slate-900 transition-all text-white font-medium ${
                            formErrors.studyLevel ? "border-red-500/50 bg-red-950/20" : "border-white/10"
                          }`}
                        >
                          <option value="">Select Level</option>
                          <option value="Undergraduate">Undergraduate (Bachelor's)</option>
                          <option value="Postgraduate">Postgraduate (Master's)</option>
                          <option value="PhD">Ph.D. / Doctoral</option>
                          <option value="Diploma">Diploma / Foundation</option>
                        </select>
                        {formErrors.studyLevel && (
                          <span className="font-sans text-xs text-red-400 flex items-center gap-1 mt-0.5">
                            <LucideIcon name="AlertCircle" size={12} />
                            {formErrors.studyLevel}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-sm font-semibold text-slate-300">
                          Preferred Destination
                        </label>
                        <select
                          name="preferredDestination"
                          value={formData.preferredDestination}
                          onChange={handleChange}
                          className={`font-sans text-sm border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-slate-900 focus:bg-slate-900 transition-all text-white font-medium ${
                            formErrors.preferredDestination ? "border-red-500/50 bg-red-950/20" : "border-white/10"
                          }`}
                        >
                          <option value="">Select Country</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="USA">United States (USA)</option>
                          <option value="Europe">Europe</option>
                        </select>
                        {formErrors.preferredDestination && (
                          <span className="font-sans text-xs text-red-400 flex items-center gap-1 mt-0.5">
                            <LucideIcon name="AlertCircle" size={12} />
                            {formErrors.preferredDestination}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-sm font-semibold text-slate-300">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your educational goals..."
                        className={`font-sans text-sm border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-slate-900/40 text-white placeholder-slate-500 ${
                          formErrors.message ? "border-red-500/50 bg-red-950/20" : "border-white/10"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="font-sans text-xs text-red-400 flex items-center gap-1 mt-0.5">
                          <LucideIcon name="AlertCircle" size={12} />
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 font-sans font-semibold text-base bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/40 text-slate-950 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-99 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
                          Processing your application...
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Send" size={18} />
                          Submit Application
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="text-center py-10 px-4"
                >
                  {/* Succes checkmark badge */}
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-8 shadow-md">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                    >
                      <LucideIcon name="Check" size={40} />
                    </motion.div>
                  </div>

                  <h3 className="font-sans font-bold text-3xl text-white mb-2">
                    Consultation Request Lodged!
                  </h3>
                  <p className="font-sans text-base text-slate-400 max-w-md mx-auto mb-8">
                    Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. Our expert panel has allocated space to review your objectives.
                  </p>

                  {/* Receipt Box */}
                  <div className="bg-slate-950/40 border border-white/10 rounded-xl p-5 max-w-sm mx-auto mb-8 text-left space-y-3">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        Reference Number
                      </span>
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        {bookingRef}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-xs font-medium text-slate-400">
                        Service Selected
                      </span>
                      <span className="font-sans text-xs font-semibold text-slate-200">
                        {SERVICES_DATA.find((s) => s.id === selectedServiceId)?.title || "General Advisory Session"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-xs font-medium text-slate-400">
                        Review Timeline
                      </span>
                      <span className="font-sans text-xs font-semibold text-emerald-400">
                        Within 24 Hours
                      </span>
                    </div>
                  </div>

                  {/* Action Step Checklist */}
                  <div className="max-w-md mx-auto text-left mb-10 border-t border-white/10 pt-8 space-y-4">
                    <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider mb-2">
                      Next Step Checklist
                    </h4>
                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <LucideIcon name="Check" size={12} />
                      </div>
                      <p className="font-sans text-xs text-slate-300 leading-normal">
                        <strong>Check inbox:</strong> An automated summary and prep packet is flying your way to <span className="text-white font-medium">{formData.email}</span>.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <LucideIcon name="Check" size={12} />
                      </div>
                      <p className="font-sans text-xs text-slate-300 leading-normal">
                        <strong>Advisor allocation:</strong> Senior Advisor specialized in <strong>{SERVICES_DATA.find((s) => s.id === selectedServiceId)?.title || "General Business Strategy"}</strong> will contact you to align schedules.
                      </p>
                    </div>
                  </div>

                  {/* Reset/New booking CTA */}
                  <button
                    onClick={handleReset}
                    className="font-sans font-semibold text-sm text-blue-400 hover:text-blue-300 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
