import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AffiliateNotice from "@/components/ui/AffiliateNotice";
import InfoBox from "@/components/ui/InfoBox";

export const metadata = {
  title: "Balcony Solar Deals & Offers UK — Best Prices on Plug-In Solar",
  description:
    "Curated balcony solar deals for UK buyers. We track prices on EcoFlow, Anker SOLIX, and budget plug-in solar kits so you can buy at the right time.",
};

const deals = [
  {
    name: "EcoFlow STREAM",
    badge: "Best All-Rounder",
    badgeClass: "bg-solar-500",
    rrp: 949,
    currentPrice: null,
    url: "https://www.ecoflow.com/uk",
    source: "EcoFlow UK",
    wattage: "600W",
    description:
      "EcoFlow's dedicated balcony solar system. Includes two 300W rigid panels, a 600W micro-inverter, balcony railing mounting brackets, and full app integration. The STREAM app lets you monitor real-time generation, configure smart charging schedules, and set a priority for battery versus grid feed-in. Expandable with optional PowerStream battery for overnight storage. One of the most polished out-of-the-box experiences available in the UK.",
    pros: ["Smart app with real-time monitoring", "Optional battery storage", "Easy railing mount", "UKCA compliant"],
    cons: ["Premium price", "600W cap (not 800W)"],
  },
  {
    name: "Anker SOLIX Solarbank 2",
    badge: "Highest Output",
    badgeClass: "bg-slate-700",
    rrp: 899,
    currentPrice: null,
    url: "https://www.ankersolix.com/uk",
    source: "Anker SOLIX UK",
    wattage: "800W",
    description:
      "The Anker SOLIX Solarbank 2 supports up to 800W of panel input — the current practical maximum for UK residential plug-in systems. Comes with an integrated 1,600Wh battery, meaning generation is stored and used when you need it rather than only when the sun shines. The companion app is well-regarded for data depth and usability. Excellent build quality; Anker's warranty and UK customer support are a genuine differentiator. Well suited to south-facing balconies where maximising output is the priority.",
    pros: ["Up to 800W", "Integrated 1,600Wh battery", "Excellent app", "Strong warranty"],
    cons: ["Larger and heavier than panel-only systems", "Higher upfront cost"],
  },
  {
    name: "Plug-in Solar 600W Kit",
    badge: "Best Budget",
    badgeClass: "bg-green-600",
    rrp: 399,
    currentPrice: "~£399",
    url: "https://www.amazon.co.uk/dp/B0BV2N6SCZ?tag=balconysolar-21",
    source: "Amazon UK",
    wattage: "600W",
    description:
      "A no-frills but complete kit from Plug-in Solar, one of the few UK-based brands focused exclusively on this market. Includes two 300W monocrystalline panels, a 600W grid-tie micro-inverter, and mounting hardware. The inverter is G98-compliant and ships with a 3-pin UK plug lead. No app, no battery — just clean power fed directly into your home circuit. Ideal for those who want a proven, simple system at the lowest possible price point, and are comfortable with a DIY installation approach.",
    pros: ["Lowest cost", "UK-based brand", "G98-compliant inverter", "Everything included"],
    cons: ["No app or monitoring", "No battery option", "DIY installation"],
  },
];

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Deals & Offers"
        title="Balcony Solar Deals UK"
        subtitle="Curated prices on the best balcony solar systems available in the UK right now. We track prices so you can buy at the right time."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "Deals" }]} />

        <AffiliateNotice />

        <InfoBox variant="warning" title="Prices correct at time of writing">
          Solar panel prices fluctuate — sometimes significantly. Always verify the current price
          on the retailer's website before purchasing. Prices listed below were accurate in March
          2026 but may have changed.
        </InfoBox>

        <div className="space-y-8 mt-6">
          {deals.map((deal) => (
            <div
              key={deal.name}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${deal.badgeClass}`}
                  >
                    {deal.badge}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{deal.name}</h2>
                  <span className="text-sm text-slate-500 font-medium">{deal.wattage}</span>
                </div>
                <div className="text-right">
                  {deal.currentPrice ? (
                    <p className="text-2xl font-bold text-solar-600">{deal.currentPrice}</p>
                  ) : (
                    <p className="text-2xl font-bold text-solar-600">£{deal.rrp.toLocaleString()}</p>
                  )}
                  <p className="text-xs text-slate-500">via {deal.source}</p>
                </div>
              </div>

              <div className="px-6 py-5">
                <p className="text-slate-700 text-sm leading-relaxed mb-5">{deal.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Strengths
                    </p>
                    <ul className="space-y-1">
                      {deal.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Limitations
                    </p>
                    <ul className="space-y-1">
                      {deal.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-slate-400 flex-shrink-0 mt-0.5">–</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors"
                >
                  Check price on {deal.source} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Price alert */}
        <div className="mt-10 bg-solar-50 border border-solar-200 rounded-xl px-6 py-5">
          <p className="font-semibold text-solar-800 mb-1">Price alert tip</p>
          <p className="text-solar-700 text-sm leading-relaxed">
            We check prices regularly and update this page when significant changes occur. Balcony
            solar prices tend to be most competitive around Black Friday (November), January sales,
            and the lead-up to summer — when retailers anticipate rising consumer interest in solar.
            If you see a price you like, don't hesitate: these deals don't always last. Bookmark this
            page and check back if you're not ready to buy today.
          </p>
        </div>

        {/* What to look for */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What to Look for in a Deal</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Key specs to compare</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>
                  <strong>Peak wattage.</strong> Higher is generally better. The UK practical
                  maximum for a domestic plug-in system is 800W. Most micro-inverters are rated at
                  600W or 800W. Don't pay a premium for a 600W system when an 800W is available at
                  a similar price — every extra watt generates more savings year-round.
                </li>
                <li>
                  <strong>Battery vs. no battery.</strong> Systems with built-in battery storage
                  (like the Anker SOLIX Solarbank 2) shift generation to when you use it — evenings,
                  mornings. This makes them more valuable if you're out during the day. Without a
                  battery, you only save on electricity you happen to be using at the moment of
                  generation. For a home office worker, battery-free may be sufficient; for an
                  empty flat during office hours, battery adds significant value.
                </li>
                <li>
                  <strong>Monitoring app.</strong> A good app lets you track generation, see
                  patterns, and identify if something's wrong. EcoFlow and Anker both have strong
                  apps. Budget systems typically offer no monitoring — acceptable, but you won't
                  know if performance drops.
                </li>
                <li>
                  <strong>G98 / UKCA compliance.</strong> Ensure the inverter is G98-compliant
                  (the UK grid connection standard for sub-16A generation). Any reputable
                  UK-marketed product should be. Avoid grey-market imports that may lack UK
                  certification.
                </li>
                <li>
                  <strong>Mounting hardware.</strong> Check what's included. Some kits include
                  balcony railing mounts; others supply only panel and inverter, leaving you to
                  source brackets separately. Railing clamps typically cost £30–£80 extra if not
                  included.
                </li>
                <li>
                  <strong>Warranty.</strong> Look for a minimum 10-year panel warranty (power
                  output) and 2-year product warranty on the inverter and electronics. EcoFlow and
                  Anker both offer solid warranty terms. Budget brands vary — check the small print.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Brand direct vs. Amazon — which is better?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                For premium systems (EcoFlow, Anker), buying direct from the manufacturer's UK
                website is often the best option. You get the strongest warranty support, any
                bundle deals or financing options they offer, and the confidence of an official
                purchase. Customer service for warranty claims is generally smoother when you've
                bought direct.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Amazon is better for budget kits and for price-comparison on older or
                less-prominent brands. Amazon's A-to-Z guarantee provides a useful backstop if
                something goes wrong, and Prime delivery is often faster than brand-direct options.
                However, be alert to third-party sellers on Amazon — check seller ratings carefully
                and prefer "Sold by Amazon" or "Fulfilled by Amazon" listings for expensive
                purchases.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                During seasonal sales events, brand-direct deals sometimes beat Amazon pricing —
                and sometimes it's the reverse. It's worth checking both before buying.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <AffiliateNotice />
        </div>
      </div>
    </div>
  );
}
