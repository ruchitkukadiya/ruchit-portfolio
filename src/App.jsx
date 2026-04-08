import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import styles from './App.module.css'

// Lazy load all page components
const Home = lazy(() => import('./pages/Home/Home'))
const Skills = lazy(() => import('./pages/Skills/Skills'))
const Experience = lazy(() => import('./pages/Experience/Experience'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const Content = lazy(() => import('./pages/Content/Content'))
const Contact = lazy(() => import('./pages/Contact/Contact'))

// Preload routes on hover/focus for instant navigation
const preloadRoute = (route) => {
  switch (route) {
    case 'home':
      import('./pages/Home/Home')
      break
    case 'projects':
      import('./pages/Projects/Projects')
      break
    case 'experience':
      import('./pages/Experience/Experience')
      break
    case 'skills':
      import('./pages/Skills/Skills')
      break
    case 'contact':
      import('./pages/Contact/Contact')
      break
    case 'content':
      import('./pages/Content/Content')
      break
  }
}

// Loading fallback component
function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <div className={styles.progressBar}>
        <div className={styles.progressBarFill}></div>
      </div>
    </div>
  )
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleNavigate = (page) => {
    navigate(`/${page === 'home' ? '' : page}`)
    if (isMobile) setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePreload = (page) => {
    preloadRoute(page)
  }

  // Get active page from URL
  const activePage = location.pathname === '/' ? 'home' : location.pathname.slice(1)

  return (
    <ErrorBoundary>
      <div className={styles.appWrapper}>
        {/* Mobile backdrop */}
        {isMobile && sidebarOpen && (
          <div className={styles.backdrop} onClick={() => setSidebarOpen(false)} />
        )}

        <Sidebar
          activePage={activePage}
          onNavigate={handleNavigate}
          onPreload={handlePreload}
          isOpen={sidebarOpen}
          isMobile={isMobile}
          onClose={() => setSidebarOpen(false)}
        />

      <div className={`${styles.mainArea} ${isMobile && sidebarOpen ? styles.shifted : ''}`}>
        {/* Mobile top bar */}
        {isMobile && (
          <div className={styles.mobileTopBar}>
            <button
              className={styles.hamburger}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
            <span className={styles.mobileLogo}>
              <span className={styles.dot} />
              <span className={styles.dash}>——</span>
              <span>menu</span>
            </span>
          </div>
        )}

        <main className={styles.pageContent}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home onNavigate={handleNavigate} />} />
              <Route path="/projects" element={<Projects onNavigate={handleNavigate} />} />
              <Route path="/experience" element={<Experience onNavigate={handleNavigate} />} />
              <Route path="/skills" element={<Skills onNavigate={handleNavigate} />} />
              <Route path="/contact" element={<Contact onNavigate={handleNavigate} />} />
              <Route path="/content" element={<Content onNavigate={handleNavigate} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>

      {/* Theme Switcher */}
      <ThemeSwitcher />
    </div>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
