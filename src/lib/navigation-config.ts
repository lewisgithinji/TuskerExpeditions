import { NavigationItem } from '@/types';

export const navigationConfig: NavigationItem[] = [
  {
    title: "Destinations",
    items: [
      {
        title: "Kenya",
        href: "/destinations/kenya",
        description: "The heart of East African safari",
        featured: true,
        items: [
          { title: "Masai Mara", href: "/destinations/kenya/masai-mara" },
          { title: "Amboseli", href: "/destinations/kenya/amboseli" },
          { title: "Tsavo", href: "/destinations/kenya/tsavo" },
          { title: "Lake Nakuru", href: "/destinations/kenya/lake-nakuru" },
          { title: "Samburu", href: "/destinations/kenya/samburu" },
        ]
      },
      {
        title: "Tanzania",
        href: "/destinations/tanzania",
        description: "Home of the Great Migration",
        featured: true,
        items: [
          { title: "Serengeti", href: "/destinations/tanzania/serengeti" },
          { title: "Ngorongoro", href: "/destinations/tanzania/ngorongoro" },
          { title: "Tarangire", href: "/destinations/tanzania/tarangire" },
          { title: "Lake Manyara", href: "/destinations/tanzania/lake-manyara" },
        ]
      },
      {
        title: "Uganda",
        href: "/destinations/uganda",
        description: "The Pearl of Africa",
        items: [
          { title: "Bwindi", href: "/destinations/uganda/bwindi" },
          { title: "Queen Elizabeth", href: "/destinations/uganda/queen-elizabeth" },
          { title: "Murchison Falls", href: "/destinations/uganda/murchison-falls" },
        ]
      }
    ]
  },
  {
    title: "Packages",
    items: [
      {
        title: "Safari Tours",
        href: "/packages/safari-tours",
        description: "Classic wildlife expeditions",
        featured: true,
        items: [
          { title: "Big Five Safari", href: "/packages/safari-tours/big-five-safari" },
          { title: "Great Migration", href: "/packages/safari-tours/great-migration" },
          { title: "Luxury Safari", href: "/packages/safari-tours/luxury-safari" },
          { title: "Budget Safari", href: "/packages/safari-tours/budget-safari" },
        ]
      },
      {
        title: "Cultural Tours",
        href: "/packages/cultural-tours",
        description: "Authentic local experiences",
        items: [
          { title: "Masai Experience", href: "/packages/cultural-tours/masai-experience" },
          { title: "Traditional Villages", href: "/packages/cultural-tours/traditional-villages" },
          { title: "Cultural Heritage", href: "/packages/cultural-tours/cultural-heritage" },
        ]
      },
      {
        title: "Adventure Tours",
        href: "/packages/adventure-tours",
        description: "Thrilling outdoor experiences",
        items: [
          { title: "Mount Kenya Trek", href: "/packages/adventure-tours/mount-kenya" },
          { title: "White Water Rafting", href: "/packages/adventure-tours/white-water-rafting" },
          { title: "Hot Air Balloon", href: "/packages/adventure-tours/hot-air-balloon" },
        ]
      },
      {
        title: "Custom Packages",
        href: "/packages/custom-packages",
        description: "Tailored to your dreams",
        featured: true,
        items: [
          { title: "AI Trip Planner", href: "/packages/custom-packages/ai-planner" },
          { title: "Luxury Expeditions", href: "/packages/custom-packages/luxury" },
          { title: "Family Adventures", href: "/packages/custom-packages/family" },
          { title: "Honeymoon Packages", href: "/packages/custom-packages/honeymoon" },
        ]
      }
    ]
  },
  {
    title: "Accommodations",
    items: [
      {
        title: "Luxury Lodges",
        href: "/accommodations/luxury-lodges",
        description: "Premium safari experiences",
        featured: true
      },
      {
        title: "Safari Camps",
        href: "/accommodations/safari-camps",
        description: "Authentic wilderness stays"
      },
      {
        title: "Eco Lodges",
        href: "/accommodations/eco-lodges",
        description: "Sustainable luxury"
      },
      {
        title: "Budget Friendly",
        href: "/accommodations/budget-friendly",
        description: "Comfortable and affordable"
      }
    ]
  },
  {
    title: "Vehicles",
    href: "/vehicles"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];