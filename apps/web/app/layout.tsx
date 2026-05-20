import type { Metadata } from "next";
import { jakarta, mono } from "@/lib/fonts";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "riplai — Penjawab 24 Jam untuk Bisnis Indonesia",
  description:
    "Admin otomatis WhatsApp yang menjawab pertanyaan pelanggan berdasarkan data bisnis kamu. Tanpa perlu angkat telepon.",
  metadataBase: new URL("https://riplai.id"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="bg-white dark:bg-[#0D1117] font-sans text-gray-900 dark:text-[#E6EDF3]">
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}})()` }} />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
