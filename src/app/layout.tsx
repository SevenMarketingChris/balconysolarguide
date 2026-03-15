import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Balcony Solar Guide UK",
    description: "The UK's independent guide to balcony solar panels.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
