import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "Best Balcony Solar Kits UK 2026 — Expert Comparison | Balcony Solar Guide",
  description: "Side-by-side comparison of the best plug-in balcony solar kits available in the UK. Aggregated reviews from YouTube, Reddit, and specialist forums.",
};

const products = [
  {
    id: "ecoflow-stream",
    name: "EcoFlow STREAM",
    price: "£949",
    wattage: "600W",
    battery: "Optional (1–5 kWh LFP)",
    app: "Yes — EcoFlow App (iOS/Android)",
    bestFor: "All-rounder, smart home enthusiasts",
    asin: "B0F2FTSZKG",
    reviewHref: "/reviews/ecoflow-stream",
    ourPick: true,
    badge: "Our Top Pick",
    specs: {
      panels: "2 × 300W monocrystalline",
      inverter: "PowerStream 800W micro-inverter",
      connectivity: "Bluetooth + Wi-Fi",
      warranty: "5 years",
      weight: "~20 kg (panels + inverter)",
    },
    pros: [
      "Exceptional app with real-time monitoring, AI optimisation, and home energy dashboard",
      "Battery system is modular — start with none and add 1–5 kWh LFP packs as budget allows",
      "Clean, polished setup experience with step-by-step guidance via the app",
    ],
    cons: [
      "Schuko plug requires a UK adapter (not included) — minor but worth noting",
      "Battery expansion significantly increases total cost (add £400–£700 per kWh)",
    ],
    verdict:
      "The EcoFlow STREAM is the best all-round balcony solar system available in the UK in 2026. It's not the cheapest option, but the app experience, AI energy management, and modular battery system make it the most flexible and future-proof choice for most households.",
  },
  {
    id: "anker-solix",
    name: "Anker SOLIX Solarbank 2",
    price: "£899",
    wattage: "800W",
    battery: "Built-in 2 kWh (Solarbank 2 Pro)",
    app: "Yes — Anker App",
    bestFor: "Maximum output, integrated battery",
    asin: "B0D1X82HDL",
    reviewHref: "/reviews/anker-solix",
    ourPick: false,
    badge: "Highest Output",
    specs: {
      panels: "2–4 panels up to 800W total",
      inverter: "Solarbank 2 with built-in inverter",
      connectivity: "Wi-Fi + Bluetooth",
      warranty: "5 years",
      weight: "~18 kg (Solarbank 2 Pro unit)",
    },
    pros: [
      "800W panel capacity delivers more raw generation than the EcoFlow's 600W ceiling",
      "Solarbank 2 Pro includes a 2 kWh battery built-in — no add-on cost for storage",
      "Competitive price: £50 less than EcoFlow STREAM with battery already included",
    ],
    cons: [
      "Battery is fixed at 2 kWh — cannot expand modularly like the EcoFlow system",
      "Fewer UK-specific setup resources and community guides compared to EcoFlow",
    ],
    verdict:
      "If maximising solar generation is your primary goal, the Anker SOLIX Solarbank 2 Pro edges ahead on raw wattage and offers excellent value with its built-in battery. A strong second choice — and the better pick if you want integrated storage without add-on cost.",
  },
  {
    id: "plug-in-solar",
    name: "Plug-in Solar 600W Kit",
    price: "£399",
    wattage: "600W",
    battery: "No",
    app: "No",
    bestFor: "Budget buyers, DIY-inclined",
    asin: "B0BV2N6SCZ",
    reviewHref: "/reviews/plug-in-solar-kit",
    ourPick: false,
    badge: "Budget Pick",
    specs: {
      panels: "2 × 300W monocrystalline",
      inverter: "Hoymiles HM-600 micro-inverter",
      connectivity: "None (inverter only)",
      warranty: "2 years (varies by seller)",
      weight: "~16 kg",
    },
    pros: [
      "Lowest entry price by a significant margin — less than half the cost of premium systems",
      "Hoymiles micro-inverters are well-regarded in the solar industry for reliability and longevity",
      "Simple, proven technology — nothing to go wrong with an app or cloud service",
    ],
    cons: [
      "No monitoring app — you won't know how much electricity you're generating without a separate meter",
      "No battery option, no smart home integration, and support can be limited through third-party sellers",
    ],
    verdict:
      "The Plug-in Solar 600W kit is the best choice if budget is your main constraint. It's not glamorous, but the Hoymiles inverter is genuinely reliable and 600W of solar generation will meaningfully reduce your electricity bill without any ongoing subscription or app dependency.",
  },
  {
    id: "jackery-navi",
    name: "Jackery Navi 2000",
    price: "Not yet available in UK",
    wattage: "Up to 800W PV input",
    battery: "2 kWh LiFePO4 (expandable to 8 kWh)",
    app: "Yes — Jackery App",
    bestFor: "Small balconies, Juliet balconies",
    asin: null, // Jackery Navi 2000 not available on Amazon UK
    reviewHref: "/reviews/jackery-navi-2000",
    ourPick: false,
    badge: "Best for Small Spaces",
    specs: {
      panels: "Up to 800W PV input",
      inverter: "Integrated 800W",
      connectivity: "Bluetooth + Wi-Fi",
      warranty: "3 years",
      weight: "~12 kg",
    },
    pros: [
      "Compact footprint makes it the only viable option for Juliet balconies and narrow terraces",
      "Jackery has a strong reliability reputation built on their portable power station range",
      "2 kWh LiFePO4 battery expandable to 8 kWh for serious storage capacity",
    ],
    cons: [
      "Not yet available in the UK — currently sold in EU markets only",
      "Newer product with less long-term reliability data than more established systems",
    ],
    verdict:
      "The Jackery Navi 2000 is a promising balcony solar system with up to 800W PV input and expandable LiFePO4 battery storage, but it is not yet available in the UK. We'll update this listing when UK availability is confirmed.",
  },
];

