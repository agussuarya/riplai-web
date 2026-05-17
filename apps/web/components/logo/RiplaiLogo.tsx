interface Props {
  size?: number;
  variant?: "default" | "white" | "mono";
}

export function RiplaiLogo({ size = 32, variant = "default" }: Props) {
  const height = size;
  const width = Math.round((40 / 46) * height);
  const bubbleFill = variant === "white" ? "white" : "#10B981";
  const wordmarkColor = variant === "white" ? "text-white" : "text-gray-900";

  return (
    <span className="inline-flex items-center gap-2">
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z"
          fill={bubbleFill}
        />
        <circle cx="12" cy="19" r="2.5" fill="#059669" />
        <path
          d="M12,13 A6,6 0 0,1 12,25"
          stroke="#059669"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12,8 A11,11 0 0,1 12,30"
          stroke="#059669"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M12,3 A16,16 0 0,1 12,35"
          stroke="#059669"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
      <span
        className={`font-extrabold tracking-[-0.02em] ${wordmarkColor}`}
        style={{ fontSize: height * 0.6 }}
      >
        riplai
      </span>
    </span>
  );
}
