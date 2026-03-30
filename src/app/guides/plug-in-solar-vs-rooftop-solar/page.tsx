import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export const metadata: Metadata = {
  title: "Plug-In Solar vs Rooftop Solar: Which Is Right for You? (UK 2026)",
  description:
    "Plug-in balcony solar vs rooftop solar for UK households in 2026. Cost, output, VAT, SEG eligibility, payback periods, and who should choose which.",
};

export default function PlugInVsRooftopSolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Plug-In Solar vs Rooftop Solar: Which Is Right for You? (UK 2026)"
        subtitle="Two very different technologies, both generating solar electricity. One costs £500, the other £8,000. One you can take with you when you move; the other adds value to your home. Here is how to decide which is right for your situation."
        badge="Updated March 2026"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Plug-In Solar vs Rooftop Solar" },
          ]}
        />

        <InfoBox variant="tip" title="These are complementary technologies, not competing ones">
          Many people frame this as an either/or decision — but plug-in solar and rooftop solar
          serve different situations and often the same household at different life stages. Renters
          commonly start with a plug-in system, then commission a rooftop installation when they
          buy their own home. The two technologies work happily alongside each other and address
          different parts of the same goal: reducing reliance on expensive grid electricity.
        </InfoBox>

        <article className="prose-solar">
          <h2>The Headline Comparison</h2>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Plug-In Balcony Solar</th>
                  <th>Rooftop Solar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Typical cost</strong>
                  </td>
                  <td>£399–£949 (complete kit)</td>
                  <td>£5,000–£12,000 (installed, 3–4kW)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Installation</strong>
                  </td>
                  <td>DIY, no electrician required</td>
                  <td>MCS-accredited installer required</td>
                </tr>
                <tr>
                  <td>
                    <strong>Planning permission</strong>
                  </td>
                  <td>Not currently required (Permitted Development)</td>
                  <td>Not usually required (Permitted Development, most houses)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Portability</strong>
                  </td>
                  <td>Portable — take it when you move</td>
                  <td>Fixed — stays with the property</td>
                </tr>
                <tr>
                  <td>
                    <strong>Typical annual output</strong>
                  </td>
                  <td>200–500 kWh (400–800W system)</td>
                  <td>2,500–4,000 kWh (3–4kW system)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Typical payback period</strong>
                  </td>
                  <td>3–4 years</td>
                  <td>7–12 years</td>
                </tr>
                <tr>
                  <td>
                    <strong>VAT</strong>
                  </td>
                  <td>20% (standard rate — currently not exempt)</td>
                  <td>0% (Energy-Saving Materials relief)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Smart Export Guarantee (SEG)</strong>
                  </td>
                  <td>Not currently eligible (no MCS certification)</td>
                  <td>Eligible (with MCS certification)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Who it suits</strong>
                  </td>
                  <td>Renters, flat-dwellers, budget-conscious, want flexibility</td>
                  <td>Homeowners with suitable south-facing roof, staying long-term</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>When Rooftop Solar Is the Right Choice</h2>
          <p>
            Rooftop solar is the right choice when several conditions align: you own your home,
            your roof is well-oriented (south or south-west facing with minimal shading), you
            plan to stay in the property for at least seven to ten years, and you have the
            capital or access to finance for the upfront cost.
          </p>
          <p>
            A typical 3.5kW rooftop system in England generates approximately 3,000–3,500 kWh
            per year — roughly equivalent to half the annual electricity consumption of an
            average household. At a unit rate of 24p/kWh, that is £720–£840 per year in avoided
            grid purchases, plus any SEG export payments on the electricity you do not self-consume.
            Over a 25-year panel life, the financial return is substantial.
          </p>
          <p>
            Rooftop solar also adds value to your property. Research by the Energy Saving Trust
            and others consistently finds that solar panels increase property values, with
            estimates typically in the range of 2–4% of property value for a well-specified
            system. On a £300,000 home, that is £6,000–£12,000 of additional value — which can
            make rooftop solar effectively free on a total-return basis for many homeowners.
          </p>
          <p>
            The key prerequisites for rooftop solar are: ownership (or very long-term secure
            tenancy), a suitable roof, capital, and a time horizon of at least seven years.
            Without all four, rooftop solar becomes significantly less financially attractive.
          </p>

          <h2>When Plug-In Balcony Solar Is the Right Choice</h2>
          <p>
            Plug-in solar is the right choice when rooftop solar is not available or not
            practical — which describes the majority of UK households in 2026.
          </p>
          <p>
            If you rent, you almost certainly cannot install rooftop solar. Even if your
            landlord permits it in principle, an MCS installer will not commission a system
            in a property you do not own, and the economics of a seven-to-twelve-year payback
            period do not work when your tenancy could end with two months' notice. Plug-in
            solar removes both barriers: no landlord permission is needed for a temporary
            external mount, and the three-to-four year payback is achievable within the
            typical lifecycle of a rental home.
          </p>
          <p>
            Plug-in solar is also the right choice if you live in a flat. Most flats have no
            accessible roof to mount panels on. A south-facing balcony, a south-facing external
            wall with a suitable bracket, or a flat roof terrace can all host a plug-in system.
            The technology was specifically designed for this use case.
          </p>
          <p>
            Budget is the third factor. A £599 plug-in kit is accessible to many more households
            than a £7,000 rooftop installation. Even with the 20% VAT disadvantage (more on
            this below), a plug-in system has a short enough payback period to make financial
            sense for almost any household with adequate sun exposure.
          </p>

          <h2>The Cost Difference Explained</h2>
          <p>
            The headline cost difference — roughly £600 versus £7,000–£8,000 — reflects
            fundamentally different scales of installation, not just a cheaper version of the
            same thing.
          </p>
          <p>
            A plug-in system typically consists of one or two panels (each 400W), a
            microinverter that converts DC electricity from the panels to 230V AC, a mounting
            bracket, and a connecting cable. The entire system ships in one or two boxes, weighs
            under 30kg, and can be installed by one person in an afternoon with no specialist
            tools. The product cost — panels, inverter, mounting hardware — is the almost
            the entire cost; there is no labour, no scaffolding, no DNO application fee,
            no building regulations notification.
          </p>
          <p>
            A rooftop solar installation is an infrastructure project. A 3.5kW system requires
            eight to ten panels (each 350–400W), a string inverter or individual microinverters,
            roof fixings penetrating the weatherproofing layer, DC cabling running from the roof
            into the property, AC wiring from the inverter to the consumer unit, and a generation
            meter. The installation typically involves two qualified electricians over one to two
            days, scaffolding if the roof is not easily accessible, and MCS certification
            paperwork. The premium is real and justified by genuine additional complexity.
          </p>
          <p>
            The comparison is better understood as: plug-in solar reduces your bill by 10–20%,
            rooftop solar reduces it by 40–60%. You are paying proportionally more per unit of
            electricity saved with rooftop solar, but getting a much larger absolute reduction
            in bills and a system that lasts 25 years with minimal intervention.
          </p>

          <h2>Why VAT Matters</h2>
          <p>
            One of the most significant and least-discussed differences between the two
            technologies is VAT treatment — and it strongly favours rooftop solar.
          </p>
          <p>
            Rooftop solar installed on a residential property qualifies for 0% VAT under the
            UK's Energy-Saving Materials relief. This relief was extended in 2023 to cover a
            broader range of energy efficiency measures, and it applies to both the panels and
            the installation labour. On a £7,000 installation, the 0% rate saves the consumer
            £1,400 compared to the standard 20% rate.
          </p>
          <p>
            Plug-in balcony solar does not currently qualify for Energy-Saving Materials
            VAT relief. HMRC's position is that the relief applies to materials "installed"
            in a building — and a plug-in device that requires no installation work in the
            building fabric does not meet this definition. As a result, plug-in solar is
            subject to the standard 20% VAT rate.
          </p>
          <p>
            On a £599 kit, that means approximately £100 in VAT that rooftop solar customers
            do not pay. The government's legalisation framework is expected to address this
            disparity — either by extending the Energy-Saving Materials relief explicitly to
            plug-in solar, or through a separate measure — but no change is in place as of
            March 2026. The{" "}
            <a href="https://www.gov.uk/guidance/vat-on-energy-saving-materials" target="_blank" rel="noopener noreferrer">
              HMRC guidance on energy-saving materials VAT
            </a>{" "}
            is the definitive source for the current position.
          </p>

          <h2>SEG and Why Plug-In Solar Cannot Currently Access It</h2>
          <p>
            The Smart Export Guarantee (SEG) is the scheme through which UK solar owners
            receive payment for the electricity they export to the grid. Rates from the best
            suppliers (notably Octopus Energy) currently run at around 15p/kWh, which is
            genuinely valuable for a household that generates significant surplus electricity.
          </p>
          <p>
            Rooftop solar systems installed by MCS-accredited installers are eligible for
            SEG registration. The MCS certification provides the proof of installation quality
            and equipment compliance that SEG licensees (the energy suppliers) require before
            agreeing to pay export tariffs.
          </p>
          <p>
            Plug-in solar installations cannot currently obtain MCS certification. The MCS
            scheme covers professional installations — it is not designed for a consumer
            connecting a cable to a socket. No MCS-accredited installer would certify a
            plug-in system under current scheme rules.
          </p>
          <p>
            In practice, the SEG exclusion has limited financial impact for most balcony solar
            owners. A 600W system with 40% self-consumption exports roughly 190 kWh per year.
            At 15p/kWh, that is approximately £28 per year in foregone SEG income — meaningful
            over a system lifetime, but not the deciding factor in whether plug-in solar makes
            financial sense. The bigger financial driver is self-consumption of electricity
            worth 24p/kWh that you would otherwise buy from the grid.
          </p>
          <p>
            The government's legalisation framework is expected to include a simplified SEG
            pathway for plug-in solar, likely tied to the new BSI standard. Until that pathway
            exists, SEG access remains unavailable for balcony solar owners. See our full guide
            to{" "}
            <Link href="/guides/balcony-solar-seg-tariffs">SEG and balcony solar</Link> for the
            complete picture.
          </p>

          <h2>Can You Have Both?</h2>
          <p>
            Yes — rooftop and plug-in solar are entirely compatible and can operate
            simultaneously on the same property. They connect to the same household circuit
            independently and there is no electrical conflict between them.
          </p>
          <p>
            In practice, a household with a 3.5kW rooftop system already installed may find
            limited value in adding a plug-in system, because the rooftop already covers a
            large proportion of their daytime consumption. The incremental value of adding
            another 400–800W of generation to an already well-served household is lower than
            the value to a household with no solar at all.
          </p>
          <p>
            The combination becomes more interesting when battery storage is involved. A
            rooftop system generating surplus electricity that cannot be consumed immediately
            may benefit from a plug-in storage unit (such as the EcoFlow STREAM or Growatt
            NOAH) that captures the surplus and makes it available in the evening — without
            the cost of a full home battery installation. This is an emerging use case that
            bridges the two product categories.
          </p>
          <p>
            The most natural "both" scenario is the homeowner who adds a plug-in balcony
            system to supplement an existing rooftop installation, targeting a south-facing
            balcony that the rooftop panels cannot see. In this case, both systems genuinely
            complement each other.
          </p>
          <p>
            Use our{" "}
            <Link href="/calculator">savings calculator</Link> to model different system
            configurations and see how the numbers work for your specific situation. Our{" "}
            <Link href="/reviews">product reviews</Link> cover the leading plug-in solar kits
            currently available in the UK.
          </p>

          <h2>Frequently Asked Questions</h2>

          <div itemScope itemType="https://schema.org/FAQPage">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Is balcony solar as good as rooftop solar?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Not in absolute terms — a 3.5kW rooftop system generates six to eight times
                    more electricity per year than a 600W plug-in system. But for households
                    that cannot install rooftop solar (renters, flat-dwellers, those without
                    capital), plug-in solar is not a compromise — it is the only practical
                    option. Within its scope, a well-positioned plug-in system can cover 10–20%
                    of a household's electricity consumption and pay back in three to four years.
                    That is a genuinely good financial return.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Can renters install rooftop solar?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    In practice, no. Even if a landlord permits it in principle, rooftop solar
                    requires an MCS-accredited installer and generates a return only over seven
                    to twelve years — a time horizon that is incompatible with most rental
                    tenancies. The Renters Rights Act 2024 introduced some improvements to
                    security of tenure, but not to the extent that makes rooftop solar
                    practical for tenants. Plug-in balcony solar is the intended solution for
                    renters.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Does rooftop solar add value to my home?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Yes, broadly. Research consistently finds that solar panels increase
                    property values in the UK. The Energy Saving Trust and various academic
                    studies have found uplifts in the range of 2–4% of property value, though
                    this varies by location, system size, and the energy performance of the
                    property overall. A solar installation also improves the property's EPC
                    rating, which is increasingly important for mortgageability and rental
                    compliance. Plug-in solar, being portable and non-structural, does not
                    contribute to the property's value.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Is there VAT on balcony solar?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Yes — plug-in balcony solar is currently subject to 20% standard rate VAT.
                    It does not qualify for the 0% Energy-Saving Materials VAT relief that
                    applies to rooftop solar. This is because HMRC's relief applies to materials
                    installed in the fabric of a building, and a plug-in device does not meet
                    this definition. The government's legalisation framework is expected to
                    address this, but no change is in place as of March 2026. On a £599 kit,
                    the 20% VAT represents approximately £100 compared to what you would pay
                    if the relief applied.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Which has a better payback period — plug-in or rooftop solar?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Plug-in solar has a shorter payback period in most scenarios. A 600W
                    plug-in system costing £599 typically pays back in three to four years
                    through electricity savings. A 3.5kW rooftop system costing £7,500 typically
                    pays back in seven to twelve years, depending on self-consumption rate,
                    SEG export income, and location. Rooftop solar has a much longer operational
                    life (25 years versus 10–15 years for typical plug-in systems) and generates
                    far more electricity in absolute terms, so the total financial return over
                    the system's life is substantially higher for rooftop — but you wait longer
                    to reach payback. Use our{" "}
                    <Link href="/calculator">savings calculator</Link> to model your specific scenario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Ready to get started?</h3>
          <p className="text-sm text-slate-600 mb-4">Find out how much you could save, or see our top-rated systems.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/calculator" className="inline-flex items-center justify-center bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors">Calculate your savings</Link>
            <Link href="/reviews/best-balcony-solar-kits-uk" className="inline-flex items-center justify-center bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm px-5 py-3 rounded-lg transition-colors">See top-rated kits</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Plug-In Solar vs Rooftop Solar: Which Is Right for You?",
            datePublished: "2026-03-15",
            dateModified: "2026-03-30",
            author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
            publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
          }),
        }}
      />
    </>
  );
}
