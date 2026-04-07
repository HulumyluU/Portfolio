import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Maksym Sovyk | All Rights Reserved.</p>
      </div>

      <div className="footer-icon-top">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop() }} aria-label="Back to top">
          <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer

