import { useState, useEffect } from 'react'
import styles from './Home.module.css'

export default function Home({ onNavigate }) {
  const [imageStatus, setImageStatus] = useState('loading') // 'loading' | 'loaded' | 'error'
  
  const techStack = [
    { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Angular'] },
    { label: 'Backend', items: ['Node.js', 'Express', 'Nest'] },
    { label: 'AI Tools', items: ['Copilot', 'Claude', 'Cursor'] },
    { label: 'Cloud & Database', items: ['MySQL', 'MongoDB' ,'Firebase', 'Supabase', 'AWS'] },
  ]

  useEffect(() => {
    const img = new Image()
    img.src = '/photo.jpg'

    img.onload = () => {
      setImageStatus('loaded')
    }

    img.onerror = () => {
      setImageStatus('error')
    }
  }, [])

  return (
    <div className={styles.hero}>
      {/* Radial background glow */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGlowRight} />

      <div className={styles.inner}>
        {/* Left content */}
        <div className={styles.content}>
          {/* Badge line */}
          <div className={styles.badge}>
            <span className={styles.badgeLine} />
            SOFTWARE ENGINEER • FULL STACK • AI ENTHUSIAST
            <span className={styles.badgeLine} />
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Ruchit Kukadiya<br />
            <span className={styles.accentText}>AI-AUGMENTED</span><br />
            FULL STACK DEVELOPER
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Full Stack Engineer with 4+ years experience building scalable applications and AI-augmented development workflows. Focused on performance, maintainable architecture, and shipping production-ready systems with faster development and creative solutions.
          </p>

          {/* Location */}
          <div className={styles.location}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>Ahmedabad, India</span>
            <span className={styles.locationDot}>•</span>
            <span className={styles.locationRemote}>Remote Friendly</span>
          </div>

          {/* CTA buttons */}
          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => onNavigate('projects')}
            >
              ✦ VIEW MY WORK
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => onNavigate('contact')}
            >
              Contact Me
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => onNavigate('resume')}
            >
              Download Resume
            </button>
          </div>

          {/* Tech stack */}
          <div className={styles.techStack}>
            {techStack.map((category, idx) => (
              <div key={idx} className={styles.techCategory}>
                <span className={styles.techLabel}>{category.label}:</span>
                <span className={styles.techItems}>
                  {category.items.map((tech, i) => (
                    <span key={tech}>
                      <span className={styles.techItem}>{tech}</span>
                      {i < category.items.length - 1 && <span className={styles.techDot}> • </span>}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - profile card */}
        <div className={styles.cardArea}>
          <div className={styles.profileCard}>
            {/* Card header label */}
            <div className={styles.cardHeader}>
              Building scalable systems with AI-accelerated development workflows.
            </div>

            {/* Profile image placeholder */}
            <div className={styles.profileImageWrap}>
              <div className={styles.profileImagePlaceholder}>
                {imageStatus === 'loading' && (
                  <div className={styles.avatarIcon}>
                    <div className={styles.loader}></div>
                    <p>Loading...</p>
                  </div>
                )}

                {imageStatus === 'loaded' && (
                  <img src="/photo.jpg" alt="Ruchit Kukadiya" />
                )}

                {imageStatus === 'error' && (
                  <div className={styles.avatarIcon}>
                    <svg viewBox="0 0 100 100" width="90" height="90" fill="none">
                      <circle cx="50" cy="35" r="22" fill="#f59e0b" opacity="0.3" />
                      <ellipse cx="50" cy="85" rx="35" ry="22" fill="#f59e0b" opacity="0.2" />
                      <circle cx="50" cy="35" r="18" fill="#f59e0b" opacity="0.5" />
                      <ellipse cx="50" cy="82" rx="28" ry="16" fill="#f59e0b" opacity="0.35" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Vertical text */}
              {/* <div className={styles.verticalText}>SOFTWARE DEVELOPER PORTAL</div> */}
            </div>

            {/* Play button */}
            {/* <button className={styles.playBtn} title="Watch Introduction">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button> */}

            {/* Name badge at bottom */}
            <div className={styles.nameBadge}>
              <div className={styles.nameBadgeStar}>⭐</div>
              <div>
                <div className={styles.nameBadgeName}>4+ Years Experience</div>
                <div className={styles.nameBadgeTitle}>15+ Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
