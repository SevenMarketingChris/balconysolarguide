import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "G98 DNO Notification for Balcony Solar: Complete UK Guide | Balcony Solar Guide",
  description: "Everything you need to know about G98 DNO notification before connecting balcony solar. Step-by-step process, timescales, and a full directory of every UK DNO with contact details.",
};
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

const dnos = [
  {
    name: "National Grid Electricity Distribution (NGED)",
    regions: "South West England, East Midlands, West Midlands, East of England",
    website: "https://www.nationalgrid.co.uk/electricity-distribution/home",
    g98Portal: "https://www.nationalgrid.co.uk/electricity-distribution/connections/home/g98-application",
    email: "connections@nationalgrid.co.uk",
    notes: "Online portal available. Covers the largest geographic area of any UK DNO.",
  },
  {
    name: "UK Power Networks (UKPN)",
    regions: "South East England, East of England, London",
    website: "https://www.ukpowernetworks.co.uk",
    g98Portal: "https://www.ukpowernetworks.co.uk/electricity/generators/small-generators/g98",
    email: "connections@ukpowernetworks.co.uk",
    notes: "Covers London and the South East — the most densely populated DNO area and likely the highest proportion of balcony solar installations.",
  },
  {
    name: "Northern Powergrid",
    regions: "North East England, Yorkshire",
    website: "https://www.northernpowergrid.com",
    g98Portal: "https://www.northernpowergrid.com/connections/small-generators/g98",
    email: "connections@northernpowergrid.com",
    notes: "Serves approximately 3.9 million customers across the North East and Yorkshire.",
  },
  {
    name: "Electricity North West (ENW)",
    regions: "North West England (Cumbria, Lancashire, Greater Manchester, Cheshire)",
    website: "https://www.enwl.co.uk",
    g98Portal: "https://www.enwl.co.uk/connections/small-generators/g98-notification",
    email: "connections@enwl.co.uk",
    notes: "Covers the entire North West of England. Online G98 notification form available.",
  },
  {
    name: "SP Energy Networks — SP Manweb",
    regions: "North Wales, Merseyside, Cheshire (part)",
    website: "https://www.spenergynetworks.co.uk",
    g98Portal: "https://www.spenergynetworks.co.uk/pages/g98_notification.aspx",
    email: "spenconnections@spenergynetworks.co.uk",
    notes: "SP Energy Networks operates two distribution areas: SP Manweb (Wales and Merseyside) and SPD (Scotland South).",
  },
  {
    name: "SP Energy Networks — SPD (ScottishPower Distribution)",
    regions: "Central and South Scotland",
    website: "https://www.spenergynetworks.co.uk",
    g98Portal: "https://www.spenergynetworks.co.uk/pages/g98_notification.aspx",
    email: "spenconnections@spenergynetworks.co.uk",
    notes: "Covers central and southern Scotland including the Central Belt, Ayrshire, and Dumfries and Galloway.",
  },
  {
    name: "Scottish and Southern Electricity Networks (SSEN) — SSE North",
    regions: "North of Scotland (Highlands, Islands, Grampian, Tayside, Fife)",
    website: "https://www.ssen.co.uk",
    g98Portal: "https://www.ssen.co.uk/connections/small-generators/g98",
    email: "connections.network@ssen.co.uk",
    notes: "Covers the most rural distribution area in the UK, including the Scottish islands. G98 process is the same as mainland networks.",
  },
  {
    name: "Scottish and Southern Electricity Networks (SSEN) — SSE South",
    regions: "South Central England (Oxfordshire, Berkshire, Hampshire, parts of Surrey)",
    website: "https://www.ssen.co.uk",
    g98Portal: "https://www.ssen.co.uk/connections/small-generators/g98",
    email: "connections.network@ssen.co.uk",
    notes: "Covers the south central England region — a separate distribution area to the Scottish SSEN network despite sharing a parent company.",
  },
  {
    name: "NIE Networks",
    regions: "Northern Ireland",
    website: "https://www.nienetworks.co.uk",
    g98Portal: "https://www.nienetworks.co.uk/connections/small-generator-connections/g98-g99",
    email: "connections@nienetworks.co.uk",
    notes: "Northern Ireland operates under a slightly different regulatory framework (NIAUR rather than Ofgem) but the G98 notification process is equivalent.",
  },
];

