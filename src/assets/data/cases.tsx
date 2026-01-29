import case1 from '/public/images/case1.jpg';
import case2 from '/public/images/case2.jpg';
import nexus from '/public/images/nexus.jpg';
import nexus2 from '/public/images/nexus2.jpg';
import nexus3 from '/public/images/nexus3.jpg';
import christmas from '/public/images/christmas.jpg';
import paraweb from '/public/images/paraweb.jpg';

export interface Case {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link?: string;
    coverImage?: string;
    date?: string;
    challenge?: string;
    solutions?: Array<{
        title: string;
        description: string;
    }>;
    github?: string;
    features?: string[];
    solution?: string;
    technologies?: string[];
    results?: string[];
    gallery?: string[];
    fullDescription?: string;
}

const casesData: Case[] = [
    {
        id: 'vospitatel-goda',
        title: 'Educator of the Year',
        subtitle: 'Two educational websites for a teacher competition',
        description: 'Full development cycle: from design to WordPress integration',
        image: case1,
        coverImage: case1,
        date: '2023',
        challenge: 'Create two full-fledged websites for the All-Russian "Educator of the Year" competition from scratch. The clients require modern, user-friendly educational resources that they can update themselves after training',
        solutions: [
            {
                title: 'Custom WordPress Theme',
                description: 'Developed a custom theme from scratch with 20+ page templates'
            },
            {
                title: 'Project Management and Design',
                description: 'Developed UX/UI design with the target audience (teachers) in mind, created prototypes, visual style, and identity'
            },
            {
                title: 'Administration and infrastructure',
                description: 'Set up hosting, domains, SSL certificates, backups, and a monitoring system'
            },
            {
                title: 'Customer training',
                description: 'Conducted employee training on how to use the admin panel, created instructions and technical support'
            },
        ],
        technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'Figma'],
        results: [
            'The sites were used in the competition',
            'The organizers updated the content themselves without technical assistance',
            'Positive feedback from teachers and competition organizers',
            'We reduced the time it takes to publish materials by 70%'
        ],
        gallery: [
            case1,
            case2,
        ],
        features: [
            'Custom WordPress Theme',
            'Adaptive layout for all devices',
            'Management via the admin panel',
            'Photo gallery of participants',
            'News feed with categories',
            'Contacts with interactive map',

        ],
        fullDescription: 'Development of two educational websites for the "Educator of the Year" competition using WordPress. Full-service design, implementation, and client training. For privacy reasons, personal information and photographs are not available',
        solution: `I implemented an end-to-end solution: conducted design research among teachers, created an intuitive interface, developed a custom WordPress theme with expanded functionality for managing competition materials, configured the entire technical stack, and trained the organizing team on how to use the system. The project was delivered on time and exceeded the client's expectations for ease of use`
    },
    {
        id: 'nexus-code',
        title: 'Nexus Code',
        subtitle: 'Pet project for testing modern technologies',
        description: 'A project for practicing Vite, React, TypeScript, and modern libraries',
        image: nexus,
        coverImage: nexus,
        date: '2026',
        challenge: 'Create a comprehensive pet project from scratch to deeply learn and practice modern frontend technologies, build a solid understanding of the React ecosystem, and establish best practices for production-ready applications',
        fullDescription: 'Nexus Code is a personal learning project built from the ground up to master modern frontend development technologies. The project serves as both a learning platform and a template for future React applications. It encompasses the entire development cycle: from initial research and technology selection to implementation, testing, and deployment. The application demonstrates proficiency with the latest tools and practices in the React ecosystem',
        technologies: ['React', 'TypeScript', 'Vite', 'SCSS', 'ESLint', 'Prettier', 'Git', 'Figma'],
        gallery: [
            nexus2,
            nexus3,
        ],
        solutions: [
            {
                title: 'Technology Stack Research & Setup',
                description: 'Researched and selected optimal technology stack: Vite for blazing-fast builds, React 18+ with TypeScript for type safety, and modern libraries for state management and routing'
            },
            {
                title: 'Project Architecture Design',
                description: 'Designed scalable project structure with clear separation of concerns, reusable components, custom hooks, and utility functions'
            },
            {
                title: 'Modern Development Practices Implementation',
                description: 'Implemented code splitting, lazy loading, performance optimization, and established comprehensive development workflow with ESLint, Prettier, and Git hooks'
            },
            {
                title: 'UI/UX Development',
                description: 'Created responsive, accessible user interface with custom design system, animations, and seamless user experience across all devices'
            },
        ],
        results: [
            'Successfully built a fully functional application with complex features',
            'Mastered Vite build system and its optimization capabilities',
            'Developed deep understanding of React 18+ features and best practices',
            'Established personal development standards and project template for future work',
            'Improved TypeScript proficiency with advanced typing patterns'
        ],
        features: [
            'Vite-powered development with instant hot module replacement',
            'React 18+',
            'TypeScript for full type safety and better developer experience',
            'Modular SCSS architecture with CSS custom properties',
            'Responsive design',
            'Component-based architecture with reusable UI components',
            'Performance optimization with code splitting',
            'Cross-browser compatibility'
        ],
        solution: 'I implemented a complete development solution: started with comprehensive technology research to select the optimal stack, designed a scalable architecture following industry best practices, built a custom component library with TypeScript interfaces, configured advanced build optimizations with Vite, established a robust development workflow with quality assurance tools, and created comprehensive documentation. The project successfully achieved all learning objectives while producing a production-ready codebase',
        github: 'https://github.com/linawashere/nexus-code',
        link: 'https://linawashere.github.io/nexus-code/',
    },
    {
        id: 'christmas-shop',
        title: 'Christmas shop',
        subtitle: 'Educational project from RS School',
        description: 'Full-cycle development of responsive e-commerce website with complex functionality',
        coverImage: christmas,
        image: christmas,
        date: '2024',
        features: [
            'Pixel-perfect implementation of Figma design',
            'Fully responsive layout (1440px, 768px, 380px)',
            'Semantic HTML5 markup',
            'Vanilla JavaScript functionality',
            'Custom CSS without frameworks',
            'Interactive slider with carousel animation',
            'Real-time countdown timer to New Year',
            'Random gift card generation',
            'Product category filtering system',
            'Modal windows for product details',
            'Smooth burger menu with animations',
            'Scroll-to-top functionality',
            'Cross-browser compatibility',
            'W3C validated markup',
            'Git-based version control with specific branch structure'
        ],
        github: 'https://github.com/linawashere/christmas-shop',
        link: 'https://linawashere.github.io/christmas-shop/',
        technologies: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'Figma', 'Git', 'GitHub Pages', 'PerfectPixel'],
        fullDescription: 'Christmas Shop is a comprehensive educational project completed as part of the RS School curriculum. The project involved developing a complete e-commerce website for Christmas gifts across three distinct phases: fixed layout implementation, responsive design adaptation, and JavaScript functionality integration. The project had strict technical constraints prohibiting the use of any frameworks, libraries, or preprocessors, requiring implementation of all features using only vanilla HTML, CSS, and JavaScript. The work followed detailed specifications, underwent peer cross-code reviews, and demonstrated proficiency in modern web development fundamentals.',
        solution: 'I systematically approached each phase of the project: First, implemented pixel-perfect fixed layouts based on Figma designs with semantic HTML and validated CSS. Second, transformed the layouts into fully responsive designs using mobile-first principles and media queries. Third, developed all interactive features from scratch including a custom slider, real-time countdown timer, dynamic content filtering, and modal systems. Throughout the project, I adhered to strict version control practices with Git, followed the school\'s branching strategy, and successfully passed all cross-code review stages',
        challenge: 'Complete a comprehensive three-part educational assignment from RS School: develop a fully functional, responsive e-commerce website for Christmas gifts with strict technical constraints (no frameworks/libraries), adhering to detailed specifications and passing rigorous cross-code reviews.',
        solutions: [
            {
                title: 'Fixed Layout Implementation',
                description: 'Created pixel-perfect Home and Gifts pages matching Figma design at 1440px width, implementing semantic HTML, CSS-only styling without frameworks, and ensuring W3C validation'
            },
            {
                title: 'Responsive Design Adaptation',
                description: 'Transformed fixed layout into fully responsive design supporting 1440px, 768px, and 380px breakpoints, implementing mobile-first approach, burger menu, and device-specific hover states'
            },
            {
                title: 'JavaScript Functionality Development',
                description: 'Built complex interactive features from scratch including slider carousel, countdown timer, random gift generation, category filtering, modal windows, and smooth animations without external libraries'
            },
            {
                title: 'Educational Process Management',
                description: 'Followed strict Git workflow with branch-per-task structure, participated in cross-code reviews, and met all technical requirements and deadlines for each project phase'
            },
        ],
    },
    {
        id: 'paraweb-internship',
        title: 'UI Components Developer Intern',
        subtitle: 'Paraweb Internship Program',
        description: 'Frontend development internship focusing on semantic markup, accessibility, and component architecture',
        image: paraweb,
        coverImage: paraweb,
        date: 'March 2025 - May 2025',
        technologies: ['HTML5', 'Sass', 'Vanilla JavaScript', 'Git', 'Figma', 'Pug', 'Gulp'],
        challenge: 'Join a leading digital infrastructure company as an intern to develop professional UI components, work with modern frontend technologies, and contribute to real projects under guidance of experienced mentors',
        features: [
            'Custom animated UI components',
            'Performance-optimized frontend solutions',
            'Responsive and accessible designs',
            'Smooth animations and transitions',
            'Reusable component architecture',
            'Cross-browser compatibility',
            'Clean, maintainable code following best practices'
        ],
        results: [
            'Successfully completed 3-month intensive internship program',
            'Received consistent positive feedback',
            'Developed portfolio of accessible, semantic UI components',
            'Mastered professional frontend development workflows and standards',
            'Gained practical experience with enterprise-level project structure',
            'Achieved personal goal of working with a highly respected industry leader'
        ],
        fullDescription: 'A three-month front-end development internship at Paraweb, a leading digital infrastructure company. This internship fulfilled a long-standing aspiration to work with this respected industry leader. Focused on developing semantic, accessible UI components using modern best practices. Worked under personalized mentorship with regular code reviews and feedback sessions, receiving positive recognition for dedication and progress in professional frontend development',

        solution: 'Approached the internship with commitment and systematic learning: actively participated in mentorship sessions, implemented feedback iteratively, focused on mastering semantic HTML and accessible development practices, and embraced the company\'s professional standards. The structured guidance and supportive environment enabled significant growth in professional frontend development capabilities',
    },
];
export default casesData;