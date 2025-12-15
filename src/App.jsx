import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white bg-[var(--bg-dark)] selection:bg-[var(--primary)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
