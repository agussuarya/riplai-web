interface Testimonial {
  avatarBg: string;
  initials: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    avatarBg: 'bg-brand-500',
    initials: 'KW',
    name: 'Kadek Wira',
    role: 'Pemilik Villa · Seminyak, Bali',
    quote:
      'Tamu WA malam-malam tanya ketersediaan kamar. Sudah dibalas otomatis sebelum saya sempat lihat HP.',
  },
  {
    avatarBg: 'bg-accent-500',
    initials: 'NM',
    name: 'Nyoman Mega',
    role: 'Warung & Café · Ubud, Bali',
    quote:
      'Tamu asing tanya menu dan harga dalam bahasa Inggris, langsung dibalas dengan tepat. Sangat membantu.',
  },
  {
    avatarBg: 'bg-brand-600',
    initials: 'MD',
    name: 'Mbak Dewi',
    role: 'Villa & Homestay · Canggu, Bali',
    quote:
      'Booking villa naik 30% sejak pakai Riplai. Tamu yang WA tengah malam pun terlayani dengan baik.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-white dark:bg-[#161B22] py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-11 text-gray-900 dark:text-[#E6EDF3]"
        style={{ fontSize: '34px' }}
      >
        Kata mereka yang sudah pakai
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[920px] mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white dark:bg-[#161B22] border border-gray-100 dark:border-[#30394A] rounded-[18px] p-6">
            <p className="text-[32px] text-[#A7F3D0] dark:text-[rgba(16,185,129,0.4)] font-extrabold leading-none mb-3">&ldquo;</p>
            <p className="text-sm text-gray-900 dark:text-[#E6EDF3] leading-[1.65] mb-5">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full text-[11px] font-bold text-white flex items-center justify-center flex-shrink-0 ${t.avatarBg}`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-[#E6EDF3]">{t.name}</p>
                <p className="text-xs text-gray-400 dark:text-[#6E7681]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
