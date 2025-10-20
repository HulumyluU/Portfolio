/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add ARIA attributes for accessibility
if (menuIcon) {
    menuIcon.setAttribute('role', 'button');
    menuIcon.setAttribute('aria-label', 'Toggle navigation menu');
    menuIcon.setAttribute('aria-expanded', 'false');
    menuIcon.setAttribute('tabindex', '0');
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
    // Update ARIA expanded state
    const isExpanded = navbar.classList.contains('active');
    menuIcon.setAttribute('aria-expanded', isExpanded);
    
    // Announce to screen readers
    announceToScreenReader(isExpanded ? 'Navigation menu opened' : 'Navigation menu closed');
};

// Keyboard support for menu toggle
if (menuIcon) {
    menuIcon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuIcon.click();
        }
    });
}

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.focus();
    }
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
                
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('header nav a[href*=' + id + ']').classList.remove('active');
        }
    });
    
    //*sticky navbar*//
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    //*remove toggle icon and navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    menuIcon.setAttribute('aria-expanded', 'false');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
ScrollReveal().reveal('.portfolio-more-projects h2', { origin: 'left' });

/*==================== text read more (about container) ====================*/
const aboutMeBtn = document.getElementById('btn__read-more');
if (aboutMeBtn) {
    aboutMeBtn.addEventListener('click', function () {
        ScrollReveal().reveal('.about__hidden', { origin: 'left' });
        document.querySelector('.about__text').classList.toggle('about__hidden');
        
        if (document.querySelector('.about__text').classList.contains('about__hidden')) {
            aboutMeBtn.textContent = 'Read more';
            aboutMeBtn.setAttribute('aria-expanded', 'false');
        } else {
            aboutMeBtn.textContent = 'Read less';
            aboutMeBtn.setAttribute('aria-expanded', 'true');
        }
    });
}

/*========================================
  ACCESSIBILITY ENHANCEMENTS
========================================*/

/*==================== Screen Reader Announcements ====================*/
function announceToScreenReader(message) {
    let liveRegion = document.getElementById('aria-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.className = 'visually-hidden';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    setTimeout(() => {
        liveRegion.textContent = '';
    }, 1000);
}

/*==================== Focus Trap for Mobile Menu ====================*/
const navLinksArray = Array.from(navLinks);
if (navLinksArray.length > 0) {
    const firstNavLink = navLinksArray[0];
    const lastNavLink = navLinksArray[navLinksArray.length - 1];
    
    document.addEventListener('keydown', (e) => {
        if (!navbar.classList.contains('active')) return;
        
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstNavLink) {
                    e.preventDefault();
                    menuIcon.focus();
                }
            } else {
                if (document.activeElement === lastNavLink) {
                    e.preventDefault();
                    menuIcon.focus();
                }
            }
        }
    });
}

/*==================== Keyboard Navigation for Portfolio ====================*/
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
portfolioBoxes.forEach((box, index) => {
    box.setAttribute('tabindex', '0');
    
    box.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const layer = box.querySelector('.portfolio-layer');
            if (layer) {
                const isVisible = layer.style.transform === 'translateY(0%)';
                layer.style.transform = isVisible ? 'translateY(100%)' : 'translateY(0%)';
                
                if (!isVisible) {
                    const firstLink = layer.querySelector('a');
                    if (firstLink) {
                        setTimeout(() => firstLink.focus(), 100);
                    }
                }
            }
        }
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextBox = portfolioBoxes[index + 1];
            if (nextBox) nextBox.focus();
        }
        
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevBox = portfolioBoxes[index - 1];
            if (prevBox) prevBox.focus();
        }
    });
});

/*==================== Reduced Motion Preference ====================*/
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function handleReducedMotion() {
    if (prefersReducedMotion.matches) {
        ScrollReveal().destroy();
        document.documentElement.style.setProperty('scroll-behavior', 'auto');
        
        const animatedElements = document.querySelectorAll('.home-img img');
        animatedElements.forEach(element => {
            element.style.animation = 'none';
        });
    }
}

