import { Bars3Icon } from "@heroicons/react/24/outline";
import { RiplaiLogo } from "@/components/logo/RiplaiLogo";

const navLinks = [
  { label: "Fitur", href: "#" },
  { label: "Harga", href: "#" },
  { label: "Demo", href: "#" },
  { label: "Tentang", href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 flex h-16 items-center justify-between">
        <a href="/">
          <RiplaiLogo size={30} variant="default" />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/signin"
            className="hidden md:block text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Masuk
          </a>
          <a
            href="/signup"
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
          >
            Coba Gratis
          </a>
          <button className="md:hidden p-1 text-gray-500" aria-label="Menu">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function NavbarMinimal() {
  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 flex h-16 items-center justify-between">
        <a href="/">
          <RiplaiLogo size={30} variant="default" />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden p-1 text-gray-500" aria-label="Menu">
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
