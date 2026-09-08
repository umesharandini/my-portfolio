import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import FilterTabs from '../common/FilterTabs';
import ScrollReveal from '../common/ScrollReveal';
import { projects, projectCategories } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and passion for building great software."
        />

        <ScrollReveal>
          <FilterTabs
            tabs={projectCategories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />
        </ScrollReveal>

        <div className={styles.projectsGrid}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={styles.projectCard}
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className={styles.cardCover}>
                    {project.coverImage ? (
                      <img src={project.coverImage} alt={project.title} loading="lazy" />
                    ) : (
                      <div className={styles.coverPlaceholder}>
                        <span className={styles.coverTitle}>{project.title}</span>
                      </div>
                    )}
                    <span className={styles.cardYear}>{project.year}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardCategory}>
                      <FiExternalLink size={12} />
                      {project.category}
                    </div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDescription}>{project.shortDescription}</p>

                    <div className={styles.cardTech}>
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className={styles.cardTechItem}>{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className={styles.cardTechItem}>
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.cardLink}>
                        View Details <FiArrowRight />
                      </span>
                      <div className={styles.cardIcons}>
                        <a
                          href={project.links.github}
                          className={styles.cardIcon}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={project.links.live}
                          className={styles.cardIcon}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
