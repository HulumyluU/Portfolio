import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const BackEnd = () => {
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
      icon: 'bx bxl-react',
      title: 'React Ecosystem',
      description: 'Specialized in building scalable applications with React.js and its comprehensive ecosystem.',
      items: [
        'Custom component development and architecture',
        'Advanced hooks implementation (useState, useEffect, useContext, useReducer, useCallback)',
        'State management with Redux and Context API',
        'Performance optimization through code splitting and lazy loading',
        'Single Page Application routing with React Router',
        'UI integration with libraries like shadcn/ui and Recharts'
      ]
    },
    {
      icon: 'bx bxl-nodejs',
      title: 'Node.js & Express',
      description: 'Experienced in server-side JavaScript development for building efficient backend services.',
      items: [
        'RESTful API development with Express.js',
        'JWT-based authentication systems',
        'API integration and middleware implementation',
        'Database connectivity and operations',
        'Bot development using grammY library',
        'Server-side rendering and optimization'
      ]
    },
    {
      icon: 'bx bxl-css3',
      title: 'CSS Frameworks',
      description: 'Proficient with modern CSS frameworks for efficient and responsive UI development.',
      items: [
        'Tailwind CSS for utility-first styling and rapid development',
        'Bootstrap for responsive grid-based layouts',
        'SCSS/SASS for enhanced CSS functionality',
        'Custom component styling and theming',
        'Responsive design implementation across devices'
      ]
    },
    {
      icon: 'bx bx-data',
      title: 'Database Technologies',
      description: 'Knowledge of database systems for data storage, retrieval, and management.',
      items: [
        'SQL databases: MySQL, MS SQL Server',
        'NoSQL databases: MongoDB',
        'Database schema design and optimization',
        'Query construction and execution',
        'Data relationships and integrity'
      ]
    },
    {
      icon: 'bx bxs-component',
      title: 'Build Tools & Development',
      description: 'Experience with modern build tools and development environments.',
      items: [
        'Vite for fast development and optimized production builds',
        'Webpack for module bundling and asset optimization',
        'Package management with npm/yarn',
        'Environment configuration and management',
        'Git-based development workflow'
      ]
    },
    {
      icon: 'bx bx-code-alt',
      title: 'Additional Technologies',
      description: 'Complementary skills that enhance development capabilities.',
      items: [
        'TypeScript for type-safe JavaScript development',
        'RESTful API design principles',
        'MVC architectural pattern implementation',
        'Web hosting and deployment',
        'Performance monitoring and optimization'
      ]
    }
  ]

  return (
    <section className="web-expertise">
        <h1 className="expertise-title">Frameworks & <span>Technologies</span></h1>
        
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
            <img src="/images/bg8.jpg" alt="Programming frameworks illustration" />
          </div>
        </div>
        
        <div className="back-button">
          <Link to="/" className="btn">Back to Portfolio</Link>
        </div>
      </section>
  )
}

export default BackEnd

