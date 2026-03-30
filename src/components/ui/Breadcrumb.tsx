import Link from "next/link";

const BASE_URL = "https://www.balconysolarguide.co.uk";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const allCrumbs = [{ label: "Home", href: "/" }, ...crumbs];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allCrumbs.map((crumb, i) => {
      const item: Record<string, string | number> = {
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
      };
      // Last item should NOT have an item URL (it's the current page)
      if (i < allCrumbs.length - 1 && crumb.href) {
        item.item = `${BASE_URL}${crumb.href}`;
      }
      return item;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
