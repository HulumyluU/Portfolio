import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      if (!prefersReducedMotion) {
        ScrollReveal({
          reset: true,
          distance: '80px',
          duration: 2000,
          delay: 200,
          ...options,
        }).reveal(elementRef.current, {
          origin: options.origin || 'bottom',
        })
      }
    }
  }, [options])

  return elementRef
}

