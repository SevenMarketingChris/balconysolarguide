export default function AffiliateNotice() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-500 my-6">
      <strong className="text-slate-600">Affiliate links:</strong> This page contains links to products. If you buy through our links we may earn a commission — at no extra cost to you.{" "}
      <a href="/affiliate-disclosure" className="underline hover:text-solar-600">Full disclosure →</a>
    </div>
  );
}
