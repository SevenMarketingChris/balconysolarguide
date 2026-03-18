"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Guides", href: "/guides" },
  { label: "Reviews", href: "/reviews" },
  { label: "Deals", href: "/deals" },
  { label: "Calculator", href: "/calculator" },
  { label: "For Renters", href: "/for-renters" },
  { label: "UK Regulations", href: "/uk-regulations" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#f0f7ff]/95 backdrop-blur-sm border-b border-[#dbe8ff] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-solar-500" aria-hidden="true">
              <circle cx="12" cy="12" r="5" fill="currentColor"/>
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-display font-bold text-[#0c1f3d] text-lg leading-tight">
              Balcony Solar<span className="text-solar-500">Guide</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#1e3a5f] hover:text-solar-600 hover:bg-solar-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              className="ml-3 px-4 py-2 bg-gradient-to-b from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white text-sm font-semibold rounded-lg transition-all shadow-sm shadow-solar-200"
            >
              Calculate savings
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#1e3a5f] hover:text-[#0c1f3d] hover:bg-[#dbe8ff] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-[#dbe8ff] mt-0 pt-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#1e3a5f] hover:text-solar-600 hover:bg-solar-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              onClick={() => setOpen(false)}
              className="block mt-3 mx-1 px-4 py-2.5 bg-gradient-to-b from-solar-500 to-solar-600 text-white text-sm font-semibold rounded-lg text-center shadow-sm"
            >
              Calculate savings
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
