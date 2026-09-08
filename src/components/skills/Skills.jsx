import { FiLayout, FiServer, FiDatabase, FiTool, FiCode, FiCpu, FiCheck } from 'react-icons/fi';
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiPostgresql,
  SiMysql,
  SiJsonwebtokens,
  SiGithub,
  SiIntellijidea,
  SiPostman,
  SiApachemaven,
  SiDocker,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import {
  FaJava,
  FaUserShield,
  FaCode,
  FaBrain,
  FaNetworkWired,
  FaDesktop,
} from 'react-icons/fa';

import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

const headerIconMap = {
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCode,
  FiCpu,
};

const brandIconMap = {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiPostgresql,
  SiMysql,
  SiJsonwebtokens,
  SiGithub,
  VscVscode,
  SiIntellijidea,
  SiPostman,
  SiApachemaven,
  SiDocker,
  FaJava,
  FaUserShield,
  FaCode,
  FaBrain,
  FaNetworkWired,
  FaDesktop,
};

/* ── Tag Pills (for Frontend skills) ── */
function SkillTags({ skills }) {
  return (
    <div className={styles.tagsContainer}>
      {skills.map((skill) => {
        const IconComponent = brandIconMap[skill.icon];
        return (
          <span key={skill.name} className={styles.skillTag}>
            {IconComponent ? (
              <span className={styles.tagBrandIcon} style={{ color: skill.color }}>
                <IconComponent />
              </span>
            ) : (
              <span className={styles.tagDot} />
            )}
            {skill.name}
          </span>
        );
      })}
    </div>
  );
}

/* ── Checkmark List (for Backend & CS Fundamentals) ── */
function SkillChecklist({ skills }) {
  return (
    <div className={styles.checklistContainer}>
      {skills.map((skill) => {
        const IconComponent = brandIconMap[skill.icon];
        return (
          <div key={skill.name} className={styles.checkItem}>
            <span
              className={styles.checkIcon}
              style={{ color: skill.color || 'var(--accent)' }}
            >
              {IconComponent ? <IconComponent /> : <FiCheck />}
            </span>
            <span className={styles.checkLabel}>{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Icon Grid (for Programming Languages & Tools) ── */
function SkillIconGrid({ skills }) {
  return (
    <div className={styles.iconGridContainer}>
      {skills.map((skill) => {
        const IconComponent = brandIconMap[skill.icon];
        return (
          <div key={skill.name} className={styles.iconTile}>
            <div
              className={styles.iconTileIcon}
              style={{ color: skill.color }}
            >
              {IconComponent ? <IconComponent /> : <span>{skill.name.slice(0, 2)}</span>}
            </div>
            <span className={styles.iconTileLabel}>{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Labeled Boxes (for Databases & Security) ── */
function SkillLabeledBoxes({ skills }) {
  return (
    <div className={styles.labeledBoxesContainer}>
      {skills.map((skill) => {
        const IconComponent = brandIconMap[skill.icon];
        return (
          <div key={skill.name} className={styles.labeledBox}>
            <div className={styles.boxHeader}>
              {IconComponent && (
                <span
                  className={styles.boxBrandIcon}
                  style={{ color: skill.color }}
                >
                  <IconComponent />
                </span>
              )}
              <span className={styles.boxLabel}>{skill.label}</span>
            </div>
            <span className={styles.boxValue}>{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Render dispatcher ── */
function SkillDisplay({ displayType, skills }) {
  switch (displayType) {
    case 'tags':
      return <SkillTags skills={skills} />;
    case 'checkmarks':
      return <SkillChecklist skills={skills} />;
    case 'iconGrid':
      return <SkillIconGrid skills={skills} />;
    case 'labeledBoxes':
      return <SkillLabeledBoxes skills={skills} />;
    default:
      return null;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          label="Skills"
          title="Technologies & Tools"
          subtitle="The technologies and tools I use to bring ideas to life."
        />

        <div className={styles.bentoGrid}>
          {skillCategories.map((category, index) => {
            const Icon = headerIconMap[category.icon] || FiTool;
            return (
              <ScrollReveal key={category.id} delay={index * 0.08}>
                <div
                  className={`${styles.bentoCard} ${styles[`area_${category.gridArea}`]}`}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <Icon />
                    </div>
                    <h3 className={styles.cardTitle}>{category.title}</h3>
                  </div>

                  {category.description && (
                    <p className={styles.cardDescription}>
                      {category.description}
                    </p>
                  )}

                  <SkillDisplay
                    displayType={category.displayType}
                    skills={category.skills}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
