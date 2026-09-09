// ── Extended Project Detail Data ──
// Detailed case study content for each project's dedicated page

export const projectDetails = {
  'project-1': {
    heroImage: '/images/projects/Project1/image6.png',
    demoVideo: null,
    introduction:
      'The Enterprise User Management System (UMS) is a centralized, policy-driven identity and access management platform developed as part of the 2nd-year Software Development Project (IN 2900) at the Faculty of Information Technology, University of Moratuwa. Built by team "Node Cluster" under the industrial mentorship of Ms. Dushyanthi Mahawithana (Informatics International Ltd) and academic supervision of Dr. S.C. Premarathne / Dr. Saminda Premaratne, the platform simplifies organizational user administration, granular Role-Based Access Control (RBAC), multi-location access restrictions, account security, and real-time analytical reporting.',
    quickFacts: {
      team: 'Node Cluster (5 Members)',
      members: '5 Full-Stack Developers',
      course: 'IN 2900 — Software Development Project (UoM)',
      totalLEDs: 'Informatics International Ltd',
      budget: 'Enterprise Grade (AWS & Docker)',
    },
    problem:
      'Growing organizations often manage user accounts, privileges, designations, and locations across separate, disconnected systems. Manual handling leads to inaccurate permissions, security gaps, delayed onboarding, lack of auditability, and higher administrative overhead.',
    solution:
      'We designed and built a centralized, policy-driven User Management System with a modern three-tier architecture (Next.js frontend, Spring Boot Java 21 backend, and PostgreSQL 15 database). The system unifies user lifecycle management, role and function action mapping (RBAC), designation and location-restricted access, automated End-Of-Day (EOD) password expiration workflows, OTP recovery, and interactive statistical reporting dashboards.',
    objectives: [
      'Centralize user profile lifecycle management across departments and locations',
      'Enforce secure Role-Based Access Control (RBAC) with granular function-action permissions',
      'Restrict system access based on employee designation and authorized work locations',
      'Implement secure password policies, automated EOD expiration, and OTP-based reset',
      'Provide interactive statistical reporting dashboards with visual KPIs for administrative analytics',
      'Automate HTML email and SMS notifications for account status changes and security alerts',
    ],
    detailTechStack: [
      { name: 'Next.js', icon: '⚛️' },
      { name: 'TypeScript', icon: '⚡' },
      { name: 'Java 21', icon: '☕' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'PostgreSQL 15', icon: '🐘' },
      { name: 'Zustand', icon: '📦' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'AWS S3 / EC2', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Figma', icon: '📐' },
    ],
    components: [
      {
        name: 'Admin Dashboard',
        image: '/images/projects/Project1/image4.png',
      },
      {
        name: 'HR Admin Dashboard',
        image: '/images/projects/Project1/image5.png',
      },
      {
        name: 'User Dashboard',
        image: '/images/projects/Project1/image6.png',
      },
      {
        name: 'User Dashboard',
        image: '/images/projects/Project1/image7.png',
      },
    ],
    myContributions: [
      {
        title: 'Requirements Analysis & UML Diagrams',
        icon: '📐',
        description:
          'Analyzed Software Requirements Specifications (SRS) to establish system architecture. Modeled core workflows by designing complete UML diagrams, including Use Case, Activity, Sequence, and Entity-Relationship (ER) diagrams.',
        images: [],
      },
      {
        title: 'Figma UI/UX & Wireframe Design',
        icon: '🎨',
        description:
          'Designed intuitive, high-fidelity Figma user interfaces and wireframes for employee search, profile registration, address/location assignment, and interactive analytical reporting dashboards.',
        images: [],
      },
      {
        title: 'Create New User Profile Module (Full-Stack)',
        icon: '💻',
        description:
          'Implemented the end-to-end user registration workflow using Spring Boot and Next.js. Integrated HR employee search to auto-populate personnel data, enabled role and location mapping, supported document uploads via AWS S3, and configured automated email/SMS notifications.',
        images: [
          { src: '/images/projects/Project1/Search user.png', caption: 'HR Employee Search & Auto-Population' },
          { src: '/images/projects/Project1/user profile1.png', caption: 'User Profile Registration Form' },
          { src: '/images/projects/Project1/user profile2.png', caption: 'User Profile Registration Form' },
          { src: '/images/projects/Project1/Addres tab.png', caption: 'Address Detail Tab  ' },
          { src: '/images/projects/Project1/Location assign tab.png', caption: 'user Loaction Assignment' },
          { src: '/images/projects/project1-ums/contributions/create-user-6.jpg', caption: 'Complete User Profile Overview' },
        ],
      },
      {
        title: 'Statistical Reports Dashboard & Analytics',
        icon: '📊',
        description:
          'Developed a comprehensive Statistical Reports Dashboard featuring interactive visual charts and KPIs beyond standard tables. Enabled real-time tracking for location-wise active/inactive users, user permission mapping, login history, pending registrations, and password expiry alerts.',
        images: [
          { src: '/images/projects/Project1/statistical report.png', caption: 'Statistical Reports Dashboard & Visual KPIs' },
          { src: '/images/projects/Project1/statistical report 2.png', caption: 'Analytics Charts & Location-Wise Reports' },
        ],
      },
      {
        title: 'Validation, Database Queries & System Testing',
        icon: '🛡️',
        description:
          'Implemented multi-layer data validation using React Hook Form, Zod, and Spring Security. Optimized PostgreSQL database queries for high performance and conducted unit, integration, and full system testing with complete test case verification.',
        images: [],
      },
    ],
    gallery: [
      "/images/projects/Project1/image1.jpeg",
      "/images/projects/Project1/image2.jpeg",
      "/images/projects/Project1/image3.jpeg",
      "/images/projects/Project1/image8.png",
      "/images/projects/Project1/image9.png",
      "/images/projects/Project1/image10.png",
      "/images/projects/Project1/image11.png",
      "/images/projects/Project1/image12.png",
      "/images/projects/Project1/image13.png",
      "/images/projects/Project1/image14.png",
      "/images/projects/Project1/image15.png",  
    ],
  },
  'project-2': {
    // ── Hero ──
    heroImage: '/images/projects/realProject.jpg',
    demoVideo: '/videos/0827(5).mp4',

    // ── Overview ──
    introduction:
      'The Sonic Glow Cube is a 3D LED display combining aesthetics and functionality, ideal for homes, hotels, and events. It features dynamic patterns, and customizable text, controllable via switch, remote, or web interface. Compact, and interactive, it offers a versatile decorative solution.',
    quickFacts: {
      team: 'Hardware Hackers (Group 24)',
      members: 4,
      course: 'IN 1901 — Microcontroller Based Application Development',
      totalLEDs: 512,
      budget: 'Rs. 31,871',
    },

    // ── Problem & Solution ──
    problem:
      'Conventional LED displays are mostly flat, static, and lack interactivity or modern control features. Existing LED cubes often use simple hardware with limited 3D capabilities and no web control.',
    solution:
      'Our 3D LED Sonic Glow Cube uses an 8×8×8 LED matrix to produce bright, dynamic 3D patterns with real-time online/offline control via a web interface. Users can design, upload, and switch between predefined or custom text seamlessly. Wi-Fi connectivity enables remote access. Compact, reliable hardware with optimized power design ensures versatility and enhanced user engagement.',
    aim: 'To design and develop an innovative 3D LED cube that delivers visually captivating patterns and animations while providing multiple, intuitive control options such as Web interface, IR Remote and Long press switch for a seamless and interactive user experience.',
    objectives: [
      '512-LED 3D matrix to create dynamic patterns and animations',
      'Multiple control options: Long-press switch, IR Remote, and Web interface',
      'Customizable text with scrolling and blinking effects',
      'Efficient power management with intuitive ON/OFF system',
    ],

    // ── Architecture ──
    blockDiagramImage: '/images/projects/sonic-glow-cube/overview/block-diagram.jpg',
    detailTechStack: [
      { name: 'Arduino', icon: '🔧' },
      { name: 'React JS', icon: '⚛️' },
      { name: 'Node JS', icon: '🟢' },
      { name: 'EasyEDA', icon: '📐' },
      { name: 'C++', icon: '⚙️' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'ESP8266', icon: '📡' },
    ],
    components: [
      { name: 'Arduino Mega 2560', image: '/images/projects/arduino-mega.jpg' },
      { name: 'NodeMCU ESP8266', image: '/images/projects/nodemcu-esp8266.jpg' },
      { name: '74HC595 Shift Register', image: '/images/projects/shift-register.jpg' },
      { name: 'IR Remote Kit', image: '/images/projects/ir-remote.jpg' },
    ],

    // ── Team Members ──
    team: [
      { name: 'H.M.M.N Wijerathna', id: '234233E' },
      { name: 'B.V.T Bulathsinhala', id: '234037G' },
      { name: 'R.A.U.R Rathnayake', id: '234180L', isMe: true },
      { name: 'Sailendra S', id: '234184D' },
    ],

    // ── My Contributions (R.A.U.R Rathnayake — 234180L) ──
    myContributions: [
      {
        title: 'NodeMCU–Arduino Hardware Link',
        icon: '🔗',
        description:
          'Implemented the communication bridge between NodeMCU (ESP8266) and Arduino Mega 2560 microcontrollers. Designed the serial communication protocol enabling the web application to send commands that get translated into LED pattern instructions for the cube hardware.',
        images: [
          {
            src: '/images/projects/nodemcu-arduino-schematic.jpg',
            caption: 'Schematic Diagram of NodeMCU with Arduino Mega',
          },
          {
            src: '/images/projects/nodemcu-arduino-actual.jpg',
            caption: 'Actual Hardware Wiring',
          },
        ],
      },
      {
        title: 'LED Cube Assembly',
        icon: '🔨',
        description:
          'Built and integrated the 8×8×8 LED cube structure with control circuitry. Soldered 512 LEDs into an organized 3D matrix, connected LED layers to the PCB, and ensured proper electrical functionality across all connections.',
        images: [
          {
            src: '/images/projects/cube-build-1.jpg',
            caption: 'Soldering the LED Base Layer',
          },
          {
            src: '/images/projects/cube-build-2.jpg',
            caption: 'Mid-Assembly — 3D Structure Taking Shape',
          },
          {
            src: '/images/projects/cube-build-3.jpg',
            caption: 'Wiring Complete — All Layers Connected',
          },
        ],
      },
      {
        title: 'Web Frontend Development',
        icon: '🌐',
        description:
          'Developed the React-based web frontend with interactive 3D animation and pattern-control interfaces. Built multiple pages including a home dashboard, real-time 3D cube visualization, pattern control panel, predefined pattern selector, and a text input interface for custom messages.',
        images: [
          {
            src: '/images/projects/web-ui-home.jpg',
            caption: 'Home Page — Dashboard',
          },
          {
            src: '/images/projects/web-ui-3d-view.jpg',
            caption: '3D Cube Visualization',
          },
          {
            src: '/images/projects/web-ui-pattern-control.jpg',
            caption: 'Pre Defined Patterns Control Panel',
          },
          {
            src: '/images/projects/web-ui-predefined-patterns.jpg',
            caption: 'User Defined Patterns Selector',
          },
          {
            src: '/images/projects/web-ui-text-input.jpg',
            caption: 'Custom Text Input Interface',
          },
        ],
      },
      {
        title: 'Backend ↔ Hardware Connection',
        icon: '⚡',
        description:
          'Connected the Node.js backend with NodeMCU and Arduino to establish real-time communication between the web application and the physical LED cube. Implemented WebSocket-based data flow allowing pattern commands and text messages to be transmitted from the browser to the microcontrollers in real-time.',
        images: [
          {
            src: '/images/projects/sonic-glow-cube/my-contributions/serial-output.jpg',
            caption: 'NodeMCU Serial Output — Real-Time Communication Logs',
          },
        ],
      },
    ],

    // ── Gallery ──
    gallery: [
      '/images/projects/sonic-glow-cube/final-cube-1.jpg',
      '/images/projects/sonic-glow-cube/final-cube-2.jpg',
      '/images/projects/sonic-glow-cube/final-cube-3.jpg',
    ],

    // ── Predefined Patterns ──
    patterns: [
      { key: '0', name: 'Rain Effect' },
      { key: '1', name: 'Snake' },
      { key: '2', name: 'Ping-Pong Cube' },
      { key: '3', name: 'Fireworks' },
      { key: '4', name: 'Breathing' },
      { key: '5', name: 'Countdown' },
      { key: '6', name: 'Random Sparkle' },
      { key: '7', name: 'Spiral' },
      { key: '8', name: 'Wave' },
      { key: '9', name: 'Rotating Cube' },
    ],
  },

  'project-3': {
    heroImage: '/images/projects/portfolio-cover.jpg',
    demoVideo: null,
    introduction:
      'A modern, responsive personal portfolio website designed and built from scratch to showcase software engineering projects, technical skills, verified certifications, and academic background. The platform emphasizes aesthetic excellence, high performance, and seamless user experience through a tailored glassmorphic dark theme and interactive micro-animations.',
    quickFacts: [
      { icon: '💻', label: 'Project Type', value: 'Personal Portfolio Website' },
      { icon: '👩‍💻', label: 'Developer', value: 'Umesha Rathnayake (Frontend & UI/UX)' },
      { icon: '⚡', label: 'Build Tool', value: 'Vite + React 18' },
      { icon: '🎨', label: 'Design System', value: 'CSS Modules (Glassmorphic Theme)' },
      { icon: '🚀', label: 'Deployment', value: 'Vercel (CI/CD via GitHub)' },
    ],
    problem:
      'Standard template portfolios often lack personal branding, feel generic, suffer from slow load times, or fail to effectively highlight both technical software engineering depth and modern UI/UX design sensibilities.',
    solution:
      'Developed a custom, high-performance Single Page Application using React and Vite with scoped CSS Modules. The interface integrates Framer Motion for subtle scroll reveals, an interactive certificate modal, project case studies, and a direct CV download option.',
    objectives: [
      'Deliver lightning-fast page load speeds and smooth navigation using Vite and React',
      'Craft a distinct, premium glassmorphism dark aesthetic with neon emerald accents',
      'Implement component-level scoped styling with CSS Modules for clean maintainability',
      'Incorporate Framer Motion scroll animations and interactive UI micro-interactions',
      'Establish a streamlined CI/CD pipeline via GitHub and Vercel for automated redeployments',
    ],
    detailTechStack: [
      { name: 'React 18', icon: '⚛️' },
      { name: 'Vite', icon: '⚡' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'CSS Modules', icon: '🎨' },
      { name: 'Framer Motion', icon: '✨' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'React Icons', icon: '🔍' },
    ],
    components: [
      {
        name: 'Hero & Live CV Download',
        image: '/images/projects/portfolio-cover.jpg',
      },
    ],
    myContributions: [
      {
        title: 'Component Architecture & Development',
        icon: '⚛️',
        description:
          'Structured the application into modular, reusable components using React with Vite. Leveraged CSS Modules for strict style scoping, ensuring clean code separation and zero global style leaks.',
      },
      {
        title: 'UI/UX Design & Glassmorphism Theme',
        icon: '🎨',
        description:
          'Created a dark-mode theme featuring subtle glassmorphic blur effects, emerald green glow accents, custom typography, and fully responsive layouts across mobile, tablet, and desktop.',
      },
      {
        title: 'Motion Design & Micro-interactions',
        icon: '✨',
        description:
          'Implemented Framer Motion scroll reveals, dynamic role typing banner, interactive certificate viewers, and smooth hover animations to create an engaging experience.',
      },
      {
        title: 'CI/CD Pipeline & Automated Deployment',
        icon: '🚀',
        description:
          'Configured continuous integration and deployment using GitHub and Vercel, enabling instant automatic builds and production updates on every git push.',
      },
    ],
  },
};
