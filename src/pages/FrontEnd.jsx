import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const FrontEnd = () => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      ScrollReveal({
        reset: true,
        distance: '200px',
        duration: 3000,
      })

      if (wrapperRef.current) {
        ScrollReveal().reveal(wrapperRef.current, { origin: 'left' })
      }
    }
  }, [])

  const skills = [
    {
      icon: 'bx bxl-html5',
      title: 'HTML5',
      description: 'Expert in semantic markup and accessibility standards, creating structured and SEO-friendly web pages.',
      items: [
        'BEM methodology for maintainable code',
        'Accessible web design (ARIA, semantic elements)',
        'Modern HTML5 features and APIs',
        'Cross-browser compatibility'
      ]
    },
    {
      icon: 'bx bxl-css3',
      title: 'CSS & Frameworks',
      description: 'Advanced styling and layout implementation with focus on responsive design and performance.',
      items: [
        'CSS3 animations and transitions',
        'Flexbox and Grid layouts',
        'Preprocessors: SCSS/SASS',
        'Frameworks: Tailwind CSS, Bootstrap',
        'Mobile-first responsive design'
      ]
    },
    {
      icon: 'bx bxl-javascript',
      title: 'JavaScript',
      description: 'Strong foundation in modern JavaScript with expertise in ES6+ features and asynchronous programming.',
      items: [
        'Advanced DOM manipulation',
        'Asynchronous JS (Promises, async/await)',
        'Event handling and propagation',
        'Object-oriented programming concepts',
        'Performance optimization techniques'
      ]
    },
    {
      icon: 'bx bxl-react',
      title: 'React.js & Ecosystem',
      description: 'Specialized in building scalable applications with React.js and its ecosystem.',
      items: [
        'Functional components and Hooks',
        'State management (Redux, Context API)',
        'React Router for client-side navigation',
        'Performance optimization and code splitting',
        'Integration with third-party APIs'
      ]
    },
    {
      icon: 'bx bxl-typescript',
      title: 'TypeScript',
      description: 'Implementing type safety in applications to improve maintainability and reduce runtime errors.',
      items: [
        'Type definitions and interfaces',
        'Generics and utility types',
        'Integration with React applications',
        'Code organization and structure'
      ]
    },
    {
      icon: 'bx bxs-network-chart',
      title: 'Development Workflow',
      description: 'Experienced with modern development tools and workflows for efficient project delivery.',
      items: [
        'Version control with Git and GitHub',
        'Build tools: Vite, Webpack',
        'Testing methodologies',
        'CI/CD pipelines',
        'Code review and collaboration'
      ]
    }
  ]

  return (
    <section className="web-expertise">
        <h1 className="expertise-title">Web Development <span>Expertise</span></h1>
        
        <div className="expertise-container" ref={wrapperRef}>
          <div className="expertise-content">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <ul>
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="expertise-image">
            <img src="/images/bg6.jpg" alt="Web development illustration" />
          </div>
        </div>
        
        <div className="back-button">
          <Link to="/" className="btn">Back to Portfolio</Link>
        </div>
      </section>
  )
}

export default FrontEnd

