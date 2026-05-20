import { CheckIcon } from '@heroicons/react/24/outline';

interface Plan {
  name: string;
  price: string;
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
    price: 'Rp 0',
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
    price: 'Rp 199.000',
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
    price: 'Rp 499.000',
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
    price: 'Hubungi Kami',
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
  secondary: 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold',
  ghost: 'bg-white border border-brand-500 hover:bg-brand-50 text-brand-600 font-semibold',
};

const comparisonRows = [
  { label: 'Jumlah balasan/bln', gratis: '50', starter: '500', growth: '2.000', custom: 'Tidak terbatas' },
  { label: 'Nomor WA', gratis: '1', starter: '1', growth: '3', custom: '∞' },
  { label: 'Knowledge Base', gratis: 'Dasar', starter: 'Lengkap', growth: 'Lengkap', custom: 'Lengkap' },
  { label: 'Analytics', gratis: '—', starter: 'Dasar', growth: 'Lengkap', custom: 'Lengkap' },
  { label: 'Notifikasi', gratis: '—', starter: '✓', growth: '✓', custom: '✓' },
  { label: 'Multi-nomor', gratis: '—', starter: '—', growth: '✓', custom: '✓' },
  { label: 'Prioritas support', gratis: '—', starter: '—', growth: '✓', custom: '✓' },
  { label: 'API akses', gratis: '—', starter: '—', growth: '—', custom: '✓' },
  { label: 'SLA', gratis: '—', starter: '—', growth: '—', custom: '✓' },
  { label: 'Onboarding khusus', gratis: '—', starter: '—', growth: '—', custom: '✓' },
];

export default function PricingPage() {
  return (
    <div className="py-16 px-12">
      <div className="text-center mb-10">
        <h1
          className="font-extrabold tracking-[-0.03em] text-gray-900 mb-3"
          style={{ fontSize: '40px' }}
        >
          Harga jelas. Tumbuh sesuai skala bisnismu.
        </h1>
        <p className="text-sm text-gray-500">Mulai gratis, upgrade kapan saja.</p>
      </div>

      {/* Annual toggle — visual only, no click handlers */}
      <div className="flex items-center justify-center gap-1 mb-10 bg-gray-100 w-fit mx-auto rounded-full p-1">
        <span className="bg-white shadow-sm rounded-full font-semibold text-gray-900 px-4 py-1.5 text-sm">
          Bulanan
        </span>
        <span className="text-gray-500 px-4 py-1.5 text-sm">Tahunan -20%</span>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 max-w-[1000px] mx-auto mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white border rounded-[20px] p-5 flex flex-col relative ${
              plan.popular
                ? 'border-2 border-brand-500 shadow-[0_8px_32px_rgba(16,185,129,.15)] scale-[1.03] z-10'
                : 'border-gray-100'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full whitespace-nowrap">
                {plan.badge}
              </span>
            )}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-xl font-extrabold text-gray-900 tracking-tight">{plan.price}</p>
              {plan.priceSub && <p className="text-xs text-gray-400 mt-0.5">{plan.priceSub}</p>}
            </div>
            <div className="text-xs text-gray-500 mb-4 space-y-1">
              <p>{plan.cap}</p>
              <p>{plan.wa}</p>
            </div>
            <ul className="flex-1 space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
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
        ))}
      </div>

      {/* Feature comparison table */}
      <div className="max-w-[1000px] mx-auto overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 pr-4 text-gray-500 font-semibold w-[260px]">Fitur</th>
              <th className="text-center py-3 px-4 text-gray-900 font-bold">Gratis</th>
              <th className="text-center py-3 px-4 text-gray-900 font-bold">Starter</th>
              <th className="text-center py-3 px-4 text-brand-600 font-bold">Growth</th>
              <th className="text-center py-3 px-4 text-gray-900 font-bold">Custom</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.label}
                className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}
              >
                <td className="py-3 pr-4 text-gray-600 font-medium">{row.label}</td>
                <td className="py-3 px-4 text-center text-gray-500">{row.gratis}</td>
                <td className="py-3 px-4 text-center text-gray-500">{row.starter}</td>
                <td className="py-3 px-4 text-center text-gray-700 font-medium">{row.growth}</td>
                <td className="py-3 px-4 text-center text-gray-500">{row.custom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
