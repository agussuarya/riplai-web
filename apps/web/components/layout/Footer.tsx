export function Footer() {
  return (
    <footer className="bg-[#0D1117] pt-11 pb-6 px-12">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-between gap-10 mb-8 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="14" height="17" viewBox="0 0 40 46" fill="none">
                  <path d="M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z" fill="white" opacity=".93" />
                  <circle cx="12" cy="19" r="3" fill="#059669" />
                  <path d="M12,13 A6,6 0 0,1 12,25" stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M12,8 A11,11 0 0,1 12,30" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".6" />
                  <path d="M12,3 A16,16 0 0,1 12,35" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".35" />
                </svg>
              </div>
              <span className="text-base font-extrabold text-[#E6EDF3] tracking-[-0.02em]">riplai</span>
            </div>
            <p className="text-[13px] text-[#8B949E] max-w-[200px] leading-[1.6]">
              Penjawab 24 jam untuk bisnis Indonesia.
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div>
              <p className="text-[12px] font-bold text-[#E6EDF3] mb-3 uppercase tracking-[0.05em]">Produk</p>
              <div className="flex flex-col gap-2">
                <a href="/features" className="text-[13px] text-[#8B949E] hover:text-[#E6EDF3] transition-colors">Fitur</a>
                <a href="/pricing" className="text-[13px] text-[#8B949E] hover:text-[#E6EDF3] transition-colors">Harga</a>
                <a href="/demo" className="text-[13px] text-[#8B949E] hover:text-[#E6EDF3] transition-colors">Demo</a>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#E6EDF3] mb-3 uppercase tracking-[0.05em]">Perusahaan</p>
              <div className="flex flex-col gap-2">
                <a href="/about" className="text-[13px] text-[#8B949E] hover:text-[#E6EDF3] transition-colors">Tentang</a>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#E6EDF3] mb-3 uppercase tracking-[0.05em]">Legal</p>
              <div className="flex flex-col gap-2">
                <a href="/privacy" className="text-[13px] text-[#8B949E] hover:text-[#E6EDF3] transition-colors">Kebijakan Privasi</a>
                <a href="/terms" className="text-[13px] text-[#8B949E] hover:text-[#E6EDF3] transition-colors">Syarat &amp; Ketentuan</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#21262D] pt-[18px] text-center text-[12px] text-[#8B949E]">
          © 2026 Riplai. Dibuat di Indonesia 🇮🇩
        </div>
      </div>
    </footer>
  );
}
