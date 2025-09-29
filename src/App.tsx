import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const { activeSection } = useScrollAnimation();

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Alex Developer. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-500 mt-2">
              Made with 💚 and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;