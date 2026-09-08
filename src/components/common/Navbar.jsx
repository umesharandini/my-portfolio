import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from './Navbar.module.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'activities', label: 'Activities' },
  { id: 'education', label: 'Education' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Get In Touch' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <div className={styles.logo} onClick={() => scrollTo('hero')} title="Umesha Rathnayake">
            UR
          </div>

          {/* Desktop Nav Links */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className={styles.socialLinks}>
            <a href="https://github.com/umesharandini" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/umesha-rathnayake-937492302" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.open : ''}`}>
        <div className={styles.mobileDrawerOverlay} onClick={() => setMobileOpen(false)} />
        <div className={styles.mobileDrawerContent}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.mobileNavItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className={styles.mobileSocials}>
            <a href="https://github.com/umesharandini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/umesha-rathnayake-937492302" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
