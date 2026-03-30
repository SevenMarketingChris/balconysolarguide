import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "UK Plug-in Solar Legalisation Timeline — Every Key Date",
  description: "Every key date in UK balcony solar regulation, from Germany's early moves to the landmark March 2026 government announcement. Updated March 2026.",
};
import InfoBox from "@/components/ui/InfoBox";
import Link from "next/link";

const timelineEvents = [
  {
    date: "2015",
    title: "Germany begins Balkonkraftwerk discussions",
    description:
      "German consumer groups and energy advocates begin lobbying for clear legal status for small plug-in solar systems — referred to as Balkonkraftwerk (balcony power station). At this point there is no legal framework and installations are technically in a grey area, though enforcement is essentially non-existent.",
    significance: "low",
    country: "Germany",
  },
  {
    date: "2019",
    title: "Germany simplifies registration process",
    description:
      "The German government simplifies the Marktstammdatenregister (energy market register) process for small generators, making it significantly easier for households to register balcony solar systems. This is a precursor step to full legalisation and signals political direction of travel.",
    significance: "medium",
    country: "Germany",
  },
  {
    date: "2021",
    title: "Germany officially legalises plug-in solar",
    description:
      "VDE Standard 0100-551-1 comes into force in Germany, providing the first formal technical standard for plug-in solar systems. Under this framework, systems up to 600W (later updated to 800W) can be connected to a standard domestic socket after registration. Germany becomes the template other European countries look to.",
    significance: "high",
    country: "Germany",
  },
  {
    date: "January 2023",
    title: "First UK mainstream media coverage",
    description:
      "The Guardian publishes one of the first major UK newspaper articles about balcony solar panels, referencing the German Balkonkraftwerk phenomenon and asking whether the UK will follow. Interest surges among UK early adopters and renewable energy enthusiasts. Reddit threads begin appearing in r/solarDIY and r/UKPersonalFinance.",
    significance: "medium",
    country: "UK",
  },
  {
    date: "April 2023",
    title: "UK early adopters begin installing",
    description:
      "A growing number of UK households — primarily tech-savvy homeowners and renters — begin installing balcony solar systems imported from Germany or purchased from early UK suppliers. The installations are in a genuine legal grey area: not explicitly permitted, not explicitly prohibited. No enforcement action is taken against any domestic installer.",
    significance: "medium",
    country: "UK",
  },
  {
    date: "June 2024",
    title: "Ofgem and DESNZ begin microgeneration consultation",
    description:
      "The Office of Gas and Electricity Markets (Ofgem) and the Department for Energy Security and Net Zero (DESNZ) begin a consultation on simplifying the microgeneration regulatory framework. Plug-in solar is specifically discussed as a category that could benefit from streamlined rules. Industry bodies including Solar Energy UK and the Microgeneration Certification Scheme (MCS) submit evidence.",
    significance: "high",
    country: "UK",
  },
  {
    date: "September 2024",
    title: "Renters' Rights Bill introduced to Parliament",
    description:
      "The Labour government introduces the Renters' Rights Bill to Parliament, the most significant reform of the private rental sector in England in a generation. While not specifically about solar, it contains provisions that will affect tenants' ability to make reasonable home improvements — with implications for portable balcony solar systems.",
    significance: "medium",
    country: "UK",
  },
  {
    date: "November 2024",
    title: "Parliamentary committee hears evidence on plug-in solar",
    description:
      "The Energy Security and Net Zero Select Committee takes evidence specifically on plug-in balcony solar as part of its inquiry into domestic microgeneration. Witnesses include representatives from Solar Energy UK, EcoFlow, Anker, and consumer advocacy groups. The committee chair describes the current regulatory position as 'unnecessarily complex for a low-risk technology.'",
    significance: "high",
    country: "UK",
  },
  {
    date: "January 2025",
    title: "Germany registers its 1 millionth Balkonkraftwerk",
    description:
      "Germany's Bundesnetzagentur (Federal Network Agency) records the registration of the 1 millionth balcony solar system. This milestone receives significant coverage in UK media and is repeatedly cited in Parliamentary discussions as evidence that a working regulatory framework is achievable. Germany's experience — over 5 years of legal operation with no significant safety incidents — becomes a key argument for UK legalisation.",
    significance: "high",
    country: "Germany",
  },
  {
    date: "February 2025",
    title: "Renters' Rights Act 2025 receives Royal Assent",
    description:
      "The Renters' Rights Act 2025 becomes law, bringing the most significant reforms to private renting in England since the Housing Act 1988. Key provisions include the abolition of Section 21 'no-fault' evictions and new protections around landlord consent for reasonable tenant improvements. While balcony solar isn't named explicitly, the Act's provisions strengthen renters' ability to request portable improvements.",
    significance: "high",
    country: "UK",
  },
  {
    date: "March 2025",
    title: "Solar Roadmap consultation opens",
    description:
      "The government opens a formal consultation on its Solar Roadmap — a strategy document covering all aspects of UK solar deployment from utility-scale to domestic microgeneration. Plug-in solar is included as a specific sub-category and the consultation asks for evidence on appropriate regulatory models.",
    significance: "medium",
    country: "UK",
  },
  {
    date: "June 2025",
    title: "Solar Roadmap published — plug-in solar named as priority",
    description:
      "The final Solar Roadmap is published. It names plug-in balcony solar as a priority for regulatory simplification, explicitly references the German model, and commits the government to developing a UK-specific framework 'by 2026.' This is the first explicit government commitment to legalisation, though without a firm date or details of the framework.",
    significance: "high",
    country: "UK",
  },
  {
    date: "September 2025",
    title: "BSI commissioned to develop UK plug-in solar standard",
    description:
      "The British Standards Institution (BSI) is commissioned to develop the UK equivalent of Germany's VDE 0100-551-1. The scope covers a new technical standard for plug-in solar, with the working group expected to be formally constituted in Q2 2026. Representatives from the IET, BEAMA, DNOs, consumer groups, and product manufacturers are expected to participate. The standard is expected to take 18–24 months from the working group's formation, with publication likely in late 2027 at the earliest.",
    significance: "high",
    country: "UK",
  },
  {
    date: "February 2026",
    title: "Energy Saving Trust publishes plug-in solar guidance",
    description:
      "The Energy Saving Trust — the UK's primary independent energy advice body — publishes formal guidance on plug-in balcony solar panels for the first time. The guidance covers the regulatory position, G98 notification, safety considerations, and typical generation expectations. Its publication is significant because the EST doesn't publish advice on products it considers unsafe or illegal.",
    significance: "medium",
    country: "UK",
  },
  {
    date: "15 March 2026",
    title: "Government announces commitment to legalise at pace",
    description:
      "The Minister for Energy Security and Net Zero makes a statement in the House of Commons announcing that the government will work 'at pace' to create a formal regulatory framework for plug-in balcony solar. The statement specifically references the German model, commits to a working framework by end of 2026, and instructs Ofgem and DESNZ to prioritise the necessary technical and regulatory changes. This is the most significant UK regulatory announcement on balcony solar to date.",
    significance: "critical",
    country: "UK",
  },
  {
    date: "Expected Q3/Q4 2026",
    title: "Formal regulatory framework expected",
    description:
      "Based on the March 2026 government commitment and the BSI working group timeline, a formal UK regulatory framework is expected before the end of 2026. This is likely to include: a formal G98 notification process with a simplified online portal, a UK technical standard drawing on the BSI working group's work, clarification of building regulations and BS 7671 requirements, and a system wattage limit (likely 800W, matching Germany's updated limit).",
    significance: "high",
    country: "UK",
    future: true,
  },
];

