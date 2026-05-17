import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/24/outline";
import { RiplaiLogo } from "@/components/logo/RiplaiLogo";

export default function SigninPage() {
  return (
    <div className="flex-1 flex items-center justify-center py-10 px-6 min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-11 h-11 bg-brand-500 rounded-[12px] flex items-center justify-center">
            <RiplaiLogo size={22} variant="white" />
          </div>
        </div>
        <h1 className="text-[24px] font-extrabold tracking-[-0.02em] text-gray-900 text-center mb-1">
          Selamat datang kembali
        </h1>
        <p className="text-sm text-gray-400 text-center mb-7">
          Masuk ke akun Riplai kamu
        </p>

        {/* Error banner */}
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[12px] p-3 flex items-center gap-2 mb-5">
          <ExclamationCircleIcon className="w-4 h-4 text-[#991B1B] flex-shrink-0" />
          <p className="text-sm text-[#991B1B] font-medium">
            Email atau kata sandi salah. Coba lagi.
          </p>
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="budi@apotek.id"
            className="w-full rounded-xl border border-red-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <p className="text-xs text-red-500 mt-1">Email tidak ditemukan.</p>
        </div>

        {/* Password field */}
        <div className="mb-2">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">Kata sandi</label>
            <a href="#" className="text-[12.5px] text-accent-500 font-semibold">
              Lupa kata sandi?
            </a>
          </div>
          <div className="relative">
            <input
              type="password"
              defaultValue="password123"
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <EyeIcon className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          className="mt-5 flex w-full items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-bold text-white pointer-events-none opacity-80"
        >
          Masuk
        </a>

        <p className="text-center text-[13.5px] text-gray-400 mt-5">
          Belum punya akun?{" "}
          <a href="/signup" className="text-brand-500 font-bold">
            Daftar gratis
          </a>
        </p>
      </div>
    </div>
  );
}
