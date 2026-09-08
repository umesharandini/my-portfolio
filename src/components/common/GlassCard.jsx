import styles from './GlassCard.module.css';

export default function GlassCard({ children, className = '', onClick, style }) {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick} style={style}>
      <div className={styles.glowTop} />
      <div className={styles.cardInner}>
        {children}
      </div>
    </div>
  );
}
