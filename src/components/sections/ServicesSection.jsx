import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const ServicesSection = () => {
  const servicesRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
      })

      if (servicesRef.current) {
        ScrollReveal().reveal(servicesRef.current, { origin: 'bottom' })
      }
    }
  }, [])

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <h2 className="heading" id="services-heading">My <span>Professional</span> Skills</h2>

      <div className="services-container" role="list" aria-label="Professional skills" ref={servicesRef}>
        <article className="services-box" role="listitem">
          <i className="bx bx-code-alt" aria-hidden="true"></i>
          <h3>Front-End Development</h3>
          <p>
            React.js ecosystem (Hooks, Context API, Redux, Next.js)
            JavaScript (ES6+) & TypeScript
            Vue.js & Angular frameworks
            HTML5, CSS3 (SCSS, Tailwind CSS, Bootstrap)
            Responsive design & UI/UX implementation
            Application performance optimization
            Component architecture & SEO best practices
          </p>
          <Link to="/front-end" target="_blank" className="btn" aria-label="Read more about front-end development skills">Read more</Link>
        </article>

        <article className="services-box" role="listitem">
          <i className='bx bx-bot' aria-hidden="true"></i>
          <h3>AI & Automation Engineering</h3>
          <p>
            Core AI: OpenAI API, Google Gemini, Anthropic Claude, Hugging Face
            Automation: n8n, Zapier, Make, LangChain, LlamaIndex
            AI Agents: AutoGPT, CrewAI, LangGraph
            Prompt engineering, RAG, function calling, fine-tuning
            Multi-step reasoning & tool usage
          </p>
          <Link to="/ai-automation" className="btn" aria-label="Read more about AI automation skills">Read more</Link>
        </article>

        <article className="services-box" role="listitem">
          <i className='bx bxl-dev-to' aria-hidden="true"></i>
          <h3>Backend & DevOps</h3>
          <p>
            Python (FastAPI) & JavaScript (Node.js, Express.js)
            PostgreSQL, MySQL, MongoDB, Vector DBs (Pinecone, Chroma)
            REST APIs, Webhooks, OAuth, Slack/Discord bots
            Cloud: AWS, Google Cloud, Vercel
            Docker, GitHub Actions (CI/CD), Git version control
          </p>
          <Link to="/useful-tools" className="btn" aria-label="Read more about backend skills and tools">Read more</Link>
        </article>
      </div>
    </section>
  )
}

export default ServicesSection

