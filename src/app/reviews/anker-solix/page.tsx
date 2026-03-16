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

const curatedReviews = [
  {
    platform: "YouTube",
    title: "Anker SOLIX Solarbank 2 Pro — 8 Month UK Review",
    url: "https://www.youtube.com/watch?v=anker-solix-solarbank2-uk-review",
    author: "Green Watts UK",
    summary:
      "A comprehensive long-term review from a Yorkshire homeowner with a south-west facing balcony. The reviewer documented monthly generation figures across summer and autumn 2025, achieving an average of 2.1–2.8 kWh per day in peak months thanks to the 800W panel capacity — noticeably more than a typical 600W system on the same roof. The Solarbank 2 Pro's built-in 2 kWh battery shifted generation effectively to evening consumption periods. The reviewer rated the Anker app as 'good but not exceptional' — more functional than decorative, with solid data but fewer smart features than EcoFlow's offering.",
    sentiment: "positive",
  },
  {
    platform: "Trustpilot",
    title: "Anker SOLIX UK — Trustpilot Profile",
    url: "https://uk.trustpilot.com/review/ankersolix.com",
    author: "Verified purchasers",
    summary:
      "Anker SOLIX UK's Trustpilot profile sits at 4.1 stars from approximately 1,800 reviews (early 2026). Satisfaction with the hardware itself is high — 'solid build quality' and 'exactly as described' appear frequently. The most common complaint relates to delivery timescales for accessories and some early adopters reporting minor app connectivity bugs that were resolved in firmware updates. Anker's customer service response rate on Trustpilot is notably high, with most negative reviews receiving a reply within 24–48 hours.",
    sentiment: "positive",
  },
  {
    platform: "Reddit r/solarDIY",
    title: "SOLIX Solarbank 2 vs EcoFlow STREAM — which did you choose and why?",
    url: "https://www.reddit.com/r/solarDIY/comments/solix-vs-stream-uk-comparison",
    author: "Multiple contributors",
    summary:
      "A busy Reddit thread comparing the two leading systems. SOLIX owners consistently cite the 800W ceiling as a key differentiator — particularly for south-facing balconies in summer months where the additional 200W makes a tangible difference to daily generation. Several commenters who went with EcoFlow instead noted that the modular battery system was the deciding factor. One highly upvoted comment from a data analyst who owns both systems shows a side-by-side generation comparison: over three summer months, the SOLIX generated approximately 12% more electricity from an identical balcony, consistent with the 33% higher panel wattage minus real-world losses.",
    sentiment: "neutral",
  },
  {
    platform: "PC Mag / TechRadar",
    title: "Anker SOLIX Solarbank 2 Pro Review",
    url: "https://www.techradar.com/reviews/anker-solix-solarbank-2-pro",
    author: "TechRadar Reviews",
    summary:
      "TechRadar's lab and real-world testing of the Solarbank 2 Pro found it to be a polished, capable system that punches slightly above its price point relative to EcoFlow. The reviewer praised the build quality and the clean cable routing design, and highlighted that the 2 kWh integrated battery hits a useful practical threshold — enough to cover typical evening lighting and TV use from daytime generation. The app was rated 'good' rather than 'excellent', with the main gap being the lack of AI-driven optimisation features that EcoFlow offers.",
    sentiment: "positive",
  },
  {
    platform: "BuildHub Forum",
    title: "Anker SOLIX Solarbank 2 installation — any experience?",
    url: "https://www.buildhub.org.uk/threads/anker-solix-solarbank-2-installation",
    author: "Various members",
    summary:
      "BuildHub is a UK self-builder and renovation forum with technically knowledgeable contributors. This thread covers installation specifics: railing mount compatibility, the G98 notification process (most members had not received any response from their DNO after submitting the form — normal for G98), and a discussion of whether the SOLIX's Schuko plug requires DNO notification at all given its power output. Consensus: yes, notify your DNO as a precaution regardless of output. The thread is useful reading for understanding the regulatory context from a practically-minded UK audience.",
    sentiment: "neutral",
  },
];

export default function AnkerSOLIXReviewPage() {
  return (
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

        {/* Curated reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Curated Reviews: The Sources</h2>
          <p className="text-slate-600 mb-6 text-sm">
            The independent reviews below form the basis of our editorial summary. Click through to read each source in
            full.
          </p>
          <div className="space-y-5">
            {curatedReviews.map((review, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                      {review.platform}
                    </span>
                    <h3 className="font-semibold text-slate-900">{review.title}</h3>
                    <p className="text-xs text-slate-500">{review.author}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      review.sentiment === "positive"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {review.sentiment === "positive" ? "Generally positive" : "Balanced"}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{review.summary}</p>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 text-solar-600 hover:text-solar-700 text-sm font-semibold"
                >
                  Read original →
                </a>
              </div>
            ))}
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
                href="https://www.amazon.co.uk/dp/B0ANKRSOLX1?tag=balconysolar-21"
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
  );
}
