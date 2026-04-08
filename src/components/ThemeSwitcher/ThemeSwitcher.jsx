import { useState, useEffect } from 'react'
import styles from './ThemeSwitcher.module.css'

const THEMES = [
  { id: 'blue', name: 'Blue', color: '#3b82f6' },
  { id: 'amber', name: 'Amber', color: '#f59e0b' },
  { id: 'green', name: 'Green', color: '#10b981' },
  { id: 'purple', name: 'Purple', color: '#a78bfa' },
  { id: 'red', name: 'Red', color: '#ef4444' },
  { id: 'cyan', name: 'Cyan', color: '#06b6d4' },
]

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('blue')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'blue'
    setCurrentTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId)
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem('portfolio-theme', themeId)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(!isOpen)}
        title="Change Theme"
        aria-label="Theme Switcher"
      >
        🎨
      </button>

      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Choose Theme</span>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className={styles.themeGrid}>
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  className={`${styles.themeBtn} ${currentTheme === theme.id ? styles.active : ''}`}
                  onClick={() => changeTheme(theme.id)}
                >
                  <span
                    className={styles.themeColor}
                    style={{ background: theme.color }}
                  />
                  <span className={styles.themeName}>{theme.name}</span>
                  {currentTheme === theme.id && <span className={styles.checkmark}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
