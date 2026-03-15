import Link from "next/link";

const guides = [
  { label: "Beginner's Guide", href: "/guides/beginners-guide-to-balcony-solar" },
  { label: "Guide for Renters", href: "/guides/balcony-solar-for-renters" },
  { label: "Is It Legal?", href: "/guides/is-balcony-solar-legal-uk" },
  { label: "Mounting Guide", href: "/guides/how-to-mount-balcony-solar-panels" },
  { label: "Savings Guide", href: "/guides/balcony-solar-savings-uk" },
];

const reviews = [
  { label: "Best Kits UK", href: "/reviews/best-balcony-solar-kits-uk" },
  { label: "EcoFlow STREAM", href: "/reviews/ecoflow-stream" },
  { label: "Anker SOLIX", href: "/reviews/anker-solix" },
  { label: "EcoFlow vs Anker", href: "/reviews/ecoflow-vs-anker" },
];

const regulations = [
  { label: "UK Regulations Overview", href: "/uk-regulations" },
  { label: "Regulation Timeline", href: "/uk-regulations/timeline" },
  { label: "DNO & G98 Explained", href: "/uk-regulations/dno-g98-explained" },
  { label: "Planning Permission", href: "/uk-regulations/planning-permission" },
];

const renters = [
  { label: "Renters Hub", href: "/for-renters" },
  { label: "Landlord Letter Template", href: "/for-renters/landlord-letter-template" },
  { label: "Renters' Rights Act", href: "/for-renters/renters-rights-act-solar" },
  { label: "Juliet Balcony Guide", href: "/for-renters/juliet-balcony-solar" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-xl">☀️</span>
              <span className="font-bold text-white text-base">
                Balcony Solar<span className="text-solar-400">Guide</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              The UK&apos;s independent guide to balcony solar panels. Helping renters and homeowners harness the sun.
            </p>
            <p className="text-xs text-slate-500 mt-3">balconysolarguide.co.uk</p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Guides</h3>
            <ul className="space-y-2">
              {guides.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Reviews</h3>
            <ul className="space-y-2">
              {reviews.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulations */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Regulations</h3>
            <ul className="space-y-2">
              {regulations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Renters */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">For Renters</h3>
            <ul className="space-y-2">
              {renters.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Balcony Solar Guide. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/affiliate-disclosure" className="hover:text-solar-400 transition-colors">Affiliate Disclosure</Link>
            <Link href="/privacy" className="hover:text-solar-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-solar-400 transition-colors">Terms</Link>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-4 leading-relaxed">
          <strong className="text-slate-500">Affiliate disclosure:</strong> Some links on this site are affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you. This helps us keep the site free and independent. We only link to products we&apos;d recommend regardless.
        </p>
      </div>
    </footer>
  );
}
