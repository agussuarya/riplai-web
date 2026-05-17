import { CheckIcon } from "@heroicons/react/24/outline";

interface Plan {
  name: string;
  price: string;
  cap: string;
  wa: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaStyle: "primary" | "secondary" | "ghost";
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Gratis",
    price: "Rp 0",
    cap: "50 balasan/bln",
    wa: "1 nomor WA",
    features: ["Knowledge Base dasar", "Laporan ringkas"],
    ctaLabel: "Mulai Gratis",
    ctaHref: "/signup",
    ctaStyle: "secondary",
  },
  {
    name: "Starter",
    price: "Rp 199.000",
    cap: "500 balasan/bln",
    wa: "1 nomor WA",
    features: ["KB lengkap", "Analytics dasar", "Notifikasi email"],
    ctaLabel: "Coba Sekarang",
    ctaHref: "/signup",
    ctaStyle: "secondary",
  },
  {
    name: "Growth",
    price: "Rp 499.000",
    cap: "2.000 balasan/bln",
    wa: "3 nomor WA",
    features: ["Analytics lengkap", "Multi-nomor", "Prioritas dukungan"],
    ctaLabel: "Coba 14 Hari Gratis",
    ctaHref: "/signup",
    ctaStyle: "primary",
    popular: true,
  },
  {
    name: "Custom",
    price: "Hubungi Kami",
    cap: "Tidak terbatas",
    wa: "Tidak terbatas",
    features: ["Semua Growth", "SLA & onboarding", "API akses", "Dedicated support"],
    ctaLabel: "Hubungi Kami",
    ctaHref: "mailto:hello@riplai.id",
    ctaStyle: "ghost",
  },
];

const ctaClasses: Record<Plan["ctaStyle"], string> = {
  primary:
    "bg-brand-500 hover:bg-brand-600 text-white font-bold",
  secondary:
    "bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold",
  ghost:
    "bg-white border border-brand-500 hover:bg-brand-50 text-brand-600 font-semibold",
};

export function PricingCards() {
  return (
    <section className="bg-gray-50 py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-3 text-gray-900"
        style={{ fontSize: "34px" }}
      >
        Harga yang masuk akal
      </h2>

      {/* Annual toggle — visual only */}
      <div className="flex items-center justify-center gap-2 mb-11">
        <span className="text-sm font-semibold text-white bg-gray-900 px-4 py-1.5 rounded-full">
          Bulanan
        </span>
        <span className="text-sm font-semibold text-gray-400 bg-gray-100 px-4 py-1.5 rounded-full">
          Tahunan <span className="text-brand-500">Hemat 20%</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 max-w-[1000px] mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white border rounded-[20px] p-5 flex flex-col relative ${
              plan.popular
                ? "border-2 border-brand-500 shadow-[0_8px_32px_rgba(16,185,129,.15)] scale-[1.03] z-10"
                : "border-gray-100"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full whitespace-nowrap">
                Terpopuler
              </span>
            )}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-xl font-extrabold text-gray-900 tracking-tight">
                {plan.price}
              </p>
              {plan.name !== "Custom" && (
                <p className="text-xs text-gray-400 mt-0.5">/bulan</p>
              )}
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
    </section>
  );
}
