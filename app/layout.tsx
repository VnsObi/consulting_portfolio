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

const description =
  "I lead technical teams and build web, mobile, cloud, and AI-powered products — covering product architecture, backend systems, infrastructure, security, and delivery. Founder & CTO at VNSIS Technologies, building HealthOS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://evansobi.systems"),
  title: "Evans Obi | Technology Leadership & Full-Stack Product Delivery",
  description,
  keywords: [
    "Evans Obi",
    "Full Stack Developer",
    "Technical Product Engineer",
    "Founding Engineer",
    "Engineering Lead",
    "Fractional CTO",
    "Technical Leadership",
    "Flutter Developer",
    "TypeScript",
    "Node.js",
    "Python",
    "AI Agents",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Offline-first Applications",
    "Cloud Infrastructure",
    "Security Engineering",
    "HealthOS",
    "VNSIS Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Evans Obi | Technology Leadership & Full-Stack Product Delivery",
    description,
    type: "profile",
    locale: "en_US",
    siteName: "Evans Obi",
    url: "https://evansobi.systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Obi | Technology Leadership & Full-Stack Product Delivery",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Evans Obi",
  url: "https://evansobi.systems",
  image: "https://evansobi.systems/opengraph-image.png",
  email: "mailto:evans.obi@vnsis.com",
  jobTitle: "Founder & CTO",
  description,
  worksFor: {
    "@type": "Organization",
    name: "VNSIS Technologies Limited",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.linkedin.com/in/evans-obi-670366148/",
    "https://github.com/VnsObi",
  ],
  knowsAbout: [
    "Full-stack product development",
    "Technical leadership",
    "AI agent systems",
    "Retrieval-augmented generation",
    "Cloud infrastructure",
    "Security engineering",
    "Offline-first architecture",
  ],
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
