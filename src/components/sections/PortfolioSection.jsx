import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

const PortfolioSection = () => {
  const portfolioRef = useRef(null)

  const projects = [
    {
      id: 1,
      image: '/Portfolio/images/MovieMate1.png',
      alt: 'MovieMate application screenshot showing movie discovery interface',
      category: 'Front-End',
      description: 'This web application for movie discovery Tools: React.js, Vite, React Router, API(TMDB), Netlify, React Context API',
      github: 'https://github.com/HulumyluU/MovieMate/tree/main/MovieMate',
      live: 'https://thriving-taffy-5ae9cf.netlify.app/'
    },
    {
      id: 2,
      image: '/Portfolio/images/Verity_img1.png',
      alt: 'Verity browser extension',
      category: 'AI Automation & React.js',
      description: 'Verity – Domain Trust & Fact Checker is a browser extension that helps users detect scams and verify online information in real time. It analyzes website credibility, checks domains, and uses AI to evaluate content accuracy. With unit tests and CI/CD pipeline.',
      github: 'https://github.com/HulumyluU/Verity',
      live: 'https://velvety-pudding-5c55ea.netlify.app/'
    },
    {
      id: 3,
      image: '/Portfolio/images/skyscope.png',
      alt: 'SkyScope weather application screenshot showing weather data',
      category: 'Front-End',
      description: 'A weather app built with React.js, Vite, Tailwind CSS, and shadcn/ui. It uses Router, Query, OpenWeather API, and Recharts for weather data and graphs.',
      github: 'https://github.com/HulumyluU/SkyScope',
      live: 'https://tangerine-sundae-48e05b.netlify.app/'
    },
     {
      id: 4,
      image: '/Portfolio/images/n8n_s1.png',
      alt: 'n8n workflow screenshot',
      category: 'AI Automation',
      description: 'An automated lead response system that captures form submissions, generates personalized AI replies using OpenAI, sends them instantly via Gmail, and logs all lead data to Google Sheets — with zero manual effort.',
      github: '/Portfolio/downloads/Lead Consultation Automation.json',
      live: '/Portfolio/downloads/video_n8n_s1.mp4'
    },
    {
      id: 5,
      image: '/Portfolio/images/n8n_s2.png',
      alt: 'n8n workflow screenshot',
      category: 'AI Automation',
      description: 'A fully automated job application system that replaces hours of manual work with one click. It scrapes job boards, tailors your resume to each listing using AI, locates hiring manager contacts, and generates ready-to-send application emails — all without human input.',
      github: '/Portfolio/images/AI Automated Resume System.json',
      live: '/'
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
                  download={project.id === 4 ? "Lead Consultation Automation.json" : project.id === 5 ? "AI Automated Resume System.json" : undefined}
                >
                  <i className='bx bxl-github' id="github" aria-hidden="true"></i>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.category} live website`}
                  download={project.id === 4 ? "video_n8n_s1.mp4" : undefined}
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

