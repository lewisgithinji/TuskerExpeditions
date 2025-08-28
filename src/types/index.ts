export * from './destination';
export * from './booking';
export * from './package';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  nationality?: string;
  dateOfBirth?: Date;
  preferences?: TripPreferences;
  bookings: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  packageId?: string;
  destinationId?: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  tripDate: Date;
  createdAt: Date;
  isVerified: boolean;
  helpful: number;
}

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  capacity: number;
  features: string[];
  images: string[];
  pricePerDay: number;
  availability: DateRange[];
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Manual' | 'Automatic';
  airConditioning: boolean;
  fourWheelDrive: boolean;
}

export type VehicleType = 
  | 'Safari Vehicle'
  | 'Luxury SUV'
  | 'Minivan'
  | 'Bus'
  | 'Land Cruiser'
  | 'Jeep'
  | 'Helicopter'
  | 'Light Aircraft';

export interface NavigationItem {
  title: string;
  href?: string;
  items?: NavigationItem[];
  description?: string;
  featured?: boolean;
}

// Re-export types from other modules
export type { TripPreferences } from './booking';
export type { DateRange } from './package';