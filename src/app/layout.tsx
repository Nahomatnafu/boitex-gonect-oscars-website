import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}