import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectorsGrid from './components/SectorsGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectorsGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
