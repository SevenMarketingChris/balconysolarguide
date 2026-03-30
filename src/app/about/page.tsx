import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us — UK's Independent Resource for Plug-In Solar",
  description:
    "Independent UK resource for renters and flat-dwellers exploring plug-in solar. Honest, technically accurate, and built around UK regulations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Balcony Solar Guide"
        subtitle="Independent UK resource for renters and flat-dwellers exploring plug-in solar"
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "About" }]} />
        <article className="prose-solar">
          <h2>What This Site Is</h2>
          <p>
            Balcony Solar Guide is an independent UK resource dedicated to plug-in and balcony solar
            panels. We cover how the technology works, what it costs, whether it makes financial
            sense, how the UK regulatory framework applies to it, and what renters and flat-dwellers
            specifically need to know.
          </p>
          <p>
            We are not affiliated with any solar panel manufacturer, retailer, or installer. We do
            participate in affiliate programmes — more on that below — but our editorial content is
            written independently, based on our own research and analysis.
          </p>

          <h2>Who It's For</h2>
          <p>
            The primary audience for this site is people who live in rented accommodation or
            leasehold flats in the UK and cannot install rooftop solar. That includes people in
            tower blocks, terrace flats, converted houses, and anywhere else with a balcony, terrace,
            or small outdoor space.
          </p>
          <p>
            Plug-in solar is one of the few ways people in this situation can meaningfully engage
            with renewable energy generation and reduce their electricity bills. We think that is
            worth covering well.
          </p>
          <p>
            We also write for homeowners who are curious about the technology as a lower-cost,
            lower-commitment alternative to full rooftop installation, and for anyone who wants to
            understand how the UK regulatory landscape around domestic microgeneration actually works.
          </p>

          <h2>Our Editorial Approach</h2>
          <p>
            We try to be accurate, specific, and honest. That sounds obvious, but much of the
            content available online about balcony solar in the UK fails on at least one of those
            counts. We have a few specific commitments:
          </p>
          <ul>
            <li>
              <strong>UK-specific regulation, not generic European advice.</strong> The UK has its
              own electrical safety standards (BS 7671), its own grid connection requirements (G98),
              its own building regulations (Part P, the GPDO), and its own export framework (the
              Smart Export Guarantee). We cite these by name and explain what they actually mean for
              a balcony solar installation in the UK — not what the equivalent German or Dutch rules
              say.
            </li>
            <li>
              <strong>No hype.</strong> Balcony solar is a genuinely useful technology with real
              limitations. We give realistic savings estimates and honest payback periods. We explain
              why self-consumption matters more than peak panel output. We do not publish "go solar
              now!" content because that is not helpful.
            </li>
            <li>
              <strong>Technical accuracy.</strong> Where we make a claim about electrical safety,
              inverter certification, or regulatory compliance, we base it on the actual standard —
              not on a simplified interpretation of it. If we get something wrong, we want to be
              corrected, and we will update accordingly.
            </li>
            <li>
              <strong>Transparent uncertainty.</strong> Some things about UK balcony solar are
              genuinely unclear — the insurance picture, the status of certain planning rules, the
              timeline for the simplified DNO notification pathway. Where we do not know the answer,
              we say so rather than guessing confidently.
            </li>
          </ul>

          <h2>Why We Built This</h2>
          <p>
            The information available online about balcony solar in the UK is, frankly, not good
            enough. A lot of it is translated or adapted from German or Dutch content without
            adjustment for UK conditions. Some of it cites regulations that do not apply in Britain.
            Some of it is years out of date. Some of it is written primarily to sell a specific
            brand of panel.
          </p>
          <p>
            At the same time, March 2026 is a genuinely pivotal moment for the technology in the
            UK. The government's announcement that it intends to formally legalise plug-in solar —
            with the BSI commissioned to develop a UK technical standard and a simplified DNO
            notification pathway under development — is the biggest news in UK balcony solar history.
            Search interest is at an all-time high. People are actively looking for reliable
            information, and much of what they find does not meet that standard.
          </p>
          <p>
            We built this site because we thought someone should. We are a small independent UK
            team with a background in digital publishing and a genuine interest in getting this
            right. We keep pace with regulatory developments, update guides when the rules change,
            and welcome corrections when we get things wrong.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            Some pages on this site contain affiliate links — primarily in product reviews and deals
            pages. If you click one of those links and make a purchase, we may receive a commission
            from the retailer. This does not affect the price you pay.
          </p>
          <p>
            Affiliate revenue helps cover the cost of running the site. It does not influence our
            editorial recommendations. We will recommend a product with no affiliate programme over
            a product with a commission arrangement if the former is the better choice for our
            readers. Our full{" "}
            <Link href="/affiliate-disclosure">affiliate disclosure</Link> sets out every programme we
            participate in and how it works.
          </p>

          <h2>Corrections and Feedback</h2>
          <p>
            If you believe something on this site is factually incorrect — a wrong regulation
            citation, an outdated piece of guidance, a maths error in a savings calculation — please
            tell us. We take accuracy seriously and we will investigate and correct genuine errors
            promptly.
          </p>
          <p>
            You can reach us via our <Link href="/contact">contact page</Link>. Factual corrections,
            press enquiries, and partnership questions are all welcome there. Please note that we
            cannot provide individual advice about specific installations.
          </p>
        </article>
      </div>
    </>
  );
}
