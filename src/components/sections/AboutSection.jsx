import React, { useState, useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

const AboutSection = () => {
  const [showMore, setShowMore] = useState(true)
  const aboutContentRef = useRef(null)
  const aboutImgRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
      })

      if (aboutContentRef.current) {
        ScrollReveal().reveal(aboutContentRef.current, { origin: 'left' })
      }
      if (aboutImgRef.current) {
        ScrollReveal().reveal(aboutImgRef.current, { origin: 'right' })
      }
    }
  }, [])

  const toggleReadMore = () => {
    setShowMore(!showMore)
    if (!showMore) {
      ScrollReveal().reveal('.about__text', { origin: 'left' })
    }
  }

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-img" ref={aboutImgRef}>
        <img src="/Portfolio/images/lineFirst.png" alt="Professional photo of Maksym Sovyk" />
      </div>

      <div className="about-content" ref={aboutContentRef}>
        <h2 className="heading" id="about-heading">About <span>Me</span></h2>
        <h3>Frontend Developer & AI Automation Engineer</h3>
        <p>
          Graduate of Advanced Diploma in IT Innovation & Design at Conestoga College (GPA: 3.80) with dual expertise in frontend development and AI automation. I specialize in React.js ecosystem for building responsive web applications, combined with hands-on experience developing autonomous AI agents and workflow automation systems using OpenAI API, n8n, and Node.js.
        </p>
        <p className={`about__text ${showMore ? '' : 'about__hidden'}`} id="additional-about-text">
          Professional experience includes delivering 10+ automation and AI agent projects for freelance clients, reducing manual workflow time by 60%, and building scalable frontend applications with modern JavaScript frameworks. Winner of Conestoga College Hackathon 2025. Strong foundation in RESTful API architecture, frontend security, SEO optimization, and database management with MySQL, PostgreSQL, and MongoDB. Excellent communication skills developed through client-facing freelance work and hospitality experience.
        </p>
        <button
          className="btn"
          id="btn__read-more"
          onClick={toggleReadMore}
          aria-expanded={showMore}
          aria-controls="additional-about-text"
        >
          {showMore ? 'Read less' : 'Read more'}
        </button>
      </div>
    </section>
  )
}

export default AboutSection

