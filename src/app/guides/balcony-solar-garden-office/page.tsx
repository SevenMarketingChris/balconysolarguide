import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can You Use Balcony Solar to Power a Garden Office or Shed?",
  datePublished: "2026-03-15",
  dateModified: "2026-03-30",
  author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
  publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
};

export const metadata: Metadata = {
  title: "Can You Use Balcony Solar to Power a Garden Office or Shed?",
  description:
    "A guide to off-grid DC systems and grid-connected plug-in solar for garden offices and sheds, with realistic power consumption tables.",
};

export default function GardenOfficePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Off-Grid Uses"
        title="Can You Use Balcony Solar to Power a Garden Office or Shed?"
        subtitle="Using solar to power a garden office or shed is often simpler than balcony solar — especially off-grid. Here is what each approach involves, what it can realistically power, and what to buy."
        badge="Updated March 2026"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Garden Office Solar" },
          ]}
        />

        <AffiliateNotice />

        <article className="prose-solar">
          <h2>Section 1: The Question Everyone's Asking</h2>
          <p>
            "Can I use a balcony solar panel system to power my garden office?" comes up constantly
            in solar forums, and the answer is a clear yes — with important nuance about which
            approach suits your setup and what you can realistically expect to power.
          </p>
          <p>
            For a garden office, you have two fundamentally different approaches available, and they
            suit different needs. The first is a completely off-grid DC system that has nothing to
            do with your house's electrical supply. The second is a grid-connected plug-in solar
            system that works like balcony solar but installed at garden-office scale.
          </p>
          <p>
            In many ways, the garden office situation is easier than balcony solar. You are not
            dealing with ring circuit questions (if you go off-grid). You are not navigating
            landlord or freeholder permission for a visible balcony installation. And the relatively
            modest power requirements of a typical garden office — laptop, monitor, lighting,
            router — are well within what even a 200–400W solar panel can supply during daylight
            hours.
          </p>

          <h2>Section 2: Two Approaches to Garden Office Solar</h2>

          <h3>Approach A — Off-Grid DC System (Simplest)</h3>
          <p>
            An off-grid system uses solar panels to charge a leisure battery (or lithium battery
            pack), and the battery then powers your office equipment. There is no connection to the
            grid, no G98 notification required, and no interaction with your home's ring circuits.
            The system is entirely standalone.
          </p>
          <p>
            The basic components are:
          </p>
          <ul>
            <li>
              <strong>Solar panel(s):</strong> 100W to 400W depending on your power needs and
              available roof or mounting space. A single 200W panel is sufficient for light office
              use.
            </li>
            <li>
              <strong>Charge controller:</strong> Regulates charging to protect the battery. MPPT
              (Maximum Power Point Tracking) controllers are more efficient than PWM and worth the
              slightly higher cost. Sized to match your panel wattage.
            </li>
            <li>
              <strong>Battery:</strong> A 100Ah leisure battery (deep-cycle, AGM or lithium) stores
              approximately 1–1.2kWh of usable energy. Lithium (LiFePO4) batteries are significantly
              lighter and have longer cycle life than AGM, at higher upfront cost.
            </li>
            <li>
              <strong>Inverter (optional):</strong> If you need 240V AC for devices that do not have
              a 12V or USB option, a small 300–500W inverter converts the battery's DC output to
              mains voltage. Most laptop power bricks, USB chargers, and monitor power supplies work
              from 12V DC directly or via a modest inverter.
            </li>
          </ul>
          <p>
            <strong>What it powers:</strong> LED lighting, laptop charging (via USB or DC adapter),
            monitors, phones, Wi-Fi router, Raspberry Pi or similar. Essentially any device that
            draws under 200–300W continuously.
          </p>
          <p>
            <strong>What it does not power:</strong> Electric kettle, fan heater, or any
            resistance heating element. These draw 1,500–3,000W, which would drain a typical
            leisure battery in minutes and require far more panel capacity than is practical in this
            context.
          </p>
          <p>
            <strong>Cost:</strong> A basic but functional system — 200W panel, MPPT controller,
            100Ah AGM battery, 300W inverter — can be assembled for £200–£400 from components
            available at Toolstation, Screwfix, and online specialist retailers. Pre-packaged
            kits are available from ECO-WORTHY, Renogy, and similar.
          </p>

          <h3>Approach B — Plug-In Solar Feeding a Grid-Connected Garden Office Socket</h3>
          <p>
            If your garden office is connected to the house electrical system via a properly
            installed armoured cable (a standard SWA cable buried in a protective duct), it will
            have grid-powered sockets. In this case, you can install a standard plug-in solar
            system — identical to a balcony installation — and plug it into one of those sockets.
          </p>
          <p>
            The physics work the same as balcony solar: the microinverter generates AC electricity
            that reduces the net draw from the grid for any appliances running in the office at the
            same time. Generation that exceeds office demand flows back through the supply cable to
            your main meter.
          </p>
          <p>
            G98 notification applies to this setup — you are connecting to the distribution network
            via your house supply, and the DNO needs to be notified as with any grid-connected
            generation. The process is identical to a balcony installation. See our{" "}
            <Link
              href="/uk-regulations/dno-g98-explained"
              className="text-solar-600 hover:text-solar-700 font-medium"
            >
              G98 notification guide
            </Link>
            .
          </p>
          <p>
            For a garden office, the panel mounting options are more flexible than a balcony —
            you can mount panels on the office roof (at an optimised tilt angle), on a south-facing
            wall, or on a freestanding frame in the garden. A rooftop-mounted system on the garden
            office roof is particularly effective if the roof faces south and has no shading issues.
          </p>

          <h2>Section 3: What a 400W System Can Realistically Power</h2>
          <p>
            The following table gives typical power draws for common garden office devices, and
            whether a 400W solar system generating at peak output can cover each one:
          </p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Typical wattage</th>
                  <th>Covered by 400W system?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LED lighting (4 bulbs)</td>
                  <td>20–40W</td>
                  <td>Yes — easily</td>
                </tr>
                <tr>
                  <td>Laptop (typical)</td>
                  <td>45–65W</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Monitor (24 inch)</td>
                  <td>25–35W</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Wi-Fi router / mesh unit</td>
                  <td>8–15W</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Small desk fan</td>
                  <td>30–50W</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Phone charging</td>
                  <td>10–25W</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Printer (standby)</td>
                  <td>5–10W</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Printer (printing)</td>
                  <td>200–400W</td>
                  <td>Marginal — brief surge</td>
                </tr>
                <tr>
                  <td>Desktop PC + monitor</td>
                  <td>200–400W</td>
                  <td>Marginal — depends on PC</td>
                </tr>
                <tr>
                  <td>Gaming PC</td>
                  <td>300–600W</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Electric kettle</td>
                  <td>2,000–3,000W</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Fan heater / panel heater</td>
                  <td>1,000–2,000W</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Mini fridge</td>
                  <td>30–60W (average)</td>
                  <td>Yes — but runs 24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            A standard work-from-home garden office setup — laptop, monitor, lighting, router, phone
            — draws approximately 100–150W during active use. A 400W system generating at 50–60%
            of peak on a typical UK working day will comfortably cover this load during daylight
            hours, with surplus available to charge a battery for evening use.
          </p>
          <p>
            The kettle and any form of electric heating are the exceptions. The office kettle
            (2,000–3,000W) cannot be run from a modest solar system — boil it from the grid, or
            invest in a hot water flask kept in the house. For winter heating, a low-wattage
            infrared panel heater (300–600W) is more compatible with solar generation than a
            conventional fan heater, but it will still consume a significant proportion of your
            system output.
          </p>

          <h2>Section 4: Recommended Products</h2>

          <h3>For Off-Grid Garden Offices</h3>
          <p>
            The Jackery Solar Generator 1000 Pro (or the newer Navi 2000) is a well-regarded
            pre-packaged solution: a lithium battery power station paired with foldable solar
            panels. The all-in-one design removes the need to source components separately, and the
            Jackery app provides real-time monitoring of generation and consumption.
          </p>
          <p>
            For a more DIY approach, the ECO-WORTHY 200W Kit with 20Ah lithium battery is a
            well-priced entry point. It includes panel, charge controller, and battery, and can be
            expanded with additional panels or battery capacity as needed.
          </p>
          <p>
            See our full review:{" "}
            <Link
              href="/reviews/jackery-navi-2000"
              className="text-solar-600 hover:text-solar-700 font-medium"
            >
              Jackery Navi 2000 review
            </Link>
            .
          </p>

          <h3>For Grid-Connected Garden Offices</h3>
          <p>
            Any standard plug-in solar kit designed for balcony use works equally well for a
            grid-connected garden office socket. The APsystems EZ1-M with two 400W panels is a
            solid 800W setup for a garden office roof. For simpler needs, a single-panel 400W
            Plug-In Solar Kit is sufficient for covering typical laptop-and-lighting loads.
          </p>
          <p>
            See our{" "}
            <Link
              href="/reviews/plug-in-solar-kit"
              className="text-solar-600 hover:text-solar-700 font-medium"
            >
              plug-in solar kit review
            </Link>{" "}
            for current recommendations.
          </p>

          <InfoBox variant="tip" title="Off-grid is often the easier choice for garden offices">
            If your garden office is not already connected to the house electrical supply, it is
            often simpler and cheaper to install a standalone off-grid solar system than to pay for
            an armoured cable installation. A 200–400W off-grid setup costs £200–£500 and covers
            all typical office computing needs. The armoured cable installation alone might cost
            £500–£1,500 depending on distance and ground conditions.
          </InfoBox>

          <h2>Practical Considerations</h2>

          <h3>South-Facing Roof Is Optimal</h3>
          <p>
            If mounting panels on the garden office roof, a south-facing pitch at 30–40° is ideal.
            Many garden offices and sheds have shallow-pitched or flat roofs — in this case, a
            tilted mounting frame can optimise the angle. For detailed guidance on flat roof mounting
            methods including ballast systems, see our{" "}
            <Link href="/guides/balcony-solar-flat-roof" className="text-solar-600 hover:text-solar-700 font-medium">flat roof solar guide</Link>.
            Panels lying flat on a shallow roof lose significant output compared to an angled installation.
          </p>

          <h3>Cable Length from Panel to Battery or Inverter</h3>
          <p>
            For DC off-grid systems, keep cable runs between panel and charge controller as short
            as practically possible. DC cable carries significant current at 12–24V, and longer
            cable runs cause resistive losses. Use appropriately rated cable (6mm² for runs up to
            5 metres at 20A; 10mm² for longer runs) and avoid undersized cables that will heat up.
          </p>

          <h3>Battery Location</h3>
          <p>
            Lead-acid batteries emit hydrogen gas when charging and should not be kept in enclosed
            spaces without ventilation. Lithium (LiFePO4) batteries do not have this issue and can
            be stored indoors. If using an AGM or gel battery in your garden office, ensure there
            is adequate ventilation — a gap under the door and a vent at roof level is sufficient.
          </p>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Ready to get started?</h3>
            <p className="text-sm text-slate-600 mb-4">Find out how much you could save, or see our top-rated systems.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/calculator" className="inline-flex items-center justify-center bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors">Calculate your savings</Link>
              <Link href="/reviews/best-balcony-solar-kits-uk" className="inline-flex items-center justify-center bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm px-5 py-3 rounded-lg transition-colors">See top-rated kits</Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
