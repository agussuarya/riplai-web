import { EyeIcon } from '@heroicons/react/24/outline';
import { Input } from '@riplai/ui';
import { RiplaiLogo } from '@/components/logo/RiplaiLogo';

export default function SigninPage() {
  return (
    <div className="flex-1 flex items-center justify-center py-10 px-6 min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <RiplaiLogo size={44} />
        </div>
        <h1 className="text-[24px] font-extrabold tracking-[-0.02em] text-gray-900 text-center mb-1">
          Selamat datang kembali
        </h1>
        <p className="text-sm text-gray-400 text-center mb-6">
          Masuk ke dashboard Riplai kamu.
        </p>

        {/* Email field */}
        <div className="mb-4">
          <Input
            label="Email"
            type="email"
            placeholder="email@bisnis.com"
          />
        </div>

        {/* Password field */}
        <div className="mb-2">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">Kata sandi</label>
            <a href="#" className="text-[12.5px] text-accent-500 font-semibold pointer-events-none">
              Lupa kata sandi?
            </a>
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="••••••••"
              className="pr-10"
            />
            <div className="absolute right-3 bottom-2.5 pointer-events-none">
              <EyeIcon className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          disabled
          className="mt-5 flex w-full items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-bold text-white cursor-not-allowed opacity-70"
        >
          Masuk
        </button>

        <p className="text-center text-[13.5px] text-gray-400 mt-5">
          Belum punya akun?{' '}
          <a href="/signup" className="text-brand-500 font-bold">
            Daftar gratis
          </a>
        </p>
      </div>
    </div>
  );
}
