import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Can You Save with Balcony Solar in the UK?",
  datePublished: "2026-03-15",
  dateModified: "2026-03-30",
  author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
  publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
};

export const metadata: Metadata = {
  title: "How Much Can You Save with Balcony Solar in the UK?",
  description:
    "UK balcony solar savings estimates by region and system size, payback period calculations, self-consumption explained, and tips to maximise returns.",
};

export default function BalconySolarSavingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Guides"
        title="How Much Can You Save with Balcony Solar in the UK?"
        subtitle="Detailed savings estimates by UK region and system size, payback calculations, and practical steps to increase your self-consumption — so you get the most from every unit you generate."
        badge="Updated March 2026"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "How Much Can You Save?" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>The Variables That Determine Your Savings</h2>
          <p>
            Balcony solar savings aren't a fixed number — they depend on a combination of factors that vary significantly
            between households. Understanding these variables is essential for setting realistic expectations and making
            the right buying decision.
          </p>
          <ul>
            <li>
              <strong>System size:</strong> A 400W single-panel system generates roughly half the electricity of an
              800W dual-panel system. Output scales broadly linearly with panel wattage.
            </li>
            <li>
              <strong>Orientation:</strong> South-facing is optimal. East and west orientations deliver around 65–70%
              of south-facing output. North-facing is not viable.
            </li>
            <li>
              <strong>Location:</strong> The south of England receives around 30–40% more usable sunlight per year than
              northern Scotland.
            </li>
            <li>
              <strong>Shading:</strong> Partial shade during peak generation hours has a disproportionate effect on
              output — far more than sub-optimal orientation alone.
            </li>
            <li>
              <strong>Self-consumption rate:</strong> This is the single most important variable. It's the proportion
              of your generated electricity that you actually use in your home. The rest is exported to the grid at a
              very low rate (if any).
            </li>
            <li>
              <strong>Your electricity tariff:</strong> Every unit you self-consume is worth exactly what you'd otherwise
              pay for it. At 24p/kWh, 100kWh saved is £24. At 30p/kWh, it's £30.
            </li>
          </ul>

          <h2>Understanding Self-Consumption</h2>
          <p>
            Self-consumption is the proportion of your solar generation that you actually use as it's produced. It's the
            most misunderstood aspect of balcony solar economics.
          </p>
          <p>
            When your panels are generating 500W and your home is drawing 800W from the grid, all 500W of your solar
            output is self-consumed — you're simply drawing 300W from the grid instead of 800W. Your meter effectively
            slows by 500W worth of flow.
          </p>
          <p>
            But when your panels are generating 500W and your home is only drawing 200W, only 200W is self-consumed.
            The remaining 300W flows back into the grid — and unless you're on a specific export tariff, you earn little
            or nothing for it. That 300W is wasted in financial terms.
          </p>
          <p>
            Average self-consumption rates for balcony solar users in the UK (see our{" "}
            <Link href="/guides/balcony-solar-self-consumption-guide">detailed self-consumption guide</Link>{" "}
            for a full breakdown by household type):
          </p>
          <ul>
            <li><strong>Home all day (retired, works from home):</strong> 55–70%</li>
            <li><strong>Mixed presence (part-time, shift work):</strong> 35–55%</li>
            <li><strong>Out all day on weekdays (office commuter):</strong> 20–35%</li>
            <li><strong>With a battery, any household:</strong> 75–90%</li>
          </ul>

          <InfoBox variant="tip" title="Smart plugs and timers can double your self-consumption">
            Setting your washing machine, dishwasher, or slow cooker to run at midday via a cheap scheduling smart plug
            can increase self-consumption from 30% to 55–65% without any other changes. The appliances run when your
            panels are at peak output, and you never notice the difference.
          </InfoBox>

          <h2>Estimated Annual Savings by Region and System Size</h2>
          <p>
            The following table assumes south-facing orientation, no significant shading, and 50% self-consumption
            (a reasonable middle estimate for a working household). The electricity unit rate used is 24p/kWh.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>400W System</th>
                  <th>600W System</th>
                  <th>800W System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>South England (London, Brighton, Southampton)</td>
                  <td>£50–£58</td>
                  <td>£75–£87</td>
                  <td>£100–£116</td>
                </tr>
                <tr>
                  <td>South West (Bristol, Exeter, Plymouth)</td>
                  <td>£52–£60</td>
                  <td>£78–£90</td>
                  <td>£104–£120</td>
                </tr>
                <tr>
                  <td>East Anglia (Norwich, Cambridge, Ipswich)</td>
                  <td>£49–£57</td>
                  <td>£73–£85</td>
                  <td>£97–£113</td>
                </tr>
                <tr>
                  <td>Midlands (Birmingham, Leicester, Nottingham)</td>
                  <td>£44–£52</td>
                  <td>£66–£78</td>
                  <td>£88–£104</td>
                </tr>
                <tr>
                  <td>Wales (Cardiff, Swansea)</td>
                  <td>£43–£51</td>
                  <td>£64–£76</td>
                  <td>£85–£101</td>
                </tr>
                <tr>
                  <td>North England (Manchester, Leeds, Sheffield)</td>
                  <td>£40–£48</td>
                  <td>£60–£72</td>
                  <td>£80–£96</td>
                </tr>
                <tr>
                  <td>North East (Newcastle, Sunderland)</td>
                  <td>£37–£45</td>
                  <td>£56–£68</td>
                  <td>£74–£90</td>
                </tr>
                <tr>
                  <td>Scotland (Edinburgh, Glasgow)</td>
                  <td>£35–£44</td>
                  <td>£52–£66</td>
                  <td>£69–£88</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Figures assume 50% self-consumption and 24p/kWh tariff rate. Actual savings will vary. For east or west
            facing installations, multiply by approximately 0.67.
          </p>

          <h2>Worked Example: 600W South-Facing, London</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-6">
            <p className="font-semibold text-slate-800 mb-3">Full Worked Calculation</p>
            <div className="space-y-1 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-2">
                <span>System size:</span><span className="font-medium">600W (2 × 300W panels)</span>
                <span>Location:</span><span className="font-medium">London (south-facing)</span>
                <span>Peak sun hours per year:</span><span className="font-medium">~1,050</span>
                <span>Performance ratio (losses, temp, inverter):</span><span className="font-medium">0.78</span>
                <span>Estimated annual generation:</span><span className="font-medium">0.6kW × 1,050h × 0.78 = ~491 kWh</span>
                <span>Self-consumption rate (working household):</span><span className="font-medium">50%</span>
                <span>Units self-consumed per year:</span><span className="font-medium">~246 kWh</span>
                <span>Electricity unit rate:</span><span className="font-medium">24p/kWh</span>
                <span className="font-semibold">Annual saving:</span><span className="font-semibold text-solar-700">~£59/year</span>
              </div>
              <p className="mt-3 text-slate-600">
                If self-consumption rises to 70% (e.g. working from home, or using timers), annual savings increase to
                approximately £82/year. With a battery pushing self-consumption to 85%, savings reach ~£100/year.
              </p>
            </div>
          </div>

          <h2>Payback Periods</h2>
          <p>
            Payback period is the time it takes for your energy savings to equal the upfront cost of the system. For
            balcony solar, this varies considerably based on system cost, location, and self-consumption behaviour.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>System Cost</th>
                  <th>Annual Saving</th>
                  <th>Payback Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>600W, London, 50% self-consumption</td>
                  <td>£499</td>
                  <td>£59/yr</td>
                  <td>~8.5 years</td>
                </tr>
                <tr>
                  <td>600W, London, 70% self-consumption (WFH)</td>
                  <td>£499</td>
                  <td>£82/yr</td>
                  <td>~6 years</td>
                </tr>
                <tr>
                  <td>800W, London, 50% self-consumption</td>
                  <td>£649</td>
                  <td>£80/yr</td>
                  <td>~8 years</td>
                </tr>
                <tr>
                  <td>800W, London, with battery, 85% self-consumption</td>
                  <td>£1,100</td>
                  <td>£133/yr</td>
                  <td>~8 years</td>
                </tr>
                <tr>
                  <td>600W, Manchester, 50% self-consumption</td>
                  <td>£499</td>
                  <td>£50/yr</td>
                  <td>~10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Solar panels typically carry 25-year performance warranties, and a well-maintained balcony solar system
            should generate usable electricity for 20+ years. A payback period of 6–10 years therefore represents a
            solid long-term return — equivalent to a guaranteed 10–17% annual return on investment, tax-free, over the
            productive lifetime of the system.
          </p>

          <InfoBox variant="info" title="Rising electricity prices improve payback">
            These calculations use today's electricity price of approximately 24p/kWh. If electricity prices rise — as
            most analysts expect them to over the coming decade, absent major policy changes — your annual savings will
            increase proportionally, shortening the payback period. A 25% increase in electricity prices would reduce
            the payback on the above examples by roughly two years.
          </InfoBox>

          <h2>How to Maximise Your Savings</h2>

          <h3>Use Smart Plugs and Timers</h3>
          <p>
            Scheduling your washing machine, dishwasher, and other high-draw appliances to run during peak solar
            generation hours (roughly 10am–2pm) is the single most impactful thing you can do to increase
            self-consumption. Smart plugs with scheduling (Tapo, TP-Link, Amazon Smart Plug) cost £10–£15 and can
            pay for themselves many times over in improved self-consumption.
          </p>

          <h3>Add a Battery</h3>
          <p>
            As discussed in our <Link href="/guides/balcony-solar-battery-storage">battery storage guide</Link>, adding a
            1–2kWh battery to your balcony solar system can push self-consumption from 30–50% to 80–90%, dramatically
            improving financial returns for households that are out during the day.
          </p>

          <h3>Choose the Right Tariff</h3>
          <p>
            On a flat-rate tariff at 24p, all self-consumed electricity saves you 24p. On a time-of-use tariff with
            higher peak rates, the electricity you avoid buying during peak periods saves you more — and if you can
            shift consumption to align with your solar generation, you can optimise further. See our{" "}
            <Link href="/guides/balcony-solar-smart-tariffs">smart tariffs guide</Link> for full details.
          </p>

          <h3>Avoid Unnecessary Shading</h3>
          <p>
            Shading reduces output more significantly than you might expect, because many micro-inverters work at panel
            level — if one panel is shaded, that panel's output drops significantly. Keep panels free from dust,
            bird droppings, and seasonal overhang from trees or neighbouring structures.
          </p>

          <h2>Use Our Calculator</h2>
          <p>
            For a personalised estimate based on your postcode, balcony orientation, system size, and consumption
            habits, use our interactive{" "}
            <Link href="/calculator" className="text-solar-600 hover:text-solar-700 font-medium">
              balcony solar savings calculator
            </Link>
            . It uses PVGIS irradiance data for UK locations to generate the most accurate possible output estimate.
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
