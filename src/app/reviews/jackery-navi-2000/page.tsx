import type { Metadata } from "next";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export const metadata: Metadata = {
  title: "Jackery Navi 2000 UK: Not Available to Buy",
  description: "The Jackery Navi 2000 balcony power station is not sold in the UK. Find out what Jackery offers in the UK and which alternatives to consider.",
};


export default function JackeryNavi2000ReviewPage() {
  return (
    <div>
      <PageHero
        eyebrow="Product Research"
        title="Jackery Navi 2000: Not Available in the UK"
        subtitle="The Jackery Navi 2000 is a real balcony power station — but it launched in Germany and has never been sold through the UK store. Here's what we found, what Jackery does offer in the UK, and what alternatives to consider."
        badge="Verified March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "Jackery Navi 2000" },
          ]}
        />

        <InfoBox variant="warning" title="Not available in the UK">
          We originally listed the Jackery Navi 2000 as a UK product. When we went to verify purchase links in March
          2026, we found that the Navi 2000 has no product page on the UK Jackery store (uk.jackery.com), no confirmed
          UK pricing, and no Amazon UK listing. The buy links we previously showed were incorrect — the ASIN was
          fabricated and the product URL returned a 404. We have removed those links and updated this page to reflect
          what we actually know.
        </InfoBox>

        {/* What the Navi 2000 actually is */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is the Jackery Navi 2000?</h2>
          <p className="text-slate-600 mb-4">
            The Jackery Navi 2000 is a balcony power station — an all-in-one unit combining an inverter, battery, and
            energy management system — that Jackery launched in Germany in 2024. It was designed for the German{" "}
            <em>Balkonkraftwerk</em> (balcony power plant) market, which is far more developed than the UK market due
            to Germany's simpler regulatory framework.
          </p>
          <p className="text-slate-600 mb-4">
            The product is real and appears to work well based on German reviews (see the video reviews below). The
            Jackery UK website (uk.jackery.com) has several blog posts mentioning the Navi 2000, but as of March 2026
            there is no UK product page and no UK pricing has ever been announced.
          </p>
          <p className="text-slate-600">
            Jackery has since announced the <strong>HomePower 2000 Ultra</strong> as a successor product for the
            European market. As of March 2026, this is also not listed for sale on the UK store — only on the EU store
            (eu.jackery.com) in Euros.
          </p>
        </section>

        {/* What the Navi 2000 actually is (specs for reference) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Navi 2000 Specifications (European Product)</h2>
          <p className="text-slate-600 mb-4 text-sm">
            These are the actual specifications of the European Navi 2000, for reference. Note: previous versions of
            this page listed incorrect specs (400W, non-expandable) — the real product is significantly more capable.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Max PV input", value: "Up to 800W (4 × 200W flexible panels)" },
              { label: "Battery capacity", value: "2 kWh LiFePO4 (expandable to 8 kWh)" },
              { label: "Grid feed-in", value: "800W (AC output)" },
              { label: "IP rating", value: "IP65 weatherproof" },
              { label: "App", value: "Jackery App (iOS/Android)" },
              { label: "Connectivity", value: "Bluetooth + Wi-Fi + Shelly integration" },
              { label: "Rapid charge", value: "0–80% in 52 minutes" },
              { label: "UK availability", value: "Not available (as of March 2026)" },
              { label: "UK price", value: "No UK pricing announced" },
            ].map((spec) => (
              <div key={spec.label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                <p className="text-sm font-semibold text-slate-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video reviews (German) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Video Reviews (German Market)</h2>
          <p className="text-slate-600 mb-2 text-sm">
            These German-language reviews give a genuine sense of the product's performance and build quality, even if
            it is not currently sold in the UK.
          </p>
          <p className="text-slate-600 mb-6 text-sm">
            Note: the German regulatory context is different — Germany permits 800W balcony solar with simple
            notification, whereas the UK is still developing its simplified framework (expected 2026–2027).
          </p>
          <div className="space-y-8">
            <div>
              <div className="rounded-xl overflow-hidden">
                <YouTubeEmbed videoid="dUitQn6cknk" style="border-radius: 12px;" />
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Marc testet... — First look and hands-on test of the Jackery Navi 2000 Next Gen. German language. (77k views)
              </p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden">
                <YouTubeEmbed videoid="5VOAbYfAeNA" style="border-radius: 12px;" />
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Marc testet... — Follow-up covering post-update features including Shelly Pro 3EM smart home integration. German language.
              </p>
            </div>
          </div>
        </section>

        {/* Where to buy — honest section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Can You Buy It in the UK?</h2>
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
            <p className="text-sm text-amber-900 mb-3">
              <strong>Short answer: No, not through any verified UK channel.</strong>
            </p>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>— There is no product page at uk.jackery.com for the Navi 2000</li>
              <li>— There is no Amazon UK listing for the Navi 2000</li>
              <li>— No UK GBP pricing has ever been published</li>
              <li>— The successor product (HomePower 2000 Ultra) is sold in Euros on eu.jackery.com but not through the UK store</li>
            </ul>
            <p className="text-sm text-amber-900 mt-3">
              If a Jackery Navi 2000 UK launch is announced, we will update this page with verified links.
            </p>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Buy Instead</h2>
          <p className="text-slate-600 mb-4">
            If you were looking at the Navi 2000 for a small balcony or Juliet balcony, here are the most relevant
            alternatives that are verifiably available in the UK:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <span className="inline-block bg-solar-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">Best overall</span>
              <h3 className="font-semibold text-slate-900 mb-2">EcoFlow STREAM</h3>
              <p className="text-sm text-slate-600 mb-3">
                600W panels, expandable battery, AI energy management, 5-year warranty. Available on Amazon UK and
                EcoFlow's UK store with verified pricing. The strongest complete system currently available in the UK.
              </p>
              <Link
                href="/reviews/ecoflow-stream"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Read the review roundup →
              </Link>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <span className="inline-block bg-slate-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">High output</span>
              <h3 className="font-semibold text-slate-900 mb-2">Anker SOLIX Solarbank 2</h3>
              <p className="text-sm text-slate-600 mb-3">
                800W panels, 2 kWh built-in battery (Pro version), 5-year warranty. Available on Amazon UK and from
                Anker's UK store. Good choice if output is your priority.
              </p>
              <Link
                href="/reviews/anker-solix"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Read the review roundup →
              </Link>
            </div>
          </div>
          <p className="text-slate-600 mt-4 text-sm">
            For a Juliet balcony specifically, see our{" "}
            <Link href="/for-renters/juliet-balcony-solar" className="text-solar-600 underline">
              Juliet balcony solar guide
            </Link>{" "}
            — which covers what can physically mount on a railing-only balcony and what products work in that
            constrained space.
          </p>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Compare all systems in our{" "}
            <Link href="/reviews/best-balcony-solar-kits-uk" className="text-solar-600 underline">
              Best Balcony Solar Kits UK roundup
            </Link>
            . Or browse all{" "}
            <Link href="/reviews" className="text-solar-600 underline">
              product review roundups
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
