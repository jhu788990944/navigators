import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const ROADMAP_DATA: Record<string, { steps: { title: string; desc: string }[] }> = {
  "study-visa-assistance": {
    steps: [
      { title: "Document Checklist & Verification", desc: "Detailed audit of academic degrees, financial statements, and personal documents to ensure compliance." },
      { title: "Visa Interview Prep & Simulation", desc: "One-on-one mock interviews with our senior visa officers to boost confidence and resolve potential queries." },
      { title: "Application Submission & Follow-up", desc: "Accurate submission of your visa application with real-time tracking and updates till approval." }
    ]
  },
  "university-selection": {
    steps: [
      { title: "Profile Evaluation", desc: "Assessing your academic record, GPA, test scores (IELTS/PTE), and career goals." },
      { title: "Course & Country Shortlisting", desc: "Matching your profile with ideal university programs in target destinations like UK, Australia, Canada." },
      { title: "Admission Application", desc: "Direct streamlined applications through our official partnership channels for quick offer letters." }
    ]
  },
  "pre-departure-support": {
    steps: [
      { title: "Accommodation & Flight Guidance", desc: "Helping you secure affordable on/off-campus student housing and flight bookings." },
      { title: "Health Insurance & Financial Prep", desc: "Guidance on mandatory overseas student health covers and foreign exchange setting." },
      { title: "Cultural & Academic Briefing", desc: "Interactive session about living and studying in your destination, student job rules, and university culture." }
    ]
  },
  "scholarship-guidance": {
    steps: [
      { title: "Scholarship Identification", desc: "Sourcing merit-based, state-funded, and university-specific partial & full scholarships." },
      { title: "SOP & Essay Fine-Tuning", desc: "Expert editing support for Statement of Purpose (SOP), recommendation letters, and scholarship essays." },
      { title: "Scholarship Application", desc: "Timely and professional submission to maximize approval chances." }
    ]
  },
  "career-counseling": {
    steps: [
      { title: "Aptitude & Goal Alignment", desc: "Understanding your long-term career aspirations and identifying high-growth fields." },
      { title: "Market Feasibility Analysis", desc: "Insights into post-study work visa rights, regional hiring trends, and job opportunities." },
      { title: "Strategic Roadmap", desc: "Selecting programs that offer maximum industrial placement, internship semesters, and career prospects." }
    ]
  },
  "global-opportunities": {
    steps: [
      { title: "Destination Matchmaker", desc: "Comparing pathways across UK, USA, Australia, Canada, and Europe based on budget and goals." },
      { title: "Credit Transfer & Eligibility Audit", desc: "Checking eligibility for credit transfers and advanced standing in global universities." },
      { title: "Direct Enrollment", desc: "Direct liaison with global admission divisions to secure fast-track approvals." }
    ]
  }
};

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string | null>(null);

  // Animation container for staggered entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-transparent relative">
      {/* Background blobs */}
      <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-600/5 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-sans text-xs font-semibold tracking-wide uppercase mb-4">
            Our Premium Services
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Comprehensive Support for Your Education
          </h2>
          <p className="font-sans text-base text-slate-400 leading-relaxed mb-3">
            We provide professional end-to-end assistance to ensure a flawless journey from your first call to your arrival at your dream global university.
          </p>
          <p className="font-sans text-xs text-blue-400 font-semibold tracking-wider uppercase animate-pulse">
            Click any service card to view our detailed working roadmap
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES_DATA.map((service: Service) => {
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedRoadmapId(service.id)}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                {/* Decorative glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/[0.03] group-hover:to-emerald-500/[0.03] transition-colors duration-300 -z-10" />

                {/* Top Corner Decor Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full -z-10" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/10 text-blue-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-inner">
                  <LucideIcon name={service.iconName} size={22} />
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-sans font-semibold text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                    How it works
                    <LucideIcon
                      name="ArrowRight"
                      size={14}
                      className="group-hover:translate-x-1.5 transition-transform"
                    />
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500 group-hover:text-blue-400/60 transition-colors">
                    Admissions
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Roadmap Interactive Modal */}
      <AnimatePresence>
        {selectedRoadmapId && (() => {
          const service = SERVICES_DATA.find(s => s.id === selectedRoadmapId);
          const roadmap = ROADMAP_DATA[selectedRoadmapId];
          if (!service || !roadmap) return null;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedRoadmapId(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header info */}
                <div className="flex items-start justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <LucideIcon name={service.iconName} size={24} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-semibold tracking-wider text-emerald-400 uppercase">Working Roadmap</h4>
                      <h3 className="font-sans font-extrabold text-2xl text-white">{service.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedRoadmapId(null)}
                    className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                  >
                    <LucideIcon name="X" size={20} />
                  </button>
                </div>

                {/* Stepper Timeline */}
                <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8">
                  {roadmap.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Step Number Dot */}
                      <div className="absolute -left-[41px] md:-left-[49px] top-0.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-400 text-emerald-400 font-sans text-sm font-bold flex items-center justify-center shadow-lg">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-lg text-white mb-1.5">{step.title}</h4>
                        <p className="font-sans text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Inside Modal */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <span className="font-sans text-xs text-slate-400 text-center sm:text-left">
                    Align your study goals with our premium admissions counseling panel.
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedRoadmapId(null);
                        onSelectService(service.id);
                      }}
                      className="font-sans text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-98 cursor-pointer"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
