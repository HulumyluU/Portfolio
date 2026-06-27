import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

const PortfolioSection = () => {
  const portfolioRef = useRef(null)

  const projects = [
    {
      id: 1,
      image: '/images/MovieMate1.png',
      alt: 'MovieMate application screenshot showing movie discovery interface',
      category: 'Front-End',
      description: 'Engineered a high-performance SPA using Vite and React Router for seamless navigation. Implemented Redux for global state management and watchlist caching, utilizing asynchronous data fetching from a third-party REST API.',
      github: 'https://github.com/HulumyluU/MovieMate/tree/main/MovieMate',
      live: 'https://thriving-taffy-5ae9cf.netlify.app/'
    },
    {
      id: 2,
      image: '/images/Verity_img1.png',
      alt: 'Verity browser extension',
      category: 'AI Automation & React.js',
      description: 'Verity, Domain Trust & Fact Checker is a browser extension that helps users detect scams and verify online information in real time. It analyzes website credibility, checks domains, and uses AI to evaluate content accuracy. With unit tests and CI/CD pipeline.',
      github: 'https://github.com/HulumyluU/Verity',
      live: 'https://verityextension.netlify.app/'
    },
    {
      id: 3,
      image: '/images/screenshot_automationTechStore.png',
      alt: 'E-commerce automation workflow screenshot',
      category: 'AI Automation & Full-Stack',
      description: 'An automated e-commerce store system that processes checkouts, generates AI-personalized customer emails, and logs inventory data automatically. Streamlines the entire post-purchase workflow with intelligent automation.',
      github: '/downloads/E-commerce Checkout to AI-Personalized Email and Inventory Logger.json',
      live: 'https://drive.google.com/file/d/1FRd67gxZYlQ26CgmCzV52L7AdW8tL0TK/view?usp=sharing'
    }
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
      })

      if (portfolioRef.current) {
        ScrollReveal().reveal(portfolioRef.current, { origin: 'bottom' })
      }
    }
  }, [])

  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">
      <h2 className="heading" id="portfolio-heading">My <span>Projects</span></h2>

      <div className="portfolio-container" role="list" aria-label="Portfolio projects" ref={portfolioRef}>
        {projects.map((project) => (
          <article key={project.id} className="portfolio-box" role="listitem">
            <img src={project.image} alt={project.alt} />
            <div className="portfolio-layer">
              <h4>{project.category}</h4>
              <p>{project.description}</p>
              <div className="portfolio-btns">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github__link"
                  aria-label={`View ${project.category} source code on GitHub`}
                  download={project.id === 3 ? "E-commerce Checkout to AI-Personalized Email and Inventory Logger.json" : undefined}
                >
                  <i className='bx bxl-github' id="github" aria-hidden="true"></i>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.category} live website`}
                  download={undefined}
                >
                  <i className="bx bx-link-external" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-more-projects">
        <h2>
          Find more project on my github account :
          <span>
            <a href="https://github.com/HulumyluU" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile for more projects"> Find more projects</a>
          </span>
        </h2>
      </div>
    </section>
  )
}

export default PortfolioSection
