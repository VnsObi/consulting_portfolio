import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evans Obi | Enterprise IT Consultant & Systems Architect",
  description:
    "Enterprise IT Consultant helping operation-heavy businesses in Nigeria, West Africa, and globally. I replace manual chaos with automated, profit-generating systems. Based in Asaba, Delta State.",
  keywords: [
    "Enterprise Consultant Nigeria",
    "IT Manager Asaba",
    "Technology Strategy Delta State",
    "Systems Architect West Africa",
    "Business Process Automation",
    "Digital Transformation Consultant",
    "Evans Obi",
    "Tech Consultant South South Nigeria",
    "Remote IT Manager",
    // Dev Keywords
    "Web Developer Asaba",
    "Software Engineer Nigeria",
    "Website Designer Delta State",
    "Custom Software Development",
    "Mobile App Developer Nigeria",
    "Full Stack Developer West Africa",
  ],
  openGraph: {
    title: "Evans Obi | Enterprise IT Consultant & Systems Architect",
    description:
      "Enterprise IT Consultant helping operation-heavy businesses design, secure, and scale reliable technology systems. Serving Nigeria, West Africa, and Global clients.",
    type: "website",
    locale: "en_US",
    siteName: "Evans Obi",
    url: "https://evansobi.systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Obi | Enterprise IT Consultant",
    description:
      "Helping operation-heavy businesses scale with reliable technology systems.",
  },
  other: {
    "geo.region": "NG-DE", // Delta State
    "geo.placename": "Asaba",
    "geo.position": "6.2059;6.6959", // Coordinates for Asaba roughly
    ICBM: "6.2059, 6.6959",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Evans Obi | Enterprise IT Consultant",
  image: "https://evansobi.systems/opengraph-image.png",
  url: "https://evansobi.systems",
  telephone: "+2349075717088",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asaba",
    addressRegion: "Delta",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.2059,
    longitude: 6.6959,
  },
  areaServed: [
    { "@type": "City", name: "Asaba" },
    { "@type": "City", name: "Warri" },
    { "@type": "City", name: "Lagos" },
    { "@type": "City", name: "Port Harcourt" },
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Subcontinent", name: "West Africa" },
    "Worldwide",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise IT Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development & Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
    ],
  },
  priceRange: "$$$",
  description:
    "Enterprise IT Consultant helping operation-heavy businesses design, secure, and scale reliable technology systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
