import type { Metadata } from "next";
import { jakarta, mono } from "@/lib/fonts";
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
      <body className="bg-white font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
