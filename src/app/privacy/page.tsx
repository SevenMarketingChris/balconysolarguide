import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata = {
  title: "Privacy Policy — Balcony Solar Guide",
  description:
    "Privacy policy for Balcony Solar Guide. How we collect, use, and protect your data under UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal data — in plain English."
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "Privacy Policy" }]} />

        <div className="bg-white border border-slate-200 rounded-xl px-8 py-8 prose prose-slate max-w-none">
          <p className="text-slate-500 text-sm">Last updated: March 2026</p>

          <h2>Who We Are</h2>
          <p>
            This privacy policy applies to <strong>Balcony Solar Guide</strong>, accessible at{" "}
            <strong>balconysolarguide.co.uk</strong> (the "Site"). The Site provides information,
            guides, and tools related to plug-in balcony solar panels in the United Kingdom.
          </p>
          <p>
            For the purposes of UK data protection law, the data controller is the operator of
            Balcony Solar Guide. If you have any data protection queries, please contact us using
            the details in the "Contact Us" section below.
          </p>

          <h2>The Data We Collect</h2>

          <h3>Analytics Data</h3>
          <p>
            We use privacy-focused web analytics to understand how visitors use the Site. Analytics
            data may include:
          </p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or search engine</li>
            <li>Device type, browser, and operating system (in aggregate)</li>
            <li>Approximate geographic location (country or region level — not precise location)</li>
            <li>Whether a visit resulted in a click on an affiliate link</li>
          </ul>
          <p>
            We aim to use analytics tools that minimise data collection to what is necessary for
            understanding site performance. We do not use analytics data to build individual user
            profiles, and we do not sell analytics data to third parties.
          </p>

          <h3>Calculator Tool Data</h3>
          <p>
            The balcony solar savings calculator on this Site operates entirely client-side in your
            browser. The inputs you enter (region, orientation, wattage, tariff) are not transmitted
            to our servers, stored, or logged in any way.
          </p>

          <h3>Contact Enquiries</h3>
          <p>
            If you contact us by email or through any contact form on the Site, we will collect
            your name, email address, and the content of your message. We use this information
            solely to respond to your enquiry. We do not add contact enquirers to any mailing list
            without explicit consent.
          </p>

          <h3>Data We Do Not Collect</h3>
          <p>We do not collect:</p>
          <ul>
            <li>Payment information (we do not process any transactions on this Site)</li>
            <li>Social media login data</li>
            <li>Precise location data</li>
            <li>Sensitive personal data (health, financial, political, or religious data)</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Cookies are small text files stored in your browser. We use the following categories of
            cookies:
          </p>

          <h3>Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the Site to function. They do not collect any personal
            data and cannot be switched off. Examples include session cookies that remember your
            preferences during a single visit.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with the Site. These
            cookies collect aggregate, anonymised information about page views, session duration,
            and traffic sources. They do not identify individual users.
          </p>
          <p>
            If our analytics provider is Google Analytics, it operates under Google's data
            processing terms. We configure Google Analytics with IP anonymisation enabled. You can
            opt out of Google Analytics tracking using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar-600 underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3>Affiliate Tracking Cookies</h3>
          <p>
            When you click an affiliate link on this Site (for example, a link to Amazon or
            EcoFlow), the destination retailer's affiliate programme places a tracking cookie in
            your browser. This cookie records that you arrived via our affiliate link, enabling the
            retailer to attribute any subsequent purchase to us.
          </p>
          <p>
            These cookies are set by third parties (Amazon, EcoFlow, Anker) — not by us — and are
            governed by those companies' own privacy policies:
          </p>
          <ul>
            <li>
              <a
                href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201909010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-solar-600 underline"
              >
                Amazon UK Privacy Notice
              </a>
            </li>
            <li>
              <a
                href="https://www.ecoflow.com/uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-solar-600 underline"
              >
                EcoFlow Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.anker.com/pages/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-solar-600 underline"
              >
                Anker Privacy Policy
              </a>
            </li>
          </ul>

          <h2>How We Use Your Data</h2>
          <p>We use data collected through this Site for the following purposes:</p>
          <ul>
            <li>
              <strong>Site improvement:</strong> Understanding which content is most useful, which
              pages perform poorly, and how to improve the user experience.
            </li>
            <li>
              <strong>Responding to enquiries:</strong> Answering questions submitted via email or
              contact form.
            </li>
            <li>
              <strong>Affiliate accounting:</strong> We use aggregate click-through data to
              understand which affiliate links generate revenue, informing decisions about which
              products to feature.
            </li>
          </ul>

          <h2>Legal Basis for Processing (UK GDPR)</h2>
          <p>
            Under UK GDPR, we rely on the following legal bases for processing personal data:
          </p>
          <ul>
            <li>
              <strong>Legitimate interests</strong> (Article 6(1)(f)): For analytics, to understand
              and improve the Site. Our legitimate interest is in operating an effective,
              useful publication.
            </li>
            <li>
              <strong>Consent</strong> (Article 6(1)(a)): Where we seek your consent for
              non-essential cookies (e.g., analytics cookies) via a cookie consent mechanism, we
              will only process data for those purposes if you have consented.
            </li>
            <li>
              <strong>Contract performance / pre-contractual steps</strong> (Article 6(1)(b)): For
              contact enquiries, to respond to your message.
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain analytics data for up to 26 months, after which it is automatically deleted
            or anonymised by our analytics provider. Contact enquiry data is retained for up to 12
            months from the date of last correspondence, unless you ask us to delete it sooner.
          </p>

          <h2>Third Parties</h2>
          <p>We do not sell your personal data to any third party. We may share data with:</p>
          <ul>
            <li>
              Our analytics provider (e.g., Google Analytics), solely for the purpose of analysing
              Site usage.
            </li>
            <li>
              Affiliate networks and retailers (via affiliate tracking cookies set by those parties
              when you click their links — see above).
            </li>
            <li>
              Our hosting provider, who processes data as part of providing our web infrastructure.
              Our hosting provider acts as a data processor and is required to process data only in
              accordance with our instructions.
            </li>
          </ul>

          <h2>International Transfers</h2>
          <p>
            Some of our third-party service providers (such as Google) may transfer data outside
            the UK and EEA. Where this occurs, we rely on Standard Contractual Clauses or the UK
            adequacy regulations to ensure appropriate safeguards are in place.
          </p>

          <h2>Your Rights Under UK GDPR</h2>
          <p>
            If we hold personal data about you, you have the following rights under UK GDPR. You
            can exercise these rights by contacting us (see "Contact Us" below):
          </p>
          <ul>
            <li>
              <strong>Right of access:</strong> You can request a copy of the personal data we hold
              about you.
            </li>
            <li>
              <strong>Right to rectification:</strong> You can ask us to correct inaccurate or
              incomplete personal data.
            </li>
            <li>
              <strong>Right to erasure ("right to be forgotten"):</strong> You can ask us to delete
              personal data we hold about you, subject to certain legal exceptions.
            </li>
            <li>
              <strong>Right to restrict processing:</strong> You can ask us to pause processing of
              your data in certain circumstances.
            </li>
            <li>
              <strong>Right to data portability:</strong> Where processing is based on consent or
              contract and carried out automatically, you can request your data in a
              machine-readable format.
            </li>
            <li>
              <strong>Right to object:</strong> You can object to processing based on our
              legitimate interests. We will stop processing unless we can demonstrate compelling
              legitimate grounds.
            </li>
            <li>
              <strong>Rights related to automated decision-making:</strong> We do not carry out
              automated decision-making or profiling that produces legal or similarly significant
              effects.
            </li>
          </ul>
          <p>
            You also have the right to lodge a complaint with the UK Information Commissioner's
            Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar-600 underline"
            >
              ico.org.uk
            </a>{" "}
            if you believe your data protection rights have been infringed.
          </p>

          <h2>Children</h2>
          <p>
            This Site is not directed at children under 13 years of age. We do not knowingly
            collect personal data from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. When we do, we will update the
            "Last updated" date at the top of this page. We encourage you to review this policy
            periodically. Continued use of the Site after any changes constitutes acceptance of
            the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, wish to exercise any of your data
            rights, or have a concern about how we handle your data, please contact us at:
          </p>
          <p>
            <strong>Balcony Solar Guide</strong>
            <br />
            Email:{" "}
            <a href="mailto:privacy@balconysolarguide.co.uk" className="text-solar-600 underline">
              privacy@balconysolarguide.co.uk
            </a>
          </p>
          <p>
            We will respond to all data rights requests within one calendar month, as required by
            UK GDPR.
          </p>
        </div>
      </div>
    </div>
  );
}
