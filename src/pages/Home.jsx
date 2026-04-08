import React from 'react'
import HomeSection from '../components/sections/HomeSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div id="aria-live-region" aria-live="polite" aria-atomic="true" className="visually-hidden"></div>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}

export default Home

