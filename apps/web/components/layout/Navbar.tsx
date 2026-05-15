import { RiplaiLogo } from "@/components/logo/RiplaiLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <RiplaiLogo size={24} variant="full" />
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="/features">Fitur</a>
          <a href="/pricing">Harga</a>
          <a href="/demo">Demo</a>
          <a href="/about">Tentang</a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-pill bg-brand-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Mulai Gratis
        </a>
      </div>
    </header>
  );
}
