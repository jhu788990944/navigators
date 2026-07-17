import LucideIcon from "./LucideIcon";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/40 text-white border-t border-white/10 backdrop-blur-lg">
      {/* Top Footer Segment */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand segment (Col span 5) */}
        <div className="md:col-span-5 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
              <LucideIcon name="Compass" size={20} className="text-slate-950" />
            </div>
            <div>
              <span className="font-sans font-black text-xl tracking-tight text-white block leading-tight">
                The Navigators
              </span>
              <span className="font-sans font-bold text-[10px] tracking-widest uppercase text-emerald-400 block -mt-0.5">
                Consultants
              </span>
            </div>
          </div>
          <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
            Your trusted Global Education Partner. Expertly navigating student visas, global university matching, scholarship procurement, and pre-departure setups for global academic excellence.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://github.com/jhu788990944/jhu788990944-navigators"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-300 group cursor-pointer"
              title="Follow us on GitHub"
            >
              <LucideIcon name="Github" size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links (Col span 3) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-sans font-bold text-sm text-emerald-400 uppercase tracking-widest">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 font-sans text-sm text-slate-300">
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "Why Choose Us", id: "why-choose-us" },
              { label: "Testimonials", id: "testimonials" },
              { label: "Contact Us", id: "contact" }
            ].map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    const el = document.getElementById(section.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block text-left"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Support Links (Col span 4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-sans font-bold text-sm text-emerald-400 uppercase tracking-widest">
            Contact Support
          </h4>
          <p className="font-sans text-sm text-slate-300 leading-relaxed">
            Ready to explore your global options? Get in touch with our counselors or schedule an in-person meeting.
          </p>
          <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
            <span className="flex items-start gap-2.5">
              <LucideIcon name="MapPin" size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs leading-normal">
                Ali Akbar Plaza, Plot No. 90, Block A, Phase 2 DHA, Islamabad, Pakistan
              </span>
            </span>
            <span className="flex items-center gap-2.5">
              <LucideIcon name="Mail" size={16} className="text-emerald-400 shrink-0" />
              <a href="mailto:thenavigatorsconsultants@gmail.com" className="hover:text-white transition-colors">
                thenavigatorsconsultants@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-2.5">
              <LucideIcon name="Phone" size={16} className="text-emerald-400 shrink-0" />
              <a href="tel:03255276689" className="hover:text-white transition-colors">
                03255276689
              </a>
            </span>
            <span className="flex items-center gap-2.5">
              <LucideIcon name="MessageCircle" size={16} className="text-emerald-400 shrink-0" />
              <a href="https://wa.me/923255276689" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
                +92 325 5276689 (WhatsApp)
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Legal/Social Strip */}
      <div className="border-t border-white/5 bg-slate-950/80 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left">
            <p className="font-sans text-xs text-slate-500">
              &copy; {currentYear} The Navigators Consultants. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="https://github.com/jhu788990944/jhu788990944-navigators"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start gap-1.5"
            >
              <LucideIcon name="Github" size={13} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
              jhu788990944-navigators
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 font-sans text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 focus:outline-none cursor-pointer"
          >
            Back to Top
            <LucideIcon name="ArrowUp" size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
