import styles from './Content.module.css'

const YOUTUBE_VIDEOS = [
  {
    id: 1,
    title: 'Building a Full Stack App with MERN',
    thumbnail: '🎥',
    views: '10K',
    duration: '24:15',
    url: 'https://youtube.com/@ruchit', // Update with actual URL
  },
  {
    id: 2,
    title: 'Next.js 14 Complete Tutorial',
    thumbnail: '🚀',
    views: '8.5K',
    duration: '32:40',
    url: 'https://youtube.com/@ruchit',
  },
  {
    id: 3,
    title: 'React Hooks Deep Dive',
    thumbnail: '⚛️',
    views: '12K',
    duration: '18:30',
    url: 'https://youtube.com/@ruchit',
  },
  {
    id: 4,
    title: 'MongoDB Performance Tips',
    thumbnail: '🍃',
    views: '6.2K',
    duration: '15:20',
    url: 'https://youtube.com/@ruchit',
  },
]

const INSTAGRAM_POSTS = [
  {
    id: 1,
    type: 'reel',
    thumbnail: '📱',
    caption: 'Quick coding tip: Array methods explained',
    likes: '2.3K',
    url: 'https://instagram.com/ruchit.codes', // Update with actual URL
  },
  {
    id: 2,
    type: 'post',
    thumbnail: '💡',
    caption: 'How I organize my VS Code workspace',
    likes: '1.8K',
    url: 'https://instagram.com/ruchit.codes',
  },
  {
    id: 3,
    type: 'reel',
    thumbnail: '🔥',
    caption: 'React performance optimization tricks',
    likes: '4.1K',
    url: 'https://instagram.com/ruchit.codes',
  },
  {
    id: 4,
    type: 'post',
    thumbnail: '✨',
    caption: 'My developer setup tour 2024',
    likes: '3.5K',
    url: 'https://instagram.com/ruchit.codes',
  },
]

const STATS = [
  { number: '425K+', label: 'Total Views', icon: '👁️' },
  { number: '1.05K+', label: 'Subscribers', icon: '📺' },
  { number: '1.2K+', label: 'Followers', icon: '📱' },
  { number: '225+', label: 'Videos & Posts', icon: '🎬' },
]

export default function Content() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>— CONTENT CREATION</div>
        <h2 className={styles.heading}>YouTube & <span className={styles.accent}>Instagram</span></h2>

        <p className={styles.intro}>
          Beyond development, I'm passionate about sharing knowledge and creating content that helps developers learn and grow. From in-depth tutorials to quick coding tips, I cover everything from frontend frameworks to backend architecture.
        </p>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* YouTube Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <span className={styles.platformIcon}>
                <svg viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
              <div>
                <h3>YouTube Channel</h3>
                <p>Web Development Tutorials & Tips</p>
              </div>
            </div>
            <a 
              href="https://youtube.com/@ruchitkukadiya" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.channelBtn}
            >
              Subscribe →
            </a>
          </div>

          {/* <div className={styles.videoGrid}>
            {YOUTUBE_VIDEOS.map((video) => (
              <a 
                key={video.id} 
                href={video.url} 
                target="_blank" 
                rel="noreferrer" 
                className={styles.videoCard}
              >
                <div className={styles.videoThumbnail}>
                  <span className={styles.thumbnailEmoji}>{video.thumbnail}</span>
                  <span className={styles.videoDuration}>{video.duration}</span>
                </div>
                <div className={styles.videoInfo}>
                  <h4 className={styles.videoTitle}>{video.title}</h4>
                  <div className={styles.videoMeta}>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </a>
            ))}
          </div> */}
        </div>

        {/* Instagram Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <span className={styles.platformIcon}>
                <svg viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </span>
              <div>
                <h3>Instagram</h3>
                <p>Quick Tips, Reels & Behind the Scenes</p>
              </div>
            </div>
            <a 
              href="https://instagram.com/ruchit.kukadiya" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.channelBtn}
            >
              Follow →
            </a>
          </div>

          {/* <div className={styles.instaGrid}>
            {INSTAGRAM_POSTS.map((post) => (
              <a 
                key={post.id} 
                href={post.url} 
                target="_blank" 
                rel="noreferrer" 
                className={styles.instaCard}
              >
                <div className={styles.instaThumbnail}>
                  <span className={styles.thumbnailEmoji}>{post.thumbnail}</span>
                  {post.type === 'reel' && (
                    <span className={styles.reelBadge}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                        <path d="M12.823 1l2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 011.596 2.82l.07.295h-4.629L15.15 1zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 013.942-4.53zm9.735 12.834l-4.545-2.624a.909.909 0 00-1.356.668l-.008.12v5.248a.91.91 0 001.255.84l.109-.053 4.545-2.624a.909.909 0 00.1-1.507z"/>
                      </svg>
                    </span>
                  )}
                </div>
                <div className={styles.instaInfo}>
                  <p className={styles.instaCaption}>{post.caption}</p>
                  <div className={styles.instaLikes}>
                    <span>❤️ {post.likes}</span>
                  </div>
                </div>
              </a>
            ))}
          </div> */}
        </div>

        {/* CTA */}
        {/* <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Let's Connect!</h3>
          <p className={styles.ctaText}>
            Follow me for regular updates on web development, coding tutorials, and tech insights.
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://youtube.com/@ruchit" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              📺 YouTube
            </a>
            <a href="https://instagram.com/ruchit.codes" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              📱 Instagram
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}
