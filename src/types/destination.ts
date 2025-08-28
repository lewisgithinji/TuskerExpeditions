export interface Destination {
  id: string;
  name: string;
  country: 'Kenya' | 'Tanzania' | 'Uganda';
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  featuredImage: string;
  activities: Activity[];
  bestTimeToVisit: string[];
  climate: string;
  highlights: string[];
  wildlife: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  coordinates: {
    latitude: number;
    longitude: number;
  };
  accommodation: AccommodationOption[];
  packages: string[]; // Package IDs
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  price?: number;
  included: string[];
}

export interface AccommodationOption {
  id: string;
  name: string;
  type: 'Lodge' | 'Camp' | 'Hotel' | 'Tented Camp' | 'Tree House';
  category: 'Luxury' | 'Mid-Range' | 'Budget' | 'Eco-Friendly';
  pricePerNight: number;
  amenities: string[];
  images: string[];
  rating: number;
}