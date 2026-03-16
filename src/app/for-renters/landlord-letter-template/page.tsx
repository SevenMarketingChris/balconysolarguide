import { Metadata } from "next";
import LandlordLetterClient from "./LandlordLetterClient";

export const metadata: Metadata = {
  title: "Landlord Permission Letter Template for Balcony Solar UK | Balcony Solar Guide",
  description:
    "A free, professionally drafted letter template to request your landlord's permission to install a portable balcony solar system. Includes Renters' Rights Act 2025 reference and G98 compliance wording.",
};

export default function LandlordLetterPage() {
  return <LandlordLetterClient />;
}
