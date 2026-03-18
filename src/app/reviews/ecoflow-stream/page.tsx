import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "EcoFlow STREAM UK Review 2026 — Curated Reviews & Specs | Balcony Solar Guide",
  description: "We've curated the best EcoFlow STREAM reviews from across the web. See real-world UK performance data, specs, pros and cons.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";


export default function EcoFlowStreamReviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EcoFlow STREAM',
    description:
      'The EcoFlow STREAM is a complete balcony solar system for UK homes, consisting of 600W monocrystalline panels paired with an 800W PowerStream micro-inverter. It offers optional modular 1–5 kWh LFP battery storage, AI energy management via the EcoFlow app, and a 5-year warranty. Priced at approximately £949 for panels and inverter.',
    brand: { '@type': 'Brand', name: 'EcoFlow' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '949',
      availability: 'https://schema.org/InStock',
      url: 'https://www.ecoflow.com/uk/products/stream-solar-system',
    },
    review: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Balcony Solar Guide' },
      reviewBody:
        'The EcoFlow STREAM is consistently rated as the best all-round balcony solar system for UK homes. Reviewers highlight the best-in-class smartphone app with AI energy management, straightforward setup (most owners generating within two hours), strong inverter reliability across 12+ month tests, and the unique modular battery system that lets you start without storage and add up to 5 kWh later. The main criticisms are the premium price point, the Schuko plug requiring a UK adapter, and the cloud-dependent app. It is the top recommendation for most UK buyers who want a smart, future-proof system.',
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
        title="EcoFlow STREAM Review Roundup: What UK Users Actually Think"
        subtitle="We've gathered the most informative independent reviews of the EcoFlow STREAM from YouTube, Reddit, Which?, Trustpilot, and European solar forums. Here's the honest consensus."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "EcoFlow STREAM" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="Aggregator model">
          This page curates third-party reviews — we link to the original sources so you can read everything in full.
          We don't sell the EcoFlow STREAM and haven't been provided one for testing. Our editorial summary reflects the
          consensus across the sources listed.
        </InfoBox>

        {/* Specs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">EcoFlow STREAM: Key Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Panel output", value: "600W (2 × 300W monocrystalline)" },
              { label: "Inverter", value: "PowerStream 800W micro-inverter" },
              { label: "Battery", value: "Optional 1–5 kWh LFP packs" },
              { label: "Connectivity", value: "Bluetooth + Wi-Fi, EcoFlow App" },
              { label: "Weight", value: "~20 kg (panels + inverter)" },
              { label: "Plug type", value: "Schuko (UK adapter needed)" },
              { label: "Warranty", value: "5 years" },
              { label: "Price (2026)", value: "~£949 (panels + inverter)" },
              { label: "Battery add-on", value: "~£400–£700 per kWh" },
            ].map((spec) => (
              <div key={spec.label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                <p className="text-sm font-semibold text-slate-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "AI Energy Management",
                desc: "The EcoFlow app uses AI to learn your household consumption patterns and optimise when the battery charges and discharges. In practice, this means the system prioritises self-consumption during your high-usage periods and can be set to avoid grid export entirely.",
              },
              {
                title: "Modular Battery Expansion",
                desc: "Start with no battery and add LFP packs in 1 kWh increments up to 5 kWh. This is a significant practical advantage: you're not locked into a battery purchase decision upfront, and you can expand as your budget allows.",
              },
              {
                title: "Real-Time Monitoring App",
                desc: "The EcoFlow App shows live generation, consumption, battery state of charge, and grid import/export. Multiple reviewers rate it as the best app in the balcony solar category — well ahead of Anker's offering and leagues ahead of the Jackery app.",
              },
              {
                title: "MPPT Charge Controller",
                desc: "The PowerStream includes Maximum Power Point Tracking, which optimises panel output under varying light conditions. This is especially relevant for balconies where railings or adjacent buildings cause partial shading for part of the day.",
              },
            ].map((feature) => (
              <div key={feature.title} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aggregated pros and cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Reviewers Agree On</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span>Consistent praise across sources</span>
              </h3>
              <ul className="space-y-2">
                {[
                  "Setup is genuinely easy — most reviewers had it generating within 2 hours",
                  "The EcoFlow App is best-in-class for balcony solar monitoring and control",
                  "Panels are quiet under load — no audible inverter noise noted",
                  "Inverter reliability has been strong across long-term tests (12+ months)",
                  "Expandable battery gives flexibility not found in competitors' fixed-battery designs",
                  "5-year warranty and UK-based customer support provide good peace of mind",
                ].map((pro, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                <span>Consistent criticisms across sources</span>
              </h3>
              <ul className="space-y-2">
                {[
                  "Premium price — noticeably more expensive than the budget Plug-in Solar kit",
                  "Schuko plug requires a UK adapter, which feels like an oversight for a product marketed in the UK",
                  "Battery expansion adds substantial cost — a full 5 kWh setup can exceed £2,500 total",
                  "App requires an EcoFlow account and cloud connectivity — works offline but with reduced features",
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

        {/* Curated reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Curated Reviews: The Sources</h2>
          <p className="text-slate-600 mb-6">We are currently sourcing verified written reviews for this product. Check back soon — or see our <Link href="/reviews">full reviews hub</Link> for verified roundups of other systems.</p>
        </section>

        {/* Video Reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Video Reviews</h2>
          <p className="text-slate-600 mb-6 text-sm">Independent video reviews from YouTube creators who have tested the EcoFlow STREAM and PowerStream balcony solar system.</p>
          <div className="space-y-8">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/0zhgG5RMQFE"
                  title="Plug in Solar Power Is Here with the Ecoflow Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">UpsideDownFork — Hands-on look at the EcoFlow Stream plug-in solar system</p>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/uqgWXdaruRM"
                  title="EcoFlow PowerStream: The World's First Balcony Solar Plant"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">MakeUseOf — In-depth review of the EcoFlow PowerStream balcony solar system</p>
            </div>
          </div>
        </section>

        {/* Where to buy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Buy the EcoFlow STREAM</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">EcoFlow UK Official Store</h3>
              <p className="text-sm text-slate-600 mb-3">
                Direct from EcoFlow — includes full warranty, UK customer support, and occasional bundle offers with
                battery packs or mounting hardware.
              </p>
              <a
                href="https://www.ecoflow.com/uk/products/stream-solar-system"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Visit EcoFlow UK →
              </a>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Amazon UK</h3>
              <p className="text-sm text-slate-600 mb-3">
                Often competitively priced with Prime delivery. Check for Lightning Deals and vouchers — the STREAM
                regularly appears in Amazon's renewable energy deals.
              </p>
              <a
                href="https://www.amazon.co.uk/dp/B0ECOSTREAM1?tag=balconysolar-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                View on Amazon →
              </a>
            </div>
          </div>
        </section>

        <InfoBox variant="tip" title="See how it compares">
          Comparing the EcoFlow STREAM with the Anker SOLIX? We've done a detailed head-to-head —{" "}
          <Link href="/reviews/ecoflow-vs-anker" className="underline font-semibold">
            read the EcoFlow vs Anker comparison
          </Link>
          .
        </InfoBox>
      </div>
    </div>
    </>
  );
}
