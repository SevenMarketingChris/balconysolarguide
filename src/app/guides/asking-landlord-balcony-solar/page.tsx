import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "How to Ask Your Landlord About Balcony Solar",
  description:
    "Practical advice for renters seeking landlord permission for balcony solar. Covers framing the conversation, what to put in writing, a sample request letter, and what to do if refused.",
};

export default function AskingLandlordBalconySolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="How to Ask Your Landlord About Balcony Solar"
        subtitle="Practical advice on approaching your landlord for permission — how to frame it, what to put in writing, a sample letter, and your options if they say no."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Asking Your Landlord" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>Do You Actually Need Permission?</h2>
          <p>
            Whether you need your landlord's permission depends primarily on two things: what your lease says, and what
            type of system you plan to install.
          </p>
          <p>
            Most tenancy agreements include a clause requiring landlord consent for "alterations" to the property. The
            key question is whether your planned balcony solar installation counts as an alteration. If you're using a
            railing-clamp or floor-stand system — both of which attach to the building or rest on its floor without any
            permanent fixing — the argument that this constitutes an alteration is weak. You're adding a removable
            object to the balcony, in the same way you might add outdoor furniture or a parasol.
          </p>
          <p>
            If you're planning a wall-mount system that requires drilling, you almost certainly need permission. Drilling
            into the structure of the building is unambiguously an alteration in any lease, regardless of how small the
            holes are.
          </p>
          <p>
            Even for no-drill systems, it's worth asking your landlord — not because you're legally obliged to, but
            because transparency maintains a good tenancy relationship and avoids any future dispute about what the
            system is and whether it was permitted. A quick message or email is low effort and removes any ambiguity.
          </p>

          <h2>Understanding the Renters' Rights Act 2025</h2>
          <p>
            The Renters' Rights Act 2025, which received Royal Assent and came into force in phases throughout 2025,
            significantly strengthened the position of private renters in England. Among its provisions is a
            strengthened "right to make improvements" framework, under which landlords cannot unreasonably withhold
            consent for reasonable alterations.
          </p>
          <p>
            While the Act doesn't create an absolute right to install balcony solar, it does mean that a blanket
            refusal without specific reason — particularly for a portable, no-drill system — is increasingly difficult
            for landlords to sustain if challenged. If your landlord refuses consent, they should be able to provide
            a specific reason. "I just don't want it" is not a sufficient reason under the Act's framework.
          </p>
          <p>
            In practice, most landlords who understand what balcony solar actually is — a removable plug-in system that
            doesn't affect the structure — will not object. The ones who do object often do so based on a
            misunderstanding of what's involved. A well-framed request letter can address those misunderstandings before
            they become refusals.
          </p>

          <h2>How to Frame the Conversation</h2>
          <p>
            Approach the request positively. You're not asking permission to do something disruptive — you're telling
            your landlord about a small, reversible addition to the property that generates clean electricity and
            reduces your bills. Frame it that way.
          </p>
          <p>Key points to communicate:</p>
          <ul>
            <li>
              <strong>It's completely reversible.</strong> A railing-clamp or floor-stand system can be removed in
              under an hour and leaves no trace at all.
            </li>
            <li>
              <strong>No electrical work is done.</strong> The system plugs into an existing socket. No wiring is
              modified, no consumer unit work is required, and no electrician is needed.
            </li>
            <li>
              <strong>It's CE-marked and safe.</strong> The equipment meets European safety standards, including
              anti-islanding protection in the inverter that prevents any back-feed risk.
            </li>
            <li>
              <strong>It doesn't affect building insurance.</strong> The system is your personal property, not a
              fixture of the building. It's covered under your contents insurance, not the building's policy.
            </li>
            <li>
              <strong>It's widely used across Europe.</strong> Germany has over 800,000 of these systems in use with
              an excellent safety record. The UK government announced in March 2026 that it is formally legalising
              the technology.
            </li>
            <li>
              <strong>It may add value to the property.</strong> A property with established solar infrastructure —
              even a portable balcony system — is increasingly attractive to prospective tenants.
            </li>
          </ul>

          <InfoBox variant="tip" title="Emphasise portability above everything else">
            Landlords' primary concern is usually property damage or alteration. The most powerful thing you can say
            is: "This system requires no drilling, no electrical work, and can be completely removed when I leave with
            zero impact on the property." If this is true of your chosen system, lead with it.
          </InfoBox>

          <h2>What to Put in Writing</h2>
          <p>
            Even if you have a good verbal relationship with your landlord, it's worth making your request in writing
            — and getting any approval in writing too. This protects both parties and removes ambiguity.
          </p>
          <p>An email or letter should include:</p>
          <ol>
            <li>A brief description of what you want to install and where</li>
            <li>Confirmation of the mounting method and that it requires no drilling (if applicable)</li>
            <li>Confirmation that the system plugs into an existing socket</li>
            <li>A statement that you will remove the system when you leave</li>
            <li>A request for written confirmation of consent</li>
          </ol>

          <h2>Sample Letter to Your Landlord</h2>
          <p>
            The following is a template you can adapt for your own circumstances. Replace the text in square brackets
            with your specific details.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6 font-mono text-sm text-slate-700 space-y-4">
            <p>Dear [Landlord's name],</p>
            <p>
              I'm writing to ask for your permission to install a small balcony solar panel system at [property
              address].
            </p>
            <p>
              The system I have in mind is a plug-in solar kit — two solar panels mounted on the balcony railing
              using clamp brackets, connected to a micro-inverter that plugs into the existing balcony socket [or
              an indoor socket via a cable through the door]. No drilling into the building structure is required,
              and the entire system can be fully removed within an hour if I move out, leaving no mark or damage
              to the property.
            </p>
            <p>
              The system generates a small amount of electricity from sunlight and reduces my electricity bills by
              offsetting some of what I would otherwise draw from the grid. It does not modify any electrical
              installation in the property — it simply plugs into an existing socket in the same way as any other
              appliance. The equipment is CE-marked and includes the safety protections required for grid-connected
              generation in the UK.
            </p>
            <p>
              I believe this type of system would not affect the building's insurance policy (it is my personal
              property and would be covered under my own contents insurance), and it causes no structural or
              cosmetic change to the property.
            </p>
            <p>
              The UK government announced in March 2026 that it is working to formally legalise plug-in solar
              systems of this type, and hundreds of thousands of similar systems are already in use across Europe
              without incident.
            </p>
            <p>
              Would you be happy to give your written consent for this? I'm happy to provide more information about
              the specific product I'm considering, or to discuss any concerns you may have.
            </p>
            <p>
              Thank you for considering this request.
            </p>
            <p>Kind regards,<br />[Your name]</p>
          </div>
          <p>
            For a longer, more detailed template including responses to common landlord objections, see our{" "}
            <Link href="/for-renters/landlord-letter-template" className="text-solar-600 hover:text-solar-700 font-medium">
              full landlord letter template
            </Link>
            .
          </p>

          <h2>If Your Landlord Says No</h2>
          <p>
            If your landlord declines, ask them to explain their specific concern. Common objections and responses:
          </p>
          <ul>
            <li>
              <strong>"I'm worried about structural damage."</strong> Clarify that no drilling is involved and the
              system is clamped to the railing or rests on the floor. Offer to send a product link so they can see
              what's involved.
            </li>
            <li>
              <strong>"It might affect my insurance."</strong> Explain that the system is your personal property,
              not a building fixture, and is covered by your contents insurance — not the building's policy.
            </li>
            <li>
              <strong>"I'm not sure if it's legal."</strong> Share the government's March 2026 announcement and
              explain the G98 notification process that you intend to complete.
            </li>
            <li>
              <strong>General reluctance without reason.</strong> Under the Renters' Rights Act 2025, landlords
              cannot unreasonably withhold consent for reasonable improvements. If you believe the refusal is
              unreasonable, you can seek advice from Shelter or Citizens Advice.
            </li>
          </ul>

          <InfoBox variant="info" title="You may not need permission at all">
            If you choose a railing-clamp or floor-stand system, consider carefully whether your lease actually
            requires permission for a portable, removable object placed on the balcony. Many leases only restrict
            "structural alterations" — and a removable solar panel arguably isn't one. If in doubt, ask — but don't
            assume the answer is automatically no.
          </InfoBox>

          <h2>Systems That Don't Require Any Landlord Permission</h2>
          <p>
            If your landlord refuses or you prefer to avoid the conversation entirely, there are genuinely usable
            configurations that don't affect the building structure in any way:
          </p>
          <ul>
            <li>
              <strong>Floor-stand systems:</strong> Rest on the balcony floor, fully freestanding, can be moved
              indoors during bad weather. No fixing to any surface.
            </li>
            <li>
              <strong>Railing-clamp systems:</strong> Attach to the railing with pressure clamps — no different in
              principle from hanging a plant basket on a railing hook. Removable instantly.
            </li>
            <li>
              <strong>Window-ledge mounting:</strong> Some single-panel systems can be positioned on a window ledge
              and secured with a safety strap. Output is lower, but the system is genuinely zero-modification.
            </li>
          </ul>
          <p>
            See our <Link href="/guides/how-to-mount-balcony-solar-panels" className="text-solar-600 hover:text-solar-700 font-medium">mounting guide</Link> for
            a full breakdown of all mounting options and their implications for renters.
          </p>
        </article>
      </div>
    </>
  );
}
