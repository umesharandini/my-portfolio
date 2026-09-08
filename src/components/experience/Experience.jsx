import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          label="Experience"
          title="Work Experience"
          subtitle="Professional experience that has shaped my career journey."
        />

        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.15}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <FiBriefcase />
                </div>
                <div className={styles.timelineCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{exp.title}</h3>
                      <div className={styles.company}>{exp.company}</div>
                    </div>
                    <span className={styles.jobType}>{exp.type}</span>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <FiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className={styles.metaItem}>
                      <FiMapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <p className={styles.description}>{exp.description}</p>

                  {exp.responsibilities && (
                    <div className={styles.responsibilities}>
                      {exp.responsibilities.map((item, i) => (
                        <div key={i} className={styles.responsibilityItem}>
                          <span className={styles.bullet} />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
