import { RiplaiLogo } from "@/components/logo/RiplaiLogo";

export function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white py-16 px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <RiplaiLogo size={30} variant="white" />
            <p className="text-sm text-gray-500 mt-4 max-w-[200px]">
              Penjawab 24 jam untuk bisnis Indonesia.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Produk</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Fitur</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Harga</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Tentang</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Syarat &amp; Ketentuan</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-600">© 2026 Riplai. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
