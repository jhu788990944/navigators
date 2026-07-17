import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

interface WhyChooseUsProps {
  onApplyClick: () => void;
}

export default function WhyChooseUs({ onApplyClick }: WhyChooseUsProps) {
  const points = [
    { title: "Experienced & Professional Consultants", desc: "Our certified advisors have years of experience guiding thousands of successful students." },
    { title: "Personalized University Matching", desc: "We align your academic profile, budget, and long-term career goals with the best universities." },
    { title: "High Visa Success Ratio", desc: "A proven 98% track record with up-to-date knowledge of global immigration guidelines." },
    { title: "End-to-End Application Support", desc: "From drafting your SOP and submitting university forms to securing final approvals." },
    { title: "Pre-departure Briefing & Assistance", desc: "Comprehensive briefings on lifestyle, housing, and job search tactics in your new destination." }
  ];

  const destinations = [
    {
      country: "United Kingdom",
      tagline: "Fast-track Visas",
      desc: "Get admissions into leading Russell Group universities with high-priority visa options.",
      color: "from-blue-600 to-indigo-800"
    },
    {
      country: "Australia",
      tagline: "High Visa Ratio",
      desc: "Top-tier Australian Group of Eight universities with outstanding post-study work opportunities.",
      color: "from-emerald-600 to-teal-800"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-slate-950/40 relative border-t border-b border-white/5">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Why Choose Us Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-sans text-xs font-semibold tracking-wide uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-6">
                Your Trusted Guide to Global Education
              </h2>
              <p className="font-sans text-base text-slate-300 leading-relaxed">
                At The Navigators Consultants, we understand that studying abroad is a life-changing decision. Our expert team is dedicated to providing transparent, reliable, and personalized guidance to help you achieve your academic dreams.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-5">
              {points.map((point, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <LucideIcon name="Check" size={14} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {point.title}
                    </h4>
                    <p className="font-sans text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Promotion Card (Right Column) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 shadow-2xl overflow-hidden group"
            >
              {/* Highlight gradient borders */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />

              {/* Deadline Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-sans text-xs font-semibold uppercase tracking-wider">
                  Special Promotion 2026
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 font-sans text-[10px] font-bold uppercase tracking-wider animate-pulse">
                  Limited Seats!
                </span>
              </div>

              <h3 className="font-sans font-black text-2xl text-white mb-3">
                Apply for Fall 2026 Intake Now!
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed mb-8">
                Don't miss the opportunity to secure your spot at top global universities. Start your application today and take advantage of our exclusive promotional offers.
              </p>

              {/* Offers List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all">
                  <LucideIcon name="Gift" className="text-emerald-400" size={18} />
                  <span className="font-sans text-sm font-semibold text-slate-200">No Application Fees</span>
                </div>
                <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all">
                  <LucideIcon name="Zap" className="text-emerald-400" size={18} />
                  <span className="font-sans text-sm font-semibold text-slate-200">Fast-Track Visa Processing</span>
                </div>
                <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all">
                  <LucideIcon name="MessageSquare" className="text-emerald-400" size={18} />
                  <span className="font-sans text-sm font-semibold text-slate-200">100% Free Consultation</span>
                </div>
                <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all">
                  <LucideIcon name="Award" className="text-emerald-400" size={18} />
                  <span className="font-sans text-sm font-semibold text-slate-200">Guaranteed Scholarship Assessment</span>
                </div>
              </div>

              {/* Apply Button & Deadline */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <button
                  onClick={onApplyClick}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-bold text-center rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-98 cursor-pointer block"
                >
                  Apply Now
                </button>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                  <LucideIcon name="Calendar" size={14} className="text-emerald-400" />
                  <span>Deadline: <strong className="text-slate-200">30 Jun 2026</strong></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Popular Destinations Section */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-sans text-xs font-semibold uppercase tracking-wider mb-3">
              Dream Destination
            </span>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight">
              Popular Destinations
            </h3>
            <p className="font-sans text-sm text-slate-400 mt-2">
              Explore your study and migration options in the world's most welcoming education hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {destinations.map((dest, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                key={idx}
                className="relative p-8 rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 group"
              >
                {/* Background glow matching destination color */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-sans font-black text-2xl text-white group-hover:text-blue-300 transition-colors">
                      {dest.country}
                    </h4>
                    <span className="inline-block mt-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-sans text-xs font-bold tracking-wider uppercase">
                      {dest.tagline}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                    <LucideIcon name={dest.country === "United Kingdom" ? "Milestone" : "Navigation"} size={22} />
                  </div>
                </div>

                <p className="font-sans text-sm text-slate-400 leading-relaxed">
                  {dest.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={onApplyClick}
                    className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none"
                  >
                    Start Admission Assessment
                    <LucideIcon name="ChevronRight" size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
