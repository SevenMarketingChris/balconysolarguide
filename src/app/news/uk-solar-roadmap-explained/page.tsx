import Link from "next/link";
import InfoBox from "@/components/ui/InfoBox";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "The UK Solar Roadmap Explained: What It Means for Balcony Solar",
  description:
    "The UK Solar Roadmap targets 70GW by 2035. What it says about plug-in solar, residential rooftop, and what it means for you.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "The UK Solar Roadmap Explained: What It Means for Balcony Solar",
  datePublished: "2026-03-15",
  dateModified: "2026-03-30",
  author: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
  publisher: { "@type": "Organization", name: "Balcony Solar Guide", url: "https://www.balconysolarguide.co.uk" },
};

export default function UKSolarRoadmapPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Analysis · 1 June 2025"
        title="The UK Solar Roadmap Explained: What It Means for Balcony Solar"
        subtitle="The Government's Solar Roadmap sets the UK on a path to 70GW of solar by 2035. But what does it actually say about plug-in solar for flats and balconies — and what comes next?"
        badge="Updated March 2026"
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          crumbs={[
            { label: "News", href: "/news" },
            { label: "UK Solar Roadmap Explained" },
          ]}
        />

        <article className="prose-solar">
          <h2>What Is the UK Solar Roadmap?</h2>
          <p>
            Published on 1 June 2025 by the Department for Energy Security and Net Zero (DESNZ),
            the UK Solar Roadmap is a strategy document setting out how the Government plans to
            reach 70 gigawatts (GW) of solar capacity by 2035. That represents a roughly
            fivefold increase from the approximately 17GW installed at the time of publication —
            an enormous ambition requiring significant policy action across utility-scale solar
            farms, commercial rooftop, and residential solar alike.
          </p>
          <p>
            The document runs to over 80 pages and covers planning reform, grid connection, skills
            and supply chain, finance, and — crucially for our purposes — small-scale and
            residential solar, including a specific section on plug-in solar devices.
          </p>

          <h2>The Big Numbers: 70GW by 2035</h2>
          <p>
            The 70GW target breaks down roughly as follows in the Roadmap's modelling:
          </p>
          <ul>
            <li>
              <strong>~45–50GW</strong> from large-scale ground-mounted solar farms (utility-scale)
            </li>
            <li>
              <strong>~12–15GW</strong> from commercial and industrial rooftop (warehouses, offices,
              factories)
            </li>
            <li>
              <strong>~6–8GW</strong> from residential rooftop (homes with roof-mounted systems)
            </li>
            <li>
              <strong>~1–2GW</strong> from small-scale and emerging formats, explicitly including
              plug-in solar
            </li>
          </ul>
          <p>
            The 1–2GW plug-in solar contribution may sound modest in the context of a 70GW target,
            but it represents an enormous number of individual installations — at 600W per system,
            2GW would mean over 3 million installed units. For context, Germany reached 1.2 million
            after legalising in 2024 within twelve months.
          </p>

          <h2>What the Roadmap Says About Plug-In Solar</h2>
          <p>
            Section 4.3 of the Solar Roadmap, titled "Democratising Access to Solar," includes the
            most direct treatment of plug-in solar to appear in any UK government document to that
            point. Key passages include:
          </p>
          <blockquote>
            <p>
              "Plug-in solar devices — sometimes referred to as balcony solar — represent a
              significant opportunity to extend the benefits of solar energy to the millions of
              households that currently cannot access it due to tenure, building type, or
              upfront cost. The Government will explore the regulatory and standards changes
              required to establish a simplified pathway for these devices, drawing on the
              experience of Germany and other European neighbours."
            </p>
          </blockquote>
          <p>
            The Roadmap goes on to commit to a consultation on plug-in solar regulation, to be
            launched before the end of 2025. That consultation subsequently informed the March 2026
            ministerial statement announcing the formal commitment to a regulatory framework.
          </p>

          <InfoBox variant="info" title="The Roadmap as a starting gun">
            The Solar Roadmap itself does not change anything legally. Its importance is as a signal
            of intent that plug-in solar has government backing — and as the document that triggered
            the consultation process that led to the March 2026 announcement.
          </InfoBox>

          <h2>What the Roadmap Says About Residential Rooftop Solar</h2>
          <p>
            Beyond plug-in solar, the Roadmap contains several provisions relevant to residential
            solar more broadly:
          </p>
          <ul>
            <li>
              <strong>Permitted Development reform.</strong> The Roadmap commits to reviewing
              Permitted Development Rights to remove "unnecessary barriers" to rooftop solar on
              homes, including in conservation areas and on listed buildings where appropriate.
            </li>
            <li>
              <strong>Smart Export Guarantee (SEG) review.</strong> The Government committed to
              reviewing the minimum export tariff (currently 0p — i.e., suppliers must offer
              something but it can be negligibly low) to ensure householders receive "a fair price"
              for exported electricity.
            </li>
            <li>
              <strong>Social housing solar.</strong> A specific workstream on accelerating solar
              on social housing is established, with a target of 1GW from social housing by 2030.
            </li>
          </ul>

          <h2>The Role of the Energy Saving Trust</h2>
          <p>
            The Solar Roadmap designates the Energy Saving Trust (EST) as a key delivery partner
            for small-scale and residential solar communications. The EST has been tasked with
            developing consumer-facing guidance on plug-in solar, including awareness campaigns
            aimed at renters and those in multi-occupancy buildings.
          </p>
          <p>
            This is significant because the EST's involvement brings credibility and reach. Their
            existing home energy advice services — used by millions of UK households — will
            incorporate plug-in solar information as the regulatory picture clarifies. This should
            accelerate mainstream awareness of the technology well beyond the current enthusiast
            and early-adopter market.
          </p>

          <h2>Germany as the Model</h2>
          <p>
            The Roadmap explicitly cites Germany as the leading example of successful plug-in
            solar policy. Germany's journey is worth understanding in detail because it is, in
            effect, the template the UK is following.
          </p>
          <p>
            Germany introduced its first simplified rules for <em>Balkonkraftwerke</em> (balcony
            power plants) in 2023, relaxing notification requirements and increasing the single-unit
            wattage limit from 600W to 800W. In May 2024, the Bundestag passed the
            "Solarpaket I" — a broader solar package that included further simplification: owners
            can connect plug-in solar devices to a standard household socket without a registered
            electrician, feed-in to the grid is permitted without a separate metering installation,
            and landlords are obliged to permit tenants to install them unless there is a material
            objection.
          </p>
          <p>
            The results were rapid. Within twelve months of Solarpaket I taking effect, Germany
            registered its 1.2 millionth plug-in solar installation — a figure that continues
            to grow rapidly. Prices fell as demand scaled, and the market diversified with integrated
            battery storage systems becoming increasingly common.
          </p>
          <p>
            The UK Solar Roadmap authors were clearly aware of this trajectory, noting that
            "regulatory clarity and simplification can unlock latent consumer demand that pre-existing
            uncertainty has suppressed." That is precisely what happened in Germany, and what the
            UK Government now intends to replicate.
          </p>

          <h2>Next Steps From the Roadmap</h2>
          <p>
            The Roadmap set out a series of action points relevant to plug-in solar, with indicative
            timelines:
          </p>
          <ul>
            <li>
              <strong>H2 2025:</strong> DESNZ to launch consultation on plug-in solar regulation,
              covering grid connection, building regulations, and consumer protection standards.
            </li>
            <li>
              <strong>H2 2025:</strong> Energy Saving Trust to publish consumer guidance on
              plug-in solar.
            </li>
            <li>
              <strong>H1 2026:</strong> Government response to consultation and announcement of
              intended regulatory approach. <em>(This is the commitment fulfilled by the March 2026
              announcement.)</em>
            </li>
            <li>
              <strong>2026–2027:</strong> BSI standard development, G98 amendment, and Part P
              update — aiming for a complete simplified framework by end of 2027.
            </li>
          </ul>

          <InfoBox variant="tip" title="Don't wait for the paperwork">
            The regulatory process is underway, but it will take time. Properly installed plug-in
            solar systems using UKCA/CE-marked equipment are operating across the UK right now,
            with no enforcement action recorded against any domestic installer. See our{" "}
            <Link href="/calculator" className="underline">
              savings calculator
            </Link>{" "}
            and{" "}
            <Link href="/guides" className="underline">
              buying guides
            </Link>{" "}
            to start planning your installation today.
          </InfoBox>

          <h2>What Does This Mean for You?</h2>
          <p>
            If you are a renter, flat-dweller, or anyone who has been waiting for the regulatory
            picture to clarify before investing in balcony solar, the Solar Roadmap and the March
            2026 announcement that followed it provide strong grounds for confidence. The technology
            is proven, the government is supportive, and the regulatory direction is clear.
          </p>
          <p>
            The Solar Roadmap is the most comprehensive signal yet that plug-in solar will
            eventually be as mainstream in the UK as it has become in Germany. The question is not
            whether it will happen, but how quickly the standards bodies and government departments
            can move.
          </p>

          <h2>Further Reading</h2>
          <ul>
            <li><Link href="/uk-regulations/timeline" className="underline">UK balcony solar regulation timeline</Link> — all the key dates and milestones in one place.</li>
            <li><Link href="/news/plug-in-solar-now-legal-uk-2026" className="underline">UK Government moves to legalise plug-in solar</Link> — the March 2026 announcement that followed this roadmap.</li>
          </ul>

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Ready to buy a balcony solar kit?</h3>
            <p className="text-sm text-slate-600 mb-4">See our top-rated systems and current UK deals.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/reviews/best-balcony-solar-kits-uk" className="inline-flex items-center justify-center bg-solar-500 hover:bg-solar-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors">See top-rated kits</Link>
              <Link href="/deals" className="inline-flex items-center justify-center bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm px-5 py-3 rounded-lg transition-colors">View current deals</Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
