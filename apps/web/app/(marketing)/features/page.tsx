import {
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  BellIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

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
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: 'text-brand-500',
    title: 'Penjawab 24 Jam',
    desc: 'Balas pesan pelanggan otomatis kapan saja. Bahkan saat kamu tidur. Tidak ada pesan yang terlewat.',
  },
  {
    icon: BookOpenIcon,
    iconBg: 'bg-[var(--accent-sub)]',
    iconColor: 'text-accent-500',
    title: 'Data Bisnis Pintar',
    desc: 'Ajarkan bisnis kamu sekali, admin otomatis langsung tahu segalanya. Produk, harga, jam operasional, dan lebih banyak lagi.',
  },
  {
    icon: ChartBarIcon,
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: 'text-brand-500',
    title: 'Analitik Percakapan',
    desc: 'Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk. Ambil keputusan bisnis berdasarkan data nyata.',
  },
  {
    icon: BellIcon,
    iconBg: 'bg-[var(--accent-sub)]',
    iconColor: 'text-accent-500',
    title: 'Notifikasi ke Kamu',
    desc: 'Admin otomatis tidak bisa jawab? Kamu dapat notifikasi langsung. Tidak ada pelanggan yang dibiarkan menunggu.',
  },
  {
    icon: DevicePhoneMobileIcon,
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: 'text-brand-500',
    title: 'Tanpa Aplikasi Baru',
    desc: 'Pelanggan tetap chat lewat WhatsApp biasa. Kamu kelola dari dashboard. Tidak perlu mengajari pelanggan cara baru.',
  },
  {
    icon: Cog6ToothIcon,
    iconBg: 'bg-[var(--accent-sub)]',
    iconColor: 'text-accent-500',
    title: 'Mudah Dikonfigurasi',
    desc: 'Atur jam operasional, nama penjawab, dan balasan khusus dalam hitungan menit. Tanpa keahlian teknis apapun.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-[960px] mx-auto px-12 py-14">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-2)] hover:text-[var(--text-1)] mb-6 transition-colors"
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Beranda
      </a>

      <h1
        className="font-extrabold tracking-[-0.03em] text-[var(--text-1)] mb-3.5"
        style={{ fontSize: '40px' }}
      >
        Fitur yang kamu butuhkan.<br />Tanpa yang tidak perlu.
      </h1>
      <p className="text-[var(--text-2)] max-w-[560px] leading-[1.6] mb-14" style={{ fontSize: '17px' }}>
        Dirancang khusus untuk bisnis kecil Indonesia yang tidak punya waktu banyak.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[var(--bg-surface)] rounded-[18px] p-7"
            style={{ border: '1.5px solid var(--border)' }}
          >
            <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 ${f.iconBg}`}>
              <f.icon className={`${f.iconColor}`} style={{ width: '24px', height: '24px' }} />
            </div>
            <h3 className="font-bold text-[var(--text-1)] mb-2" style={{ fontSize: '17px' }}>{f.title}</h3>
            <p className="text-[14px] text-[var(--text-2)] leading-[1.6]">{f.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
