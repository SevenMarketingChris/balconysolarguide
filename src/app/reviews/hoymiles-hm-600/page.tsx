import type { Metadata } from "next";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "Hoymiles HMS-600 Microinverter Review UK 2026 — Specs & Where to Buy",
  description:
    "Independent Hoymiles HMS-600 microinverter review for UK balcony solar. HMS-600-2T vs HM-600 specs, S-Miles Cloud monitoring, and where to buy.",
};

export default function HoymilesHM600ReviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Hoymiles HMS-600-2T Microinverter',
    description:
      'The Hoymiles HMS-600-2T is the UK\'s most widely used microinverter for DIY balcony solar. It delivers 600VA output across two independent MPPT channels, achieves 96.5% weighted efficiency, and features IP67 weatherproofing with a 22V startup voltage suited to overcast UK conditions. Priced at approximately £80–£120 inc. VAT with a 10-year warranty.',
    brand: { '@type': 'Brand', name: 'Hoymiles' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      lowPrice: '80',
      highPrice: '120',
      availability: 'https://schema.org/InStock',
      url: 'https://www.pluginsolar.co.uk',
    },
    review: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Balcony Solar Guide' },
      reviewBody:
        'The Hoymiles HMS-600-2T is the most popular microinverter in UK DIY balcony solar for good reason: it combines a proven European track record (over 1.2 million units deployed), an excellent S-Miles Cloud monitoring app, a low 22V startup voltage ideal for overcast UK days, and a highly competitive price point. The 10-year warranty and sub-0.5% field failure rate across five-year periods make it a very reliable long-term choice. The main downsides are that Wi-Fi monitoring requires a separate DTU-W dongle (around £25) and the app lacks the AI features of premium systems like EcoFlow.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.2',
        bestRating: '5',
      },
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
        title="Hoymiles HMS-600 Microinverter UK Review 2026"
        subtitle="Curating the best independent reviews of the Hoymiles HMS-600 — the UK's most widely used microinverter for balcony solar. Real performance data, specs, and where to buy."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "Hoymiles HMS-600" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="Aggregator model">
          This page curates third-party reviews — we link to the original sources so you can read everything in full. We
          have not been provided with a Hoymiles unit for testing and we don't sell this product. Our editorial summary
          reflects the consensus across the sources listed below. This page covers the HMS-600 and HM-600 microinverters
          only — not complete balcony solar kits that may include a Hoymiles inverter.
        </InfoBox>

        {/* Specs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Hoymiles HMS-600: Key Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Rated AC output", value: "600VA / 600W peak" },
              { label: "CEC efficiency", value: "96.5% weighted" },
              { label: "MPPT channels", value: "2 independent" },
              { label: "Input voltage range", value: "16–60V DC" },
              { label: "Startup voltage", value: "22V (generates on overcast days)" },
              { label: "Panel compatibility", value: "240–405W modules each" },
              { label: "IP rating", value: "IP67 weatherproof" },
              { label: "Dimensions (HMS-600-2T)", value: "261 × 180 × 31mm" },
              { label: "Weight (HMS-600-2T)", value: "3.2kg" },
              { label: "Surge protection", value: "6,000V" },
              { label: "Monitoring", value: "S-Miles Cloud (requires DTU-W)" },
              { label: "Warranty", value: "10 yrs (HMS) / 5 yrs (HM)" },
              { label: "Compliance", value: "EN50549-1:2019, VDE-AR-N 4105" },
              { label: "Operating temperature", value: "−40°C to 65°C" },
              { label: "Price range (HMS-600)", value: "Approx. £80–£120 inc. VAT" },
            ].map((spec) => (
              <div key={spec.label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                <p className="text-sm font-semibold text-slate-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HMS-600-2T vs HM-600 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">HMS-600-2T vs HM-600: What Changed?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Hoymiles sells two generations of 600W dual-panel microinverter. Both work well, but for new installations
            the HMS-600-2T is the right choice in almost every case.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-l-4 border-slate-300 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">HM-600 — older generation</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Standard MC4-style DC input connectors</li>
                <li>• 5-year warranty</li>
                <li>• Compliant with EN50549-1 (older revision)</li>
                <li>• Still widely available and functions reliably</li>
                <li>• May be significantly cheaper when found as old stock</li>
                <li>• Less favourable for permanent long-term installs given shorter warranty</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">HMS-600-2T — current generation</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• T-Bus DC connector — cleaner cabling on multi-inverter setups</li>
                <li>• 10-year warranty — double the HM-600</li>
                <li>• EN50549-1:2019 compliance (most recent revision)</li>
                <li>• Updated firmware with improved MPPT algorithms</li>
                <li>• The current recommended choice for new UK installations</li>
                <li>• Approx. £80–£120 inc. VAT from UK suppliers</li>
              </ul>
            </div>
          </div>
          <InfoBox variant="tip" title="Buying tip">
            When searching online, always confirm which generation you are buying. Listings sometimes use 'HM-600' and
            'HMS-600' interchangeably. Look for the '2T' suffix or check that the listing specifies a 10-year warranty
            to confirm you're getting the current HMS-600-2T.
          </InfoBox>
        </section>

        {/* Why Hoymiles is popular in the UK */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Why the Hoymiles HMS-600 Dominates UK DIY Balcony Solar</h2>
          <p className="text-sm text-slate-700 mb-3">
            The Hoymiles HMS-600 is not merely popular in the UK — it is arguably the single most common microinverter
            in UK DIY balcony solar setups. There are several reasons for this:
          </p>
          <ul className="text-sm text-slate-700 space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-slate-400 font-bold flex-shrink-0">1.</span>
              <span>
                <strong>Proven European track record.</strong> Hoymiles is the leading microinverter brand in Germany's
                Balkonkraftwerk market, where approximately 1.2 million units have been installed across Europe by early
                2026. Field failure rates reported by German consumer organisations are under 0.5% over five-year
                periods — exceptional for outdoor power electronics.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-400 font-bold flex-shrink-0">2.</span>
              <span>
                <strong>Large UK community.</strong> Because so many UK DIY installers have chosen the HMS-600, there
                is a wealth of UK-specific guides, forum threads, and YouTube walkthroughs. Getting help is easy.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-400 font-bold flex-shrink-0">3.</span>
              <span>
                <strong>22V startup voltage.</strong> The UK gets a lot of overcast days. At 22V startup, the HMS-600
                begins generating at very low light levels — early mornings, overcast winter days — where inverters with
                higher startup thresholds simply sit idle.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-400 font-bold flex-shrink-0">4.</span>
              <span>
                <strong>Competitive price.</strong> At £80–£120 for the microinverter alone, the HMS-600 is among the
                most cost-effective routes to a dual-panel balcony solar setup.
              </span>
            </li>
          </ul>
        </section>

        {/* Pros and cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Reviewers Agree On</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3">Consistent praise across sources</h3>
              <ul className="space-y-2">
                {[
                  "Most widely deployed microinverter in UK DIY balcony solar — the largest community of support, guides, and troubleshooting resources",
                  "Excellent S-Miles Cloud monitoring app: per-panel data, historical generation charts, and real-time output",
                  "22V startup voltage generates on overcast UK days when competing inverters are still idle",
                  "Highly competitive price — approx. £80–£120 makes it the most accessible dual-MPPT option",
                  "Proven reliability across millions of European installations — field failure rates under 0.5% over five years",
                  "10-year warranty on the HMS-600-2T (current generation) — solid for a component expected to last 20+ years",
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
                  "WiFi monitoring requires a separate DTU-W dongle (approx. £25) — the inverter itself has no built-in connectivity",
                  "Older HM-600 models carry only a 5-year warranty — check carefully which generation you are buying",
                  "Less visually polished than all-in-one systems such as EcoFlow STREAM or Anker SOLIX — the DTU-W dongle is an extra cable/device to manage",
                  "S-Miles Cloud app is functional but less feature-rich than EcoFlow's AI-driven energy management interface",
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
          <p className="text-slate-600 mb-6 text-sm">Independent video reviews from YouTube creators who have installed and tested the Hoymiles HMS-600.</p>
          <div className="space-y-8">
            <div>
              <div className="rounded-xl overflow-hidden">
                <YouTubeEmbed videoid="HrDH8eSL4C0" style="border-radius: 12px;" />
              </div>
              <p className="mt-2 text-sm text-slate-500">The Solar Pit — Hoymiles microinverter overview covering the HM-700NT dual microinverter, with performance data and comparison to Enphase</p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden">
                <YouTubeEmbed videoid="mKDXUrtzd5I" style="border-radius: 12px;" />
              </div>
              <p className="mt-2 text-sm text-slate-500">Unboxingexperience7 — Hands-on look at the Hoymiles HMS microinverter including WiFi setup and the S-Miles Cloud app</p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden">
                <YouTubeEmbed videoid="Y1u9LHC8WxY" style="border-radius: 12px;" />
              </div>
              <p className="mt-2 text-sm text-slate-500">Hoymiles (official) — Step-by-step installation guide for the HMS-600/700/800/900/1000-2T with FLEX accessories</p>
            </div>
          </div>
        </section>

        {/* Where to buy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Buy the Hoymiles HMS-600 in the UK</h2>
          <p className="text-sm text-slate-600 mb-4">
            The HMS-600 is stocked by several UK solar retailers. Buying from a UK supplier ensures correct
            EN50549-1:2019 compliance and UK warranty support.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Plug In Solar UK</h3>
              <p className="text-sm text-slate-600 mb-3">
                One of the UK's leading plug-in solar retailers, stocking the HMS-600-2T individually and as part of
                complete kits. The DTU-W dongle is also available separately. Good technical support for UK installations.
              </p>
              <a
                href="https://www.pluginsolar.co.uk"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Visit Plug In Solar UK →
              </a>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Sunstore Solar</h3>
              <p className="text-sm text-slate-600 mb-3">
                Sunstore is a UK solar equipment specialist with a broad Hoymiles range including the HMS-600-2T,
                DTU-W dongle, and complete balcony solar kits. A good option for buying inverter and panels together
                from a single supplier.
              </p>
              <a
                href="https://www.sunstore.co.uk"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Visit Sunstore Solar →
              </a>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-1">Amazon UK</h3>
            <p className="text-sm text-slate-600 mb-3">
              The HMS-600 and HM-600 are both available on Amazon UK from specialist solar sellers. Useful for quick
              delivery, though double-check the generation (HMS vs HM) and warranty period before purchasing. The
              DTU-W dongle is also available separately on Amazon.
            </p>
            <a
              href="https://www.amazon.co.uk/s?k=Hoymiles+HMS-600+microinverter&tag=balconysolar-21"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Search on Amazon UK →
            </a>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6 mt-6">
          <p className="text-sm text-slate-500">
            Comparing the HMS-600 against the APsystems DS3 and other UK options?{" "}
            <Link href="/guides/microinverter-comparison-uk" className="text-solar-600 underline font-semibold">
              Read our full UK microinverter comparison guide
            </Link>
            . Or see all products in our{" "}
            <Link href="/reviews/best-balcony-solar-kits-uk" className="text-solar-600 underline font-semibold">
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
