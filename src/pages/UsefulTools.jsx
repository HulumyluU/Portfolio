import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const UsefulTools = () => {
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
      icon: 'bx bxl-git',
      title: 'Version Control & Collaboration',
      description: 'Proficient in modern development workflows using Git and GitHub for team collaboration.',
      items: [
        'Git branching strategies and workflow management',
        'Pull request reviews and collaborative development',
        'GitHub issue tracking and project management',
        'Merge conflict resolution and code integration',
        'Documentation and code maintenance'
      ]
    },
    {
      icon: 'bx bxl-redux',
      title: 'State Management',
      description: 'Experience with advanced state management solutions for complex applications.',
      items: [
        'Redux for global state management',
        'Redux Toolkit for simplified state logic',
        'Context API for component-level state',
        'Asynchronous state management patterns',
        'Optimized rendering and state updates'
      ]
    },
    {
      icon: 'bx bx-server',
      title: 'Deployment & Hosting',
      description: 'Experience deploying and maintaining web applications across various platforms.',
      items: [
        'Netlify for frontend application hosting',
        'Continuous integration and deployment pipelines',
        'Environment configuration management',
        'Domain setup and SSL configuration',
        'Performance monitoring and optimization'
      ]
    },
    {
      icon: 'bx bxl-figma',
      title: 'Design Tools',
      description: 'Proficient with industry-standard design tools for UI/UX implementation.',
      items: [
        'Figma for collaborative design and prototyping',
        'Photoshop for image editing and optimization',
        'Illustrator for vector graphics and SVG creation',
        'Design system implementation',
        'Asset preparation and optimization for web'
      ]
    },
    {
      icon: 'bx bx-code-block',
      title: 'Development Environments',
      description: 'Experienced with modern development tooling for efficient coding workflows.',
      items: [
        'VS Code with development extensions',
        'ESLint and Prettier for code quality',
        'Browser developer tools for debugging',
        'npm/yarn for package management',
        'Terminal and command line proficiency'
      ]
    },
    {
      icon: 'bx bx-test-tube',
      title: 'Testing & Quality Assurance',
      description: 'Knowledge of testing methodologies to ensure application reliability.',
      items: [
        'Unit testing fundamentals',
        'Manual testing and QA workflows',
        'Cross-browser compatibility testing',
        'Responsive design testing',
        'Performance benchmarking'
      ]
    }
  ]

  return (
    <section className="web-expertise">
        <h1 className="expertise-title">Development <span>Tools</span> & Workflows</h1>
        
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
            <img src="/Portfolio/images/useful-tools.jpg" alt="Development tools illustration" />
          </div>
        </div>
        
        <div className="back-button">
          <Link to="/" className="btn">Back to Portfolio</Link>
        </div>
      </section>
  )
}

export default UsefulTools

