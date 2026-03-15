"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Guides", href: "/guides" },
  { label: "Reviews", href: "/reviews" },
  { label: "Calculator", href: "/calculator" },
  { label: "For Renters", href: "/for-renters" },
  { label: "UK Regulations", href: "/uk-regulations" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">☀️</span>
            <span className="font-bold text-slate-900 text-lg leading-tight">
              Balcony Solar<span className="text-solar-500">Guide</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-solar-600 hover:bg-solar-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              className="ml-3 px-4 py-2 bg-solar-500 hover:bg-solar-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Calculate savings
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-1 pt-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-solar-600 hover:bg-solar-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              onClick={() => setOpen(false)}
              className="block mt-2 mx-3 px-4 py-2 bg-solar-500 hover:bg-solar-600 text-white text-sm font-semibold rounded-lg text-center"
            >
              Calculate savings
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
