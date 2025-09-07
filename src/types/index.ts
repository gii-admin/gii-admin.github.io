export type Language = 'en' | 'ko';

export interface TranslatedContent {
  en: string;
  ko: string;
}

export interface NewsItem {
  id: string;
  title: TranslatedContent;
  summary: TranslatedContent;
  content: TranslatedContent;
  date: string;
  link?: string;
  competition?: string;
}

export interface TeamMember {
  name: TranslatedContent;
  role: TranslatedContent;
  location: TranslatedContent;
}

export interface Project {
  id: string;
  name: string;
  description: TranslatedContent;
  technologies: string[];
  videoUrl?: string;
  imageUrl?: string;
}