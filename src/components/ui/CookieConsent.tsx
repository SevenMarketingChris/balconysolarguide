"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID = "G-VR2J7TGWHX";

export default function CookieConsent() {
  const [consent, setConsent] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    setConsent(stored);
    setLoaded(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");

    // Update gtag consent mode
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
  }

  const showBanner = loaded && consent === null;
  const gaAccepted = consent === "accepted";

  return (
    <>
      {/* Only load GA scripts when user has accepted */}
      {gaAccepted && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie consent banner */}
      {showBanner && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-[#0c1f3d] text-white px-4 py-3 shadow-lg">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-white/90">
              We use cookies for analytics to improve this site.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={reject}
                className="rounded-md border border-white/30 px-4 py-1.5 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Reject
              </button>
              <button
                onClick={accept}
                className="rounded-md bg-solar-500 hover:bg-solar-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
