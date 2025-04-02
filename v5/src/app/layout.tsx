import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from '../components/Nav';
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const generateViewport = () => {
  return {
  title: "PerSIsst Lab | Pervasive Sensing & Intelligent Assistive Systems",
  description: "The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab in IIIT-Delhi is a dynamic research space dedicated to innovating assistive technologies that enhance smart living. The interdisciplinary research focuses on harnessing cutting-edge research to create seamless, user-centric applications that address real-world challenges in health, wellness, and daily living. ",
  
  // Additional SEO tags
  keywords: [
    "PerSIsst Lab", 
    "Smart Living", 
    "Assistive Systems", 
    "Cognitive Support", 
    "Cognitive Psychology", 
    "Human-Centered Design", 
    "Ubiquitous Computing", 
    "AI", 
    "Deep Learning", 
    "Smart Spaces", 
    "Inclusive Technology", 
    "Pragma Kar", 
    "IIIT-Delhi"
  ],
  authors: [{ name: "PerSIsst Lab | Dr. Pragma Kar", url: "https://persisst.iiitd.ac.in/" }],
  applicationName: "PerSIsst Lab",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#3FADA8", // Example color related to the lab or institute's branding
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PerSIsst Lab | Pervasive Sensing & Intelligent Assistive Systems",
    description: "The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab in IIIT-Delhi is a dynamic research space dedicated to innovating assistive technologies that enhance smart living. The interdisciplinary research focuses on harnessing cutting-edge research to create seamless, user-centric applications that address real-world challenges in health, wellness, and daily living. ",
    url: "https://persisst.iiitd.edu.in/",
    siteName: "PerSIsst Lab",
    images: [
      {
        url: "https://persisst.iiitd.edu.in/images/logo-text.svg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "PerSIsst Lab Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata for sharing
  twitter: {
    card: "summary_large_image",
    site: "@PerSIsstLab", // Example Twitter handle
    title: "PerSIsst Lab | Pervasive Sensing & Intelligent Assistive Systems",
    description: "The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab in IIIT-Delhi is a dynamic research space dedicated to innovating assistive technologies that enhance smart living. The interdisciplinary research focuses on harnessing cutting-edge research to create seamless, user-centric applications that address real-world challenges in health, wellness, and daily living. ",
    images: ["https://persisst.iiitd.edu.in/images/logo-text.svg"], // Replace with actual image URL
  },

  // Canonical URL
  alternates: {
    canonical: "https://persisst.iiitd.edu.in",
  },

  // Other meta tags
  robots: {
    index: true, // Allows indexing
    follow: true, // Follows links
    nocache: false, // Allows caching
  },
};};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black/[0.96] antialiased`}
      >
        <div className="relative w-full h-full flex items-center"><Nav /></div>
        <div>
        {children}
        </div>
        <Footer />
        
      </body>
      
    </html>
  );
}

//  Readonly<{ children: React.ReactNode;}> typescript stuff type defien
// not allow faltu components