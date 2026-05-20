type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "ai";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  tabIndex?: number;
  id?: string;
  name?: string;
  value?: string;
  form?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean | "true" | "false";
  "aria-controls"?: string;
  "aria-describedby"?: string;
  "aria-pressed"?: boolean | "true" | "false" | "mixed";
  "aria-haspopup"?: boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog";
}

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    primary:   "bg-brand-500 text-white hover:bg-brand-600",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    danger:    "bg-red-600 text-white hover:bg-red-700",
    ghost:     "bg-transparent text-brand-600 hover:bg-brand-50",
    ai:        "bg-accent-500 text-white hover:bg-accent-600",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
