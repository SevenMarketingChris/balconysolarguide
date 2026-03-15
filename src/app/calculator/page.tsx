import type { Metadata } from "next";
import SolarCalculator from "@/components/ui/SolarCalculator";

export const metadata: Metadata = {
  title: "Balcony Solar Savings Calculator UK — How Much Could You Save?",
  description:
    "Calculate how much you could save with a balcony solar panel system in the UK. Based on real PVGIS solar irradiance data by region.",
};

export default function CalculatorPage() {
  return <SolarCalculator />;
}
