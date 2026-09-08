import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'umesharandini24@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Sri Lanka' },
  { icon: FiPhone, label: 'Phone', value: '+94 78 524 6978' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/umesharandini', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/umesha-rathnayake-937492302', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/', label: 'Twitter' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mrpgyvqq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.errors?.map((err) => err.message).join(', ') ||
            'Something went wrong. Please try again or reach out directly.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection or reach out directly.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          label="Contact"
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
        />

        <div className={styles.contactGrid}>
          <ScrollReveal direction="left">
            <div className={styles.contactInfo}>
              <div>
                <h3 className={styles.contactHeading}>
                  Let's build something <span>amazing</span> together
                </h3>
                <p className={styles.contactText}>
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>

              <div className={styles.contactItems}>
                {contactInfo.map((item, i) => (
                  <div key={i} className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>
                      <item.icon />
                    </div>
                    <div>
                      <div className={styles.contactItemLabel}>{item.label}</div>
                      <div className={styles.contactItemValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialGrid}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={link.label}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  className={styles.formInput}
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  name="message"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.formSubmit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : <>Send Message <FiSend /></>}
              </button>

              {status === 'sent' && (
                <div className={styles.successMessage}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  ✕ {errorMessage}
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            © 2025 Umesha Rathnayake. Built with <span className={styles.footerHeart}>♥</span> and React
          </p>
        </div>
      </div>
    </section>
  );
}
