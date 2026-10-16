import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Veloura | Timeless Fashion",
  description:  "Discover timeless styles and thoughtfully selected fashion pieces at Veloura.",
    openGraph: {
    title: "Veloura | Timeless Fashion",
    description:
      "Discover timeless styles and thoughtfully selected fashion pieces at Veloura.",
    images: ["/images/veloura.png"],
    type: "website",
  },
};
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
            <Suspense fallback={<div className="h-20 bg-[#faf8f4]" />}>
  <Navbar />
</Suspense>
            {children}
            </body>
    </html>
  );
}
