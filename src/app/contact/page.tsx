import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import InfoBox from "@/components/ui/InfoBox";

export const metadata: Metadata = {
  title: "Contact Balcony Solar Guide",
  description:
    "Get in touch with Balcony Solar Guide. We welcome factual corrections, press enquiries, and partnership questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Questions, corrections, press enquiries, or partnership requests — we'd like to hear from you."
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <article className="prose-solar">
          <InfoBox variant="info" title="What we can and can't help with">
            <p>
              We welcome factual corrections, press enquiries, and partnership or affiliate
              enquiries. We cannot provide individual advice about specific installations —
              whether a system is right for your balcony, whether your DNO application is
              correct, or whether a particular product is suitable for your property. For
              those questions, our <Link href="/guides">guides</Link> are the best starting point.
            </p>
          </InfoBox>

          <h2>When to get in touch</h2>
          <ul>
            <li>
              <strong>Factual corrections</strong> — if you believe something on this site is
              wrong, out of date, or cites an incorrect regulation, please let us know. We take
              accuracy seriously and will investigate and correct genuine errors promptly.
            </li>
            <li>
              <strong>Press enquiries</strong> — if you are a journalist or researcher working on
              a piece about balcony solar, plug-in solar policy in the UK, or domestic
              microgeneration, we are happy to help where we can.
            </li>
            <li>
              <strong>Partnership and affiliate enquiries</strong> — if you represent a product or
              brand relevant to balcony solar and would like to discuss a partnership, please
              include some detail about your product and what you have in mind.
            </li>
          </ul>

          <h2>How to reach us</h2>
          <p>
            Email us at{" "}
            <a href="mailto:hello@balconysolarguide.co.uk">hello@balconysolarguide.co.uk</a>.
          </p>
          <p>
            We aim to respond within 3–5 working days. We read every message, but we cannot
            guarantee a reply to every enquiry — particularly where the question is better answered
            by our existing guides.
          </p>

          <h2>Installation and product questions</h2>
          <p>
            If you have a question about installing balcony solar, choosing a system, understanding
            the rules that apply to your situation, or working out whether it makes financial sense
            for you, the best place to start is our{" "}
            <Link href="/guides">guides section</Link>. We have written in detail on topics including:
          </p>
          <ul>
            <li>
              <Link href="/guides/beginners-guide-to-balcony-solar">
                Beginner's guide to balcony solar in the UK
              </Link>
            </li>
            <li>
              <Link href="/guides/is-balcony-solar-legal-uk">
                Is balcony solar legal in the UK?
              </Link>
            </li>
            <li>
              <Link href="/guides/balcony-solar-insurance-uk">
                Balcony solar and home insurance
              </Link>
            </li>
            <li>
              <Link href="/guides/asking-landlord-balcony-solar">
                How to ask your landlord about balcony solar
              </Link>
            </li>
            <li>
              <Link href="/guides/g98-dno-notification-balcony-solar">
                G98 and DNO notification explained
              </Link>
            </li>
          </ul>
          <p>
            If your question is not covered in our guides, we may add it to a future update —
            so feel free to mention it in your message even if you are not expecting a personal
            reply.
          </p>
        </article>
      </div>
    </>
  );
}
