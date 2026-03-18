import React from "react";

type InfoBoxVariant = "info" | "warning" | "success" | "tip";

const styles: Record<InfoBoxVariant, { box: string; icon: string }> = {
  info: {
    box: "bg-blue-50/80 border-blue-200/80 text-blue-900",
    icon: "text-blue-500",
  },
  warning: {
    box: "bg-amber-50/80 border-amber-200/80 text-amber-900",
    icon: "text-amber-500",
  },
  success: {
    box: "bg-leaf-50 border-leaf-200 text-leaf-900",
    icon: "text-leaf-600",
  },
  tip: {
    box: "bg-solar-50 border-solar-200 text-solar-900 shadow-sm shadow-solar-100",
    icon: "text-solar-500",
  },
};

const icons: Record<InfoBoxVariant, React.ReactElement> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7.25" y="7" width="1.5" height="5" rx="0.75" />
      <circle cx="8" cy="5" r="0.875" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path
        d="M8 1.5L1 14h14L8 1.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="7.25" y="6.5" width="1.5" height="4" rx="0.75" />
      <circle cx="8" cy="12" r="0.875" />
    </svg>
  ),
  success: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5 8.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tip: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M8 1v1M8 14v1M1 8h1M14 8h1M3.05 3.05l.7.7M12.25 12.25l.7.7M3.05 12.95l.7-.7M12.25 3.75l.7-.7"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="3.5" />
    </svg>
  ),
};

interface InfoBoxProps {
  variant?: InfoBoxVariant;
  title?: string;
  children: React.ReactNode;
}

export default function InfoBox({ variant = "info", title, children }: InfoBoxProps) {
  return (
    <div className={`border rounded-xl px-5 py-4 my-6 ${styles[variant].box}`}>
      <div className="flex gap-3">
        <span className={`mt-0.5 flex-shrink-0 ${styles[variant].icon}`}>
          {icons[variant]}
        </span>
        <div>
          {title && <p className="font-semibold mb-1 text-sm">{title}</p>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
