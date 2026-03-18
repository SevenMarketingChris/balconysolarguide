interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ eyebrow, title, subtitle, badge }: PageHeroProps) {
  return (
    <div className="relative bg-[#0c1f3d] text-white py-16 px-4 overflow-hidden">
      {/* Radial glow - solar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(249,115,22,0.22),transparent_70%)] pointer-events-none" />
      {/* Radial glow - leaf */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_110%,rgba(68,140,74,0.12),transparent_60%)] pointer-events-none" />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        {badge && (
          <span className="inline-block bg-solar-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            {badge}
          </span>
        )}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-solar-500/60" />
            <p className="text-solar-400 text-xs font-semibold uppercase tracking-[0.15em]">
              {eyebrow}
            </p>
          </div>
        )}
        <h1
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-white"
          style={{ fontVariationSettings: '"opsz" 18' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#a8c5f0] text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
