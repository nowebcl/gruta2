export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  galleryImages: string[];
  description: string;
  area: string;
  leadArchitect: string;
  awards?: string[];
  features?: string[];
  videoUrl?: string;
}

export interface ApproachPillar {
  number: string;
  title: string;
  description: string;
  quote?: string;
}

export interface JournalArticle {
  id: string;
  date: string;
  category: 'Innovación' | 'Técnica' | 'Sostenibilidad' | 'Maestranza';
  title: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
}

export interface StudioStat {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  timeAgo: string;
  rating: number;
  content: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  schedule?: string;
}
