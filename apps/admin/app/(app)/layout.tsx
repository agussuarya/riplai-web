export default function AdminAppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Real admin auth and role guards are implemented in later auth phases.
  return children;
}
