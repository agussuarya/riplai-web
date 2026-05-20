interface Props {
  size?: number;
  variant?: "default" | "white" | "mono";
}

export function RiplaiLogo({ size = 32, variant = "default" }: Props) {
  const markH = Math.round(size * 0.57);
  const markW = Math.round(markH * 40 / 46);
  const wordmarkColor = variant === "white" ? "text-white" : "text-gray-900 dark:text-[#E6EDF3]";

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="inline-flex items-center justify-center bg-brand-500 flex-shrink-0"
        style={{ width: size, height: size, borderRadius: 8 }}
      >
        <svg width={markW} height={markH} viewBox="0 0 40 46" fill="none">
          <path d="M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z" fill="white" opacity=".93" />
          <circle cx="12" cy="19" r="3" fill="#059669" />
          <path d="M12,13 A6,6 0 0,1 12,25" stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M12,8 A11,11 0 0,1 12,30" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".6" />
          <path d="M12,3 A16,16 0 0,1 12,35" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".35" />
        </svg>
      </span>
      <span
        className={`font-extrabold tracking-[-0.02em] ${wordmarkColor}`}
        style={{ fontSize: Math.max(14, Math.round(size * 0.55)) }}
      >
        riplai
      </span>
    </span>
  );
}