const significanceStyles: Record<string, string> = {
  low: "bg-slate-200",
  medium: "bg-solar-300",
  high: "bg-solar-500",
  critical: "bg-solar-700",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UK Plug-in Solar Legalisation Timeline: Every Key Date",
  datePublished: "2026-03-15",
  dateModified: "2026-03-30",
  author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
  publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
};

export default function TimelinePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="UK Regulations"
        title="UK Plug-in Solar Legalisation Timeline: Every Key Date"
        subtitle="A chronological tracker of the regulatory journey from Germany's early moves to the UK government's landmark March 2026 announcement. Updated as events unfold."
        badge="Last updated: 15 March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "UK Regulations", href: "/uk-regulations" },
            { label: "Timeline" },
          ]}
        />

        <InfoBox variant="success" title="Where we are now (March 2026)">
          The UK government has formally committed to creating a regulatory framework for plug-in balcony solar. The
          BSI is developing a technical standard. Thousands of systems are already installed with no safety incidents.
          We are in the final phase before formal legalisation.
        </InfoBox>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <p className="text-slate-500 font-medium">Event significance:</p>
          {[
            { label: "Minor", style: "bg-slate-200" },
            { label: "Significant", style: "bg-solar-300" },
            { label: "Major", style: "bg-solar-500" },
            { label: "Landmark", style: "bg-solar-700" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${item.style}`} />
              <span className="text-slate-600">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />

          <div className="space-y-0">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pl-12 pb-10">
                {/* Dot */}
                <div
                  className={`absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow ${
                    significanceStyles[event.significance]
                  } ${event.future ? "border-dashed border-slate-400 bg-slate-100" : ""}`}
                />

                <div
                  className={`rounded-xl border p-5 ${
                    event.significance === "critical"
                      ? "border-solar-300 bg-solar-50"
                      : event.future
                      ? "border-dashed border-slate-300 bg-slate-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <p
                        className={`text-sm font-bold ${
                          event.significance === "critical" ? "text-solar-700" : "text-slate-500"
                        }`}
                      >
                        {event.date}
                      </p>
                      <h3
                        className={`font-bold text-lg mt-0.5 ${
                          event.significance === "critical" ? "text-solar-900" : "text-slate-900"
                        }`}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {event.future && (
                        <span className="text-xs bg-slate-200 text-slate-600 font-semibold px-2 py-1 rounded-full">
                          Expected
                        </span>
                      )}
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          event.country === "UK"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {event.country}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
                  {event.significance === "critical" && (
                    <div className="mt-3 pt-3 border-t border-solar-200">
                      <p className="text-xs text-solar-700 font-semibold">
                        Landmark event — this is the most significant UK regulatory announcement on balcony solar to date.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to do now */}
        <section className="mt-4 bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">What This Means in Practice</h2>
          <p className="text-slate-600 mb-3 text-sm">
            The trajectory is clear: plug-in balcony solar will be formally legal in the UK before the end of 2026.
            The question is whether to wait for the framework or install now under the current grey-area conditions.
          </p>
          <p className="text-slate-600 mb-3 text-sm">
            The practical assessment: thousands of UK households are already installed with no adverse consequences.
            The government has explicitly endorsed the technology. No enforcement action has been taken or is
            anticipated. If you have a suitable balcony, the practical risk of installing now is low.
          </p>
          <p className="text-slate-600 text-sm">
            The prudent steps remain: notify your DNO under G98, check your lease if you're a leaseholder, confirm
            you're within permitted development, and keep your acknowledgement documentation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/uk-regulations/dno-g98-explained"
              className="inline-block bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              G98 notification guide →
            </Link>
            <Link
              href="/uk-regulations"
              className="inline-block bg-white border border-slate-300 hover:border-solar-400 text-slate-700 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              All regulation guides →
            </Link>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500 mb-2">
            Related guides:{" "}
            <Link href="/uk-regulations/building-regulations" className="text-solar-600 underline">
              Building regulations & BS 7671
            </Link>
            {" · "}
            <Link href="/uk-regulations/planning-permission" className="text-solar-600 underline">
              Planning permission
            </Link>
            {" · "}
            <Link href="/uk-regulations/leasehold-balcony-solar" className="text-solar-600 underline">
              Leasehold considerations
            </Link>
          </p>
          <p className="text-sm text-slate-500">
            Tools & reviews:{" "}
            <Link href="/calculator" className="text-solar-600 underline">
              Savings calculator
            </Link>
            {" · "}
            <Link href="/reviews/best-balcony-solar-kits-uk" className="text-solar-600 underline">
              Best balcony solar kits
            </Link>
            {" · "}
            <Link href="/guides/is-balcony-solar-legal-uk" className="text-solar-600 underline">
              Is balcony solar legal?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
