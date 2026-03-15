import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "How to Mount Balcony Solar Panels: UK Guide to All Balcony Types",
  description:
    "Railing mounts, wall brackets, floor stands, Juliet balconies — complete UK guide to mounting balcony solar panels safely, with tilt angle advice and wind loading guidance.",
};

export default function HowToMountBalconySolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="How to Mount Balcony Solar Panels"
        subtitle="A complete guide to every mounting option for UK balconies — railing clamps, wall brackets, floor stands, and Juliet balconies — with tilt angles, safety guidance, and a comparison table."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Mounting Guide" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>The Four Main Mounting Approaches</h2>
          <p>
            Balcony solar panels need to be securely attached to your building in a position that catches sunlight,
            without damaging the structure, voiding any leases, or creating a hazard to people below. There are four
            main ways to achieve this, each with different implications for output, ease of installation, portability,
            and the need for landlord permission.
          </p>

          <h2>1. Railing Mounts</h2>
          <p>
            Railing mounts are the most common mounting method for balcony solar in the UK and across Europe. They use
            adjustable clamps — typically made from anodised aluminium or stainless steel — to grip the horizontal bar
            of a balcony railing. The panel hangs from or is supported against the railing at a near-vertical angle.
          </p>
          <h3>How It Works</h3>
          <p>
            Most railing mounts consist of two or four clamp brackets that attach to the top railing bar, from which a
            tilt frame extends downward. The panel is bolted to the frame at a fixed or adjustable angle. Some systems
            can be tilted outward slightly from the vertical, typically to 60–75°, which improves output compared to a
            fully vertical mounting.
          </p>
          <h3>Compatible Railing Types</h3>
          <p>
            Standard railing-clamp systems work well with round tube railings (the most common type in UK purpose-built
            flats and Victorian/Edwardian terraces), square-section railings, and most powder-coated or galvanised steel
            railings. They generally don't work with glass balustrades or very wide flat-section railings without
            adapters.
          </p>
          <h3>Pros and Cons</h3>
          <ul>
            <li><strong>Pros:</strong> No drilling, quick to install and remove, renter-friendly, no tools beyond a spanner required, system is fully portable.</li>
            <li><strong>Cons:</strong> Panel angle is constrained by railing design — typically 80–90° from horizontal (near-vertical), which reduces annual output by 20–30% compared to optimal tilt. Not suitable for glass or unusual railing designs.</li>
          </ul>

          <h2>2. Wall Mounts</h2>
          <p>
            Wall-mounted brackets fix directly to the exterior wall of the building, typically using masonry anchors
            drilled into brick, blockwork, or rendered surfaces. The panel frame is then bolted to the bracket, allowing
            a more flexible tilt angle than railing-mounted systems.
          </p>
          <h3>How It Works</h3>
          <p>
            A pair of L-brackets or a purpose-made solar panel bracket is drilled and bolted into the wall at the
            appropriate height. The panel frame slides or bolts onto the bracket. Many wall-mount kits include a
            pivoting joint allowing the tilt angle to be set between 20° and 60°, which means you can achieve much
            closer to the optimal 30–35° for UK latitudes.
          </p>
          <h3>Pros and Cons</h3>
          <ul>
            <li><strong>Pros:</strong> Allows optimal tilt angle, very secure, not dependent on railing design, can be installed on walls without a balcony railing.</li>
            <li><strong>Cons:</strong> Requires drilling — renters need written landlord permission; leaves holes when removed; not fully portable; more labour-intensive to install.</li>
          </ul>

          <InfoBox variant="warning" title="Drilling and lease agreements">
            If you rent, drilling into the building's exterior requires your landlord's explicit written permission. This
            applies even if the holes are small. Proceed without permission and you risk deposit deductions and potential
            lease breach.
          </InfoBox>

          <h2>3. Floor / Freestanding Mounts</h2>
          <p>
            Freestanding floor mounts — sometimes called ground mounts or balcony stands — support the panel on an
            adjustable frame that sits directly on the balcony floor. No attachment to the building is required at all.
          </p>
          <h3>How It Works</h3>
          <p>
            The frame is typically an A-frame or tripod design with rubber feet to protect the floor surface. Most
            allow tilt adjustment from roughly 20° to 60°. Heavier systems may include ballast trays or water-fillable
            weights to improve stability in wind. Lighter systems should be tied or weighted when used on upper floors.
          </p>
          <h3>Pros and Cons</h3>
          <ul>
            <li><strong>Pros:</strong> Completely no-drill, maximum portability, allows proper tilt angle, ideal for renters, can be repositioned easily to track seasons.</li>
            <li><strong>Cons:</strong> Takes up floor space on the balcony, requires weighting or securing against wind on upper floors, may obstruct access if balcony is small.</li>
          </ul>

          <h2>4. Juliet Balcony Mounts</h2>
          <p>
            Juliet balconies — the floor-to-ceiling glass or metal railing panels commonly found in purpose-built flats
            — present a specific challenge. There's no floor space to use, and the balustrade is typically glass or
            widely-spaced vertical bars rather than a grippable horizontal railing.
          </p>
          <h3>Purpose-Made Juliet Brackets</h3>
          <p>
            Several manufacturers produce mounting kits specifically for Juliet balconies. These typically use
            frame-grip clamps that attach to the vertical framing of the balustrade rather than the infill glass, with
            the panel mounted vertically against the outside of the railing. Output is limited — a single panel at
            90° may generate 30–40% less than an optimally-tilted equivalent — but it's often the only practical
            option.
          </p>
          <p>
            An alternative for ground-floor or first-floor Juliet balcony flats is to install a freestanding floor
            mount on the patio or garden immediately outside the door, routing the cable through the gap around the door
            frame. This allows an optimal tilt angle with no railing attachment required.
          </p>
          <h3>Pros and Cons</h3>
          <ul>
            <li><strong>Pros:</strong> Can work where no other option exists, frame-grip systems require no drilling.</li>
            <li><strong>Cons:</strong> Reduced output due to vertical mounting, limited panel size, not compatible with all balustrade designs.</li>
          </ul>

          <h2>Tilt Angle: How Much Does It Matter?</h2>
          <p>
            The optimal tilt angle for solar panels in the UK is approximately 30–35° from horizontal. At this angle, a
            south-facing panel captures the most total energy over the course of a year, balancing the high sun angles
            of summer with the lower angles of winter.
          </p>
          <p>
            For balcony solar, achieving this optimal angle isn't always possible — a railing-mounted panel is typically
            at 80–90° (nearly vertical). Here's how tilt angle affects relative annual output for a south-facing panel
            at UK latitudes:
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Tilt Angle</th>
                  <th>Relative Annual Output</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30–35°</td>
                  <td>100% (optimal)</td>
                  <td>Best for annual total; achievable with floor or wall mounts</td>
                </tr>
                <tr>
                  <td>45°</td>
                  <td>~97%</td>
                  <td>Negligible difference from optimal</td>
                </tr>
                <tr>
                  <td>60°</td>
                  <td>~90%</td>
                  <td>Achievable with some railing mounts tilted outward</td>
                </tr>
                <tr>
                  <td>75°</td>
                  <td>~82%</td>
                  <td>Typical of forward-tilted railing mounts</td>
                </tr>
                <tr>
                  <td>90° (vertical)</td>
                  <td>~72%</td>
                  <td>Standard railing hang; still very workable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The important takeaway is that even a vertical mounting still captures roughly 72% of the output you'd get
            from a perfectly-angled installation. The trade-off in convenience — no drilling, full portability, renter
            suitability — is well worth a 28% reduction in annual output for most people.
          </p>

          <h2>Wind Loading and Safety</h2>
          <p>
            A 400W solar panel is typically 1.7m × 1.1m and weighs 20–23kg. At these dimensions, it presents a
            significant surface area to the wind, and wind loading must be taken seriously — particularly on upper
            floors where gusts can be substantially stronger than at ground level.
          </p>

          <InfoBox variant="warning" title="Upper floor wind loading">
            On balconies above the third floor, wind speeds can be 30–50% higher than at ground level in exposed
            locations. A panel that feels secure in calm conditions may become dangerous in a strong gust. Always use
            the full set of clamps or fixings provided, tighten to the manufacturer's torque specification, and check
            fixings seasonally. If in doubt about your location's wind exposure, seek advice from the supplier before
            installing.
          </InfoBox>

          <h3>Wind Safety by Mounting Type</h3>
          <ul>
            <li>
              <strong>Railing mounts:</strong> The railing itself provides the primary load-bearing structure. Ensure
              the railing is in good condition and properly fixed to the building before attaching panels. Old or
              corroded railings should be inspected before use.
            </li>
            <li>
              <strong>Wall mounts:</strong> The most secure option in wind. Properly drilled and anchored wall brackets
              can withstand substantial loading. Ensure the correct fixings are used for your wall type (brick, aerated
              block, and timber stud all require different anchors).
            </li>
            <li>
              <strong>Floor stands:</strong> Most vulnerable to wind if not weighted or secured. Always use the ballast
              tray or straps provided. Some installers use sandbags or filled water containers as ballast. Do not leave
              a freestanding system unweighted on an upper-floor balcony.
            </li>
          </ul>

          <h2>Weight Considerations</h2>
          <p>
            A dual-panel 800W system will weigh approximately 45–50kg including mounting hardware. Most balcony slabs
            are designed to carry significant loads (the standard structural loading for a domestic balcony in the UK is
            2.5kN/m² — roughly 250kg per square metre), so panel weight alone is not an issue. The concern is more
            about load distribution if you're stacking multiple systems or combining heavy batteries with panels.
          </p>
          <p>
            For Juliet balconies, the balustrade carries a lateral load rather than a vertical one — ensure the clamps
            you use are designed for that application and that the balustrade frame is in good condition.
          </p>

          <h2>Mounting Type Comparison</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Mounting Type</th>
                  <th>Drilling?</th>
                  <th>Portable?</th>
                  <th>Renter-Friendly?</th>
                  <th>Tilt Achievable</th>
                  <th>Wind Security</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Railing clamp</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>60–90°</td>
                  <td>Good (railing-dependent)</td>
                </tr>
                <tr>
                  <td>Wall bracket</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>With permission</td>
                  <td>20–60°</td>
                  <td>Excellent</td>
                </tr>
                <tr>
                  <td>Floor stand</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>20–60°</td>
                  <td>Fair (needs weighting)</td>
                </tr>
                <tr>
                  <td>Juliet bracket</td>
                  <td>No (frame-grip)</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>90° only</td>
                  <td>Good (frame-dependent)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </>
  );
}
