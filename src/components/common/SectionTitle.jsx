import ScrollReveal from './ScrollReveal';

export default function SectionTitle({ label, title, subtitle, align = 'left' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 'var(--space-3xl)' }}>
      <ScrollReveal>
        <span className="section-label">{label}</span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="section-title">{title}</h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="section-subtitle" style={align === 'center' ? { margin: '0 auto' } : {}}>{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
