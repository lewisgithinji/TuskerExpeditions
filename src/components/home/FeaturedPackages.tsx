'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Clock, Users, MapPin, Calendar, ArrowRight, Heart } from 'lucide-react';

interface PackageCard {
  id: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  highlights: string[];
  badge?: string;
  available: boolean;
}

const featuredPackages: PackageCard[] = [
  {
    id: '1',
    title: 'Classic Big Five Safari',
    location: 'Masai Mara & Amboseli',
    duration: '7 days',
    groupSize: '2-8 people',
    price: 2450,
    originalPrice: 2800,
    rating: 4.9,
    reviewCount: 124,
    image: '/images/masai-mara-hero.jpg',
    highlights: ['Big Five Encounters', 'Luxury Tented Camps', 'Expert Guide', 'All Meals Included'],
    badge: 'Most Popular',
    available: true,
  },
  {
    id: '2',
    title: 'Great Migration Experience',
    location: 'Serengeti & Ngorongoro',
    duration: '9 days',
    groupSize: '4-12 people',
    price: 3200,
    rating: 5.0,
    reviewCount: 89,
    image: '/images/serengeti-migration.jpg',
    highlights: ['Migration Crossing', 'Crater Exploration', 'Cultural Visit', 'Photography Focus'],
    badge: 'Limited Season',
    available: true,
  },
  {
    id: '3',
    title: 'Mountain Gorilla Adventure',
    location: 'Bwindi, Uganda',
    duration: '5 days',
    groupSize: '2-6 people',
    price: 1950,
    rating: 4.8,
    reviewCount: 67,
    image: '/images/bwindi-gorillas.jpg',
    highlights: ['Gorilla Permits Included', 'Forest Lodge Stay', 'Local Community Visit', 'Bird Watching'],
    available: true,
  },
  {
    id: '4',
    title: 'Luxury Honeymoon Safari',
    location: 'Samburu & Laikipia',
    duration: '8 days',
    groupSize: '2 people',
    price: 4500,
    rating: 4.9,
    reviewCount: 45,
    image: '/images/samburu-luxury.jpg',
    highlights: ['Private Vehicle', 'Luxury Lodges', 'Romantic Dinners', 'Spa Treatments'],
    badge: 'Exclusive',
    available: false,
  },
];

export function FeaturedPackages() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (packageId: string) => {
    setFavorites(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-savanna-gold/10 border border-savanna-gold/20 mb-6">
            <span className="text-savanna-gold font-medium text-sm">
              🌟 Handpicked Experiences
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Featured Safari Packages
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Carefully curated expeditions that showcase the best of East African wildlife, 
            culture, and landscapes. Each package includes expert guides, premium accommodations, 
            and unforgettable experiences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <div key={pkg.id} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder for package image */}
                <div className="w-full h-full bg-gradient-to-br from-safari-green via-deep-forest to-savanna-gold" />
                
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-vibrant-blue text-white text-sm font-semibold rounded-full">
                    {pkg.badge}
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(pkg.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(pkg.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>

                {/* Availability Overlay */}
                {!pkg.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold">Fully Booked</p>
                      <p className="text-sm">Next available: March 2025</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-savanna-gold fill-current" />
                    <span className="font-semibold text-sm">{pkg.rating}</span>
                    <span className="text-muted-foreground text-sm">({pkg.reviewCount})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>

                {/* Package Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {pkg.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{pkg.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {pkg.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">
                          ${pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-foreground">
                        ${pkg.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm">per person</div>
                  </div>
                  
                  <Link
                    href={`/packages/safari-tours/${pkg.id}`}
                    className={`group/btn flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      pkg.available
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {pkg.available ? 'View Details' : 'Waitlist'}
                    {pkg.available && (
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-savanna-gold to-sunset-orange text-white rounded-lg hover:from-savanna-gold/90 hover:to-sunset-orange/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Explore All Packages
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <p className="text-muted-foreground text-sm mt-4">
            Can&apos;t find what you&apos;re looking for? 
            <Link href="/packages/custom-packages/ai-planner" className="text-primary hover:underline ml-1">
              Create a custom itinerary
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}