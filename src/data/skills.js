// ── Skills Data ──
// Based on Umesha Rathnayake's CV with authentic technology icons

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Web & Frontend',
    icon: 'FiLayout',
    displayType: 'tags',
    gridArea: 'frontend',
    description:
      'Building responsive, interactive interfaces with modern frameworks and libraries.',
    skills: [
      { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
      { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
      { name: 'CSS3', icon: 'SiCss', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'FiServer',
    displayType: 'checkmarks',
    gridArea: 'backend',
    skills: [
      { name: 'Spring Boot', icon: 'SiSpringboot', color: '#6DB33F' },
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#5FA04E' },
      { name: 'Express.js', icon: 'SiExpress', color: '#ffffff' },
      { name: 'RESTful APIs', icon: 'SiOpenapiinitiative', color: '#85EA2D' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'FiCode',
    displayType: 'iconGrid',
    gridArea: 'languages',
    skills: [
      { name: 'Java', icon: 'FaJava', color: '#ED8B00' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'C', icon: 'SiC', color: '#A8B9CC' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Security',
    icon: 'FiDatabase',
    displayType: 'labeledBoxes',
    gridArea: 'database',
    skills: [
      { name: 'PostgreSQL', label: 'PRIMARY DB', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'MySQL', label: 'SQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'JWT Auth', label: 'SECURITY', icon: 'SiJsonwebtokens', color: '#D63AF9' },
      { name: 'RBAC', label: 'ACCESS', icon: 'FaUserShield', color: '#10B981' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: 'FiTool',
    displayType: 'iconGrid',
    gridArea: 'tools',
    description:
      'Working with industry-standard tools across the development lifecycle.',
    skills: [
      { name: 'Git / GitHub', icon: 'SiGithub', color: '#ffffff' },
      { name: 'VS Code', icon: 'VscVscode', color: '#007ACC' },
      { name: 'IntelliJ IDEA', icon: 'SiIntellijidea', color: '#FE315D' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'Maven', icon: 'SiApachemaven', color: '#C71A36' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    ],
  },
  {
    id: 'cs',
    title: 'CS Fundamentals',
    icon: 'FiCpu',
    displayType: 'checkmarks',
    gridArea: 'cs',
    skills: [
      { name: 'Data Structures & Algorithms', icon: 'FaCode', color: '#818CF8' },
      { name: 'OOP & OOD', icon: 'FaBrain', color: '#F472B6' },
      { name: 'Computer Networks / TCP/IP', icon: 'FaNetworkWired', color: '#2DD4BF' },
      { name: 'Operating Systems', icon: 'FaDesktop', color: '#FBBF24' },
    ],
  },
];
