import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

const EXPERIENCES = [
  {
    role: 'Software Engineer (Full Stack)',
    company: 'Bacancy Technology',
    companyUrl: 'https://www.bacancytechnology.com/',
    location: 'Ahmedabad, Gujarat, India',
    period: 'March 2025 — Present',
    type: 'Full-time',
    // metrics: [
    //   { label: 'Projects Delivered', value: '8+' },
    //   { label: 'Team Size', value: '12' },
    // ],
    points: [
      'Developed scalable full-stack features using React.js, TypeScript, and Node.js for project management and social aggregation platforms.',
      'Implemented end-to-end workflows including lead management, CRM, cost estimation, and e-signature-based contract systems.',
      'Built real-time features using Socket.io for live notifications and improved user interaction.',
      'Created custom DOM parsing and data extraction mechanisms to aggregate multimedia content from multiple social platforms.',
      'Ensured application security with role-based authentication, API integrations, and dynamic PDF generation for business workflows.',
    ],
    techStack: {
      frontend: ['React', 'Next.js', 'TypeScript'],
      backend: ['Node.js','ExpressJS', 'Nest.js','Docker'],
      database: ["MySQL",'PostgreSQL'],
      cloud: ['AWS'],
    },
    achievements: [
      {
        title: 'Team of the Quarter - Q4 2025',
        company: 'Bacancy Technology',
        period: 'Q4 2025',
        externalUrl: 'https://drive.google.com/file/d/1MkqCRK7i1iBT6opbn0p5fVYbt080rmw5/view?usp=sharing',
      },
    ],
  },
  {
    role: 'Software Engineer Level 2',
    company: 'OneClick IT Consultancy P Limited',
    companyUrl: 'https://www.oneclickitsolution.com/',
    location: 'Ahmedabad, Gujarat, India',
    period: 'August 2024 — March 2025',
    type: 'Full-time',
    // metrics: [
    //   { label: 'Load Time', value: '-40%' },
    //   { label: 'Users', value: '50K+' },
    // ],
    points: [
      'Developed a modern travel booking platform with flight search and crypto payment integration using React, Next.js, and TypeScript.',
      'Built responsive and SEO-friendly UI with Next.js, optimizing performance and user experience for large-scale applications.',
      'Designed and implemented admin panel features including user authentication, role management, and CRUD operations for master data.',
      'Integrated real-time functionalities like live location tracking and call management using Socket.IO and Google Maps API.',
      'Collaborated on backend integration with .NET services to handle booking workflows, approvals, and seamless data communication.',
    ],
    techStack: {
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'ExpressJS', 'WebRTC', "CI/CD", ".Net"],
      database: ['MySQL'],
      cloud: [],
    },
    achievements: [
      {
        title: 'Employee of the Quarter - Q1 2025',
        company: 'OneClick IT Consultancy P Limited',
        period: 'Q1 2025',
        image: 'https://drive.google.com/file/d/1Pk8QnS4Wt4lBXs5f-8qaz-z4SoR_KIhA/view?usp=sharing',
      },
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Karmaleen Technology Pvt. Ltd.',
    companyUrl: 'https://karmaleen.com',
    location: 'Ahmedabad, Gujarat, India',
    period: 'January 2022 — August 2024',
    type: 'Full-time',
    // metrics: [
    //   { label: 'Users Served', value: '25K+' },
    //   { label: 'Daily Requests', value: '1M+' },
    // ],
    points: [
      'Developed high-performance frontend modules for an AdOps platform using Angular and AgGrid, enabling efficient data visualization and advertising optimization.',
      'Built scalable and interactive UI components for an AI-powered chatbot, integrating real-time communication using Socket.io and GraphQL APIs.',
      'Implemented features for automated customer support, lead generation, and personalized user interactions to enhance engagement.',
      'Engineered real-time chat and AR-based support interfaces, improving troubleshooting efficiency and reducing operational overhead.',
      'Collaborated with backend teams using Node.js/NestJS and MongoDB to ensure seamless API integration, state management, and data handling.',
    ],
    techStack: {
      frontend: ['Angular' ,'React'],
      backend: ['Node.js', 'Express', 'Socket.io', 'ExpressJS', "NestJS"],
      database: ['MySQL','MongoDB'],
      cloud: ['AWS', 'Azure'],
    },
    achievements: [],
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Shantilal Shah Govt. Engineering College, GTU',
    location: 'Bhavnagar, Gujarat, India',
    period: '2018 – 2022',
    grade: '9.13 CGPA',
    icon: '🎓',
  },
  {
    degree: 'Secondary School Certificate (S.S.C) & Higher Secondary Certificate (H.S.C)',
    institution: 'Gharshala Self Finance School, GSHEB',
    location: 'Bhavnagar, Gujarat, India',
    period: '2016 / 2018',
    grade: 'H.S.C: 70% | S.S.C: 83%',
    icon: '📚',
  },
]

