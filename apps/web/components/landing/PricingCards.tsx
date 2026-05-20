'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface Plan {
  name: string;
  monthlyPrice: string;
  yearlyPrice?: string;
  priceSub?: string;
  cap: string;
  wa: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaStyle: 'primary' | 'secondary' | 'ghost';
  popular?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Gratis',
    monthlyPrice: 'Rp 0',
    priceSub: '/ selamanya',
    cap: '50 balasan/bln',
    wa: '1 nomor WA',
    features: ['Knowledge Base dasar', 'Laporan ringkas'],
    ctaLabel: 'Coba Gratis',
    ctaHref: '/signup',
    ctaStyle: 'secondary',
  },
  {
    name: 'Starter',
    monthlyPrice: 'Rp 199k',
    yearlyPrice: 'Rp 159k',
    priceSub: '/bln',
    cap: '500 balasan/bln',
    wa: '1 nomor WA',
    features: ['KB lengkap', 'Analytics dasar', 'Notifikasi'],
    ctaLabel: 'Pilih Starter',
    ctaHref: '/signup',
    ctaStyle: 'secondary',
  },
  {
    name: 'Growth',
    monthlyPrice: 'Rp 499k',
    yearlyPrice: 'Rp 399k',
    priceSub: '/bln',
    cap: '2.000 balasan/bln',
    wa: '3 nomor WA',
    features: ['Analytics lengkap', 'Multi-nomor', 'Prioritas dukungan'],
    ctaLabel: 'Pilih Growth',
    ctaHref: '/signup',
    ctaStyle: 'primary',
    popular: true,
    badge: 'Terpopuler',
  },
  {
    name: 'Custom',
    monthlyPrice: 'Hubungi Kami',
    cap: 'Tidak terbatas',
    wa: '∞ nomor WA',
    features: ['Semua Growth', 'SLA & onboarding', 'API akses', 'Dedicated support'],
    ctaLabel: 'Hubungi Kami',
    ctaHref: 'mailto:hello.riplai@gmail.com',
    ctaStyle: 'ghost',
  },
];

const ctaClasses: Record<Plan['ctaStyle'], string> = {
  primary: 'bg-brand-500 hover:bg-brand-600 text-white font-bold',
  secondary: 'bg-white dark:bg-[#1C2330] border border-gray-200 dark:border-[#30394A] hover:bg-gray-50 dark:hover:bg-[#21293A] text-gray-900 dark:text-[#E6EDF3] font-semibold',
  ghost: 'bg-white dark:bg-[#1C2330] border border-brand-500 hover:bg-brand-50 dark:hover:bg-[rgba(16,185,129,0.1)] text-brand-600 font-semibold',
};

export function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-[#0D1117] py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-3 text-gray-900 dark:text-[#E6EDF3]"
        style={{ fontSize: '34px' }}
      >
        Harga jelas. Tumbuh sesuai skala bisnismu.
      </h2>
      <p className="text-sm text-gray-500 dark:text-[#8B949E] text-center mb-8">Mulai gratis, upgrade kapan saja.</p>

      <div className="flex items-center justify-center gap-1 mb-10 bg-gray-100 dark:bg-[#1C2330] w-fit mx-auto rounded-full p-1">
        <button
          onClick={() => setYearly(false)}
          className={`rounded-full font-semibold px-4 py-1.5 text-sm transition-colors cursor-pointer ${
            !yearly
              ? 'bg-white dark:bg-[#161B22] shadow-sm text-gray-900 dark:text-[#E6EDF3]'
              : 'text-gray-500 dark:text-[#6E7681]'
          }`}
        >
          Bulanan
        </button>
        <button
          onClick={() => setYearly(true)}
          className={`rounded-full font-semibold px-4 py-1.5 text-sm transition-colors cursor-pointer ${
            yearly
              ? 'bg-white dark:bg-[#161B22] shadow-sm text-gray-900 dark:text-[#E6EDF3]'
              : 'text-gray-500 dark:text-[#6E7681]'
          }`}
        >
          Tahunan -20%
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 max-w-[1000px] mx-auto">
        {plans.map((plan) => {
          const displayPrice = yearly && plan.yearlyPrice ? plan.yearlyPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.name}
              className={`bg-white dark:bg-[#161B22] border rounded-[20px] p-5 flex flex-col relative ${
                plan.popular
                  ? 'border-2 border-brand-500 shadow-[0_8px_32px_rgba(16,185,129,.15)] scale-[1.03] z-10'
                  : 'border-gray-100 dark:border-[#30394A]'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <div className="mb-4">
                <h3 className={`text-sm font-bold mb-1 ${plan.popular ? 'text-brand-500' : 'text-gray-900 dark:text-[#E6EDF3]'}`}>{plan.name}</h3>
                <p className="text-xl font-extrabold text-gray-900 dark:text-[#E6EDF3] tracking-tight">{displayPrice}</p>
                {plan.priceSub && <p className="text-xs text-gray-400 dark:text-[#6E7681] mt-0.5">{plan.priceSub}</p>}
              </div>
              <div className="text-xs text-gray-500 dark:text-[#8B949E] mb-4 space-y-1">
                <p>{plan.cap}</p>
                <p>{plan.wa}</p>
              </div>
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-[#8B949E]">
                    <CheckIcon className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                className={`w-full text-center text-sm px-4 py-2.5 rounded-full transition-colors ${ctaClasses[plan.ctaStyle]}`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
