import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Tusker Expeditions | East African Safari Adventures",
  description: "Discover the soul of East Africa with authentic safari experiences, cultural tours, and luxury accommodations. Expert-guided wildlife expeditions in Kenya, Tanzania, and Uganda.",
  keywords: "safari, Kenya, Tanzania, Uganda, wildlife, tours, Africa, Masai Mara, Serengeti, luxury safari",
  authors: [{ name: "Tusker Expeditions" }],
  creator: "Tusker Expeditions",
  publisher: "Tusker Expeditions",
  robots: "index, follow",
  openGraph: {
    title: "Tusker Expeditions | East African Safari Adventures",
    description: "Discover the soul of East Africa with authentic safari experiences and luxury accommodations.",
    url: "https://tuskerexpeditions.com",
    siteName: "Tusker Expeditions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tusker Expeditions - East African Safari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tusker Expeditions | East African Safari Adventures",
    description: "Discover the soul of East Africa with authentic safari experiences and luxury accommodations.",
    images: ["/twitter-image.jpg"],
    creator: "@tuskerexpeditions",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#D4AF37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
