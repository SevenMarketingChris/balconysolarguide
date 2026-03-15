import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export default function BuildingRegulationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="UK Regulations"
        title="Building Regulations and BS 7671 for Balcony Solar"
        subtitle="Plug-in solar occupies a grey area in UK wiring regulations — but it's a well-understood grey area. Here's what the regulations actually say and why most modern UK homes are well-protected."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "UK Regulations", href: "/uk-regulations" },
            { label: "Building Regulations & BS 7671" },
          ]}
        />

        {/* The grey area */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Regulatory Grey Area — Explained Clearly</h2>
          <p className="text-slate-600 mb-4">
            BS 7671, the IET Wiring Regulations (currently the 18th Edition, Amendment 2), is the standard that
            governs all fixed electrical installations in the UK. It is not a statutory instrument — compliance is not
            directly enforceable by law — but it is incorporated by reference into Building Regulations Part P
            (Electrical Safety in Dwellings) and is treated as the definitive standard for safe electrical work.
          </p>
          <p className="text-slate-600 mb-4">
            BS 7671 does not explicitly address plug-in balcony solar systems. This is the source of the "grey area"
            — the standard was written before plug-in solar became a product category, and it has not yet been updated
            to include specific provisions for it. The BSI is currently working to address this.
          </p>
          <p className="text-slate-600">
            However, "not explicitly addressed" is very different from "prohibited" or "unsafe." The relevant
            question is whether existing provisions in BS 7671 adequately cover the safety considerations involved in
            plug-in solar — and for most modern UK homes, the answer is yes.
          </p>
        </section>

        {/* The technical concern */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Technical Concern: Reverse Current Flow</h2>
          <p className="text-slate-600 mb-4">
            The main technical concern with plug-in solar connected to a ring circuit is the direction of current
            flow. In a standard ring circuit, current flows from the consumer unit (fuseboard) to appliances. A
            plug-in solar system connected to a socket on that ring circuit feeds current in the opposite direction —
            potentially back towards the consumer unit.
          </p>
          <p className="text-slate-600 mb-4">
            The concern: older-style circuit breakers and fuses were designed with single-directional current flow in
            mind, and there was a theoretical possibility that reverse current could bypass protective devices. This
            concern was legitimate for older consumer units but has been substantially addressed by modern wiring.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Older consumer units (pre-2016)</h3>
              <p className="text-sm text-red-700">
                Consumer units with a single whole-board RCD and MCBs (miniature circuit breakers) have RCD
                protection only on certain circuits. Reverse current from plug-in solar could theoretically feed
                circuits without bidirectional RCD protection. This is the scenario that prompted the most caution
                from electricians.
              </p>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Modern consumer units (post-2016)</h3>
              <p className="text-sm text-green-700">
                Modern consumer units installed since the 2016 amendments to Part P must use RCBOs (Residual Current
                Breaker with Overload protection) — individual protective devices on each circuit that provide
                full bidirectional protection. These handle reverse current flow from plug-in solar effectively.
              </p>
            </div>
          </div>
        </section>

        <InfoBox variant="tip" title="Quick check for your home">
          Open your consumer unit (fuseboard) and look at the circuit breakers. If each circuit has its own individual
          device (often labelled RCBO), you have modern protection and are well-covered for plug-in solar. If you have
          a large RCD switch at the top covering multiple MCBs below it, you have an older-style board. In either case,
          the practical risk is low, but a newer board is a cleaner installation from a regulatory perspective.
        </InfoBox>

        {/* G99 vs G98 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">G99 vs G98: Which Applies to Balcony Solar?</h2>
          <p className="text-slate-600 mb-4">
            Engineering Recommendation G98 and G99 are the DNO (Distribution Network Operator) connection standards
            for small generators. The distinction is based on output capacity:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Standard</th>
                  <th className="text-left px-4 py-3 font-semibold">Applies to</th>
                  <th className="text-left px-4 py-3 font-semibold">Process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-green-50">
                  <td className="px-4 py-3 font-semibold text-green-800">G98</td>
                  <td className="px-4 py-3 text-slate-700">Up to 3.68kW single-phase (or 11.04kW three-phase)</td>
                  <td className="px-4 py-3 text-slate-700">Notification only — submit form, receive acknowledgement</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-slate-800">G99</td>
                  <td className="px-4 py-3 text-slate-700">Over 3.68kW (larger systems)</td>
                  <td className="px-4 py-3 text-slate-700">Full application — requires engineering assessment and approval</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600">
            All balcony solar systems currently on the market — the EcoFlow STREAM (800W inverter), Anker SOLIX
            (800W), Jackery Navi 2000 (400W), and Plug-in Solar kit (600W) — are well below the 3.68kW G98
            threshold. They all fall under G98, which is a simple notification process, not an approval process. You
            cannot be refused under G98. See our{" "}
            <Link href="/uk-regulations/dno-g98-explained" className="text-solar-600 underline font-semibold">
              full G98 notification guide
            </Link>
            .
          </p>
        </section>

        {/* Part P */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Building Regulations Part P: Does It Apply?</h2>
          <p className="text-slate-600 mb-4">
            Part P of the Building Regulations (Electrical Safety in Dwellings) applies to electrical installation
            work in dwellings. It requires that certain types of work — including work in kitchens, bathrooms, or
            outdoors — be carried out by a competent person or notified to the local authority.
          </p>
          <p className="text-slate-600 mb-4">
            Plug-in solar is connected via a standard socket outlet. This is not a fixed installation — the system
            can be unplugged and removed. The view of most electrical professionals is that plug-in solar does not
            constitute "electrical installation work" under Part P because it involves no modification to the fixed
            wiring of the building. You're not adding circuits, moving cables, or modifying the consumer unit.
          </p>
          <p className="text-slate-600">
            This is another area being clarified as the BSI working group develops a specific UK standard for plug-in
            solar.
          </p>
        </section>

        {/* BSI working group */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What the BSI Working Group Is Doing</h2>
          <p className="text-slate-600 mb-4">
            In September 2025, the British Standards Institution formally constituted a working group to develop the
            UK equivalent of Germany's VDE 0100-551-1 — the technical standard for plug-in solar that Germany adopted
            when it legalised Balkonkraftwerk installations.
          </p>
          <p className="text-slate-600 mb-4">The working group includes:</p>
          <ul className="space-y-1 text-sm text-slate-600 mb-4 list-disc list-inside ml-4">
            <li>Representatives from the Institution of Engineering and Technology (IET)</li>
            <li>BEAMA — the electrical equipment manufacturers' trade association</li>
            <li>Distribution Network Operators (DNOs)</li>
            <li>Solar Energy UK</li>
            <li>Consumer advocacy organisations</li>
            <li>Product manufacturers including EcoFlow and Anker</li>
          </ul>
          <p className="text-slate-600">
            The expected output is a BSI Publicly Available Specification (PAS) or a new section of BS 7671 covering
            plug-in solar installations. This would give electricians, installers, and homeowners clear guidance and
            move the technology firmly out of the grey area. Publication is expected in 2026, aligned with the
            government's commitment to create a full regulatory framework.
          </p>
        </section>

        <InfoBox variant="info" title="The informed consensus among electricians">
          When balcony solar owners ask electricians for their view, the most common informed response is: "It's fine
          for a modern consumer unit with RCBOs, the risk is genuinely low, but there's currently no formal standard
          I can point to." That's accurate — and it's what the BSI working group is there to address. The underlying
          electrical safety position is sound; the paperwork is catching up.
        </InfoBox>

        <div className="border-t border-slate-200 pt-6 mt-6">
          <p className="text-sm text-slate-500">
            Related guides:{" "}
            <Link href="/uk-regulations/dno-g98-explained" className="text-solar-600 underline">
              G98 DNO notification
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
