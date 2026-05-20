export function LogoStrip() {
  const businesses = [
    "Apotek Sehat",
    "Klinik Sehat Sentosa",
    "Restoran Padang Maju",
    "Villa Bintang Bali",
    "Toko Batik Nusantara",
  ];

  return (
    <section className="bg-white dark:bg-[#161B22] border-y border-gray-100 dark:border-[#30394A] py-6 px-16">
      <div className="max-w-[900px] mx-auto flex items-center gap-10 flex-wrap justify-center">
        <span className="text-[12px] font-semibold text-gray-400 dark:text-[#6E7681] uppercase tracking-wide">
          DIPERCAYA OLEH
        </span>
        {businesses.map((name) => (
          <span key={name} className="text-sm font-bold text-gray-400 dark:text-[#6E7681]">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