export default function BestBalconySolarKitsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Balcony Solar Kits UK 2026',
    description:
      'Expert review roundup of the best plug-in balcony solar systems available in the UK in 2026, based on aggregated independent reviews from YouTube, Reddit, Which?, TechRadar, Trustpilot, and specialist solar forums.',
    url: 'https://www.balconysolarguide.co.uk/reviews/best-balcony-solar-kits-uk',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'EcoFlow STREAM',
        description:
          'Best all-round balcony solar system for UK homes. 600W panels, modular 1–5 kWh LFP battery, best-in-class app with AI energy management. ~£949.',
        url: 'https://www.balconysolarguide.co.uk/reviews/ecoflow-stream',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Anker SOLIX Solarbank 2 Pro',
        description:
          'Highest output balcony solar system with 800W panel capacity and a built-in 2 kWh LFP battery. ~£899.',
        url: 'https://www.balconysolarguide.co.uk/reviews/anker-solix',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Plug-in Solar 600W Kit',
        description:
          'Best budget balcony solar kit. 600W with a professional-grade Hoymiles HM-600 micro-inverter. No app, no battery. ~£399.',
        url: 'https://www.balconysolarguide.co.uk/reviews/plug-in-solar-kit',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Jackery Navi 2000',
        description:
          'Best balcony solar system for Juliet balconies and small spaces. Compact 400W system with integrated battery. ~£699.',
        url: 'https://www.balconysolarguide.co.uk/reviews/jackery-navi-2000',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
      <PageHero
        eyebrow="Reviews & Comparisons"
        title="Best Balcony Solar Kits UK 2026: Expert Reviews & Comparisons"
        subtitle="We've aggregated hundreds of independent reviews to find the best plug-in balcony solar systems available in the UK. Updated March 2026."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "Best Balcony Solar Kits UK" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="How we pick">
          We don't accept products for review and we don't manufacture rankings to maximise affiliate revenue. Our
          recommendations are based on aggregating independent reviews from YouTube, Reddit, Which?, TechRadar,
          Trustpilot, and specialist solar forums. See the "How we curate" section at the bottom of this page.
        </InfoBox>

        {/* Quick summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Verdict</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-solar-50 border border-solar-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-solar-700 uppercase tracking-wide mb-1">Best for most people</p>
              <p className="font-bold text-slate-900 text-lg">EcoFlow STREAM</p>
              <p className="text-slate-600 text-sm">600W · App · Expandable battery · £949</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Best budget option</p>
              <p className="font-bold text-slate-900 text-lg">Plug-in Solar 600W Kit</p>
              <p className="text-slate-600 text-sm">600W · No app · No battery · £399</p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">System</th>
                  <th className="text-left px-4 py-3 font-semibold">Price</th>
                  <th className="text-left px-4 py-3 font-semibold">Wattage</th>
                  <th className="text-left px-4 py-3 font-semibold">Battery?</th>
                  <th className="text-left px-4 py-3 font-semibold">Smart App?</th>
                  <th className="text-left px-4 py-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-solar-50">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    EcoFlow STREAM <span className="text-solar-600 text-xs ml-1">★ Our Pick</span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">£949</td>
                  <td className="px-4 py-3 text-slate-700">600W</td>
                  <td className="px-4 py-3 text-slate-700">Optional (add-on)</td>
                  <td className="px-4 py-3 text-slate-700">Yes</td>
                  <td className="px-4 py-3 text-slate-700">All-rounder</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-slate-900">Anker SOLIX Solarbank 2</td>
                  <td className="px-4 py-3 text-slate-700">£899</td>
                  <td className="px-4 py-3 text-slate-700">800W</td>
                  <td className="px-4 py-3 text-slate-700">Built-in (Pro)</td>
                  <td className="px-4 py-3 text-slate-700">Yes</td>
                  <td className="px-4 py-3 text-slate-700">Max output</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    Plug-in Solar 600W <span className="text-green-600 text-xs ml-1">★ Budget Pick</span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">£399</td>
                  <td className="px-4 py-3 text-slate-700">600W</td>
                  <td className="px-4 py-3 text-slate-700">No</td>
                  <td className="px-4 py-3 text-slate-700">No</td>
                  <td className="px-4 py-3 text-slate-700">Budget</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-slate-900">Jackery Navi 2000 <span className="text-xs font-normal text-amber-600">(not sold in UK)</span></td>
                  <td className="px-4 py-3 text-slate-500 italic">EU only</td>
                  <td className="px-4 py-3 text-slate-700">400W</td>
                  <td className="px-4 py-3 text-slate-700">Optional</td>
                  <td className="px-4 py-3 text-slate-700">Yes</td>
                  <td className="px-4 py-3 text-slate-500 italic">Not available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual product sections */}
        {products.map((product) => (
          <section key={product.id} className="mb-14 border border-slate-200 rounded-xl overflow-hidden">
            <div className={`px-6 py-4 ${product.ourPick ? "bg-solar-800" : "bg-slate-800"} text-white`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide opacity-75">{product.badge}</span>
                  <h2 className="text-xl font-bold mt-0.5">{product.name}</h2>
                </div>
                <span className="text-2xl font-bold">{product.price}</span>
              </div>
            </div>

            <div className="p-6">
              {/* Key specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-500 capitalize mb-0.5">{key}</p>
                    <p className="text-sm font-semibold text-slate-800">{value}</p>
                  </div>
                ))}
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 mb-2">What reviewers love</h3>
                <ul className="space-y-2">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-green-500 flex-shrink-0 font-bold">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-5">
                <h3 className="font-semibold text-slate-900 mb-2">Common criticisms</h3>
                <ul className="space-y-2">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-red-400 flex-shrink-0 font-bold">−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verdict */}
              <div className="bg-slate-50 rounded-lg p-4 mb-5 border border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Verdict</p>
                <p className="text-sm text-slate-700">{product.verdict}</p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={product.reviewHref}
                  className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  See all reviews →
                </Link>
                {product.asin && (
                  <a
                    href={`https://www.amazon.co.uk/dp/${product.asin}?tag=balconysolar-21`}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    View on Amazon →
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* How we curate */}
        <section className="mt-6 bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">How We Curate These Rankings</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              We don't accept products for free testing, we don't take payment for rankings, and we don't write reviews
              based on a few days of use. Instead, we aggregate signal from multiple independent sources:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong>YouTube:</strong> We track video reviews from creators who purchased the product, looking at
                long-term follow-up videos rather than just unboxings
              </li>
              <li>
                <strong>Reddit:</strong> Communities like r/solarDIY, r/Balkonkraftwerk, and r/UKPersonalFinance provide
                genuine user experiences
              </li>
              <li>
                <strong>Consumer press:</strong> Coverage from Which?, TechRadar, and Trusted Reviews
              </li>
              <li>
                <strong>Trustpilot:</strong> Brand-level satisfaction data from verified purchasers
              </li>
              <li>
                <strong>Specialist forums:</strong> Navitron, BuildHub, and German Balkonkraftwerk forums contain
                detailed technical discussions
              </li>
            </ul>
            <p>
              When sources disagree, we note the disagreement rather than smoothing it over. Our recommendations are
              updated when significant new evidence emerges — typically after major firmware updates, price changes, or
              when a substantial body of new reviews appears.
            </p>
            <p>
              This page contains affiliate links. If you purchase through our links we may earn a small commission at no
              cost to you. This does not influence our recommendations.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
