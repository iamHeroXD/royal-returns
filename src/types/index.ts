export type ServiceCategory = 'property' | 'loans' | 'savings' | 'advisory';

export interface ManagingDirectorInfo {
  name: string;
  title: string;
  positioningQuote: string | null; // Configurable: null by default if no verified quote exists
  photoUrl: string | null;         // Configurable: null by default unless real photograph supplied
}

export interface OfficeCoordinates {
  lat: number | null;
  lng: number | null;
  embedUrl: string | null;
}

export interface BusinessConfig {
  brandName: string;
  descriptor: string;
  fullBrandPresentation: string;
  locationDisplay: string;
  fullLocation: string;
  managingDirector: ManagingDirectorInfo;
  phone: string;
  phoneRaw: string;
  email: string;
  websiteUrl: string;
  instagramHandle: string;
  instagramUrl: string | null;
  whatsAppUrl: string | null;
  whatsAppNumber: string | null;
  businessHours: string;
  officeCoordinates: OfficeCoordinates;
  logoUrl: string | null;
  enableOptionalAdvisoryServices: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDescription: string;
  iconName: string;
  enabled: boolean;   // Controls whether service appears in nav, explorer, sitemap
  verified: boolean;  // Controls whether service has full business verification
  featured: boolean;  // Controls whether service is highlighted on homepage
  isAdvisoryConfirmationRequired?: boolean;
  overview: string;
  useCases: string[];
  eligibilityFactors: string[];
  typicalDocuments: string[];
  processSteps: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  serviceSlug: string;
  loanAmount: string;
  employmentType: string;
  preferredContactMethod: string;
  message: string;
  consentDisclaimer: boolean;
}

export type LeadFormData = ContactFormData;
