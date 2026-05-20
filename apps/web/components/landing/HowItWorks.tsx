import {
  ChatBubbleLeftRightIcon,
  BoltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

interface Step {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    icon: ChatBubbleLeftRightIcon,
    iconBg: "bg-brand-200 dark:bg-[rgba(16,185,129,0.22)]",
    iconColor: "text-brand-600",
    title: "1. Pelanggan chat",
    desc: "Pelanggan kirim pesan WA kapan saja. Siang maupun malam.",
  },
  {
    icon: BoltIcon,
    iconBg: "bg-accent-100 dark:bg-[rgba(99,102,241,0.16)]",
    iconColor: "text-accent-600",
    title: "2. Langsung dibalas",
    desc: "Riplai membaca data bisnis kamu dan menjawab dalam hitungan detik.",
  },
  {
    icon: ChartBarIcon,
    iconBg: "bg-brand-200 dark:bg-[rgba(16,185,129,0.22)]",
    iconColor: "text-brand-600",
    title: "3. Kamu pantau",
    desc: "Monitor semua percakapan dari dashboard. Balas manual jika perlu.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.08)] py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-11 text-gray-900 dark:text-[#E6EDF3]"
        style={{ fontSize: "34px" }}
      >
        Cara kerjanya sederhana
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[860px] mx-auto">
        {steps.map((step) => (
          <div key={step.title} className="text-center">
            <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${step.iconBg}`}>
              <step.icon className={`w-7 h-7 ${step.iconColor}`} />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-[#E6EDF3] mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500 dark:text-[#8B949E] leading-[1.65]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
