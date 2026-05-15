type BadgeVariant = "needs_reply" | "bot_handled" | "waiting" | "ai";

const styles: Record<BadgeVariant, string> = {
  needs_reply: "bg-red-100 text-red-700",
  bot_handled: "bg-brand-100 text-brand-700",
  waiting:     "bg-yellow-100 text-yellow-700",
  ai:          "bg-accent-100 text-accent-600",
};

const labels: Record<BadgeVariant, string> = {
  needs_reply: "Needs Reply",
  bot_handled: "Bot Handled",
  waiting:     "Waiting",
  ai:          "AI",
};

export function Badge({ variant }: { variant: BadgeVariant }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[variant]}`}>
      {labels[variant]}
    </span>
  );
}
