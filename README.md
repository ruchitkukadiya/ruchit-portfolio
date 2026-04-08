# 🚀 Portfolio – React + Vite

A sleek, dark-themed developer portfolio inspired by [mohitsonideveloper.in](https://mohitsonideveloper.in/), built with **React + Vite** and fully responsive.

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg           # Favicon (replace with your own)
├── src/
│   ├── components/
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx   # Left navigation sidebar
│   │       └── Sidebar.module.css
│   ├── pages/
│   │   ├── Home/             # Hero landing section
│   │   ├── About/            # About me + photo
│   │   ├── Skills/           # Tech skills with progress bars
│   │   ├── Experience/       # Work timeline
│   │   ├── Education/        # Degrees + certifications
│   │   ├── Projects/         # Projects grid with filter
│   │   └── Contact/          # Contact form + info
│   ├── styles/
│   │   └── global.css        # CSS variables + reset
│   ├── App.jsx               # Root component + routing
│   ├── App.module.css
│   └── main.jsx              # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🎨 Customization Checklist

### Personal Info
- [ ] `src/pages/Home/Home.jsx` — Change **Your Name**, description, and tech stack pills
- [ ] `src/pages/About/About.jsx` — Update name, email, location, degree
- [ ] `src/pages/Experience/Experience.jsx` — Add your real work experience
- [ ] `src/pages/Education/Education.jsx` — Update your education and certifications
- [ ] `src/pages/Projects/Projects.jsx` — Add your real projects with live/GitHub links
- [ ] `src/pages/Contact/Contact.jsx` — Update email, phone, social links

### Profile Photo
In `src/pages/Home/Home.jsx`, replace the placeholder with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" />
```
Place `your-photo.jpg` in the `public/` folder.

### Colors
Edit `src/styles/global.css` CSS variables:
```css
--accent: #f59e0b;      /* Golden yellow — main accent */
--bg-main: #160e09;     /* Dark brown background */
--bg-sidebar: #111111;  /* Sidebar dark */
```

### Social Links
Update the social links in `src/components/Sidebar/Sidebar.jsx` (bottom) and `src/pages/Contact/Contact.jsx`.

## 🌐 Deployment

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Upload the `dist/` folder to Netlify
```

## 🛠 Tech Stack
- React 18
- Vite 5
- CSS Modules (no extra CSS library needed)
- React Router DOM (for future route-based navigation)
