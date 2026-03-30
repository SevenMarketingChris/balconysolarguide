import Link from 'next/link'
import InfoBox from '@/components/ui/InfoBox'

export const metadata = {
  title: {
    absolute: 'Balcony Solar Panels UK 2026 — Reviews, Savings Calculator & Buying Guide',
  },
  description:
    "The UK's independent guide to balcony solar panels. Compare kits, calculate savings, understand regulations, and find the best system for renters and homeowners.",
}

const featuredGuides = [
  {
    href: '/guides/beginners-guide-to-balcony-solar',
    title: "Beginner's Guide to Balcony Solar",
    description: 'Everything you need to know to get started with plug-in solar panels in the UK.',
  },
  {
    href: '/guides/balcony-solar-for-renters',
    title: 'Guide for Renters',
    description: "Can you install balcony solar as a renter? Here's how to go about it.",
  },
  {
    href: '/guides/is-balcony-solar-legal-uk',
    title: 'Is It Legal in the UK?',
    description: "The current legal status of plug-in solar and what's changing in 2026.",
  },
  {
    href: '/guides/how-to-mount-balcony-solar-panels',
    title: 'Mounting Guide',
    description: 'How to safely attach panels to your balcony railing or wall.',
  },
  {
    href: '/guides/balcony-solar-savings-uk',
    title: 'How Much Can You Save?',
    description: 'Realistic UK savings figures broken down by region and usage pattern.',
  },
  {
    href: '/guides/g98-dno-notification-balcony-solar',
    title: 'G98 & DNO Guide',
    description: "Do you need to notify your Distribution Network Operator? Here's the answer.",
  },
]

const reviewCards = [
  {
    href: '/reviews/ecoflow-stream',
    badge: 'Best all-rounder',
    badgeColour: 'bg-solar-500',
    name: 'EcoFlow STREAM',
    meta: '£949 · 600W · All-in-one smart system',
    summary:
      'The EcoFlow STREAM combines panels, micro-inverter and app monitoring in one slick package. Our top pick for most UK households.',
  },
  {
    href: '/reviews/anker-solix',
    badge: 'Best for maximising generation',
    badgeColour: 'bg-emerald-600',
    name: 'Anker SOLIX',
    meta: '£899 · 800W · High output',
    summary:
      'The 800W output makes the Anker SOLIX the highest-generating plug-in system available in the UK, ideal for south-facing balconies.',
  },
  {
    href: '/reviews/plug-in-solar-kit',
    badge: 'Best budget option',
    badgeColour: 'bg-[#5a5250]',
    name: 'Plug-in Solar 600W Kit',
    meta: '£399 · 600W · DIY kit',
    summary:
      "A no-frills DIY kit that delivers solid results at a fraction of the price. Great if you're comfortable with a basic setup.",
  },
]

