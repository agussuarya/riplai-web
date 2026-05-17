const tocLinks = [
  { id: "identitas", label: "Identitas Pengontrol" },
  { id: "data-dikumpulkan", label: "Data yang Dikumpulkan" },
  { id: "tujuan", label: "Tujuan Pemrosesan" },
  { id: "dasar-hukum", label: "Dasar Hukum" },
  { id: "hak-subjek", label: "Hak Subjek Data" },
  { id: "retensi", label: "Retensi Data" },
  { id: "pihak-ketiga", label: "Pihak Ketiga" },
  { id: "keamanan", label: "Keamanan" },
  { id: "cookie", label: "Cookie" },
  { id: "perubahan", label: "Perubahan Kebijakan" },
  { id: "kontak", label: "Kontak" },
];

export default function PrivacyPage() {
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
          Kebijakan Privasi
        </h1>
        <p className="text-sm text-gray-400 mb-8">Berlaku: [1 Juni 2026]</p>

        <section id="identitas">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            1. Identitas Pengontrol Data
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Layanan riplai dioperasikan oleh <strong>Riplai</strong> (nama usaha terdaftar di Indonesia, NIB: <strong>[NOMOR NIB]</strong>). Kontak: <a href="mailto:legal@riplai.id" className="text-accent-500">legal@riplai.id</a>
          </p>
        </section>

        <section id="data-dikumpulkan">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            2. Data yang Kami Kumpulkan
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Kami mengumpulkan data berikut untuk menjalankan layanan:
          </p>
          <ul className="text-sm text-gray-500 leading-[1.75] mb-3 list-disc pl-5 space-y-1">
            <li><strong>Dari partner (pelanggan riplai):</strong> nama bisnis, nomor WhatsApp bisnis, alamat email, dan data penggunaan layanan.</li>
            <li><strong>Dari percakapan WhatsApp:</strong> nomor WA pelanggan akhir dan isi pesan yang diperlukan untuk fungsi admin otomatis.</li>
            <li><strong>Data teknis:</strong> alamat IP, jenis perangkat, dan log akses untuk keamanan dan performa layanan.</li>
          </ul>
        </section>

        <section id="tujuan">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            3. Tujuan Pemrosesan Data
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Data yang kami kumpulkan digunakan untuk:
          </p>
          <ul className="text-sm text-gray-500 leading-[1.75] mb-3 list-disc pl-5 space-y-1">
            <li>Menjalankan layanan admin otomatis WhatsApp untuk bisnis partner.</li>
            <li>Melatih Knowledge Base dari data yang diunggah oleh partner.</li>
            <li>Mengirim notifikasi kepada pemilik bisnis ketika diperlukan.</li>
            <li>Peningkatan kualitas layanan dan analitik agregat yang tidak dapat mengidentifikasi individu.</li>
          </ul>
        </section>

        <section id="dasar-hukum">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            4. Dasar Hukum Pemrosesan
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Pemrosesan data dilakukan berdasarkan: (a) pelaksanaan perjanjian layanan antara Riplai dan partner (Pasal 20 UU PDP No. 27 Tahun 2022); dan (b) kepentingan sah (<em>legitimate interest</em>) dalam meningkatkan keamanan dan kualitas layanan.
          </p>
        </section>

        <section id="hak-subjek">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            5. Hak Subjek Data
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Sesuai UU PDP, Anda memiliki hak untuk mengakses, mengoreksi, menghapus, membatasi pemrosesan, dan mendapatkan portabilitas data pribadi Anda. Untuk menggunakan hak-hak tersebut, hubungi kami di <a href="mailto:legal@riplai.id" className="text-accent-500">legal@riplai.id</a>.
          </p>
        </section>

        <section id="retensi">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            6. Retensi Data
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Data percakapan disimpan selama 12 bulan sejak percakapan terjadi, ditambah 6 bulan setelah akun partner dihentikan. Data akun disimpan selama akun aktif dan dihapus dalam 30 hari setelah permintaan penghapusan diterima.
          </p>
        </section>

        <section id="pihak-ketiga">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            7. Pengungkapan kepada Pihak Ketiga
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Kami dapat berbagi data dengan penyedia layanan terpercaya yang membantu kami mengoperasikan Riplai, termasuk: penyedia WhatsApp Business API (Meta Platforms), layanan hosting cloud, dan alat analitik. Semua pihak ketiga terikat oleh perjanjian kerahasiaan dan tidak diizinkan menggunakan data Anda untuk tujuan lain.
          </p>
        </section>

        <section id="keamanan">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            8. Keamanan Data
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar, termasuk enkripsi data dalam transit (TLS 1.3), enkripsi data saat istirahat (<em>at-rest</em>), dan kontrol akses berbasis peran. Namun, tidak ada sistem yang sepenuhnya aman. Jika terjadi pelanggaran data, kami akan memberi tahu pihak terdampak sesuai ketentuan UU PDP.
          </p>
        </section>

        <section id="cookie">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            9. Cookie
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Kami menggunakan cookie fungsional (untuk sesi dan preferensi pengguna) dan cookie analitik (untuk memahami penggunaan layanan secara agregat). Anda dapat menonaktifkan cookie melalui pengaturan browser, namun beberapa fitur layanan mungkin tidak berfungsi optimal.
          </p>
        </section>

        <section id="perubahan">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            10. Perubahan Kebijakan
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Untuk perubahan yang material, kami akan memberi tahu partner melalui email setidaknya 30 hari sebelum perubahan berlaku. Penggunaan layanan yang berlanjut setelah tanggal efektif dianggap sebagai penerimaan atas kebijakan yang diperbarui.
          </p>
        </section>

        <section id="kontak">
          <h2 className="text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5 text-gray-900">
            11. Kontak
          </h2>
          <p className="text-sm text-gray-500 leading-[1.75] mb-3">
            Untuk pertanyaan terkait kebijakan privasi ini atau untuk menggunakan hak-hak Anda sebagai subjek data, hubungi kami di: <a href="mailto:legal@riplai.id" className="text-accent-500">legal@riplai.id</a>
          </p>
        </section>
      </div>
    </div>
  );
}
