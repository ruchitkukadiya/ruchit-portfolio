import { useEffect } from 'react'
import styles from './ProjectDetailsModal.module.css'

export default function ProjectDetailsModal({ project, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!project) return null

  const {
    title,
    domain,
    summary,
    problem,
    solution,
    impact,
    keyContributions,
    tech,
    thumbnail,
    live,
    github,
    video,
  } = project

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContainer}>
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className={styles.modalContent}>
          {/* Hero Image */}
          {thumbnail && (
            <div className={styles.heroImage}>
              <img src={thumbnail} alt={title} />
            </div>
          )}

          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.domainBadge}>{domain}</div>
            <h2 className={styles.title}>{title}</h2>
            {summary && <p className={styles.summary}>{summary}</p>}
          </div>

          {/* Links Section - At Top */}
          {(live || github || video) && (
            <section className={styles.linksSection}>
              {live && (
                <a
                  href={live}
                  className={styles.linkButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Product Site
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className={styles.linkButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View Source
                </a>
              )}
              {video && (
                <a
                  href={video}
                  className={styles.linkButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Demo
                </a>
              )}
            </section>
          )}

          {/* Problem Section */}
          {problem && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🎯</span>
                The Challenge
              </h3>
              <p className={styles.sectionText}>{problem}</p>
            </section>
          )}

          {/* Solution Section */}
          {solution && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>⚡</span>
                The Solution
              </h3>
              <p className={styles.sectionText}>{solution}</p>
            </section>
          )}

          {/* Impact Section */}
          {impact && impact.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📈</span>
                Key Impact
              </h3>
              <div className={styles.impactGrid}>
                {impact.map((item, index) => (
                  <div key={index} className={styles.impactCard}>
                    <div className={styles.impactMetric}>{item.metric}</div>
                    <div className={styles.impactLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Contributions */}
          {keyContributions && keyContributions.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🔧</span>
                Key Contributions
              </h3>
              <ul className={styles.contributionsList}>
                {keyContributions.map((contribution, index) => (
                  <li key={index} className={styles.contributionItem}>
                    <span className={styles.bullet}>▸</span>
                    {contribution}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              Tech Stack
            </h3>
            <div className={styles.techTags}>
              {tech.map(t => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
