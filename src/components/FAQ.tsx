import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What services does The Navigators Consultants offer?",
    answer: "We provide comprehensive, end-to-end guidance for international education. This includes professional counseling, course and university matching, scholarship assistance, statement of purpose (SOP) reviews, standard university application submissions, student visa documentation, mock visa interviews, and vital pre-departure briefings."
  },
  {
    question: "How do I select the best study destination and university for my profile?",
    answer: "Our certified advisors conduct a thoroughly personalized assessment of your academic record, overall budget, English language test results (such as IELTS or PTE), and future career goals. Based on this, we formulate a targeted shortlist of top-tier universities and courses in major destinations like the UK, Australia, Canada, USA, and Europe."
  },
  {
    question: "Do you assist students in securing scholarships?",
    answer: "Yes, scholarship procurement is one of our key areas of expertise. We match your academic credentials with active merit-based, region-specific, and university-funded scholarships. We also guide you on how to write compelling scholarship statements and compile high-impact applications to maximize your chances of success."
  },
  {
    question: "What is the typical timeline for applying to an international university?",
    answer: "We strongly advise starting your preparation 8 to 12 months before your desired intake. This allows comfortable time to prepare for language proficiency exams, compile your academic documents, draft recommendation letters, secure university offers, arrange your financial evidence, and complete the visa application process."
  },
  {
    question: "How long does the student visa application process take?",
    answer: "Visa processing times vary significantly by country and seasonal volume. Generally, UK visa decisions take 3 to 4 weeks, Australia takes 4 to 8 weeks, Canada takes 6 to 12 weeks, and USA visa interviews yield on-the-spot decisions. Our compliance experts help you prepare flawless application packets to avoid processing delays."
  },
  {
    question: "Can I work part-time while studying abroad?",
    answer: "Yes, most major destinations permit international students to work part-time. Typically, you can work up to 20 hours per week during active academic semesters and full-time during official vacation periods. This provides a great opportunity to offset living costs and gain valuable international work experience."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-emerald-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-sans text-xs font-semibold tracking-wide uppercase mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Navigating Your Common Queries
          </h2>
          <p className="font-sans text-base text-slate-400 leading-relaxed">
            Everything you need to know about starting your academic journey overseas. Can't find what you are looking for? Reach out directly to our support team.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-md rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-500/30 bg-white/[0.07] shadow-lg shadow-emerald-500/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span
                    className={`font-sans font-bold text-base md:text-lg transition-colors duration-300 ${
                      isOpen ? "text-emerald-400" : "text-white group-hover:text-emerald-400"
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isOpen ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-slate-300"
                    }`}
                  >
                    <LucideIcon name="ChevronDown" size={16} />
                  </motion.div>
                </button>

                {/* Animated content wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 font-sans text-sm md:text-base leading-relaxed border-t border-white/5 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to Action Support Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-sans font-bold text-base text-white mb-1">
              Still Have Questions?
            </h4>
            <p className="font-sans text-xs text-slate-400">
              Our professional academic consultants are ready to assist you personally.
            </p>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-98"
          >
            Consult with an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
