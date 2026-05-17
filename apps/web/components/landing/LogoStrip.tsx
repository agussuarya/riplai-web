export function LogoStrip() {
  const businesses = [
    "Apotek Sehat",
    "Klinik Sehat Sentosa",
    "Restoran Padang Maju",
    "Villa Bintang Bali",
    "Toko Batik Nusantara",
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-6 px-16">
      <div className="max-w-[900px] mx-auto flex items-center gap-10 flex-wrap justify-center">
        <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
          DIPERCAYA OLEH
        </span>
        {businesses.map((name) => (
          <span key={name} className="text-sm font-bold text-gray-400">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
