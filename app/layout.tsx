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

const title = "Evans Obi | Technical Architect & Engineering Leader";

const description =
  "I design, build, and lead production systems across software, infrastructure, security, and AI — architecture, technical leadership, product delivery, and hands-on implementation. Founder & CTO at VNSIS Technologies, building HealthOS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://evansobi.systems"),
  title,
  description,
  keywords: [
    "Evans Obi",
    "Technical Architect",
    "Systems Architect",
    "Solutions Architect",
    "Engineering Leader",
    "Engineering Manager",
    "Fractional CTO",
    "Technical Leadership",
    "Product Engineering",
    "Cloud Infrastructure",
    "Security Engineering",
    "AI Agents",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Offline-first Architecture",
    "Flutter",
    "TypeScript",
    "Node.js",
    "Python",
    "HealthOS",
    "VNSIS Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "en_US",
    siteName: "Evans Obi",
    url: "https://evansobi.systems",
  },
  twitter: {
    card: "summary_large_image",
    title,
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
  jobTitle: "Technical Architect & Engineering Leader",
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
    "Systems and solutions architecture",
    "Technical leadership",
    "Product engineering",
    "Cloud infrastructure",
    "Security engineering",
    "AI agent systems",
    "Retrieval-augmented generation",
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
