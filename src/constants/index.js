export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Resume',
    href: '/assets/resume.pdf',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'EState - Real Estate Website',
    desc: 'Estate is a real estate website that provides a platform for buying and selling real estate properties. It is built with Next.js, Tailwind CSS, and Framer Motion.',
    subdesc:
      'Developed as a distinctive Software-as-a-Service platform using ReactJS, Tailwind CSS,JavaScript, and Node.js, Estate is crafted for exceptional performance and scalability.',
    href: 'https://es-tate-gold.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/html.png',
      },
    ],
  },
  {
    title: 'Task Management Dashboard',
    desc: 'Task management dashboard is a web application that helps users to manage their tasks and projects. It is built with React.js, Tailwind CSS, and Framer Motion.',
    subdesc:
      'With task management dashboard, users can create, manage, and track their tasks and projects. It is a powerful tool for organizing and prioritizing tasks, and it helps users to stay on top of their work.',
    href: 'https://taskmanagementdashboard.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/js.png',
      },
    ],
  },
  {
    title: 'QuickSnips',
    desc: 'Instant Input: Copy-paste notes or snippets directly into QuickSnips for quick storage. QuickSnips is a web application that allows users to create, store, and access their notes quickly and easily. It is built with React.js, Tailwind CSS, and Framer Motion.',
    subdesc:
      'With QuickSnips, users can create, store, and access their notes quickly and easily. It is a simple and intuitive interface that allows users to create, store, and access their notes quickly and easily.',
    href: 'https://quicksnips.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/html.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Lovely Professional University',
    pos: 'B.tech (Computer Science)',
    duration: '-- 2021 - 2025',
    title:
      'Computer Science is the study of computers, their systems, and computational processes. It involves both theoretical and practical aspects of computing, focusing on designing algorithms, software, and hardware systems.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'National Intermediate College',
    pos: 'Intermediate',
    title:
      'Intermediate with Science (PCM) focuses on subjects like Physics, Chemistry, and Mathematics, providing a strong foundation in analytical and scientific concepts. It emphasizes problem-solving, logical reasoning, and understanding the principles governing natural and physical phenomena.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Assumption Public School',
    pos: 'Matriculation',
    duration: '👋',
    title:
      'It is a private school located in Deoria, Uttar Pradesh, India. It is a co-educational school with a diverse curriculum that includes subjects like English, Science, Social Studies, and Computer Science.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
