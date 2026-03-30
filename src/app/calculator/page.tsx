import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SolarCalculator from "@/components/ui/SolarCalculator";

export const metadata: Metadata = {
  title: "Balcony Solar Savings Calculator UK",
  description:
    "Calculate how much you could save with a balcony solar panel system in the UK. Based on real PVGIS solar irradiance data by region.",
};

export default function CalculatorPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb crumbs={[{ label: "Calculator" }]} />
      </div>
      <SolarCalculator />
    </>
  );
}
