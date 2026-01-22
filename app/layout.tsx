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
  title: "Evans Obi | Executive Technology Strategy",
  description:
    "Strategic technology consulting for growing organizations. I design, secure, and oversee technology systems that support real operations locally and globally.",
  openGraph: {
    title: "Evans Obi | Executive Technology Strategy",
    description:
      "Strategic technology consulting for growing organizations. I design, secure, and oversee technology systems that support real operations.",
    type: "website",
    locale: "en_US",
    siteName: "Evans Obi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Obi | Executive Technology Strategy",
    description: "Strategic technology consulting for growing organizations.",
  },
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
        {children}
      </body>
    </html>
  );
}
