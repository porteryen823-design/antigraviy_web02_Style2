import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '⬅ 回到作品集', path: '/' },
    { name: '首頁', path: '/web02-style2' },
    { name: '服務項目', path: '/web02-style2/services' },
    { name: '常見問題', path: '/web02-style2/faq' },
    { name: '聯絡我們', path: '/web02-style2/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/web02-style2" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className={`text-xl font-bold font-heading ${scrolled ? 'text-text-dark' : 'text-primary'}`}>
            Porter <span className="text-accent">AI Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-text-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/web02-style2/contact"
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            立即諮詢
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-primary' : 'text-text-dark'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/web02-style2/contact"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                立即諮詢
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
