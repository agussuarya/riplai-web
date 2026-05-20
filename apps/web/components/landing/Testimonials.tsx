const testimonials = [
  {
    avatarBg: '#10B981',
    initials: 'KW',
    name: 'Kadek Wira',
    role: 'Pemilik Villa · Seminyak, Bali',
    quote: 'Tamu WA malam-malam tanya ketersediaan kamar. Sudah dibalas otomatis sebelum saya sempat lihat HP.',
  },
  {
    avatarBg: '#6366F1',
    initials: 'NM',
    name: 'Nyoman Mega',
    role: 'Warung & Café · Ubud, Bali',
    quote: 'Tamu asing tanya menu dan harga dalam bahasa Inggris, langsung dibalas dengan tepat. Sangat membantu.',
  },
  {
    avatarBg: '#059669',
    initials: 'MD',
    name: 'Mbak Dewi',
    role: 'Villa & Homestay · Canggu, Bali',
    quote: 'Booking villa naik 30% sejak pakai Riplai. Tamu yang WA tengah malam pun terlayani dengan baik.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--bg-surface)] py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center text-[var(--text-1)]"
        style={{ fontSize: '34px', marginBottom: '44px' }}
      >
        Kata mereka yang sudah pakai
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[920px] mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-[var(--bg-surface)] rounded-[18px] p-6"
            style={{ border: '1.5px solid var(--border)' }}
          >
            <p
              className="font-extrabold leading-none mb-3"
              style={{ fontSize: '32px', color: 'var(--brand-sub2)' }}
            >
              &ldquo;
            </p>
            <p className="text-[14px] text-[var(--text-1)] leading-[1.65] mb-5">{t.quote}</p>
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-full text-[11px] font-bold text-white flex items-center justify-center flex-shrink-0"
                style={{ background: t.avatarBg }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[var(--text-1)]">{t.name}</p>
                <p className="text-[12px] text-[var(--text-3)]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