const newsItems = [
  {
    date: '15 Mar 2026',
    headline: 'UK moves to legalise plug-in solar: everything that changes',
    href: '/news/plug-in-solar-now-legal-uk-2026',
  },
  {
    date: '15 Mar 2026',
    headline: 'BSI commissioned to create UK balcony solar standard',
    href: '/news/bsi-standard-balcony-solar-uk',
  },
  {
    date: '16 Mar 2026',
    headline: 'UK supermarkets set to stock balcony solar panels',
    href: '/news/supermarkets-balcony-solar-uk',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-[#0c1f3d] text-white min-h-[85vh] flex flex-col justify-center px-4 overflow-hidden">
        {/* Large decorative sun geometry - top right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1" />
            <circle cx="250" cy="250" r="160" stroke="white" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="0.5" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const x1 = 250 + 170 * Math.cos(angle)
              const y1 = 250 + 170 * Math.sin(angle)
              const x2 = 250 + 220 * Math.cos(angle)
              const y2 = 250 + 220 * Math.sin(angle)
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="1"
                />
              )
            })}
          </svg>
        </div>

        {/* Radial glow - solar */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(249,115,22,0.18),transparent_65%)] pointer-events-none" />
        {/* Radial glow - leaf */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(68,140,74,0.1),transparent_60%)] pointer-events-none" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="max-w-5xl mx-auto w-full py-24 relative">
          {/* Animated badge */}
          <div
            className="inline-flex items-center gap-2.5 bg-solar-500/15 border border-solar-500/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-solar-400 animate-pulse" />
            <span className="text-solar-300 text-sm font-medium">
              Updated March 2026 &middot; Legalisation announced
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s', fontVariationSettings: '"opsz" 18' }}
          >
            The UK&rsquo;s&nbsp;guide to
            <br />
            <span className="text-solar-400">balcony solar</span>
          </h1>

          <p
            className="text-[#a8c5f0] text-lg sm:text-xl max-w-xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            Independent, accurate advice on plug-in solar for renters and homeowners. Compare
            systems, calculate savings, understand UK regulations.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-solar-500 hover:bg-solar-600 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-solar-900/40 hover:shadow-solar-900/60 hover:-translate-y-0.5"
            >
              Calculate your savings
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-80"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/guides/beginners-guide-to-balcony-solar"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-medium px-7 py-3.5 rounded-xl text-base transition-all"
            >
              Read the beginner&rsquo;s guide
            </Link>
            <Link
              href="/deals"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-medium px-7 py-3.5 rounded-xl text-base transition-all"
            >
              See deals &amp; prices
            </Link>
          </div>
        </div>

        {/* Stat strip at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '£400–£950', label: 'Typical system cost' },
              { value: '£80–£200', label: 'Annual savings' },
              { value: '6–10 years', label: 'Payback period' },
              { value: '300–800W', label: 'System size range' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-display font-bold text-xl text-solar-400"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {stat.value}
                </p>
                <p className="text-[#607899] text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Legal status banner ── */}
      <section className="bg-[#0c1f3d] border-b border-[#0d1f38]">
        <div className="max-w-5xl mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-solar-400 flex-shrink-0" />
            <p className="text-[#a8c5f0] text-sm">
              <strong className="text-white">Big news:</strong> The UK government announced on 15 March 2026 it is working to legalise plug-in balcony solar panels.
            </p>
          </div>
          <Link
            href="/guides/is-balcony-solar-legal-uk"
            className="shrink-0 bg-solar-500/20 hover:bg-solar-500/30 border border-solar-500/40 text-solar-300 font-semibold text-xs px-4 py-1.5 rounded-full transition-colors"
          >
            Read more
          </Link>
        </div>
      </section>

      {/* ── What is balcony solar? ── */}
      <section className="py-20 px-4 bg-[#f0f7ff]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Text column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-5 bg-solar-400" />
                <p className="text-solar-600 text-xs font-semibold uppercase tracking-[0.12em]">
                  What is it?
                </p>
              </div>
              <h2
                className="font-display font-bold text-3xl text-[#0c1f3d] mb-5 leading-tight"
                style={{ fontVariationSettings: '"opsz" 18' }}
              >
                What is balcony solar?
              </h2>
              <p className="text-[#2d4a6b] leading-relaxed mb-4">
                Balcony solar panels — also known as{' '}
                <strong className="text-[#0c1f3d]">balcony power stations</strong> or{' '}
                <em>Stecker-Solar</em> (plug-in solar) — are compact photovoltaic systems designed
                to be mounted on a balcony railing, flat roof edge, or garden fence. They require no
                rewiring or professional electrician.
              </p>
              <p className="text-[#2d4a6b] leading-relaxed mb-4">
                Here&rsquo;s how they work: sunlight hits the solar panels, which feed electricity
                to a <strong className="text-[#0c1f3d]">micro-inverter</strong> that converts DC
                power to the 230V AC your home uses. You plug the system into a standard 13-amp
                socket, and from that moment your home draws less electricity from the grid —
                reducing your bill automatically.
              </p>
              <p className="text-[#2d4a6b] leading-relaxed mb-6">
                A typical UK system runs at{' '}
                <strong className="text-[#0c1f3d]">300–800W</strong>, costs between{' '}
                <strong className="text-[#0c1f3d]">£400 and £950</strong>, and can save a household{' '}
                <strong className="text-[#0c1f3d]">£80–£200 per year</strong> depending on usage,
                orientation and local irradiance.
              </p>

              <InfoBox variant="tip" title="No electrician required">
                Most plug-in solar kits can be installed in under two hours with basic DIY skills.
                You do not need to rewire anything or apply for planning permission in most cases —
                though DNO notification may be required. See our{' '}
                <Link href="/guides/g98-dno-notification-balcony-solar" className="underline">
                  G98 guide
                </Link>{' '}
                for details.
              </InfoBox>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '£400–£950', label: 'Typical system cost' },
                { value: '£80–£200', label: 'Annual savings' },
                { value: '6–10 years', label: 'Payback period' },
                { value: '300–800W', label: 'Typical system size' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#dbe8ff] rounded-2xl p-6 text-center shadow-sm"
                >
                  <p
                    className="font-display text-3xl font-bold text-solar-500 mb-1"
                    style={{ fontVariationSettings: '"opsz" 16' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#4a607a] font-medium">{stat.label}</p>
                </div>
              ))}

              {/* Extra info box spanning full width */}
              <div className="col-span-2 bg-solar-50 border border-solar-200 rounded-2xl p-5">
                <p className="text-sm text-solar-900 leading-relaxed">
                  <strong>Popular in Germany, growing in the UK.</strong> Germany now has over 1.2 million
                  balcony solar installations. The UK is catching up fast — particularly since the
                  government&rsquo;s 2026 legalisation announcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured guides ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-5 bg-solar-400" />
              <p className="text-solar-600 text-xs font-semibold uppercase tracking-[0.12em]">
                Learn
              </p>
              <div className="h-px w-5 bg-solar-400" />
            </div>
            <h2
              className="font-display font-bold text-3xl text-[#0c1f3d] mb-3"
              style={{ fontVariationSettings: '"opsz" 18' }}
            >
              Essential guides
            </h2>
            <p className="text-[#4a607a] text-lg max-w-xl mx-auto">
              Whether you&rsquo;re just getting started or ready to buy, our guides cover
              everything you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGuides.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white border border-[#dbe8ff] rounded-2xl p-6 hover:border-solar-300 hover:shadow-lg hover:shadow-solar-100/60 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-solar-50 border border-solar-100 flex items-center justify-center mb-4 group-hover:bg-solar-100 transition-colors">
                  <span
                    className="text-solar-600 font-bold text-sm font-display"
                    style={{ fontVariationSettings: '"opsz" 12' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className="font-display font-bold text-[#0c1f3d] text-lg mb-2 group-hover:text-solar-700 transition-colors"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {guide.title}
                </h3>
                <p className="text-[#4a607a] text-sm leading-relaxed mb-4">{guide.description}</p>
                <span className="text-solar-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read guide
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-solar-600 font-semibold hover:text-solar-700 transition-colors text-sm"
            >
              View all guides
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews section ── */}
      <section className="py-20 px-4 bg-[#f0f7ff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-5 bg-solar-400" />
              <p className="text-solar-600 text-xs font-semibold uppercase tracking-[0.12em]">
                Reviews
              </p>
              <div className="h-px w-5 bg-solar-400" />
            </div>
            <h2
              className="font-display font-bold text-3xl text-[#0c1f3d] mb-3"
              style={{ fontVariationSettings: '"opsz" 18' }}
            >
              Top-rated balcony solar systems
            </h2>
            <p className="text-[#4a607a] text-lg max-w-xl mx-auto">
              Our reviews aggregate opinions from verified buyers, independent testers and energy
              experts across the UK.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group border border-[#dbe8ff] rounded-2xl overflow-hidden hover:border-solar-300 hover:shadow-lg hover:shadow-solar-100/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col bg-white"
              >
                <div
                  className={`${card.badgeColour} text-white text-xs font-semibold px-4 py-2.5 tracking-wide`}
                >
                  {card.badge}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="font-display font-bold text-[#0c1f3d] text-xl mb-1 group-hover:text-solar-700 transition-colors"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {card.name}
                  </h3>
                  <p className="text-solar-600 text-sm font-medium mb-3">{card.meta}</p>
                  <p className="text-[#4a607a] text-sm leading-relaxed flex-1">{card.summary}</p>
                  <span className="mt-4 text-solar-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read review
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Compare all link */}
          <div className="mt-8 border border-[#dbe8ff] bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <p
                className="font-display font-bold text-[#0c1f3d] text-lg mb-1"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Compare all UK kits side by side
              </p>
              <p className="text-[#4a607a] text-sm">
                See a full comparison table covering price, wattage, inverter type, app support and
                more.
              </p>
            </div>
            <Link
              href="/reviews/best-balcony-solar-kits-uk"
              className="shrink-0 bg-solar-500 hover:bg-solar-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 text-sm"
            >
              See comparison
            </Link>
          </div>

          <p className="text-xs text-[#607899] text-center mt-6">
            Our reviews are curated aggregations linking to independent sources. We do not host
            retailer reviews directly.
          </p>
        </div>
      </section>

      {/* ── Calculator CTA ── */}
      <section className="relative py-24 px-4 bg-[#0c1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(249,115,22,0.12),transparent_70%)] pointer-events-none" />
        {/* Decorative circles */}
        <div className="absolute right-[-10%] top-[-20%] w-[500px] h-[500px] rounded-full border border-solar-500/10 pointer-events-none" />
        <div className="absolute right-[-5%] top-[-10%] w-[350px] h-[350px] rounded-full border border-solar-500/[0.08] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-solar-500/20 border border-solar-500/30 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-solar-400"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14 17.5h7M17.5 14v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ fontVariationSettings: '"opsz" 18' }}
          >
            Find out how much you could save
          </h2>
          <p className="text-[#a8c5f0] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Our free savings calculator uses real UK solar irradiance data and your household
            profile to estimate your annual savings and payback period.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-600 text-white font-semibold px-10 py-4 rounded-xl text-lg hover:-translate-y-0.5 transition-all shadow-xl shadow-solar-900/40"
          >
            Use the free calculator
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── For renters callout ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-5 bg-leaf-400" />
                <p className="text-leaf-600 text-xs font-semibold uppercase tracking-[0.12em]">
                  For Renters
                </p>
              </div>
              <h2
                className="font-display font-bold text-3xl text-[#0c1f3d] mb-4 leading-tight"
                style={{ fontVariationSettings: '"opsz" 18' }}
              >
                Renting? You&rsquo;re not forgotten.
              </h2>
              <p className="text-[#2d4a6b] leading-relaxed mb-4">
                There are an estimated{' '}
                <strong className="text-[#0c1f3d]">4.4 million private rented households</strong>{' '}
                in England alone. For too long, access to solar energy has been restricted to
                homeowners. Balcony solar changes that.
              </p>
              <p className="text-[#2d4a6b] leading-relaxed mb-6">
                Because these systems plug in rather than connect to your wiring, many renters can
                install them without landlord permission — though we always recommend having an
                honest conversation with your landlord first. Our renter&rsquo;s hub covers
                everything from legal rights to a ready-made letter template you can send today.
              </p>

              <InfoBox variant="info" title="Renters' Rights Act 2025">
                The Renters&rsquo; Rights Act introduces new protections that may affect your
                ability to make energy improvements. Our guide explains how balcony solar fits into
                the new framework.
              </InfoBox>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/for-renters"
                className="group bg-[#f0f7ff] border border-[#dbe8ff] rounded-2xl p-6 hover:border-solar-300 hover:shadow-lg hover:shadow-solar-100/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#dbe8ff] flex items-center justify-center flex-shrink-0 group-hover:border-solar-200 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-solar-500">
                      <path d="M9 1L2 7v9h5v-5h4v5h5V7L9 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-[#0c1f3d] text-lg mb-1 group-hover:text-solar-600 transition-colors"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      Renter&rsquo;s Solar Hub
                    </h3>
                    <p className="text-[#4a607a] text-sm leading-relaxed">
                      Your complete guide to balcony solar as a tenant — rights, options and
                      practical steps.
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-solar-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Visit the hub
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/for-renters/landlord-letter-template"
                className="group bg-[#f0f7ff] border border-[#dbe8ff] rounded-2xl p-6 hover:border-solar-300 hover:shadow-lg hover:shadow-solar-100/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#dbe8ff] flex items-center justify-center flex-shrink-0 group-hover:border-solar-200 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-solar-500">
                      <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-[#0c1f3d] text-lg mb-1 group-hover:text-solar-600 transition-colors"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      Free Landlord Letter Template
                    </h3>
                    <p className="text-[#4a607a] text-sm leading-relaxed">
                      A professional, polite letter you can personalise and send to your landlord
                      today.
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-solar-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Download template
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest news ── */}
      <section className="py-16 px-4 bg-[#f0f7ff] border-t border-[#dbe8ff]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="font-display font-bold text-2xl text-[#0c1f3d]"
              style={{ fontVariationSettings: '"opsz" 16' }}
            >
              Latest news
            </h2>
            <Link
              href="/news"
              className="text-solar-600 font-semibold text-sm hover:text-solar-700 transition-colors inline-flex items-center gap-1"
            >
              All news
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {newsItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex-1 border-l-2 border-solar-300 bg-white border border-[#dbe8ff] rounded-r-2xl pl-5 pr-5 py-5 hover:border-l-solar-500 hover:shadow-md hover:shadow-solar-100/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-xs text-solar-600 font-semibold mb-1.5 uppercase tracking-wide">
                  {item.date}
                </p>
                <p className="font-semibold text-[#0c1f3d] group-hover:text-solar-700 transition-colors leading-snug mb-3">
                  {item.headline}
                </p>
                <span className="inline-flex items-center gap-1 text-solar-600 text-xs font-semibold group-hover:gap-2 transition-all">
                  Read
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/about"
              className="text-[#607899] hover:text-solar-500 text-sm font-medium transition-colors"
            >
              About Balcony Solar Guide &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
