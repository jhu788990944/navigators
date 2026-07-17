export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  rating: number;
  feedback: string;
  avatar: string;
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  message: string;
}
