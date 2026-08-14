export interface EligibleCourse {
  id: string;
  emoji: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  badge: string;
  checkoutUrl: string;
  hours: string;
  rating: string;
  studentsCount: string;
  highlightColor: 'violet' | 'emerald' | 'amber';
  featured?: boolean;
  shortDescription: string;
  fullDescription: string;
  certificateTitle: string;
  targetAudience: string;
  learningOutcomes: string[];
  modulesList: {
    title: string;
    description: string;
  }[];
  techniqueCategories?: {
    categoryName: string;
    description?: string;
    techniques: string[];
  }[];
  includedBonuses: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  highlight: string;
  verified: boolean;
  courseTaken: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
