import './App.css'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import FeaturedStrip from './components/sections/FeaturedStrip/FeaturedStrip'
import Blueprint from './components/sections/Blueprint/Blueprint'
import ServiceSuite from './components/sections/ServiceSuite/ServiceSuite'
import Audit from './components/sections/Audit/Audit'
import Impact from './components/sections/Impact/Impact'
import Portfolio from './components/sections/Portfolio/Portfolio'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Founder from './components/sections/Founder/Founder'
import Closing from './components/sections/Closing/Closing'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <FeaturedStrip />
        <Blueprint />
        <ServiceSuite />
        <Audit />
        <Impact />
        <Portfolio />
        <Testimonials />
        <Founder />
        <Closing />
      </main>

      <Footer />
    </div>
  )
}

export default App
