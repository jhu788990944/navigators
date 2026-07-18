import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

interface AchievementItem {
  metric: string;
  label: string;
  description: string;
  iconName: string;
  colorClass: string;
}

const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    metric: "12,000+",
    label: "Students Placed",
    description: "Successfully enrolled in leading international universities worldwide.",
    iconName: "Users",
    colorClass: "from-blue-500 to-indigo-500"
  },
  {
    metric: "98.5%",
    label: "Visa Success Rate",
    description: "High approval rate powered by certified compliance and document audits.",
    iconName: "FileCheck",
    colorClass: "from-emerald-400 to-teal-500"
  },
  {
    metric: "450+",
    label: "Partner Universities",
    description: "Direct tie-ups and official partnerships with top global institutions.",
    iconName: "GraduationCap",
    colorClass: "from-purple-500 to-pink-500"
  },
  {
    metric: "15+",
    label: "Years of Excellence",
    description: "A trusted legacy of guiding student careers with extreme transparency.",
    iconName: "Award",
    colorClass: "from-amber-400 to-orange-500"
  }
];

export default function KeyAchievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="key-achievements" className="py-20 md:py-28 bg-slate-950/20 relative border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-emerald-600/[0.02] blur-3xl -z-10 pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-sans text-xs font-semibold tracking-wide uppercase mb-4">
            Key Accomplishments
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Our Legacy in Numbers
          </h2>
          <p className="font-sans text-base text-slate-400 leading-relaxed">
            A snapshot of our commitment to student success, secure admission tracks, and unparalleled international immigration support.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-full overflow-hidden shadow-xl transition-all duration-300"
            >
              {/* Corner ambient light */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/[0.02] group-hover:bg-white/[0.06] transition-all duration-500 blur-xl" />

              <div>
                {/* Metric Icon Container */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.colorClass} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center text-white">
                      <LucideIcon name={item.iconName} size={22} />
                    </div>
                  </div>
                  {/* Decorative number counter tag */}
                  <span className="font-mono text-xs font-semibold text-slate-600 group-hover:text-emerald-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Big Metric Display */}
                <h3 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight mb-2 select-none">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.colorClass}`}>
                    {item.metric}
                  </span>
                </h3>

                {/* Metric Label */}
                <h4 className="font-sans font-bold text-lg text-slate-200 mb-2 group-hover:text-white transition-colors">
                  {item.label}
                </h4>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-slate-400 leading-relaxed mt-2">
                {item.description}
              </p>

              {/* Decorative bottom gradient highlight line */}
              <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r ${item.colorClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
