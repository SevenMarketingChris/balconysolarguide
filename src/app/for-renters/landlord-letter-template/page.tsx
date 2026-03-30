import { Metadata } from "next";
import LandlordLetterClient from "./LandlordLetterClient";

export const metadata: Metadata = {
  title: "Landlord Permission Letter Template for Balcony Solar UK",
  description:
    "Free letter template to request landlord permission for a portable balcony solar system. References the Renters' Rights Act 2025 and G98 compliance.",
};

export default function LandlordLetterPage() {
  return <LandlordLetterClient />;
}
