import './App.css'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import BackToTop from './components/ui/BackToTop/BackToTop'
import Hero from './components/sections/Hero/Hero'
import FeaturedStrip from './components/sections/FeaturedStrip/FeaturedStrip'
import TeamRoles from './components/sections/TeamRoles/TeamRoles'
import Blueprint from './components/sections/Blueprint/Blueprint'
import ServiceSuite from './components/sections/ServiceSuite/ServiceSuite'
import Audit from './components/sections/Audit/Audit'
import Impact from './components/sections/Impact/Impact'
import Portfolio from './components/sections/Portfolio/Portfolio'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Founder from './components/sections/Founder/Founder'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <FeaturedStrip />
        <TeamRoles />
        <Blueprint />
        <ServiceSuite />
        <Portfolio />
        <Impact />
        <Testimonials />
        <Audit />
        <Founder />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
