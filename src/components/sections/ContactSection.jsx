import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from 'scrollreveal'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const contactFormRef = useRef(null)

  useEffect(() => {
    emailjs.init({
      publicKey: "3DQN_LJXBlFBwnwOW",
    })
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
      })

      if (contactFormRef.current) {
        ScrollReveal().reveal(contactFormRef.current, { origin: 'bottom' })
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateField = (name, value) => {
    let error = ''
    
    if (name === 'name' && !value.trim()) {
      error = 'Full Name is required'
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email Address is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address'
      }
    } else if (name === 'subject' && !value.trim()) {
      error = 'Email Subject is required'
    } else if (name === 'message' && !value.trim()) {
      error = 'Your Message is required'
    }
    
    return error
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'number') { // number is optional
        const error = validateField(key, formData[key])
        if (error) {
          newErrors[key] = error
        }
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      announceToScreenReader('Please correct the errors in the form')
      const firstInvalid = e.target.querySelector('[aria-invalid="true"]')
      if (firstInvalid) {
        firstInvalid.focus()
      }
      return
    }

    try {
      const params = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send("service_b5qnon9", "template_6nemszr", params)
      
      announceToScreenReader('Message sent successfully!')
      alert('Message sent successfully!')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      })
      setErrors({})
    } catch (error) {
      console.error('FAILED...', error)
      announceToScreenReader('Failed to send message. Please try again.')
      alert('Failed to send message. Please try again.')
    }
  }

  const announceToScreenReader = (message) => {
    const liveRegion = document.getElementById('aria-live-region')
    if (liveRegion) {
      liveRegion.textContent = message
      setTimeout(() => {
        liveRegion.textContent = ''
      }, 1000)
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <h2 className="heading" id="contact-heading">Contact <span>Me!</span></h2>

      <form
        ref={contactFormRef}
        onSubmit={handleSubmit}
        aria-labelledby="contact-heading"
        noValidate
      >
        <div className="input-box">
          <label htmlFor="name" className="visually-hidden">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className="error-message" role="alert">
              {errors.name}
            </span>
          )}
          
          <label htmlFor="email" className="visually-hidden">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="error-message" role="alert">
              {errors.email}
            </span>
          )}
        </div>
        
        <div className="input-box">
          <label htmlFor="number" className="visually-hidden">Mobile Number</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Mobile Number"
            value={formData.number}
            onChange={handleChange}
          />
          
          <label htmlFor="subject" className="visually-hidden">Email Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="error-message" role="alert">
              {errors.subject}
            </span>
          )}
        </div>
        
        <label htmlFor="message" className="visually-hidden">Your Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
        
        <button type="submit" className="btn">Send Message</button>
      </form>

      <div className="social-media contact__social-media" role="list" aria-label="Contact social media links">
        <a href="https://github.com/HulumyluU" aria-label="Contact via GitHub" role="listitem">
          <i className="bx bxl-github" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/MaksymSovyk22" aria-label="Contact via Twitter" role="listitem">
          <i className="bx bxl-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/maksym-sovyk-286762284/" aria-label="Contact via LinkedIn" role="listitem">
          <i className="bx bxl-linkedin" aria-hidden="true"></i>
        </a>
        <a href="mailto:ms3713287@gmail.com" aria-label="Contact via email" role="listitem">
          <i className='bx bxl-gmail' aria-hidden="true"></i>
        </a>
      </div>
    </section>
  )
}

export default ContactSection

