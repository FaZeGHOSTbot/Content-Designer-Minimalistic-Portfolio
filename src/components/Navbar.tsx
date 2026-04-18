import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

  const handleNavClick = (href: string) => {
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
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleBrandClick}
          className="font-serif text-lg font-medium text-charcoal tracking-wide underline-grow"
        >
          Sridha Saha
        </Link>

        <ul className="flex items-center gap-8 md:gap-10">
  {navLinks.map((link) => (
    <li key={link.label}>
      {link.external ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-light text-charcoal tracking-widest uppercase underline-grow"
          style={{ letterSpacing: '0.15em' }}
          data-hover
        >
          {link.label}
        </a>
      ) : (
        <button
          onClick={() => handleNavClick(link.href)}
          className="font-sans text-sm font-light text-charcoal tracking-widest uppercase underline-grow"
          style={{ letterSpacing: '0.15em' }}
          data-hover
        >
          {link.label}
        </button>
      )}
    </li>
  ))}
</ul>
      </nav>
    </motion.header>
  );
}
