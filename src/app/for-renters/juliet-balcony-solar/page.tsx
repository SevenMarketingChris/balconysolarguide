import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Balcony Solar for Juliet Balconies UK — What Works and What Doesn't | Balcony Solar Guide",
  description: "No full balcony floor? Juliet balconies can still host solar panels with the right system. An honest guide to options, generation expectations, and what to avoid — including glazed balustrades.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export default function JulietBalconySolarPage() {
  return (
    <div>
      <PageHero
        eyebrow="For Renters"
        title="Balcony Solar for Juliet Balconies: What Works and What Doesn't"
        subtitle="Juliet balconies — narrow railings or glazed barriers at a window with no floor space — are common in UK flats. Here's the honest guide to what's possible."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "For Renters", href: "/for-renters" },
            { label: "Juliet Balcony Solar" },
          ]}
        />

        {/* What is a Juliet balcony */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is a Juliet Balcony?</h2>
          <p className="text-slate-600 mb-4">
            A Juliet balcony (sometimes called a balconette or French balcony) is a narrow railing or glazed
            balustrade fitted in front of a full-height window or door, creating the appearance of a balcony without
            providing any usable floor space. You can stand at the open window with the barrier in front of you, but
            there is no platform on which to stand outside.
          </p>
          <p className="text-slate-600 mb-4">
            They are extremely common in UK flat developments from the 1990s onwards — used by developers to add the
            visual appeal of a balcony at minimal structural cost. For practical purposes, a Juliet balcony provides
            good natural light and ventilation, but unlike a full balcony, you cannot place furniture, plants, or
            standard balcony solar systems on its "floor" — because there is no floor.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Full balcony</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Has a projecting floor platform (typically 60–200cm deep)</li>
                <li>• Railing or balustrade around the perimeter</li>
                <li>• Can hold furniture and equipment</li>
                <li>• Suitable for most solar mounting systems</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Juliet balcony</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• No projecting floor — just a railing at window level</li>
                <li>• Often glazed (frameless glass) or with narrow railings</li>
                <li>• No space to stand or place equipment</li>
                <li>• Requires specific approaches for solar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Can you mount solar? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Can You Mount Solar Panels on a Juliet Balcony?</h2>
          <p className="text-slate-600 mb-4">
            The short answer is yes — but with significant constraints, and only with the right equipment and system.
            The fundamental challenge is that without a floor, you can only attach solar panels to the railing itself,
            which imposes limits on:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Panel size — the railing height determines the maximum panel dimension",
              "Panel weight — railings are designed for incidental loads, not sustained weight",
              "Panel angle — tilting panels for optimal generation requires a floor anchor point",
              "Visibility from street — panels on a front-of-building Juliet balcony may be more visible",
              "Glazed balustrades — you cannot attach anything to glass balustrades",
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-amber-500 font-bold flex-shrink-0">!</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            That said, these constraints are workable — particularly for smaller panel configurations. The key is
            choosing the right system and accepting that you'll generate less electricity than a full south-facing
            balcony setup. But less is still significantly more than zero.
          </p>
        </section>

        <InfoBox variant="warning" title="Glazed balustrades: not suitable">
          If your Juliet balcony has a frameless glass or frameless glazed balustrade, you cannot attach solar panels
          to it — either by clamping or by any adhesive method. Glass balustrades are not designed to take lateral
          or downward loads from panel mounting hardware. In this case, your only option is an internal window-adjacent
          approach, which is very limited, or waiting until you move to a property with a suitable railing or full
          balcony.
        </InfoBox>

        {/* What works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Actually Works: Systems and Approaches</h2>

          <div className="space-y-5">
            <div className="border border-green-200 bg-green-50 rounded-xl p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-green-900">Small panels on railing mounts (best option)</h3>
                <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0">
                  Recommended
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Panels in the 100–200W range (approximately 1.0m × 0.7m each) can be mounted vertically on standard
                steel or aluminium railings using adjustable railing clamp brackets. These brackets grip the top and
                bottom railing rails without drilling, and the panel hangs vertically in front of the railing.
              </p>
              <p className="text-sm text-slate-700 mb-2">
                Two 200W panels side by side will fit many standard Juliet balcony railings (typically 1.0–1.8m wide)
                and produce 400W total — exactly the output of the Jackery Navi 2000 system.
              </p>
              <p className="text-sm font-semibold text-green-800">Generation potential: 0.6–1.4 kWh/day depending on orientation and season.</p>
            </div>

            <div className="border border-green-200 bg-green-50 rounded-xl p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-green-900">Jackery Navi 2000 (integrated compact system)</h3>
                <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0">
                  Best system
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                The Jackery Navi 2000 is specifically designed for compact installations. Its panel size is smaller
                than EcoFlow or Anker equivalents, and the system is lightweight enough for railing mounting. At 400W
                maximum output, it's the best complete integrated system for Juliet balconies.
              </p>
              <p className="text-sm text-slate-700">
                See our{" "}
                <Link href="/reviews/jackery-navi-2000" className="underline font-semibold text-green-700">
                  Jackery Navi 2000 review roundup
                </Link>{" "}
                for more detail on this system.
              </p>
            </div>

            <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
              <h3 className="font-bold text-amber-900 mb-2">DIY kit with 2x 200W panels</h3>
              <p className="text-sm text-slate-700">
                A Plug-in Solar style kit using two 200W panels (available separately from panel suppliers) paired
                with a Hoymiles HM-400 micro-inverter gives you a 400W Juliet-compatible system at a lower price
                than the Jackery Navi 2000. The trade-off is no integrated battery and a more DIY experience.
                Suitable for technically confident installers.
              </p>
            </div>
          </div>
        </section>

        {/* What doesn't work */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Doesn't Work on a Juliet Balcony</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                item: "EcoFlow STREAM / Anker SOLIX (600–800W systems)",
                reason:
                  "Too large. The 300W monocrystalline panels in these systems are approximately 1.7m tall — taller than most Juliet balcony railings. Cannot be mounted vertically on the railing without protruding significantly above the window opening.",
              },
              {
                item: "Floor mounts / freestanding stands",
                reason:
                  "No floor. A freestanding floor mount requires a balcony floor to stand on. On a Juliet balcony there is no floor to stand on — the railing is flush with the building face.",
              },
              {
                item: "Tilted panel configurations",
                reason:
                  "Tilting panels at 25–35 degrees for optimal sun angle requires either a floor anchor point or a floor-mounted stand. Neither is available on a Juliet balcony. Vertical mounting (90 degrees) is the only practical option.",
              },
              {
                item: "Glazed/glass balustrades",
                reason:
                  "Nothing can be attached to glass. If your Juliet balcony has a frameless glass panel rather than railings, none of the available mounting systems will work.",
              },
            ].map((item) => (
              <div key={item.item} className="border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-1">{item.item}</h3>
                <p className="text-sm text-red-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Generation expectations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Realistic Generation Expectations</h2>
          <p className="text-slate-600 mb-4">
            Panels mounted vertically on a Juliet balcony railing generate less electricity than the same panels
            tilted at an optimal angle — typically 15–25% less than a south-facing 30–35 degree tilt. This is a
            real limitation but not a fatal one.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Scenario</th>
                  <th className="text-left px-4 py-3 font-semibold">Summer daily avg</th>
                  <th className="text-left px-4 py-3 font-semibold">Winter daily avg</th>
                  <th className="text-left px-4 py-3 font-semibold">Annual est.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-slate-700">South-facing, vertical, 400W</td>
                  <td className="px-4 py-3 text-slate-700">1.2–1.8 kWh</td>
                  <td className="px-4 py-3 text-slate-700">0.4–0.7 kWh</td>
                  <td className="px-4 py-3 text-slate-700">~320–420 kWh</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">South-east or south-west, 400W</td>
                  <td className="px-4 py-3 text-slate-700">0.9–1.4 kWh</td>
                  <td className="px-4 py-3 text-slate-700">0.3–0.5 kWh</td>
                  <td className="px-4 py-3 text-slate-700">~240–340 kWh</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-slate-700">East or west facing, 400W</td>
                  <td className="px-4 py-3 text-slate-700">0.6–1.0 kWh</td>
                  <td className="px-4 py-3 text-slate-700">0.2–0.4 kWh</td>
                  <td className="px-4 py-3 text-slate-700">~180–260 kWh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Estimates based on UK solar irradiance data for a midlands/central England location. South-east and south-west locations will see slightly higher figures; north-facing balconies are not viable.
          </p>
        </section>

        <InfoBox variant="tip" title="East/west corner Juliet tip">
          If your flat has corner windows — with a Juliet balcony on an east-facing wall and another on a west-facing
          wall — consider splitting a 400W setup between them: one 200W panel east-facing and one 200W panel
          west-facing. This improves total daily generation spread, with the east panel performing best in the morning
          and the west panel in the afternoon, giving a longer and flatter daily generation curve than a single
          south-facing installation.
        </InfoBox>

        {/* Planning and consent */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Planning and Consent Considerations</h2>
          <p className="text-slate-600 mb-4">
            Panels mounted on a front-of-building Juliet balcony railing are visible from the street, which makes
            planning and landlord/freeholder consent considerations slightly more acute than for panels on a rear
            balcony. See our{" "}
            <Link href="/uk-regulations/planning-permission" className="text-solar-600 underline font-semibold">
              planning permission guide
            </Link>{" "}
            for the full picture, but the key points are:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Conservation areas: if visible from the street in a conservation area, permitted development doesn't apply — but planning applications for small solar are generally approved",
              "Leasehold: your lease likely covers the exterior of the building, and a front-of-building installation may require freeholder consent even more clearly than a rear installation",
              "Management companies: for managed leasehold buildings, a front Juliet installation is more likely to require formal consent than a rear balcony",
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-slate-400 font-bold flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            The practical advice: for a Juliet balcony installation, seek written permission from your landlord before
            proceeding, regardless of whether planning permission is technically needed. A good letter explaining the
            compact and portable nature of the system goes a long way.{" "}
            <Link href="/for-renters/landlord-letter-template" className="text-solar-600 underline font-semibold">
              Use our letter template →
            </Link>
          </p>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Related guides:{" "}
            <Link href="/reviews/jackery-navi-2000" className="text-solar-600 underline">
              Jackery Navi 2000 review roundup
            </Link>
            {" · "}
            <Link href="/for-renters/landlord-letter-template" className="text-solar-600 underline">
              Landlord letter template
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
