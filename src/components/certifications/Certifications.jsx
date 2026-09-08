import { FiAward, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { certifications } from '../../data/certifications';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle
          label="Certifications"
          title="Courses & Certificates"
          subtitle="Professional certifications and courses that have enhanced my skills."
        />

        <div className={styles.certsGrid}>
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.1}>
              <div className={styles.certCard}>
                <div className={styles.certImage}>
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                  ) : (
                    <FiAward className={styles.certPlaceholder} />
                  )}
                  <span className={styles.certBadge}>Verified</span>
                </div>
                <div className={styles.certBody}>
                  <div className={styles.certProvider}>{cert.provider}</div>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certDescription}>{cert.description}</p>
                  <div className={styles.certFooter}>
                    <span className={styles.certDate}>{cert.date}</span>
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certLink}
                    >
                      View <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
