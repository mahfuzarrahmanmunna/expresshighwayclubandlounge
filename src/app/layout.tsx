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
  title: "Express Highway Inn, Club & Lounge | Luxury Redefined",
  description: "Where the journey meets unparalleled luxury. Experience world-class dining, private lounges, and bespoke hospitality.",
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