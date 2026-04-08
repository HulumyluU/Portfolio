import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollActive } from '../hooks/useScrollActive'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const activeSection = useScrollActive()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleMenu()
    }
  }

  const handleEscape = (e) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const isActive = (path) => {
    if (location.pathname !== '/') return false
    const section = path.replace('#', '')
    return activeSection === section
  }

  return (
    <header className="header" role="banner">
      <Link to="/" className="logo" aria-label="Portfolio home">
        <img src="/Portfolio/images/logo_main1.png" alt="Maksym Sovyk logo" />
        Portfolio
      </Link>

      <button
        className="menu-toggle"
        id="menu-icon"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'} aria-hidden="true"></i>
      </button>

      <nav
        className={`navbar ${menuOpen ? 'active' : ''}`}
        id="main-navigation"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link to="/" className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''}>
          Home
        </Link>
        <a
          href="#about"
          className={isActive('#about') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            if (location.pathname === '/') {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.location.href = '/#about'
            }
          }}
        >
          About
        </a>
        <a
          href="#services"
          className={isActive('#services') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            if (location.pathname === '/') {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.location.href = '/#services'
            }
          }}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={isActive('#portfolio') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            if (location.pathname === '/') {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.location.href = '/#portfolio'
            }
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={isActive('#contact') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            if (location.pathname === '/') {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.location.href = '/#contact'
            }
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header

