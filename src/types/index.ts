export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
  process?: ProcessStep[];
  stats?: Stat[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  quote: string;
  description: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "brand" | "viral" | "homepage";
  description: string;
  image: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  company: string;
  name: string;
  phone: string;
  budget: string;
  service: string;
  referral: string;
  message: string;
  privacyAgreed: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
