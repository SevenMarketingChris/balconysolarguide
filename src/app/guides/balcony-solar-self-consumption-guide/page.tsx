import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export const metadata: Metadata = {
  title: "Balcony Solar Self-Consumption: Why Your Payback Period Is Probably Longer Than You Think",
  description:
    "The honest guide to balcony solar self-consumption that no manufacturer tells you. Worked examples by household type, the maths on payback periods, and practical ways to increase your self-consumption.",
};

export default function SelfConsumptionGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Savings Guide"
        title="Balcony Solar Self-Consumption: Why Your Payback Period Is Probably Longer Than You Think"
        subtitle="Manufacturer payback claims often assume 100% self-consumption. Real households — especially those out at work all day — consume far less. Here is what the numbers actually look like, and what to do about it."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Self-Consumption Guide" },
          ]}
        />

        <article className="prose-solar">
          <h2>Section 1: What Self-Consumption Actually Means</h2>
          <p>
            Plug-in solar works differently from a rooftop solar installation with an export meter.
            When your balcony panels generate electricity, that power flows through your home's
            circuits and reduces the amount you draw from the grid — but only if your home is
            actually using electricity at that moment.
          </p>
          <p>
            If your 600W system is generating at full output on a sunny afternoon, and your home
            happens to be consuming 700W (the fridge, a laptop, a few lights), then all 600W of
            your solar generation is self-consumed. Your electricity meter slows by 600W worth of
            flow. You save 600Wh for every hour this continues.
          </p>
          <p>
            But if your system is generating 600W and your home is only drawing 150W — say, it is
            1pm on a weekday and you are at the office — then only 150W is self-consumed. The
            remaining 450W flows back into the grid through your meter. Unless you are registered
            for the Smart Export Guarantee (SEG), you earn nothing for that exported electricity.
            It is, in financial terms, wasted.
          </p>

          <h3>The SEG Registration Problem</h3>
          <p>
            You might reasonably ask: can I register for the Smart Export Guarantee and get paid for
            my exports? In theory, yes. In practice, for almost all plug-in balcony solar owners in
            the UK, currently no.
          </p>
          <p>
            SEG registration requires your installation to hold MCS (Microgeneration Certification
            Scheme) certification. This requires an MCS-accredited installer to carry out the
            installation and certify it. DIY plug-in solar installations — which is essentially
            every balcony solar system in the UK — cannot currently obtain MCS certification. The
            government's March 2026 legalisation framework is expected to address this eventually,
            but for now the SEG is out of reach for balcony solar owners.
          </p>
          <p>
            This means your financial return from balcony solar is determined entirely by the
            electricity you self-consume. Generation you do not use in real time is effectively
            donated to your energy supplier.
          </p>

          <InfoBox variant="info" title="Self-consumption is the key number">
            Manufacturers often quote annual generation as the headline figure — "generates 320 kWh
            per year." What matters for your finances is not what you generate, but what you
            actually use. For a household out at work all day, that may be less than half of what
            the panels produce.
          </InfoBox>

          <h2>Section 2: The Maths for Different Household Types</h2>
          <p>
            A 600W south-facing system in London generates approximately 320 kWh per year — a
            reasonable baseline for comparison. Here is what different household types typically
            self-consume, and what that means in pounds at 24p/kWh:
          </p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Household type</th>
                  <th>Typical self-consumption</th>
                  <th>600W annual generation</th>
                  <th>Annual saving (at 24p)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Retired / home all day</td>
                  <td>85–90%</td>
                  <td>~320 kWh</td>
                  <td>~£65–69</td>
                </tr>
                <tr>
                  <td>WFH 5 days/week</td>
                  <td>70–80%</td>
                  <td>~320 kWh</td>
                  <td>~£54–61</td>
                </tr>
                <tr>
                  <td>Mixed (part-time or hybrid working)</td>
                  <td>50–65%</td>
                  <td>~320 kWh</td>
                  <td>~£38–50</td>
                </tr>
                <tr>
                  <td>Out 9–5 Mon–Fri (commuter)</td>
                  <td>30–45%</td>
                  <td>~320 kWh</td>
                  <td>~£23–35</td>
                </tr>
                <tr>
                  <td>Weekend-only home</td>
                  <td>15–25%</td>
                  <td>~320 kWh</td>
                  <td>~£11–19</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The difference between being home all day and being out 9–5 is enormous: the retired
            household saves nearly three times as much per year from the same system.
          </p>
          <p>
            The reason manufacturers do not prominently feature these figures is straightforward:
            marketing calculations tend to assume 100% self-consumption, which produces the most
            impressive payback period. Some manufacturers use 80% as their default assumption, which
            is reasonable for a work-from-home household but wildly optimistic for a standard
            commuter. A figure of 40% self-consumption for a typical out-at-work household is a
            more accurate starting point.
          </p>

          <h2>Section 3: How to Increase Your Self-Consumption</h2>
          <p>
            The good news is that self-consumption can be significantly improved with relatively
            cheap, practical measures. The goal is to shift your home's electricity consumption to
            the hours when your panels are generating — typically 9am to 4pm, peaking around noon.
          </p>

          <h3>Smart Plugs and Appliance Timers</h3>
          <p>
            The single most cost-effective intervention. A smart plug with scheduling costs £10–£15.
            Set your dishwasher, washing machine, and tumble dryer to run at midday via a scheduled
            smart plug. These appliances collectively consume 1–3 kWh per cycle — run them at peak
            solar output and you maximise the proportion of that cycle powered by your panels.
          </p>
          <p>
            TP-Link Tapo, Amazon Smart Plug, and Meross all make reliable UK-compatible smart plugs
            with scheduling functions. You set the schedule once and forget it.
          </p>

          <h3>Immersion Heater / Hot Water Cylinder Timing</h3>
          <p>
            If your home has a hot water cylinder with an immersion heater (common in older UK
            properties and many flats), this is one of the highest-value loads you can shift. An
            immersion heater draws 2–3kW when running. Set it to run 10am–2pm and it will
            preferentially use your solar generation. A simple timer switch (available for under
            £20 from any electrical retailer) is sufficient — no smart plug needed.
          </p>
          <p>
            Note that a 600W balcony solar system will only partly cover a 3kW immersion heater,
            but it will offset a significant portion of that load during the hours it runs.
          </p>

          <h3>Home Battery Storage</h3>
          <p>
            A battery is the most effective way to raise self-consumption for households that are
            out during the day. Instead of exporting unused generation to the grid, the battery
            stores it and discharges it in the evening when you return home.
          </p>
          <p>
            A 1–2 kWh battery (such as the EcoFlow STREAM or Growatt NOAH 2000) paired with a
            600W system can push self-consumption from 35–45% to 80–90% for a typical commuter
            household. The battery fills during the day and powers your evening electricity use.
          </p>
          <p>
            Batteries add cost — typically £300–£600 for a unit suited to balcony solar — and this
            affects the payback calculation, though it dramatically changes the annual savings.
          </p>

          <h3>EV Charging During Peak Solar Hours</h3>
          <p>
            If you have an electric vehicle and a home charger, scheduling charging to coincide with
            peak solar generation can meaningfully increase self-consumption. A 600W solar system
            will only contribute a fraction of a full EV charge (most EVs charge at 3.6–7.4kW),
            but it offsets some grid draw during the charging session.
          </p>
          <p>
            Octopus Intelligent Octopus is a tariff and EV charging management service that
            automatically schedules EV charging to the cheapest overnight periods — it can be
            combined with daytime solar generation for a complete optimisation of home energy use.
          </p>

          <h3>Octopus Intelligent and Smart Tariff Integration</h3>
          <p>
            For those on Octopus Energy, the Octopus Intelligent ecosystem allows automated
            scheduling of home devices around tariff rates. While balcony solar without SEG
            registration cannot yet be integrated as a named generation source, the principle of
            aligning consumption with midday solar hours is compatible with Octopus smart tariff
            logic. See our{" "}
            <Link href="/guides/balcony-solar-smart-tariffs" className="text-solar-600 hover:text-solar-700 font-medium">
              smart tariffs guide
            </Link>{" "}
            for more detail.
          </p>

          <h2>Section 4: Is It Still Worth It? Honest Worked Examples</h2>
          <p>
            With realistic self-consumption figures, here is what the economics actually look like
            for different scenarios, using a 600W south-facing system in London with a kit cost of
            £399.
          </p>

          <h3>Scenario A: Commuter Household, No Battery</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-4">
            <div className="space-y-1 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-2">
                <span>Annual generation:</span><span className="font-medium">~320 kWh</span>
                <span>Self-consumption rate:</span><span className="font-medium">40%</span>
                <span>Units self-consumed:</span><span className="font-medium">~128 kWh</span>
                <span>Annual saving (at 24p):</span><span className="font-medium text-solar-700">~£31/year</span>
                <span>Kit cost:</span><span className="font-medium">£399</span>
                <span className="font-semibold">Payback period:</span><span className="font-semibold text-slate-800">~12.9 years</span>
              </div>
            </div>
          </div>
          <p>
            This is the scenario manufacturers do not feature prominently. A 12.9-year payback is
            within the panel's warranty period but is not a compelling financial argument on its
            own. The system will pay for itself, and will continue generating for 20+ years, but
            the financial case is modest.
          </p>

          <h3>Scenario B: Retired Household, No Battery</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-4">
            <div className="space-y-1 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-2">
                <span>Annual generation:</span><span className="font-medium">~320 kWh</span>
                <span>Self-consumption rate:</span><span className="font-medium">90%</span>
                <span>Units self-consumed:</span><span className="font-medium">~288 kWh</span>
                <span>Annual saving (at 24p):</span><span className="font-medium text-solar-700">~£69/year</span>
                <span>Kit cost:</span><span className="font-medium">£399</span>
                <span className="font-semibold">Payback period:</span><span className="font-semibold text-slate-800">~5.8 years</span>
              </div>
            </div>
          </div>
          <p>
            A 5.8-year payback with 20+ years of productive life is an excellent return. For
            households where someone is home throughout the day — retired, working from home, or
            caring for children — balcony solar makes very strong financial sense.
          </p>

          <h3>Scenario C: Commuter Household, With Battery (£400 battery)</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-4">
            <div className="space-y-1 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-2">
                <span>Annual generation:</span><span className="font-medium">~320 kWh</span>
                <span>Self-consumption rate:</span><span className="font-medium">85%</span>
                <span>Units self-consumed:</span><span className="font-medium">~272 kWh</span>
                <span>Annual saving (at 24p):</span><span className="font-medium text-solar-700">~£65/year</span>
                <span>Total cost (kit + battery):</span><span className="font-medium">£799</span>
                <span className="font-semibold">Payback period:</span><span className="font-semibold text-slate-800">~12.3 years</span>
              </div>
            </div>
          </div>
          <p>
            Adding a battery to the commuter household scenario nearly doubles the annual saving (from
            £31 to £65), but also significantly increases the upfront cost. The payback period stays
            similar because both saving and cost increase proportionally. The battery is most valuable
            as a way to get meaningful annual savings from a system that would otherwise produce very
            modest returns — turning £31/year into £65/year is the difference between "marginal" and
            "useful."
          </p>

          <InfoBox variant="tip" title="Use our calculator for your specific situation">
            These examples use typical figures. Your actual generation depends on your location,
            orientation, and shading. Use our{" "}
            <Link href="/calculator" className="underline">
              balcony solar savings calculator
            </Link>{" "}
            for a personalised estimate based on your postcode, orientation, and usage pattern.
          </InfoBox>

          <h2>The Honest Conclusion</h2>
          <p>
            Balcony solar makes strongest financial sense if you are home during the day. For a
            retired household or consistent home worker, a 600W system can pay back in under six
            years and deliver meaningful savings for two decades.
          </p>
          <p>
            For a standard office commuter household, the financial case without a battery is
            modest. The payback period is long, and the annual saving is real but small. A battery
            almost doubles the annual saving and transforms the economics — but it also raises the
            upfront cost substantially.
          </p>
          <p>
            There are also reasons beyond pure financial payback to install balcony solar: carbon
            reduction, energy independence, the satisfaction of generating your own power, and the
            value of being part of a market that is maturing rapidly. But if pure financial return is
            your primary consideration, be honest with yourself about how much time you actually
            spend at home during daylight hours.
          </p>
        </article>
      </div>
    </>
  );
}
