import Link from "next/link";

const guides = [
  { label: "Beginner's Guide", href: "/guides/beginners-guide-to-balcony-solar" },
  { label: "Guide for Renters", href: "/guides/balcony-solar-for-renters" },
  { label: "Is It Legal?", href: "/guides/is-balcony-solar-legal-uk" },
  { label: "Mounting Guide", href: "/guides/how-to-mount-balcony-solar-panels" },
  { label: "Cost Guide", href: "/guides/how-much-does-balcony-solar-cost-uk" },
  { label: "Savings Guide", href: "/guides/balcony-solar-savings-uk" },
];

const reviews = [
  { label: "Best Kits UK", href: "/reviews/best-balcony-solar-kits-uk" },
  { label: "EcoFlow STREAM", href: "/reviews/ecoflow-stream" },
  { label: "Anker SOLIX", href: "/reviews/anker-solix" },
  { label: "APsystems DS3", href: "/reviews/apsystems-ds3" },
  { label: "Hoymiles HM-600", href: "/reviews/hoymiles-hm-600" },
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
    <footer className="bg-[#060d1e] text-[#a8c5f0] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-solar-500 flex-shrink-0">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-display font-bold text-white text-base leading-tight">
                Balcony Solar<span className="text-solar-400">Guide</span>
              </span>
            </Link>
            <p className="text-sm text-[#6a8aaa] leading-relaxed">
              The UK&apos;s independent guide to balcony solar panels. Helping renters and homeowners harness the sun.
            </p>
            <p className="text-xs text-[#6a8aaa] mt-4">balconysolarguide.co.uk</p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-xs font-semibold text-[#a8c5f0] uppercase tracking-widest mb-4">
              Guides
            </h3>
            <ul className="space-y-2.5">
              {guides.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6a8aaa] hover:text-solar-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-xs font-semibold text-[#a8c5f0] uppercase tracking-widest mb-4">
              Reviews
            </h3>
            <ul className="space-y-2.5">
              {reviews.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6a8aaa] hover:text-solar-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulations */}
          <div>
            <h3 className="text-xs font-semibold text-[#a8c5f0] uppercase tracking-widest mb-4">
              Regulations
            </h3>
            <ul className="space-y-2.5">
              {regulations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6a8aaa] hover:text-solar-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Renters */}
          <div>
            <h3 className="text-xs font-semibold text-[#a8c5f0] uppercase tracking-widest mb-4">
              For Renters
            </h3>
            <ul className="space-y-2.5">
              {renters.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6a8aaa] hover:text-solar-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0d1f38] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-[#6a8aaa]">
            &copy; {new Date().getFullYear()} Balcony Solar Guide. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-[#6a8aaa]">
            <Link href="/about" className="hover:text-solar-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-solar-400 transition-colors">
              Contact
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-solar-400 transition-colors">
              Affiliate Disclosure
            </Link>
            <Link href="/privacy" className="hover:text-solar-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-solar-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>

        <p className="text-xs text-[#6a8aaa] mt-5 leading-relaxed">
          <strong className="text-[#a8c5f0]">Affiliate disclosure:</strong> Some links on this site are affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you. This helps us keep the site free and independent. We only link to products we&apos;d recommend regardless.
        </p>
      </div>
    </footer>
  );
}
