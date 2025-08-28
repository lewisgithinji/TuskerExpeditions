import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kenya Safari Destinations | Masai Mara, Amboseli & More | Tusker Expeditions',
  description: 'Discover Kenya&apos;s premier safari destinations including Masai Mara, Amboseli, Tsavo, Lake Nakuru and Samburu. Experience the Big Five and Great Migration.',
};

const kenyaDestinations = [
  {
    id: 'masai-mara',
    name: 'Masai Mara National Reserve',
    slug: 'masai-mara',
    region: 'Southwestern Kenya',
    description: 'The jewel of Kenya\'s safari destinations, famous worldwide for the Great Migration and exceptional predator sightings.',
    detailedDescription: 'The Masai Mara is Kenya\'s most celebrated game reserve, offering some of the finest wildlife viewing in Africa. This vast savanna ecosystem is home to an incredible diversity of wildlife, including the famous Big Five, and serves as the stage for the spectacular Great Migration between July and October.',
    image: '/images/masai-mara-hero.jpg',
    highlights: [
      'Great Migration crossing points',
      'Highest concentration of big cats in Africa',
      'Hot air balloon safaris over the plains',
      'Authentic Maasai cultural experiences',
      'All-year round excellent game viewing'
    ],
    bestTime: 'July - October (Migration), December - March (Calving)',
    wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants', 'Rhinos', 'Wildebeest', 'Zebras', 'Hippos', 'Crocodiles'],
    activities: ['Game drives', 'Hot air balloon safaris', 'Cultural visits', 'Bush walks', 'Photography safaris'],
    accommodations: ['Luxury tented camps', 'Safari lodges', 'Mobile camps', 'Budget campsites'],
    size: '1,510 km²',
    established: '1961',
    featured: true,
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    slug: 'amboseli',
    region: 'Southern Kenya',
    description: 'Famous for its large elephant herds and spectacular views of Mount Kilimanjaro.',
    detailedDescription: 'Amboseli National Park offers some of the best opportunities to see African wildlife against the backdrop of Mount Kilimanjaro. The park is particularly renowned for its large elephant herds and provides excellent opportunities for wildlife photography.',
    image: '/images/amboseli-hero.jpg',
    highlights: [
      'Stunning Mount Kilimanjaro backdrop',
      'Large elephant herds',
      'Swampland ecosystems',
      'Excellent bird watching opportunities',
      'Less crowded than other major parks'
    ],
    bestTime: 'June - October, January - March',
    wildlife: ['Elephants', 'Lions', 'Cheetahs', 'Giraffes', 'Zebras', 'Wildebeest', 'Hippos', 'Various bird species'],
    activities: ['Game drives', 'Bird watching', 'Photography', 'Cultural visits', 'Nature walks'],
    accommodations: ['Luxury lodges', 'Tented camps', 'Budget lodges'],
    size: '392 km²',
    established: '1974',
    featured: true,
  },
  {
    id: 'tsavo',
    name: 'Tsavo National Parks',
    slug: 'tsavo',
    region: 'Southeastern Kenya',
    description: 'Kenya\'s largest national park, divided into Tsavo East and West, known for red elephants and diverse landscapes.',
    detailedDescription: 'Tsavo is Kenya\'s largest national park, split into Tsavo East and Tsavo West. Famous for its red elephants (dust-covered), diverse landscapes ranging from savanna to volcanic hills, and rich wildlife including the Big Five.',
    image: '/images/tsavo-hero.jpg',
    highlights: [
      'Red elephants of Tsavo',
      'Mzima Springs crystal clear pools',
      'Shetani Lava Flow volcanic landscape',
      'Less crowded wilderness experience',
      'Diverse ecosystems and landscapes'
    ],
    bestTime: 'June - October, January - March',
    wildlife: ['Red Elephants', 'Lions', 'Leopards', 'Rhinos', 'Buffaloes', 'Giraffes', 'Zebras', 'Hippos', 'Crocodiles'],
    activities: ['Game drives', 'Rock climbing', 'Bird watching', 'Photography', 'Cultural visits'],
    accommodations: ['Safari lodges', 'Tented camps', 'Luxury camps', 'Budget campsites'],
    size: '22,812 km²',
    established: '1948',
    featured: false,
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    slug: 'samburu',
    region: 'Northern Kenya',
    description: 'A unique semi-arid reserve famous for rare northern species and authentic cultural encounters.',
    detailedDescription: 'Samburu National Reserve is a unique and captivating destination in Kenya\'s rugged northern frontier. The reserve is famous for its population of rare northern specialist species, collectively known as the "Samburu Special Five."',
    image: '/images/samburu-hero.jpg',
    highlights: [
      'Samburu Special Five species',
      'Ewaso River ecosystem',
      'Authentic Samburu culture',
      'Less crowded safari experience',
      'Unique semi-arid landscapes'
    ],
    bestTime: 'June - October',
    wildlife: ['Grevy\'s Zebra', 'Reticulated Giraffe', 'Somali Ostrich', 'Beisa Oryx', 'Gerenuk', 'Elephants', 'Lions', 'Leopards'],
    activities: ['Game drives', 'Cultural visits', 'River walks', 'Bird watching', 'Photography'],
    accommodations: ['Luxury tented camps', 'Safari lodges', 'Eco-lodges'],
    size: '165 km²',
    established: '1985',
    featured: false,
  },
];

