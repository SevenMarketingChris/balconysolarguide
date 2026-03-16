import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Do You Need Planning Permission for Balcony Solar Panels? UK Guide | Balcony Solar Guide",
  description: "For most UK homes, balcony solar falls under permitted development rights. Learn what applies to your property — including exceptions for listed buildings, conservation areas, and flats.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export default function PlanningPermissionPage() {
  return (
    <div>
      <PageHero
        eyebrow="UK Regulations"
        title="Do You Need Planning Permission for Balcony Solar Panels?"
        subtitle="For most UK properties, the answer is no — balcony solar panels typically fall within permitted development rights. But there are conditions, and some property types require more care."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "UK Regulations", href: "/uk-regulations" },
            { label: "Planning Permission" },
          ]}
        />

        {/* Quick answer */}
        <section className="mb-10">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-green-900 mb-2">The short answer</h2>
            <p className="text-green-800 mb-0">
              For most detached, semi-detached, and terraced houses in England, Wales, and Scotland, balcony solar
              panels are covered by <strong>permitted development rights</strong> and do not require a formal planning
              application. Flats and listed buildings are subject to different rules.
            </p>
          </div>
        </section>

        {/* What is permitted development */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is Permitted Development?</h2>
          <p className="text-slate-600 mb-4">
            Permitted development rights allow homeowners to carry out certain types of building work without needing
            to apply for planning permission. The rights are set out in the Town and Country Planning (General
            Permitted Development) Order 2015 (as amended) in England, with equivalent legislation in Wales and
            Scotland.
          </p>
          <p className="text-slate-600 mb-4">
            Solar panels are specifically mentioned under Class A of Schedule 2 of the GPDO as "solar equipment."
            Under Class A, solar panels can be installed on domestic dwellings as permitted development, subject to
            conditions. These conditions were originally written for roof-mounted panels, but planning authorities
            generally apply them by analogy to balcony and wall-mounted panels.
          </p>
        </section>

        {/* Conditions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Conditions You Must Meet</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">1. Protrusion limit</h3>
              <p className="text-slate-600 text-sm mb-2">
                Solar equipment must not protrude more than 200mm from the building surface. For roof-mounted panels
                this is straightforward, but for balcony-mounted panels, it's more nuanced.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>The practical reality:</strong> Most balcony solar panels mounted vertically on railings, or
                tilted at an angle on a balcony floor, will protrude more than 200mm when measured from the building
                facade. In practice, enforcement for small balcony panel installations is essentially non-existent —
                but if you want to be strictly compliant, panels mounted flat against a south-facing wall or within a
                balcony void are your safest approach.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">2. Not on a listed building</h3>
              <p className="text-slate-600 text-sm">
                Listed buildings are explicitly excluded from solar permitted development rights. If your property is
                Grade I, Grade II*, or Grade II listed (or Category A, B, or C in Scotland), you will need Listed
                Building Consent in addition to planning permission. Check if your property is listed via Historic
                England's National Heritage List for England at historicengland.org.uk.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">3. Not in a conservation area (with conditions)</h3>
              <p className="text-slate-600 text-sm">
                If your property is in a designated conservation area, additional restrictions apply. Solar panels
                visible from the highway (broadly meaning: visible from a public road or footpath) in a conservation
                area are not covered by permitted development and require planning permission. Check with your local
                planning authority if you're in a conservation area and your panels would be visible from the street.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">4. No significant adverse impact on the area's amenity</h3>
              <p className="text-slate-600 text-sm">
                Panels should not cause "significant" adverse effects on the appearance of the building or the amenity
                of the area. This is a subjective standard and rarely applied in practice for small balcony solar
                installations. It becomes more relevant for larger arrays or in sensitive locations.
              </p>
            </div>
          </div>
        </section>

        <InfoBox variant="warning" title="Conservation areas: check before installing">
          If your property is in a conservation area and your balcony solar panels would be visible from a public road
          or footpath, permitted development rights don't apply. You'll need to make a planning application to your
          local authority. Many conservation area panels are still approved — the key is making an application rather
          than assuming permitted development covers you. Contact your local planning authority for pre-application
          advice, which is often free.
        </InfoBox>

        {/* Flats */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What About Flats?</h2>
          <p className="text-slate-600 mb-4">
            The permitted development rules for solar equipment (Class A) apply to "dwellinghouses" — a legal term
            that excludes flats, maisonettes, and other converted buildings that contain more than one residential unit.
          </p>
          <p className="text-slate-600 mb-4">
            This means that strictly speaking, balcony solar on a flat does not have permitted development rights under
            Class A. In practice, planning authorities have taken no enforcement action against flat-based balcony solar
            installations, and the scale and character of a single balcony panel is generally considered de minimis
            (too minor to warrant enforcement action).
          </p>
          <p className="text-slate-600 mb-4">
            However, flat owners and renters should be aware of a more practical barrier: their{" "}
            <strong>lease</strong>. Even if planning permission isn't required, your lease may contain clauses that
            restrict exterior alterations, and your balcony may be common property rather than demised to you
            personally.
          </p>
          <InfoBox variant="info" title="Planning permission vs lease permission — these are separate questions">
            Whether you need planning permission (a public law matter decided by your local authority) is a completely
            separate question from whether your lease or landlord permits the installation (a private law matter between
            you and your freeholder). You need to check both independently.{" "}
            <Link href="/uk-regulations/leasehold-balcony-solar" className="underline font-semibold">
              Read our leasehold guide →
            </Link>
          </InfoBox>
        </section>

        {/* Enforcement reality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Enforcement Reality</h2>
          <p className="text-slate-600 mb-4">
            Planning enforcement in England is complaint-led and discretionary. Local authorities have limited
            resources and considerable discretion about which matters to pursue. Even when a technical breach of
            planning control exists, enforcement action must be a "last resort" under planning policy.
          </p>
          <p className="text-slate-600 mb-4">
            For balcony solar panels, the enforcement position is:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "No enforcement action has been taken against any domestic balcony solar installation in the UK",
              "Planning authorities are aware of the government's direction of travel towards legalisation",
              "The scale and visual impact of single-household balcony solar is invariably minor",
              "Any enforcement notice issued within 4 years of installation would be time-barred anyway",
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-green-500 font-bold flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            In practical terms, planning permission is not a genuine barrier for standard balcony solar installations
            in England, Wales, or Scotland. The exception is if you're in a conservation area and your panels would be
            highly visible from the street, in which case making a planning application (which is likely to be
            approved) is the sensible approach.
          </p>
        </section>

        {/* Devolved nations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Scotland, Wales, and Northern Ireland</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Scotland</h3>
              <p className="text-sm text-slate-600">
                Scottish planning policy follows broadly similar principles under the Town and Country Planning
                (General Permitted Development) (Scotland) Order 1992. Solar panels on dwellinghouses are generally
                permitted development subject to similar conditions to England.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Wales</h3>
              <p className="text-sm text-slate-600">
                Wales has its own permitted development framework under the Town and Country Planning (General
                Permitted Development) Order 1995 (Wales). Solar panels are covered as permitted development on
                dwellinghouses with broadly similar conditions to England.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Northern Ireland</h3>
              <p className="text-sm text-slate-600">
                Northern Ireland planning is governed by the Planning Act (Northern Ireland) 2011. The permitted
                development position for solar panels is similar in principle. The government is a separate devolved
                matter — check with the Department for Infrastructure (NI) for current guidance.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Continue reading:{" "}
            <Link href="/uk-regulations/building-regulations" className="text-solar-600 underline">
              Building regulations and BS 7671 →
            </Link>
            {" · "}
            <Link href="/uk-regulations/dno-g98-explained" className="text-solar-600 underline">
              G98 DNO notification →
            </Link>
            {" · "}
            <Link href="/uk-regulations/leasehold-balcony-solar" className="text-solar-600 underline">
              Leasehold considerations →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
