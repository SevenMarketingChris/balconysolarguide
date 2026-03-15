import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-solar-600 transition-colors">Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="text-slate-300">/</span>
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-solar-600 transition-colors">{crumb.label}</Link>
          ) : (
            <span className="text-slate-700 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
