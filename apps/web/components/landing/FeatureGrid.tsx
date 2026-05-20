const features = [
  {
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: '#10B981',
    title: 'Penjawab 24 Jam',
    desc: 'Balas pesan pelanggan otomatis kapan saja. Bahkan saat kamu tidur.',
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />,
  },
  {
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: '#10B981',
    title: 'Data Bisnis Pintar',
    desc: 'Ajarkan bisnis kamu sekali, admin otomatis langsung tahu segalanya.',
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
  },
  {
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: '#10B981',
    title: 'Analitik Percakapan',
    desc: 'Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk.',
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
  },
  {
    iconBg: 'bg-[var(--accent-sub)]',
    iconColor: '#6366F1',
    title: 'Notifikasi ke Kamu',
    desc: 'Admin otomatis tidak bisa jawab? Kamu dapat notifikasi langsung.',
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />,
  },
  {
    iconBg: 'bg-[var(--brand-sub)]',
    iconColor: '#10B981',
    title: 'Tanpa Aplikasi Baru',
    desc: 'Pelanggan tetap chat lewat WhatsApp biasa. Kamu pantau dari dashboard Riplai.',
    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />,
  },
  {
    iconBg: 'bg-[var(--accent-sub)]',
    iconColor: '#6366F1',
    title: 'Mudah Dikonfigurasi',
    desc: 'Atur jam operasional, nama penjawab, dan balasan khusus dalam hitungan menit.',
    svg: <><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-[var(--bg-base)] py-16 px-12">
      <h2
        className="font-extrabold tracking-[-0.03em] text-center mb-3 text-[var(--text-1)]"
        style={{ fontSize: '34px' }}
      >
        Semua yang bisnis kamu butuhkan
      </h2>
      <p className="text-[15px] text-[var(--text-2)] text-center mb-11">
        Dirancang khusus untuk bisnis Indonesia yang tidak punya waktu banyak.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[920px] mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className={`bg-[var(--bg-surface)] rounded-[18px] p-5 transition-shadow transition-colors group hover:shadow-[0_4px_20px_rgba(0,0,0,.08)]`}
            style={{ border: '1.5px solid var(--border)' }}
          >
            <div
              className={`w-11 h-11 rounded-[12px] flex items-center justify-center mb-3.5 ${f.iconBg}`}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={f.iconColor} strokeWidth="2">
                {f.svg}
              </svg>
            </div>
            <h3 className="font-bold text-[var(--text-1)] mb-2" style={{ fontSize: '15px' }}>{f.title}</h3>
            <p className="text-[var(--text-2)] leading-[1.6]" style={{ fontSize: '13.5px' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
