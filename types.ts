
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  car: string;
  text: string;
  rating: number;
}

export interface Comparison {
  id: string;
  label: string;
  beforeImg: string;
  afterImg: string;
}
