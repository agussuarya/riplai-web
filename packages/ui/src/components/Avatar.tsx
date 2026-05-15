export function Avatar({ waNumber }: { waNumber: string }) {
  const initials = waNumber.slice(-4, -2);
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
      {initials}
    </div>
  );
}
