import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { education } from '../../data/education';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle
          label="Education"
          title="Academic Journey"
          subtitle="My educational background and academic achievements."
        />

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <ScrollReveal key={edu.id} delay={index * 0.15}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <span className={styles.timelinePeriod}>{edu.period}</span>
                  <h3 className={styles.timelineDegree}>{edu.degree}</h3>
                  <div className={styles.timelineInstitution}>{edu.institution}</div>
                  <div className={styles.timelineStatus}>
                    <span className={styles.timelineStatusDot} />
                    {edu.status}
                  </div>
                  <p className={styles.timelineDescription}>{edu.description}</p>

                  {edu.gpa && (
                    <div className={styles.timelineGpa}>
                      <span className={styles.gpaLabel}>GPA:</span> {edu.gpa}
                    </div>
                  )}

                  {edu.achievements && (
                    <div className={styles.achievements}>
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className={styles.achievement}>
                          <span className={styles.achievementDot} />
                          {achievement}
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
