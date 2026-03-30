import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maximising Balcony Solar with Smart Energy Tariffs",
  datePublished: "2026-03-15",
  dateModified: "2026-03-30",
  author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
  publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
};

export const metadata: Metadata = {
  title: "Maximising Balcony Solar with Smart Energy Tariffs",
  description:
    "Which UK electricity tariff works best with balcony solar? Compare Octopus Agile, Flux, Intelligent Go, E.ON Next Drive, and OVO with worked examples.",
};

export default function BalconySolarSmartTariffsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Guides"
        title="Maximising Balcony Solar with Smart Energy Tariffs"
        subtitle="Your choice of electricity tariff has a direct bearing on the value of your balcony solar system. Here's how the main UK smart tariffs interact with plug-in solar — and which to consider."
        badge="Updated March 2026"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Smart Tariffs" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>Why Tariff Choice Matters for Balcony Solar</h2>
          <p>
            Balcony solar saves you money by reducing how much electricity you buy from the grid. Every kilowatt-hour
            your panels generate that you use immediately is a kilowatt-hour you don't buy from your supplier. At the
            current standard rate of approximately 24–25p/kWh (the price cap rate as of early 2026), a 600W system in
            London generating around 550kWh per year could save £132 annually if you used every kilowatt-hour yourself.
          </p>
          <p>
            But here's the thing: the price you pay for grid electricity varies widely depending on your tariff. If
            you're on a flat-rate tariff at 24p, every unit your panels generate is worth 24p. But on Octopus Agile,
            electricity prices change every half hour — during peak evening periods they might be 40p or more; during
            overnight or midday periods they might be 5p or even negative. The value of your self-generated electricity
            is effectively the price you would otherwise have paid for it at that moment.
          </p>
          <p>
            This creates an interesting dynamic: the "value" of your solar generation is determined by when you use it
            relative to peak pricing periods. And unlike with rooftop solar, you're not typically exporting enough to
            worry about export rates — you're optimising import avoidance.
          </p>

          <InfoBox variant="tip" title="Balcony solar rarely generates meaningful export income">
            Balcony solar works by reducing your grid draw in real time. Most systems don't generate enough surplus to
            make Smart Export Guarantee (SEG) registration worthwhile — you'd need a smart meter, a SEG agreement with
            your supplier, and sufficient surplus generation. The better approach is to maximise self-consumption.
          </InfoBox>

          <h2>The Main UK Smart Tariffs for Balcony Solar Users</h2>

          <h3>Octopus Agile</h3>
          <p>
            Octopus Agile is the most dynamic time-of-use tariff available in the UK. Prices are set every half hour
            based on wholesale electricity markets, and customers receive tomorrow's prices by early afternoon each day.
            Prices typically range from around 8p to 35p/kWh during normal conditions, with peak periods (4–7pm
            weekdays) often hitting 30–40p and overnight periods often below 10p.
          </p>
          <p>
            For balcony solar users, Agile has two benefits. First, your midday solar generation — which coincides with
            relatively lower Agile prices, but still avoids 15–25p rates — reduces your grid draw at those times.
            Second, you can schedule energy-intensive appliances (dishwashers, washing machines, EV charging) for the
            cheapest Agile slots, which are often overnight or midday — the latter coinciding helpfully with peak solar
            generation.
          </p>
          <p>
            A smart meter is required for Octopus Agile. Octopus also offers an Agile Outgoing tariff for export,
            though as noted above, few balcony solar users will generate meaningful export income without a battery.
          </p>
          <p>
            <strong>Best for:</strong> Engaged users who are willing to shift consumption habits, particularly those
            with batteries who can charge cheaply overnight and discharge during peak periods.
          </p>

          <h3>Octopus Flux</h3>
          <p>
            Octopus Flux is designed specifically for homes with solar and battery storage. It has three fixed-price
            periods: off-peak (overnight, typically around 16p), standard, and peak (typically around 35p). Crucially,
            it also offers an export rate during peak periods — meaning if you export during 4–7pm, you earn a premium
            rate.
          </p>
          <p>
            For balcony solar users with a battery, Flux can be highly attractive: charge the battery cheaply
            overnight, use the stored energy during the peak period instead of buying expensive grid electricity, and if
            you generate a surplus from your panels, export it at the premium peak rate.
          </p>
          <p>
            <strong>Best for:</strong> Balcony solar users who have added battery storage and want to maximise the
            combined value through import/export optimisation.
          </p>

          <h3>Intelligent Octopus Go</h3>
          <p>
            Octopus Go is a simpler time-of-use tariff aimed primarily at EV owners. It offers a cheap overnight rate
            (typically 6–7p/kWh between midnight and 5am or 6am) and a standard rate for the rest of the day. For
            balcony solar users, the cheap overnight window is useful for charging batteries, but the tariff doesn't
            have a premium peak rate or the flexibility of Agile.
          </p>
          <p>
            <strong>Best for:</strong> Balcony solar users who also have an EV and want a simple two-rate structure
            rather than the complexity of Agile.
          </p>

          <h3>E.ON Next Drive</h3>
          <p>
            E.ON Next Drive offers a similarly structured day/night tariff with a cheap off-peak period (typically 8pm
            to 8am at around 12–15p) and a standard rate during the day. For balcony solar users, this means your
            midday solar generation coincides with the standard (higher) rate — which is the right direction — and
            overnight you can charge batteries cheaply.
          </p>
          <p>
            <strong>Best for:</strong> E.ON customers who want a simple time-of-use tariff with a battery storage setup.
          </p>

          <h3>OVO Charge Anytime</h3>
          <p>
            OVO's Charge Anytime tariff targets primarily EV owners but also benefits battery users. OVO also has
            broader smart energy offerings that evolve regularly. As a balcony solar user with OVO, you should
            specifically ask about their current solar-compatible offerings, as the product range changes.
          </p>
          <p>
            <strong>Best for:</strong> Existing OVO customers who don't want to switch supplier.
          </p>

          <h2>Tariff Comparison for Balcony Solar Users</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Tariff</th>
                  <th>Structure</th>
                  <th>Smart Meter Required?</th>
                  <th>Export Rate?</th>
                  <th>Best Suited To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Octopus Agile</td>
                  <td>30-min variable pricing</td>
                  <td>Yes</td>
                  <td>Agile Outgoing</td>
                  <td>Active users, battery owners</td>
                </tr>
                <tr>
                  <td>Octopus Flux</td>
                  <td>3-period (off-peak/std/peak)</td>
                  <td>Yes</td>
                  <td>Yes (peak export premium)</td>
                  <td>Battery owners, solar exporters</td>
                </tr>
                <tr>
                  <td>Intelligent Octopus Go</td>
                  <td>2-period (cheap overnight)</td>
                  <td>Yes</td>
                  <td>Outgoing Go</td>
                  <td>EV owners + balcony solar</td>
                </tr>
                <tr>
                  <td>E.ON Next Drive</td>
                  <td>2-period (cheap overnight)</td>
                  <td>Yes</td>
                  <td>No dedicated rate</td>
                  <td>E.ON customers with battery</td>
                </tr>
                <tr>
                  <td>Standard flat rate</td>
                  <td>Single unit rate ~24p</td>
                  <td>No</td>
                  <td>SEG separately</td>
                  <td>Set-and-forget users, no battery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Smart Meters and Plug-In Solar</h2>
          <p>
            A smart meter is not required to use balcony solar, but it is required for time-of-use tariffs and for
            registering for the Smart Export Guarantee. If you have an older SMETS1 meter or no smart meter at all,
            you can still use balcony solar on a standard tariff — your meter will simply run slower when your panels
            are generating.
          </p>
          <p>
            SMETS2 smart meters (installed from around 2019 onwards) measure import and export separately in half-hour
            intervals. This means your energy supplier can see exactly how much you're exporting — which matters if
            you register for SEG. For balcony solar users without a battery, visible exports are likely to be small;
            with a battery, they can be managed actively to occur during premium-price periods.
          </p>

          <h2>The SEG: Is It Worth Registering?</h2>
          <p>
            The Smart Export Guarantee (SEG) is a government-mandated scheme requiring energy suppliers above a certain
            size to offer a tariff that pays you for electricity you export. Export rates vary by supplier — typically
            3–15p/kWh depending on tariff.
          </p>
          <p>
            For most balcony solar users without battery storage, the SEG is barely relevant. A 600W system generating
            550kWh in London, with 70% self-consumption, exports only 165kWh annually. At 5p/kWh SEG rate, that's £8.25
            per year. The administrative hassle of registering, providing inverter details, and switching to a
            SEG-eligible tariff is hard to justify for £8.
          </p>
          <p>
            The picture changes if you add a battery and actively manage exports to coincide with premium periods on
            a tariff like Octopus Flux — but even then, the export volumes from a balcony solar system are small
            enough that the SEG contribution is secondary to the import-avoidance savings.
          </p>

          <InfoBox variant="info" title="Balcony solar works by reducing your draw from the grid">
            The core financial mechanism is always import avoidance — using what you generate rather than buying it.
            Export income is a secondary consideration, and for most balcony solar users it's not worth pursuing
            separately from choosing the right tariff for your consumption habits.
          </InfoBox>

          <h2>Practical Tip: Shift Your Consumption to Match Generation</h2>
          <p>
            Regardless of tariff, the most impactful thing you can do to improve the value of your balcony solar system
            is to run energy-intensive appliances when your panels are generating. Set your washing machine and
            dishwasher to run at midday rather than in the morning or evening. If you have a battery charger for tools
            or devices, charge them during daylight hours. This consumption shifting works on any tariff and requires no
            smart technology — just habit adjustment.
          </p>
          <p>
            Smart plugs with scheduling functionality (available from Tapo, TP-Link, and others for under £15 each)
            make this effortless: plug your washing machine into a scheduled smart plug set to run at 11am, and it
            happens automatically.
          </p>

          <h2>Related Guides</h2>
          <ul>
            <li>
              <Link href="/guides/balcony-solar-savings-uk" className="text-solar-600 hover:text-solar-700 font-medium">
                How much can you save with balcony solar?
              </Link>{" "}
              — detailed savings estimates by region and system size
            </li>
            <li>
              <Link href="/guides/balcony-solar-battery-storage" className="text-solar-600 hover:text-solar-700 font-medium">
                Battery storage for balcony solar
              </Link>{" "}
              — how batteries unlock the full potential of smart tariffs
            </li>
            <li>
              <Link href="/guides/balcony-solar-seg-tariffs" className="text-solar-600 hover:text-solar-700 font-medium">
                Smart Export Guarantee and balcony solar
              </Link>{" "}
              — can you get paid for electricity you export?
            </li>
            <li>
              <Link href="/calculator" className="text-solar-600 hover:text-solar-700 font-medium">
                Savings calculator
              </Link>{" "}
              — get a personalised estimate based on your location and setup
            </li>
          </ul>

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
