import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "riplai",
  description: "Admin otomatis WhatsApp untuk bisnis Indonesia."
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
