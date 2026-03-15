import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "Beginner's Guide to Balcony Solar Panels in the UK",
  description:
    "New to balcony solar? This complete beginner's guide explains how plug-in solar panels work, what they cost in the UK, realistic savings by region, and everything you need to know before buying.",
};

export default function BeginnersGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Beginner's Guide to Balcony Solar Panels in the UK"
        subtitle="Everything you need to know before buying your first plug-in solar system — from how the technology works to what you can realistically expect to save."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Beginner's Guide" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>What Is Balcony Solar?</h2>
          <p>
            Balcony solar — sometimes called plug-in solar, balcony power stations, or micro-solar — refers to small
            photovoltaic systems designed to be installed on a balcony, terrace, garden wall, or flat roof without any
            structural modification to your home. The defining characteristic is simplicity: rather than being wired into
            your consumer unit by an electrician, a balcony solar system plugs into a standard socket. In Germany, where
            the technology became mainstream several years earlier than in the UK, they call them{" "}
            <em>Balkonkraftwerke</em> — balcony power stations.
          </p>
          <p>
            The core appeal is accessibility. You don't need to own your home, you don't need planning permission, and
            you don't need to pay for professional installation. A typical setup can be assembled by one person in an
            afternoon using only a screwdriver and a spanner. Unplug it and it comes with you when you move.
          </p>

          <h2>How Does It Work?</h2>
          <p>
            A balcony solar system has three main components: one or two solar panels, a micro-inverter, and a plug
            cable. Here's the energy flow:
          </p>
          <ol>
            <li>
              <strong>Solar panels</strong> generate DC (direct current) electricity when sunlight hits them. Most
              balcony solar panels are standard monocrystalline panels, typically 400W each, identical in technology to
              what goes on a rooftop — just used in a different context.
            </li>
            <li>
              <strong>The micro-inverter</strong> converts that DC electricity into AC (alternating current) at 230V,
              which is the standard voltage used throughout UK homes. The inverter is usually attached directly to the
              back of the panel or sits on the mounting frame nearby.
            </li>
            <li>
              <strong>The plug cable</strong> connects the inverter's output to a standard 13A socket on your balcony
              wall or, via a longer cable routed through a window, to an indoor socket. From that moment, the electricity
              your panels are generating flows directly into your home's circuits, reducing how much you draw from the
              grid.
            </li>
          </ol>
          <p>
            The critical thing to understand is that the system doesn't charge a battery (unless you add one separately
            — more on that in our{" "}
            <a href="/guides/balcony-solar-battery-storage">battery storage guide</a>) and it doesn't export surplus
            electricity in any meaningful way. What it does is offset your home's real-time consumption. If your
            800W system is generating 600W and your home is drawing 400W from the grid, you'll draw nothing from the
            grid during those moments and feed the remaining 200W back. Whether that exported 200W earns you money
            depends on your tariff — but for most balcony solar users it's not the main financial mechanism.
          </p>

          <InfoBox variant="info" title="How the offset works">
            Think of your electricity meter running backwards slightly whenever your panels are generating. Modern smart
            meters measure import and export separately, but even old meters effectively slow down when you're generating
            locally — that's your saving.
          </InfoBox>

          <h2>Balcony Solar vs Rooftop Solar: What's the Difference?</h2>
          <p>
            Rooftop solar is a permanent installation wired into your consumer unit, typically 3–12kW in capacity,
            costing £5,000–£12,000 installed, and requiring a qualified electrician and often a DNO application. It's
            the right choice if you own your home, have a suitable south-facing roof, and can afford the upfront cost.
          </p>
          <p>
            Balcony solar is none of those things — and that's intentional. It's designed for the 35% of UK households
            who rent, for flat-dwellers with no roof access, for people who want a low-commitment entry into solar, and
            for those who can't yet afford a full rooftop system. At £399–£949 for a complete kit, the economics are
            entirely different. You're not maximising output per household — you're making solar accessible to people who
            would otherwise be locked out of it entirely.
          </p>

          <h2>Typical System Sizes</h2>
          <p>
            UK balcony solar kits are generally available in three sizes, defined by their total panel wattage:
          </p>
          <ul>
            <li>
              <strong>300–400W (single panel):</strong> The smallest and most compact option. Ideal for Juliet
              balconies, smaller railings, or people who simply want to try the technology. Generates roughly 250–350kWh
              per year in the south of England.
            </li>
            <li>
              <strong>600W (two panels):</strong> The most popular configuration. Two 300W panels give a good balance
              of output and space requirements. Most UK balcony solar kits are built around this size.
            </li>
            <li>
              <strong>800W (two 400W panels):</strong> The maximum currently permitted under the emerging UK standard,
              aligned with the EU's 800W plug-in solar limit. Generates 550–700kWh annually in southern England,
              potentially covering 15–20% of a typical flat's electricity use.
            </li>
          </ul>

          <InfoBox variant="tip" title="What about 1200W systems?">
            Some retailers sell systems with higher wattage panels, but most micro-inverters used in plug-in solar are
            configured to output no more than 800W (3.47A at 230V). Having higher-wattage panels isn't harmful — it
            simply means the inverter works closer to its peak rating on very sunny days.
          </InfoBox>

          <h2>What You Need to Know Before Buying</h2>
          <h3>Orientation and Shading</h3>
          <p>
            South-facing is best, east or west is workable, north-facing is not worth it. A south-facing system at a
            30–35° tilt delivers maximum annual output. However, balcony railings often force a near-vertical angle
            (60–90°) — this reduces annual output by roughly 20–30% compared to an optimal tilt, but in summer (when
            sun angles are higher) the penalty is much smaller. An east-facing 800W system will generate around 60–65%
            of what a south-facing equivalent would.
          </p>
          <p>
            Shading is more damaging to output than sub-optimal orientation. If your panels spend two hours of the
            afternoon in shadow from a neighbouring building, you'll lose that generation entirely. Micro-inverters
            mitigate this somewhat (each panel operates independently) but shading cannot be overcome — survey your
            balcony throughout the day before buying.
          </p>
          <h3>Inverter Type</h3>
          <p>
            Most balcony solar kits come with a micro-inverter built in or included. The main brands you'll encounter
            are Hoymiles, Deye, and APsystems. All of these are reputable manufacturers used in professional solar
            installations worldwide. Look for CE marking, anti-islanding protection (essential for grid-connected
            systems), and a minimum five-year warranty. Hoymiles and APsystems both offer 10-year warranties on some
            models.
          </p>
          <h3>Monitoring</h3>
          <p>
            All major balcony solar kits include a Wi-Fi dongle and an app that shows real-time output, daily
            generation, and historical data. This is genuinely useful — not just for satisfaction, but for confirming
            your system is performing as expected and catching faults early.
          </p>

          <h2>How Much Does Balcony Solar Cost in the UK?</h2>
          <p>
            As of early 2026, complete balcony solar kits from reputable UK retailers are priced roughly as follows:
          </p>
          <ul>
            <li>
              <strong>Single-panel (400W) kit:</strong> £299–£449, including panel, micro-inverter, mounting hardware,
              and plug cable.
            </li>
            <li>
              <strong>Dual-panel (600W) kit:</strong> £399–£599. This is the sweet spot for most buyers.
            </li>
            <li>
              <strong>Dual-panel (800W) kit:</strong> £499–£699 for standard systems; up to £949 for premium kits with
              app monitoring, premium inverter brands, and heavier-duty mounting hardware.
            </li>
            <li>
              <strong>Battery-integrated systems</strong> (e.g. EcoFlow STREAM with battery): £1,200–£2,500 depending
              on battery capacity.
            </li>
          </ul>
          <p>
            Unlike rooftop solar, there is currently no VAT relief or government grant available for balcony solar in
            the UK, though this may change as the technology becomes formally legalised. Prices have fallen
            significantly over the past two years as demand has grown and supply chains have matured.
          </p>

          <h2>Realistic Output Expectations by UK Region</h2>
          <p>
            Solar generation in the UK varies significantly by location. The south of England enjoys roughly 1,050–1,150
            peak sun hours per year; Scotland receives closer to 750–900. For a 600W south-facing system:
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Estimated Annual Output (600W south-facing)</th>
                  <th>Estimated Saving at 24p/kWh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>South England (London, Brighton)</td>
                  <td>520–580 kWh</td>
                  <td>£125–£139</td>
                </tr>
                <tr>
                  <td>Midlands (Birmingham, Leicester)</td>
                  <td>460–510 kWh</td>
                  <td>£110–£122</td>
                </tr>
                <tr>
                  <td>North England (Manchester, Leeds)</td>
                  <td>420–470 kWh</td>
                  <td>£101–£113</td>
                </tr>
                <tr>
                  <td>Scotland (Edinburgh, Glasgow)</td>
                  <td>380–430 kWh</td>
                  <td>£91–£103</td>
                </tr>
                <tr>
                  <td>Wales (Cardiff, Swansea)</td>
                  <td>440–490 kWh</td>
                  <td>£106–£118</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These figures assume the electricity you generate replaces grid electricity you would otherwise have bought —
            i.e., someone is home during daylight hours or you have a battery. If the flat is empty all day and you have
            no battery, your effective saving will be much lower because the electricity you generate simply exports at a
            negligible rate. See our <a href="/guides/balcony-solar-savings-uk">detailed savings guide</a> for a full
            breakdown.
          </p>

          <h2>Current Legal Status</h2>
          <p>
            As of March 2026, the UK government has announced it is working to formally legalise plug-in solar "at
            pace." Previously, balcony solar occupied a grey area — not explicitly illegal, but not formally approved
            under BS 7671 (the wiring regulations) due to concerns about ring circuits and reverse current flow. In
            practice, hundreds of thousands of systems are already operating in the UK without incident.
          </p>
          <p>
            The key regulatory requirement currently in place is G98 notification — you should notify your Distribution
            Network Operator (DNO) before connecting generation to the grid. For most balcony solar users this is a
            straightforward online form. See our <a href="/guides/g98-dno-notification-balcony-solar">G98 guide</a> for
            full details.
          </p>

          <h2>Where to Buy Balcony Solar in the UK</h2>
          <p>
            Several specialist UK retailers now offer balcony solar kits, and mainstream marketplaces have expanded their
            ranges significantly. Key options include dedicated solar retailers such as Sunstore and Solar Panels UK, as
            well as general marketplaces. When buying, prioritise sellers who:
          </p>
          <ul>
            <li>Stock CE-marked equipment</li>
            <li>Offer UK-based customer support</li>
            <li>Provide a clear returns policy</li>
            <li>Include mounting hardware appropriate for your balcony type</li>
            <li>Sell micro-inverters with proven anti-islanding protection</li>
          </ul>
          <p>
            Be cautious of very cheap kits sold via marketplace sellers with no UK presence — inverter quality in
            particular has a direct bearing on electrical safety, and a saving of £50 on the purchase price is not worth
            the compromise.
          </p>

          <h2>Next Steps</h2>
          <p>
            Once you've read this guide, here's a suggested path:
          </p>
          <ol>
            <li>
              Use our <a href="/calculator">savings calculator</a> to get a personalised output estimate based on your
              postcode, orientation, and system size.
            </li>
            <li>
              If you're a renter, read our <a href="/guides/balcony-solar-for-renters">guide for renters</a> before
              doing anything else.
            </li>
            <li>
              Check the <a href="/guides/is-balcony-solar-legal-uk">legal status guide</a> and understand your G98
              obligations.
            </li>
            <li>
              Browse our <a href="/reviews">kit reviews</a> to find the right system for your balcony.
            </li>
          </ol>

          <h2>Frequently Asked Questions</h2>

          <div itemScope itemType="https://schema.org/FAQPage">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Do I need an electrician to install balcony solar?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    No. Balcony solar systems are designed for self-installation — you plug them into an existing socket.
                    No wiring is modified, no consumer unit work is needed, and no electrical qualifications are required.
                    That said, if you're in any way uncertain about your socket's condition or suitability, having it
                    checked by a qualified electrician is always sensible. The socket used should ideally be on a
                    dedicated circuit rather than a multi-socket extension lead.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Will balcony solar panels work on a north-facing balcony?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    A north-facing installation in the UK will generate very little electricity — typically 30–40% of
                    what a south-facing equivalent would produce, and most of that in summer when the sun is high enough
                    to wrap around. It's generally not worth the investment. East or west-facing balconies are a much
                    better proposition, generating around 60–70% of south-facing output annually.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Can I take balcony solar panels with me when I move?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Yes — this is one of the biggest advantages over rooftop solar. Most balcony solar systems can be
                    dismantled in under an hour, packed into the original packaging, and reinstalled at a new property.
                    Railing and floor-mount systems leave no trace at all. Wall-mounted systems that use drilled brackets
                    leave small holes that can be filled before you leave.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Do I need a smart meter to use balcony solar?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    No, a smart meter is not required. Any electricity meter will slow down or run backwards when your
                    panels are generating — that's your saving. However, a smart meter makes it much easier to monitor
                    your consumption and understand your self-consumption ratio. If your energy supplier offers a smart
                    tariff (such as Octopus Agile) that you'd like to take advantage of, a smart meter is essential for
                    that tariff, not for the solar itself.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Is balcony solar worth it if I'm out at work all day?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Without a battery, probably not — at least not on purely financial grounds. If your flat is empty
                    from 8am to 6pm, most of your solar generation will be exported to the grid rather than used in your
                    home. Without a microgeneration tariff that pays you for exports, that electricity earns you nothing.
                    The solution is either to add a battery (which stores daytime generation for evening use) or to use
                    smart plugs and timers to run appliances like dishwashers and washing machines during daylight hours.
                    If you work from home, balcony solar is considerably more valuable.
                  </p>
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">What happens in winter — is balcony solar pointless from October to March?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p>
                    Winter generation is lower, but not negligible. Even in December, a well-positioned south-facing
                    panel will generate for several hours a day when it's not overcast. Typically, winter months might
                    contribute 15–20% of annual output, with summer months contributing 50–60%. The system continues
                    working year-round; you just set your expectations accordingly. Overcast days still produce some
                    output — diffuse light still generates electricity, just at a reduced rate.
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
