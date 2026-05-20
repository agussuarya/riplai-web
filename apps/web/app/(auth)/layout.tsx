import { Navbar } from '@/components/layout/Navbar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar variant="minimal" />
      <main className="flex-1 flex items-center justify-center">{children}</main>
    </>
  );
}
