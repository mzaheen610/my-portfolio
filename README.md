# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS to showcase my projects and skills. Features smooth animations with Framer Motion, a projects carousel/grid, and contact form integration.

## ✨ Features

- **Responsive Design** — Works seamlessly on all devices (mobile, tablet, desktop)
- **Interactive Hero Section** — Animated code display with typewriter effect
- **Projects Showcase** — Grid layout with filterable projects by category
- **About Section** — Professional bio, skills breakdown, and experience timeline
- **Contact Section** — Functional contact form with success feedback
- **Smooth Animations** — Framer Motion animations throughout
- **Dark Theme** — Modern dark UI with blue accent colors
- **SEO Ready** — Structure ready for SEO optimization
- **Analytics** — Vercel Analytics integration

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS 3.4
- **Animations**: Framer Motion 12.4
- **Utilities**: React Router DOM, React Typewriter
- **Code Display**: React Code Blocks
- **Deployment**: Ready for Vercel, Netlify, GitHub Pages
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with code display
│   │   ├── Projects.jsx        # Projects grid with filtering
│   │   ├── About.jsx           # About, skills, and experience
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer component
│   │   └── ui/
│   │       └── Button.jsx      # Reusable button component
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── images/                 # Project screenshots
├── tailwind.config.js          # TailwindCSS config
├── vite.config.js              # Vite config
└── package.json                # Dependencies

```

## 📝 Project Progress & Roadmap

### ✅ Completed:
- Navbar with smooth navigation and mobile menu
- Hero section with animated code display
- Projects section with grid layout and category filtering
- About section with skills and experience
- Contact form with validation
- Footer
- Responsive design
- Dark theme with TailwindCSS

### 🚧 In Progress:
- Adding project images
- Setting up Firebase for content management

### 🛠️ Future Enhancements:
- Firebase integration for dynamic content
- Blog section with markdown support
- Project filtering by tech stack
- Search functionality
- Performance optimizations
- SEO improvements (meta tags, sitemap)
- Deployment automation
- Custom domain setup
- Social media integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The site will open at `http://localhost:5173`

## 🎨 Customization

### Adding Project Images

1. Place your project screenshots in `/public/images/`
2. Update the project data in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    name: "Your Project Name",
    description: "Project description",
    longDescription: "Detailed project description",
    techStack: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/...",
    demo: "https://demo-link.com",
    image: "/images/your-project.png",  // Add path here
    category: "fullstack"  // or "ml", "frontend", "backend"
  },
  // Add more projects...
];
```

### Updating Personal Information

**Navbar:**
- Edit the name in `src/components/Navbar.jsx`

**Hero Section:**
- Update the title and description in `src/components/Hero.jsx`
- Replace code snippet if needed

**About Section:**
- Update bio, skills, and experience in `src/components/About.jsx`
- Modify the stats numbers
- Update social links

**Contact Section:**
- Update contact email and social links in `src/components/Contact.jsx`
- Configure form submission (see "Connecting Contact Form" below)

### Connecting Contact Form

Currently, the contact form logs data to the console. To send emails, integrate a service:

**Option 1: Formspree (Recommended for simplicity)**
```bash
npm install @formspree/react
```

Update `Contact.jsx`:
```javascript
import { useForm, ValidationError } from "@formspree/react";

const handleSubmit = (e) => {
  e.preventDefault();
  state.submit(formData);
  // Handle success
};
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3: Firebase Cloud Functions**
Set up Firebase backend for email handling.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Deploy with one click

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify, or:
   - Connect your GitHub repo
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: "/repository-name/",
  // ... rest of config
}
```

2. Build and deploy:
```bash
npm run build
npm run deploy  # if configured
```

## 🧪 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive using TailwindCSS breakpoints.

## 🎯 Best Practices

- Keep project descriptions concise but informative
- Use high-quality screenshots (1200x800px recommended)
- Ensure GitHub links are valid
- Test contact form before deploying
- Optimize images before uploading
- Keep social links updated

## 🐛 Troubleshooting

**Images not loading:**
- Ensure images are in `/public/images/` folder
- Check file names match exactly in Projects.jsx
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Form not submitting:**
- Check browser console for errors
- Ensure you've set up email service integration
- Test form locally with `npm run dev`

**Animations not smooth:**
- Clear browser cache
- Check GPU acceleration is enabled
- Reduce number of simultaneous animations if on low-end device

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📧 Contact

For questions or collaborations, reach out through the contact form on the portfolio or email directly.

---

**Last Updated:** April 15, 2026
**Version:** 1.0.0
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/     # React components
│   ├── assets/        # Static assets
│   ├── styles/        # CSS and Tailwind styles
│   ├── pages/         # Different sections (Home, Projects, Blog, Contact)
├── public/            # Public assets
└── index.html         # Entry point
```

## Contribution & Feedback

This portfolio is an evolving project. If you have any suggestions or improvements, feel free to share them. Open an issue to discuss potential enhancements.

## License

MIT License - Use this as inspiration or adapt it for your own portfolio!

