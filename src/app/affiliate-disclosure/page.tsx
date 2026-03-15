import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata = {
  title: "Affiliate Disclosure — Balcony Solar Guide",
  description:
    "Full affiliate disclosure for Balcony Solar Guide. We participate in affiliate programmes including Amazon Associates UK, EcoFlow, and Anker SOLIX.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Legal"
        title="Affiliate Disclosure"
        subtitle="Transparency about how this site earns revenue and how that affects our recommendations."
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "Affiliate Disclosure" }]} />

        <div className="bg-white border border-slate-200 rounded-xl px-8 py-8 prose prose-slate max-w-none">
          <p className="text-slate-500 text-sm">Last updated: March 2026</p>

          <h2>Overview</h2>
          <p>
            Balcony Solar Guide (<strong>balconysolarguide.co.uk</strong>) participates in affiliate
            marketing programmes. This means that when you click certain links on this site and
            subsequently make a purchase, we may receive a commission from the retailer or
            manufacturer. This commission comes at no additional cost to you — you pay exactly the
            same price you would have paid by going directly to the retailer.
          </p>

          <h2>Affiliate Programmes We Participate In</h2>
          <p>We currently participate in the following affiliate programmes:</p>
          <ul>
            <li>
              <strong>Amazon Associates UK.</strong> As an Amazon Associate, we earn from qualifying
              purchases made through our Amazon links. Amazon links on this site include an affiliate
              tracking tag (<code>tag=balconysolar-21</code>). Amazon sets its own commission rates,
              which vary by product category.
            </li>
            <li>
              <strong>EcoFlow Affiliate Programme.</strong> We have an affiliate relationship with
              EcoFlow UK. Purchases made through our EcoFlow links may earn us a commission.
            </li>
            <li>
              <strong>Anker SOLIX Affiliate Programme.</strong> We have an affiliate relationship
              with Anker SOLIX. Purchases made through our Anker SOLIX links may earn us a
              commission.
            </li>
          </ul>
          <p>
            We may add further affiliate relationships over time. When we do, this disclosure page
            will be updated. We will also mark all affiliate links clearly using standard HTML link
            attributes (<code>rel="sponsored"</code>) and, where appropriate, explicit on-page
            notices.
          </p>

          <h2>How Affiliate Links Work</h2>
          <p>
            When you click an affiliate link on this site, a cookie is placed in your browser by
            the retailer's affiliate tracking system. If you make a qualifying purchase during the
            cookie window (typically 24 hours for Amazon; up to 30 days for other programmes), the
            retailer attributes the sale to our affiliate account and pays us a commission.
          </p>
          <p>
            You can identify affiliate links on this site by looking for the affiliate notice
            displayed near product recommendations and deals pages. The notice reads: "This page
            contains links to products. If you buy through our links we may earn a commission — at
            no extra cost to you."
          </p>
          <p>
            You are never under any obligation to use our affiliate links. You can always go
            directly to the retailer's website and purchase without using our links — the price
            will be identical.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            Balcony Solar Guide is independently operated. We are not owned, controlled, or funded
            by EcoFlow, Anker, Amazon, or any other manufacturer or retailer whose products we
            review or recommend.
          </p>
          <p>
            Our editorial decisions — which products we review, what ratings we assign, what
            conclusions we reach — are made independently based on our research, testing, and
            analysis. Affiliate relationships do not influence our editorial recommendations. We
            will recommend a product that has a lower commission rate (or no affiliate programme at
            all) if we genuinely believe it is the better choice for our readers.
          </p>
          <p>
            If we receive a product for free or at a discount from a manufacturer for review
            purposes, we will disclose this in the relevant article. At the time of writing, we have
            not received any free products from any manufacturer.
          </p>

          <h2>How Commissions Fund This Site</h2>
          <p>
            Running a quality editorial site requires time, research, and ongoing maintenance.
            Affiliate commissions — when they occur — contribute to covering:
          </p>
          <ul>
            <li>Research time: staying current with regulatory changes, new products, and solar data</li>
            <li>Hosting and technical costs</li>
            <li>Content production and editing</li>
          </ul>
          <p>
            Without this revenue model, publishing detailed, up-to-date, independent information
            about balcony solar in the UK would not be viable as a free public resource.
          </p>

          <h2>UK Consumer Protection Context</h2>
          <p>
            This disclosure is made in accordance with the UK Competition and Markets Authority
            (CMA) guidelines on online endorsements and reviews, and the ASA/CAP Code requirements
            for affiliate marketing. We are committed to full transparency about our commercial
            relationships.
          </p>

          <h2>Questions</h2>
          <p>
            If you have any questions about our affiliate relationships or how they affect the
            content on this site, please see our{" "}
            <a href="/privacy" className="text-solar-600 underline">
              Privacy Policy
            </a>{" "}
            for contact information.
          </p>
        </div>
      </div>
    </div>
  );
}
