import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "The Renters' Rights Act 2025 and Balcony Solar — UK Renters' Guide",
  description: "How the Renters' Rights Act 2025 strengthens your position when requesting landlord permission for balcony solar. Section 21 abolition and the new Ombudsman.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export default function RentersRightsActPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Renters' Rights Act 2025 and Balcony Solar",
    description: "How the Renters' Rights Act 2025 strengthens your position when requesting landlord permission for balcony solar.",
    author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
    publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
    datePublished: "2025-06-01",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://www.balconysolarguide.co.uk/for-renters/renters-rights-act-solar",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="For Renters"
        title="The Renters' Rights Act 2025 and Balcony Solar"
        subtitle="The most significant reform to private renting in England in a generation. What does it mean for your ability to install balcony solar panels?"
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "For Renters", href: "/for-renters" },
            { label: "Renters' Rights Act & Solar" },
          ]}
        />

        <InfoBox variant="warning" title="England only">
          The Renters' Rights Act 2025 applies to England only. Scotland, Wales, and Northern Ireland have their own
          legislation governing private renting: Scotland has the Private Housing (Tenancies) (Scotland) Act 2016,
          Wales has the Renting Homes (Wales) Act 2016, and Northern Ireland has the Private Tenancies Act (Northern
          Ireland) 2022. If you're in those nations, the specific Act described here doesn't apply to you, though
          broadly similar protections may exist under devolved law.
        </InfoBox>

        {/* What is the Act */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is the Renters' Rights Act 2025?</h2>
          <p className="text-slate-600 mb-4">
            The Renters' Rights Act 2025 received Royal Assent in February 2025 after passing through Parliament
            during the 2024–25 session. It is the most comprehensive reform of the private rental sector in England
            since the Housing Act 1988, which established the assured shorthold tenancy (AST) framework that has
            governed private renting for over 35 years.
          </p>
          <p className="text-slate-600 mb-4">
            The Act was introduced by the Labour government following its 2024 general election manifesto commitment
            to "put an end to the chaos of the private rental market" and make the sector fairer for tenants. It draws
            substantially on the earlier Renters' Reform Bill introduced by the previous Conservative government, which
            did not complete its Parliamentary passage before the 2024 election.
          </p>
          <p className="text-slate-600">
            Key provisions include the abolition of Section 21 "no-fault" evictions, the introduction of a Decent
            Homes Standard for private rented homes, the creation of a Private Rented Sector Ombudsman, and new
            protections around landlord consent for improvements.
          </p>
        </section>

        {/* Section 21 and security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Abolition of Section 21: Why This Matters for Solar</h2>
          <p className="text-slate-600 mb-4">
            Section 21 of the Housing Act 1988 gave landlords the power to evict tenants without giving a reason —
            the so-called "no-fault" eviction. Renters who complained about conditions, requested improvements, or
            asserted their rights were at risk of a Section 21 notice in response — a practice known as "retaliatory
            eviction."
          </p>
          <p className="text-slate-600 mb-4">
            The practical effect was a chilling one: tenants who wanted to install something like balcony solar faced
            not only the possibility of refusal, but the risk that even asking might provoke the landlord to end the
            tenancy. This is now gone.
          </p>
          <p className="text-slate-600 mb-4">
            Under the Renters' Rights Act 2025, landlords can only regain possession through the Section 8 "fault"
            grounds — rent arrears, anti-social behaviour, and so on. Simply not wanting a tenant who has asked about
            balcony solar is not a ground for possession.
          </p>
          <p className="text-slate-600">
            The practical consequence for balcony solar: renters can request permission without fear that the act of
            asking will end their tenancy. This is a significant psychological barrier removed.
          </p>
        </section>

        {/* The right to request improvements */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Right to Request Improvements</h2>
          <p className="text-slate-600 mb-4">
            The Act includes provisions governing tenants' ability to request improvements to their rental property.
            While the specific provisions are primarily framed around decency standards and essential repairs, the
            broader framework of the Act — combined with existing common law principles — strengthens tenants'
            position when requesting reasonable improvements.
          </p>
          <p className="text-slate-600 mb-4">
            The Act confirms that landlords cannot unreasonably withhold consent for reasonable improvements requested
            by tenants. What constitutes "unreasonable" will ultimately be determined by the courts and the Private
            Rented Sector Ombudsman on a case-by-case basis, but the following factors strongly favour a finding that
            refusal to permit portable balcony solar is unreasonable:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "The installation involves no structural changes or permanent fixings",
              "The system is entirely portable and removable at the end of the tenancy",
              "Solar generation improves the energy efficiency of the property",
              "No damage to the property results and no lasting alteration occurs",
              "The installation is consistent with the government's own energy policy objectives",
              "Germany and other EU countries have established legal frameworks demonstrating the safety and legitimacy of these systems",
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-green-500 font-bold flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* What "unreasonable refusal" might mean */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does "Unreasonable Refusal" Actually Mean?</h2>
          <p className="text-slate-600 mb-4">
            The Act does not define "unreasonable" — this is a question of fact and degree in each case. However,
            drawing on established landlord and tenant law principles and analogous cases from leasehold law, refusal
            is more likely to be considered unreasonable when:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Likely unreasonable</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• "I just don't want it" with no specific objection</li>
                <li>• Refusal of a portable, no-drill system without explanation</li>
                <li>• Citing concerns that are demonstrably unfounded (e.g., incorrect claims about damage)</li>
                <li>• Changing the reason for refusal repeatedly</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Potentially reasonable</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Genuine building insurance policy exclusion</li>
                <li>• Head lease restriction imposed by freeholder</li>
                <li>• Listed building or conservation area constraints</li>
                <li>• Specific structural concern about the balcony's load capacity</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600">
            Even where a landlord has a legitimate concern, they may be obliged to explore reasonable accommodations
            (such as approving a lighter-weight system or a freestanding rather than railing-mounted option) rather
            than simply refusing outright.
          </p>
        </section>

        {/* Deposits */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Deposit Implications</h2>
          <p className="text-slate-600 mb-4">
            Portable balcony solar panels are personal property, not fixtures. In law, a fixture is something that has
            become attached to the property in a way that means it passes with the property on sale or at the end of a
            lease — like built-in cupboards or plumbing. A portable solar panel on a freestanding mount or railing
            clip is not a fixture.
          </p>
          <p className="text-slate-600 mb-4">
            This has two important deposit implications:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Your landlord cannot retain your deposit on the grounds that you 'left the solar panels behind' — they're your property, not the property's fixtures.",
              "If you remove the system cleanly at the end of the tenancy (as you would with any personal property), there is no basis for deposit deductions relating to it.",
              "If you accidentally leave the system behind, it remains your property and the landlord should return it rather than claim it as abandoned property — though in practice, take it with you.",
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-green-500 font-bold flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            The one scenario where deposits could be affected: if your installation (perhaps using adhesive pads,
            improper fixings, or a poorly executed railing mount) leaves marks or damage on the balcony surfaces. Use
            proper no-damage mounting hardware and this is not an issue.
          </p>
        </section>

        {/* The Private Rented Sector Ombudsman */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Private Rented Sector Ombudsman</h2>
          <p className="text-slate-600 mb-4">
            The Act creates a mandatory Private Rented Sector Ombudsman scheme. All private landlords in England are
            required to register with the scheme. The Ombudsman can investigate complaints from tenants, make
            redress awards, and issue compliance notices to landlords.
          </p>
          <p className="text-slate-600 mb-4">
            If a landlord unreasonably refuses permission for balcony solar, this could potentially be a matter for
            the Ombudsman — though balcony solar is unlikely to be a high-priority area in the Ombudsman's early
            caseload. The more immediate practical tool is the ability to apply to the county court for a declaration
            that refusal is unreasonable, or to use the cost threat of litigation as negotiating leverage.
          </p>
          <p className="text-slate-600">
            As the regulatory framework for balcony solar becomes clearer in 2026, the Ombudsman's approach to
            refusals will become more settled. For now, the clearest path forward remains persuasion, a well-written
            request letter, and proposing the most portable and non-structural system available.
          </p>
        </section>

        <InfoBox variant="info" title="Practical advice for renters in 2026">
          The Renters' Rights Act 2025 has improved your position significantly, but the most effective approach
          remains a polite, well-reasoned request letter that emphasises the portable and non-structural nature of
          the system. Most landlords will say yes once they understand there's no damage risk. If refused, ask for
          reasons in writing, propose a freestanding no-drill alternative, and seek advice from Citizens Advice or
          the Private Rented Sector Ombudsman if needed.
        </InfoBox>

        <div className="border-t border-slate-200 pt-6 mt-6">
          <p className="text-sm text-slate-500">
            Related guides:{" "}
            <Link href="/for-renters/landlord-letter-template" className="text-solar-600 underline">
              Landlord permission letter template
            </Link>
            {" · "}
            <Link href="/uk-regulations/leasehold-balcony-solar" className="text-solar-600 underline">
              Leasehold flat considerations
            </Link>
            {" · "}
            <Link href="/for-renters" className="text-solar-600 underline">
              All renter guides
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