export default function KenyaDestinationsPage() {
  const featuredDestinations = kenyaDestinations.filter(dest => dest.featured);
  const otherDestinations = kenyaDestinations.filter(dest => !dest.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-deep-forest to-safari-green">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-savanna-gold/20 border border-savanna-gold/30 mb-8">
              <span className="text-savanna-gold font-medium text-sm">
                🇰🇪 Kenya Safari Destinations
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-warm-ivory mb-6">
              Discover
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-savanna-gold to-sunset-orange">
                {' '}Kenya
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-warm-ivory/90 mb-8 leading-relaxed">
              From the world-famous Masai Mara to the elephant paradise of Amboseli, 
              Kenya offers some of Africa&apos;s most iconic safari experiences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-savanna-gold mb-2">60+</div>
                <div className="text-warm-ivory/80 text-sm">National Parks & Reserves</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-savanna-gold mb-2">1,500+</div>
                <div className="text-warm-ivory/80 text-sm">Wildlife Species</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-savanna-gold mb-2">2M+</div>
                <div className="text-warm-ivory/80 text-sm">Wildebeest Migration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-savanna-gold mb-2">Year-round</div>
                <div className="text-warm-ivory/80 text-sm">Safari Season</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Must-Visit Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kenya&apos;s premier safari destinations that should be on every wildlife enthusiast&apos;s bucket list.
            </p>
          </div>

          <div className="space-y-16">
            {featuredDestinations.map((destination, index) => (
              <div key={destination.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-safari-green via-deep-forest to-savanna-gold" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-foreground text-sm font-semibold rounded-full">
                      Featured
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    {destination.region}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
                    {destination.name}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {destination.detailedDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Best: {destination.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Size: {destination.size}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/destinations/kenya/${destination.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Explore {destination.name.split(' ')[0]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              More Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Kenya&apos;s hidden gems and lesser-known destinations for unique safari experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherDestinations.map((destination) => (
              <div key={destination.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-safari-green via-deep-forest to-savanna-gold" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {destination.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {destination.bestTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {destination.size}
                    </div>
                  </div>

                  <Link
                    href={`/destinations/kenya/${destination.slug}`}
                    className="flex items-center justify-between w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium group/btn"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-savanna-gold to-sunset-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Experience Kenya?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let our expert team create the perfect Kenyan safari itinerary tailored to your interests and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages/safari-tours"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-savanna-gold rounded-lg hover:bg-white/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              View Kenya Packages
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/packages/custom-packages/ai-planner"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-savanna-gold transition-colors font-semibold text-lg"
            >
              🤖 Custom Planner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}