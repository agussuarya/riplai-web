const tocLinks = [
  { id: "definisi", label: "Definisi" },
  { id: "pendaftaran", label: "Pendaftaran Akun" },
  { id: "layanan", label: "Layanan yang Diberikan" },
  { id: "pembayaran", label: "Pembayaran & Tagihan" },
  { id: "kuota", label: "Batasan Penggunaan" },
  { id: "dilarang", label: "Penggunaan yang Dilarang" },
  { id: "kepatuhan-wa", label: "Kepatuhan WhatsApp" },
  { id: "kekayaan-intelektual", label: "Kekayaan Intelektual" },
  { id: "penghentian", label: "Penghentian Layanan" },
  { id: "tanggung-jawab", label: "Batasan Tanggung Jawab" },
  { id: "hukum", label: "Hukum yang Berlaku" },
  { id: "sengketa", label: "Penyelesaian Sengketa" },
];

export default function TermsPage() {
  return (
    <div className="flex gap-10 max-w-[900px] mx-auto py-10 px-12">
      {/* Sticky TOC */}
      <nav className="w-[200px] flex-shrink-0">
        <div className="sticky top-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Isi
          </p>
          {tocLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-gray-400 border-l-2 border-transparent pl-3 py-1 block hover:text-brand-700 hover:border-brand-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Doc body */}
      <div className="flex-1 min-w-0">
        <h1 className="text-[26px] font-extrabold tracking-[-0.02em] text-gray-900 mb-1.5">
          Syarat &amp; Ketentuan
        </h1>
        <p className="text-sm text-gray-400 mb-8">Berlaku: [1 Juni 2026]</p>

        <section id="definisi">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            1. Definisi
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            <strong>Layanan</strong> berarti platform admin otomatis WhatsApp yang disediakan oleh Riplai. <strong>Partner</strong> berarti pelanggan bisnis yang berlangganan Layanan. <strong>Pelanggan Akhir</strong> berarti individu yang mengirim pesan ke nomor WhatsApp Partner. <strong>Knowledge Base</strong> berarti data bisnis yang diunggah oleh Partner untuk melatih admin otomatis. <strong>Nomor WA Bisnis</strong> berarti nomor WhatsApp yang didaftarkan Partner ke Layanan.
          </p>
        </section>

        <section id="pendaftaran">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            2. Pendaftaran Akun
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Untuk menggunakan Layanan, Partner harus mendaftarkan akun dengan informasi yang akurat dan lengkap. Partner bertanggung jawab atas keamanan kredensial akun dan semua aktivitas yang terjadi di bawah akun tersebut. Partner wajib memverifikasi kepemilikan Nomor WA Bisnis yang didaftarkan.
          </p>
        </section>

        <section id="layanan">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            3. Layanan yang Diberikan
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Riplai menyediakan: admin otomatis WhatsApp berbasis Knowledge Base, dashboard analitik percakapan, sistem notifikasi ke pemilik bisnis, dan kemampuan konfigurasi jawaban khusus. Ketersediaan fitur bergantung pada paket yang dipilih Partner.
          </p>
        </section>

        <section id="pembayaran">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            4. Pembayaran &amp; Tagihan
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Biaya langganan ditagihkan setiap bulan di muka. Jika pembayaran gagal, akun Partner akan diturunkan ke paket Gratis setelah 7 hari tenggang. Tidak ada pengembalian dana (<em>refund</em>) untuk bulan berjalan yang sudah dibayar. Harga dapat berubah dengan pemberitahuan 30 hari sebelumnya.
          </p>
        </section>

        <section id="kuota">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            5. Batasan Penggunaan (Kuota)
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Kuota balasan dihitung berdasarkan jumlah pesan <em>outbound</em> yang dikirim oleh admin otomatis dalam satu siklus tagihan. Jika kuota habis sebelum siklus berakhir, admin otomatis akan berhenti merespons hingga siklus tagihan berikutnya dimulai atau Partner meningkatkan paket.
          </p>
        </section>

        <section id="dilarang">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            6. Penggunaan yang Dilarang
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Partner dilarang menggunakan Layanan untuk: pengiriman pesan spam atau massal yang tidak diminta, phishing atau penipuan, konten yang melanggar hukum Indonesia, pelanggaran hak kekayaan intelektual pihak ketiga, atau tindakan yang melanggar Kebijakan WhatsApp Business Platform milik Meta.
          </p>
        </section>

        <section id="kepatuhan-wa">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            7. Kepatuhan WhatsApp Business API
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Partner wajib mematuhi Meta Business Policy dan WhatsApp Business Platform Policies pada setiap saat. Pelanggaran kebijakan Meta yang mengakibatkan pemblokiran nomor WA Partner atau akun Riplai akan mengakibatkan penghentian Layanan tanpa pengembalian dana.
          </p>
        </section>

        <section id="kekayaan-intelektual">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            8. Kekayaan Intelektual
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Riplai memiliki semua hak atas platform, teknologi, dan merek dagang yang terkait dengan Layanan. Partner memiliki semua hak atas Knowledge Base dan data bisnis yang mereka unggah. Partner memberikan Riplai lisensi terbatas untuk menggunakan data tersebut semata-mata untuk menjalankan Layanan.
          </p>
        </section>

        <section id="penghentian">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            9. Penghentian Layanan
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Partner dapat membatalkan langganan kapan saja melalui dashboard. Riplai berhak menghentikan akun yang melanggar Syarat &amp; Ketentuan ini dengan pemberitahuan 24 jam, atau tanpa pemberitahuan untuk pelanggaran serius (penipuan, spam massal, pelanggaran Meta Policy).
          </p>
        </section>

        <section id="tanggung-jawab">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            10. Batasan Tanggung Jawab
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Sejauh diizinkan oleh hukum yang berlaku, total tanggung jawab Riplai kepada Partner tidak akan melebihi tiga kali biaya langganan bulan terakhir yang dibayarkan oleh Partner. Riplai tidak bertanggung jawab atas kerugian tidak langsung, kehilangan data, atau gangguan bisnis yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan.
          </p>
        </section>

        <section id="hukum">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            11. Hukum yang Berlaku
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Syarat &amp; Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan Hukum Republik Indonesia, tanpa memperhatikan pilihan hukum atau ketentuan konflik hukum.
          </p>
        </section>

        <section id="sengketa">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            12. Penyelesaian Sengketa
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Para pihak sepakat untuk terlebih dahulu menyelesaikan sengketa melalui musyawarah selama 30 hari. Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui arbitrase di Badan Arbitrase Nasional Indonesia (BANI), Jakarta, sesuai dengan peraturan BANI yang berlaku.
          </p>
        </section>
      </div>
    </div>
  );
}
