import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riplai Dashboard",
  description: "Dashboard bisnis untuk mengelola balasan WhatsApp otomatis."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
