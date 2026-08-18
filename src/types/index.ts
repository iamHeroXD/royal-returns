export type ServiceCategory = 'loans' | 'property' | 'savings' | 'advisory';

export interface ManagingDirectorInfo {
  name: string;
  title: string;
  positioningQuote: string;
  photoUrl: string | null;
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
  instagramUrl: string | null; // Configurable: null unless verified
  whatsAppUrl: string | null;  // Configurable: null unless verified
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
  isAdvisoryConfirmationRequired?: boolean;
  isActive?: boolean;
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

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  serviceInterested: string;
  requirementAmount: string;
  employmentType: string;
  preferredContactMethod: string;
  message: string;
  disclaimerAccepted: boolean;
}
