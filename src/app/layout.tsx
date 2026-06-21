import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BOITEX & GONECT ENTERPRISES LLC | Nationwide Freight Transportation",
  description:
    "BOITEX & GONECT ENTERPRISES LLC provides reliable nationwide freight transportation, flatbed hauling, hotshot services, and logistics solutions with a commitment to safety and on-time delivery.",
  keywords:
    "freight transportation, flatbed transportation, hotshot trucking, freight hauling, logistics company, interstate carrier, nationwide transportation, trucking services, freight solutions, Minneapolis trucking company",
  openGraph: {
    title: "BOITEX & GONECT ENTERPRISES LLC | Nationwide Freight Transportation",
    description:
      "Reliable nationwide freight transportation, flatbed hauling, hotshot services, and logistics solutions.",
    type: "website",
    locale: "en_US",
    siteName: "BOITEX & GONECT ENTERPRISES LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}