// UK Solar irradiance data by region (kWh/m²/year) — based on PVGIS data
export const UK_REGIONS: Record<string, { irradiance: number; label: string }> = {
  london: { irradiance: 1050, label: "London & South East" },
  southWest: { irradiance: 1100, label: "South West" },
  southEast: { irradiance: 1050, label: "South East" },
  eastAnglia: { irradiance: 1020, label: "East Anglia" },
  eastMidlands: { irradiance: 980, label: "East Midlands" },
  westMidlands: { irradiance: 960, label: "West Midlands" },
  yorkshire: { irradiance: 940, label: "Yorkshire & Humber" },
  northWest: { irradiance: 920, label: "North West" },
  northEast: { irradiance: 900, label: "North East" },
  wales: { irradiance: 950, label: "Wales" },
  scotland: { irradiance: 880, label: "Scotland" },
  northernIreland: { irradiance: 870, label: "Northern Ireland" },
};

// Orientation efficiency factors (relative to south-facing at 0°)
export const ORIENTATION_FACTORS: Record<string, number> = {
  south: 1.0,
  southEast: 0.93,
  southWest: 0.93,
  east: 0.78,
  west: 0.78,
  north: 0.45,
};

// Tilt efficiency factors — balcony panels typically 60-90° vertical
export const TILT_FACTORS: Record<string, number> = {
  optimal: 1.0,    // ~30-35° tilt
  balcony: 0.82,   // 60-90° vertical mount (typical balcony railing)
  flat: 0.88,      // flat roof / floor mount
};

// Performance ratio (accounts for inverter losses, wiring, temperature)
export const PERFORMANCE_RATIO = 0.78;

// Products for recommendation engine
export interface SolarProduct {
  id: string;
  name: string;
  wattage: number;
  price: number;
  affiliateUrl: string;
  description: string;
  bestFor: string;
}

export const PRODUCTS: SolarProduct[] = [
  {
    id: "ecoflow-stream",
    name: "EcoFlow STREAM",
    wattage: 600,
    price: 949,
    affiliateUrl: "https://www.ecoflow.com/uk",
    description: "All-in-one system with smart app control and optional battery storage",
    bestFor: "Best all-rounder with smart features",
  },
  {
    id: "anker-solix",
    name: "Anker SOLIX Solarbank 2",
    wattage: 800,
    price: 899,
    affiliateUrl: "https://www.ankersolix.com/uk",
    description: "Higher wattage system with excellent build quality and app integration",
    bestFor: "Best for maximising output",
  },
  {
    id: "plug-in-solar-600",
    name: "Plug-in Solar 600W Kit",
    wattage: 600,
    price: 399,
    affiliateUrl: "https://www.amazon.co.uk/dp/B0BV2N6SCZ?tag=balconysolar-21",
    description: "No-frills DIY kit. Everything you need to get started at a lower price",
    bestFor: "Best budget option",
  },
  {
    id: "jackery-navi",
    name: "Jackery Navi 2000",
    wattage: 400,
    price: 699,
    affiliateUrl: "https://www.amazon.co.uk/dp/B0CX1234XX?tag=balconysolar-21",
    description: "Compact system ideal for smaller balconies or Juliet balconies",
    bestFor: "Best for small spaces",
  },
];

export function calculateSolarOutput(
  regionKey: string,
  orientationKey: string,
  wattage: number,
): number {
  const region = UK_REGIONS[regionKey];
  const orientationFactor = ORIENTATION_FACTORS[orientationKey] ?? 1.0;
  const tiltFactor = TILT_FACTORS.balcony;

  if (!region) return 0;

  // Annual generation (kWh) = Peak power (kW) × Irradiance (h/year) × Performance ratio × Orientation × Tilt
  const annualGeneration =
    (wattage / 1000) * region.irradiance * PERFORMANCE_RATIO * orientationFactor * tiltFactor;

  return Math.round(annualGeneration);
}

export function calculateSavings(annualKwh: number, tariffPence: number): number {
  return Math.round((annualKwh * tariffPence) / 100);
}

export function calculatePayback(systemCost: number, annualSavings: number): number {
  if (annualSavings <= 0) return 0;
  return Math.round((systemCost / annualSavings) * 10) / 10;
}

export function recommendProduct(wattage: number, budget: number): SolarProduct {
  // Best match: within budget AND wattage limit, prefer highest wattage
  const matching = PRODUCTS.filter((p) => p.price <= budget && p.wattage <= wattage);
  if (matching.length > 0) {
    return matching.sort((a, b) => b.wattage - a.wattage)[0];
  }
  // Relax wattage: find smallest-wattage product within budget
  const affordable = PRODUCTS.filter((p) => p.price <= budget);
  if (affordable.length > 0) {
    return affordable.sort((a, b) => a.wattage - b.wattage)[0];
  }
  // Absolute fallback: cheapest product overall (always exists)
  return [...PRODUCTS].sort((a, b) => a.price - b.price)[0];
}
