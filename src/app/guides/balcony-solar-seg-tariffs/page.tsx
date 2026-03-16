import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export const metadata: Metadata = {
  title: "Smart Export Guarantee (SEG) and Balcony Solar: Can You Get Paid for Excess Generation?",
  description:
    "Can UK balcony solar owners register for the Smart Export Guarantee? The honest answer, current SEG rates, the MCS certification problem, and what is expected to change after legalisation.",
};

export default function SegTariffsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tariffs & Export"
        title="Smart Export Guarantee (SEG) and Balcony Solar: Can You Get Paid for Excess Generation?"
        subtitle="The Smart Export Guarantee pays for electricity you export to the grid — but can balcony solar owners actually register? The current position, the MCS certification barrier, and what is expected to change."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "SEG and Balcony Solar" },
          ]}
        />

        <article className="prose-solar">
          <h2>Section 1: What Is the Smart Export Guarantee?</h2>
          <p>
            The Smart Export Guarantee (SEG) is a government-backed scheme requiring energy
            suppliers with 150,000 or more domestic customers to offer a tariff that pays for
            electricity you export to the grid. It replaced the Feed-in Tariff (FiT), which closed
            to new applications in March 2019, and came into effect from 1 January 2020.
          </p>
          <p>
            Unlike the old Feed-in Tariff, the SEG does not have a fixed government-set rate. Each
            eligible supplier sets its own export rate, and these vary considerably — from less than
            1p/kWh to over 15p/kWh, depending on the supplier and tariff product. Ofgem publishes
            a register of all approved SEG licensees and their current rates, which is the
            definitive source for current figures.
          </p>
          <p>
            The mechanism is simple in principle. You install generation equipment (solar panels,
            wind, hydro, or other eligible technologies), register with a SEG licensee, and a smart
            meter records your export. At the end of each billing period, the SEG payment is
            credited to your account. Payments are based on actual export measured in kilowatt-hours.
          </p>
          <p>
            To export, your meter must either be a smart meter (first generation SMETS1 or second
            generation SMETS2) or have a separate export meter. Most UK homes now have smart meters,
            and SMETS2 meters in particular can measure export directly. If you have an older
            non-smart meter, export cannot be accurately measured and SEG registration is not
            possible without a meter upgrade.
          </p>

          <h2>Section 2: The MCS Certification Problem</h2>
          <p>
            Here is where the good news stops for most balcony solar owners: to register for the
            Smart Export Guarantee, your installation must hold certification under the
            Microgeneration Certification Scheme (MCS).
          </p>
          <p>
            MCS is an industry-managed quality assurance scheme for small-scale renewable energy
            installations. It certifies both the equipment (panels, inverters) and the installer.
            For an installation to hold MCS certification:
          </p>
          <ul>
            <li>The installation must be carried out by an MCS-accredited installer.</li>
            <li>
              The equipment used (panels and inverter) must each be individually listed on the MCS
              product database.
            </li>
            <li>
              The installer must complete an MCS installation certificate for your specific
              installation, which is registered with MCS.
            </li>
          </ul>
          <p>
            Currently, there is no MCS certification pathway for DIY plug-in solar installations.
            The MCS scheme covers rooftop solar systems installed by qualified contractors — it is
            not designed for a consumer plugging a cable into a socket. No MCS-accredited installer
            would certify a plug-in balcony solar installation under the current scheme rules,
            because the plug-in installation method does not conform to the certified installation
            standards.
          </p>
          <p>
            The practical consequence: virtually all UK balcony solar owners cannot currently
            register for the SEG. You can generate electricity, you can self-consume it, but you
            cannot earn SEG payments for what you export.
          </p>

          <InfoBox variant="warning" title="SEG is not currently available for balcony solar">
            As of March 2026, DIY plug-in balcony solar installations cannot be registered for the
            Smart Export Guarantee due to the MCS certification requirement. This is expected to
            change as part of the government's legalisation framework, but no simplified pathway is
            yet in place.
          </InfoBox>

          <h2>Section 3: Current SEG Rates from Major Suppliers</h2>
          <p>
            SEG rates change frequently — suppliers revise them based on wholesale electricity
            prices, competitive positioning, and policy. The figures below are approximate rates as
            of early 2026; always check Ofgem's SEG register for current rates before making any
            financial decisions.
          </p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>Approx. SEG rate</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Octopus Energy</td>
                  <td>~15p/kWh</td>
                  <td>Flux tariff can exceed this during peak periods</td>
                </tr>
                <tr>
                  <td>OVO Energy</td>
                  <td>~12p/kWh</td>
                  <td>Standard export product</td>
                </tr>
                <tr>
                  <td>E.ON Next</td>
                  <td>~10.5p/kWh</td>
                  <td>Variable, check current rates</td>
                </tr>
                <tr>
                  <td>Scottish Power</td>
                  <td>~6p/kWh</td>
                  <td>Lower rate than leading suppliers</td>
                </tr>
                <tr>
                  <td>EDF</td>
                  <td>~3.5p/kWh</td>
                  <td>Minimum SEG obligation rate</td>
                </tr>
                <tr>
                  <td>British Gas</td>
                  <td>~3p/kWh</td>
                  <td>Minimum obligation rate only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500">
            Rates as of early 2026 — approximate only. Verify on{" "}
            <a
              href="https://www.ofgem.gov.uk/check-if-energy-company-is-ofgem-licensed/smart-export-guarantee-registered-suppliers"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ofgem's SEG register
            </a>{" "}
            before making decisions.
          </p>

          <p>
            The spread between the best and worst rates is dramatic: Octopus Energy's export rate
            is five times that of British Gas. For a household with significant export, switching
            supplier to maximise the SEG rate (once you are eligible) makes material financial
            difference.
          </p>

          <h2>Section 4: Does This Matter for Balcony Solar Right Now?</h2>
          <p>
            For most balcony solar owners, the SEG is currently irrelevant in practice — not because
            export does not occur, but because you cannot register to receive payment for it.
          </p>
          <p>
            To put the potential value in context: a 600W south-facing system in London generates
            approximately 320 kWh per year. For a commuter household with 40% self-consumption, the
            remaining 192 kWh is exported to the grid. At the best current SEG rate (15p/kWh from
            Octopus), that would be worth £28.80 per year. At British Gas's rate, it would be £5.76.
          </p>
          <p>
            These are not transformative amounts, but £28.80/year is not nothing — particularly when
            it is currently being earned by your energy supplier rather than you. Over a 20-year
            system life, that is approximately £576 in forgone export income even at the best
            current rate.
          </p>
          <p>
            For a household with higher export (larger system, lower self-consumption), the numbers
            are proportionally larger. And if SEG rates rise — which some analysts expect as the
            grid increasingly needs to manage distributed generation — the value of export payments
            will increase further.
          </p>

          <h2>Section 5: What Is Changing</h2>
          <p>
            The government's March 2026 legalisation announcement explicitly acknowledged the SEG
            gap for plug-in solar owners. Ofgem has been consulting on whether a simplified SEG
            registration pathway — potentially without full MCS certification — could be created
            for plug-in solar devices below a defined power threshold.
          </p>
          <p>
            The key questions under consultation are:
          </p>
          <ul>
            <li>
              Whether export metering accuracy is sufficient for SEG payments without a dedicated
              generation meter (answer: smart meters can measure export accurately, so yes).
            </li>
            <li>
              What the minimum quality standard should be for a plug-in solar device to qualify for
              SEG export payments — likely tied to the BSI standard currently under development.
            </li>
            <li>
              Whether a simple online registration (similar to Germany's Marktstammdatenregister)
              could replace the full MCS installation certificate for plug-in devices below 1kW.
            </li>
          </ul>
          <p>
            The expectation in the industry is that a simplified SEG pathway for plug-in solar will
            be part of the full legalisation package, likely in 2027. Until then, SEG payments
            remain out of reach for balcony solar owners regardless of installation quality.
          </p>

          <h2>Section 6: Octopus Flux and Smart Tariff Interaction</h2>
          <p>
            For those with battery storage systems — particularly systems like the EcoFlow STREAM or
            Growatt NOAH 2000 that combine plug-in solar with an integrated battery — the interaction
            with smart tariffs is worth understanding, even if SEG registration is not yet available.
          </p>
          <p>
            Octopus Flux is a tariff product that offers:
          </p>
          <ul>
            <li>
              <strong>Cheap overnight import</strong> — typically around 17–20p/kWh from midnight
              to 4am, compared to the standard rate of around 24p/kWh.
            </li>
            <li>
              <strong>Mid-rate daytime import</strong> — roughly 24–28p/kWh during normal hours.
            </li>
            <li>
              <strong>Premium peak export</strong> — 28–32p/kWh during the 4pm–7pm peak period,
              for customers who export to the grid.
            </li>
          </ul>
          <p>
            The Flux strategy for a battery owner is to charge the battery cheaply overnight (using
            the cheap import rate), fill any remaining capacity with solar during the day, and then
            discharge the battery to the grid during the premium peak period — or use it to avoid
            buying expensive peak electricity.
          </p>
          <p>
            Currently, balcony solar owners cannot register as SEG exporters, so the export premium
            on Flux is not accessible. However, the import benefits still apply: charging your
            battery overnight at 17p and discharging it in the evening instead of buying at 28p is
            worthwhile independently of solar generation. The solar generation then provides the
            free daytime charging that makes the system even more effective.
          </p>
          <p>
            See our{" "}
            <Link
              href="/guides/balcony-solar-smart-tariffs"
              className="text-solar-600 hover:text-solar-700 font-medium"
            >
              smart tariffs guide
            </Link>{" "}
            for a full breakdown of how balcony solar interacts with time-of-use tariffs.
          </p>

          <InfoBox variant="tip" title="Stay informed — SEG access is coming">
            The SEG position for balcony solar is expected to change materially in 2027. Keep an
            eye on our news section for updates. When a simplified registration pathway is
            confirmed, switching to an Octopus Energy SEG tariff will likely be the best first
            step.
          </InfoBox>
        </article>
      </div>
    </>
  );
}
