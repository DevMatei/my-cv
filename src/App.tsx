import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;