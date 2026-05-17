import { DemoChat } from "@/components/demo/DemoChat";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[1100px] mx-auto py-24 px-16 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-1.5 bg-accent-100 text-accent-600 text-xs font-bold px-3.5 py-1 rounded-full mb-6">
            Admin Otomatis WhatsApp
          </span>
          <h1
            className="font-extrabold tracking-[-0.04em] leading-[1.06] mb-5 text-gray-900"
            style={{ fontSize: "58px" }}
          >
            WhatsApp kamu aktif
            <br />
            <span className="gradient-text">24 jam</span>,
            <br />
            bahkan saat tidur.
          </h1>
          <p
            className="text-gray-500 leading-[1.65] max-w-[420px] mb-8"
            style={{ fontSize: "17px" }}
          >
            Admin otomatis menjawab chat pelanggan berdasarkan data bisnis kamu. Kamu tidak perlu balas satu per satu.
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="/signup"
              className="text-[15px] font-bold text-white bg-brand-500 hover:bg-brand-600 px-7 py-3 rounded-full transition-colors"
            >
              Coba Gratis 14 Hari →
            </a>
            <a
              href="#"
              className="text-[15px] font-semibold text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-200 px-7 py-3 rounded-full transition-colors"
            >
              Lihat Demo
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-3.5">
            Tidak perlu kartu kredit · Setup dalam 5 menit
          </p>
          <div className="mt-9 flex items-center gap-3">
            <div className="flex items-center">
              {[
                { initials: "AS", bg: "bg-brand-500" },
                { initials: "RM", bg: "bg-accent-500" },
                { initials: "HB", bg: "bg-brand-600" },
                { initials: "KS", bg: "bg-[#0F766E]" },
              ].map((avatar, i) => (
                <div
                  key={avatar.initials}
                  className={`w-7 h-7 rounded-full border-2 border-white text-[9px] font-bold text-white flex items-center justify-center ${avatar.bg} ${i > 0 ? "-ml-2" : ""}`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <strong>200+</strong> bisnis Indonesia sudah pakai Riplai
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center">
          <div
            className="max-w-[360px] w-full"
            style={{
              transform: "rotate(-0.8deg)",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,.12))",
              borderRadius: "22px",
            }}
          >
            <DemoChat />
          </div>
          <p className="text-[11.5px] text-gray-400 text-center mt-3">
            Ini yang tamu kamu terima jam 11 malam, dibalas otomatis.
          </p>
        </div>
      </div>
    </section>
  );
}
