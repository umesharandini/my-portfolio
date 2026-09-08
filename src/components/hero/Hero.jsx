import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import styles from './Hero.module.css';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

const techLogos = [
  'React', 'Next.js', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Node.js',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <motion.div
              className={styles.greeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.statusDot} />
              Available for opportunities
            </motion.div>

            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Umesha Rathnayake
            </motion.h1>

            <motion.div
              className={styles.typingWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className={styles.typePrefix}>I'm a</span>
              <span className={styles.typingText}>
                {text}
                <span className={styles.cursor} />
              </span>
            </motion.div>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Passionate IT undergraduate at the University of Moratuwa, crafting modern, scalable web
              applications. I transform ideas into elegant digital experiences with clean code and creative design.
            </motion.p>

            <motion.div
              className={styles.heroCTA}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <button className={styles.ctaPrimary} onClick={scrollToContact}>
                Let's get started <FiArrowRight />
              </button>
              <button className="btn btn-secondary" onClick={scrollToProjects}>
                View Projects
              </button>
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.imageCircle}>
              <img
                src="/images/profile.jpg"
                alt="Umesha Rathnayake"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className={styles.imagePlaceholder} style={{ display: 'none' }}>UR</div>
            </div>
            <div className={styles.imageGlow} />
          </motion.div>
        </div>

        {/* Worked With Strip */}
        <motion.div
          className={styles.workedWith}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <span className={styles.workedWithLabel}>Worked with</span>
          <div className={styles.techStrip}>
            {techLogos.map((tech) => (
              <div key={tech} className={styles.techBadge}>
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
