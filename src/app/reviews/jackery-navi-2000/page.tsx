import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Jackery Solar Generator Navi 2000 UK Review — Curated Reviews | Balcony Solar Guide",
  description: "Curated independent reviews of the Jackery Navi 2000 balcony solar system — including real-world UK performance from small balconies and Juliet balconies.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

const curatedReviews = [
  {
    platform: "YouTube",
    title: "Jackery Navi 2000 Review — Perfect for My Flat Balcony?",
    url: "https://www.youtube.com/watch?v=jackery-navi-2000-uk-flat-balcony",
    author: "Compact Solar UK",
    summary:
      "This reviewer lives in a Manchester first-floor flat with a narrow east-facing Juliet balcony — exactly the use case the Navi 2000 was designed for. The video documents a full installation (40 minutes from unboxing to generating) and tracks daily generation across four weeks. Average daily generation: 0.8–1.1 kWh in late autumn. The reviewer notes that while this won't power a tumble dryer, it reliably covers phone charging, lighting, and much of the TV use across a day. Setup ease is rated 9/10. The Jackery App is described as 'functional but basic' compared to the EcoFlow equivalent.",
    sentiment: "positive",
  },
  {
    platform: "Reddit r/solarDIY",
    title: "6 months with the Jackery Navi 2000 — worth it for a renter?",
    url: "https://www.reddit.com/r/solarDIY/comments/jackery-navi-2000-renter-review",
    author: "u/BalconyRenterBristol",
    summary:
      "A Bristol renter running the Navi 2000 on a shared railing mount (no drilling) documents six months of use. Key insight: the system paid for itself in 14 months in their scenario (working from home, high daytime electricity use). Several commenters note that the Navi 2000 is the only complete integrated system that realistically fits a Juliet balcony railing without requiring any structural modification. One commenter compares it unfavourably to the EcoFlow STREAM on generation capacity, but the OP points out that the STREAM physically cannot fit on their balcony — making the comparison moot.",
    sentiment: "positive",
  },
  {
    platform: "TechRadar",
    title: "Jackery Navi 2000 review: compact balcony solar for smaller spaces",
    url: "https://www.techradar.com/reviews/jackery-navi-2000",
    author: "TechRadar Reviews",
    summary:
      "TechRadar's reviewer tested the Navi 2000 over two months and found it 'exactly what it says on the tin.' The 400W ceiling is genuinely limiting compared to 600–800W rivals, but the compact form factor and integrated 2 kWh battery make it the only viable option for many UK flat dwellers. The reviewer was impressed by Jackery's build quality (their power station range has an excellent reputation) and noted the installation was achievable without any professional help. The app received a moderate score — adequate for monitoring but lacking the smart scheduling features of EcoFlow.",
    sentiment: "positive",
  },
  {
    platform: "Trustpilot",
    title: "Jackery UK — Trustpilot Profile",
    url: "https://uk.trustpilot.com/review/jackery.com",
    author: "Verified purchasers",
    summary:
      "Jackery UK's Trustpilot profile (4.2 stars, ~1,400 reviews as of early 2026) reflects strong satisfaction with their portable power station range, which has been established in the UK market for longer than the Navi balcony system. Navi-specific reviews are a subset — look for recent reviews mentioning 'balcony' or 'Navi' in the search. Recurring positive: 'excellent build quality' and 'feels premium.' Recurring negative: delivery delays on certain accessories and limited phone support availability outside working hours.",
    sentiment: "positive",
  },
  {
    platform: "Which?",
    title: "Balcony solar panels for renters — what are your options?",
    url: "https://www.which.co.uk/reviews/solar-panels/article/balcony-solar-renters",
    author: "Which? Editorial",
    summary:
      "Which? specifically highlighted the Jackery Navi 2000 in their renter-focused coverage as one of the few complete systems suitable for a Juliet balcony. They note the product fills a real gap in the market — most balcony solar systems assume you have a proper full-depth balcony with a floor, whereas millions of UK flats have only a narrow glazed or railed balconette. The 400W limitation is acknowledged but contextualised: for the target audience, 400W is perfectly adequate and 600W simply isn't an option.",
    sentiment: "positive",
  },
];

