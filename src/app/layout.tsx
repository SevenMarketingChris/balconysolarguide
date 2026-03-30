import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Balcony Solar Guide UK — Independent Guide to Plug-In Solar Panels",
    template: "%s | Balcony Solar Guide UK",
  },
  description:
    "The UK's independent guide to balcony solar panels. Compare kits, calculate savings, understand regulations, and find the best system for renters and homeowners.",
  keywords: ["balcony solar UK", "plug in solar UK", "balcony solar panels", "plug-in solar panels"],
  authors: [{ name: "Balcony Solar Guide" }],
  creator: "Balcony Solar Guide",
  publisher: "Balcony Solar Guide",
  metadataBase: new URL("https://www.balconysolarguide.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.balconysolarguide.co.uk",
    siteName: "Balcony Solar Guide UK",
    title: "Balcony Solar Guide UK — Independent Guide to Plug-In Solar Panels",
    description:
      "The UK's independent guide to balcony solar panels. Compare kits, calculate savings, understand regulations.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Balcony Solar Panels UK — Reviews, Savings Calculator & Buying Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balcony Solar Guide UK",
    description: "The UK's independent guide to balcony solar panels.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#060d1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="bg-[#f0f7ff]">
      <body className={`${dmSans.variable} ${fraunces.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-VR2J7TGWHX" />
      </body>
    </html>
  );
}
