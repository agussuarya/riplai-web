interface Props {
  size?: number;
  variant?: "full" | "mark";
}

export function RiplaiLogo({ size = 32, variant = "full" }: Props) {
  return (
    <span style={{ fontSize: size }} className="font-bold text-brand-500">
      {variant === "full" ? "riplai" : "R"}
    </span>
  );
}
