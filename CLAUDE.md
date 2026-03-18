# balconysolarguide.co.uk

## Project overview

UK-focused content site about balcony/plug-in solar panels. Target audience: renters and flat-dwellers who can't install rooftop solar but can mount panels on a balcony, wall, or garden.

Built with Next.js 16, Tailwind CSS, TypeScript. Static/SSG, no database.

GitHub: SevenMarketingChris/balconysolarguide

## Site structure

```
src/app/
  page.tsx                  — homepage
  calculator/               — savings calculator
  guides/                   — 18 how-to/educational guides
  reviews/                  — product reviews (Anker Solix, EcoFlow Stream, etc.)
  deals/                    — affiliate deals
  news/                     — news articles (3 so far)
  uk-regulations/           — regulatory explainers (building regs, DNO/G98, etc.)
  for-renters/              — renter-specific content
  affiliate-disclosure/
  privacy/
  terms/
```

## Key components

- `PageHero` — hero section with eyebrow/title/subtitle/badge
- `InfoBox` — coloured callout boxes (variant: success/info/tip/warning)
- `Breadcrumb` — breadcrumb trail
- `AffiliateNotice` — FTC/ASA disclosure notice
- `SolarCalculator` — interactive savings calculator
- `Header` / `Footer` — site chrome

## Prose styling

All article bodies use `className="prose-solar"` — a custom Tailwind prose variant defined in tailwind.config.ts.

## Content writing style

- UK English throughout
- Practical, honest, no hype
- Technically accurate on electrical/regulatory topics
- Cites specific standards (BS 7671, G98, Part P) by name
- Articles use `<InfoBox>` for key callouts and FAQPage schema markup in JSX

## Key facts to keep accurate

- G98 notification required today for any grid-connected generation
- BS 7671 ring circuit ambiguity — the technical concern, not a safety record problem
- Germany = Balkonkraftwerke, DIN VDE 0100-551-1, Solarpaket I (2024), ~1.2m units by 2026
- 800W = the EU/UK target limit for simplified notification
- BSI commissioned March 2026 to create UK standard
- Simplified DNO registration pathway — under development, not live yet
- Smart Export Guarantee currently requires MCS certification (most DIY installs can't qualify)
- Brands: EcoFlow, Anker Solix, APsystems, Hoymiles, Jackery

## March 2026 news — the big moment

On 15 March 2026, Ed Miliband / DESNZ announced the UK will legalise plug-in solar "at pace":
- BSI commissioned to create a UK technical standard (analogous to German DIN VDE spec)
- Simplified DNO notification pathway under development (targeting simpler than G98)
- Supermarket chains in talks to stock units
- Triggered partly by Middle East energy security concerns (Iran conflict)
- Progress report to Parliament within 6 months
- Full framework target: end 2026 (BSI standard more likely 2027)
- This is the biggest news moment in UK balcony solar history — peak search interest now

## Deployment

Not yet deployed. Target: Vercel.

## Monetisation

Affiliate links planned in reviews/ and deals/ pages. Not yet wired up with real URLs.
