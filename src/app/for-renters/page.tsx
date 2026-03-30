import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Balcony Solar for Renters UK — Your Complete Guide",
  description: "4.4 million UK private renters can benefit from portable balcony solar. No structural changes, moves with you, and saves £80–£200 per year on electricity.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

const quickWins = [
  {
    title: "Buy a portable system",
    description:
      "All the main balcony solar systems — EcoFlow STREAM, Anker SOLIX, Plug-in Solar 600W Kit — are portable. They're not fixed to the building. When you move, you take the system with you and reinstall it at your next property.",
  },
  {
    title: "Use a floor mount or railing clip",
    description:
      "Freestanding floor mounts require zero fixing to the building fabric. Railing clip mounts attach to your balcony railing without drilling. Either approach means no permanent change to the property — and therefore no deposit deduction risk.",
  },
  {
    title: "No drilling required",
    description:
      "Modern balcony solar mounting systems are specifically designed to avoid drilling. This is largely because the market was initially targeted at German and French renters. The UK market inherits this renter-friendly design.",
  },
  {
    title: "Take it with you when you move",
    description:
      "Unlike roof solar panels (which stay with the property), a balcony solar system is personal property. It moves with you. The investment follows you through multiple tenancies — potentially over many years.",
  },
];

const hubCards = [
  {
    href: "/for-renters/landlord-letter-template",
    title: "Landlord Permission Letter Template",
    description:
      "A complete, professionally drafted letter template you can adapt and send to your landlord requesting permission to install balcony solar. Includes references to the Renters' Rights Act 2025.",
    cta: "Get the template →",
    icon: "✉",
  },
  {
    href: "/for-renters/renters-rights-act-solar",
    title: "Renters' Rights Act 2025 and Solar",
    description:
      "The Renters' Rights Act 2025 changed the balance of power in the private rental sector. What does it mean for your ability to install balcony solar? We explain the relevant provisions.",
    cta: "Read the guide →",
    icon: "⚖",
  },
  {
    href: "/for-renters/juliet-balcony-solar",
    title: "Juliet Balcony Solar Guide",
    description:
      "Don't have a full balcony floor? Juliet balconies (narrow railings at a window) can still host solar panels — but it takes the right system and approach. Here's what works and what doesn't.",
    cta: "Read the guide →",
    icon: "🏢",
  },
  {
    href: "/guides/balcony-solar-for-renters",
    title: "Complete Renter's Guide to Balcony Solar",
    description:
      "The comprehensive guide covering everything a UK renter needs to know: permission, installation, savings, what happens at the end of a tenancy, and which systems are best for rental situations.",
    cta: "Read the full guide →",
    icon: "📖",
  },
];

export default function ForRentersHubPage() {
  return (
    <div>
      <PageHero
        eyebrow="For Renters"
        title="Balcony Solar for Renters UK: Your Complete Hub"
        subtitle="4.4 million private renters and 2.8 million leaseholders in the UK can benefit from balcony solar. It's portable, removable, requires no structural changes — and it moves with you when your tenancy ends."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "For Renters" }]} />

        {/* Why renters are ideal */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Balcony Solar Is Ideal for Renters</h2>
          <p className="text-slate-600 mb-4">
            Traditional rooftop solar panels are the preserve of homeowners — they're fixed to the building, cost
            thousands of pounds to install professionally, and stay with the property when you sell or move. Renters
            have historically been locked out entirely.
          </p>
          <p className="text-slate-600 mb-4">
            Balcony solar changes this. The systems designed for German Balkonkraftwerk use were built from the ground
            up to be portable, renter-friendly, and removable. The UK market has inherited this design philosophy,
            and it makes balcony solar uniquely accessible for renters in a way that conventional solar never was.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-solar-50 border border-solar-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-solar-700 mb-1">4.4m</p>
              <p className="text-sm text-slate-600">private renters in England</p>
            </div>
            <div className="bg-solar-50 border border-solar-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-solar-700 mb-1">2.8m</p>
              <p className="text-sm text-slate-600">leasehold flat owners</p>
            </div>
            <div className="bg-solar-50 border border-solar-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-solar-700 mb-1">£80–£200</p>
              <p className="text-sm text-slate-600">typical annual electricity saving</p>
            </div>
          </div>
        </section>

        <p className="text-slate-600 mb-6">
          If you live in a housing association or managed leasehold property, the process can differ slightly — see our{" "}
          <Link href="/guides/balcony-solar-housing-association" className="text-solar-600 underline font-semibold">
            housing association solar guide
          </Link>{" "}
          for specific advice.
        </p>

        <InfoBox variant="success" title="You don't need to own your property to go solar">
          Portable balcony solar systems are classified as personal property — like your furniture or white goods.
          They don't become fixtures of the building. This means no deposit deductions, and the system comes with you
          when you move. Your landlord's permission is a courtesy and legal requirement, not a barrier to actually
          benefiting from solar.
        </InfoBox>

        {/* Quick wins */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Wins for Renters</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {quickWins.map((item) => (
              <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hub cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Renter Guides</h2>
          <div className="grid gap-4">
            {hubCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="flex gap-4 border border-slate-200 rounded-xl p-5 hover:border-solar-400 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{card.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 group-hover:text-solar-700 mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">{card.description}</p>
                  <span className="text-solar-600 text-sm font-semibold">{card.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* The practical process */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Practical Process for Renters</h2>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Check your balcony",
                desc: "Do you have a south, south-east, or south-west facing balcony? Even an east or west facing balcony will generate useful electricity. A Juliet balcony (narrow railing at a window) can work with a smaller system.",
              },
              {
                step: "2",
                title: "Choose a portable, no-drill system",
                desc: "For rental situations, prioritise systems with freestanding floor mounts or clip-on railing mounts. Avoid anything requiring wall or floor drilling. The EcoFlow STREAM, Anker SOLIX, and Plug-in Solar 600W Kit all have portable mounting options.",
              },
              {
                step: "3",
                title: "Write to your landlord",
                desc: "Use our landlord permission letter template. Frame the request around the portable, non-structural nature of the system and reference the Renters' Rights Act 2025. Most landlords will say yes when they understand there's no structural change involved.",
              },
              {
                step: "4",
                title: "Notify your DNO",
                desc: "Regardless of who owns the property, you're responsible for notifying your Distribution Network Operator under the G98 standard before connecting. This takes 15 minutes and is free.",
              },
              {
                step: "5",
                title: "Install and start saving",
                desc: "With landlord permission obtained and DNO notified, you can install. Most portable systems can be set up in under 2 hours. Connect to the app, start monitoring your generation, and watch your electricity bills fall.",
              },
              {
                step: "6",
                title: "Take it with you when you move",
                desc: "When your tenancy ends, unclip or fold away your system and take it with you. The next property with a suitable balcony gets the benefit of your investment.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-solar-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1 pb-3 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-0.5">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common concerns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Renter Concerns — Answered</h2>
          <div className="space-y-3">
            {[
              {
                q: "Will it affect my deposit?",
                a: "Not if you use a portable system with no structural fixings. Your deposit can only be withheld for damage or alterations — a portable solar panel that leaves no marks is neither. Remove it when you leave, just as you'd take a portable appliance.",
              },
              {
                q: "What if my landlord says no?",
                a: "Under the Renters' Rights Act 2025, landlords cannot unreasonably withhold consent for reasonable improvements. If refused, ask for the reason in writing, propose a no-drill alternative if you haven't already, and seek free advice from Citizens Advice or Shelter. See our guide on the Renters' Rights Act for more. If you live in a housing association property, see our housing association solar guide for specific advice.",
              },
              {
                q: "Do I need to tell the landlord at all?",
                a: "For a freestanding floor mount with no structural changes, there's an argument that you don't — it's personal property like a fridge or a TV. But we recommend getting written permission anyway. It protects you if there's a later dispute, and most landlords will say yes quickly once they understand the system is portable.",
              },
              {
                q: "What if I move to a property with no balcony?",
                a: "The system will wait. Many renters store their balcony solar kit between tenancies or use it at their next property. You might also install it at a parent's or friend's property while in-between — generating savings for someone you care about in the meantime.",
              },
              {
                q: "Can I claim the Smart Export Guarantee?",
                a: "The Smart Export Guarantee (SEG) pays you for electricity exported to the grid. To claim it, you need MCS certification on your installation, which is not currently available for plug-in solar systems. In practice, balcony solar is best designed to maximise self-consumption (use what you generate) rather than export.",
              },
            ].map((item, i) => (
              <details key={i} className="border border-slate-200 rounded-lg">
                <summary className="px-4 py-3 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 rounded-lg">
                  {item.q}
                </summary>
                <div className="px-4 pb-4 pt-1">
                  <p className="text-sm text-slate-600">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <InfoBox variant="tip" title="Recommended system for renters">
          For most renting situations, the{" "}
          <Link href="/reviews/ecoflow-stream" className="underline font-semibold">
            EcoFlow STREAM
          </Link>{" "}
          is the best choice — it's the easiest to set up, has the best app for monitoring savings, and its mounting
          accessories are specifically designed for rental situations (no drilling required). On a tighter budget, the{" "}
          <Link href="/reviews/plug-in-solar-kit" className="underline font-semibold">
            Plug-in Solar 600W Kit
          </Link>{" "}
          offers a no-frills alternative at around £399, with everything you need included.
        </InfoBox>
      </div>
    </div>
  );
}
