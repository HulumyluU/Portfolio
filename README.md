# Portfolio - React.js Version

This is a React.js rebuild of the original HTML/CSS/JavaScript portfolio website. All functionality has been preserved and converted to React components.

## Features

- ✅ Responsive design with mobile menu
- ✅ Scroll reveal animations
- ✅ Active navigation link highlighting
- ✅ Sticky header on scroll
- ✅ Contact form with EmailJS integration
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Multiple pages with React Router
- ✅ All original functionality preserved

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer component
│   └── sections/       # Page sections
│       ├── HomeSection.jsx
│       ├── AboutSection.jsx
│       ├── ServicesSection.jsx
│       ├── PortfolioSection.jsx
│       └── ContactSection.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── FrontEnd.jsx
│   ├── BackEnd.jsx
│   └── UsefulTools.jsx
├── hooks/              # Custom React hooks
│   ├── useScrollActive.js
│   └── useScrollReveal.js
├── App.jsx             # Main app component with routing
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Technologies Used

- React 18
- React Router DOM
- Vite (build tool)
- EmailJS (contact form)
- ScrollReveal (animations)
- Boxicons (icons)

## Notes

- All images should be placed in the `public/images/` folder
- The CV.pdf file should be in `public/images/`
- EmailJS configuration is already set up in ContactSection.jsx
- All original CSS styles have been preserved in `src/index.css`

## Migration from Original

The original HTML files have been converted to React components:
- `index.html` → `src/pages/Home.jsx` + section components
- `front-end.html` → `src/pages/FrontEnd.jsx`
- `back-end.html` → `src/pages/BackEnd.jsx`
- `useful-tools.html` → `src/pages/UsefulTools.jsx`

All JavaScript functionality has been converted to React hooks and component state management.

