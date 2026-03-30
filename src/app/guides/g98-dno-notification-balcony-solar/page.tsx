import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "G98 DNO Notification for Balcony Solar: Do You Need to Notify?",
  description:
    "Complete guide to G98 notification for plug-in solar. What G98 is, who your DNO is, the notification process, and a table of all UK DNOs with contact details.",
};

export default function G98DnoNotificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="G98 DNO Notification for Balcony Solar"
        subtitle="Connecting generation to the grid requires notifying your Distribution Network Operator. Here's exactly what G98 means, who your DNO is, and how to complete the notification in about 15 minutes."
        badge="Updated March 2026"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "G98 & DNO Notification" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>What Is G98?</h2>
          <p>
            G98 is the short name for Engineering Recommendation G98 — the UK standard that governs how small-scale
            electricity generation equipment (up to 16A per phase, which equates to around 3.68kW on a single-phase
            supply) is connected to the public electricity grid. For a broader overview of the legal landscape, see
            our <Link href="/guides/is-balcony-solar-legal-uk">legal status guide</Link>. G98 was introduced in 2019 to provide a simpler, faster
            pathway for small generators than the previous G83 standard, and it applies to everything from rooftop solar
            panels to wind turbines and, yes, balcony solar systems.
          </p>
          <p>
            The key requirement under G98 is notification: before connecting a generation unit to the grid, you must
            notify your local Distribution Network Operator (DNO) of the connection. For systems under 3.68kW — which
            covers every balcony solar system currently on the market — this notification is automatic. The DNO doesn't
            need to inspect, approve, or even respond. You simply tell them a system is being connected, and that's
            sufficient. You don't wait for permission; you can connect on the day of notification.
          </p>

          <InfoBox variant="info" title="G98 vs G99">
            G99 is the standard for larger generation systems (above 3.68kW per phase). If you have a standard
            balcony solar system of 800W or less, G98 is the relevant standard — G99 doesn't apply to you.
          </InfoBox>

          <h2>Who Is My DNO?</h2>
          <p>
            Your Distribution Network Operator is not your energy supplier. It's the company responsible for the
            physical electricity cables and infrastructure in your area — the wires that bring electricity to your
            street. Most people never interact with their DNO directly and don't know who they are, because bills and
            customer service go through energy suppliers (Octopus, British Gas, E.ON, EDF, etc.) instead.
          </p>
          <p>
            There are six distribution network owners in Great Britain, operating across twelve licence areas. You can
            find your DNO by visiting{" "}
            <strong>www.energynetworks.org/customers/find-my-network-operator</strong> and entering your postcode.
          </p>

          <h2>The UK's Distribution Network Operators</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>DNO Name</th>
                  <th>Region</th>
                  <th>G98 Notification URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>National Grid Electricity Distribution (formerly Western Power Distribution)</td>
                  <td>East Midlands, West Midlands, South West, South Wales</td>
                  <td>nationalgrid.com/electricity-distribution</td>
                </tr>
                <tr>
                  <td>UK Power Networks</td>
                  <td>London, South East, East of England</td>
                  <td>ukpowernetworks.co.uk</td>
                </tr>
                <tr>
                  <td>Northern Powergrid</td>
                  <td>Yorkshire, North East England</td>
                  <td>northernpowergrid.com</td>
                </tr>
                <tr>
                  <td>Electricity North West</td>
                  <td>North West England (Greater Manchester, Cumbria, Lancashire)</td>
                  <td>enwl.co.uk</td>
                </tr>
                <tr>
                  <td>SP Manweb (Scottish Power Energy Networks)</td>
                  <td>Merseyside, Cheshire, North Wales</td>
                  <td>spenergynetworks.co.uk</td>
                </tr>
                <tr>
                  <td>SP Distribution (Scottish Power Energy Networks)</td>
                  <td>Central and Southern Scotland</td>
                  <td>spenergynetworks.co.uk</td>
                </tr>
                <tr>
                  <td>Scottish and Southern Electricity Networks (SSEN) — South</td>
                  <td>South of England (Hampshire, Dorset, Oxfordshire, parts of Berkshire and Surrey)</td>
                  <td>ssen.co.uk</td>
                </tr>
                <tr>
                  <td>Scottish and Southern Electricity Networks (SSEN) — North</td>
                  <td>North of Scotland (Highlands, Islands, Grampian)</td>
                  <td>ssen.co.uk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Note: Northern Ireland uses a separate network operated by NIE Networks (nienetworks.co.uk). The G98
            standard technically applies to Great Britain; Northern Ireland uses equivalent requirements under the
            Northern Ireland grid code.
          </p>

          <h2>What Information Do You Need?</h2>
          <p>
            Most DNOs have an online form for G98 notifications. Before you start, gather the following:
          </p>
          <ul>
            <li>Your full address and postcode</li>
            <li>Your MPAN (Meter Point Administration Number) — found on your electricity bill</li>
            <li>The type of generation (photovoltaic / solar)</li>
            <li>The installed capacity in kW (e.g. 0.6kW for a 600W system)</li>
            <li>The inverter make and model (e.g. Hoymiles HM-600, APsystems DS3-H)</li>
            <li>The inverter's G98 compliance status (check your inverter's documentation or the manufacturer's website)</li>
            <li>Your intended connection date</li>
          </ul>

          <h2>Step-by-Step: Completing Your G98 Notification</h2>
          <ol>
            <li>
              <strong>Find your DNO:</strong> Visit energynetworks.org or check your electricity bill. Your DNO is
              not your energy supplier — it's the network company for your area.
            </li>
            <li>
              <strong>Find the G98 notification form:</strong> Go to your DNO's website and search for "G98
              notification" or "connect generation." Most DNOs have a dedicated online portal.
            </li>
            <li>
              <strong>Complete the form:</strong> Fill in your address, MPAN, system details, and intended connection
              date. Most forms take 10–15 minutes.
            </li>
            <li>
              <strong>Submit and receive confirmation:</strong> You should receive an automated confirmation email
              immediately or within a few working days. Save this confirmation — it's your proof of notification.
            </li>
            <li>
              <strong>Connect your system:</strong> You can connect on the date you specified in your notification.
              You don't need to wait for a reply beyond the confirmation email.
            </li>
          </ol>

          <InfoBox variant="tip" title="Keep a copy of your confirmation">
            Store your G98 notification confirmation email somewhere safe. Your energy supplier may request it if you
            register for the Smart Export Guarantee, and it's useful evidence of compliance if any question ever arises.
          </InfoBox>

          <h2>What Happens If You Don't Notify?</h2>
          <p>
            Technically, connecting generation to the grid without completing a G98 notification is a breach of the
            regulatory requirement. In practice, enforcement is essentially zero. DNOs have no mechanism to detect that
            a small plug-in solar system has been connected to a home without notification — the system's output is
            indistinguishable from reduced consumption at the meter.
          </p>
          <p>
            There is no documented case of enforcement action against a residential balcony solar user in the UK for
            failing to submit a G98 notification. That said, it's worth notifying not because of enforcement risk, but
            because it's the right thing to do (the network operator needs to understand what's connected to their
            network over time) and because it takes very little time.
          </p>

          <h2>G98 Notification as a Renter</h2>
          <p>
            If you rent, you complete the G98 notification yourself as the person connecting the generation equipment.
            You don't need your landlord's involvement — the notification goes to the DNO, not to the property owner.
            You'll need your MPAN, which appears on your electricity bill (or you can ask your energy supplier for it).
          </p>
          <p>
            The DNO does not contact your landlord as a result of the notification. The notification is simply a
            record that a small generation unit is connected at your address.
          </p>

          <h2>What the Upcoming Legalisation Changes</h2>
          <p>
            The UK government's March 2026 announcement of formal legalisation for plug-in solar includes an
            expectation that the G98 notification process for very small systems will be simplified. The likely
            direction — following the German model — is a single centralised online registration rather than
            eight separate DNO-specific forms.
          </p>
          <p>
            For systems already notified under G98, no further action is expected to be required. If you notify now
            and the rules change later, your notification will remain valid. This guide will be updated as soon as
            the specific regulatory changes are confirmed.
          </p>

          <h2>G98 and Your Inverter</h2>
          <p>
            G98 also sets technical requirements for inverters connected to the grid, including anti-islanding
            protection (the inverter must automatically disconnect if the grid supply fails, to prevent back-feeding
            into a dead network and endangering line workers). All reputable micro-inverters sold for balcony solar —
            including those from Hoymiles, APsystems, and Deye — include G98-compliant anti-islanding protection.
          </p>
          <p>
            When completing your G98 notification form, you may be asked to confirm that your inverter meets the
            relevant technical requirements. Your inverter's datasheet or the manufacturer's UK compliance page will
            confirm G98 compliance. If you're buying a kit from a UK retailer, G98-compliant inverters should be
            standard — check before purchasing if you're buying from an international marketplace.
          </p>

          <h2>Next Steps</h2>
          <p>
            Once your G98 notification is submitted, you are ready to{" "}
            <Link href="/guides/how-to-install-balcony-solar">install your system</Link>. If you are new to balcony solar
            entirely, our <Link href="/guides/beginners-guide-to-balcony-solar">beginner's guide</Link> covers all the basics.
            For more detail on the technical requirements, see our{" "}
            <Link href="/uk-regulations/dno-g98-explained">DNO G98 regulatory explainer</Link>. And to estimate how much your
            system could save you, try our <Link href="/calculator">savings calculator</Link>.
          </p>
        </article>

        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Ready to get started?</h3>
          <p className="text-sm text-slate-600 mb-4">Find out how much you could save, or see our top-rated systems.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/calculator" className="inline-flex items-center justify-center bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors">Calculate your savings</Link>
            <Link href="/reviews/best-balcony-solar-kits-uk" className="inline-flex items-center justify-center bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm px-5 py-3 rounded-lg transition-colors">See top-rated kits</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "G98 DNO Notification for Balcony Solar",
            datePublished: "2026-03-15",
            dateModified: "2026-03-30",
            author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
            publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
          }),
        }}
      />
    </>
  );
}
