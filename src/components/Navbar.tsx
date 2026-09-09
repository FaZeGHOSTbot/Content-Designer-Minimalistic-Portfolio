import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrandClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(247, 245, 242, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-5 md:py-6 flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={handleBrandClick}
          className="font-serif text-base md:text-lg font-medium text-charcoal tracking-wide underline-grow shrink-0"
        >
          Sridha Saha
        </Link>

        <ul className="hidden md:flex items-center gap-10">
  {navLinks.map((link) => (
    <li key={link.label}>
      {link.external ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-light text-charcoal tracking-widest uppercase underline-grow whitespace-nowrap"
          style={{ letterSpacing: '0.15em' }}
          data-hover
        >
          {link.label}
        </a>
      ) : (
        <button
          onClick={() => handleNavClick(link.href)}
          className="font-sans text-sm font-light text-charcoal tracking-widest uppercase underline-grow whitespace-nowrap"
          style={{ letterSpacing: '0.15em' }}
          data-hover
        >
          {link.label}
        </button>
      )}
    </li>
  ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden text-charcoal p-1"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          data-hover
        >
          {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 md:hidden border border-light-grey bg-cream/95 backdrop-blur-md shadow-lg">
            <ul className="p-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 font-sans text-xs font-light text-charcoal tracking-widest uppercase"
                      data-hover
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full py-3 text-left font-sans text-xs font-light text-charcoal tracking-widest uppercase"
                      data-hover
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
