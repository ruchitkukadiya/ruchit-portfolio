import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  // const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  // const [sent, setSent] = useState(false)

  // const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setSent(true)
  //   setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 4000)
  // }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>— GET IN TOUCH</div>
        <h2 className={styles.heading}>Let's <span className={styles.accent}>Connect</span></h2>

        <div className={styles.grid}>
          {/* Left info */}
          <div className={styles.info}>
            <p className={styles.infoText}>
              Open to full-time roles, freelance projects, or collaboration.
              Let’s build scalable and impactful products together.
            </p>

            {[
              { icon: '📧', label: 'Email', value: 'ruchitkukadiya111@gmail.com', href: 'mailto:ruchitkukadiya111@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+91 97239 60295', href: 'tel:+919723960295' },
              { icon: '📍', label: 'Location', value: 'Ahmedabad, Gujarat, India', href: '#' },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} className={styles.contactItem}>
                <span className={styles.contactIcon}>{icon}</span>
                <div>
                  <div className={styles.contactLabel}>{label}</div>
                  <div className={styles.contactValue}>{value}</div>
                </div>
              </a>
            ))}

            <div className={styles.socials}>
              <a href="https://github.com/ruchitkukadiya" target="_blank" rel="noreferrer" className={styles.socialBtn}>GitHub</a>
              <a href="https://in.linkedin.com/in/ruchit-kukadiya" target="_blank" rel="noreferrer" className={styles.socialBtn}>LinkedIn</a>
              <a href="https://drive.google.com/file/d/1ZRWAOVy9nmh97oo6TknNJslHUDUaZ6ME/view?usp=sharing" target="_blank" rel="noreferrer" className={styles.socialBtn}>Resume/CV</a>
            </div>
          </div>

          {/* Form */}
          {/* <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Your Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className={styles.field}>
                <label>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
              </div>
            </div>
            <div className={styles.field}>
              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry" />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell me about your project or idea..." required />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={sent}>
              {sent ? '✅ Message Sent!' : 'Send Message →'}
            </button>
          </form> */}
        </div>
      </div>
    </div>
  )
}
