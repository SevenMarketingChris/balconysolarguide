import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata = {
  title: "Balcony Solar News UK — Latest Regulation & Policy Updates",
  description:
    "Stay up to date with UK balcony solar regulation news, government announcements, and policy changes that affect plug-in solar panel owners and renters.",
};

const articles = [
  {
    slug: "plug-in-solar-now-legal-uk-2026",
    date: "15 March 2026",
    dateISO: "2026-03-15",
    badge: "Breaking News",
    badgeClass: "bg-red-500",
    title: "Plug-In Solar Is Now Legal in the UK: Everything That Changes",
    summary:
      "The UK government has announced it is working to formally legalise plug-in balcony solar panels. We break down what was announced, what changes immediately, and what still needs to happen.",
  },
  {
    slug: "balcony-solar-legal-uk-2026",
    date: "15 March 2026",
    dateISO: "2026-03-15",
    badge: "Breaking",
    badgeClass: "bg-solar-500",
    title: "UK Government Announces Plans to Legalise Plug-In Balcony Solar Panels",
    summary:
      "The Government has committed to working 'at pace' to create a formal regulatory framework for plug-in balcony solar in the UK — ending years of regulatory ambiguity and opening the door to millions of renters and flat owners.",
  },
  {
    slug: "uk-solar-roadmap-explained",
    date: "1 June 2025",
    dateISO: "2025-06-01",
    badge: "Analysis",
    badgeClass: "bg-slate-600",
    title: "The UK Solar Roadmap Explained: What It Means for Balcony Solar",
    summary:
      "The Government's Solar Roadmap, published June 2025, sets out a path to 70GW of solar capacity by 2035. We break down exactly what it says about plug-in solar, residential rooftop, and the role of simplified regulation.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="News & Policy"
        title="Balcony Solar News UK"
        subtitle="Regulation, policy, and government announcements that affect balcony solar owners and those thinking about installing."
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "News" }]} />

        <div className="bg-white rounded-xl border border-slate-200 px-6 py-5 mb-8 text-slate-700 text-base leading-relaxed">
          <p>
            Balcony solar sits in an unusual regulatory position in the UK. Unlike Germany, where
            plug-in solar panels (
            <em>Balkonkraftwerke</em>) have been explicitly legalised and now number over 1.2
            million installations, UK plug-in solar exists in a grey area: technically requiring
            notification to your Distribution Network Operator (DNO) and compliance with Part P of
            the Building Regulations, but without a specific standard or simplified pathway for
            homeowners.
          </p>
          <p className="mt-3">
            That is now beginning to change. Following years of campaigning by renewable energy
            advocates and pressure from the example set by Germany and other European neighbours,
            the UK Government has begun moving towards a formal framework. This page tracks the
            most important developments.
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-solar-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-white text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${article.badgeClass}`}
                >
                  {article.badge}
                </span>
                <time
                  dateTime={article.dateISO}
                  className="text-sm text-slate-500"
                >
                  {article.date}
                </time>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-solar-700 transition-colors leading-snug mb-2">
                {article.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{article.summary}</p>
              <p className="mt-4 text-solar-600 text-sm font-semibold group-hover:underline">
                Read article →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-slate-100 rounded-xl px-6 py-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-700 mb-1">Want regulation updates by email?</p>
          <p>
            We publish analysis whenever significant UK balcony solar regulation news breaks. Bookmark
            this page or check back regularly — particularly in 2026 as the BSI standard
            development progresses.
          </p>
        </div>
      </div>
    </div>
  );
}