handleReducedMotion();
prefersReducedMotion.addEventListener('change', handleReducedMotion);

/*==================== Skip Link Functionality ====================*/
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/*==================== Smooth Scroll with Focus Management ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
                block: 'start'
            });
            
            const focusTarget = targetElement.querySelector('h1, h2, h3, [tabindex]') || targetElement;
            
            if (!focusTarget.hasAttribute('tabindex')) {
                focusTarget.setAttribute('tabindex', '-1');
            }
            
            focusTarget.focus();
            
            const sectionName = targetId.replace('#', '');
            announceToScreenReader(`Navigated to ${sectionName} section`);
        }
    });
});

/*==================== Form Validation with Accessibility ====================*/
const contactForm = document.querySelector('.contact form');
const formInputs = contactForm ? contactForm.querySelectorAll('input, textarea') : [];

function validateField(field) {
    const errorId = `${field.id}-error`;
    let errorElement = document.getElementById(errorId);
    
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.id = errorId;
        errorElement.className = 'error-message';
        errorElement.setAttribute('role', 'alert');
        field.parentNode.appendChild(errorElement);
    }
    
    if (!field.validity.valid && field.value.trim() !== '') {
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorId);
        errorElement.textContent = getErrorMessage(field);
        return false;
    } else {
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
        errorElement.textContent = '';
        return true;
    }
}

function getErrorMessage(field) {
    if (field.validity.valueMissing) {
        return `${field.placeholder} is required`;
    }
    if (field.validity.typeMismatch) {
        if (field.type === 'email') {
            return 'Please enter a valid email address';
        }
    }
    if (field.validity.tooShort) {
        return `${field.placeholder} is too short`;
    }
    return 'Please check this field';
}

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            validateField(input);
        }
    });
    
    input.addEventListener('input', () => {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement && errorElement.textContent !== '') {
            validateField(input);
        }
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        let isValid = true;
        
        formInputs.forEach(input => {
            if (input.hasAttribute('required')) {
                if (!validateField(input)) {
                    isValid = false;
                }
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            announceToScreenReader('Please correct the errors in the form');
            
            const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return false;
        }
    });
}

/*==================== High Contrast Mode Detection ====================*/
const highContrastQuery = window.matchMedia('(prefers-contrast: high)');

function handleHighContrast() {
    if (highContrastQuery.matches) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
}

handleHighContrast();
highContrastQuery.addEventListener('change', handleHighContrast);

/*==================== Initialize Accessibility Features ====================*/
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        if (!section.hasAttribute('role')) {
            section.setAttribute('role', 'region');
        }
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('alt')) {
            console.warn('Image missing alt text:', img.src);
            img.setAttribute('alt', '');
        }
    });
    
    announceToScreenReader('Portfolio website loaded successfully');
});

/*==================== Print Support ====================*/
window.addEventListener('beforeprint', () => {
    const hiddenText = document.querySelector('.about__hidden');
    if (hiddenText) {
        hiddenText.style.display = 'block';
    }
});

window.addEventListener('afterprint', () => {
    const hiddenText = document.querySelector('.about__hidden');
    const aboutBtn = document.getElementById('btn__read-more');
    if (hiddenText && aboutBtn && aboutBtn.textContent === 'Read more') {
        hiddenText.style.display = 'none';
    }
});

/*==================== Error Handling ====================*/
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.error('Failed to load image:', e.target.src);
        e.target.alt = 'Image failed to load';
    }
}, true);

console.log('%c Portfolio Website Loaded ', 'background: #5ab2ff; color: #1f242d; font-size: 16px; padding: 10px;');
console.log('Accessibility features: ✓ Active');
console.log('Responsive design: ✓ Active');
console.log('Keyboard navigation: ✓ Enabled');