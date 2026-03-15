interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ eyebrow, title, subtitle, badge }: PageHeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {badge && (
          <span className="inline-block bg-solar-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            {badge}
          </span>
        )}
        {eyebrow && (
          <p className="text-solar-400 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{title}</h1>
        {subtitle && <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
