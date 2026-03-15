import Link from 'next/link'
import InfoBox from '@/components/ui/InfoBox'
import AffiliateNotice from '@/components/ui/AffiliateNotice'

export const metadata = {
  title: 'Balcony Solar Guide UK — Independent Guide to Plug-In Solar Panels',
  description:
    'The UK\'s independent guide to balcony solar panels. Compare kits, calculate savings, understand the regulations, and find the best system whether you rent or own.',
}

const statCards = [
  { value: '£400–£950', label: 'Typical system cost' },
  { value: '£150–£350', label: 'Annual savings' },
  { value: '3–7 years', label: 'Payback period' },
  { value: '300–800W', label: 'Typical system size' },
]

const featuredGuides = [
  {
    href: '/guides/beginners-guide-to-balcony-solar',
    emoji: '📖',
    title: "Beginner's Guide to Balcony Solar",
    description: 'Everything you need to know to get started with plug-in solar panels in the UK.',
  },
  {
    href: '/guides/balcony-solar-for-renters',
    emoji: '🏠',
    title: 'Guide for Renters',
    description: 'Can you install balcony solar as a renter? Here\'s how to go about it.',
  },
  {
    href: '/guides/is-balcony-solar-legal-uk',
    emoji: '⚖️',
    title: 'Is It Legal in the UK?',
    description: 'The current legal status of plug-in solar and what\'s changing in 2026.',
  },
  {
    href: '/guides/how-to-mount-balcony-solar-panels',
    emoji: '🔧',
    title: 'Mounting Guide',
    description: 'How to safely attach panels to your balcony railing or wall.',
  },
  {
    href: '/guides/balcony-solar-savings-uk',
    emoji: '💷',
    title: 'How Much Can You Save?',
    description: 'Realistic UK savings figures broken down by region and usage pattern.',
  },
  {
    href: '/guides/g98-dno-notification-balcony-solar',
    emoji: '📋',
    title: 'G98 & DNO Guide',
    description: 'Do you need to notify your Distribution Network Operator? Here\'s the answer.',
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
    badgeColour: 'bg-slate-600',
    name: 'Plug-in Solar 600W Kit',
    meta: '£399 · 600W · DIY kit',
    summary:
      'A no-frills DIY kit that delivers solid results at a fraction of the price. Great if you\'re comfortable with a basic setup.',
  },
]

