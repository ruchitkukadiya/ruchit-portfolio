import { useEffect, useState } from 'react'
import styles from './CertificateModal.module.css'

export default function CertificateModal({ certificate, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10)

    // ESC key handler
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(certificate.image)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const handleExternalLink = () => {
    if (certificate.externalUrl) {
      window.open(certificate.externalUrl, '_blank', 'noopener,noreferrer')
    }
  }

  if (!certificate) return null

  return (
    <div 
      className={`${styles.backdrop} ${isVisible ? styles.visible : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.modal} ${isVisible ? styles.modalVisible : ''}`}>
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

        {/* Certificate Image */}
        <div 
          className={`${styles.imageContainer} ${isZoomed ? styles.zoomed : ''}`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className={styles.image}
          />
          {!isZoomed && (
            <div className={styles.zoomHint}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              Click to zoom
            </div>
          )}
        </div>

        {/* Certificate Details */}
        <div className={styles.details}>
          <h3 className={styles.title}>{certificate.title}</h3>
          <div className={styles.meta}>
            <span className={styles.company}>{certificate.company}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.period}>{certificate.period}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button 
            className={styles.btnDownload}
            onClick={handleDownload}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download
          </button>
          {certificate.externalUrl && (
            <button 
              className={styles.btnExternal}
              onClick={handleExternalLink}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              View Original
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
