import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";
import AffiliateNotice from "@/components/ui/AffiliateNotice";

export const metadata: Metadata = {
  title: "How to Install a Balcony Solar Panel System in the UK",
  description:
    "Step-by-step UK installation guide for balcony solar. Covers tools, mounting, panel connection, inverter setup, plug-in, safety checks, and common mistakes to avoid.",
};

export default function HowToInstallBalconySolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="How to Install a Balcony Solar Panel System"
        subtitle="A step-by-step installation walkthrough for UK balcony solar — from measuring your space to taking your first output reading. No electrician required."
        badge="Updated March 2026"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "Guides", href: "/guides" },
            { label: "Installation Guide" },
          ]}
        />
        <AffiliateNotice />

        <article className="prose-solar">
          <h2>Before You Start</h2>
          <p>
            A balcony solar installation is genuinely straightforward — the technology is designed to be installed by a
            non-specialist. Most people complete their first installation in two to four hours, including time spent
            reading the manual. Before you begin, make sure you have:
          </p>
          <ul>
            <li>Confirmed your G98 notification has been submitted (see our <Link href="/guides/g98-dno-notification-balcony-solar">G98 guide</Link>)</li>
            <li>Measured your balcony railing or floor space and confirmed the system fits</li>
            <li>Checked that your balcony socket (or the indoor socket you plan to use) is in good working order</li>
            <li>Read the manufacturer's installation manual specific to your kit</li>
          </ul>

          <h3>Tools You'll Typically Need</h3>
          <ul>
            <li>A spanner or adjustable wrench (for tightening railing clamps)</li>
            <li>A cross-head (Pozidriv or Phillips) screwdriver</li>
            <li>A tape measure</li>
            <li>A spirit level (optional, but useful for floor-stand systems)</li>
            <li>Cable ties or clips for tidying the DC cable run</li>
          </ul>
          <p>
            For wall-mount systems that require drilling, you'll additionally need a SDS or hammer drill, appropriate
            masonry bits, and wall anchors. If you're not comfortable with masonry drilling, consider a railing-clamp
            or floor-stand system instead.
          </p>

          <h2>Step 1: Choose Your Location and Measure</h2>
          <p>
            Before assembling anything, spend some time on your balcony assessing the installation position. The best
            position is the one that:
          </p>
          <ul>
            <li>Faces as close to south as possible (south-east and south-west are also excellent)</li>
            <li>Is free from shading throughout the core generation hours of 10am–2pm</li>
            <li>Allows the panel to be angled — or at minimum positioned — to receive direct sunlight</li>
            <li>Keeps the cable run to the socket as short as reasonably possible</li>
          </ul>
          <p>
            Measure the length of your balcony railing (for railing mounts) or the usable floor area (for floor
            stands). A standard 400W panel is approximately 1.72m × 1.13m; a 600W dual-panel kit spans roughly
            3.5m of railing when mounted side by side. Confirm your space is sufficient before unpacking the hardware.
          </p>

          <h2>Step 2: Assemble the Mounting Frame</h2>
          <p>
            Unpack the mounting hardware and lay it out. Most kits include a mounting frame (either a railing-clamp
            bracket system or a freestanding frame), stainless steel bolts and nuts, clamp pads, and cable management
            clips. Follow the manufacturer's assembly instructions, but the general process for a railing-clamp system
            is:
          </p>
          <ol>
            <li>Attach the vertical frame sections to the railing clamps — typically two clamps per panel, spaced to match the mounting holes on the panel frame.</li>
            <li>Set the clamp width to match your railing diameter. Railing clamps are usually adjustable for railings from 20mm to 60mm in diameter.</li>
            <li>Position the assembled frame on the railing at the chosen location. Don't fully tighten the clamps yet — keep them loose enough to adjust position.</li>
            <li>Check alignment. If installing two panels, ensure the frames are at the same height and level with each other.</li>
          </ol>
          <p>
            For freestanding floor-stand systems, assemble the A-frame or tripod structure according to the instructions,
            set the tilt angle (aim for 30–45° if possible), and position it in the chosen spot. Place rubber anti-slip
            pads under the feet if provided.
          </p>

          <h2>Step 3: Attach the Panels to the Frame</h2>
          <p>
            Solar panels are heavy — typically 20–22kg each. If you're installing a dual-panel system, you may want
            a second person to help lift the panels onto the frame. Trying to hold a 22kg panel against a railing
            while simultaneously threading mounting bolts is awkward at best and dangerous at worst.
          </p>
          <p>
            Slide the panel into the frame's mounting channels or align the mounting holes, insert the provided bolts,
            and hand-tighten the nuts. Check the panel is correctly seated and not resting on any cable or edge before
            fully tightening. Most manufacturers specify a torque for the panel mounting bolts — if a torque wrench
            is specified, use one.
          </p>
          <p>
            Once the panels are mounted, fully tighten the railing clamps to the manufacturer's torque specification.
            Give each clamp a firm check by hand — it should not be possible to rotate or slide it along the railing.
          </p>

          <InfoBox variant="warning" title="Wind security check">
            Gently push and pull each panel and clamp to verify they are secure. A properly installed railing-clamp
            system should have essentially no movement. If you feel any flex in the railing itself (older or poorly
            maintained railings can corrode at their fixings), have the railing inspected before relying on it as
            the anchor for your panels.
          </InfoBox>

          <h2>Step 4: Connect the Panels to the Micro-Inverter</h2>
          <p>
            Solar panels output DC electricity at relatively high voltage (typically 25–45V per panel). The
            micro-inverter connects to the panel via MC4 connectors — the weatherproof push-and-click connectors
            used throughout the solar industry. If your panels come pre-attached to the inverter as a single unit,
            this step may already be done.
          </p>
          <p>
            For systems where the inverter mounts separately on the frame:
          </p>
          <ol>
            <li>Mount the micro-inverter on the frame bracket provided, in a position protected from direct rain where possible (some inverters are fully weatherproof; check your model).</li>
            <li>Connect the panel's DC output cables (positive and negative) to the corresponding MC4 input connectors on the inverter. MC4 connectors click when fully engaged — if they don't click, they're not fully seated.</li>
            <li>For dual-panel systems, connect both panels to the inverter. Check your inverter's input configuration — some dual-input inverters accept one cable from each panel; others use a parallel combiner.</li>
          </ol>
          <p>
            <strong>Do not connect the panels to the inverter until the inverter is plugged into the wall socket.</strong>{" "}
            Modern micro-inverters include anti-islanding and start-up protection logic that requires the grid connection
            to be present before the DC side is energised. Connecting DC first and AC second is the correct sequence.
          </p>

          <h2>Step 5: Prepare the AC Cable and Plug</h2>
          <p>
            Your kit will include a cable from the inverter's AC output to a plug. In most European kits this is a
            Schuko plug; UK kits or UK-adapted versions use a standard 13A BS 1363 plug. If your kit comes with a
            Schuko-to-UK adapter, check it is rated for the current involved (max 3.47A for an 800W system — well
            within any quality 13A adapter's rating).
          </p>
          <p>
            Route the AC cable tidily from the inverter to the socket. If you're routing through a window or door
            gap, use a flat cable designed for this purpose — not a round cable compressed in a door or window frame,
            which can damage the cable insulation over time. Cable management clips or cable trunking can help keep
            the cable neat and prevent trip hazards.
          </p>

          <h2>Step 6: Plug Into Your Socket</h2>
          <p>
            Now connect the inverter's AC cable to the wall socket. The socket should be:
          </p>
          <ul>
            <li>A wall socket — not a multi-socket extension lead or power strip</li>
            <li>In good condition with no visible damage to the socket face or wiring</li>
            <li>On a circuit that is protected by an RCD (most UK circuits installed after 1992 are)</li>
          </ul>
          <p>
            Plug in and switch the socket on. The inverter will take approximately 30–60 seconds to synchronise with
            the grid and begin outputting power. During this synchronisation period it may show a flashing LED or
            display — this is normal.
          </p>

          <InfoBox variant="warning" title="Do not use extension leads or power strips">
            Connecting a micro-inverter to an extension lead or multi-socket adapter is not recommended. Use a
            dedicated wall socket. Extension leads add resistance to the circuit, may not be rated for continuous
            loading, and some power strips include surge protection that can interact incorrectly with inverter
            output. Plug directly into the wall.
          </InfoBox>

          <h2>Step 7: Check Your Output Readings</h2>
          <p>
            Once the inverter has synchronised, connect your phone to the monitoring app. Most balcony solar systems
            use a Wi-Fi DTU (Data Transfer Unit) — a small dongle attached to the inverter — to relay data to a cloud
            server and the manufacturer's app. You'll need to:
          </p>
          <ol>
            <li>Download the manufacturer's app (Hoymiles Solar, APsystems EMA, EcoFlow, etc.)</li>
            <li>Create an account</li>
            <li>Add your inverter using its serial number</li>
            <li>Connect the DTU to your home Wi-Fi network</li>
          </ol>
          <p>
            Once connected, you should see real-time power output in watts. On a sunny day with an 800W system, you
            might see 400–700W depending on sun angle and cloud cover. On an overcast day, 50–150W is normal. Zero
            output with no error codes typically means the sun isn't hitting the panels — check that no shading is
            occurring and that the panels are oriented correctly.
          </p>

          <h2>Safety: What Not to Do</h2>
          <ul>
            <li>
              <strong>Don't modify the plug.</strong> The plug that comes with your kit is rated for the inverter's
              output. Replacing it with a different plug, cutting it and rewiring it, or bypassing the fuse in the
              plug is dangerous and voids your warranty.
            </li>
            <li>
              <strong>Don't install in wet areas.</strong> Don't plug the inverter into a socket in a bathroom,
              unenclosed garage, or other wet area. Balcony sockets designed for outdoor use should be IP-rated for
              weather — check yours before use.
            </li>
            <li>
              <strong>Don't leave cables as trip hazards.</strong> Route and secure the AC cable neatly. A loose
              cable across a balcony doorway is a genuine hazard.
            </li>
            <li>
              <strong>Don't leave the system unsecured in high winds.</strong> If Storm-force winds are forecast, take
              additional precautions — add extra ratchet straps for railing mounts, bring floor-stand systems indoors.
            </li>
          </ul>

          <InfoBox variant="warning" title="When to involve an electrician">
            The installation described here involves no modifications to your home's electrical system — it's simply
            plugging in a device. However, if you have any concerns about the condition of your socket, the age of
            your wiring, or any aspect of the electrical safety of your installation, consult a qualified electrician
            (look for NICEIC or NAPIT registered contractors). The cost of a 30-minute inspection is minimal compared
            to the peace of mind it provides.
          </InfoBox>

          <h2>After Installation: Ongoing Maintenance</h2>
          <p>
            Balcony solar systems require very little maintenance, but a few periodic checks will keep yours performing
            well:
          </p>
          <ul>
            <li><strong>Clean the panels</strong> every few months — dust, bird droppings, and algae reduce output. Warm soapy water and a soft cloth is all you need; don't use abrasive cleaners.</li>
            <li><strong>Check railing clamp tightness</strong> seasonally — thermal cycling (hot summers, cold winters) can cause fittings to loosen slightly.</li>
            <li><strong>Check the app</strong> occasionally to confirm output matches expectations — a sudden unexplained drop in output may indicate a panel or inverter fault.</li>
            <li><strong>Inspect cables</strong> annually for any signs of chafing, weathering, or damage, particularly where the cable passes through a door or window gap.</li>
          </ul>
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
            headline: "How to Install a Balcony Solar Panel System in the UK",
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
