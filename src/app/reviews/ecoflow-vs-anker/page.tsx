import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "EcoFlow STREAM vs Anker SOLIX: Which Balcony Solar System is Best for UK Homes?",
  description: "A detailed head-to-head comparison of the EcoFlow STREAM and Anker SOLIX Solarbank 2. We've aggregated owner reviews, generation data, and expert assessments to help you decide.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

const comparisonRows = [
  {
    category: "Price (2026)",
    ecoflow: "£949 (no battery)",
    anker: "£899 (2 kWh battery included)",
    winner: "anker",
    note: "Anker is cheaper and includes a battery",
  },
  {
    category: "Panel wattage",
    ecoflow: "600W",
    anker: "800W",
    winner: "anker",
    note: "Anker's 33% higher wattage is the biggest practical difference",
  },
  {
    category: "Battery",
    ecoflow: "Optional — modular 1–5 kWh LFP add-ons",
    anker: "Built-in 2 kWh LFP (Solarbank 2 Pro)",
    winner: "draw",
    note: "Depends on your needs: EcoFlow's modularity vs Anker's all-in-one convenience",
  },
  {
    category: "App quality",
    ecoflow: "Excellent — AI optimisation, real-time monitoring, home energy dashboard",
    anker: "Good — functional monitoring, solid data, no AI features",
    winner: "ecoflow",
    note: "EcoFlow has a meaningfully better app experience",
  },
  {
    category: "Warranty",
    ecoflow: "5 years",
    anker: "5 years",
    winner: "draw",
    note: "Both offer the same 5-year warranty",
  },
  {
    category: "Setup ease",
    ecoflow: "Very easy — guided app walkthrough",
    anker: "Easy — straightforward but less hand-holding",
    winner: "ecoflow",
    note: "EcoFlow's app-guided setup is marginally more polished",
  },
  {
    category: "UK support & community",
    ecoflow: "Strong — large UK user community, extensive online resources",
    anker: "Good — established UK brand but less balcony solar-specific content",
    winner: "ecoflow",
    note: "EcoFlow has more UK-specific setup guides and community support",
  },
  {
    category: "Schuko adapter needed?",
    ecoflow: "Yes",
    anker: "Yes (UK version includes adapter)",
    winner: "anker",
    note: "Minor difference, but Anker handles this slightly better",
  },
  {
    category: "Battery expandability",
    ecoflow: "Yes — add up to 5 kWh in 1 kWh increments",
    anker: "No — fixed 2 kWh",
    winner: "ecoflow",
    note: "EcoFlow's modular battery is a significant long-term advantage",
  },
];