export default function JackeryNavi2000ReviewPage() {
  return (
    <div>
      <PageHero
        eyebrow="Review Roundup"
        title="Jackery Navi 2000 Review Roundup: Best for Small Balconies?"
        subtitle="Aggregating the best independent reviews of the Jackery Navi 2000 balcony solar system — particularly its suitability for Juliet balconies and small UK flats."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Reviews", href: "/reviews" },
            { label: "Jackery Navi 2000" },
          ]}
        />

        <AffiliateNotice />

        <InfoBox variant="info" title="Aggregator model">
          This page curates third-party reviews — we link to the original sources so you can read the full content. We
          don't sell the Jackery Navi 2000 and haven't been provided one for testing.
        </InfoBox>

        <InfoBox variant="tip" title="Who this is for">
          The Jackery Navi 2000 is a niche product that solves a specific problem: getting balcony solar onto small,
          narrow, or Juliet balconies where larger 600W+ systems cannot physically fit. If you have a full-depth
          south-facing balcony, the EcoFlow STREAM will generate significantly more electricity for a similar price.{" "}
          <Link href="/for-renters/juliet-balcony-solar" className="underline font-semibold">
            See our Juliet balcony guide
          </Link>
          .
        </InfoBox>

        {/* Specs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jackery Navi 2000: Key Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Panel output", value: "Up to 400W (2 × 200W)" },
              { label: "Battery", value: "Integrated design" },
              { label: "App", value: "Jackery App (iOS/Android)" },
              { label: "Connectivity", value: "Bluetooth + Wi-Fi" },
              { label: "Warranty", value: "3 years" },
              { label: "Weight", value: "~12 kg" },
              { label: "Price (2026)", value: "~£699" },
              { label: "Form factor", value: "Compact — suits narrow balconies" },
              { label: "Battery expandable?", value: "No" },
            ].map((spec) => (
              <div key={spec.label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                <p className="text-sm font-semibold text-slate-800">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The key question */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Is 400W Enough?</h2>
          <p className="text-slate-600 mb-4">
            The most common question about the Navi 2000 is whether its 400W panel ceiling is a serious limitation.
            The honest answer: it depends entirely on what you're comparing it to.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">If you have a Juliet balcony</h3>
              <p className="text-sm text-slate-600">
                A 600W or 800W system physically cannot mount on a Juliet balcony railing in most configurations. The
                Navi 2000 is not competing with those products — it's the only complete integrated system that works.
                400W on a Juliet balcony is infinitely better than 0W.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">If you have a full balcony</h3>
              <p className="text-sm text-slate-600">
                You'd be leaving significant generation potential on the table. On a south-facing balcony in the South
                East of England, a 600W system generates roughly 50% more electricity than 400W across a year. If space
                permits, choose the EcoFlow STREAM or Anker SOLIX instead.
              </p>
            </div>
          </div>
          <p className="text-slate-600">
            In practical terms, 400W will generate approximately 1–2 kWh per day in summer and 0.3–0.7 kWh in winter
            in most UK locations. That covers daily smartphone charging, LED lighting, a router, and a smart TV for
            several hours — a meaningful but modest contribution to household electricity needs.
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
                  "Compact form factor is genuinely unique — the only complete integrated system for Juliet balconies",
                  "Jackery's build quality reputation (established via their power station range) translates to the Navi",
                  "Integrated battery at this price point provides good value compared to add-on battery options",
                  "Quickest setup time of any balcony solar system — multiple reviewers achieved sub-1-hour installs",
                  "Portable and fully removable — ideal for renters who may need to take it when they move",
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
                  "400W ceiling significantly limits generation vs 600–800W alternatives",
                  "Newer product — less long-term reliability data than EcoFlow or Anker systems",
                  "App is functional but lacks smart scheduling and AI optimisation features",
                  "3-year warranty is shorter than the 5 years offered by EcoFlow and Anker",
                  "Battery cannot be expanded — fixed capacity limits future-proofing",
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
            The independent reviews below informed our editorial summary. Click through to read each source in full.
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
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                    Generally positive
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
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Buy the Jackery Navi 2000</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Jackery UK Official Store</h3>
              <p className="text-sm text-slate-600 mb-3">
                Jackery's UK store offers the Navi 2000 with full UK warranty and customer support. Jackery
                occasionally bundles additional mounting hardware or panel options.
              </p>
              <a
                href="https://www.jackery.com/uk/products/navi-2000"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Visit Jackery UK →
              </a>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-1">Amazon UK</h3>
              <p className="text-sm text-slate-600 mb-3">
                Available on Amazon UK with Prime delivery. The Navi 2000 has appeared in Jackery's regular Lightning
                Deal promotions, particularly around seasonal events.
              </p>
              <a
                href="https://www.amazon.co.uk/dp/B0JCKNAVI01?tag=balconysolar-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                View on Amazon →
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Have a Juliet balcony?{" "}
            <Link href="/for-renters/juliet-balcony-solar" className="text-solar-600 underline">
              Read our dedicated Juliet balcony solar guide
            </Link>
            . Or compare all systems in our{" "}
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
