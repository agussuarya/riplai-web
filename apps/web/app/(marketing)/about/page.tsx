export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-12 py-14">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-2)] hover:text-[var(--text-1)] mb-6 transition-colors"
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Beranda
      </a>
      <h1
        className="font-extrabold tracking-[-0.03em] text-gray-900 mb-4"
        style={{ fontSize: '40px' }}
      >
        Tentang Riplai
      </h1>
      <p
        className="text-gray-500 leading-[1.65] max-w-[560px] mb-12"
        style={{ fontSize: '17px' }}
      >
        Kami percaya pemilik bisnis kecil Indonesia tidak seharusnya harus pilih antara tidur dan
        melayani pelanggan.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
        <div className="text-center bg-white border border-gray-100 rounded-[18px] p-7">
          <p className="font-extrabold text-brand-500" style={{ fontSize: '32px' }}>
            200+
          </p>
          <p className="text-gray-500 font-medium mt-1.5" style={{ fontSize: '13.5px' }}>
            Bisnis aktif
          </p>
        </div>
        <div className="text-center bg-white border border-gray-100 rounded-[18px] p-7">
          <p className="font-extrabold text-accent-500" style={{ fontSize: '32px' }}>
            98%
          </p>
          <p className="text-gray-500 font-medium mt-1.5" style={{ fontSize: '13.5px' }}>
            Akurasi jawaban
          </p>
        </div>
        <div className="text-center bg-white border border-gray-100 rounded-[18px] p-7">
          <p className="font-extrabold text-brand-500" style={{ fontSize: '32px' }}>
            1,2dtk
          </p>
          <p className="text-gray-500 font-medium mt-1.5" style={{ fontSize: '13.5px' }}>
            Rata-rata respons
          </p>
        </div>
      </div>

      {/* Misi */}
      <div className="bg-white border border-gray-100 rounded-[18px] p-7 mb-6">
        <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: '18px' }}>
          Misi kami
        </h2>
        <p className="text-sm text-gray-500 leading-[1.7]">
          Memberi bisnis kecil Indonesia akses ke teknologi yang sebelumnya hanya tersedia untuk
          perusahaan besar. Admin otomatis yang cerdas, harga yang terjangkau, tanpa keahlian
          teknis apapun.
        </p>
      </div>

      {/* Informasi Perusahaan */}
      <div className="bg-white border border-gray-100 rounded-[18px] p-7">
        <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '18px' }}>
          Informasi Perusahaan
        </h2>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span
              className="font-semibold text-gray-400 shrink-0"
              style={{ fontSize: '13px', width: '140px' }}
            >
              Pengelola
            </span>
            <span className="text-gray-900" style={{ fontSize: '13px' }}>
              Riplai (pengembang perorangan)
            </span>
          </div>
          <div className="flex gap-3">
            <span
              className="font-semibold text-gray-400 shrink-0"
              style={{ fontSize: '13px', width: '140px' }}
            >
              Domisili
            </span>
            <span className="text-gray-900" style={{ fontSize: '13px' }}>
              Bali, Indonesia
            </span>
          </div>
          <div className="flex gap-3">
            <span
              className="font-semibold text-gray-400 shrink-0"
              style={{ fontSize: '13px', width: '140px' }}
            >
              Email
            </span>
            <a
              href="mailto:hello.riplai@gmail.com"
              className="text-brand-500"
              style={{ fontSize: '13px' }}
            >
              hello.riplai@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
