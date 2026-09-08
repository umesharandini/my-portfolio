import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowLeft,
  FiArrowRight,
  FiPlay,
  FiX,
  FiCheckCircle,
  FiGithub,
  FiExternalLink,
} from 'react-icons/fi';
import ScrollReveal from '../common/ScrollReveal';
import { projects } from '../../data/projects';
import { projectDetails } from '../../data/projectDetails';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);
  const detail = projectDetails[id];

  const [lightbox, setLightbox] = useState({ open: false, src: '', caption: '' });
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // ESC to close lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && lightbox.open) {
        setLightbox({ open: false, src: '', caption: '' });
      }
    },
    [lightbox.open]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.open]);

  if (!project || !detail) {
    return (
      <div style={{ padding: '200px 20px', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <button
          className={styles.bottomBackBtn}
          style={{ marginTop: '20px' }}
          onClick={() => navigate('/')}
        >
          <FiArrowLeft /> Back to Portfolio
        </button>
      </div>
    );
  }

  const openLightbox = (src, caption) => {
    setLightbox({ open: true, src, caption });
  };

  // Find next project
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const getColsClass = (count) => {
    if (count === 1) return styles.cols1;
    if (count === 2) return styles.cols2;
    if (count <= 3) return styles.cols3;
    if (count <= 6) return styles.cols6;
    return styles.cols5;
  };

  return (
    <>
      {/* ── Sticky Back Nav ── */}
      <div className={styles.backNav}>
        <button className={styles.backLink} onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Portfolio
        </button>
      </div>

      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img
            src={detail.heroImage || project.coverImage}
            alt={project.title}
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'flex';
              }
            }}
          />
          <div className={styles.heroPlaceholder} style={{ display: 'none' }} />
        </div>

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.heroMeta}>
            <span className={styles.heroTag}>{project.category}</span>
            <span className={styles.heroTag}>{project.year}</span>
            <span className={styles.heroTag}>{project.role}</span>
            <span className={styles.heroTag}>{project.duration}</span>
                      </div>
                                <h1 className={styles.heroTitle}>{project.title}</h1>
                                          <p className={styles.heroSubtitle}>{project.subtitle}</p>
                                                    <div className={styles.heroActions}>
                                                                {project.links?.github && project.links.github !== '#' && (
                                                                              <a
                                                                                              href={project.links.github}
                                                                                                              target="_blank"
                                                                                                                              rel="noopener noreferrer"
                                                                                                                                              className={styles.watchDemoBtn}
                                                                                                                                                              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                                                                                                                                                            >
                                                                                                                                                                                            <FiGithub /> GitHub Repository
                                                                                                                                                                                                          </a>
                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                  {detail.demoVideo && (
                                                                                                                                                                                                                                                <a href="#demo" className={styles.watchDemoBtn}>
                                                                                                                                                                                                                                                                <FiPlay /> Watch Demo
                                                                                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                            </motion.div>
                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                        <div className={styles.content}>
                                                                                                                                                                                                                                                                                                                                {/* ── Overview Section ── */}
        <section className={styles.overviewSection}>
          <ScrollReveal>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
            </div>
          </ScrollReveal>

          <div className={styles.overviewGrid}>
            <ScrollReveal>
              <p className={styles.overviewText}>{detail.introduction}</p>
              {(detail.heroImage || project.coverImage) && (
                <div
                  className={styles.overviewImageWrapper}
                  onClick={() =>
                    openLightbox(
                      detail.heroImage || project.coverImage,
                      `${project.title} — Hardware & Web Interface Setup`
                    )
                  }
                >
                  <img
                    src={detail.heroImage || project.coverImage}
                    alt={`${project.title} Setup`}
                  />
                </div>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.quickFacts}>
                <h3 className={styles.quickFactsTitle}>Quick Facts</h3>
                {[
                  { icon: '👥', label: 'Team', value: detail.quickFacts.team },
                  {
                    icon: '🧑‍💻',
                    label: 'Members',
                    value: detail.quickFacts.members,
                  },
                  {
                    icon: '📚',
                    label: 'Course',
                    value: detail.quickFacts.course,
                  },
                  {
                    icon: '💡',
                    label: 'Total LEDs',
                    value: detail.quickFacts.totalLEDs,
                  },
                  {
                    icon: '💰',
                    label: 'Budget',
                    value: detail.quickFacts.budget,
                  },
                ].map((fact) => (
                  <div key={fact.label} className={styles.factItem}>
                    <span className={styles.factIcon}>{fact.icon}</span>
                    <div>
                      <div className={styles.factLabel}>{fact.label}</div>
                      <div className={styles.factValue}>{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Problem & Solution ── */}
        <section className={styles.problemSection}>
          <ScrollReveal>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Challenge</span>
              <h2 className={styles.sectionTitle}>Problem & Solution</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.cardIcon}>❌</div>
                <h3 className={styles.cardLabel}>The Problem</h3>
                <p className={styles.cardText}>{detail.problem}</p>
              </div>
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>✅</div>
                <h3 className={styles.cardLabel}>Our Solution</h3>
                <p className={styles.cardText}>{detail.solution}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={styles.objectives}>
              {detail.objectives.map((obj, i) => (
                <motion.div
                  key={i}
                  className={styles.objectiveItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <FiCheckCircle className={styles.objectiveCheck} />
                  <span className={styles.objectiveText}>{obj}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ── Architecture & Tech ── */}
        <section className={styles.archSection}>
          <ScrollReveal>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Architecture</span>
              <h2 className={styles.sectionTitle}>Technologies & Components</h2>
            </div>
          </ScrollReveal>

          {detail.blockDiagramImage && (
            <ScrollReveal>
              <div
                className={styles.blockDiagram}
                onClick={() =>
                  openLightbox(detail.blockDiagramImage, 'System Block Diagram')
                }
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={detail.blockDiagramImage}
                  alt="Block Diagram"
                  onError={(e) => {
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal>
            <div className={styles.techGrid}>
              {detail.detailTechStack.map((tech) => (
                <span key={tech.name} className={styles.techBadge}>
                  <span className={styles.techBadgeIcon}>{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={styles.componentsGrid}>
              {detail.components.map((comp) => (
                <div
                  key={comp.name}
                  className={styles.componentCard}
                  onClick={() => openLightbox(comp.image, comp.name)}
                >
                  <img
                    className={styles.componentImage}
                    src={comp.image}
                    alt={comp.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className={styles.componentName}>{comp.name}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ── My Contributions (STAR SECTION) ── */}
        <section className={styles.contributionsSection}>
          <ScrollReveal>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>My Role</span>
              <h2 className={styles.sectionTitle}>My Contributions</h2>
            </div>
          </ScrollReveal>

          {detail.myContributions.map((contribution, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className={styles.contributionCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.contributionHeader}>
                  <span className={styles.contributionNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.contributionIcon}>
                    {contribution.icon}
                  </span>
                  <h3 className={styles.contributionTitle}>
                    {contribution.title}
                  </h3>
                </div>

                <p className={styles.contributionDesc}>
                  {contribution.description}
                </p>

                {contribution.images && contribution.images.length > 0 && (
                  <div
                    className={`${styles.contributionImages} ${getColsClass(contribution.images.length)}`}
                  >
                    {contribution.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className={styles.contributionImgWrapper}
                        onClick={() => openLightbox(img.src, img.caption)}
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          onError={(e) => {
                            e.target.style.background = 'var(--bg-elevated)';
                            e.target.style.minHeight = '180px';
                          }}
                        />
                        <div className={styles.contributionImgCaption}>
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </section>

        {/* ── Demo Video ── */}
        {detail.demoVideo && (
          <section id="demo" className={styles.demoSection}>
            <ScrollReveal>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionLabel}>Demo</span>
                <h2 className={styles.sectionTitle}>Project Demo</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className={styles.videoWrapper}>
                <video
                  controls
                  poster={detail.heroImage}
                  preload="metadata"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                >
                  <source src={detail.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className={styles.videoPlaceholder}
                  style={{ display: 'none' }}
                >
                  <FiPlay className={styles.videoPlaceholderIcon} />
                  <p>Demo video will appear here</p>
                  <p style={{ fontSize: 'var(--text-xs)' }}>
                    Place your video at: {detail.demoVideo}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* ── Predefined Patterns ── */}
        {detail.patterns && (
          <section className={styles.patternsSection}>
            <ScrollReveal>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionLabel}>Features</span>
                <h2 className={styles.sectionTitle}>Predefined Patterns</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className={styles.patternsGrid}>
                {detail.patterns.map((pattern) => (
                  <motion.div
                    key={pattern.key}
                    className={styles.patternItem}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.patternKey}>{pattern.key}</span>
                    <span className={styles.patternName}>{pattern.name}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* ── Gallery ── */}
        {detail.gallery && detail.gallery.length > 0 && (
          <section className={styles.gallerySection}>
            <ScrollReveal>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionLabel}>Gallery</span>
                <h2 className={styles.sectionTitle}>Project Gallery</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className={styles.galleryGrid}>
                {detail.gallery.map((src, i) => (
                  <motion.div
                    key={i}
                    className={styles.galleryItem}
                    onClick={() => openLightbox(src, `Gallery image ${i + 1}`)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      onError={(e) => {
                        e.target.style.background = 'var(--bg-elevated)';
                        e.target.style.minHeight = '200px';
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* ── Key Takeaway ── */}
        <section className={styles.takeawaySection}>
          <ScrollReveal>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Reflection</span>
              <h2 className={styles.sectionTitle}>Key Takeaway</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.takeawayCard}>
              <span className={styles.takeawayQuote}>❝</span>
              <p className={styles.takeawayText}>{project.takeaway}</p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Bottom Navigation ── */}
        <div className={styles.bottomNav}>
          <Link to="/" className={styles.bottomBackBtn}>
            <FiArrowLeft /> Back to Portfolio
          </Link>
          {nextProject && nextProject.id !== id && (
            <Link
              to={`/projects/${nextProject.id}`}
              className={styles.nextProjectBtn}
            >
              {nextProject.title} <FiArrowRight />
            </Link>
          )}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setLightbox({ open: false, src: '', caption: '' })
            }
          >
            <button
              className={styles.lightboxClose}
              onClick={() =>
                setLightbox({ open: false, src: '', caption: '' })
              }
            >
              <FiX />
            </button>
            <motion.img
              className={styles.lightboxImage}
              src={lightbox.src}
              alt={lightbox.caption}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            {lightbox.caption && (
              <p className={styles.lightboxCaption}>{lightbox.caption}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
