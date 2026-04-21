import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '回到作品集', path: '/' },
    { name: '首頁', path: '/web01' },
    { name: '房間介紹', path: '/web01/rooms' },
    { name: '周邊景點', path: '/web01/attractions' },
    { name: '交通資訊', path: '/web01/transport' },
    { name: '常見問題', path: '/web01/faq' },
  ];

  return (
    <header className="web01-header">
      <div className="web01-header-inner">
        <div className="web01-logo-wrap">
          <Link to="/web01" className="web01-logo">
            山林居
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="web01-desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`web01-nav-link ${
                location.pathname === link.path ? 'active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/web01/rooms" className="web01-book-btn" style={{ textDecoration: 'none' }}>
            線上訂房
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="web01-mobile-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="web01-hamburger"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="web01-mobile-nav">
          <div className="web01-mobile-nav-items">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`web01-mobile-nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="web01-mobile-book-wrap">
              <Link to="/web01/rooms" className="web01-book-btn w-full" style={{ textDecoration: 'none', display: 'block' }}>
                線上訂房
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
