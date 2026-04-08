import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

const HomeSection = () => {
  const homeContentRef = useRef(null)
  const homeImgRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
      })

      if (homeContentRef.current) {
        ScrollReveal().reveal(homeContentRef.current, { origin: 'top' })
      }
      if (homeImgRef.current) {
        ScrollReveal().reveal(homeImgRef.current, { origin: 'bottom' })
      }
    }
  }, [])

  return (
    <section className="home" id="home" aria-labelledby="home-heading">
      <div className="home-content" ref={homeContentRef}>
        <h2 className="visually-hidden" id="home-heading">Welcome</h2>
        <h3>Welcome to my portfolio</h3>
        <h1>Maksym Sovyk</h1>
        <h3>I'm a <span>Frontend Developer & AI Automation Engineer</span></h3>
        <p>
          Frontend Developer with 3+ years of experience specializing in React.js and modern JavaScript frameworks, combined with deep expertise in AI automation and autonomous agent development. I build responsive, high-performance web applications and intelligent automation systems that deliver exceptional user experiences. With expertise in creating scalable architectures, optimizing application performance, and engineering AI-driven workflows, I transform complex requirements into elegant, functional solutions.
        </p>

        <div className="social-media" role="list" aria-label="Social media links">
          <a href="https://github.com/HulumyluU" aria-label="Visit my GitHub profile" role="listitem">
            <i className="bx bxl-github" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/MaksymSovyk22" aria-label="Visit my Twitter profile" role="listitem">
            <i className="bx bxl-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/777_sovuk.maksum/" aria-label="Visit my Instagram profile" role="listitem">
            <i className="bx bxl-instagram-alt" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/maksym-sovyk-286762284/" aria-label="Visit my LinkedIn profile" role="listitem">
            <i className="bx bxl-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <a href="/Portfolio/images/Resume.pdf" download className="btn" aria-label="Download my resume as PDF">Download Resume</a>
      </div>
    </section>
  )
}

export default HomeSection

