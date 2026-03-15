import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "Balcony Solar for Renters: A Complete UK Guide",
  description:
    "Renting and want balcony solar? This guide covers the Renters' Rights Act 2025, landlord permissions, portable systems, Juliet balconies, and DNO notification for tenants.",
};

export default function BalconySolarForRentersPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Balcony Solar for Renters: A Complete UK Guide"
        subtitle="How renters across the UK can benefit from plug-in solar — covering landlord permissions, portable systems, legal rights, and practical tips for flat-dwellers."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Balcony Solar for Renters" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>Why Renters Are the Biggest Audience for Balcony Solar</h2>
          <p>
            Around 19% of households in England rent privately — approximately 4.6 million households. The vast
            majority of those renters have no access to rooftop solar, not because their home couldn't support it, but
            because they don't own it. Landlords have little financial incentive to fund rooftop installations that
            primarily benefit their tenants, and tenants can't install permanent electrical systems without consent.
          </p>
          <p>
            Balcony solar exists precisely to break this deadlock. A plug-in system requires no permanent electrical
            work, can be removed completely when you leave, and in most configurations requires no drilling at all. It's
            the one form of renewable energy generation that is realistically available to renters without a lengthy and
            often fruitless negotiation with a landlord.
          </p>

          <h2>The Legal Picture for Renters in 2026</h2>
          <p>
            The Renters' Rights Act 2025 changed the legal landscape for tenants in England in several important ways.
            While it primarily addresses security of tenure and rent increase mechanisms, it also strengthened tenants'
            rights around reasonable home improvements. Landlords can no longer unreasonably withhold consent for
            alterations that would ordinarily be considered minor and reversible — and a portable, removable balcony
            solar system increasingly falls into this category.
          </p>
          <p>
            That said, the Act doesn't give tenants carte blanche. You still need to notify your landlord, and in
            practice the most sensible approach is to seek written consent before installing anything — not because the
            system is inherently problematic, but because maintaining a good landlord relationship is almost always worth
            more than the principle of the thing. If your landlord refuses, the no-drill options below mean you can
            often proceed without affecting the structure of the property at all.
          </p>

          <InfoBox variant="warning" title="Check your lease agreement first">
            Before doing anything, read your tenancy agreement. Some leases contain broad clauses prohibiting any
            alterations to the property, which could technically cover even a portable solar panel on the balcony. If
            your lease has such a clause, you should seek written permission regardless of whether any drilling is
            involved.
          </InfoBox>

          <h2>What Systems Work Best for Renters</h2>
          <p>
            For renters, the most important criteria when choosing a balcony solar system are portability, minimal
            footprint, and no-drill installation. These requirements point clearly towards certain system types and away
            from others.
          </p>
          <h3>Railing-Clamp Systems</h3>
          <p>
            The most renter-friendly option in most cases. Railing-clamp mounts grip your balcony railing — typically a
            tubular steel or concrete-capped railing — using adjustable clamps. No drilling, no fixings into walls or
            floors, and they can be removed and refitted in minutes. The panel typically hangs at a near-vertical angle
            from the railing, which reduces annual output slightly compared to an optimal tilt, but is more than
            acceptable for the convenience gained.
          </p>
          <h3>Floor-Stand Systems</h3>
          <p>
            If your balcony has a solid floor and enough space, a freestanding floor mount — essentially an adjustable
            tripod or A-frame — is another excellent no-drill option. These allow you to set the tilt angle properly (30–45°),
            improving output, and they leave zero trace when removed. The downside is that they take up more floor space
            and may need to be weighted or tied down in windy conditions.
          </p>
          <h3>Avoid Wall-Bracket Systems</h3>
          <p>
            Wall-bracket mounting requires drilling into the masonry or render of the building. For renters, this is
            generally not advisable without explicit written landlord permission — both because of the lease
            implications and because any damage to brickwork or render can result in deductions from your deposit. If
            you want a fixed-angle mount and your landlord has given permission, a wall bracket is a sound option — but
            don't go there without that agreement in writing.
          </p>

          <InfoBox variant="tip" title="The case for no-drill systems">
            Many railing-clamp and floor-stand systems cost no more than wall-bracket equivalents and often perform just
            as well. There is rarely a compelling reason for renters to choose a mounting method that requires drilling
            when portable alternatives exist at the same price point.
          </InfoBox>

          <h2>Juliet Balconies</h2>
          <p>
            A large proportion of UK flats — particularly those built since the 1990s — have Juliet balconies: the
            full-height glass or metal railing panels set into the exterior wall, with no usable floor space beyond the
            doorway. These are common in purpose-built apartment blocks and converted commercial buildings.
          </p>
          <p>
            Juliet balconies can still support balcony solar, but your options are more limited. Standard railing-clamp
            mounts designed for horizontal railings don't always work on vertical glass balustrades. However, several
            manufacturers now produce Juliet-specific mounting systems that clamp to the frame of the balustrade rather
            than the glass. These typically support a single panel oriented vertically, which reduces output but is
            manageable. Alternatively, if you have a flat roof above a ground-floor flat, a discreet floor-stand
            installation may be possible — worth discussing with your landlord.
          </p>

          <h2>East and West Facing Balconies</h2>
          <p>
            The majority of balconies in UK apartment blocks face east or west rather than south — a consequence of how
            developers lay out buildings to maximise natural light to living rooms throughout the day. This isn't ideal
            for solar, but it's far from a dealbreaker.
          </p>
          <p>
            An east-facing balcony receives morning sun; a west-facing balcony gets afternoon sun. In terms of annual
            output, east and west orientations deliver roughly 65–70% of what a south-facing installation would generate.
            Crucially, the time of day your panels generate matters too. If you work from home and make heavy use of
            electricity in the mornings, an east-facing system is well-matched to your consumption. If you're a morning
            commuter who returns in the evening, a west-facing system delivers generation at a time when you're actually
            home and using electricity — which is better for self-consumption than a south-facing system generating at
            noon when you're in the office.
          </p>

          <h2>What Happens When You Move?</h2>
          <p>
            This is one of the questions renters most frequently ask, and the answer is reassuring: balcony solar
            systems are designed to be moved. A railing-clamp or floor-stand system can be fully dismantled and
            repacked in under an hour. There's nothing to fill, no damage to repair, and nothing left behind.
          </p>
          <p>
            The only practical consideration when moving is whether your new property will be suitable. If you're moving
            from a flat with a south-facing balcony to one with a north-facing balcony, your system's performance will
            change. But the hardware itself is entirely reusable, and most panels and inverters carry multi-year
            warranties that transfer with the equipment regardless of where it's installed.
          </p>

          <h2>DNO Notification as a Renter</h2>
          <p>
            Connecting any generation to the grid — including a plug-in balcony solar system — technically requires
            notifying your Distribution Network Operator (DNO) under Engineering Recommendation G98. This applies to
            renters in exactly the same way as homeowners: you notify as the person connecting the generation, not
            necessarily as the property owner.
          </p>
          <p>
            In practice, the G98 notification is a simple online form submitted to your regional DNO. You don't need
            your landlord's involvement, and the DNO doesn't contact your landlord. The notification simply informs the
            network operator that a small generation unit is connected at your address. Most DNOs process these
            automatically for systems under 3.68kW — which covers all balcony solar systems — without any follow-up.
          </p>
          <p>
            See our <a href="/guides/g98-dno-notification-balcony-solar">full G98 guide</a> for the step-by-step
            process and a table of DNO contact details by region.
          </p>

          <h2>Getting Landlord Permission</h2>
          <p>
            If you need your landlord's permission — whether because your lease requires it or because you want to use a
            wall-mount system — the approach matters. Landlords who are unfamiliar with balcony solar often have
            unfounded concerns about structural damage, insurance, or fire risk. A well-framed conversation or letter
            can address these before they become objections.
          </p>
          <p>
            The key points to make are:
          </p>
          <ul>
            <li>The system is fully removable and leaves no trace (for railing or floor-stand systems)</li>
            <li>It plugs into a standard socket — no electrical work is done to the property</li>
            <li>The equipment carries CE marking and meets relevant safety standards</li>
            <li>It doesn't affect building insurance (the system is your personal property, not the building)</li>
            <li>Similar systems are already in widespread use across Europe without incident</li>
          </ul>
          <p>
            For a full sample letter you can send to your landlord, visit our{" "}
            <a href="/for-renters/landlord-letter-template">landlord letter template</a>. For detailed advice on the
            conversation itself, see our <a href="/guides/asking-landlord-balcony-solar">asking your landlord guide</a>.
          </p>

          <InfoBox variant="success" title="The Renters' Rights Act strengthens your position">
            Under the Renters' Rights Act 2025, landlords cannot unreasonably withhold consent for reasonable
            alterations. A portable, no-drill solar system that generates clean electricity and improves the
            sustainability of the property is a strong candidate for what the Act considers "reasonable." If your
            landlord refuses without good reason, you may have grounds to challenge that refusal.
          </InfoBox>

          <h2>Tips for Getting the Most from Balcony Solar as a Renter</h2>
          <ul>
            <li>
              <strong>Use a smart plug and timer</strong> to run your washing machine or dishwasher during midday — this
              shifts your consumption to when your panels are generating, improving self-consumption significantly.
            </li>
            <li>
              <strong>Consider a battery</strong> if you're out during the day. Systems like the EcoFlow STREAM with an
              integrated battery store daytime generation for evening use, transforming the economics for anyone with a
              9-to-5 routine.
            </li>
            <li>
              <strong>Monitor your system</strong> via the app to understand when you're generating and align your
              habits accordingly.
            </li>
            <li>
              <strong>Keep your G98 notification confirmation</strong> in case your energy supplier or landlord ever
              queries the system.
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
