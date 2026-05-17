import {
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  BellIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: ChatBubbleLeftRightIcon,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
    title: "Penjawab 24 Jam",
    desc: "Balas pesan pelanggan otomatis kapan saja. Bahkan saat kamu tidur.",
  },
  {
    icon: BookOpenIcon,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
    title: "Data Bisnis Pintar",
    desc: "Ajarkan bisnis kamu sekali, admin otomatis langsung tahu segalanya.",
  },
  {
    icon: ChartBarIcon,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
    title: "Analitik Percakapan",
    desc: "Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk.",
  },
  {
    icon: BellIcon,
    iconBg: "bg-accent-100",
    iconColor: "text-accent-500",
    title: "Notifikasi ke Kamu",
    desc: "Admin otomatis tidak bisa jawab? Kamu dapat notifikasi email atau dashboard langsung.",
  },
  {
    icon: DevicePhoneMobileIcon,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
    title: "Tanpa Aplikasi Baru",
    desc: "Pelanggan tetap chat lewat WhatsApp biasa. Kamu pantau dari dashboard Riplai.",
  },
  {
    icon: Cog6ToothIcon,
    iconBg: "bg-accent-100",
    iconColor: "text-accent-500",
    title: "Mudah Dikonfigurasi",
    desc: "Atur jam operasional, nama penjawab, dan balasan khusus dalam hitungan menit.",
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-gray-50 py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-3 text-gray-900"
        style={{ fontSize: "34px" }}
      >
        Semua yang bisnis kamu butuhkan
      </h2>
      <p className="text-base text-gray-500 text-center mb-11">
        Dirancang khusus untuk bisnis Indonesia yang tidak punya waktu banyak.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[960px] mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-white border border-gray-100 rounded-[18px] p-5">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 ${f.iconBg}`}>
              <f.icon className={`w-[22px] h-[22px] ${f.iconColor}`} />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-[1.65]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
