import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:gap-16 grid-cols-1 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900">KONTAKT</h3>
            <p className="mt-4 text-gray-700">Trierer Straße 44<br />66709 Weiskirchen</p>
            <p className="mt-4 text-gray-700"><span className="font-medium">T</span> +49 6876 706 0<br /><span className="font-medium">F</span> +49 6876 706 19</p>
            <p className="mt-2 text-emerald-700 font-medium"><a href="mailto:email@kunesa.com">email@kunesa.com</a></p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900">So erreichen Sie uns</h3>
            <p className="mt-4 text-gray-700">+49 6876 706 0<br />email@kunesa.com</p>
            <p className="mt-4 text-gray-700">KUNESA GmbH<br />Trierer Straße 44<br />66709 Weiskirchen</p>
            <div className="mt-6 flex items-center gap-4 text-gray-600">
              <a href="#" aria-label="Facebook" className="hover:text-gray-900"><Facebook size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-900"><Youtube size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900">Weitere Informationen</h3>
            <ul className="mt-4 grid gap-2 text-gray-700">
              <li><a className="hover:text-gray-900" href="#">Impressum</a></li>
              <li><a className="hover:text-gray-900" href="#">Datenschutz</a></li>
              <li><a className="hover:text-gray-900" href="#">AGB</a></li>
              <li><a className="hover:text-gray-900" href="#">Weitere Standorte</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>KUNESA © 2025</p>
          <p>Im Saarland zu Hause – in der Welt unterwegs.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
