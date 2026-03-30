"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  UK_REGIONS,
  calculateSolarOutput,
  calculateSavings,
  calculatePayback,
  recommendProduct,
} from "@/lib/solar-data";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

const BUDGET_OPTIONS = [
  { label: "Under £500", value: 499 },
  { label: "£500–£1,000", value: 1000 },
  { label: "Any budget", value: 99999 },
];

const ORIENTATION_OPTIONS = [
  { key: "south", label: "South", description: "Maximum output — faces sun all day" },
  { key: "southEast", label: "South-East", description: "Excellent — morning-heavy generation" },
  { key: "southWest", label: "South-West", description: "Excellent — afternoon-heavy generation" },
  { key: "east", label: "East", description: "Good — strong morning generation" },
  { key: "west", label: "West", description: "Good — strong afternoon generation" },
  { key: "north", label: "North", description: "Low output — not recommended if alternatives exist" },
];

export default function SolarCalculator() {
  const [region, setRegion] = useState("london");
  const [orientation, setOrientation] = useState("south");
  const [wattage, setWattage] = useState(600);
  const [tariff, setTariff] = useState(24);
  const [budget, setBudget] = useState(99999);
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  const annualKwh = useMemo(
    () => calculateSolarOutput(region, orientation, wattage),
    [region, orientation, wattage],
  );

  const annualSaving = useMemo(
    () => calculateSavings(annualKwh, tariff),
    [annualKwh, tariff],
  );

  const recommended = useMemo(
    () => recommendProduct(wattage, budget),
    [wattage, budget],
  );

  const payback = useMemo(
    () => calculatePayback(recommended.price, annualSaving),
    [recommended.price, annualSaving],
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-solar-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Free Tool
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            Balcony Solar Savings Calculator
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Enter your details below to see how much a plug-in balcony solar system could generate
            and save — based on real PVGIS irradiance data for your region.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT: Inputs */}
          <div className="lg:col-span-3 space-y-8">
            {/* Region */}
            <div>
              <label htmlFor="region" className="block text-sm font-semibold text-slate-700 mb-2">
                1. Your UK Region
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-solar-400"
              >
                {Object.entries(UK_REGIONS).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
              <p className="mt-1.5 text-xs text-slate-500">
                Solar irradiance varies significantly across the UK — the South West gets roughly 25% more sun than Scotland.
              </p>
            </div>

            {/* Orientation */}
            <div>
              <p className="block text-sm font-semibold text-slate-700 mb-2">
                2. Balcony Orientation
              </p>
              <p className="text-xs text-slate-500 mb-3">
                Which direction does your balcony railing face? Stand on your balcony and face outward — that direction is your orientation.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ORIENTATION_OPTIONS.map((opt) => (
                  <label
                    key={opt.key}
                    className={`relative flex flex-col gap-0.5 border rounded-lg px-3 py-2.5 cursor-pointer transition-all ${
                      orientation === opt.key
                        ? "border-solar-500 bg-solar-50 ring-1 ring-solar-400"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="orientation"
                      value={opt.key}
                      checked={orientation === opt.key}
                      onChange={() => setOrientation(opt.key)}
                      className="sr-only"
                    />
                    <span className="font-semibold text-slate-800 text-sm">{opt.label}</span>
                    <span className="text-xs text-slate-500 leading-tight">{opt.description}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Wattage */}
            <div>
              <label htmlFor="wattage" className="block text-sm font-semibold text-slate-700 mb-1">
                3. Panel Wattage
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500">300W</span>
                <span className="text-lg font-bold text-solar-600">{wattage}W</span>
                <span className="text-xs text-slate-500">800W</span>
              </div>
              <input
                id="wattage"
                type="range"
                min={300}
                max={800}
                step={50}
                value={wattage}
                onChange={(e) => setWattage(Number(e.target.value))}
                className="w-full accent-solar-500"
              />
              <p className="mt-2 text-xs text-slate-500">
                Most UK balcony systems are 400–800W. 600W is the most common.
              </p>
            </div>

            {/* Tariff */}
            <div>
              <label htmlFor="tariff" className="block text-sm font-semibold text-slate-700 mb-1">
                4. Your Electricity Unit Rate
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="tariff"
                  type="number"
                  min={15}
                  max={40}
                  step={0.1}
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value))}
                  className="w-28 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-solar-400 text-center font-semibold"
                />
                <span className="text-slate-700 font-medium">pence per kWh</span>
              </div>
              <p className="mt-1.5 text-xs text-slate-500">
                Find this on your energy bill. As of Q1 2026, the Ofgem price cap sets the typical rate at around 24p/kWh.
              </p>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2">
                5. Your Budget
              </label>
              <select
                id="budget"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-solar-400"
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:col-span-2 lg:sticky lg:top-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
              <h2 className="text-base font-semibold text-solar-400 uppercase tracking-wide mb-5">
                Your Estimated Results
              </h2>
              <div className="space-y-5">
                <div className="border-b border-slate-700 pb-4">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Annual Generation</p>
                  <p className="text-4xl font-bold text-white">
                    {annualKwh.toLocaleString()}
                    <span className="text-xl font-normal text-slate-400 ml-1">kWh/yr</span>
                  </p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Annual Saving</p>
                  <p className="text-4xl font-bold text-solar-400">
                    £{annualSaving.toLocaleString()}
                    <span className="text-xl font-normal text-slate-400 ml-1">/yr</span>
                  </p>
                  <p className="text-slate-500 text-xs mt-1">at {tariff}p/kWh</p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Estimated Payback</p>
                  <p className="text-4xl font-bold text-white">
                    {annualSaving > 0 ? payback : "—"}
                    <span className="text-xl font-normal text-slate-400 ml-1">
                      {annualSaving > 0 ? "years" : ""}
                    </span>
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Based on {recommended.name} at £{recommended.price}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Recommended System</p>
                  <p className="font-bold text-white text-lg leading-tight">{recommended.name}</p>
                  <p className="text-solar-400 font-semibold text-sm mt-0.5">£{recommended.price.toLocaleString()}</p>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{recommended.description}</p>
                  <p className="text-slate-500 text-xs italic mt-1">{recommended.bestFor}</p>
                  <a
                    href={recommended.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="mt-4 block w-full text-center bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
                  >
                    Check price on {recommended.source} →
                  </a>
                  <Link
                    href={recommended.reviewHref}
                    className="mt-2 block w-full text-center text-solar-400 hover:text-solar-300 font-medium text-sm transition-colors"
                  >
                    Read our review →
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Estimates based on PVGIS solar irradiance data, adjusted for a typical balcony mounting angle (~70°). Actual output varies with shading, dust, and system efficiency.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <button
            onClick={() => setMethodologyOpen(!methodologyOpen)}
            className="flex items-center gap-2 text-slate-700 font-semibold text-lg hover:text-solar-600 transition-colors"
          >
            <span className={`transition-transform text-solar-500 ${methodologyOpen ? "rotate-90" : ""}`}>▶</span>
            How we calculate these figures
          </button>
          {methodologyOpen && (
            <div className="mt-5 max-w-3xl text-sm text-slate-700 space-y-4">
              <p>Our calculator uses established solar PV modelling principles:</p>
              <h3 className="font-semibold text-base">1. Regional Irradiance Data</h3>
              <p>Solar irradiance figures (kWh/m²/year) are drawn from the EU&apos;s PVGIS database. London receives approximately 1,050 kWh/m²/year; Scotland approximately 880 kWh/m²/year.</p>
              <h3 className="font-semibold text-base">2. Orientation Factor</h3>
              <p>South-facing panels receive the most sunlight. South-east and south-west are 93% as effective; east and west are 78%; north-facing panels receive only 45%.</p>
              <h3 className="font-semibold text-base">3. Tilt Factor</h3>
              <p>Balcony panels are typically mounted near-vertically (60–90°). The optimal UK tilt is ~30–35°. We apply a tilt correction factor of 0.82.</p>
              <h3 className="font-semibold text-base">4. Performance Ratio</h3>
              <p>A performance ratio of 0.78 accounts for inverter efficiency, wiring losses, temperature effects, and soiling.</p>
              <h3 className="font-semibold text-base">5. Formula</h3>
              <p className="font-mono text-xs bg-slate-100 px-3 py-2 rounded">
                kWh/year = (Wattage ÷ 1000) × Irradiance × Performance Ratio × Orientation Factor × Tilt Factor
              </p>
              <p>
                <Link href="/guides/balcony-solar-savings-uk" className="text-solar-600 underline">
                  Read our full guide to balcony solar savings →
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <AffiliateNotice />
        </div>
      </div>
    </div>
  );
}
