const items = [
  'Apotheke',
  'Praxen',
  'Labore und Kliniken',
  'Wellness & Medical Spa',
  'Hotels',
  'Gastronomie',
  'Shop & Ladenbau',
  'Büros',
  'zu Hause',
  'MediGliss Warenrutsche',
  'Schubladensystem + Orgazubehör',
  'Imkereibedarf',
  'Aktuelles',
  'Karriere',
  'KONTAKT',
]

function SectorsGrid() {
  return (
    <section id="sectors" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Branchen & Lösungen</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Unsere vielfältigen Produktionstechniken ermöglichen eine gezielte Entwicklung und Produktion von
              Individual- und Systemlösungen aus den unterschiedlichsten Materialien.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((label) => (
            <a
              key={label}
              href="#contact"
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-emerald-50/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-28 items-center">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition">
                  {label}
                </h3>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-emerald-700">
                <span className="font-medium">Mehr erfahren</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectorsGrid
