import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="portofolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;