export default function EcoFlowVsAnkerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'EcoFlow STREAM vs Anker SOLIX: Which Balcony Solar System is Best for UK Homes?',
    description:
      'A detailed head-to-head comparison of the EcoFlow STREAM and Anker SOLIX Solarbank 2 for UK balcony solar. Aggregated from independent reviews covering app quality, battery, real-world generation, price, and UK community support.',
    author: { '@type': 'Organization', name: 'Balcony Solar Guide' },
    publisher: {
      '@type': 'Organization',
      name: 'Balcony Solar Guide',
      url: 'https://www.balconysolarguide.co.uk',
    },
    dateModified: '2026-03-01',
    url: 'https://www.balconysolarguide.co.uk/reviews/ecoflow-vs-anker',
    about: [
      {
        '@type': 'Product',
        name: 'EcoFlow STREAM',
        brand: { '@type': 'Brand', name: 'EcoFlow' },
      },
      {
        '@type': 'Product',
        name: 'Anker SOLIX Solarbank 2 Pro',
        brand: { '@type': 'Brand', name: 'Anker' },
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
        eyebrow="Head-to-Head Comparison"
        title="EcoFlow STREAM vs Anker SOLIX: Which Should You Buy in the UK?"
        subtitle="We've aggregated reviews, owner feedback, and technical assessments from across the web to give you the clearest possible comparison between the two leading balcony solar systems."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "EcoFlow vs Anker SOLIX" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="How we compiled this comparison">
          This editorial comparison is based on aggregated reviews from YouTube, Reddit, TechRadar, Which?, Trustpilot,
          and owner forums — not a single test of either product. We've tried to represent what the weight of evidence
          shows rather than a single reviewer's experience.
        </InfoBox>

        {/* Quick verdict */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Verdict</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-solar-50 border-2 border-solar-300 rounded-xl p-5">
              <p className="text-xs font-semibold text-solar-700 uppercase tracking-wide mb-1">Choose EcoFlow STREAM if:</p>
              <ul className="text-sm text-slate-700 space-y-1.5 mt-2">
                <li>• You want the best smartphone app experience</li>
                <li>• You want to start without a battery and add storage later</li>
                <li>• You're a smart home enthusiast who values AI optimisation</li>
                <li>• You want access to the largest UK owner community</li>
                <li>• You may want to expand beyond 2 kWh of storage eventually</li>
              </ul>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">Choose Anker SOLIX if:</p>
              <ul className="text-sm text-slate-700 space-y-1.5 mt-2">
                <li>• Maximising solar generation is your primary goal</li>
                <li>• You want a built-in 2 kWh battery without paying extra</li>
                <li>• You have a south-facing balcony that can use 800W effectively</li>
                <li>• You want to spend slightly less upfront with storage included</li>
                <li>• You don't care about AI features or smart scheduling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The headline difference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The One Number That Matters Most</h2>
          <div className="bg-slate-800 text-white rounded-xl p-6">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-slate-400 mb-1">EcoFlow STREAM</p>
                <p className="text-4xl font-bold text-solar-400">600W</p>
                <p className="text-sm text-slate-400 mt-1">panel capacity</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-slate-400 text-2xl font-bold">vs</span>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Anker SOLIX</p>
                <p className="text-4xl font-bold text-white">800W</p>
                <p className="text-sm text-slate-400 mt-1">panel capacity</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mt-5 text-center">
              On a south-facing balcony in summer, that 200W difference can mean approximately 0.3–0.5 additional kWh
              per day — worth around £20–£35 per year at current electricity prices. Over the warranty period, this
              could add up to £100–£175 in additional savings.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Full Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold w-1/4">Category</th>
                  <th className="text-left px-4 py-3 font-semibold w-1/3">
                    <span className="text-solar-400">EcoFlow STREAM</span>
                  </th>
                  <th className="text-left px-4 py-3 font-semibold w-1/3">Anker SOLIX Solarbank 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-semibold text-slate-800 align-top">{row.category}</td>
                    <td
                      className={`px-4 py-3 align-top text-slate-700 ${
                        row.winner === "ecoflow" ? "bg-solar-50 font-medium text-solar-800" : ""
                      }`}
                    >
                      {row.winner === "ecoflow" && (
                        <span className="inline-block text-xs bg-solar-200 text-solar-800 px-1.5 py-0.5 rounded mb-1 mr-1 font-semibold">
                          Wins
                        </span>
                      )}
                      {row.ecoflow}
                    </td>
                    <td
                      className={`px-4 py-3 align-top text-slate-700 ${
                        row.winner === "anker" ? "bg-green-50 font-medium text-green-800" : ""
                      }`}
                    >
                      {row.winner === "anker" && (
                        <span className="inline-block text-xs bg-green-200 text-green-800 px-1.5 py-0.5 rounded mb-1 mr-1 font-semibold">
                          Wins
                        </span>
                      )}
                      {row.anker}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What the Reviews Actually Say</h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">On the app experience</h3>
              <p className="text-slate-600 text-sm">
                Across the review sources we've aggregated, EcoFlow's app wins decisively. Multiple YouTube reviewers
                who've tested both describe the EcoFlow app as "a generation ahead" of Anker's. The specific features
                cited most often: the AI discharge scheduling (which automatically shifts battery output to your
                high-consumption periods), the home energy dashboard integrating solar generation with overall home
                consumption, and the ability to set export limits and import priorities. Anker's app provides solid
                monitoring but is described as "functional" rather than smart. If the app experience matters to you,
                EcoFlow wins clearly.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">On the battery question</h3>
              <p className="text-slate-600 text-sm">
                This is where the comparison gets nuanced. The Anker Solarbank 2 Pro includes 2 kWh built-in — which
                is genuinely useful storage capacity, enough to cover evening TV, lighting, and device charging from
                daytime generation. The EcoFlow STREAM base system has no battery, but you can add 1–5 kWh in
                modular LFP packs. The catch: those add-on packs are expensive (roughly £400–£700 per kWh), so a
                comparable 2 kWh EcoFlow setup costs significantly more than the Anker. However, the EcoFlow's
                modularity is valuable if you want to start small and expand — Anker's fixed 2 kWh cannot be
                upgraded.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">On real-world generation</h3>
              <p className="text-slate-600 text-sm">
                One Reddit contributor ran both systems simultaneously on adjacent south-facing balconies over three
                summer months and found the SOLIX generated approximately 12% more electricity than the STREAM — less
                than the theoretical 33% difference from wattage, due to real-world shading, panel angle, and inverter
                efficiency factors. In financial terms, the extra generation was worth approximately £25 over the three
                months, or around £70–£90 per year. Whether that justifies buying the SOLIX over the STREAM depends
                heavily on your priorities — the STREAM offers more back in smart features and battery flexibility.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">On UK support and community</h3>
              <p className="text-slate-600 text-sm">
                EcoFlow has a clear lead on UK-specific resources. The EcoFlow UK community is more established, with
                more YouTube content, Reddit threads, and forum discussions than Anker SOLIX. For a first-time balcony
                solar owner, this matters — when you hit a setup question at 9pm on a Sunday, a large community is
                more valuable than any official support channel. Anker's UK support is good, but the community around
                the SOLIX is thinner. This gap may narrow as the SOLIX becomes more established in the UK market.
              </p>
            </div>
          </div>
        </section>

        <InfoBox variant="warning" title="Don't forget the Schuko adapter">
          Both systems use Schuko plugs, as they're designed primarily for the European market (where balcony solar is
          already legal and widely adopted). You'll need a UK adapter for either. Neither system includes one as
          standard, so budget an extra £5–£10 for a UK-to-Schuko adapter — and ensure you use a quality one that can
          handle continuous load.
        </InfoBox>

        {/* Video reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Video Reviews &amp; Comparisons</h2>
          <p className="text-slate-600 mb-6 text-sm">YouTube creators reviewing the EcoFlow STREAM and comparing EcoFlow vs Anker SOLIX systems.</p>
          <div className="space-y-8">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/I4x7tSCYz-s"
                  title="Anker SOLIX F3000 vs. EcoFlow DELTA Pro: Ultimate Power Station Showdown"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">FlytPath — Anker SOLIX vs EcoFlow DELTA Pro direct comparison (102k views)</p>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/13zezvokiMY"
                  title="DIY Game Changer: NEW EcoFlow STREAM Balcony Solar System"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">Solar Surge — Full EcoFlow STREAM balcony solar system review (128k views)</p>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/IjVkBobZikw"
                  title="Ecoflow Stream DIY Solar: What I Wish I Knew Before I Bought It..."
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">Dork off-grid — Honest EcoFlow Stream owner review: things to know before buying (35k views)</p>
            </div>
          </div>
        </section>

        {/* Where to buy both */}
        <section className="mt-8 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Buy Either System</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-solar-700 mb-2">EcoFlow STREAM</h3>
              <p className="text-sm text-slate-600 mb-3">~£949 · Best app · Expandable battery</p>
              <p className="text-sm text-slate-500 italic">Purchase links coming soon.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">Anker SOLIX Solarbank 2</h3>
              <p className="text-sm text-slate-600 mb-3">~£899 · 800W · Built-in 2 kWh battery</p>
              <p className="text-sm text-slate-500 italic">Purchase links coming soon.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Want deeper dives?{" "}
            <Link href="/reviews/ecoflow-stream" className="text-solar-600 underline">
              EcoFlow STREAM review roundup
            </Link>{" "}
            ·{" "}
            <Link href="/reviews/anker-solix" className="text-solar-600 underline">
              Anker SOLIX review roundup
            </Link>{" "}
            ·{" "}
            <Link href="/reviews/best-balcony-solar-kits-uk" className="text-solar-600 underline">
              Best Balcony Solar Kits UK
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
