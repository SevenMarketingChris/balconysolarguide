import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Balcony Solar Panel Reviews UK 2026 — Curated from Trusted Sources | Balcony Solar Guide",
  description: "We curate the best independent balcony solar reviews from YouTube, Reddit, Which?, and Trustpilot — so you get an honest picture before spending several hundred pounds.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

const products = [
  {
    href: "/reviews/ecoflow-stream",
    name: "EcoFlow STREAM",
    price: "~£949",
    tag: "Our Top Pick",
    tagColour: "bg-solar-500",
    description:
      "A complete plug-and-play balcony solar system with AI-powered energy management, expandable LFP battery, and one of the best monitoring apps on the market. See what UK users and independent reviewers actually think.",
    specs: ["600W panels", "800W micro-inverter", "Optional 1–5 kWh battery", "5-year warranty"],
  },
  {
    href: "/reviews/anker-solix",
    name: "Anker SOLIX Solarbank 2",
    price: "~£899",
    tag: "Highest Output",
    tagColour: "bg-slate-700",
    description:
      "Anker's flagship balcony solar system delivers 800W of panel capacity and comes with a built-in 2 kWh battery in the Pro version. Strong build quality at a slightly lower price than the EcoFlow STREAM.",
    specs: ["800W panels", "Solarbank 2 Pro: 2 kWh built-in", "Smart app", "5-year warranty"],
  },
  {
    href: "/reviews/apsystems-ds3",
    name: "APsystems DS3 Microinverter",
    price: "~£149–£299",
    tag: "Best Microinverter",
    tagColour: "bg-blue-600",
    description:
      "APsystems' dual-MPPT microinverter is one of the most popular DIY choices for balcony solar. Up to 97% efficiency, Zigbee connectivity for panel-level monitoring, and a 10-year standard warranty with 20-year option.",
    specs: ["Up to 880W output", "Dual MPPT", "Zigbee monitoring", "10/20yr warranty"],
  },
  {
    href: "/reviews/hoymiles-hm-600",
    name: "Hoymiles HMS-600-2T",
    price: "~£89–£149",
    tag: "Budget Microinverter",
    tagColour: "bg-green-700",
    description:
      "The Hoymiles HMS-600-2T is the UK's best-selling budget microinverter — compact, reliable, and widely compatible. At 96.5% CEC efficiency and under £150, it's the default choice for a no-frills 600W balcony system.",
    specs: ["600W output", "96.5% CEC efficiency", "DTU monitoring", "12-year warranty"],
  },
  {
    href: "/reviews/jackery-navi-2000",
    name: "Jackery Navi 2000",
    price: "Not available in UK",
    tag: "Not sold in UK",
    tagColour: "bg-amber-600",
    description:
      "The Navi 2000 is a real balcony power station — but it launched in Germany and has never been sold through the UK store. No UK product page, no Amazon UK listing, no GBP pricing. See our page for details and UK alternatives.",
    specs: ["EU market only", "No UK listing", "No Amazon UK ASIN", "Last checked Mar 2026"],
    cta: "See what we found →",
  },
  {
    href: "/reviews/plug-in-solar-kit",
    name: "Plug-in Solar 600W Kit",
    price: "~£399",
    tag: "Budget Kit",
    tagColour: "bg-slate-500",
    description:
      "The no-frills DIY approach: proven Hoymiles micro-inverter paired with 600W solar panels. No app, no battery, no monthly subscription — just solid, reliable electricity generation at the lowest entry price.",
    specs: ["600W panels", "Hoymiles micro-inverter", "No battery", "No app required"],
  },
];

const comparisonPages = [
  {
    href: "/reviews/best-balcony-solar-kits-uk",
    name: "Best Balcony Solar Kits UK 2026",
    description:
      "Our main comparison page. Side-by-side table of every major system, curated expert verdict, and which we'd recommend for different budgets and balcony types.",
    cta: "See full comparison →",
  },
  {
    href: "/reviews/ecoflow-vs-anker",
    name: "EcoFlow STREAM vs Anker SOLIX",
    description:
      "The two most popular premium balcony solar systems go head-to-head. We've gathered every major review and comparison so you don't have to.",
    cta: "Read the comparison →",
  },
];

export default function ReviewsHubPage() {
  return (
    <div>
      <PageHero
        eyebrow="Reviews"
        title="Balcony Solar Reviews: Curated from Across the Web"
        subtitle="We don't sell products and we don't write our own reviews. Instead, we gather the best independent reviews from YouTube, Reddit, Which?, Trustpilot, and specialist forums — so you get an honest picture before you spend several hundred pounds."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "Reviews" }]} />

        <InfoBox variant="info" title="How this works">
          Every product page on this site aggregates reviews from independent sources: real owners on Reddit, video
          reviews from YouTube creators who bought the product themselves, coverage from consumer press like Which? and
          TechRadar, and Trustpilot data. We link out to the original sources so you can read everything in full. Our
          editorial summaries tell you what the consensus is across those sources.
        </InfoBox>

        {/* Comparison pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Start Here: Comparison Guides</h2>
          <p className="text-slate-600 mb-6">
            Not sure which system to buy? These pages compare the major options side by side so you can narrow down your
            choice before diving into individual reviews.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {comparisonPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block border border-slate-200 rounded-xl p-5 hover:border-solar-400 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-solar-700 mb-2 text-lg">{page.name}</h3>
                <p className="text-slate-600 text-sm mb-3">{page.description}</p>
                <span className="text-solar-600 text-sm font-semibold">{page.cta}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Individual product reviews */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Individual Product Review Roundups</h2>
          <p className="text-slate-600 mb-6">
            Each page below aggregates reviews from multiple independent sources for one specific product. We summarise
            the consensus and link to every source.
          </p>
          <div className="grid gap-6">
            {products.map((product) => (
              <div
                key={product.href}
                className="border border-slate-200 rounded-xl p-6 hover:border-solar-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span
                      className={`inline-block ${product.tagColour} text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2`}
                    >
                      {product.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                    <p className="text-slate-500 text-sm">{product.price}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec) => (
                    <span key={spec} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
                <Link
                  href={product.href}
                  className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  {product.cta ?? "Read review roundup →"}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology note */}
        <section className="mt-14 bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Why We Curate Instead of Reviewing</h2>
          <p className="text-slate-600 mb-4">
            Writing a genuine review of a balcony solar system requires months of ownership, electricity monitoring
            data, and hands-on experience through different seasons. Rather than produce a single opinion piece after a
            few weeks, we think you're better served by seeing the aggregate of many real-world experiences.
          </p>
          <p className="text-slate-600 mb-4">
            When ten YouTube creators, a hundred Reddit threads, and Which? magazine all agree on the same strengths
            and weaknesses, that's far more reliable than any single reviewer's view — including ours.
          </p>
          <p className="text-slate-600">
            We update our review roundups when significant new reviews appear or when product firmware updates change
            the user experience materially.
          </p>
        </section>
      </div>
    </div>
  );
}
