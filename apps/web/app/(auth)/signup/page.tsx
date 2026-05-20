'use client';

import { useState } from 'react';
import { EyeIcon, EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Input } from '@riplai/ui';

const benefits = [
  'Admin otomatis aktif 24 jam, 7 hari',
  'Setup dalam 5 menit, langsung aktif',
  'Tidak perlu keahlian teknis',
  '14 hari gratis, tidak perlu kartu kredit',
  'Batalkan kapan saja',
];

export default function SignupPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="py-10 px-6 min-h-[calc(100vh-64px)] flex items-start justify-center">
      <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left — form */}
        <div>
          <h1 className="text-[26px] font-extrabold tracking-[-0.02em] text-[var(--text-1)] mb-1.5">
            Coba gratis 14 hari
          </h1>
          <p className="text-sm text-[var(--text-2)] mb-7">
            Tidak perlu kartu kredit. Setup dalam 5 menit.
          </p>

          {/* Nama */}
          <div className="mb-4">
            <Input
              label="Nama lengkap"
              type="text"
              placeholder="Nama kamu"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Input
              label="Email bisnis"
              type="email"
              placeholder="email@bisnis.com"
            />
          </div>

          {/* WhatsApp */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[var(--text-1)] mb-1">
              Nomor WhatsApp bisnis
            </label>
            <div className="relative">
              <div className="absolute left-3 bottom-2.5 text-sm font-semibold text-[var(--text-3)] pointer-events-none z-10">
                +62
              </div>
              <Input
                type="tel"
                placeholder="812-3456-7890"
                className="pl-12"
              />
            </div>
            <p className="text-xs text-[var(--text-3)] mt-1">
              Nomor WhatsApp yang akan dihubungkan ke Riplai
            </p>
          </div>

          {/* Jenis bisnis */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[var(--text-1)] mb-1">Jenis bisnis</label>
            <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-1)] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>Apotek/Toko Obat</option>
              <option>Klinik/Dokter</option>
              <option>Restoran/F&B</option>
              <option>Villa/Penginapan</option>
              <option>Toko Retail</option>
              <option>Lainnya</option>
            </select>
          </div>

          {/* Kata sandi */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--text-1)] mb-1">Kata sandi</label>
            <div className="relative">
              <Input
                type={showPwd ? 'text' : 'password'}
                placeholder="Minimal 8 karakter"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 bottom-2.5 cursor-pointer text-[var(--text-3)] hover:text-[var(--text-2)]"
              >
                {showPwd
                  ? <EyeSlashIcon className="w-4 h-4" />
                  : <EyeIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2.5 mb-5">
            <button
              type="button"
              onClick={() => setAgreed((v) => !v)}
              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors cursor-pointer ${
                agreed
                  ? 'bg-brand-500 border-brand-500'
                  : 'bg-[var(--bg-surface)] border-[var(--border)] hover:border-brand-400'
              }`}
            >
              {agreed && <CheckIcon className="w-3 h-3 text-white" strokeWidth={3} />}
            </button>
            <p className="text-sm text-[var(--text-2)]">
              Saya setuju dengan{' '}
              <a href="/terms" className="text-accent-500 font-semibold">
                Syarat &amp; Ketentuan
              </a>{' '}
              dan{' '}
              <a href="/privacy" className="text-accent-500 font-semibold">
                Kebijakan Privasi
              </a>{' '}
              Riplai
            </p>
          </div>

          {/* CTA */}
          <button
            type="button"
            disabled
            className="flex w-full items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-bold text-white cursor-not-allowed opacity-70"
          >
            Mulai 14 Hari Gratis
          </button>

          <p className="text-center text-[13.5px] text-[var(--text-2)] mt-4">
            Sudah punya akun?{' '}
            <a href="/signin" className="text-brand-500 font-bold">
              Masuk
            </a>
          </p>
        </div>

        {/* Right — benefits panel */}
        <div className="bg-[var(--brand-sub)] rounded-[20px] p-7">
          <h2 className="text-[15px] font-bold text-brand-700 dark:text-brand-400 mb-5">Kenapa daftar Riplai?</h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2.5 items-start">
                <div className="w-[22px] h-[22px] rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[13.5px] text-[var(--text-1)] leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
