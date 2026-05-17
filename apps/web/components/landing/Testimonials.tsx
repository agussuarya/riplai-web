interface Testimonial {
  avatarBg: string;
  initials: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    avatarBg: "bg-brand-500",
    initials: "IS",
    name: "Ibu Sari",
    role: "Pemilik Klinik · Jakarta",
    quote:
      "Dulu saya jawab WA pasien jam 2 pagi. Sekarang admin otomatis yang kerja, saya bisa tidur tenang.",
  },
  {
    avatarBg: "bg-accent-500",
    initials: "PB",
    name: "Pak Budi",
    role: "Restoran Padang · Bandung",
    quote:
      "Pelanggan tanya menu dan jam buka? Bot sudah jawab sebelum saya sempat buka HP.",
  },
  {
    avatarBg: "bg-brand-600",
    initials: "MD",
    name: "Mbak Dewi",
    role: "Villa & Homestay · Bali",
    quote:
      "Tamu dari luar negeri tanya dalam bahasa Inggris pun dibalas dengan baik. Sangat membantu.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-11 text-gray-900"
        style={{ fontSize: "34px" }}
      >
        Kata mereka yang sudah pakai
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[920px] mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="border border-gray-100 rounded-[18px] p-6">
            <p className="text-[32px] text-[#A7F3D0] font-extrabold leading-none mb-3">&ldquo;</p>
            <p className="text-sm text-gray-900 leading-[1.65] mb-5">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full text-[11px] font-bold text-white flex items-center justify-center flex-shrink-0 ${t.avatarBg}`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
