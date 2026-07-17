import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";
import { TESTIMONIALS_DATA } from "../data";
import { Testimonial } from "../types";

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 15 },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-10 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-10 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Quote watermark */}
        <div className="absolute top-0 right-10 text-white/[0.03] font-serif text-[12rem] leading-none select-none pointer-events-none -translate-y-12">
          &ldquo;
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-sans text-xs font-semibold tracking-wide uppercase mb-4">
            Success Stories
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            What Our Students Say
          </h2>
          <p className="font-sans text-base text-slate-400 leading-relaxed">
            Discover the experiences of our students who successfully embarked on their educational journeys at top-tier international universities.
          </p>
        </div>

        {/* Grid of Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {TESTIMONIALS_DATA.map((testimonial: Testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col justify-between relative hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl"
            >
              <div>
                {/* Stars Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LucideIcon
                      key={index}
                      name="Star"
                      className={`w-4 h-4 ${
                        index < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-white/10"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback text */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/10 shadow-sm"
                />
                <div className="min-w-0">
                  <h4 className="font-sans font-bold text-sm text-white truncate">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 truncate font-medium">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
