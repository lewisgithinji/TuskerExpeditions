'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, MapPin, Play, Search } from 'lucide-react';

export function HeroSection() {
  const [quickBooking, setQuickBooking] = useState({
    destination: '',
    dates: '',
    guests: '2',
  });

  const popularDestinations = [
    'Masai Mara, Kenya',
    'Serengeti, Tanzania',
    'Amboseli, Kenya',
    'Ngorongoro, Tanzania',
    'Bwindi, Uganda',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/90 via-deep-forest/70 to-deep-forest/90 z-10" />
        {/* Placeholder for video background - replace with actual video */}
        <div className="w-full h-full bg-gradient-to-br from-safari-green via-deep-forest to-savanna-gold opacity-80" />
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10 z-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-savanna-gold rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-sunset-orange rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-20 w-16 h-16 border border-warm-ivory rounded-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-savanna-gold/20 border border-savanna-gold/30 mb-8">
            <span className="text-savanna-gold font-medium text-sm">
              🏆 Kenya&apos;s #1 Rated Safari Operator 2024
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-warm-ivory mb-6 leading-tight">
            Discover the Soul of 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-savanna-gold to-sunset-orange">
              {' '}East Africa
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-warm-ivory/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience authentic safari adventures, cultural immersion, and breathtaking wildlife 
            encounters across Kenya, Tanzania, and Uganda with our expert local guides.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/packages/custom-packages/ai-planner"
              className="group relative px-8 py-4 bg-vibrant-blue text-white rounded-lg hover:bg-vibrant-blue/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                🤖 Plan Your Perfect Safari
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            
            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-warm-ivory text-warm-ivory rounded-lg hover:bg-warm-ivory hover:text-deep-forest transition-all duration-300 font-semibold text-lg">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-savanna-gold mb-2">500+</div>
              <div className="text-warm-ivory/80">Safaris Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-savanna-gold mb-2">15+</div>
              <div className="text-warm-ivory/80">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-savanna-gold mb-2">98%</div>
              <div className="text-warm-ivory/80">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-savanna-gold mb-2">24/7</div>
              <div className="text-warm-ivory/80">Support</div>
            </div>
          </div>

          {/* Quick Booking Widget */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-warm-ivory mb-6 text-center">
              Start Planning Your Adventure
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Destination */}
              <div className="relative">
                <label className="block text-warm-ivory/80 text-sm font-medium mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    list="destinations"
                    value={quickBooking.destination}
                    onChange={(e) => setQuickBooking(prev => ({ ...prev, destination: e.target.value }))}
                    placeholder="Where do you want to go?"
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-warm-ivory placeholder-warm-ivory/60 focus:outline-none focus:border-savanna-gold focus:ring-2 focus:ring-savanna-gold/20"
                  />
                  <datalist id="destinations">
                    {popularDestinations.map((dest) => (
                      <option key={dest} value={dest} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Dates */}
              <div className="relative">
                <label className="block text-warm-ivory/80 text-sm font-medium mb-2">
                  Travel Dates
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={quickBooking.dates}
                    onChange={(e) => setQuickBooking(prev => ({ ...prev, dates: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-warm-ivory focus:outline-none focus:border-savanna-gold focus:ring-2 focus:ring-savanna-gold/20"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-warm-ivory/80 text-sm font-medium mb-2">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={quickBooking.guests}
                    onChange={(e) => setQuickBooking(prev => ({ ...prev, guests: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-warm-ivory focus:outline-none focus:border-savanna-gold focus:ring-2 focus:ring-savanna-gold/20"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-savanna-gold to-sunset-orange text-white py-4 rounded-lg font-semibold text-lg hover:from-savanna-gold/90 hover:to-sunset-orange/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Search className="h-5 w-5" />
              Find Perfect Packages
            </button>

            <p className="text-center text-warm-ivory/60 text-sm mt-4">
              ✨ Get personalized recommendations based on your preferences
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-ivory/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-ivory/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}