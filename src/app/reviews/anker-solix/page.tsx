import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Anker SOLIX Balcony Solar UK Review 2026 — Curated Reviews | Balcony Solar Guide",
  description: "The best Anker SOLIX balcony solar reviews curated in one place. Real UK performance data, specs comparison, and where to buy.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";


export default function AnkerSOLIXReviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Anker SOLIX Solarbank 2 Pro',
    description:
      'The Anker SOLIX Solarbank 2 Pro is a balcony solar system for UK homes featuring 800W panel capacity, a built-in 2 kWh LFP battery, Wi-Fi and Bluetooth connectivity, and a 5-year warranty. Priced at approximately £899.',
    brand: { '@type': 'Brand', name: 'Anker' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '899',
      availability: 'https://schema.org/InStock',
      url: 'https://www.ankersolix.com/uk/products/solarbank-2-pro',
    },
    review: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Balcony Solar Guide' },
      reviewBody:
        'The Anker SOLIX Solarbank 2 Pro delivers more raw generation potential than most rivals at 800W, with a 2 kWh LFP battery built in at a competitive £899. Reviewers consistently praise its premium build quality, solid app monitoring, and strong 5-year warranty. The main limitation is the fixed, non-expandable battery — and it lacks the AI optimisation features found in the EcoFlow app. A strong choice for UK balconies where maximum generation is the priority.',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
      <PageHero
        eyebrow="Review Roundup"
        title="Anker SOLIX Solarbank 2 Review Roundup: UK Balcony Solar"
        subtitle="Aggregating the best independent reviews of the Anker SOLIX Solarbank 2 from YouTube, Reddit, TechRadar, Trustpilot, and UK forums. Here's what buyers actually say."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "Anker SOLIX Solarbank 2" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="Aggregator model">
          This page curates third-party reviews — we link to the original sources so you can read everything in full.
          We don't sell the Anker SOLIX and haven't been provided one for testing. Our editorial summary reflects the
          consensus across the sources listed.
        </InfoBox>

        {/* Specs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Anker SOLIX Solarbank 2: Key Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Panel output", value: "Up to 800W (2–4 panels)" },
              { label: "Inverter", value: "Solarbank 2 integrated inverter" },
              { label: "Battery (Pro)", value: "2 kWh built-in LFP" },
              { label: "Connectivity", value: "Wi-Fi + Bluetooth, Anker App" },
              { label: "Plug type", value: "Schuko / UK compatible" },
              { label: "Warranty", value: "5 years" },
              { label: "Weight (Solarbank 2 Pro)", value: "~18 kg" },
              { label: "Price (2026)", value: "~£899 (Solarbank 2 Pro)" },
              { label: "Expandable battery?", value: "No — fixed 2 kWh" },
            ].map((spec) => (
              <div key={spec.label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                <p className="text-sm font-semibold text-slate-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOLIX vs STREAM highlight */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How the SOLIX Differs from the EcoFlow STREAM</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Where SOLIX has the edge</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 800W panel capacity vs 600W (33% more raw generation potential)</li>
                <li>• 2 kWh battery built-in at £899 — EcoFlow STREAM base is £949 with no battery</li>
                <li>• Marginally simpler overall system (fewer separate components)</li>
              </ul>
            </div>
            <div className="border-l-4 border-slate-300 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Where EcoFlow has the edge</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Battery is modular and expandable — SOLIX is fixed at 2 kWh</li>
                <li>• Superior app with AI energy management features</li>
                <li>• Larger UK user community and more setup resources</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            For a full comparison,{" "}
            <Link href="/reviews/ecoflow-vs-anker" className="text-solar-600 underline font-semibold">
              read our EcoFlow vs Anker head-to-head
            </Link>
            .
          </p>
        </section>

        {/* Aggregated pros and cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Reviewers Agree On</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3">Consistent praise across sources</h3>
              <ul className="space-y-2">
                {[
                  "Higher wattage (800W) delivers meaningfully more generation on suitable south-facing balconies",
                  "Solid, premium build quality — heavier and more robust feeling than some rivals",
                  "Competitive price with the 2 kWh battery already included (vs paying extra with EcoFlow)",
                  "Good app — functional, accurate monitoring with clear data presentation",
                  "Strong 5-year warranty backed by Anker's established UK presence",
                ].map((pro, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3">Consistent criticisms across sources</h3>
              <ul className="space-y-2">
                {[
                  "Fixed 2 kWh battery cannot be expanded — limiting if your storage needs grow",
                  "Fewer UK-specific installation guides and community resources than EcoFlow",
                  "App lacks AI optimisation features — more functional than intelligent",
                  "Schuko adapter required for UK sockets — same issue as EcoFlow",
                ].map((con, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-red-400 font-bold flex-shrink-0">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Video reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Video Reviews</h2>
          <p className="text-slate-600 mb-6 text-sm">Independent video reviews from YouTube creators who have tested the Anker SOLIX Solarbank 2.</p>
          <div className="space-y-8">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/aYMB87349Oo"
                  title="Anker SOLIX Solarbank 2 AC Review: Home Battery for Solar Panels + Home Assistant Support!"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">Smart Home Junkie — Hands-on review of the Solarbank 2 AC covering real-world solar storage performance, app setup, and Home Assistant integration</p>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/b_6oMqgh5Fs"
                  title="Anker Solix Solarbank 2 E1600 Plus and BP1600 and FS20 and Smart Plug balcony solar system video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">Funkyhome — Full system video covering the Solarbank 2 E1600 Plus with expansion battery, flexible FS20 solar panels, and Smart Plugs in a complete balcony solar setup</p>
            </div>
          </div>
        </section>

        {/* Where to buy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Buy the Anker SOLIX Solarbank 2</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Anker SOLIX UK Official Store</h3>
              <p className="text-sm text-slate-600 mb-3">
                Direct from Anker — full warranty, UK customer support, and the official SOLIX accessories range
                including railing mounts and additional panels.
              </p>
              <a
                href="https://www.ankersolix.com/uk/products/solarbank-2-pro"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Visit Anker SOLIX UK →
              </a>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Amazon UK</h3>
              <p className="text-sm text-slate-600 mb-3">
                Available on Amazon UK with Prime delivery. The Solarbank 2 Pro appears on Amazon deal events and has
                received significant price cuts during Prime Day and Black Friday.
              </p>
              <a
                href="https://www.amazon.co.uk/dp/B0D1X82HDL?tag=balconysolar-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                View on Amazon →
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6 mt-6">
          <p className="text-sm text-slate-500">
            Not sure whether to choose the SOLIX or the EcoFlow STREAM?{" "}
            <Link href="/reviews/ecoflow-vs-anker" className="text-solar-600 underline">
              Read our full head-to-head comparison
            </Link>
            . Or see all products in our{" "}
            <Link href="/reviews/best-balcony-solar-kits-uk" className="text-solar-600 underline">
              Best Balcony Solar Kits UK roundup
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
