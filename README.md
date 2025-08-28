# Tusker Expeditions - East African Safari Website

A premium website for Tusker Expeditions, a Kenyan-based tours and travel company specializing in East African safari experiences, cultural tours, and adventure travel.

## 🌍 Project Overview

Tusker Expeditions offers comprehensive travel services including:
- Safari tour packages across Kenya, Tanzania, and Uganda
- Cultural tours and authentic local experiences
- Luxury accommodations and eco-friendly lodges
- Vehicle rentals and transportation services
- AI-powered trip planning and customization

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom African-inspired color scheme
- **UI Components**: Headless UI + Lucide React icons
- **Animation**: Framer Motion (planned)
- **Development**: ESLint, Prettier (planned)

## 🎨 Design Theme

**"African Wilderness Meets Modern Luxury"**

### Color Palette
- **Primary**: Savanna Gold (#D4AF37), Safari Green (#228B22), Sunset Orange (#FF6347)
- **Secondary**: Warm Ivory (#FDF5E6), Deep Forest (#013220), Dusty Rose (#C08081)
- **Accent**: Vibrant Blue (#4169E1) for CTAs and highlights

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

## 📁 Project Structure

```
TuskerExpeditions/
├── src/
│   ├── app/                          # Next.js 15 App Router
│   │   ├── destinations/             # Safari destinations
│   │   │   ├── kenya/               # Kenya-specific destinations
│   │   │   ├── tanzania/            # Tanzania-specific destinations
│   │   │   └── uganda/              # Uganda-specific destinations
│   │   ├── packages/                # Tour packages
│   │   ├── accommodations/          # Lodges and camps
│   │   ├── vehicles/                # Fleet information
│   │   ├── about/                   # Company information
│   │   └── contact/                 # Contact and support
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   ├── layout/                  # Layout components (Header, Footer, Navigation)
│   │   ├── home/                    # Homepage-specific components
│   │   └── shared/                  # Shared components
│   ├── lib/                         # Utility libraries and configurations
│   └── types/                       # TypeScript type definitions
├── public/                          # Static assets
├── package.json                     # Dependencies and scripts
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ (recommended: latest LTS)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TuskerExpeditions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## 🌟 Key Features Implemented

### ✅ Completed Features

1. **Modern Next.js 15 Setup**
   - App Router with TypeScript
   - Tailwind CSS v4 integration
   - African-inspired custom color scheme
   - Responsive design optimized for mobile and desktop

2. **Navigation System**
   - Multi-level dropdown navigation
   - Mobile-responsive hamburger menu
   - Sticky header with transparency effects
   - Emergency contact always visible
   - Currency and language toggles

3. **Homepage Components**
   - Hero section with video background placeholder
   - Quick booking widget with destination autocomplete
   - Featured packages carousel
   - Company statistics and trust indicators
   - Call-to-action sections

4. **Destination Pages**
   - Comprehensive destinations overview
   - Country-specific pages (Kenya, Tanzania, Uganda)
   - Individual destination detail pages
   - Wildlife and activity highlights
   - Best time to visit information

5. **Layout & Design**
   - Professional dark footer with company info
   - Trust badges and certifications
   - Social media integration
   - Newsletter signup
   - Consistent branding throughout

6. **TypeScript Integration**
   - Comprehensive type definitions
   - Type-safe navigation configuration
   - Structured data models for destinations, packages, and bookings

### 🎯 Navigation Structure

The website features a comprehensive navigation system:

#### Main Navigation
- **Destinations**: Kenya, Tanzania, Uganda with sub-destinations
- **Packages**: Safari tours, cultural tours, adventure tours, custom packages
- **Accommodations**: Luxury lodges, safari camps, eco-lodges, budget options
- **Vehicles**: Fleet information and rental options
- **About**: Company information and team
- **Contact**: Contact forms and support

#### Featured Destinations
- **Kenya**: Masai Mara, Amboseli, Tsavo, Samburu, Lake Nakuru
- **Tanzania**: Serengeti, Ngorongoro, Tarangire, Lake Manyara
- **Uganda**: Bwindi, Queen Elizabeth, Murchison Falls

## 🔧 Development Guidelines

### Code Standards
- Use TypeScript for all new components
- Follow existing naming conventions
- Maintain responsive design principles
- Implement proper error handling
- Write semantic HTML with accessibility in mind

### Styling Guidelines
- Use Tailwind CSS classes consistently
- Follow the established color palette
- Maintain consistent spacing and typography
- Ensure mobile-first responsive design

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on git push

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📞 Support

For technical support or questions about the project:
- **Email**: dev@tuskerexpeditions.com
- **Phone**: +254 700 000 000

---

Built with ❤️ for authentic East African safari experiences.
