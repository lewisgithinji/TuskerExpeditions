import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Camera, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'East African Safari Destinations | Tusker Expeditions',
  description: 'Explore the most spectacular wildlife destinations across Kenya, Tanzania, and Uganda. Discover where to see the Big Five, Great Migration, and mountain gorillas.',
};

interface Destination {
  id: string;
  name: string;
  country: string;
  slug: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  wildlife: string[];
  featured: boolean;
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Masai Mara',
    country: 'Kenya',
    slug: 'kenya/masai-mara',
    description: 'World-renowned for the Great Migration and abundant wildlife, the Masai Mara offers some of the best safari experiences in Africa.',
    image: '/images/masai-mara.jpg',
    highlights: ['Great Migration', 'Big Five', 'Hot Air Balloon Safaris', 'Masai Culture'],
    bestTime: 'July - October',
    wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants', 'Rhinos', 'Wildebeest'],
    featured: true,
  },
  {
    id: '2',
    name: 'Serengeti',
    country: 'Tanzania',
    slug: 'tanzania/serengeti',
    description: 'The vast Serengeti plains are home to the largest wildlife migration on earth and offer unparalleled safari experiences.',
    image: '/images/serengeti.jpg',
    highlights: ['Great Migration', 'Endless Plains', 'Big Five', 'Kopjes'],
    bestTime: 'June - October',
    wildlife: ['Wildebeest', 'Zebras', 'Lions', 'Leopards', 'Cheetahs', 'Elephants'],
    featured: true,
  },
  {
    id: '3',
    name: 'Amboseli',
    country: 'Kenya',
    slug: 'kenya/amboseli',
    description: 'Famous for its large elephant herds and stunning views of Mount Kilimanjaro, Amboseli offers intimate wildlife encounters.',
    image: '/images/amboseli.jpg',
    highlights: ['Mount Kilimanjaro Views', 'Large Elephant Herds', 'Swamplands', 'Bird Watching'],
    bestTime: 'June - October, January - March',
    wildlife: ['Elephants', 'Lions', 'Cheetahs', 'Giraffes', 'Zebras', 'Hippos'],
    featured: false,
  },
  {
    id: '4',
    name: 'Ngorongoro Crater',
    country: 'Tanzania',
    slug: 'tanzania/ngorongoro',
    description: 'This UNESCO World Heritage site is often called the "8th Wonder of the World" and hosts an incredible concentration of wildlife.',
    image: '/images/ngorongoro.jpg',
    highlights: ['Crater Floor', 'Big Five', 'Flamingo Flocks', 'Maasai Culture'],
    bestTime: 'Year-round',
    wildlife: ['Black Rhinos', 'Lions', 'Elephants', 'Flamingos', 'Hippos', 'Hyenas'],
    featured: true,
  },
  {
    id: '5',
    name: 'Bwindi Impenetrable Forest',
    country: 'Uganda',
    slug: 'uganda/bwindi',
    description: 'Home to over half of the world\'s mountain gorillas, Bwindi offers one of the most extraordinary wildlife experiences on earth.',
    image: '/images/bwindi.jpg',
    highlights: ['Mountain Gorilla Tracking', 'Ancient Forest', 'Bird Watching', 'Community Visits'],
    bestTime: 'June - September, December - February',
    wildlife: ['Mountain Gorillas', 'Chimpanzees', 'Forest Elephants', 'Various Primates'],
    featured: true,
  },
  {
    id: '6',
    name: 'Samburu',
    country: 'Kenya',
    slug: 'kenya/samburu',
    description: 'A unique ecosystem that hosts rare species found nowhere else in Kenya, offering authentic and less crowded safari experiences.',
    image: '/images/samburu.jpg',
    highlights: ['Special Five', 'Cultural Encounters', 'Ewaso River', 'Semi-arid Landscape'],
    bestTime: 'June - October',
    wildlife: ['Grevy\'s Zebra', 'Reticulated Giraffe', 'Somali Ostrich', 'Beisa Oryx', 'Elephants'],
    featured: false,
  },
];

export default function DestinationsPage() {
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const otherDestinations = destinations.filter(dest => !dest.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-deep-forest to-safari-green">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-savanna-gold/20 border border-savanna-gold/30 mb-8">
              <span className="text-savanna-gold font-medium text-sm">
                🌍 15+ Incredible Destinations
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-warm-ivory mb-6">
              East African
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-savanna-gold to-sunset-orange">
                {' '}Safari Destinations
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-warm-ivory/90 mb-8 leading-relaxed">
              From the iconic Masai Mara to the pristine wilderness of Bwindi, discover the most 
              spectacular wildlife destinations across Kenya, Tanzania, and Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Featured Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and iconic safari destinations, each offering unique wildlife 
              experiences and breathtaking landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              More Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover hidden gems and lesser-known destinations that offer unique wildlife 
              experiences and cultural encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-savanna-gold to-sunset-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Plan Your Safari?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let our AI-powered trip planner create the perfect itinerary based on your preferences, 
            budget, and travel dates.
          </p>
          <Link
            href="/packages/custom-packages/ai-planner"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-savanna-gold rounded-lg hover:bg-white/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            🤖 Start Planning Your Adventure
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {/* Placeholder gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-safari-green via-deep-forest to-savanna-gold" />
        
        {/* Country Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-foreground text-sm font-semibold rounded-full flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {destination.country}
        </div>

        {/* Featured Badge */}
        {destination.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-vibrant-blue text-white text-sm font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {destination.name}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {destination.description}
        </p>

        {/* Best Time */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Best time: {destination.bestTime}</span>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                {highlight}
              </span>
            ))}
            {destination.highlights.length > 3 && (
              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{destination.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Wildlife Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
            <Camera className="h-4 w-4" />
            Wildlife:
          </h4>
          <p className="text-muted-foreground text-sm">
            {destination.wildlife.slice(0, 4).join(', ')}
            {destination.wildlife.length > 4 && ` +${destination.wildlife.length - 4} more`}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={`/destinations/${destination.slug}`}
          className="flex items-center justify-between w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium group/btn"
        >
          Explore {destination.name}
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}