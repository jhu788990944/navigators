import { Service, Testimonial, ContactDetails } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "study-visa-assistance",
    title: "Study Visa Assistance",
    description: "Expert guidance through the entire visa application process with high success rates.",
    iconName: "FileCheck"
  },
  {
    id: "university-selection",
    title: "University Selection",
    description: "Personalized matching with top global universities based on your academic profile.",
    iconName: "GraduationCap"
  },
  {
    id: "pre-departure-support",
    title: "Pre-Departure Support",
    description: "Comprehensive briefing to prepare you for your new academic and cultural environment.",
    iconName: "Compass"
  },
  {
    id: "scholarship-guidance",
    title: "Scholarship Guidance",
    description: "Assistance in finding and applying for available international scholarships.",
    iconName: "Award"
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    description: "Professional advice aligning your study choices with long-term career goals.",
    iconName: "Briefcase"
  },
  {
    id: "global-opportunities",
    title: "Global Opportunities",
    description: "Access to programs in UK, USA, Australia, Canada, Europe, and more.",
    iconName: "Globe"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Ahmed",
    position: "University of Manchester, UK",
    rating: 5,
    feedback: "The Navigators Consultants made my dream of studying in the UK a reality. Their team guided me through every step, from selecting the right university to the final visa approval.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t2",
    name: "Muhammad Ali",
    position: "University of Melbourne, Australia",
    rating: 5,
    feedback: "Outstanding experience! From IELTS prep suggestions to getting admission in Australia, they handled everything. Their 98% visa success rate is absolutely true.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t3",
    name: "Zainab Malik",
    position: "University of Toronto, Canada",
    rating: 5,
    feedback: "I was confused about Canada's visa process, but their detailed guidance cleared all my doubts. Highly recommend them for hassle-free visa processing!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t4",
    name: "Hamza Khan",
    position: "Swinburne University, Australia",
    rating: 5,
    feedback: "They helped me secure a 25% scholarship and guided me perfectly on pre-departure briefings. Professional staff and very transparent services.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const CONTACT_DATA: ContactDetails = {
  address: "Ali Akbar Plaza, Plot No. 90, Block A, Phase 2 DHA, Islamabad, Pakistan",
  phone: "03255276689",
  email: "thenavigatorsconsultants@gmail.com",
  hours: "Mon - Sat: 10:00 AM - 6:00 PM\nSunday: Closed"
};
