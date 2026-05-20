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
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-500',
    title: 'Penjawab 24 Jam',
    desc: 'Balas pesan pelanggan otomatis kapan saja. Bahkan saat kamu tidur. Tidak ada pesan yang terlewat.',
  },
  {
    icon: BookOpenIcon,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-500',
    title: 'Data Bisnis Pintar',
    desc: 'Ajarkan bisnis kamu sekali, admin otomatis langsung tahu segalanya. Produk, harga, jam operasional, dan lebih banyak lagi.',
  },
  {
    icon: ChartBarIcon,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-500',
    title: 'Analitik Percakapan',
    desc: 'Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk. Ambil keputusan bisnis berdasarkan data nyata.',
  },
  {
    icon: BellIcon,
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-500',
    title: 'Notifikasi ke Kamu',
    desc: 'Admin otomatis tidak bisa jawab? Kamu dapat notifikasi langsung. Tidak ada pelanggan yang dibiarkan menunggu.',
  },
  {
    icon: DevicePhoneMobileIcon,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-500',
    title: 'Tanpa Aplikasi Baru',
    desc: 'Pelanggan tetap chat lewat WhatsApp biasa. Kamu kelola dari dashboard. Tidak perlu mengajari pelanggan cara baru.',
  },
  {
    icon: Cog6ToothIcon,
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-500',
    title: 'Mudah Dikonfigurasi',
    desc: 'Atur jam operasional, nama penjawab, dan balasan khusus dalam hitungan menit. Tanpa keahlian teknis apapun.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-12 py-16">
      <div className="text-center mb-12">
        <h1
          className="font-extrabold tracking-[-0.03em] text-gray-900 mb-4"
          style={{ fontSize: '40px' }}
        >
          Fitur yang kamu butuhkan. Tanpa yang tidak perlu.
        </h1>
        <p className="text-gray-500 max-w-[560px] mx-auto" style={{ fontSize: '17px' }}>
          Dirancang khusus untuk bisnis kecil Indonesia yang tidak punya waktu banyak.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {features.map((f) => (
          <div key={f.title} className="bg-white border border-gray-100 rounded-[18px] p-7">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}
            >
              <f.icon className={`w-[48px] h-[48px] ${f.iconColor}`} style={{ width: '28px', height: '28px' }} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-[1.65]">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="/signup"
          className="inline-block text-[15px] font-bold text-white bg-brand-500 hover:bg-brand-600 px-8 py-3.5 rounded-full transition-colors"
        >
          Coba Gratis →
        </a>
      </div>
    </div>
  );
}
