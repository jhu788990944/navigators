import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

const heroIllustration = "/src/assets/images/hero_illustration_1784315117502.jpg";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  // Animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const statItems = [
    { value: "98%", label: "Visa Success Rate", icon: "FileCheck" },
    { value: "Int'l", label: "Students", icon: "Users" },
    { value: "Direct", label: "Admissions", icon: "GraduationCap" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 bg-transparent flex items-center overflow-hidden"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Copy (Left side) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 font-sans text-xs font-semibold tracking-wide uppercase">
              <LucideIcon name="Sparkles" className="text-emerald-400 animate-pulse" size={13} />
              Your Global Education Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
          >
            Empowering Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 font-extrabold relative">
              Educational Journey
            </span>{" "}
            Abroad
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
          >
            Let us navigate your journey to world-class overseas education. We provide premium counseling, visa assistance, and university admissions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-2 font-sans font-semibold text-base bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-98 cursor-pointer"
            >
              Apply Now
              <LucideIcon
                name="ArrowRight"
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={18}
              />
            </button>
            <button
              onClick={() => {
                const contactEl = document.getElementById("contact");
                if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 font-sans font-semibold text-base text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg"
          >
            {statItems.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <LucideIcon name={stat.icon} size={15} />
                  <span className="font-sans font-bold text-lg sm:text-xl text-white leading-none">
                    {stat.value}
                  </span>
                </div>
                <span className="font-sans text-xs text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Graphic (Right side) */}
        <motion.div
          className="lg:col-span-5 relative w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.3 }}
        >
          {/* Accent card behind illustration */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl -z-10 opacity-70" />

          {/* Main Frame with Glassmorphism Border */}
          <div className="relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl shadow-slate-950/20 overflow-hidden w-full max-w-md lg:max-w-none aspect-[16/9] sm:aspect-square lg:aspect-[4/3]">
            <img
              src={heroIllustration}
              alt="Professional Business Advisory Illustration"
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />

            {/* Float Badge 1 */}
            <motion.div
              className="absolute bottom-6 -left-6 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg flex items-center gap-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <LucideIcon name="TrendingUp" size={20} />
              </div>
              <div>
                <p className="font-sans text-xs text-slate-400 font-medium">Strategic Success</p>
                <p className="font-sans text-sm font-bold text-white">+40% Growth</p>
              </div>
            </motion.div>

            {/* Float Badge 2 */}
            <motion.div
              className="absolute top-6 -right-4 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg flex items-center gap-3"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <LucideIcon name="ShieldCheck" size={20} />
              </div>
              <div>
                <p className="font-sans text-xs text-slate-400 font-medium">Risk Shield</p>
                <p className="font-sans text-sm font-bold text-white">Guaranteed Safe</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
