// Live Projects - Professional deployed work
export const LIVE_PROJECTS = [
  {
    title: 'Lark PM',
    domain: 'Construction Tech',
    summary: 'End-to-end project management platform for construction companies with automated workflows and digital contract closure.',
    problem: 'Construction and deck-building companies struggled with fragmented workflows across lead generation, estimation, client communication, and contract signing. Manual processes created bottlenecks, delayed project starts, and increased administrative overhead, resulting in lost revenue and poor client experience.',
    solution: 'Engineered a comprehensive full-stack platform with real-time WebSocket communication, automated cost estimation algorithms, integrated e-signature workflows, and role-based authentication. Architected scalable backend services with PostgreSQL for transaction management and AWS infrastructure for high availability and PDF generation pipelines.',
    impact: [
      { metric: '70%', label: 'Reduction in contract turnaround time' },
      { metric: '3x', label: 'Increase in lead conversion rate' }
    ],
    keyContributions: [
      'Designed and implemented real-time notification system using Socket.io for instant client-contractor communication',
      'Developed automated cost estimation algorithms reducing manual calculation time by 80%',
      'Integrated DocuSign API for legally-binding e-signatures with audit trail tracking',
      'Built comprehensive CRM with advanced filtering, search, and client lifecycle management',
      'Implemented AI-powered features for intelligent project recommendations and resource allocation',
      'Architected role-based access control system supporting multi-tenant operations'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
    techCategory: 'fullstack',
    live: 'https://www.deckcreations.com/',
    thumbnail: '/larkpm.jpg',
    video: "https://drive.google.com/file/d/1l7kxFHGft-r84f8D6kEEgVh6laO63XEr/view?usp=sharing",
    github: null,
  },
  {
    title: 'SociallHub',
    domain: 'Social Media',
    summary: 'Unified social media aggregation platform consolidating multiple networks into a single dashboard interface.',
    problem: 'Users managing multiple social media accounts faced context-switching fatigue and inefficiency. Existing aggregation tools lacked real-time content parsing capabilities and failed to handle diverse media formats across platforms, making content consumption fragmented and time-consuming.',
    solution: 'Built custom DOM selectors and content parsing engine to extract, normalize, and display multimedia content from heterogeneous social APIs. Implemented adaptive rendering logic handling videos, images, and text posts with platform-specific formatting preservation. Optimized frontend performance with lazy loading and virtual scrolling for high-volume feeds.',
    impact: [
      { metric: '60%', label: 'Reduction in platform switching time' },
      { metric: '5+', label: 'Social platforms integrated seamlessly' }
    ],
    keyContributions: [
      'Developed robust content parsing mechanisms handling JSON, XML, and HTML responses from multiple social APIs',
      'Engineered unified data transformation layer normalizing disparate data structures into consistent format',
      'Implemented real-time feed synchronization with WebSocket connections for instant updates',
      'Optimized rendering performance managing 1000+ posts with virtualized scrolling',
      'Built comprehensive error handling and fallback strategies for API rate limiting and failures'
    ],
    tech: ['React', 'jQuery', 'MySQL', 'NodeJS'],
    techCategory: 'fullstack',
    live: 'https://www.sociallhub.com/',
    thumbnail: '/Sociall.jpeg',
    github: null,
    video: null,
  },
  {
    title: 'Travorio',
    domain: 'Travel & Fintech',
    summary: 'Modern travel booking platform with cryptocurrency payment integration and real-time flight availability.',
    problem: 'Traditional travel booking platforms lacked cryptocurrency payment options, limiting accessibility for crypto-native travelers. Complex booking flows and slow payment processing created friction, while limited payment flexibility reduced conversion rates in emerging markets.',
    solution: 'Developed responsive Next.js frontend with TypeScript for type-safe development and seamless UX. Integrated cryptocurrency payment gateways alongside traditional payment methods, implementing real-time exchange rate calculations and multi-currency support. Optimized performance with server-side rendering and strategic caching for sub-second page loads.',
    impact: [
      { metric: '40%', label: 'Increase in payment completion rate' },
      { metric: '<2s', label: 'Average booking flow completion time' }
    ],
    keyContributions: [
      'Architected modular TypeScript codebase with strict type checking reducing runtime errors by 85%',
      'Implemented server-side rendering strategy improving SEO performance and initial load times',
      'Integrated multiple cryptocurrency payment processors with real-time exchange rate APIs',
      'Built responsive booking flow optimized for mobile, tablet, and desktop experiences',
      'Developed comprehensive state management system handling complex booking workflows',
      'Implemented progressive web app features enabling offline flight search and caching'
    ],
    tech: ['React', 'NextJS', 'TypeScript'],
    techCategory: 'frontend',
    thumbnail: '/travorio.png',
    live: 'https://travorio.com/en-us/',
    github: null,
    video: null,
  },
  {
    title: 'Chavivim',
    domain: 'Transportation',
    summary: 'Real-time roadside assistance platform with live GPS tracking and intelligent dispatch management.',
    problem: 'Traditional roadside assistance services relied on phone-based dispatch causing delays in locating stranded drivers. Manual coordination between dispatchers, drivers, and service providers led to inefficient resource allocation, extended wait times, and poor visibility into service status.',
    solution: 'Built real-time tracking system using Google Maps API and Socket.io for live location updates. Designed comprehensive admin panel with role-based workflows for request approval, vehicle assignment, and call management. Implemented intelligent dispatch algorithms matching nearest available providers with service requests, reducing response times significantly.',
    impact: [
      { metric: '50%', label: 'Reduction in average response time' },
      { metric: '90%', label: 'Real-time location accuracy' }
    ],
    keyContributions: [
      'Engineered real-time GPS tracking system with WebSocket connections supporting 100+ concurrent users',
      'Developed intelligent dispatch algorithm optimizing provider assignment based on location and availability',
      'Built comprehensive admin dashboard with CRUD operations for users, vehicles, and service locations',
      'Implemented role-based authentication flow supporting dispatchers, drivers, and administrators',
      'Integrated Google Maps API with custom markers, routing, and geofencing capabilities',
      'Architected scalable .NET backend with RESTful APIs and SignalR for real-time communication'
    ],
    tech: ['React', 'NextJS', 'Socket.io', 'Google Maps API', ".NET"],
    techCategory: 'fullstack',
    live: 'https://chavivim.org/',
    thumbnail: '/chavivim.png',
    github: null,
    video: null,
  },
  {
    title: 'Blinkin',
    domain: 'AI & Customer Support',
    summary: 'AI-powered customer support platform with AR-enabled video guidance and intelligent troubleshooting.',
    problem: 'Customer support teams faced escalating costs from on-site technician visits for product setup and troubleshooting. Traditional phone and chat support lacked visual context, leading to miscommunication, extended resolution times, and customer frustration with complex technical issues.',
    solution: 'Built Next.js frontend with AR video call integration enabling real-time visual guidance. Implemented NestJS backend with AI-powered chatbot for intelligent issue diagnosis and resolution routing. Designed Zustand-based state management architecture handling complex real-time communication flows and session persistence across AR and chat interfaces.',
    impact: [
      { metric: '65%', label: 'Reduction in on-site support visits' },
      { metric: '80%', label: 'Faster issue resolution time' }
    ],
    keyContributions: [
      'Architected TypeScript-first codebase with comprehensive type safety across frontend and backend',
      'Integrated WebRTC-based AR video calling with screen annotation and guidance overlays',
      'Developed AI chatbot using NestJS and MCP servers for context-aware troubleshooting',
      'Implemented real-time session management with automatic transcript generation and issue tracking',
      'Built responsive UI with Tailwind CSS supporting mobile, tablet, and desktop AR experiences',
      'Engineered scalable microservices architecture handling high-volume concurrent support sessions'
    ],
    tech: ['Next.js', "React", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "NestJS", "MCP servers"],
    techCategory: 'frontend',
    live: 'https://www.blinkin.io/',
    thumbnail: '/blinkin.png',
    github: null,
    video: null,
  },
  {
    title: 'AdOps',
    domain: 'AdTech & Marketing',
    summary: 'Enterprise advertising analytics platform with advanced data visualization and ROI optimization.',
    problem: 'Marketing teams struggled with fragmented advertising data across multiple platforms, making performance analysis time-consuming and error-prone. Manual reporting processes delayed optimization decisions, while lack of real-time insights resulted in wasted ad spend and missed opportunities.',
    solution: 'Engineered Angular-based SPA with AgGrid for high-performance data visualization handling millions of rows. Implemented advanced filtering, sorting, and aggregation capabilities enabling real-time campaign analysis. Architected MongoDB aggregation pipelines for complex multi-dimensional queries with sub-second response times.',
    impact: [
      { metric: '45%', label: 'Improvement in campaign ROI' },
      { metric: '10M+', label: 'Data rows processed in real-time' }
    ],
    keyContributions: [
      'Built advanced data grid with AgGrid supporting virtual scrolling and infinite pagination',
      'Implemented complex filtering logic with saved views and custom column configurations',
      'Developed real-time dashboard with automated anomaly detection and alerting',
      'Optimized MongoDB queries reducing average report generation time from minutes to seconds',
      'Architected Docker-based deployment pipeline enabling horizontal scaling',
      'Designed comprehensive data export functionality supporting CSV, Excel, and PDF formats'
    ],
    tech: ['Angular', 'AgGrid', 'MongoDB', 'Docker'],
    techCategory: 'frontend',
    live: null,
    github: null,
    video: null,
  },
]

// Personal Projects - Side projects, experiments, open source
export const PERSONAL_PROJECTS = [
  {
    title: 'DevFlow',
    domain: 'Developer Tools',
    summary: 'Developer productivity suite with intelligent code snippet management and workflow automation.',
    problem: 'Developers waste significant time context-switching between documentation, code editors, and terminal windows. Repetitive tasks lack automation, and valuable code snippets get scattered across files, notes, and memory, reducing productivity and increasing cognitive load.',
    solution: 'Built Electron-based desktop application with integrated terminal, snippet manager, and workflow automation engine. Implemented SQLite for local-first data persistence with full-text search capabilities. Designed Tailwind-powered UI optimized for keyboard-driven workflows and minimal visual distraction.',
    impact: [
      { metric: '40%', label: 'Reduction in context switching' },
      { metric: '500+', label: 'Code snippets organized and searchable' }
    ],
    keyContributions: [
      'Architected cross-platform desktop application using Electron with native OS integrations',
      'Implemented intelligent code snippet categorization with tag-based organization',
      'Built integrated terminal with command history and customizable shell configurations',
      'Developed workflow automation system with trigger-based script execution',
      'Designed SQLite schema with full-text search indices for instant snippet retrieval',
      'Created customizable keyboard shortcuts for friction-free snippet access'
    ],
    tech: ['React', 'Electron', 'SQLite', 'Tailwind'],
    techCategory: 'frontend',
    live: '#',
    github: 'https://github.com/yourusername/devflow',
    video: null,
  },
  {
    title: 'Ghanshyam Maharaj APP backend',
    domain: 'DevOps & Monitoring',
    summary: 'Service health monitoring system tracking uptime, performance metrics, and error rates across API endpoints.',
    problem: 'Microservices architectures lack centralized health monitoring, making it difficult to identify performance degradation before it impacts users. Manual endpoint checking is time-consuming, while delayed incident detection leads to extended downtime and revenue loss.',
    solution: 'Engineered Node.js backend with scheduled health checks polling multiple endpoints at configurable intervals. Implemented MongoDB time-series collections for efficient metric storage and historical trend analysis. Built alerting system with threshold-based notifications for anomaly detection.',
    impact: [
      { metric: '99.5%', label: 'Uptime tracking accuracy' },
      { metric: '<30s', label: 'Average incident detection time' }
    ],
    keyContributions: [
      'Developed scalable health check scheduler supporting 100+ concurrent endpoint monitors',
      'Implemented time-series data storage with automatic aggregation and retention policies',
      'Built RESTful API exposing real-time and historical performance metrics',
      'Designed threshold-based alerting with email and webhook notifications',
      'Optimized database queries for sub-second dashboard load times with millions of data points',
      'Architected horizontally scalable architecture supporting multi-region deployments'
    ],
    tech: ['Node.js', 'Express', 'MongoDB'],
    techCategory: 'backend',
    live: '#',
    github: 'https://github.com/yourusername/api-monitor',
    video: null,
  },
  {
    title: 'Portfolio Website',
    domain: 'Web Development',
    summary: 'High-performance developer portfolio showcasing projects with modern design and optimized user experience.',
    problem: 'Generic portfolio templates fail to communicate technical depth and professional quality. Slow load times, poor mobile responsiveness, and lack of personality make portfolios forgettable, reducing interview callbacks and client inquiries.',
    solution: 'Engineered custom React SPA with Vite for lightning-fast builds and optimal bundle size. Implemented CSS Modules for scoped styling preventing conflicts and enabling maintainable design system. Architected component-driven architecture with React Router for smooth page transitions and SEO-friendly routing.',
    impact: [
      { metric: '<1s', label: 'Initial page load time' },
      { metric: '95+', label: 'Lighthouse performance score' }
    ],
    keyContributions: [
      'Architected component-based design system with reusable, composable UI elements',
      'Implemented route-based code splitting reducing initial bundle size by 60%',
      'Designed responsive layout system supporting mobile, tablet, and desktop breakpoints',
      'Optimized image loading with lazy loading and modern format support (WebP, AVIF)',
      'Built custom dark theme with CSS variables and smooth transitions',
      'Implemented error boundaries and loading states for robust user experience'
    ],
    tech: ['React', 'Vite', 'CSS Modules', 'React Router'],
    techCategory: 'frontend',
    live: '#',
    github: 'https://github.com/yourusername/portfolio',
    video: null,
  },
]

export const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]
