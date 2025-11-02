import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-emerald-500 to-teal-600" />
            <span className="font-semibold tracking-wide text-gray-900">KUNESA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#sectors" className="hover:text-gray-900">Menüs</a>
            <a href="#" className="hover:text-gray-900">Hauptseite</a>
            <a href="#contact" className="hover:text-gray-900">Kontakt</a>
            <a href="#" className="hover:text-gray-900">EN</a>
            <a href="#" className="hover:text-gray-900">FR</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label="Menü öffnen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a onClick={() => setOpen(false)} href="#sectors" className="rounded px-2 py-2 hover:bg-gray-100">Menüs</a>
              <a onClick={() => setOpen(false)} href="#" className="rounded px-2 py-2 hover:bg-gray-100">Hauptseite</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded px-2 py-2 hover:bg-gray-100">Kontakt</a>
              <div className="flex items-center gap-4 px-2 py-2">
                <a onClick={() => setOpen(false)} href="#" className="hover:text-gray-900">EN</a>
                <span className="text-gray-400">/</span>
                <a onClick={() => setOpen(false)} href="#" className="hover:text-gray-900">FR</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
