export interface Booking {
  id: string;
  userId?: string;
  packageId: string;
  customItinerary?: CustomItinerary;
  startDate: Date;
  endDate: Date;
  guests: GuestInfo[];
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
  specialRequests?: string;
  accommodations: BookedAccommodation[];
  transportation: BookedTransportation[];
}

export interface GuestInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: Date;
  nationality: string;
  passportNumber?: string;
  dietaryRequirements?: string;
  medicalConditions?: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface CustomItinerary {
  destinations: string[];
  activities: string[];
  duration: number;
  preferences: TripPreferences;
  estimatedPrice: number;
}

export interface TripPreferences {
  budget: 'Budget' | 'Mid-Range' | 'Luxury' | 'Ultra-Luxury';
  groupSize: number;
  travelStyle: 'Adventure' | 'Relaxed' | 'Cultural' | 'Wildlife' | 'Photography';
  accommodationType: 'Lodge' | 'Camp' | 'Hotel' | 'Mixed';
  activityLevel: 'Low' | 'Moderate' | 'High';
  interests: string[];
  specialNeeds?: string[];
}

export interface BookedAccommodation {
  accommodationId: string;
  checkIn: Date;
  checkOut: Date;
  roomType: string;
  guests: number;
  pricePerNight: number;
}

export interface BookedTransportation {
  vehicleId: string;
  pickupDate: Date;
  dropoffDate: Date;
  pickupLocation: string;
  dropoffLocation: string;
  pricePerDay: number;
}

export type BookingStatus = 
  | 'draft'
  | 'pending'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'refunded';

export type PaymentStatus = 
  | 'pending'
  | 'partially_paid'
  | 'paid'
  | 'failed'
  | 'refunded';