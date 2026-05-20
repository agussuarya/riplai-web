'use client';

import { useRef } from 'react';
import { DemoChat, DemoChatHandle } from '@/components/demo/DemoChat';

const suggestions = [
  'Kamar kosong malam ini?',
  'Berapa harga kamar Deluxe?',
  'Apa saja fasilitasnya?',
  'Gimana cara booking?',
];

export default function DemoPage() {
  const chatRef = useRef<DemoChatHandle>(null);

  return (
    <div className="max-w-[900px] mx-auto px-12 py-14">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-2)] hover:text-[var(--text-1)] mb-6 transition-colors"
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Beranda
      </a>

      <div className="text-center mb-12">
        <h1
          className="font-extrabold tracking-[-0.03em] text-[var(--text-1)] mb-3.5"
          style={{ fontSize: '40px' }}
        >
          Coba langsung
        </h1>
        <p className="text-[16px] text-[var(--text-2)] max-w-[500px] mx-auto">
          Kirim pesan seperti pelanggan sungguhan. Lihat bagaimana admin otomatis menjawab.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: chat widget */}
        <div>
          <div style={{ filter: 'drop-shadow(0 12px 32px rgba(0,0,0,.12))' }}>
            <DemoChat ref={chatRef} minHeight="260px" />
          </div>
          <p className="text-[11.5px] text-[var(--text-3)] text-center mt-3">
            Ini demo. Data bisnis nyata bisa berbeda.
          </p>
        </div>

        {/* Right: suggestions + promo */}
        <div>
          <p className="text-[13px] font-bold text-[var(--text-3)] uppercase tracking-[0.06em] mb-4">
            Coba tanya ini:
          </p>
          <div className="flex flex-col gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => chatRef.current?.sendSuggestion(s)}
                className="bg-[var(--bg-surface)] border border-[var(--border)] hover:bg-[var(--bg-subtle)] text-[var(--text-1)] text-sm font-medium px-4 py-2.5 rounded-full transition-colors text-left cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          <div
            className="mt-8 p-5 rounded-[16px]"
            style={{ background: 'var(--brand-sub)' }}
          >
            <p className="text-[14px] font-bold mb-2" style={{ color: 'var(--brand-text)' }}>
              Siap coba dengan bisnis kamu?
            </p>
            <p className="text-[13px] text-[var(--text-2)] leading-[1.5] mb-3.5">
              Setup dalam 5 menit. Tidak perlu kartu kredit.
            </p>
            <a
              href="/signup"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
            >
              Coba Gratis &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
