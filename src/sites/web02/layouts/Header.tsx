import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAV_ITEMS as navItems } from '../config/content';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-dark/80 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/web02" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent-cyan rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-primary-dark font-orbitron font-bold text-xl">P</span>
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider text-soft-white group-hover:text-accent-cyan transition-colors">
              PORTER STUDIO <span className="text-sm font-light text-steel-gray">TECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors hover:text-accent-cyan ${
                  location.pathname === item.path ? 'text-accent-cyan' : 'text-soft-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="web02-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-cyan"
                  />
                )}
              </Link>
            ))}
            <Link to="/web02/contact" className="btn-primary py-2 px-6 text-sm">
              立即諮詢
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium p-2 ${
                    location.pathname === item.path ? 'text-accent-cyan' : 'text-soft-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/web02/contact"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                立即諮詢
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
