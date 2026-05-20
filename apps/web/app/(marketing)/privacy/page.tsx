export default function PrivacyPage() {
  return (
    <div className="doc-layout">
      {/* TOC sidebar */}
      <div className="doc-toc">
        <div className="doc-toc-inner">
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.07em', margin: '0 0 10px' }}>Isi</p>
          <a className="toc-link" href="#s1">1. Pendahuluan</a>
          <a className="toc-link" href="#s2">2. Data yang dikumpulkan</a>
          <a className="toc-link" href="#s3">3. Dasar &amp; tujuan pemrosesan</a>
          <a className="toc-link" href="#s4">4. Pihak ketiga &amp; transfer</a>
          <a className="toc-link" href="#s5">5. Keamanan &amp; penyimpanan</a>
          <a className="toc-link" href="#s6">6. Hak pengguna (UU PDP)</a>
          <a className="toc-link" href="#s7">7. Cookies</a>
          <a className="toc-link" href="#s8">8. Perubahan kebijakan</a>
          <a className="toc-link" href="#s9">9. Hubungi kami</a>
          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '11px', color: 'var(--text-3)', margin: '0 0 4px' }}>Terakhir diperbarui</p>
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-2)', margin: 0 }}>17 Mei 2026</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="doc-body">
        <h1 className="doc-h1">Kebijakan Privasi</h1>
        <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: '0 0 28px' }}>
          Terakhir diperbarui: 17 Mei 2026 &nbsp;·&nbsp; Berlaku sejak: 17 Mei 2026
        </p>

        <h2 id="s1" className="doc-h2">1. Pendahuluan <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Introduction)</span></h2>
        <p className="doc-p">Layanan Riplai dioperasikan oleh pengembang perorangan berdomisili di Bali, Indonesia (&ldquo;Riplai&rdquo;, &ldquo;kami&rdquo;, &ldquo;pengelola&rdquo;). Kami berkomitmen melindungi privasi Anda sesuai dengan <strong>Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)</strong> dan peraturan perundang-undangan Indonesia yang berlaku.</p>
        <p className="doc-p">Kebijakan ini menjelaskan data apa yang kami kumpulkan, mengapa, bagaimana kami melindunginya, dan hak-hak Anda sebagai pemilik data. Dengan mendaftar atau menggunakan layanan Riplai, Anda menyatakan telah membaca dan menyetujui kebijakan ini.</p>
        <p className="doc-p"><strong>Dua lapisan pengguna yang kami layani:</strong> (a) <em>Pemilik bisnis</em> yang mendaftar dan menggunakan dashboard Riplai (&ldquo;Pengguna&rdquo;); dan (b) <em>Pelanggan akhir bisnis</em> tersebut yang berkomunikasi melalui WhatsApp (&ldquo;Pelanggan Akhir&rdquo;). Kebijakan ini berlaku untuk keduanya.</p>

        <h2 id="s2" className="doc-h2">2. Data yang Dikumpulkan <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Data We Collect)</span></h2>
        <p className="doc-p"><strong>A. Data Pengguna (Pemilik Bisnis)</strong></p>
        <ul className="doc-ul">
          <li><strong>Data akun:</strong> Nama, alamat email, nomor WhatsApp bisnis, nama bisnis, jenis bisnis, dan kata sandi (disimpan terenkripsi).</li>
          <li><strong>Data bisnis:</strong> Konten yang Anda masukkan ke fitur Data Bisnis — jam operasional, katalog produk/layanan, FAQ, dan instruksi kustom untuk balasan otomatis.</li>
          <li><strong>Data pembayaran:</strong> Riwayat transaksi dan status langganan. Detail kartu/rekening diproses langsung oleh Xendit — kami tidak menyimpan nomor kartu atau rekening Anda.</li>
          <li><strong>Data teknis:</strong> Alamat IP, jenis dan versi browser, sistem operasi, halaman yang dikunjungi, dan waktu akses — dikumpulkan otomatis untuk keamanan dan peningkatan layanan.</li>
        </ul>
        <p className="doc-p" style={{ marginTop: '12px' }}><strong>B. Data Pelanggan Akhir (Pengguna WhatsApp Bisnis Anda)</strong></p>
        <ul className="doc-ul">
          <li><strong>Isi percakapan:</strong> Pesan WhatsApp yang dikirimkan ke nomor yang terhubung ke Riplai, diproses untuk menghasilkan balasan otomatis berbasis data bisnis yang Anda konfigurasi.</li>
          <li><strong>Nomor telepon:</strong> Nomor WhatsApp pengirim pesan, digunakan untuk mengirimkan balasan dan menampilkan riwayat percakapan di dashboard Anda.</li>
        </ul>
        <p className="doc-p">Sebagai Pengguna (pemilik bisnis), Anda bertanggung jawab memastikan pelanggan akhir Anda mengetahui bahwa pesan mereka diproses oleh sistem otomatis Riplai.</p>

        <h2 id="s3" className="doc-h2">3. Dasar &amp; Tujuan Pemrosesan <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Legal Basis &amp; Purpose)</span></h2>
        <p className="doc-p">Kami memproses data berdasarkan dasar hukum berikut (UU PDP Pasal 20):</p>
        <ul className="doc-ul">
          <li><strong>Pelaksanaan kontrak:</strong> Menyediakan layanan admin otomatis WhatsApp yang Anda berlangganan.</li>
          <li><strong>Persetujuan:</strong> Analitik pengembangan produk dan komunikasi pemasaran (dapat dicabut kapan saja).</li>
          <li><strong>Kepentingan sah (legitimate interest):</strong> Keamanan sistem, deteksi penipuan, dan pencegahan penyalahgunaan layanan.</li>
          <li><strong>Kewajiban hukum:</strong> Pemenuhan kewajiban di bawah hukum Indonesia yang berlaku.</li>
        </ul>
        <p className="doc-p">Data digunakan untuk: menyediakan dan meningkatkan layanan balasan otomatis; mengirimkan notifikasi akun dan operasional; analitik internal (tidak dijual); memenuhi kewajiban hukum.</p>

        <h2 id="s4" className="doc-h2">4. Pihak Ketiga &amp; Transfer Data Lintas Batas <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Third Parties &amp; Cross-Border Transfers)</span></h2>
        <p className="doc-p">Untuk menyediakan layanan, kami berbagi data dengan pihak ketiga berikut. Sesuai UU PDP Pasal 56, kami memastikan penerima data menerapkan perlindungan yang setara:</p>
        <ul className="doc-ul">
          <li><strong>Anthropic, PBC (Amerika Serikat)</strong> — Penyedia model kecerdasan buatan (Claude) yang memproses isi percakapan WhatsApp untuk menghasilkan balasan otomatis. Data dikirim ke server Anthropic di Amerika Serikat.</li>
          <li><strong>Vercel, Inc. (Amerika Serikat)</strong> — Penyedia infrastruktur hosting aplikasi web Riplai.</li>
          <li><strong>Supabase, Inc. (Amerika Serikat / Region terpilih)</strong> — Penyedia database.</li>
          <li><strong>PT Xendit Pte Ltd (Indonesia)</strong> — Penyedia layanan pembayaran untuk pemrosesan transaksi berlangganan.</li>
          <li><strong>Meta Platforms, Inc. (Amerika Serikat)</strong> — Layanan Riplai menggunakan WhatsApp Cloud API resmi dari Meta.</li>
        </ul>
        <p className="doc-p">Kami tidak menjual data pribadi Anda kepada pihak ketiga manapun untuk tujuan pemasaran.</p>

        <h2 id="s5" className="doc-h2">5. Keamanan &amp; Penyimpanan Data <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Security &amp; Retention)</span></h2>
        <p className="doc-p">Kami menerapkan langkah-langkah keamanan teknis yang wajar, termasuk enkripsi data saat transit (TLS/HTTPS) dan saat disimpan. Kata sandi disimpan dalam bentuk hash satu arah.</p>
        <p className="doc-p"><strong>Retensi data:</strong> Data akun dan bisnis disimpan selama akun aktif. Data percakapan disimpan selama <strong>90 hari kalender</strong>, kemudian dihapus secara otomatis. Setelah akun ditutup, seluruh data dihapus dalam <strong>30 hari kerja</strong>.</p>
        <p className="doc-p"><strong>Pelanggaran keamanan:</strong> Jika terjadi kebocoran data yang berdampak pada hak Anda, kami akan memberitahu Anda dan otoritas berwenang dalam <strong>14 hari</strong> sejak pelanggaran diketahui, sesuai UU PDP.</p>

        <h2 id="s6" className="doc-h2">6. Hak Pengguna (UU PDP) <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Your Rights)</span></h2>
        <p className="doc-p">Sesuai UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi, Anda memiliki hak-hak berikut:</p>
        <ul className="doc-ul">
          <li><strong>Hak mengakses</strong> — memperoleh salinan data pribadi yang kami simpan tentang Anda.</li>
          <li><strong>Hak mengoreksi</strong> — meminta perbaikan data yang tidak akurat atau tidak lengkap.</li>
          <li><strong>Hak menghapus</strong> — meminta penghapusan data pribadi Anda (&ldquo;hak untuk dilupakan&rdquo;), sepanjang tidak bertentangan dengan kewajiban hukum kami.</li>
          <li><strong>Hak membatasi pemrosesan</strong> — meminta pembatasan pemrosesan data dalam kondisi tertentu.</li>
          <li><strong>Hak portabilitas</strong> — menerima data Anda dalam format yang dapat dibaca mesin.</li>
          <li><strong>Hak keberatan</strong> — menolak pemrosesan data untuk tujuan tertentu, termasuk pemasaran langsung.</li>
          <li><strong>Hak menarik persetujuan</strong> — mencabut persetujuan kapan saja tanpa mempengaruhi keabsahan pemrosesan sebelumnya.</li>
        </ul>
        <p className="doc-p">Untuk menggunakan hak-hak ini, kirimkan permintaan ke <strong>hello.riplai@gmail.com</strong>. Kami akan merespons dalam <strong>14 hari kerja</strong>.</p>

        <h2 id="s7" className="doc-h2">7. Cookies <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Cookies)</span></h2>
        <p className="doc-p">Kami menggunakan cookies esensial untuk mempertahankan sesi login dan keamanan akun. Kami juga dapat menggunakan cookies analitik anonim untuk memahami pola penggunaan dashboard guna meningkatkan layanan. Anda dapat menonaktifkan cookies di pengaturan browser, namun fitur login dan keamanan mungkin tidak berfungsi.</p>

        <h2 id="s8" className="doc-h2">8. Perubahan Kebijakan <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Policy Updates)</span></h2>
        <p className="doc-p">Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan yang berdampak signifikan pada hak Anda akan diberitahukan melalui email terdaftar atau notifikasi di dashboard setidaknya <strong>14 hari</strong> sebelum berlaku. Penggunaan layanan setelah tanggal berlaku merupakan penerimaan atas perubahan tersebut.</p>

        <h2 id="s9" className="doc-h2">9. Hubungi Kami <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-3)' }}>(Contact)</span></h2>
        <p className="doc-p">Pertanyaan, permintaan hak data, atau laporan terkait privasi dapat dikirimkan ke:</p>
        <div className="doc-card">
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-1)', lineHeight: 1.8 }}>
            <strong>Riplai</strong><br />
            Dioperasikan oleh pengembang perorangan<br />
            Bali, Indonesia<br />
            Email: <strong>hello.riplai@gmail.com</strong><br />
            <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Email bisnis (privasi@riplai.id) sedang disiapkan dan akan menggantikan alamat di atas.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
