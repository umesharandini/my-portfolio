// ── Projects Data ──
// Umesha Rathnayake's actual projects from CV

export const projects = [
  {
    id: 'project-1',
    title: 'Enterprise User Management System (UMS)',
    subtitle: 'Centralized Access Control, RBAC & Analytics Platform',
    shortDescription: 'A centralized enterprise platform for managing user profiles, role-based access control (RBAC), multi-location access, password security, and interactive statistical reporting.',
    fullDescription: `Developed a centralized Enterprise User Management System (UMS) as part of the Level 2 Software Development Project at the Faculty of Information Technology, University of Moratuwa, in collaboration with industry partner Informatics International Ltd. The system unifies user profile creation, granular Role-Based Access Control (RBAC), designation and location-based access management, automated End-Of-Day (EOD) password expiration monitoring, and real-time analytical reporting. Built using Next.js, TypeScript, Zustand, Tailwind CSS, Spring Boot (Java 21), PostgreSQL 15, AWS, and Docker.`,
    coverImage: '/images/projects/project-cover.jpg',
    images: [
      '/images/projects/project1-1.jpg',
      '/images/projects/project1-2.jpg',
      '/images/projects/project1-3.jpg',
    ],
    video: null,
    techStack: ['Next.js', 'TypeScript', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Zustand', 'Tailwind CSS', 'AWS', 'Docker'],
    category: 'Web',
    year: '2026',
    role: 'Full-Stack Developer & UI/UX Lead',
    duration: 'University & Industry Project',
    features: [
      'Centralized User Profile Creation & HR Employee Search integration',
      'Granular Role-Based Access Control (RBAC) mapping roles to function actions',
      'Location & Designation-based access management with validity periods',
      'Automated End-Of-Day (EOD) password expiration & OTP-based reset',
      'Interactive Statistical Reports Dashboard with visual charts & KPIs',
      'Automated HTML Email & SMS security notifications',
      'Stateless JWT Authentication with Refresh Token rotation',
      'PostgreSQL 15 relational data management with AWS S3 document storage',
    ],
    takeaway: 'Building an enterprise-grade User Management System provided invaluable experience in full-stack architecture, RBAC access governance, and real-time reporting dashboards. Collaborating with an industry partner (Informatics International) and academic supervisors strengthened my skills in UML modeling, security-first backend engineering with Spring Boot, responsive UI design in Next.js, and Agile teamwork.',
    links: {
      live: '#',
      github: 'https://github.com/Nadu05/nodecluster',
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'SonicGlow Cube: 8×8×8 LED Cube',
    subtitle: 'Hardware-Software Integration',
    shortDescription: 'A hardware-software bridge for a 512-LED cube with real-time web control, 3D animation interface, and microcontroller communication.',
    fullDescription: `Designed and implemented a hardware-software bridge for a 512-LED cube using NodeMCU (ESP8266) and Arduino microcontrollers. Addressed GPIO limitations through 74HC595 shift-register multiplexing. Designed PCB routing and circuit architecture for 512 LEDs using layer- and column-based control logic. Developed a React-based web frontend with interactive 3D animation and pattern-control interfaces. Built a Node.js backend to establish real-time communication between the web application and microcontrollers.`,
    coverImage: '/images/projects/project2-cover.jpg',
    images: [
      '/images/projects/project2-1.jpg',
      '/images/projects/project2-2.jpg',
      '/images/projects/project2-3.jpg',
    ],
    video: '/videos/video.mp4',
    techStack: ['C++', 'JavaScript', 'React', 'Node.js', 'ESP8266', 'Arduino', 'PCB Design'],
    category: 'Hardware',
    year: '2025',
    role: 'Full-Stack Developer & Hardware Designer',
    duration: 'University Project',
    features: [
      'NodeMCU (ESP8266) & Arduino microcontroller integration',
      '74HC595 shift-register multiplexing for GPIO expansion',
      'PCB routing for 512 LEDs with layer/column control',
      'React 3D animation & pattern-control interface',
      'Real-time Node.js backend communication',
      'Modular hardware-software architecture',
    ],
    takeaway: 'This project taught me the complete lifecycle of building a hardware-software integrated system. I gained experience in PCB design, microcontroller programming, real-time communication protocols, and building interactive web interfaces for hardware control.',
    links: {
      live: '#',
      github: 'https://github.com/umesharandini/SonicGlowWeb',
    },
    featured: true,
  },
];

export const projectCategories = ['All', 'Software Development', 'Hardware', 'Mobile Application']  ;
