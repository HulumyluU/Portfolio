import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FrontEnd from './pages/FrontEnd'
import BackEnd from './pages/BackEnd'
import AIAutomation from './pages/AIAutomation'
import UsefulTools from './pages/UsefulTools'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/front-end" element={<FrontEnd />} />
            <Route path="/back-end" element={<BackEnd />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/useful-tools" element={<UsefulTools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

