import { FiMapPin, FiMail, FiCalendar, FiBook } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import styles from './About.module.css';

const infoItems = [
  { icon: FiMapPin, label: 'Location', value: 'Sri Lanka' },
  { icon: FiMail, label: 'Email', value: 'umesharandini24@gmail.com' },
  { icon: FiCalendar, label: 'Experience', value: '1+ Year Professional' },
  { icon: FiBook, label: 'Education', value: 'BSc (Hons) IT — UoM' },
];

const techItems = [
  'React', 'Next.js', 'Spring Boot', 'Node.js', 'TypeScript', 'Java',
  'PostgreSQL', 'MySQL', 'Git', 'Postman', 'VS Code', 'IntelliJ IDEA',
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          label="About Me"
          title="Get to know me"
          subtitle="A passionate developer dedicated to building impactful digital solutions."
        />

        <div className={styles.aboutGrid}>
          <ScrollReveal direction="left">
            <div className={styles.imageWrapper}>
              <div className={styles.imageFrame}>
                <img
                  src="/images/profile.jpg"
                  alt="Umesha Rathnayake"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.placeholder-text').style.display = 'flex';
                  }}
                />
                <div className="placeholder-text" style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-elevated))', color: 'var(--text-tertiary)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>UR</div>
                <div className={styles.imageBorder} />
              </div>
              <div className={styles.imageGlow} />
              <div className={styles.experience}>
                <div className={styles.expNumber}>L3</div>
                <div className={styles.expLabel}>Semester 1</div>
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.aboutContent}>
            <ScrollReveal delay={0.1}>
              <p className={styles.aboutText}>
                Hi, I'm <strong>Umesha Rathnayake</strong>, an enthusiastic Information Technology
                undergraduate at the <strong>University of Moratuwa</strong> with a strong interest in
                software engineering and technology.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className={styles.aboutText}>
                I enjoy building practical projects, learning new technologies, and solving problems
                through programming. I have experience working on web applications, software projects,
                and hardware-based projects. I am a quick learner who enjoys collaborating with others
                as a team, and I'm currently looking for a software engineering internship where I can
                improve my skills, gain real-world experience, and contribute to meaningful projects.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={styles.infoGrid}>
                {infoItems.map((item, i) => (
                  <div key={i} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <item.icon />
                    </div>
                    <div>
                      <div className={styles.infoLabel}>{item.label}</div>
                      <div className={styles.infoValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className={styles.techStack}>
                <div className={styles.techTitle}>Tech Stack</div>
                <div className={styles.techGrid}>
                  {techItems.map((tech) => (
                    <span key={tech} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
