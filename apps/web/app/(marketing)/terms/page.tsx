export default function TermsPage() {
  return (
    <div className="doc-layout">
      {/* TOC sidebar */}
      <div className="doc-toc">
        <div className="doc-toc-inner">
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.07em', margin: '0 0 10px' }}>Isi</p>
          <a className="toc-link" href="#s1">1. Penerimaan &amp; definisi</a>
          <a className="toc-link" href="#s2">2. Deskripsi layanan</a>
          <a className="toc-link" href="#s3">3. Kelayakan &amp; akun</a>
          <a className="toc-link" href="#s4">4. Kewajiban &amp; larangan</a>
          <a className="toc-link" href="#s5">5. Pembayaran &amp; berlangganan</a>
          <a className="toc-link" href="#s6">6. Kekayaan intelektual</a>
          <a className="toc-link" href="#s7">7. Pembatasan tanggung jawab</a>
          <a className="toc-link" href="#s8">8. Penangguhan &amp; penghentian</a>
          <a className="toc-link" href="#s9">9. Hukum yang berlaku</a>
          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '11px', color: 'var(--text-3)', margin: '0 0 4px' }}>Terakhir diperbarui</p>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-2)', margin: 0 }}>17 Mei 2026</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="doc-body">
        <h1 className="doc-h1">Syarat &amp; Ketentuan</h1>
        <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: '0 0 28px' }}>
          Terakhir diperbarui: 17 Mei 2026 &nbsp;·&nbsp; Berlaku sejak: 17 Mei 2026
        </p>

        <h2 id="s1" className="doc-h2">1. Penerimaan &amp; Definisi <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Acceptance &amp; Definitions)</span></h2>
        <p className="doc-p">Dengan mendaftar, mengakses, atau menggunakan layanan Riplai, Anda (&ldquo;Pengguna&rdquo;) menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini secara mengikat secara hukum berdasarkan Kitab Undang-Undang Hukum Perdata Indonesia (KUHPerdata Pasal 1320). Jika Anda tidak menyetujui syarat ini, hentikan penggunaan layanan.</p>
        <p className="doc-p"><strong>Definisi:</strong></p>
        <ul className="doc-ul">
          <li><strong>&ldquo;Riplai&rdquo;</strong> — layanan admin otomatis WhatsApp yang dioperasikan oleh pengembang perorangan berdomisili di Bali, Indonesia.</li>
          <li><strong>&ldquo;Pengguna&rdquo;</strong> — individu atau entitas bisnis yang mendaftar dan menggunakan platform Riplai.</li>
          <li><strong>&ldquo;Layanan&rdquo;</strong> — platform web Riplai beserta seluruh fitur, API, dan konten yang disediakan.</li>
          <li><strong>&ldquo;Pelanggan Akhir&rdquo;</strong> — pihak ketiga (konsumen) yang berinteraksi melalui WhatsApp dengan bisnis Pengguna via Layanan Riplai.</li>
          <li><strong>&ldquo;Data Bisnis&rdquo;</strong> — informasi bisnis yang Pengguna masukkan ke platform sebagai dasar balasan otomatis.</li>
        </ul>

        <h2 id="s2" className="doc-h2">2. Deskripsi Layanan <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Service Description)</span></h2>
        <p className="doc-p">Riplai menyediakan platform berbasis web yang memungkinkan bisnis Indonesia mengotomasi balasan pesan WhatsApp menggunakan kecerdasan buatan (AI) berdasarkan Data Bisnis yang dikonfigurasi oleh Pengguna. Balasan dihasilkan oleh model AI dari Anthropic (Claude) berdasarkan konteks yang diberikan Pengguna.</p>
        <p className="doc-p"><strong>Penegasan penting:</strong> Riplai bukan afiliasi, agen, mitra resmi, atau anak perusahaan dari WhatsApp Inc., Meta Platforms Inc., maupun Anthropic, PBC. Layanan Riplai menggunakan WhatsApp Cloud API resmi Meta namun beroperasi secara mandiri.</p>
        <p className="doc-p">Kami tidak menjamin bahwa balasan otomatis yang dihasilkan selalu akurat, lengkap, atau sesuai dengan setiap situasi bisnis Anda. Pengguna bertanggung jawab memverifikasi konfigurasi Data Bisnis dan memantau kualitas balasan.</p>

        <h2 id="s3" className="doc-h2">3. Kelayakan &amp; Akun <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Eligibility &amp; Account)</span></h2>
        <p className="doc-p">Untuk menggunakan Riplai, Anda harus memenuhi syarat berikut:</p>
        <ul className="doc-ul">
          <li>Berusia minimal <strong>17 tahun</strong>. Pengguna di bawah 17 tahun memerlukan persetujuan tertulis dari orang tua atau wali yang sah.</li>
          <li>Memiliki kewenangan hukum untuk mengikat entitas bisnis yang didaftarkan.</li>
          <li>Mematuhi syarat layanan WhatsApp Business API dan kebijakan Meta yang berlaku.</li>
          <li>Berdomisili atau beroperasi secara sah di Indonesia atau yurisdiksi yang mengizinkan penggunaan layanan ini.</li>
        </ul>
        <p className="doc-p">Setiap akun mewakili satu entitas bisnis. Anda bertanggung jawab menjaga kerahasiaan kredensial akun dan seluruh aktivitas yang dilakukan menggunakan akun Anda. Laporkan segera akses tidak sah ke <strong>hello.riplai@gmail.com</strong>.</p>

        <h2 id="s4" className="doc-h2">4. Kewajiban &amp; Larangan Pengguna <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(User Obligations &amp; Prohibited Use)</span></h2>
        <p className="doc-p">Sebagai Pengguna, Anda <strong>wajib:</strong></p>
        <ul className="doc-ul">
          <li>Memberikan informasi akun yang akurat dan terkini.</li>
          <li>Memastikan pelanggan akhir Anda memiliki kesempatan untuk mengetahui bahwa mereka berinteraksi dengan sistem balasan otomatis.</li>
          <li>Mematuhi seluruh hukum Indonesia yang berlaku, termasuk UU ITE, UU Perlindungan Konsumen, dan peraturan sektoral bisnis Anda.</li>
          <li>Bertanggung jawab atas konten Data Bisnis yang Anda masukkan dan dampaknya terhadap pelanggan akhir.</li>
        </ul>
        <p className="doc-p">Layanan Riplai <strong>dilarang</strong> digunakan untuk:</p>
        <ul className="doc-ul">
          <li>Mengirimkan spam, pesan promosi massal yang tidak diminta, atau melanggar kebijakan anti-spam WhatsApp.</li>
          <li>Aktivitas yang melanggar hukum Indonesia, termasuk penipuan, ujaran kebencian, pornografi, perjudian ilegal, atau terorisme.</li>
          <li>Menipu, menyesatkan, atau merugikan pelanggan akhir.</li>
          <li>Melanggar hak kekayaan intelektual pihak ketiga melalui konten Data Bisnis.</li>
          <li>Melakukan rekayasa balik (reverse engineering), mendistribusikan ulang, atau menjual kembali Layanan tanpa izin tertulis.</li>
          <li>Menggunakan Layanan untuk bisnis yang dilarang berdasarkan kebijakan WhatsApp Business API atau kebijakan Meta.</li>
        </ul>
        <p className="doc-p">Pelanggaran larangan di atas dapat mengakibatkan penangguhan akun segera dan/atau tindakan hukum.</p>

        <h2 id="s5" className="doc-h2">5. Pembayaran &amp; Berlangganan <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Payment &amp; Subscription)</span></h2>
        <p className="doc-p">Pembayaran diproses oleh <strong>PT Xendit Pte Ltd (Xendit)</strong>, penyedia layanan pembayaran berlisensi di Indonesia. Riplai tidak menyimpan informasi kartu kredit, rekening bank, atau detail instrumen pembayaran Anda.</p>
        <ul className="doc-ul">
          <li><strong>Penagihan:</strong> Biaya berlangganan ditagih di muka setiap bulan pada tanggal yang sama dengan tanggal mulai berlangganan.</li>
          <li><strong>Perpanjangan otomatis:</strong> Berlangganan diperpanjang otomatis kecuali Anda membatalkan sebelum tanggal penagihan berikutnya melalui halaman Pengaturan.</li>
          <li><strong>Kegagalan pembayaran:</strong> Akses ke fitur berbayar dapat dihentikan sementara jika pembayaran gagal. Anda diberikan masa tenggang 3 hari untuk memperbarui metode pembayaran.</li>
          <li><strong>Kebijakan refund:</strong> Kami tidak menyediakan refund untuk periode berlangganan yang telah dimulai, kecuali terjadi gangguan layanan total selama lebih dari 72 jam berturut-turut yang disebabkan sepenuhnya oleh pihak Riplai. Klaim refund harus diajukan dalam 14 hari setelah gangguan.</li>
          <li><strong>Perubahan harga:</strong> Harga berlangganan dapat berubah dengan pemberitahuan minimal <strong>30 hari</strong> melalui email terdaftar. Perubahan harga berlaku pada siklus penagihan berikutnya setelah pemberitahuan.</li>
        </ul>
        <p className="doc-p">Seluruh harga dalam Rupiah Indonesia (IDR) dan belum termasuk pajak yang mungkin berlaku sesuai regulasi perpajakan Indonesia.</p>

        <h2 id="s6" className="doc-h2">6. Kekayaan Intelektual <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Intellectual Property)</span></h2>
        <p className="doc-p">Seluruh hak kekayaan intelektual atas platform Riplai, termasuk antarmuka, kode, merek dagang, dan konten yang dibuat Riplai, adalah milik pengelola Riplai. Anda mendapatkan lisensi terbatas, non-eksklusif, tidak dapat dipindahkan untuk menggunakan Layanan selama masa berlangganan aktif.</p>
        <p className="doc-p">Anda mempertahankan kepemilikan atas Data Bisnis yang Anda masukkan. Dengan menggunakan Layanan, Anda memberikan Riplai lisensi untuk memproses Data Bisnis tersebut semata-mata untuk tujuan menyediakan Layanan kepada Anda.</p>

        <h2 id="s7" className="doc-h2">7. Pembatasan Tanggung Jawab <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Limitation of Liability)</span></h2>
        <p className="doc-p">Layanan Riplai disediakan &ldquo;sebagaimana adanya&rdquo; (<em>as-is</em>) tanpa jaminan apapun, tersurat maupun tersirat, termasuk jaminan ketersediaan, akurasi balasan AI, atau kesesuaian untuk tujuan tertentu.</p>
        <p className="doc-p">Sejauh diizinkan hukum Indonesia, Riplai tidak bertanggung jawab atas:</p>
        <ul className="doc-ul">
          <li>Kerugian tidak langsung, insidental, atau konsekuensial, termasuk kehilangan pendapatan atau keuntungan bisnis.</li>
          <li>Gangguan layanan yang disebabkan oleh kebijakan WhatsApp/Meta, pemadaman Anthropic, Vercel, atau Supabase di luar kendali kami.</li>
          <li>Kerugian akibat balasan otomatis yang tidak akurat yang bersumber dari Data Bisnis yang tidak lengkap atau keliru.</li>
          <li>Akses tidak sah ke akun Anda akibat kelalaian dalam menjaga kerahasiaan kredensial.</li>
        </ul>
        <p className="doc-p">Total tanggung jawab kumulatif Riplai kepada Anda dalam situasi apapun tidak akan melebihi jumlah yang Anda bayarkan kepada Riplai dalam 3 bulan terakhir sebelum klaim timbul.</p>

        <h2 id="s8" className="doc-h2">8. Penangguhan &amp; Penghentian <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Suspension &amp; Termination)</span></h2>
        <p className="doc-p"><strong>Oleh Riplai:</strong> Kami berhak menangguhkan atau mengakhiri akun Anda tanpa pemberitahuan sebelumnya jika: (a) terjadi pelanggaran Syarat ini; (b) diperlukan untuk memenuhi kewajiban hukum; atau (c) aktivitas akun membahayakan pengguna lain atau infrastruktur layanan.</p>
        <p className="doc-p"><strong>Oleh Pengguna:</strong> Anda dapat menutup akun kapan saja melalui halaman Pengaturan. Penutupan akun tidak menghasilkan refund untuk periode yang telah dibayar.</p>
        <p className="doc-p"><strong>Setelah penghentian:</strong> Akses ke Layanan berakhir segera. Data akun akan dihapus dalam 30 hari kerja sesuai Kebijakan Privasi.</p>

        <h2 id="s9" className="doc-h2">9. Hukum yang Berlaku &amp; Penyelesaian Sengketa <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Governing Law &amp; Disputes)</span></h2>
        <p className="doc-p">Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai hukum Republik Indonesia, termasuk namun tidak terbatas pada UU ITE No. 11 Tahun 2008 beserta perubahannya, UU PDP No. 27 Tahun 2022, dan KUHPerdata.</p>
        <p className="doc-p">Para pihak akan berupaya menyelesaikan sengketa secara musyawarah dalam 30 hari. Jika tidak tercapai kesepakatan, sengketa diselesaikan melalui <strong>Pengadilan Negeri Denpasar</strong> sebagai pengadilan yang berwenang.</p>
        <p className="doc-p">Perubahan Syarat &amp; Ketentuan ini akan diberitahukan melalui email atau notifikasi dashboard minimal 14 hari sebelum berlaku. Pertanyaan dapat dikirimkan ke <strong>hello.riplai@gmail.com</strong>.</p>
      </div>
    </div>
  );
}
