'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RiplaiLogo } from '@/components/logo/RiplaiLogo';

const navLinks = [
  { label: 'Fitur', href: '/features' },
  { label: 'Harga', href: '/pricing' },
  { label: 'Demo', href: '/demo' },
  { label: 'Tentang', href: '/about' },
];

interface NavbarProps {
  variant?: 'full' | 'minimal';
}

export function Navbar({ variant = 'full' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-[var(--bg-surface)] border-b border-[var(--border)]">
      <div className="flex h-16 items-center justify-between px-12 pl-[48px] pr-[60px]">
        <a href="/">
          <RiplaiLogo size={30} variant="default" />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {variant === 'full' && (
            <>
              <a
                href="/signin"
                className="hidden md:block text-[14px] font-semibold text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
              >
                Masuk
              </a>
              <a
                href="/signup"
                className="hidden md:block bg-brand-500 hover:bg-brand-600 text-white text-[14px] font-bold px-[22px] py-2 rounded-full transition-colors"
              >
                Coba Gratis
              </a>
            </>
          )}
          <button
            className="md:hidden p-1 text-[var(--text-2)] cursor-pointer"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-t border-[var(--border)] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-[var(--text-1)] py-2.5 border-b border-[var(--border)] last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {variant === 'full' && (
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="/signin"
                className="text-[14px] font-semibold text-[var(--text-2)] py-2 text-center"
              >
                Masuk
              </a>
              <a
                href="/signup"
                className="bg-brand-500 hover:bg-brand-600 text-white text-[14px] font-bold px-6 py-2.5 rounded-full text-center transition-colors"
              >
                Coba Gratis
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

/** @deprecated Use <Navbar variant="minimal" /> */
export function NavbarMinimal() {
  return <Navbar variant="minimal" />;
}
