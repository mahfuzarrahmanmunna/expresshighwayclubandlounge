import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expresshighwayinnclub.vercel.app/"),
  title: {
    default: "Express Highway Inn, Club & Lounge | Luxury Redefined",
    template: "%s | Express Highway Inn",
  },
  description: "Where the journey meets unparalleled luxury. Experience world-class dining, private lounges, and bespoke hospitality at Sampan Highway Inn.",
  keywords: [
    "Express Highway Inn",
    "Club & Lounge",
    "Luxury Highway Hotel",
    "Sampan Group",
    "Bangladesh Luxury Resort",
    "VVIP Lounge",
    "Premium Accommodation",
    "Highway Restaurant",
  ],
  authors: [{ name: "Sampan Group" }],
  creator: "Sampan Group",
  publisher: "Sampan Group",
  
  // SEO & Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Favicon Configuration
  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  
  // Social Sharing Icons (Open Graph for Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expresshighwayinnclub.vercel.app/",
    siteName: "Express Highway Inn Club & Lounge",
    title: "Express Highway Inn, Club & Lounge | Luxury Redefined",
    description: "Where the journey meets unparalleled luxury. Experience world-class dining, private lounges, and bespoke hospitality at Sampan Highway Inn.",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Express Highway Inn Club & Lounge",
      },
    ],
  },
  
  // Twitter Card Configuration
  twitter: {
    card: "summary_large_image",
    title: "Express Highway Inn, Club & Lounge",
    description: "Where the journey meets unparalleled luxury. Experience world-class dining, private lounges, and bespoke hospitality.",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}