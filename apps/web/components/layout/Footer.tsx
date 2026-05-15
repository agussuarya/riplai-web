export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p className="font-bold text-gray-900">riplai</p>
          <nav className="flex gap-6">
            <a href="/privacy">Kebijakan Privasi</a>
            <a href="/terms">Syarat &amp; Ketentuan</a>
          </nav>
        </div>
        <p className="mt-8">&copy; {new Date().getFullYear()} riplai. Hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}
