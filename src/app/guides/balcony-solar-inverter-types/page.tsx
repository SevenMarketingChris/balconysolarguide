import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "Balcony Solar Inverter Types Explained",
  description:
    "Everything you need to know about micro-inverters for balcony solar. Covers how they work, leading brands (Hoymiles, Deye, APsystems, Enphase), efficiency, safety specs, and what to look for when buying.",
};

export default function BalconySolarInverterTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Balcony Solar Inverter Types Explained"
        subtitle="The inverter is the heart of your balcony solar system. Here's how micro-inverters work, why they're better than string inverters for balcony solar, and what to look for when buying."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Inverter Types" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>What Does a Solar Inverter Do?</h2>
          <p>
            Solar panels generate DC (direct current) electricity — the same type of current produced by a battery.
            Your home runs on AC (alternating current) at 230V, 50Hz — the same current that comes out of every wall
            socket in the UK. These are fundamentally incompatible, which is where the inverter comes in.
          </p>
          <p>
            A solar inverter converts the DC output of your panels into grid-synchronised AC that can be used directly
            in your home. For a balcony solar system, this happens continuously while light is hitting the panels:
            the inverter monitors the grid's voltage and frequency in real time, generates AC power that matches it
            precisely, and feeds that power into your home circuit through the plug connection.
          </p>
          <p>
            Beyond simple conversion, modern inverters also perform several other functions:
          </p>
          <ul>
            <li>Maximum power point tracking (MPPT) — continuously adjusting the operating point of the panels to extract the maximum available power as conditions change</li>
            <li>Anti-islanding protection — automatically shutting down output if the grid supply fails, to prevent the system from energising a dead cable</li>
            <li>Monitoring — reporting output data to a cloud server and app via Wi-Fi</li>
            <li>Over-voltage and over-temperature protection</li>
          </ul>

          <h2>Micro-Inverters vs String Inverters</h2>
          <p>
            There are two main types of inverter architecture used in solar installations: string inverters and
            micro-inverters. Understanding the difference matters for balcony solar.
          </p>

          <h3>String Inverters</h3>
          <p>
            A string inverter is a single centralised unit that connects to all the solar panels in the system (the
            "string") and converts their combined DC output to AC. This is the traditional approach used in rooftop
            solar installations. String inverters are cost-effective and robust, but they have a significant weakness:
            the entire string's output is limited by the weakest panel.
          </p>
          <p>
            If one panel in a string is partially shaded — by a chimney, a neighbouring building, or even bird
            droppings on one corner — the output of every other panel in the string can be pulled down to match it.
            A single shaded panel can reduce the output of a 10-panel string by 30–50%.
          </p>

          <h3>Micro-Inverters</h3>
          <p>
            A micro-inverter is a small inverter attached to (or integrated with) each individual panel. Rather than
            converting all panels' combined DC output in one place, each panel has its own conversion electronics and
            operates independently.
          </p>
          <p>
            This independence is the key advantage: if one panel is shaded, only that panel's output is affected. The
            other panel continues operating at full capacity. For balcony solar, where shading from railings, walls,
            and neighbouring structures is common and unavoidable, micro-inverters are significantly more appropriate
            than a string inverter would be.
          </p>
          <p>
            Micro-inverters also simplify the system architecture for plug-in solar: each panel (or pair of panels)
            outputs AC directly, which can be combined and fed through a single plug to the wall socket without any
            additional equipment.
          </p>

          <InfoBox variant="tip" title="All balcony solar kits use micro-inverters">
            Because balcony solar systems are designed to plug directly into a wall socket, they must output AC at the
            panel level. This means every balcony solar kit on the market uses a micro-inverter (or a closely related
            architecture called a "power optimizer with string inverter" — but this is rare in the plug-in solar
            segment). If a kit doesn't include a micro-inverter, it's not a complete balcony solar system.
          </InfoBox>

          <h2>The Leading Micro-Inverter Brands</h2>

          <h3>Hoymiles</h3>
          <p>
            Hoymiles is a Chinese manufacturer founded in 2013 that has become the dominant brand in the European
            plug-in solar market. Their micro-inverters — particularly the HMS and HM series — are found in the
            majority of balcony solar kits sold across Germany, the Netherlands, France, and the UK.
          </p>
          <p>
            Popular models for balcony solar include the HMS-600 and HMS-800, and the newer HMT series for three-phase
            applications. Hoymiles inverters use their DTU (Data Transfer Unit) dongle for Wi-Fi monitoring via the
            S-Miles app. Efficiency is typically 96–96.5%. Warranty is 10 years standard, with extended options
            available.
          </p>

          <h3>APsystems</h3>
          <p>
            APsystems (formerly All Power America) is a US-founded, Chinese-manufactured micro-inverter brand with
            a strong European presence. Their DS3-H and DS3-L models are specifically designed for plug-in solar,
            featuring dual-panel input (each DS3 handles two panels) and a single AC output, which simplifies
            wiring for dual-panel kits.
          </p>
          <p>
            APsystems use the EMA app for monitoring. Efficiency is 96–96.8%. The DS3-H (800W output) is one of the
            most efficient micro-inverters available for balcony solar. Warranty is 10 years.
          </p>

          <h3>Deye</h3>
          <p>
            Deye is a Chinese manufacturer that has expanded rapidly into the European solar market through aggressive
            pricing. Their SUN-M80G3-EU-Q0 and related models are common in budget-oriented balcony solar kits.
            Performance and reliability are generally good, though the brand lacks the established track record of
            Hoymiles and APsystems in the European market.
          </p>
          <p>
            Deye inverters typically come with a 5-year warranty, shorter than the 10-year standard from Hoymiles and
            APsystems. Efficiency is 95.8–96.2%.
          </p>

          <h3>Enphase IQ8MC</h3>
          <p>
            Enphase is the world's largest micro-inverter manufacturer, headquartered in California, and their
            IQ8 series represents the premium end of the market. Unlike other micro-inverters, the IQ8 can operate
            in "off-grid" mode during a power cut when paired with Enphase's battery system — a feature not available
            in most competing products.
          </p>
          <p>
            The IQ8MC is the model most suitable for balcony solar applications (designed for 60/72-cell panels).
            Efficiency is 97.3% — the highest in class. Warranty is 25 years, which is exceptional. The downside is
            cost: an Enphase IQ8MC is substantially more expensive than a Hoymiles or APsystems equivalent. Enphase
            systems are rarely included in budget or mid-range balcony solar kits.
          </p>

          <h2>Inverter Efficiency: What the Numbers Mean</h2>
          <p>
            Micro-inverter efficiency — typically quoted as a percentage like 96% or 97% — refers to the conversion
            efficiency: what proportion of the DC power from the panels is successfully converted to usable AC power.
            The remaining percentage is lost as heat.
          </p>
          <p>
            In practice, the difference between a 95.5% efficient inverter and a 97% efficient inverter is small:
            for a 600W system generating 500kWh per year, the difference is about 7kWh annually — approximately £1.70
            at 24p/kWh. Efficiency matters at the margins but shouldn't be the primary buying criterion. Build quality,
            brand reputation, warranty length, and safety certifications are more important.
          </p>
          <p>
            Note that inverter efficiency is different from panel efficiency (which refers to how much sunlight a panel
            converts to electricity). Most modern monocrystalline panels used in balcony solar have efficiencies of
            20–22% — this is a separate specification.
          </p>

          <h2>The 800W Output Limit</h2>
          <p>
            Most micro-inverters sold for plug-in solar in the UK and Europe are configured to output a maximum of
            800W (3.47A at 230V). This limit aligns with the EU's Plug-In Solar Standard (EN 50549-1) and the
            UK government's current guidance for small generation systems. Some inverters in European markets are
            limited to 600W for compliance with local regulations.
          </p>
          <p>
            Having panels with a higher wattage rating than 800W — for example, two 450W panels giving a total of 900W
            — is not a problem. The inverter simply limits its output to 800W; the extra panel capacity means the
            inverter reaches 800W output at a lower light level than it would with smaller panels, effectively
            extending the number of hours per day at which the system operates at full output.
          </p>

          <h2>Safety: What to Look For</h2>
          <p>
            For a grid-connected micro-inverter, safety certifications are not optional. When evaluating a balcony
            solar kit or standalone inverter, look for:
          </p>
          <ul>
            <li>
              <strong>CE marking:</strong> Confirms compliance with EU (and currently still UK-recognised) safety
              and electromagnetic compatibility standards. This should be on the product label and documentation.
            </li>
            <li>
              <strong>Anti-islanding protection:</strong> Mandatory for grid-connected inverters. This protection
              automatically disconnects the inverter from the grid if mains power fails, preventing back-feeding
              into a dead network. All reputable brands include this; look for it explicitly in the spec sheet.
            </li>
            <li>
              <strong>G98 compliance:</strong> The inverter must meet the technical requirements of Engineering
              Recommendation G98 to be legally used in a grid-connected installation in Great Britain. Most
              European inverters from reputable brands meet this requirement, but confirm before buying.
            </li>
            <li>
              <strong>RCD compatibility:</strong> The inverter's operation should be compatible with standard UK
              RCD protection. Type A or Type F RCDs (the most common in UK consumer units) should be compatible
              with standard micro-inverters. If you have an older property with a fuse board rather than a modern
              consumer unit, it's worth having an electrician check your protection.
            </li>
            <li>
              <strong>Warranty:</strong> A minimum five-year warranty is advisable. Ten years is industry standard
              for quality brands. A two-year warranty on an inverter is a warning sign.
            </li>
          </ul>

          <h2>Inverter Comparison Table</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Brand / Model</th>
                  <th>Max Output</th>
                  <th>Peak Efficiency</th>
                  <th>Warranty</th>
                  <th>Monitoring App</th>
                  <th>Price Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hoymiles HMS-800</td>
                  <td>800W</td>
                  <td>96.7%</td>
                  <td>10 years</td>
                  <td>S-Miles Cloud</td>
                  <td>Mid-range</td>
                </tr>
                <tr>
                  <td>APsystems DS3-H</td>
                  <td>800W</td>
                  <td>96.8%</td>
                  <td>10 years</td>
                  <td>EMA App</td>
                  <td>Mid-range</td>
                </tr>
                <tr>
                  <td>Deye SUN-M80G3</td>
                  <td>800W</td>
                  <td>96.0%</td>
                  <td>5 years</td>
                  <td>SolarmanPV</td>
                  <td>Budget</td>
                </tr>
                <tr>
                  <td>Enphase IQ8MC</td>
                  <td>330W per unit</td>
                  <td>97.3%</td>
                  <td>25 years</td>
                  <td>Enlighten</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>Hoymiles HMT-2000</td>
                  <td>2000W (3-phase)</td>
                  <td>96.5%</td>
                  <td>10 years</td>
                  <td>S-Miles Cloud</td>
                  <td>Mid-range</td>
                </tr>
              </tbody>
            </table>
          </div>

          <InfoBox variant="info" title="Don't buy unknown-brand inverters">
            The inverter is the component where quality matters most for both safety and long-term performance. An
            unknown-brand inverter from a marketplace seller with no UK presence may lack genuine anti-islanding
            protection, CE certification, or the after-sales support to honour warranty claims. The savings from
            buying an unbranded inverter rarely justify the risk. Stick to the established brands — Hoymiles,
            APsystems, Deye, and Enphase are all sold by reputable UK retailers and have proven track records.
          </InfoBox>

          <h2>Monitoring Your Inverter's Output</h2>
          <p>
            All major micro-inverters include Wi-Fi monitoring via a DTU dongle and a smartphone app. These apps
            typically show:
          </p>
          <ul>
            <li>Real-time output in watts</li>
            <li>Today's total generation in kWh</li>
            <li>Monthly and annual totals</li>
            <li>Lifetime generation and CO₂ saving estimates</li>
            <li>Alert notifications if the inverter stops generating unexpectedly</li>
          </ul>
          <p>
            Monitoring is genuinely useful beyond the initial novelty. Checking that your output on a clear day matches
            historical performance helps you spot panel degradation, shading changes (e.g. a new structure nearby),
            or inverter faults early. Most issues can be diagnosed remotely through the app before they require any
            physical inspection.
          </p>
        </article>
      </div>
    </>
  );
}