export default function Experience() {
  const timelineRef = useRef(null)
  const itemRefs = useRef([])
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.2,
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate)
          
          // Calculate line progress based on visible items
          const visibleItems = itemRefs.current.filter(item => 
            item && item.classList.contains(styles.animate)
          )
          
          if (visibleItems.length > 0 && timelineRef.current) {
            const lastVisibleItem = visibleItems[visibleItems.length - 1]
            const timelineRect = timelineRef.current.getBoundingClientRect()
            const itemRect = lastVisibleItem.getBoundingClientRect()
            const itemTop = itemRect.top - timelineRect.top
            const progress = Math.min(itemTop + 50, timelineRect.height)
            setLineProgress(progress)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    // Observe all timeline items
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>— MY JOURNEY</div>
        <h2 className={styles.heading}>Experience</h2>
        
        <p className={styles.intro}>
          3+ years building scalable web applications across enterprise and startup environments, 
          with expertise in full-stack development, performance optimization, and cloud architecture.
        </p>

        <div 
          className={styles.timeline} 
          ref={timelineRef}
          style={{ '--line-height': `${lineProgress}px` }}
        >
          {EXPERIENCES.map((exp, i) => (
            <div 
              key={i} 
              className={styles.item}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <div className={styles.timelineDot}>
                <span className={styles.dotInner} />
              </div>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <div className={styles.roleHeader}>
                      <div className={styles.roleInfo}>
                        <div className={styles.roleTitle}>
                          {exp.role} <span className={styles.at}>@</span> <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyName}>{exp.company}</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.location}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {exp.location}
                    </div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.type}>{exp.type}</span>
                  </div>
                </div>
                
                {/* Impact Metrics */}
                {/* {exp.metrics && exp.metrics.length > 0 && (
                  <div className={styles.metricsGrid}>
                    {exp.metrics.map((metric, k) => (
                      <div key={k} className={styles.metricItem}>
                        <div className={styles.metricValue}>{metric.value}</div>
                        <div className={styles.metricLabel}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )} */}
                
                {/* Key Contributions */}
                <div className={styles.contributionsLabel}>Key Contributions</div>
                <ul className={styles.points}>
                  {exp.points.map((p, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.bullet}>▸</span>{p}
                    </li>
                  ))}
                </ul>
                
                {/* Achievement Badges */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={styles.achievementsSection}>
                    <div className={styles.achievementsLabel}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      Achievements
                    </div>
                    <div className={styles.achievementBadges}>
                      {exp.achievements.map((achievement, k) => (
                        <a
                          key={k}
                          href={achievement.externalUrl || achievement.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.achievementBadge}
                          aria-label={`View ${achievement.title} certificate`}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                          </svg>
                          {achievement.title.split(' - ')[0]}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tech Stack - Grouped by Category */}
                <div className={styles.techStackSection}>
                  {exp.techStack.frontend.length > 0 && (
                    <div className={styles.techGroup}>
                      <span className={styles.techCategory}>Frontend:</span>
                      <div className={styles.techTags}>
                        {exp.techStack.frontend.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                      </div>
                    </div>
                  )}
                  {exp.techStack.backend.length > 0 && (
                    <div className={styles.techGroup}>
                      <span className={styles.techCategory}>Backend:</span>
                      <div className={styles.techTags}>
                        {exp.techStack.backend.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                      </div>
                    </div>
                  )}
                  {exp.techStack.database.length > 0 && (
                    <div className={styles.techGroup}>
                      <span className={styles.techCategory}>Database:</span>
                      <div className={styles.techTags}>
                        {exp.techStack.database.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                      </div>
                    </div>
                  )}
                  {exp.techStack.cloud.length > 0 && (
                    <div className={styles.techGroup}>
                      <span className={styles.techCategory}>Cloud:</span>
                      <div className={styles.techTags}>
                        {exp.techStack.cloud.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className={styles.educationSection}>
          <h3 className={styles.subHeading}>Education</h3>
          <div className={styles.eduList}>
            {EDUCATION.map((edu, i) => (
              <div key={i} className={styles.eduCard}>
                <div className={styles.eduIcon}>{edu.icon}</div>
                <div className={styles.eduContent}>
                  <div className={styles.eduDegree}>{edu.degree}</div>
                  <div className={styles.eduInstitution}>{edu.institution}</div>
                  <div className={styles.eduLocation}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {edu.location}
                  </div>
                  <div className={styles.eduMeta}>
                    <span className={styles.eduPeriod}>{edu.period}</span>
                    <span className={styles.eduGrade}>{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.note}>
          <span className={styles.noteIcon}>💼</span>
          <span>References & transcripts available upon request</span>
        </div> */}
      </div>
    </div>
  )
}