export default function DNOG98Page() {
  return (
    <div>
      <PageHero
        eyebrow="UK Regulations"
        title="G98 DNO Notification for Balcony Solar: Complete UK Guide"
        subtitle="Before connecting a balcony solar system to the grid, you should notify your Distribution Network Operator under the G98 standard. Here's exactly how to do it — and a directory of every UK DNO."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "UK Regulations", href: "/uk-regulations" },
            { label: "G98 DNO Notification" },
          ]}
        />

        <InfoBox variant="success" title="The key point upfront">
          G98 notification is just that — a notification, not an application. You are informing your DNO that you are
          connecting a small generator. They cannot refuse you. There is no fee. In most cases you'll receive an
          acknowledgement email within a few days and can proceed immediately.
        </InfoBox>

        {/* What is G98 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is G98?</h2>
          <p className="text-slate-600 mb-4">
            Engineering Recommendation G98 (the full title is "Requirements for the Connection of Fully Type Tested
            Micro-generators") is the technical standard published by the Energy Networks Association (ENA) that
            governs how small generators — including solar panels — connect to the low-voltage electricity distribution
            network.
          </p>
          <p className="text-slate-600 mb-4">
            G98 applies to generation units up to 3.68kW on a single-phase supply (which covers all domestic balcony
            solar systems currently on the market). Systems larger than 3.68kW fall under G99, which requires a formal
            application and engineering assessment rather than a simple notification.
          </p>
          <p className="text-slate-600">
            The G98 standard requires that the inverter used in your system is "type tested" — meaning it has been
            certified to comply with the G98 technical requirements. All major balcony solar inverters (Hoymiles,
            EcoFlow PowerStream, Anker Solarbank) are G98 type tested, so this condition is met automatically when
            you buy a reputable system.
          </p>
        </section>

        {/* The process */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The G98 Notification Process: Step by Step</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Find your DNO",
                content:
                  "Your DNO is the company that owns and operates the electricity cables in your area — not your electricity supplier. Use the Energy Networks Association postcode checker at energynetworks.org or check your electricity bill. The DNO is often listed on bill documents as 'network operator' or 'distribution company.'",
              },
              {
                step: "2",
                title: "Download or access the G98 notification form",
                content:
                  "Most DNOs provide an online portal or a downloadable PDF form. The form asks for: your name and address, the inverter make and model, the installed capacity (in kW), and the approximate installation date. Some DNOs also ask for the meter serial number.",
              },
              {
                step: "3",
                title: "Complete the form",
                content:
                  "Fill in the details. For the inverter, use the product name exactly as it appears on the device or manual (e.g., 'Hoymiles HM-600', 'EcoFlow PowerStream 800W', 'Anker Solarbank 2 Pro'). For capacity, use the inverter's maximum AC output — not the panel wattage. So a 600W panel system connected to an 800W micro-inverter: the inverter output is 800W, but the actual expected output cap is 600W. Use the lower figure to be conservative.",
              },
              {
                step: "4",
                title: "Submit the form",
                content:
                  "Submit via the online portal if available, or send the completed PDF by email to your DNO's connections team. Keep a copy for your records.",
              },
              {
                step: "5",
                title: "Receive acknowledgement",
                content:
                  "Most DNOs will send an acknowledgement email or letter within 1–28 days. Some respond within hours. You do not need to wait for the acknowledgement before installing — you can proceed immediately after submitting the notification. However, it's good practice to have the acknowledgement before commissioning the system if you can wait.",
              },
              {
                step: "6",
                title: "Keep the documentation",
                content:
                  "Keep your notification submission and the DNO's acknowledgement. If you sell your property, this documentation is useful evidence that the installation was properly notified. As the regulatory framework develops, having clean documentation will become increasingly valuable.",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-solar-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1 pb-4 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoBox variant="tip" title="What to put in the form">
          When completing the G98 notification form, use the inverter's rated output for the 'installed capacity'
          field. For an EcoFlow STREAM (800W inverter): 0.8kW. For a Hoymiles HM-600: 0.6kW. For an Anker
          Solarbank 2 Pro: 0.8kW. Include the inverter make and model exactly as labelled.
        </InfoBox>

        {/* DNO directory */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">UK DNO Directory: G98 Contacts</h2>
          <p className="text-slate-600 mb-6">
            Find your DNO by postcode at{" "}
            <a
              href="https://www.energynetworks.org/operating-the-networks/whos-my-network-operator"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-solar-600 underline"
            >
              energynetworks.org
            </a>
            , or identify it from your electricity bill.
          </p>
          <div className="space-y-4">
            {dnos.map((dno) => (
              <div key={dno.name} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-1">{dno.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{dno.regions}</p>
                <div className="grid sm:grid-cols-2 gap-2 mb-3">
                  <a
                    href={dno.g98Portal}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-solar-600 hover:text-solar-700"
                  >
                    G98 notification portal →
                  </a>
                  <a
                    href={`mailto:${dno.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-700"
                  >
                    {dno.email}
                  </a>
                </div>
                {dno.notes && <p className="text-xs text-slate-500 italic">{dno.notes}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* After notification */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">After You Submit Your G98 Notification</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Timescale</h3>
              <p className="text-sm text-slate-600">
                G98 is a notification, not an application. Most DNOs aim to acknowledge within 20 working days, though
                many acknowledge much faster (often within 1–5 days). You don't need to wait for acknowledgement
                before installing your system.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">What if I get no response?</h3>
              <p className="text-sm text-slate-600">
                If you don't receive an acknowledgement within 28 days, follow up by email. Some homeowners report
                never receiving a formal acknowledgement — this is a process failure on the DNO's part rather than
                a problem with your installation. Keep your submission email as evidence that you notified.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">What to keep</h3>
              <p className="text-sm text-slate-600">
                Keep: your original notification submission (email or postal), the DNO's acknowledgement (email or
                letter), and the product data sheet for your inverter confirming it is G98 type tested. Store these
                with your other property documents.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            Related guides:{" "}
            <Link href="/uk-regulations/building-regulations" className="text-solar-600 underline">
              Building regulations & BS 7671
            </Link>
            {" · "}
            <Link href="/uk-regulations/planning-permission" className="text-solar-600 underline">
              Planning permission
            </Link>
            {" · "}
            <Link href="/uk-regulations/timeline" className="text-solar-600 underline">
              Legalisation timeline
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
