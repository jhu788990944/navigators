import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState("");

  const handleBookClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    // Smooth scroll down to the booking form
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 antialiased selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      {/* Absolute Ambient Glow Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[130px] opacity-40"></div>
      </div>

      <div className="relative z-10">
        {/* Dynamic Header */}
        <Navbar onBookClick={handleBookClick} />

        {/* Main Single Page Sections */}
        <main>
          {/* Section 1: Home (Hero) */}
          <Hero onBookClick={handleBookClick} />

          {/* Section 2: Services */}
          <Services onSelectService={handleSelectService} />

          {/* Section 2.5: Why Choose Us & Promotions */}
          <WhyChooseUs onApplyClick={handleBookClick} />

          {/* Section 2.8: FAQ Section */}
          <FAQ />

          {/* Section 3: Testimonials */}
          <Testimonials />

          {/* Section 4: Contact & Booking */}
          <Contact
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />
        </main>

        {/* Elegant Footer with Brand Sign-off */}
        <Footer />
      </div>
    </div>
  );
}
