import { RiplaiLogo } from "@/components/logo/RiplaiLogo";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function DemoChat() {
  return (
    <div className="border border-gray-200 rounded-[22px] overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-brand-500 px-4 py-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <RiplaiLogo size={18} variant="white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Villa Ubud Jiwa</p>
          <p className="text-[11px] text-[#A7F3D0]">Penjawab 24 jam aktif</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="bg-[#F0F4F0] p-3.5 flex flex-col gap-2.5">
        <p className="text-[10px] text-gray-400 text-center mb-2">Sabtu, 23:05</p>

        {/* Customer bubble 1 */}
        <div className="flex justify-end">
          <div>
            <div className="bg-[#E0E7FF] rounded-[8px_8px_2px_8px] p-2 max-w-[220px]">
              <p className="text-sm text-gray-800">Halo, apakah ada kamar tersedia untuk weekend ini?</p>
            </div>
            <p className="text-[10px] text-gray-400 text-right mt-1">23:05</p>
          </div>
        </div>

        {/* Bot bubble 1 */}
        <div className="flex justify-start">
          <div>
            <div className="bg-white rounded-[8px_8px_8px_2px] p-2 max-w-[240px]">
              <p className="text-sm text-gray-800">
                Halo! Iya, masih ada kamar tersedia untuk weekend ini. 🏡 Mau tipe Deluxe atau Suite? Harga mulai dari Rp 850.000/malam.
              </p>
            </div>
            <p className="text-[10px] text-accent-500 font-semibold text-right mt-1">Admin Otomatis</p>
          </div>
        </div>

        {/* Customer bubble 2 */}
        <div className="flex justify-end">
          <div>
            <div className="bg-[#E0E7FF] rounded-[8px_8px_2px_8px] p-2 max-w-[220px]">
              <p className="text-sm text-gray-800">Tipe Deluxe untuk 2 orang, berapa totalnya?</p>
            </div>
            <p className="text-[10px] text-gray-400 text-right mt-1">23:06</p>
          </div>
        </div>

        {/* Bot bubble 2 */}
        <div className="flex justify-start">
          <div>
            <div className="bg-white rounded-[8px_8px_8px_2px] p-2 max-w-[240px]">
              <p className="text-sm text-gray-800">
                Deluxe untuk 2 orang Rp 850.000/malam sudah termasuk sarapan. Mau saya bantu reservasi sekarang?
              </p>
            </div>
            <p className="text-[10px] text-accent-500 font-semibold text-right mt-1">Admin Otomatis</p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-3 py-2.5 flex gap-2">
        <input
          type="text"
          placeholder="Tanya apa saja..."
          className="flex-1 text-sm text-gray-400 bg-transparent outline-none pointer-events-none opacity-60"
          readOnly
        />
        <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center opacity-60 pointer-events-none">
          <PaperAirplaneIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}
