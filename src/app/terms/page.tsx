import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InfoBox from "@/components/ui/InfoBox";

export const metadata = {
  title: "Terms of Use — Balcony Solar Guide",
  description:
    "Terms of use for Balcony Solar Guide. Important information about the nature of the content on this site and your responsibilities as a user.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Please read these terms before using Balcony Solar Guide."
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "Terms of Use" }]} />

        <InfoBox variant="warning" title="This site does not provide professional advice">
          Balcony Solar Guide provides general information only. It does not constitute professional
          electrical, financial, legal, or planning advice. Always consult a qualified professional
          before carrying out any electrical installation work.
        </InfoBox>

        <div className="bg-white border border-slate-200 rounded-xl px-8 py-8 prose prose-slate max-w-none mt-6">
          <p className="text-slate-500 text-sm">Last updated: March 2026</p>

          <h2>1. About These Terms</h2>
          <p>
            These Terms of Use ("Terms") govern your use of the website located at{" "}
            <strong>balconysolarguide.co.uk</strong> (the "Site"), operated by Balcony Solar Guide
            ("we," "us," "our"). By accessing or using the Site, you agree to be bound by these
            Terms. If you do not agree with any part of these Terms, please do not use the Site.
          </p>

          <h2>2. Nature of Content — No Professional Advice</h2>

          <h3>2.1 General Information Only</h3>
          <p>
            All content published on this Site — including guides, articles, calculator outputs,
            product reviews, deals pages, and news articles — is provided for general informational
            and educational purposes only. It is not intended as, and should not be construed as,
            professional advice of any kind, including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Electrical advice.</strong> Nothing on this Site constitutes advice about
              electrical installation, wiring, connection to the electricity grid, or compliance
              with electrical regulations. Electrical installation work in a dwelling is regulated
              in the UK under Part P of the Building Regulations. Connecting equipment to the
              electricity supply can be dangerous if done incorrectly. Always consult a qualified
              electrician registered with a competent person scheme (such as NICEIC, NAPIT, or
              ELECSA) before modifying any electrical installation in your home.
            </li>
            <li>
              <strong>Financial advice.</strong> Savings estimates, payback period calculations,
              and other financial projections produced by the Site's calculator or described in
              articles are estimates based on modelled assumptions. They do not constitute financial
              advice and should not be relied upon as the sole basis for any financial decision.
              Actual savings will vary depending on your consumption patterns, energy tariff,
              shading, system efficiency, and many other factors.
            </li>
            <li>
              <strong>Legal advice.</strong> Information on this Site about regulations, planning
              permission, permitted development, tenancy rights, and leasehold issues is provided as
              general background only. The regulatory landscape for balcony solar in the UK is
              evolving. We strive to keep our content current, but we cannot guarantee that all
              information reflects the most recent legal position. Do not rely on this Site as a
              substitute for legal advice from a qualified solicitor.
            </li>
            <li>
              <strong>Planning and building advice.</strong> We do not provide advice on whether a
              specific installation will comply with planning conditions, permitted development
              rights, or building regulations at a specific property. Always consult your local
              planning authority or a suitably qualified building professional for property-specific
              guidance.
            </li>
          </ul>

          <h3>2.2 Your Responsibility</h3>
          <p>
            You are solely responsible for any decisions you make based on information found on
            this Site. We strongly encourage you to verify any information independently and to
            seek professional advice where appropriate before acting on anything you read here.
          </p>

          <h2>3. Affiliate Links and Commercial Relationships</h2>
          <p>
            This Site contains affiliate links to products and services. If you make a purchase
            through an affiliate link, we may receive a commission from the retailer. Full details
            are set out in our{" "}
            <a href="/affiliate-disclosure" className="text-solar-600 underline">
              Affiliate Disclosure
            </a>
            . The existence of affiliate relationships does not affect the editorial independence
            of our reviews and recommendations, as described in the disclosure.
          </p>

          <h2>4. Accuracy of Information</h2>

          <h3>4.1 Our Commitment</h3>
          <p>
            We make reasonable efforts to ensure that the information published on this Site is
            accurate, up to date, and useful. We review content periodically and update it when
            significant changes occur, particularly in respect of regulation news, product
            availability, and pricing.
          </p>

          <h3>4.2 No Warranty</h3>
          <p>
            Despite our best efforts, we cannot guarantee that all information on this Site is
            complete, accurate, or current at any given time. Solar regulation, product
            specifications, prices, and energy tariffs change frequently. Errors and omissions may
            occur. We provide the Site on an "as is" basis without warranties of any kind, express
            or implied.
          </p>

          <h3>4.3 Pricing and Product Information</h3>
          <p>
            Product prices, availability, and specifications listed on this Site are provided for
            illustrative purposes and were accurate at the time of writing. Prices change; products
            are discontinued; new versions are released. Always verify current pricing and
            specifications directly with the retailer before making a purchase decision.
          </p>

          <h2>5. External Links</h2>
          <p>
            This Site contains links to third-party websites, including retailers, manufacturers,
            government bodies, and other information sources. These links are provided for your
            convenience and information. We have no control over the content or availability of
            external sites and accept no responsibility for them. A link to an external site does
            not constitute an endorsement of that site or its content beyond the specific purpose
            for which the link is provided.
          </p>
          <p>
            We make reasonable efforts to ensure that external links are functioning and lead to
            appropriate content, but we cannot guarantee this and are not responsible for any
            changes to linked pages after we publish our content.
          </p>

          <h2>6. Intellectual Property</h2>

          <h3>6.1 Our Content</h3>
          <p>
            All original content on this Site — including text, guides, analysis, graphics, and
            the design of the Site itself — is the intellectual property of Balcony Solar Guide and
            is protected by copyright. You may not reproduce, redistribute, or republish our
            content without prior written permission, except as expressly permitted below.
          </p>

          <h3>6.2 Permitted Use</h3>
          <p>
            You may view, download, and print pages from this Site for your own personal,
            non-commercial use. You may share links to our pages on social media or in private
            communications. You may quote short extracts (up to 100 words) from our articles for
            the purpose of commentary, criticism, or review, provided you clearly attribute the
            source with a link to the original article.
          </p>

          <h3>6.3 Third-Party Content</h3>
          <p>
            Some content on this Site incorporates data from third parties — including PVGIS
            irradiance data (European Commission/Joint Research Centre), Ofgem data, and
            manufacturer product specifications. Such content remains the intellectual property of
            its respective owners. Our use of this data is for the purpose of commentary and public
            information.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Balcony Solar Guide and its operator
            shall not be liable for:
          </p>
          <ul>
            <li>
              Any loss or damage arising from reliance on information published on this Site.
            </li>
            <li>
              Any loss of savings that do not materialise, or any investment in solar equipment
              that does not achieve the returns estimated by our calculator or described in our
              articles.
            </li>
            <li>
              Any damage to property, electrical installations, or third parties arising from the
              installation or use of solar equipment.
            </li>
            <li>
              Any indirect, consequential, or special loss of any kind.
            </li>
          </ul>
          <p>
            Nothing in these Terms excludes or limits our liability for death or personal injury
            arising from our negligence, or for fraudulent misrepresentation, or for any other
            liability that cannot be excluded by English law.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of this Site is also governed by our{" "}
            <a href="/privacy" className="text-solar-600 underline">
              Privacy Policy
            </a>
            , which is incorporated into these Terms by reference. By using the Site, you consent
            to the data practices described in our Privacy Policy.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will update the "Last
            updated" date at the top of this page. Your continued use of the Site after any changes
            constitutes your acceptance of the revised Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of England and
            Wales. Any disputes arising in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:hello@balconysolarguide.co.uk" className="text-solar-600 underline">
              hello@balconysolarguide.co.uk
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
