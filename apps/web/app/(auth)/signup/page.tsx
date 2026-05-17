import { EyeIcon, CheckIcon } from "@heroicons/react/24/outline";

const benefits = [
  "Admin otomatis aktif 24 jam, 7 hari",
  "Setup dalam 5 menit, langsung aktif",
  "Tidak perlu keahlian teknis",
  "14 hari gratis, tidak perlu kartu kredit",
  "Batalkan kapan saja",
];

export default function SignupPage() {
  return (
    <div className="py-10 px-6 min-h-[calc(100vh-64px)] flex items-start justify-center">
      <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left — form */}
        <div>
          <h1 className="text-[26px] font-extrabold tracking-[-0.02em] text-gray-900 mb-1.5">
            Coba gratis 14 hari
          </h1>
          <p className="text-sm text-gray-400 mb-7">
            Tidak perlu kartu kredit. Setup dalam 5 menit.
          </p>

          {/* Nama */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama lengkap</label>
            <input
              type="text"
              defaultValue="Budi Santoso"
              className="w-full rounded-xl border border-brand-500 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <p className="text-xs text-brand-600 mt-1">✓ Terlihat bagus!</p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email bisnis</label>
            <input
              type="email"
              placeholder="email@bisnis.com"
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          {/* WhatsApp */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor WhatsApp bisnis
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500 pointer-events-none">
                +62
              </div>
              <input
                type="tel"
                placeholder="812-3456-7890"
                className="w-full rounded-xl border border-gray-300 pl-12 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Nomor WhatsApp yang akan dihubungkan ke Riplai
            </p>
          </div>

          {/* Jenis bisnis */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis bisnis</label>
            <select className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
              <option>Apotek/Toko Obat</option>
              <option>Klinik/Dokter</option>
              <option>Restoran/F&B</option>
              <option>Villa/Penginapan</option>
              <option>Toko Retail</option>
              <option>Lainnya</option>
            </select>
          </div>

          {/* Kata sandi */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Kata sandi</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-xl border border-red-300 pr-10 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <EyeIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <p className="text-xs text-red-500 mt-1">Minimal 8 karakter</p>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2.5 mb-5">
            <div className="w-4 h-4 rounded bg-brand-500 border border-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckIcon className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <p className="text-sm text-gray-600">
              Saya setuju dengan{" "}
              <a href="/terms" className="text-accent-500 font-semibold">
                Syarat &amp; Ketentuan
              </a>{" "}
              dan{" "}
              <a href="/privacy" className="text-accent-500 font-semibold">
                Kebijakan Privasi
              </a>{" "}
              Riplai
            </p>
          </div>

          {/* CTA — loading state, non-interactive */}
          <a className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-base font-bold text-white pointer-events-none opacity-70">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Membuat akun...
          </a>

          <p className="text-center text-[13.5px] text-gray-400 mt-4">
            Sudah punya akun?{" "}
            <a href="/signin" className="text-brand-500 font-bold">
              Masuk
            </a>
          </p>
        </div>

        {/* Right — benefits panel */}
        <div className="bg-[#ECFDF5] rounded-[20px] p-7">
          <h2 className="text-[15px] font-bold text-brand-700 mb-5">
            Kenapa daftar Riplai?
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2.5 items-start">
                <div className="w-[22px] h-[22px] rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[13.5px] text-gray-900 leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
