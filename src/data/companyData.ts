import { BusinessConfig } from '@/types';

export const companyData: BusinessConfig = {
  brandName: 'ROYAL RETURNS',
  descriptor: 'Financial Solutions',
  fullBrandPresentation: 'ROYAL RETURNS | Financial Solutions',
  locationDisplay: 'Akkulam, Thiruvananthapuram, Kerala',
  fullLocation: 'Akkulam, Thiruvananthapuram, Kerala, India',
  managingDirector: {
    name: 'Mr. Anoop',
    title: 'Managing Director',
    positioningQuote: 'Leading Royal Returns with a client-first approach to transparent financial solutions.',
    photoUrl: null, // Placeholder ready for real professional photograph
  },
  phone: '+91 96332 70901',
  phoneRaw: '+919633270901',
  email: 'royalreturnsfinancialsolutions@gmail.com',
  websiteUrl: 'https://www.royalreturnsfinancialsolutions.com/',
  instagramHandle: '@royalreturnsfinancialsolutions',
  instagramUrl: null, // Configurable: Set to official URL once verified (e.g. 'https://instagram.com/...')
  whatsAppUrl: null,  // Configurable: Set to 'https://wa.me/919633270901' only if WhatsApp availability is confirmed
  whatsAppNumber: null,
  businessHours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  officeCoordinates: {
    lat: null,
    lng: null,
    embedUrl: null, // Configurable: Add Google Maps embed code when exact street/building address is verified
  },
  logoUrl: null, // Configurable: Uses styled SVG emblem default until official image asset uploaded
  enableOptionalAdvisoryServices: true, // Advisory services rendered with clear non-guarantee disclosures
};
