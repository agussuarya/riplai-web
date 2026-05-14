import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riplai Admin",
  description: "Panel internal untuk operasional Riplai."
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
