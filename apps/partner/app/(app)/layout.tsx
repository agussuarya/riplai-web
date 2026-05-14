export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Real auth guards are implemented in the later auth phases.
  return children;
}
