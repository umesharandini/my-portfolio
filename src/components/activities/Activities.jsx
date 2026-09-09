import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import FilterTabs from '../common/FilterTabs';
import ScrollReveal from '../common/ScrollReveal';
import { activities, activityCategories } from '../../data/activities';
import styles from './Activities.module.css';

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? activities
      : activities.filter((a) => a.category === activeCategory);

  return (
    <section id="activities" className="section">
      <div className="container">
        <SectionTitle
          label="Activities"
          title="Extra-Curricular"
          subtitle="Beyond academics — my involvement in clubs, events, and community service."
        />

        <ScrollReveal>
          <FilterTabs
            tabs={activityCategories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />
        </ScrollReveal>

        <div className={styles.activitiesGrid}>
          <AnimatePresence mode="wait">
            {filtered.map((activity, index) => (
              <motion.div
                key={activity.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <div className={styles.activityCard}>
                  <div className={styles.activityBody}>
                    <div className={styles.activityMeta}>
                      <span className={styles.activityBadge}>{activity.category}</span>
                      <span className={styles.activityDate}>{activity.date}</span>
                    </div>
                    <h3 className={styles.activityTitle}>{activity.title}</h3>
                    <p className={styles.activityDescription}>{activity.description}</p>
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

