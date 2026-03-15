type InfoBoxVariant = "info" | "warning" | "success" | "tip";

const styles: Record<InfoBoxVariant, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  warning: "bg-amber-50 border-amber-200 text-amber-800",
  success: "bg-green-50 border-green-200 text-green-800",
  tip: "bg-solar-50 border-solar-200 text-solar-800",
};

const icons: Record<InfoBoxVariant, string> = {
  info: "ℹ️",
  warning: "⚠️",
  success: "✅",
  tip: "💡",
};

interface InfoBoxProps {
  variant?: InfoBoxVariant;
  title?: string;
  children: React.ReactNode;
}

export default function InfoBox({ variant = "info", title, children }: InfoBoxProps) {
  return (
    <div className={`border rounded-lg px-5 py-4 my-6 ${styles[variant]}`}>
      <div className="flex gap-3">
        <span className="text-lg flex-shrink-0">{icons[variant]}</span>
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
