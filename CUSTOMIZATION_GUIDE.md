# Portfolio Customization Guide

A quick reference guide to customize your portfolio with your personal information.

## 🎯 Quick Customization Checklist

- [ ] Update name in Navbar
- [ ] Update bio in About section
- [ ] Add project images
- [ ] Update project descriptions
- [ ] Update contact information
- [ ] Add resume PDF
- [ ] Connect contact form
- [ ] Deploy to Vercel/Netlify

---

## 1️⃣ Update Navigation & Branding

**File:** `src/components/Navbar.jsx`

Change the name displayed:
```javascript
<motion.h1
  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
>
  Your Name Here  {/* Change this */}
</motion.h1>
```

---

## 2️⃣ Update Hero Section

**File:** `src/components/Hero.jsx`

Change the main headline:
```javascript
<h1 className="text-4xl font-bold leading-tight mb-4 text-center md:text-left">
  Your Headline Here  {/* Change this */}
</h1>
```

Change typewriter words:
```javascript
<Typewriter
  words={["Your Role 1", "Your Role 2", "Your Role 3"]}
  // Change these words
/>
```

Change the subtitle:
```javascript
<p className="text-gray-400 mb-8 max-w-md text-center md:text-left">
  Your subtitle here  {/* Change this */}
</p>
```

Replace the code snippet with your own by changing the `code` variable.

---

## 3️⃣ Add Project Images

1. **Prepare images:**
   - Size: 1200x800px recommended
   - Format: PNG or JPG
   - Keep file sizes under 500KB
   - Name clearly: `project-name.png`

2. **Add to project:**
   - Place files in `/public/images/` folder
   - Example: `/public/images/my-project.png`

3. **Update Projects.jsx:**
   - Edit `image` field in project object
   - Example: `image: "/images/my-project.png"`

---

## 4️⃣ Update Projects Section

**File:** `src/components/Projects.jsx`

### Add/Edit a Project:

```javascript
{
  id: 1,
  name: "Project Name",
  description: "Short description (2-3 lines)",
  longDescription: "Detailed description of what you built and your role",
  techStack: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/your-username/repo-name",
  demo: "https://project-demo.com",  // or null if no live demo
  image: "/images/project-name.png",
  category: "fullstack"  // "fullstack", "ml", or custom
}
```

### Categories:
- `"fullstack"` → Full Stack Web Development
- `"ml"` → Machine Learning / Data Science
- Create custom categories as needed

---

## 5️⃣ Update About Section

**File:** `src/components/About.jsx`

### Update Bio:
```javascript
<p className="text-gray-300 text-lg mb-4 leading-relaxed">
  Your bio text here - Talk about yourself, your interests, and what drives you.
</p>
```

### Update Skills:
```javascript
const skills = {
  "Frontend": ["React", "Vue", "TailwindCSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL"],
  "Tools": ["Git", "Docker", "AWS"],
  // Add/remove categories and skills
};
```

### Update Experience:
```javascript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2024 - Present",
    description: "What you did and achieved",
  },
  // Add more experience items
];
```

### Update Stats:
```javascript
{ number: "50+", label: "Projects Completed" },
{ number: "3+", label: "Years Experience" },
{ number: "20+", label: "Tech Skills" },
{ number: "10+", label: "Happy Clients" },
```

---

## 6️⃣ Update Contact Section

**File:** `src/components/Contact.jsx`

### Update Contact Email:
```javascript
const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "your-email@example.com",
    link: "mailto:your-email@example.com",
  },
  // Update other contacts similarly
];
```

### Update Social Links:
```javascript
{
  { name: "GitHub", url: "https://github.com/your-username", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "💼" },
  { name: "Twitter", url: "https://twitter.com/your-handle", icon: "🐦" },
}
```

---

## 7️⃣ Set Up Contact Form

The form currently logs to console. Choose one integration:

### Option A: Using Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a form
3. Get your form ID (looks like: `f/abc123def456`)
4. Update Contact.jsx:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });
    
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Error:', error);
  }
  setLoading(false);
};
```

### Option B: Using Firebase

See README.md for Firebase setup instructions.

---

## 8️⃣ Add Resume PDF

1. Create or prepare your resume as PDF
2. Place it in `/public/resume.pdf`
3. The "Download Resume" button in About section will work automatically

---

## 9️⃣ Deploy Your Portfolio

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repo
4. Vercel auto-detects Vite configuration
5. Click "Deploy"
6. Your site is live! 🎉

### Deploy to Netlify

1. Run: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live! 🎉

---

## 🎨 Customization Tips

### Colors
- Blue accent: `bg-blue-600` (TailwindCSS)
- Dark background: `bg-gray-900`
- Edit in classes or use TailwindCSS config

### Typography
- Main font: System default (customizable in `index.css`)
- Sizes: `text-4xl`, `text-2xl`, `text-lg`

### Animations
- Framer Motion controls animations
- Reduce `transition` values for faster animations
- Remove `motion` wrappers to disable animations

### Responsive
- `md:` breakpoint at 768px
- `lg:` breakpoint at 1024px
- Mobile-first approach

---

## 🐛 Troubleshooting

### Images not showing?
- Check file is in `/public/images/` folder
- Verify exact filename matches in code
- Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Check browser console for errors

### Form not working?
- Verify Formspree form ID is correct
- Check email is correct
- Test on deployed site, not localhost
- Check spam folder for test emails

### Styling looks off?
- Clear browser cache
- Rebuild: `npm run build`
- Check TailwindCSS is installed: `npm list tailwindcss`

### Navigation not smooth scrolling?
- Ensure section IDs match nav links
- Check `id="hero"`, `id="projects"`, etc. on sections

---

## 📚 File Reference

| File | Purpose |
|------|---------|
| `Navbar.jsx` | Navigation bar - update name here |
| `Hero.jsx` | Hero section - update headline |
| `Projects.jsx` | Projects grid - add/edit projects |
| `About.jsx` | Bio, skills, experience |
| `Contact.jsx` | Contact form and info |
| `App.jsx` | Main app layout |
| `/public/images/` | Project screenshots folder |
| `/public/resume.pdf` | Your resume |
| `tailwind.config.js` | TailwindCSS configuration |

---

## ✅ Before Going Live

- [ ] All images are optimized
- [ ] All links are correct (GitHub, LinkedIn, etc.)
- [ ] Email address is updated
- [ ] Contact form is tested
- [ ] Resume PDF is added
- [ ] No broken links
- [ ] Mobile view tested
- [ ] Build runs without errors: `npm run build`

---

## 🚀 Ready to Deploy?

```bash
# Final checks
npm run build                    # Build for production
npm run preview                  # Preview locally
git add .
git commit -m "Portfolio customized and ready"
git push origin main

# Then deploy to Vercel or Netlify
```

---

Enjoy your new portfolio! 🎉

For more help, check `README.md` for detailed documentation.
