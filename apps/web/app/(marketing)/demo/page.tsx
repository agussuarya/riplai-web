import { DemoChat } from '@/components/demo/DemoChat';

export default function DemoPage() {
  return (
    <div className="py-16 px-6">
      <div className="text-center mb-10">
        <h1
          className="font-extrabold tracking-[-0.03em] text-gray-900 mb-4"
          style={{ fontSize: '34px' }}
        >
          Coba admin otomatis langsung
        </h1>
        <p className="text-sm text-gray-500 max-w-[480px] mx-auto leading-[1.65]">
          Ketik pertanyaan seperti pelanggan sungguhan. Admin otomatis Riplai akan menjawab dari
          data bisnis Villa Ubud Jiwa.
        </p>
      </div>

      <div className="max-w-[440px] mx-auto mb-6">
        <DemoChat maxHeight="420px" />
      </div>

      <p className="text-xs text-gray-400 text-center mb-6">
        Ini demo menggunakan data contoh. Bisnis kamu bisa mengajarkan data yang berbeda.
      </p>

      <div className="text-center">
        <a
          href="/signup"
          className="inline-block text-[15px] font-bold text-white bg-brand-500 hover:bg-brand-600 px-7 py-3 rounded-full transition-colors"
        >
          Coba dengan data bisnis kamu →
        </a>
      </div>
    </div>
  );
}
