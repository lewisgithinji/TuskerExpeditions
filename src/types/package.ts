export interface Package {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: PackageCategory;
  duration: number;
  maxGuests: number;
  minGuests: number;
  basePrice: number;
  images: string[];
  featuredImage: string;
  destinations: string[]; // Destination IDs
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  bestSeason: string[];
  highlights: string[];
  availableDates: DateRange[];
  isPopular: boolean;
  isFeatured: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: ('Breakfast' | 'Lunch' | 'Dinner')[];
  accommodation?: string;
  transportation?: string;
  highlights: string[];
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
  priceMultiplier: number; // 1.0 = base price, 1.2 = 20% premium
  availableSpots: number;
}

export type PackageCategory = 
  | 'Safari Tours'
  | 'Cultural Tours'
  | 'Adventure Tours'
  | 'Luxury Expeditions'
  | 'Budget Safaris'
  | 'Custom Packages'
  | 'Photography Tours'
  | 'Honeymoon Packages'
  | 'Family Adventures';