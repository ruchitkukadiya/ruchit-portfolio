import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectDetailsModal from '../../components/ProjectDetailsModal/ProjectDetailsModal'
import { LIVE_PROJECTS, PERSONAL_PROJECTS, FILTERS } from '../../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  // Filter logic applies across both sections
  const filteredLive = filter === 'all'
    ? LIVE_PROJECTS
    : LIVE_PROJECTS.filter(p => p.techCategory === filter)

  const filteredPersonal = filter === 'all'
    ? PERSONAL_PROJECTS
    : PERSONAL_PROJECTS.filter(p => p.techCategory === filter)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Section Header */}
        <div className={styles.sectionLabel}>— MY WORK</div>
        <h2 className={styles.heading}>
          Featured <span className={styles.accent}>Projects</span>
        </h2>

        <p className={styles.intro}>
          A curated selection of professional client work and personal projects showcasing
          full-stack development expertise, modern architecture patterns, and production-grade solutions.
        </p>

        {/* Category Filters - Works across both sections */}
        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`${styles.filterBtn} ${filter === f.id ? styles.active : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Live Projects Section */}
        {filteredLive.length > 0 && (
          <section className={styles.projectSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚀</span>
              Live Projects
            </h3>
            <div className={styles.grid}>
              {filteredLive.map((project) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Personal Projects Section */}
        {/* {filteredPersonal.length > 0 && (
          <section className={styles.projectSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💡</span>
              Personal Projects
            </h3>
            <div className={styles.grid}>
              {filteredPersonal.map((project) => (
                <ProjectCard 
                  key={project.title} 
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </section>
        )} */}

        {/* Empty State */}
        {filteredLive.length === 0 && filteredPersonal.length === 0 && (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🔍</span>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

// Individual Project Card Component - Case Study Structure
function ProjectCard({ project, onViewDetails }) {
  const { 
    title, 
    domain, 
    summary, 
    problem, 
    solution, 
    impact, 
    tech, 
    thumbnail, 
    live, 
    github, 
    video 
  } = project

  return (
    <div className={styles.card}>
      {/* Visual Anchor - Thumbnail or Placeholder */}
      <div className={styles.cardThumbnail}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} className={styles.thumbnailImage} />
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <span className={styles.placeholderIcon}>📂</span>
          </div>
        )}
      </div>

      {/* Content Area - Case Study Structure */}
      <div className={styles.cardContent}>
        {/* Header: Title & Domain */}
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <span className={styles.domainBadge}>{domain}</span>
        </div>

        {/* Summary - One-line hook */}
        {summary && <p className={styles.cardSummary}>{summary}</p>}

        {/* Key Impact - Show metrics prominently */}
        {impact && impact.length > 0 && (
          <div className={styles.impactMetrics}>
            {impact.map((item, index) => (
              <div key={index} className={styles.metric}>
                <span className={styles.metricValue}>{item.metric}</span>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack - scannable pill badges */}
        <div className={styles.techTags}>
          {tech.map(t => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>

        {/* CTAs - Conditional rendering based on available links */}
        <div className={styles.cardActions}>
          {live && (
            <a
              href={live}
              className={styles.btnSecondary}
              target="_blank"
              rel="noreferrer"
              title="View product site"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Product Site
            </a>
          )}
          {github && (
            <a
              href={github}
              className={styles.btnSecondary}
              target="_blank"
              rel="noreferrer"
              title="View source code"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          )}
          {video && (
            <a
              href={video}
              className={styles.btnSecondary}
              target="_blank"
              rel="noreferrer"
              title="Watch demo video"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Video
            </a>
          )}
          
          {/* View Details Button - Always visible */}
          <button
            className={styles.btnPrimary}
            onClick={onViewDetails}
            title="View full case study"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
