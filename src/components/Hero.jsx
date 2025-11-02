function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            VIELFALT, QUALITÄT, AUF DEN PUNKT.
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Kunesa ist Ihr Spezialist für maßgefertigte Lösungen rund um Ihre Inneneinrichtung. Seit über 100 Jahren
            überzeugen wir Kunden aus Deutschland, Europa und der ganzen Welt mit durchdachten Raumkonzepten,
            exzellentem Handwerk und innovativen Nischenprodukten.
          </p>
          <p className="mt-4 text-gray-600">
            Mit einem scharfen Blick und über 100 Jahren Erfahrung machen wir aus Ideen Erlebnisse und aus Eventualitäten
            Gewissheiten.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#sectors" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700 transition">
              Entdecken Sie, was möglich ist
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
