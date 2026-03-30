"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

const letterTemplate = `[Your name]
[Your address]
[Date]

Dear [Landlord name / Managing Agent name],

Re: Request for permission to install a portable balcony solar system
Property: [Full property address]

I am writing to request your permission to install a portable plug-in solar panel system on the balcony of the above property, where I am currently a tenant.

About the system

I intend to install a plug-in balcony solar kit ([insert system name, e.g., EcoFlow STREAM 600W / Anker SOLIX Solarbank 2 / Jackery Navi 2000]). This consists of one or two solar panels and a micro-inverter that connects to a standard wall socket inside the property.

I wish to emphasise the following key points:

• The system is entirely portable and not fixed to the building. It will be mounted using a freestanding floor stand / clip-on railing bracket (delete as appropriate) that attaches to the balcony railing without drilling, adhesives, or any structural modification.

• There will be no drilling, coring, or permanent fixings made to any part of the building, including the balcony floor, walls, or railings.

• The system can be removed completely in a matter of minutes, leaving no trace on the property. It is personal property and will be taken with me at the end of the tenancy.

• The system is designed to generate electricity from sunlight, reducing energy costs. It has no moving parts, produces no noise, and generates no waste products.

Appearance and safety

The panels will be positioned on the balcony [describe proposed location, e.g., on the south-facing railing / on the balcony floor]. The system is [describe dimensions of panels, e.g., approximately 1.7m × 1.0m] and will sit within the boundary of the balcony.

The micro-inverter used ([inverter model name]) complies with Engineering Recommendation G98 (the UK technical standard for small generators connected to the electricity network). I will notify the local Distribution Network Operator of the installation in accordance with G98, as required.

I will maintain appropriate home contents insurance that covers the system, and I will ensure that the system is removed safely and completely at the end of my tenancy.

Relevant legislation

I note that under the Renters' Rights Act 2025, landlords are not permitted to unreasonably withhold consent for reasonable improvements to a rental property. A portable, non-structural solar system of this kind — which causes no damage to the property, generates no noise or nuisance, and is fully reversible — is, in my view, a reasonable improvement request.

I am happy to provide further technical information, product specifications, or the inverter's G98 compliance documentation if this would assist your consideration.

I would be grateful for your written confirmation of permission at your earliest convenience. If you have any concerns or questions, please do not hesitate to contact me at [your phone number / email].

Yours sincerely,

[Your name]
[Your phone number]
[Your email address]`;

export default function LandlordLetterClient() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letterTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = letterTemplate;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="For Renters"
        title="Landlord Permission Letter Template for Balcony Solar"
        subtitle="A complete, professionally drafted letter you can adapt and send to your landlord. Covers all the key points that make approval more likely — including the Renters' Rights Act 2025."
        badge="Updated March 2026"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "For Renters", href: "/for-renters" },
            { label: "Landlord Letter Template" },
          ]}
        />

        <InfoBox variant="tip" title="Before you send">
          Personalise the letter before sending: add your name, address, the date, your landlord or agent&apos;s name,
          and the specific product you&apos;re planning to install. The more specific and professional your request, the
          more likely you are to get a quick yes. If possible, attach a product brochure or data sheet.
        </InfoBox>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Use This Template</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                step: "1",
                title: "Copy the letter",
                desc: "Use the copy button below to copy the full template to your clipboard, then paste it into your email client or a word processor.",
              },
              {
                step: "2",
                title: "Fill in the blanks",
                desc: "Replace all the [bracketed sections] with your specific details: your name, address, landlord name, product name, and mounting method.",
              },
              {
                step: "3",
                title: "Send and follow up",
                desc: "Send by email so you have a written record. If you don't hear back within 7–10 days, follow up politely. Most landlords respond quickly once they understand the system is fully portable.",
              },
            ].map((item) => (
              <div key={item.step} className="border border-slate-200 rounded-lg p-4">
                <div className="w-7 h-7 bg-solar-500 text-white rounded-full flex items-center justify-center font-bold text-sm mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-slate-900">The Letter Template</h2>
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                copied ? "bg-green-500 text-white" : "bg-solar-500 hover:bg-solar-600 text-white"
              }`}
            >
              {copied ? "Copied!" : "Copy template"}
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 font-mono text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
            {letterTemplate}
          </div>

          <div className="flex justify-end mt-3">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                copied ? "bg-green-500 text-white" : "bg-solar-500 hover:bg-solar-600 text-white"
              }`}
            >
              {copied ? "Copied!" : "Copy template"}
            </button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why the Letter Is Written This Way</h2>
          <div className="space-y-4">
            {[
              {
                title: "Emphasising portability upfront",
                body: "Most landlord refusals stem from concern about permanent alterations or damage to the property. By establishing immediately that the system involves no structural changes and can be removed in minutes, you remove the primary objection before it can be raised.",
              },
              {
                title: "Referencing G98 compliance",
                body: "Mentioning G98 notification demonstrates that you understand the regulatory requirements and are acting responsibly. It reassures landlords who might be concerned about the legal status of balcony solar that you're approaching it correctly.",
              },
              {
                title: "The Renters' Rights Act 2025 reference",
                body: "Including a brief, non-confrontational reference to the Act signals that you know your rights — without being aggressive about it. Most landlords will read this as a prompt that unreasonable refusal has consequences, without feeling threatened.",
              },
              {
                title: "Offering further documentation",
                body: "Offering to provide product specs and G98 compliance docs signals that you've done your homework and are being transparent. It also gives the landlord an easy way to engage further if they want to, rather than defaulting to refusal.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-solar-400 pl-4">
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What If Your Landlord Says No?</h2>
          <div className="space-y-3">
            {[
              {
                title: "Ask for the reason in writing",
                body: "A landlord who refuses should be able to explain why. Ask them to put their objection in writing. Vague refusals ('I don't want it') are more difficult to sustain if challenged. A written objection also gives you something concrete to address.",
              },
              {
                title: "Propose a no-drill, freestanding alternative",
                body: "If you haven't already specified a freestanding floor mount, propose this specifically. A system mounted on a freestanding stand — sitting on the balcony floor with no fixings at all — is even harder to refuse on reasonable grounds than a railing-clip mount.",
              },
              {
                title: "Seek advice from Citizens Advice",
                body: "Citizens Advice can advise on whether a refusal is reasonable under the Renters' Rights Act 2025 and what your options are. Their service is free and available online, by phone, and in local offices.",
              },
              {
                title: "Formal dispute resolution",
                body: "As a last resort, disputes about landlord consent under the Renters' Rights Act 2025 can be referred to the new Private Rented Sector Ombudsman. This is a free service, and your landlord is required by law to be registered with the scheme.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Further reading:{" "}
            <Link href="/for-renters/renters-rights-act-solar" className="text-solar-600 underline">
              Renters&apos; Rights Act 2025 and balcony solar
            </Link>
            {" · "}
            <Link href="/uk-regulations/dno-g98-explained" className="text-solar-600 underline">
              G98 DNO notification guide
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
