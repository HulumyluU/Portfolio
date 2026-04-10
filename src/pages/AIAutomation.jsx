import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const AIAutomation = () => {
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
      icon: 'bx bx-bot',
      title: 'AI / LLM Integration',
      description: 'Core expertise in connecting AI models into real-world applications and systems.',
      items: [
        'OpenAI API integration (GPT-3.5, GPT-4, GPT-4 Turbo)',
        'Google Gemini API implementation',
        'Anthropic Claude API integration',
        'Hugging Face models and transformers',
        'Prompt engineering (VERY important - crafting effective prompts)',
        'Handling AI responses, token management, and error handling',
        'Response parsing and data extraction from AI outputs',
        'Cost optimization and rate limiting for AI APIs'
      ]
    },
    {
      icon: 'bx bx-git-branch',
      title: 'Automation Tools & Workflows',
      description: 'Building intelligent workflows that connect multiple services and automate complex processes.',
      items: [
        'Zapier workflow automation and integration',
        'Make (Integromat) advanced workflow building',
        'n8n self-hosted automation platform',
        'Custom workflow design: "When user signs up → send AI-generated email"',
        'Data processing pipelines: "Scrape data → summarize with AI → store in DB"',
        'Multi-step automation flows with conditional logic',
        'Error handling and retry mechanisms in workflows',
        'Integration monitoring and maintenance'
      ]
    },
    {
      icon: 'bx bx-server',
      title: 'APIs & Backend Systems',
      description: 'Building robust backend systems that power automation and AI integrations.',
      items: [
        'RESTful API design and implementation',
        'Webhook development and management',
        'Express.js backend development',
        'Authentication systems (JWT tokens, OAuth basics)',
        'API rate limiting and security implementation',
        'Microservices architecture for automation',
        'Real-time data processing with WebSockets',
        'Cloud function deployment (AWS Lambda, Google Cloud Functions)'
      ]
    },
    {
      icon: 'bx bx-data',
      title: 'Data Handling',
      description: 'Efficient data processing and management for AI and automation systems.',
      items: [
        'JSON data manipulation and transformation (VERY important)',
        'MongoDB for NoSQL data storage and retrieval',
        'SQL databases (PostgreSQL, MySQL) for structured data',
        'Data cleaning and preprocessing before AI processing',
        'Vector databases for AI applications (Pinecone, Chroma)',
        'Data validation and error handling',
        'ETL processes for automation workflows',
        'Data migration and synchronization between systems'
      ]
    },
    {
      icon: 'bx bx-brain',
      title: 'System Thinking',
      description: 'Designing comprehensive automation flows with proper architecture and optimization.',
      items: [
        'Designing complete flows: Input → Process → AI → Output → Action',
        'Error handling strategies and retry mechanisms',
        'System optimization (cost, speed, reliability)',
        'Scalability planning for automation systems',
        'Fault tolerance and redundancy planning',
        'Performance monitoring and bottleneck identification',
        'Resource allocation and load balancing',
        'System documentation and maintenance planning'
      ]
    },
    {
      icon: 'bx bx-bug',
      title: 'Testing & Debugging',
      description: 'Comprehensive testing and debugging strategies for AI and automation systems.',
      items: [
        'Debugging API responses and integration issues',
        'Handling edge cases and exception scenarios',
        'Comprehensive logging systems for automation monitoring',
        'Unit testing for automation workflows',
        'Integration testing between multiple services',
        'Performance testing and optimization',
        'Error tracking and alerting systems',
        'Automated testing for CI/CD pipelines'
      ]
    },
    {
      icon: 'bx bx-code-block',
      title: 'AI Tools & Frameworks',
      description: 'Daily tools and frameworks used in AI automation engineering.',
      items: [
        'LangChain for LLM application development',
        'LlamaIndex for data indexing and retrieval',
        'Vector databases (Pinecone, Chroma, Weaviate)',
        'AutoGPT and autonomous AI agents',
        'CrewAI for multi-agent systems',
        'LangGraph for complex AI workflows',
        'Custom AI agent development',
        'RAG (Retrieval-Augmented Generation) implementation'
      ]
    }
  ]

  return (
    <section className="web-expertise">
        <h1 className="expertise-title">AI & Automation <span>Engineering</span></h1>
        
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
            <img src="/Portfolio/images/bg8.jpg" alt="AI automation engineering illustration" />
          </div>
        </div>
        
        <div className="back-button">
          <Link to="/" className="btn">Back to Portfolio</Link>
        </div>
      </section>
  )
}

export default AIAutomation
