import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chibankzmedia.com"),
  title: {
    default: "Chibankz Media — Social Media Management & Brand Growth",
    template: "%s · Chibankz Media",
  },
  description:
    "Chibankz Media helps small businesses and personal brands grow online with clarity, consistency, and content that connects. 5 years across 100+ brands worldwide.",
  keywords: [
    "social media management",
    "social media marketing",
    "personal branding",
    "content strategy",
    "Meta certified",
    "Nigeria",
  ],
  openGraph: {
    title: "Chibankz Media — Social Media Management & Brand Growth",
    description:
      "We help small businesses and personal brands grow online with clarity, consistency, and content that connects.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <Reveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
