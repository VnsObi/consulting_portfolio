import type { Metadata } from "next";
import { Geist_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

// Body face: Source Sans 3, the designed companion to the Source Serif display face.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face for headings. Optical sizing tightens it at large sizes.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
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
        className={`${sourceSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
