import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import profileImg from '../assets/vigneswaran.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[var(--primary)] overflow-hidden">
            <img src={profileImg} alt="VR" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold tracking-wide">
            Vigneswaran <span className="text-[var(--primary)]">Ravi</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-lg font-medium text-[var(--text-muted)] hover:text-white transition-colors"
            >
              {link}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--primary)] rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full glass border-t border-[var(--glass-border)] p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
