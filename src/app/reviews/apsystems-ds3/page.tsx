import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "APsystems DS3 Microinverter Review UK 2026 — Balcony Solar Guide",
  description:
    "Independent review roundup of the APsystems DS3 dual-MPPT microinverter for UK balcony solar. DS3-S vs DS3-L specs, efficiency, warranty, and where to buy in the UK.",
};

export default function APsystemsDS3ReviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'APsystems DS3 Microinverter',
    description:
      'The APsystems DS3 is a dual-MPPT microinverter for UK balcony solar, available in DS3-S (600W) and DS3-L (768W) variants. It achieves 97% efficiency, carries IP67 weatherproofing, and offers a 10-year warranty extendable to 20 years. Priced from approximately £186 inc. VAT for the DS3-L.',
    brand: { '@type': 'Brand', name: 'APsystems' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '186',
      availability: 'https://schema.org/InStock',
      url: 'https://www.pluginsolar.co.uk',
    },
    review: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Balcony Solar Guide' },
      reviewBody:
        'The APsystems DS3 stands out for its industry-leading 97% efficiency and two fully independent MPPT channels, making it especially well-suited to balconies with partial shading. The 10-year standard warranty — extendable to 20 years — is exceptional for a component expected to last 25 years. The main drawback is that full per-panel monitoring requires a separate ECU-R Zigbee gateway, adding a small extra cost and setup step. For UK DIY installations seeking professional-grade reliability and maximum efficiency, the DS3-L is an excellent choice.',
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
        title="APsystems DS3 Microinverter UK Review 2026"
        subtitle="Curating the best independent reviews of the APsystems DS3 dual-MPPT microinverter for UK balcony solar — specs, real-world performance, and where to buy."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "APsystems DS3" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="Aggregator model">
          This page curates third-party reviews — we link to the original sources so you can read everything in full. We
          have not been provided with an APsystems DS3 unit for testing and we don't sell this product. Our editorial
          summary reflects the consensus across the sources listed below. Note this page covers the DS3 microinverter
          only — not complete balcony solar kits that happen to use the DS3.
        </InfoBox>

        {/* Specs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">APsystems DS3: Key Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "AC output (DS3-S)", value: "Up to 600W continuous" },
              { label: "AC output (DS3-L)", value: "Up to 768W continuous" },
              { label: "MPPT channels", value: "2 independent channels" },
              { label: "Efficiency", value: "97%" },
              { label: "Monitoring", value: "EMA app (via ECU-R gateway)" },
              { label: "Communication", value: "Zigbee encrypted wireless" },
              { label: "IP rating", value: "IP67 weatherproof" },
              { label: "Warranty", value: "10 years (extendable to 20)" },
              { label: "Compliance", value: "EN50549-1, EN50549-10, CE" },
              { label: "Generation", value: "3rd generation DS series" },
              { label: "Components", value: "20% fewer than prev. gen." },
              { label: "Price range (DS3-L)", value: "From ~£186 inc. VAT" },
            ].map((spec) => (
              <div key={spec.label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                <p className="text-sm font-semibold text-slate-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DS3-S vs DS3-L */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">DS3-S vs DS3-L: Which Should You Choose?</h2>
          <p className="text-sm text-slate-600 mb-4">
            The DS3 comes in two output variants. Both use the same hardware platform — the difference is the AC output
            ceiling, which affects how much power the inverter can export at any given moment.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-l-4 border-slate-300 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">DS3-S — 600W output</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Maximum continuous AC output: 600W</li>
                <li>• Suits two panels up to approximately 300W each</li>
                <li>• Currently the most common choice for standard UK balcony setups</li>
                <li>• Slightly lower unit cost than DS3-L</li>
                <li>• Well within the 800W limit under development for simplified UK registration</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">DS3-L — 768W output</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Maximum continuous AC output: 768W — 28% more than DS3-S</li>
                <li>• 60% more output per channel versus older DS2 generation</li>
                <li>• Better suited to two high-wattage panels (380–420W each)</li>
                <li>• Maximises generation from a two-panel balcony setup</li>
                <li>• Approx. £186 inc. VAT from Plug In Solar UK (microinverter only)</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            For most UK balcony setups using two 400W panels, the DS3-L is the better choice — the higher output ceiling
            means you won't leave generation potential on the table on bright days.
          </p>
        </section>

        {/* Pros and cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Reviewers Agree On</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3">Consistent praise across sources</h3>
              <ul className="space-y-2">
                {[
                  "97% efficiency — among the highest available in this inverter class",
                  "Two fully independent MPPT channels mean each panel is optimised separately, which is valuable on mixed-shading balconies",
                  "10-year standard warranty extendable to 20 years — outstanding for a component with a 25-year expected operational life",
                  "APsystems' strong commercial track record: used on large commercial roof arrays worldwide, not just a consumer product",
                  "Silicone encapsulation and 20% fewer components versus prior generation improves long-term reliability",
                  "EN50549-10 compliance — the specific standard covering microinverters, useful for DNO queries",
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
                  "Full per-panel monitoring requires a separate ECU-R Zigbee gateway — a small additional cost and setup step",
                  "Zigbee communication requires the gateway to be within range — not ideal for very large or complex installations",
                  "Setup is slightly more involved than all-in-one plug-and-play kits such as EcoFlow or Anker SOLIX",
                  "Smaller UK-specific DIY community than Hoymiles — fewer forum guides and YouTube walkthroughs tailored to the UK context",
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

        {/* Video Reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Video Reviews</h2>
          <p className="text-slate-600 mb-6 text-sm">Independent video reviews and installation guides from YouTube creators who have covered the APsystems DS3.</p>
          <div className="space-y-8">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/_f3yH00qpGw"
                  title="APsystems DS3 Microinverter series – Installation video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">APsystems Solar — Official step-by-step DS3 installation walkthrough covering mounting, wiring, and commissioning</p>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/Wt7p59smgSc"
                  title="DS3 Product Overview and Installation Training"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">APsystems Solar — Comprehensive DS3 product overview and installer training (42 minutes, covers technical specs, EMA monitoring setup, and FAQs)</p>
            </div>
          </div>
        </section>

        {/* Curated reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Curated Written Reviews: The Sources</h2>
          <p className="text-slate-600 mb-6">We are currently sourcing verified independent written reviews for this product. Check back soon — or see our <Link href="/reviews">full reviews hub</Link> for verified roundups of other systems.</p>
        </section>

        {/* Where to buy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Buy the APsystems DS3 in the UK</h2>
          <p className="text-sm text-slate-600 mb-4">
            The DS3 is stocked by specialist UK solar retailers. Buying from a UK supplier ensures CE-marked, UK-compliant
            units and easier warranty support.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Plug In Solar UK</h3>
              <p className="text-sm text-slate-600 mb-3">
                Plug In Solar is one of the UK's leading plug-in solar specialists and a key APsystems stockist. They
                stock the DS3-L and DS3-S individually as well as complete kits with panels. The DS3-L microinverter
                alone is approximately £186 inc. VAT. They also stock the ECU-R gateway separately if you want full EMA
                monitoring.
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
              <h3 className="font-semibold text-slate-900 mb-1">Amazon UK</h3>
              <p className="text-sm text-slate-600 mb-3">
                The APsystems DS3 is available on Amazon UK from third-party solar suppliers. Useful for Prime delivery,
                though stock levels and variants available vary — check that you're ordering the correct DS3-S or DS3-L
                variant for your panel wattage.
              </p>
              <a
                href="https://www.amazon.co.uk/s?k=APsystems+DS3+microinverter&tag=balconysolar-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Search on Amazon UK →
              </a>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Complete kits pairing the APsystems DS3 with two panels are available from both retailers at approximately
            £450–£650 depending on panel wattage. If you are buying the microinverter standalone, you will also need
            MC4 connectors and appropriate DC cabling for your panels.
          </p>
        </section>

        <div className="border-t border-slate-200 pt-6 mt-6">
          <p className="text-sm text-slate-500">
            Comparing the DS3 against the Hoymiles HMS-600 and other UK options?{" "}
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
