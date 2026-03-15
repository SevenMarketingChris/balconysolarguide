import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export default function LeaseholdPage() {
  return (
    <div>
      <PageHero
        eyebrow="UK Regulations"
        title="Balcony Solar in Leasehold Flats: What You Need to Know"
        subtitle="Most UK flats are leasehold — and this adds a layer of complexity beyond planning permission and electrical regulations. Understanding your lease position is the first step."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "UK Regulations", href: "/uk-regulations" },
            { label: "Leasehold Balcony Solar" },
          ]}
        />

        <InfoBox variant="info" title="Key distinction">
          In most UK leasehold flats, you have two separate questions to answer: (1) whether you need planning
          permission (generally no — see our{" "}
          <Link href="/uk-regulations/planning-permission" className="underline font-semibold">
            planning permission guide
          </Link>
          ), and (2) whether your lease permits the installation. The second question is the one that catches most
          leasehold flat owners off guard.
        </InfoBox>

        {/* Why leasehold is different */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Leasehold Adds Complexity</h2>
          <p className="text-slate-600 mb-4">
            Around 4.9 million homes in England and Wales are leasehold — the vast majority of flats. When you own a
            leasehold flat, you own the lease for a fixed term (typically 99–999 years), but the building and the land
            are owned by the freeholder. The management of the building is often delegated to a managing agent or
            residents' management company.
          </p>
          <p className="text-slate-600 mb-4">
            This creates three separate parties whose consent may be relevant to balcony solar:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">The freeholder</h3>
              <p className="text-sm text-slate-600">
                Owns the building and the land. The lease is a contract between you and the freeholder. Any clause
                about exterior alterations is typically enforced by the freeholder.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">The management company</h3>
              <p className="text-sm text-slate-600">
                Many freeholders delegate day-to-day management to a managing agent or residents' management company
                (RMC). It is the managing agent, not the freeholder personally, who you'll typically deal with for
                consent requests.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Your landlord (if renting)</h3>
              <p className="text-sm text-slate-600">
                If you're renting a leasehold flat, your landlord (the leaseholder) also needs to give consent —
                but they may themselves be constrained by what the freeholder will permit.
              </p>
            </div>
          </div>
        </section>

        {/* Step 1: Check your lease */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Step 1: Check Your Lease</h2>
          <p className="text-slate-600 mb-4">
            Your lease is the starting document. Look for clauses about:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              {
                term: '"Alterations" or "improvements"',
                explanation:
                  'Most leases contain a clause requiring landlord or freeholder consent before making "alterations" to the flat. Whether installing a balcony solar panel constitutes an "alteration" depends on the wording — if the system is portable and leaves no permanent fixings, it may not fall within this clause at all.',
              },
              {
                term: '"Exterior" of the property',
                explanation:
                  "Leases typically prevent leaseholders from doing anything that alters the appearance of the exterior of the building without consent. Balcony solar panels are visible from outside and could fall within this clause, even if they're portable.",
              },
              {
                term: '"Common parts"',
                explanation:
                  "Check whether your lease defines your balcony as part of the demised premises (i.e., your flat's own space) or as common parts. If the balcony is a common part, you'll need the management company's consent even to place items on it.",
              },
              {
                term: '"Nuisance" provisions',
                explanation:
                  'Most leases prohibit anything that causes a "nuisance" to neighbours. A solar panel generating electricity quietly is unlikely to cause nuisance in any meaningful sense, but some management companies have raised this argument.',
              },
            ].map((item) => (
              <li key={item.term} className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900 mb-1">{item.term}</p>
                <p className="text-sm text-slate-600">{item.explanation}</p>
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            If you can't locate the relevant clauses, ask your solicitor — particularly one familiar with leasehold
            law — to review the lease for you. LEASE (the Leasehold Advisory Service, a government-funded independent
            body) also provides free initial advice at lease-advice.org.
          </p>
        </section>

        {/* Step 2: Is the balcony yours? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Step 2: Establish Whether Your Balcony Is Demised to You</h2>
          <p className="text-slate-600 mb-4">
            In many flat developments, the balcony is "demised" (allocated) to your flat and is part of your leasehold
            property. You have exclusive use of it, and it is treated as your space.
          </p>
          <p className="text-slate-600 mb-4">
            In some developments — particularly older ones or those with complex titles — the balcony is a "common
            part" that you have a right to use but don't own. The distinction matters because:
          </p>
          <ul className="space-y-1 text-sm text-slate-600 mb-4 list-disc list-inside ml-4">
            <li>If the balcony is demised to you: you're constrained only by what your lease says about alterations</li>
            <li>If the balcony is a common part: you need management company/freeholder consent before placing anything on it</li>
          </ul>
          <p className="text-slate-600">
            Check the floor plan attached to your lease, or the plans registered at HMLR (His Majesty's Land
            Registry). The demise is usually hatched or coloured on the plan. Your solicitor can confirm this.
          </p>
        </section>

        {/* Requesting consent */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Step 3: How to Request Consent</h2>
          <p className="text-slate-600 mb-4">
            If your lease requires consent, the process is:
          </p>
          <div className="space-y-3">
            {[
              {
                step: "A",
                title: "Write formally to the freeholder or managing agent",
                desc: 'Send a letter or email requesting "licence to alter" or consent to install balcony solar panels. Be specific: describe the system (brand, model, dimensions), explain that it is portable and removable, and note that it requires no structural fixings (if applicable for your system).',
              },
              {
                step: "B",
                title: "Emphasise the portable, non-structural nature",
                desc: "The strongest argument in your favour is that a portable solar system leaves no permanent marks on the building. Railing-mount systems that clip on and can be removed in 10 minutes are much easier to get approved than anything requiring drilling. Systems like the EcoFlow STREAM with a freestanding railing mount are specifically designed to be non-structural.",
              },
              {
                step: "C",
                title: "Reference that consent cannot be unreasonably withheld",
                desc: "Under the Landlord and Tenant Act 1927 (as amended) and general leasehold law principles, a freeholder or management company cannot unreasonably withhold consent for a reasonable alteration. The installation of a portable solar panel — which causes no structural damage, improves energy efficiency, and is reversible — is arguably a reasonable alteration.",
              },
              {
                step: "D",
                title: "Offer to indemnify against any (minimal) liability",
                desc: "If the managing agent is concerned about liability, you can offer to include the solar panels on your home contents insurance (which you should do anyway) and provide written confirmation that you'll remove the panels if requested on reasonable notice.",
              },
              {
                step: "E",
                title: "Get any consent in writing",
                desc: "Verbal consent from a managing agent is worth very little. Ensure any permission is given in writing, ideally as a formal licence to alter. This protects you if there is later a change of management agent or freeholder.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="flex-shrink-0 w-7 h-7 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoBox variant="info" title="Management companies cannot unreasonably withhold consent">
          Under established leasehold law principles, and increasingly under legislation, management companies and
          freeholders cannot unreasonably refuse consent for reasonable improvements. A portable solar panel that
          improves energy efficiency, causes no structural change, and is entirely reversible would be difficult
          to refuse on reasonable grounds. If you are refused and believe the refusal is unreasonable, you can
          apply to the First-tier Tribunal (Property Chamber) for a determination.
        </InfoBox>

        {/* Leasehold Reform Act */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Leasehold Reform (Ground Rent) Act 2022 and Beyond</h2>
          <p className="text-slate-600 mb-4">
            The Leasehold Reform (Ground Rent) Act 2022 abolished ground rents for new residential leases, and the
            government has committed to further leasehold reform. The Leasehold and Freehold Reform Act 2024
            contains provisions that make it easier for leaseholders to challenge unreasonable freeholder behaviour
            and to extend leases.
          </p>
          <p className="text-slate-600 mb-4">
            While none of this legislation specifically addresses balcony solar, the general direction of UK leasehold
            reform is towards strengthening leaseholders' rights and reducing the ability of freeholders to impose
            unreasonable restrictions. This is a favourable backdrop for balcony solar consent requests.
          </p>
        </section>

        {/* What if they say no */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What If the Freeholder Says No?</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Request the reasons in writing</h3>
              <p className="text-sm text-slate-600">
                Ask the freeholder or management company to set out their objections in writing. This is important for
                any appeal or tribunal application — vague refusals are harder to defend.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Propose a no-drill, portable system</h3>
              <p className="text-sm text-slate-600">
                If you haven't already, propose a fully portable system with no structural fixings. A freestanding
                floor mount or a clip-on railing mount that can be removed in minutes is much more difficult to
                refuse than anything requiring drilling into the building fabric.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Contact LEASE for free advice</h3>
              <p className="text-sm text-slate-600">
                The Leasehold Advisory Service (LEASE) is a government-funded body providing free advice to
                leaseholders. They can advise on whether a refusal is reasonable and what your options are. Visit
                lease-advice.org or call their advice line.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">First-tier Tribunal application</h3>
              <p className="text-sm text-slate-600">
                If the freeholder refuses and you believe the refusal is unreasonable, you can apply to the
                First-tier Tribunal (Property Chamber) in England for a determination. This is a last resort but a
                genuine option — tribunal fees are modest and legal representation is not required.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Related guides:{" "}
            <Link href="/for-renters/landlord-letter-template" className="text-solar-600 underline">
              Landlord permission letter template
            </Link>
            {" · "}
            <Link href="/for-renters/renters-rights-act-solar" className="text-solar-600 underline">
              Renters' Rights Act and solar
            </Link>
            {" · "}
            <Link href="/uk-regulations/planning-permission" className="text-solar-600 underline">
              Planning permission guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
