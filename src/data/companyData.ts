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
    positioningQuote: null, // Strictly null: no invented quote used unless verified by business owner
    photoUrl: null,         // Strictly null: clean neutral placeholder used until real photo supplied
  },
  phone: '+91 96332 70901',
  phoneRaw: '+919633270901',
  email: 'royalreturnsfinancialsolutions@gmail.com',
  websiteUrl: 'https://www.royalreturnsfinancialsolutions.com/',
  instagramHandle: '@royalreturnsfinancialsolutions',
  instagramUrl: null, // Configurable: Set to official URL once verified
  whatsAppUrl: null,  // Configurable: Set to official URL once verified
  whatsAppNumber: null,
  businessHours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  officeCoordinates: {
    lat: null,
    lng: null,
    embedUrl: null, // Configurable: Add Google Maps embed code when exact street address verified
  },
  logoUrl: null, // Configurable: Uses styled typographic identity until logo asset uploaded
  enableOptionalAdvisoryServices: true,
};