const newsItems = [
  {
    date: '15 Mar 2026',
    headline: 'Government announces plug-in solar legalisation',
    href: '/news/balcony-solar-legal-uk-2026',
  },
  {
    date: 'Feb 2026',
    headline: 'Solar Roadmap published — what it means for renters',
    href: '/news/uk-solar-roadmap-explained',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-solar-500/20 border border-solar-500/40 rounded-full px-4 py-1.5 text-solar-300 text-sm font-medium mb-6">
            <span>☀️</span>
            <span>Updated March 2026 · Now covering the new legalisation announcement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The UK&rsquo;s&nbsp;#1 Guide to{' '}
            <span className="text-solar-400">Balcony Solar Panels</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Independent, jargon-free advice on plug-in solar panels for renters and homeowners
            alike. Compare systems, calculate your savings, and understand UK regulations — all in
            one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-solar-500 hover:bg-solar-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-solar-900/30"
            >
              📊 Calculate your savings
            </Link>
            <Link
              href="/guides/beginners-guide-to-balcony-solar"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              📖 Read the beginner&rsquo;s guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── Legal status banner ── */}
      <section className="bg-solar-500 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
          <p className="font-medium text-sm sm:text-base">
            🎉 <strong>Big news:</strong> The UK government announced on 15 March 2026 it is working
            to legalise plug-in balcony solar panels. Now is the perfect time to learn more.
          </p>
          <Link
            href="/guides/is-balcony-solar-legal-uk"
            className="shrink-0 bg-white text-solar-600 font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-solar-50 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* ── What is balcony solar? ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text column */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What is balcony solar?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Balcony solar panels — also known as <strong>balcony power stations</strong> or{' '}
                <em>Stecker-Solar</em> (plug-in solar) — are compact photovoltaic systems designed
                to be mounted on a balcony railing, flat roof edge, or garden fence. They require no
                rewiring or professional electrician.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Here&rsquo;s how they work: sunlight hits the solar panels, which feed electricity
                to a <strong>micro-inverter</strong> that converts DC power to the 230V AC your home
                uses. You plug the system into a standard 13-amp socket, and from that moment your
                home draws less electricity from the grid — reducing your bill automatically.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                A typical UK system runs at <strong>300–800W</strong>, costs between{' '}
                <strong>£400 and £950</strong>, and can save a household{' '}
                <strong>£150–£350 per year</strong> depending on usage, orientation and local
                irradiance.
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
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-solar-500 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}

              {/* Extra info box spanning full width */}
              <div className="col-span-2 bg-solar-50 border border-solar-200 rounded-2xl p-5">
                <p className="text-sm text-solar-800 leading-relaxed">
                  <strong>Popular in Germany, growing in the UK.</strong> Germany has over 500,000
                  balcony solar installations. The UK is catching up fast — particularly since the
                  government&rsquo;s 2026 legalisation announcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured guides ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Essential guides</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Whether you&rsquo;re a first-time buyer or a seasoned renter, our guides cover
              everything you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-solar-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-4 block">{guide.emoji}</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-solar-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{guide.description}</p>
                <span className="text-solar-600 text-sm font-semibold">Read guide →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-solar-600 font-semibold hover:text-solar-700 transition-colors"
            >
              View all guides →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews section ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Top-rated balcony solar systems
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Our reviews aggregate opinions from verified buyers, independent testers and energy
              experts across the UK.
            </p>
          </div>

          <AffiliateNotice />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {reviewCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-solar-300 hover:shadow-md transition-all flex flex-col"
              >
                <div className={`${card.badgeColour} text-white text-xs font-semibold px-4 py-2`}>
                  {card.badge}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-solar-600 transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-solar-600 text-sm font-medium mb-3">{card.meta}</p>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{card.summary}</p>
                  <span className="mt-4 text-solar-600 text-sm font-semibold">
                    Read review →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Compare all link */}
          <div className="mt-8 border border-solar-200 bg-solar-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 text-lg">Compare all UK kits side by side</p>
              <p className="text-slate-500 text-sm">
                See a full comparison table covering price, wattage, inverter type, app support and
                more.
              </p>
            </div>
            <Link
              href="/reviews/best-balcony-solar-kits-uk"
              className="shrink-0 bg-solar-500 hover:bg-solar-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              See comparison →
            </Link>
          </div>

          <p className="text-xs text-slate-400 text-center mt-6">
            Our reviews are curated aggregations linking to independent sources. We do not host
            retailer reviews directly.
          </p>
        </div>
      </section>

      {/* ── Calculator CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-solar-500 to-solar-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl mb-6 block">📊</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Find out how much you could save
          </h2>
          <p className="text-solar-100 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Our free savings calculator uses real UK solar irradiance data, current electricity
            tariff rates and your household profile to estimate your annual savings and payback
            period.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-white text-solar-600 font-bold px-10 py-4 rounded-xl text-lg hover:bg-solar-50 transition-colors shadow-lg"
          >
            Use the free calculator →
          </Link>
        </div>
      </section>

      {/* ── For renters callout ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-4xl mb-4 block">🏘️</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Renting? You&rsquo;re not forgotten.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                There are an estimated <strong>4.4 million private rented households</strong> in
                England alone. For too long, access to solar energy has been restricted to
                homeowners. Balcony solar changes that.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
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
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-solar-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📋</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-solar-600 transition-colors">
                      Renter&rsquo;s Solar Hub
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Your complete guide to balcony solar as a tenant — rights, options and
                      practical steps.
                    </p>
                    <span className="mt-3 inline-block text-solar-600 text-sm font-semibold">
                      Visit the hub →
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/for-renters/landlord-letter-template"
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-solar-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-solar-600 transition-colors">
                      Free Landlord Letter Template
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      A professional, polite letter you can personalise and send to your landlord
                      today.
                    </p>
                    <span className="mt-3 inline-block text-solar-600 text-sm font-semibold">
                      Download template →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest news ── */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Latest news</h2>
            <Link
              href="/news"
              className="text-solar-600 font-semibold text-sm hover:text-solar-700 transition-colors"
            >
              All news →
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {newsItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex-1 flex items-start gap-4 border border-slate-200 rounded-2xl p-5 hover:border-solar-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl shrink-0">📰</span>
                <div>
                  <p className="text-xs text-solar-600 font-semibold mb-1">{item.date}</p>
                  <p className="font-semibold text-slate-800 group-hover:text-solar-700 transition-colors leading-snug">
                    {item.headline}
                  </p>
                  <span className="mt-2 inline-block text-solar-600 text-xs font-semibold">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
