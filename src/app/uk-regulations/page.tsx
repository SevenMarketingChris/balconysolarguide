import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "UK Balcony Solar Regulations 2026 — Complete Guide | Balcony Solar Guide",
  description: "The definitive guide to UK plug-in solar regulations: planning permission, G98 DNO notification, building regulations, leasehold rules, and the government's March 2026 legalisation announcement.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

const subPages = [
  {
    href: "/uk-regulations/timeline",
    title: "UK Plug-in Solar Legalisation Timeline",
    description:
      "A chronological tracker of every significant regulatory event, from Germany's early moves to the UK government's March 2026 announcement. Understand where we are and where we're heading.",
    badge: "Updated March 2026",
  },
  {
    href: "/uk-regulations/planning-permission",
    title: "Do You Need Planning Permission?",
    description:
      "For most UK homes, balcony solar falls under permitted development rights and doesn't need planning permission — but there are important conditions. Learn what applies to your property.",
  },
  {
    href: "/uk-regulations/building-regulations",
    title: "Building Regulations & BS 7671",
    description:
      "The wiring regulations and building standards landscape for plug-in solar. Understand why most modern UK homes are already well-protected and what the BSI is working on.",
  },
  {
    href: "/uk-regulations/dno-g98-explained",
    title: "G98 DNO Notification: Complete Guide",
    description:
      "You should notify your Distribution Network Operator before connecting balcony solar. This guide covers the process, timescales, and a full list of UK DNOs with their contact details.",
  },
  {
    href: "/uk-regulations/leasehold-balcony-solar",
    title: "Balcony Solar in Leasehold Flats",
    description:
      "Most UK flats are leasehold, which adds complexity. Your landlord, freeholder, and management company may all have a say. Here's how to navigate it.",
  },
];

export default function UKRegulationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="UK Regulations"
        title="UK Balcony Solar Regulations: Everything You Need to Know"
        subtitle="The regulatory picture for plug-in balcony solar in the UK is changing rapidly. Here's a clear, up-to-date overview of where things stand — and what it means for you."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "UK Regulations" }]} />

        <InfoBox variant="success" title="March 2026: Major government announcement">
          On 15 March 2026, the UK government announced it will work "at pace" to create a formal regulatory framework
          for plug-in balcony solar panels. This is the most significant regulatory signal to date. A full framework is
          expected by Q3/Q4 2026.{" "}
          <Link href="/uk-regulations/timeline" className="underline font-semibold">
            See the full timeline →
          </Link>
        </InfoBox>

        {/* Current situation overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Current Situation</h2>
          <p className="text-slate-600 mb-4">
            Plug-in balcony solar panels occupy an interesting position in UK law: they're not explicitly legal, not
            explicitly illegal, and thousands of UK households are already using them. The government is now actively
            working to regularise this, following years of grassroots adoption and increasingly vocal calls from the
            renewable energy sector.
          </p>
          <p className="text-slate-600 mb-4">
            The practical situation as of March 2026 is that:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Thousands of UK households have installed balcony solar with no adverse regulatory consequences",
              "No enforcement action has been taken against domestic plug-in solar installations",
              "Most electricians consider them low-risk with modern consumer units (RCBOs)",
              "The government has formally committed to creating a regulatory framework",
              "G98 notification to your DNO is recommended and straightforward",
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-solar-500 font-bold flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            The UK is around 5 years behind Germany in this respect. Germany legalised plug-in solar in 2021 and now
            has over 1.5 million registered Balkonkraftwerk installations. The UK is following the same trajectory with
            a lag.
          </p>
        </section>

        {/* Key regulatory areas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Regulatory Landscape: Five Key Areas</h2>
          <div className="grid gap-4">
            {[
              {
                area: "G98 DNO Notification",
                status: "Current requirement",
                statusColour: "bg-amber-100 text-amber-700",
                summary:
                  "Any grid-connected generation under 3.68kW falls under the G98 standard. You must notify your Distribution Network Operator (DNO) before connecting. This is a notification process, not an application — you cannot be refused, and there is no cost. Most DNOs acknowledge within a few days.",
                link: "/uk-regulations/dno-g98-explained",
              },
              {
                area: "Planning Permission",
                status: "Generally not required",
                statusColour: "bg-green-100 text-green-700",
                summary:
                  "For most dwellings, balcony solar panels fall within permitted development rights and don't require planning permission. Exceptions: listed buildings, conservation areas, and some flat developments. Leasehold flats may have separate lease requirements regardless of planning.",
                link: "/uk-regulations/planning-permission",
              },
              {
                area: "Building Regulations & Wiring Standards",
                status: "Grey area being resolved",
                statusColour: "bg-slate-100 text-slate-700",
                summary:
                  "BS 7671 (the Wiring Regulations) doesn't explicitly address plug-in solar, but modern consumer units with RCBOs provide effective protection for the reverse current flow involved. The BSI is actively developing a specific standard for plug-in solar, expected to be published in 2026.",
                link: "/uk-regulations/building-regulations",
              },
              {
                area: "Leasehold & Freehold Considerations",
                status: "Check your lease",
                statusColour: "bg-amber-100 text-amber-700",
                summary:
                  "Most UK flats are leasehold. Your lease may contain clauses about exterior alterations, and your balcony may be common property rather than demised to you. You may need consent from your freeholder or management company — not just your landlord.",
                link: "/uk-regulations/leasehold-balcony-solar",
              },
              {
                area: "Renters' Rights & Landlord Permission",
                status: "Improving for renters",
                statusColour: "bg-green-100 text-green-700",
                summary:
                  "The Renters' Rights Act 2025 (England) has strengthened tenants' position when requesting improvements. While balcony solar isn't specifically named, landlords face a higher bar for refusing 'reasonable' additions — particularly portable systems that cause no structural change.",
                link: "/for-renters/renters-rights-act-solar",
              },
            ].map((area) => (
              <div key={area.area} className="border border-slate-200 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{area.area}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${area.statusColour}`}>
                    {area.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{area.summary}</p>
                <Link href={area.link} className="text-solar-600 hover:text-solar-700 text-sm font-semibold">
                  Read the full guide →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Sub-pages */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulation Guides in Detail</h2>
          <div className="grid gap-4">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block border border-slate-200 rounded-xl p-5 hover:border-solar-400 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {page.badge && (
                      <span className="inline-block bg-solar-100 text-solar-700 text-xs font-semibold px-2 py-0.5 rounded mb-2">
                        {page.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 group-hover:text-solar-700 mb-1">{page.title}</h3>
                    <p className="text-sm text-slate-600">{page.description}</p>
                  </div>
                  <span className="text-solar-400 text-xl flex-shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <InfoBox variant="info" title="Looking for a quick overview?">
          If you just want a straightforward answer to "is balcony solar legal?", read our guide:{" "}
          <Link href="/guides/is-balcony-solar-legal-uk" className="underline font-semibold">
            Is Balcony Solar Legal in the UK?
          </Link>
          {" "}It covers the legal position, G98 requirements, planning rules, and what's changing — all in one article.
        </InfoBox>

        <InfoBox variant="tip" title="Bottom line for most people">
          If you're in a freehold house or semi-detached property with a balcony or south-facing wall, the practical
          barriers to balcony solar are minimal. Notify your DNO (takes 15 minutes), confirm you're within permitted
          development rights, and install. The electrical safety position is sound for modern homes. If you're in a
          leasehold flat, check your lease and get written consent first.
        </InfoBox>
      </div>
    </div>
  );
}
