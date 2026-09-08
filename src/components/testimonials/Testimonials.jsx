import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstChild?.offsetWidth || 500;
    const gap = 32;
    const scrollAmount = dir === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setActiveIndex((prev) => {
      if (dir === 'left') return Math.max(0, prev - 1);
      return Math.min(testimonials.length - 1, prev + 1);
    });
  };

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstChild?.offsetWidth || 500;
    const gap = 32;
    trackRef.current.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionTitle
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from mentors, colleagues, and collaborators."
        />

        {testimonials.length > 0 ? (
          <>
            <ScrollReveal>
              <div className={styles.testimonialsTrack} ref={trackRef}>
                {testimonials.map((t) => (
                  <div key={t.id} className={styles.testimonialCard}>
                    <div className={styles.quoteIcon}>"</div>
                    <p className={styles.quoteText}>{t.quote}</p>
                    <div className={styles.quoteAuthor}>
                      <div className={styles.authorAvatar}>
                        {t.name.charAt(0)}
                      </div>
                      <div className={styles.authorInfo}>
                        <span className={styles.authorName}>{t.name}</span>
                        <span className={styles.authorRole}>{t.role} · {t.organization}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className={styles.controls}>
              <button className={styles.controlBtn} onClick={() => scroll('left')} aria-label="Previous testimonial">
                <FiChevronLeft />
              </button>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${activeIndex === i ? styles.active : ''}`}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button className={styles.controlBtn} onClick={() => scroll('right')} aria-label="Next testimonial">
                <FiChevronRight />
              </button>
            </div>
          </>
        ) : (
          <ScrollReveal>
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontStyle: 'italic', padding: 'var(--space-2xl) 0' }}>
              Testimonials coming soon...
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
