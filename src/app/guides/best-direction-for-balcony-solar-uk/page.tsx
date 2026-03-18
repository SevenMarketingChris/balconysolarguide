import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "Best Direction for Balcony Solar Panels in the UK (2026)",
  description:
    "Which way should your balcony solar panels face? South is best, but SW and SE are nearly as good. Full UK output data by direction, tilt angle advice, shading warnings, and guidance for east, west, and north-facing balconies.",
};

export default function BestDirectionBalconySolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Best Direction for Balcony Solar Panels in the UK"
        subtitle="South-facing is ideal, but south-west and south-east are almost as good — and even east or west-facing balconies can produce a worthwhile return. Here's how to make the most of whatever direction you have."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Best Direction for Balcony Solar" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">

          <h2>Quick Answer</h2>

          <InfoBox variant="success" title="The short version">
            <ul>
              <li><strong>South-facing:</strong> Optimal. Maximum annual output.</li>
              <li><strong>South-west or south-east:</strong> Excellent — only 3–5% less than due south. Don't worry about it.</li>
              <li><strong>East or west-facing:</strong> Workable. Around 65–70% of south output. Still financially viable.</li>
              <li><strong>North-facing:</strong> Not recommended. Output is too low to justify the investment for most people.</li>
              <li><strong>Shading matters more than direction.</strong> A south-facing panel in significant shade will underperform a west-facing panel in full sun.</li>
            </ul>
          </InfoBox>

          <p>
            Most UK balcony solar guides treat orientation as binary — south good, everything else bad. The reality is
            more nuanced. The difference between south and south-west is negligible. Even a west-facing installation
            can generate enough electricity to pay back comfortably in 4–6 years. What truly kills performance isn't
            direction — it's shading.
          </p>

          <h2>Output by Direction: The Numbers</h2>
          <p>
            The table below shows estimated annual output relative to a due south-facing panel at optimal tilt (35°),
            for UK latitudes. Values are annual averages — seasonal variation means east and west-facing panels can
            perform relatively better or worse at different times of year.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Direction</th>
                  <th>% of South Output</th>
                  <th>Best Time of Day</th>
                  <th>UK Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>South (due south)</td>
                  <td>100%</td>
                  <td>All day, peak midday</td>
                  <td>Optimal</td>
                </tr>
                <tr>
                  <td>South-South-West (SSW)</td>
                  <td>~98%</td>
                  <td>Morning to late afternoon</td>
                  <td>Excellent — negligible difference</td>
                </tr>
                <tr>
                  <td>South-South-East (SSE)</td>
                  <td>~98%</td>
                  <td>Early morning to afternoon</td>
                  <td>Excellent — negligible difference</td>
                </tr>
                <tr>
                  <td>South-West (SW)</td>
                  <td>~95–97%</td>
                  <td>Mid-morning to evening</td>
                  <td>Very good</td>
                </tr>
                <tr>
                  <td>South-East (SE)</td>
                  <td>~95–97%</td>
                  <td>Sunrise to early afternoon</td>
                  <td>Very good</td>
                </tr>
                <tr>
                  <td>West (due west)</td>
                  <td>~65–70%</td>
                  <td>Midday to sunset</td>
                  <td>Viable — good evening match</td>
                </tr>
                <tr>
                  <td>East (due east)</td>
                  <td>~65–70%</td>
                  <td>Sunrise to midday</td>
                  <td>Viable — good morning match</td>
                </tr>
                <tr>
                  <td>North-West (NW)</td>
                  <td>~40–50%</td>
                  <td>Afternoon only</td>
                  <td>Marginal — long payback</td>
                </tr>
                <tr>
                  <td>North-East (NE)</td>
                  <td>~40–50%</td>
                  <td>Morning only</td>
                  <td>Marginal — long payback</td>
                </tr>
                <tr>
                  <td>North (due north)</td>
                  <td>~50–60%</td>
                  <td>Very little direct sun</td>
                  <td>Not recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Values from PVGIS modelling for UK latitudes (51–55°N) at optimal tilt. Vertical (90°) mounting further
            reduces output by approximately 20–30% relative to these figures — see the tilt angle section below.
          </p>

          <InfoBox variant="info" title="Why north-facing performs better than you might expect">
            Due south is 180° in compass terms. Due north is 0°. In summer, the UK sun rises in the north-east and
            sets in the north-west, tracing a high arc across the sky. A north-facing panel therefore receives some
            direct sun in the early morning and late evening during summer months — which is why north-facing doesn't
            drop to zero output. But the hours of direct sun are short and the angles are shallow, resulting in 50–60%
            of south-facing annual output. Combined with a vertical mounting penalty, north-facing balcony solar
            rarely makes financial sense.
          </InfoBox>

          <h2>Why Tilt Angle Matters — and the Railing Mounting Penalty</h2>
          <p>
            Orientation (which compass direction your panel faces) gets most of the attention, but tilt angle — how
            steeply the panel is angled from horizontal — has a significant and often underappreciated effect on output.
          </p>
          <p>
            The optimal tilt angle for maximum annual output in the UK is approximately 35–40° from horizontal. At this
            angle, the panel captures a good balance between the high summer sun and the low winter sun.
          </p>
          <p>
            The problem for most balcony installations is that railing-mounted panels are constrained by the railing
            design. Most railing clamp systems result in a panel at 75–90° — nearly or fully vertical. Here's how that
            affects annual output for a south-facing panel:
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Tilt Angle</th>
                  <th>Relative Annual Output</th>
                  <th>Typical Mounting Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>35–40° (optimal)</td>
                  <td>100%</td>
                  <td>Floor stand or wall bracket</td>
                </tr>
                <tr>
                  <td>45°</td>
                  <td>~97%</td>
                  <td>Adjustable wall bracket or tilted floor stand</td>
                </tr>
                <tr>
                  <td>60°</td>
                  <td>~90%</td>
                  <td>Forward-tilted railing mount</td>
                </tr>
                <tr>
                  <td>75°</td>
                  <td>~82%</td>
                  <td>Railing mount tilted slightly outward</td>
                </tr>
                <tr>
                  <td>90° (vertical)</td>
                  <td>~72%</td>
                  <td>Standard railing hang</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The vertical mounting penalty is real but manageable — you lose around 28% of theoretical output compared
            to an optimal installation. For the convenience of no drilling and full portability, most renter-installers
            consider this an entirely acceptable trade-off.
          </p>
          <p>
            Crucially, the summer penalty from vertical mounting is much less than the annual average suggests. In
            summer, the UK sun is high in the sky (reaching 62° altitude at solar noon in London in June). A vertical
            south-facing panel actually receives near-optimal illumination when the sun is high — it's winter performance
            that suffers most from vertical mounting, when the sun is low (around 15° altitude at noon in December).
            If you're maximising summer generation — which is when most people want to reduce air conditioning loads
            or increase usage — vertical mounting is less of a compromise than it appears.
          </p>

          <InfoBox variant="tip" title="Best compromise for balcony mounting: SSW at 45–60°">
            If you have some flexibility in both orientation and tilt, south-south-west at 45–60° tilt is often the
            optimal real-world choice. The SSW orientation captures the afternoon sun when UK demand is typically higher,
            and 45–60° tilt is achievable with a forward-tilted railing mount or floor stand, giving you 90–97% of
            theoretical maximum output.
          </InfoBox>

          <h2>Shading: More Important Than Direction</h2>

          <InfoBox variant="warning" title="Shading is the biggest performance killer">
            Even 2–3 hours of partial shade per day during peak generation hours can reduce annual output by 15–25%.
            A south-facing panel in significant shade will consistently underperform a west-facing panel in full sun.
            Before buying, survey your balcony at different times of day — ideally at 9am, 12pm, and 3pm on a clear
            day — and identify any structures casting shadows on the panel position.
          </InfoBox>

          <p>
            Sources of shading to check:
          </p>
          <ul>
            <li><strong>Adjacent buildings:</strong> Particularly on lower floors or in urban areas with tall neighbours. The building directly opposite may cast a shadow across your balcony for several hours each afternoon.</li>
            <li><strong>Balcony above yours:</strong> On multi-storey buildings, the balcony slab directly above can block significant sky access, especially at lower sun angles in winter. The higher your balcony, the less this matters.</li>
            <li><strong>Trees:</strong> Seasonal — summer leaf cover can create significant shading that doesn't exist in winter photography of your flat. Check in summer, not just winter.</li>
            <li><strong>Roof overhangs and eaves:</strong> Can cast shadows at specific sun angles. Usually most impactful in spring and autumn.</li>
          </ul>

          <h3>How micro-inverters help with shading</h3>
          <p>
            Most balcony solar kits use micro-inverters, where each panel has its own dedicated inverter. This is
            significant for shading: with a string inverter (used in most rooftop systems), shade on one panel drags
            down the entire string. With micro-inverters, each panel operates independently — a shaded panel underperforms,
            but doesn't reduce the output of unshaded panels. If you're in a location where partial shading is
            unavoidable, a micro-inverter system is strongly preferable to any string-inverter alternative.
          </p>

          <h2>East vs West: Which Is Better for UK Households?</h2>
          <p>
            East and west-facing installations produce roughly the same annual output — approximately 65–70% of
            south-facing. The difference comes in <em>when</em> that output is generated, and whether it matches
            your household's consumption pattern.
          </p>

          <h3>East-facing</h3>
          <p>
            An east-facing panel generates strongly in the morning, typically from around 7am–1pm, peaking between
            9am and 11am. This suits households with high morning consumption — kettles, toasters, showers, washing
            machines running before work. It also aligns well with electric vehicle charging overnight and topping up
            in the morning.
          </p>

          <h3>West-facing</h3>
          <p>
            A west-facing panel generates from around midday to sunset, typically peaking between 2pm and 4pm.
            This is often a better match for UK household electricity demand, which tends to peak in the late afternoon
            and evening (cooking, TV, lighting). If you're on a time-of-use tariff with higher peak rates between
            4pm and 7pm, a west-facing installation can save you more per unit than the raw kWh figures suggest.
          </p>
          <p>
            For the average UK household with a conventional working pattern, <strong>west-facing is usually marginally
            better</strong> than east-facing in financial terms — but only marginally. The more important question is
            whether your specific household load profile matches morning or afternoon generation. If you work from home
            and run appliances throughout the day, the distinction barely matters.
          </p>

          <h2>How to Check Your Balcony's Orientation</h2>
          <p>
            Before buying a system, confirm which direction your balcony actually faces. There are several ways to do this:
          </p>

          <h3>Compass (phone or physical)</h3>
          <p>
            Stand on your balcony facing outward and check the compass bearing. Due south is 180°. A reading between
            135° and 225° (SE to SW) is excellent. Between 90° and 135° (E to SE) or between 225° and 270° (SW to W)
            is workable. Below 90° or above 270° (approaching north) becomes marginal.
          </p>
          <p>
            Note that phone compass apps can be affected by nearby metalwork and building structures. Take several
            readings and move a metre or two to verify consistency.
          </p>

          <h3>PVGIS — the most accurate tool</h3>
          <p>
            The EU's PVGIS tool (<a href="https://re.jrc.ec.europa.eu/pvg_tools/en/" target="_blank" rel="noopener noreferrer">pvgis.ec.europa.eu</a>)
            is the gold standard for solar output estimation. Enter your postcode coordinates, set your panel wattage,
            select your azimuth (0° = south in PVGIS), and tilt angle, and it will calculate estimated annual output
            using decades of irradiance data. It's free, technically rigorous, and covers UK locations accurately.
          </p>

          <h3>SunSurveyor app</h3>
          <p>
            SunSurveyor (iOS and Android) uses augmented reality to show the sun's path across your balcony at any
            time of year, overlaid on your phone camera. Stand on your balcony and you can see exactly where the sun
            will be at 10am in December or 3pm in June — and whether any nearby structures will cast shade at those
            times. It costs a few pounds but is particularly useful for identifying shading risks before you commit
            to a kit.
          </p>

          <h3>Use our calculator</h3>
          <p>
            Our{" "}
            <Link href="/calculator" className="text-solar-600 hover:text-solar-700 font-medium">
              balcony solar savings calculator
            </Link>{" "}
            lets you enter your postcode, azimuth, and tilt angle to get a personalised output estimate based on PVGIS
            irradiance data. It also factors in self-consumption patterns to give you a realistic annual saving figure
            rather than a raw generation number.
          </p>

          <h2>What to Do If You Have No South-Facing Option</h2>
          <p>
            If your balcony faces north, north-east, or north-west, you have a few options:
          </p>
          <ul>
            <li>
              <strong>Floor mount pointed outward:</strong> If your balcony has enough depth, a freestanding floor stand
              can sometimes be angled to face a different direction from the balcony itself — particularly effective if
              you can tilt the panel to face upward and outward at an angle. This is awkward but possible on deeper
              balconies.
            </li>
            <li>
              <strong>Window sill or exterior wall:</strong> If you have a south-facing exterior wall — even if the
              balcony doesn't face that way — a wall-mounted bracket can position a panel on that aspect. This requires
              drilling and landlord consent if renting.
            </li>
            <li>
              <strong>Garden or patio:</strong> If you have access to a garden, yard, or roof terrace on a better
              aspect, a freestanding ground mount there may be more productive than a north-facing balcony mount.
              Cable routing back into the property needs thought.
            </li>
            <li>
              <strong>Accept reduced output:</strong> A north-facing 800W system will generate approximately 350–450kWh/year
              in the south of England at vertical mounting. At 25p/kWh with 60% self-consumption, that's roughly
              £52–£67/year. With a kit at £600, payback would be around 9–12 years — not compelling, but not zero either.
              For some households in very high electricity-use situations, it may still be worthwhile.
            </li>
          </ul>

          <InfoBox variant="info" title="Don't rule out east or west too quickly">
            Many people with east or west-facing balconies assume balcony solar isn't worth it. The numbers suggest
            otherwise: a west-facing 800W system in London generates approximately 430–490kWh/year. At 25p/kWh with
            65% self-consumption, that's around £70–£80/year. With an 800W kit at £600, payback is around 7–8 years —
            well within the 20-year panel lifetime. Check our{" "}
            <Link href="/calculator">calculator</Link> with your specific postcode and orientation before deciding.
          </InfoBox>

          <h2>Special Case: Juliet Balconies</h2>
          <p>
            Juliet balconies — the floor-to-ceiling glass or close-bar balustrades found in many UK purpose-built flats
            — have no usable floor space, and the panel effectively has no orientation choice. Your panel will face
            whichever direction the Juliet balcony faces, mounted vertically (90°) against the outside of the railing.
          </p>
          <p>
            This means:
          </p>
          <ul>
            <li>You cannot tilt the panel to improve output — you're stuck at 90°</li>
            <li>You cannot reorient the panel — it faces whatever way your flat faces</li>
            <li>The combined effect of 90° tilt and potentially sub-optimal direction means output may be 50–60% of what a well-positioned floor-mounted south-facing system achieves</li>
          </ul>
          <p>
            However, this doesn't mean Juliet balcony solar is pointless — it means you need to be realistic about
            output and payback. A south-facing Juliet balcony is still an excellent installation. A west-facing Juliet
            balcony will generate around 45–50% of the output of a south-facing optimally-tilted system, which still
            translates to a meaningful — if modest — financial return over time.
          </p>
          <p>
            If your Juliet balcony faces north, the combination of poor orientation and forced vertical mounting makes
            the financial case very difficult to justify. Consider whether a window sill mount or a ground-floor garden
            option on a better-facing aspect is available as an alternative.
          </p>
          <p>
            See our <Link href="/guides/how-to-mount-balcony-solar-panels">mounting guide</Link> for more detail on
            Juliet-specific mounting hardware options.
          </p>

          <h2>Frequently Asked Questions</h2>

          <div itemScope itemType="https://schema.org/FAQPage">

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">What direction should balcony solar panels face?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    South-facing (180° compass bearing) gives the maximum annual output in the UK. South-west and
                    south-east are both excellent — within 3–5% of due south — and you should not be deterred from
                    balcony solar by a slightly off-south orientation. East and west-facing installations produce
                    around 65–70% of south-facing output annually and are financially viable for most households.
                    North-facing is generally not recommended due to very low output.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Is a west-facing balcony worth it for solar panels?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Yes, in most cases. A west-facing 800W system in south-east England will generate approximately
                    430–490kWh per year at vertical mounting. At 25p/kWh with reasonable self-consumption, that's
                    around £70–£80/year in savings. With a system costing £550–£650, payback is around 7–8 years —
                    comfortably within the 20-year panel lifetime. West-facing also has an advantage for UK households
                    in that afternoon generation coincides with the typical evening consumption peak.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">How much does orientation affect solar panel output?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    The effect is surprisingly modest for deviations up to about 45° from due south. South-west and
                    south-east lose only 3–5% annually compared to due south — a negligible difference. Even due east
                    or due west retains around 65–70% of south-facing output. The output drop accelerates for north-facing
                    orientations. Shading typically has a larger practical impact on output than sub-optimal orientation
                    — a shaded south-facing panel will often underperform an unshaded west-facing one.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">What if my balcony faces north?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    A north-facing vertical balcony panel will generate roughly 50–60% of south-facing output in terms
                    of direction alone, then the 90° vertical mounting reduces this further. Combined, you might expect
                    35–45% of optimal output — making financial payback very challenging. If your balcony faces north,
                    first explore whether you have a south-facing exterior wall available for a wall-mounted panel, or
                    whether a garden or patio on a better aspect could be used with a freestanding ground mount. If none
                    of these options exist, be honest with yourself about whether the financial return on a north-facing
                    balcony installation justifies the investment.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Does vertical mounting on a balcony railing significantly affect output?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Yes — a south-facing panel mounted vertically at 90° produces approximately 72% of what the same
                    panel would generate at the optimal UK tilt of 35–40°. This is a real loss of around 28% annually.
                    However, the summer penalty is much smaller than this annual average suggests, because the UK sun is
                    high in the sky in summer (reaching 62° altitude at noon in London in June), meaning a vertical
                    south-facing panel receives near-optimal illumination during the main generation season. Floor-mounted
                    or wall-mounted systems allow better tilt angles and therefore higher annual output, but railing
                    mounting is a perfectly reasonable compromise for renters who value portability and no drilling.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </article>
      </div>
    </>
  );
}
