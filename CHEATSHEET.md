# 🚀 Quick Reference Cheat Sheet

## Installation (Copy & Paste)

```bash
# Navigate to project
cd arun-sankar-portfolio

# Install dependencies
npm install

# Start development
npm run dev

# Open browser
http://localhost:3000
```

---

## Common Customizations

### Add a Skill
**File:** `src/data/skills.ts`
```typescript
{ name: 'Your Skill Name', category: 'Frontend' }
```

### Add a Project
**File:** `src/data/projects.ts`
```typescript
{
  id: 3,
  title: 'Project Title',
  description: 'Short description',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/username/repo',
  highlights: ['Feature 1', 'Feature 2']
}
```

### Add Experience
**File:** `src/data/experiences.ts`
```typescript
{
  id: 2,
  role: 'Developer Role',
  company: 'Company Name',
  duration: 'Jan 2024 - Mar 2024',
  achievements: ['Achievement 1', 'Achievement 2']
}
```

### Add Education
**File:** `src/data/education.ts`
```typescript
{
  degree: 'B.Tech in Computer Science',
  institution: 'University Name',
  yearOfPassing: '2024',
  gpa: '8.5/10'
}
```

---

## Quick Find & Replace

Press `Ctrl+H` in VS Code and replace:

| Replace | With |
|---------|------|
| `yourusername` | your-github-username |
| `your.email@example.com` | your-real-email@gmail.com |
| `+919999999999` | +91XXXXXXXXXX |
| `Your University Name` | Your Actual University |
| `Your School Name` | Your Actual School |

---

## Colors (From Design System)

```css
Primary Blue:      #2563EB
Accent Cyan:       #38BDF8
Dark Background:   #020617
Secondary Navy:    #0F172A
```

Edit in: `tailwind.config.js`

---

## File Locations

| Content | File |
|---------|------|
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Experience | `src/data/experiences.ts` |
| Education | `src/data/education.ts` |
| Design Colors | `tailwind.config.js` |
| Global Styles | `src/styles/globals.css` |
| Navigation | `src/components/Navbar.tsx` |
| Hero Text | `src/sections/Hero.tsx` |
| Contact Info | `src/sections/Contact.tsx` |

---

## Build & Deploy

```bash
# Create production build
npm run build

# Test production build locally
npm run preview

# Deploy to Vercel (recommended)
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Click Deploy
# Done! ✅
```

---

## Required Assets

Place in `public/` folder:

```
public/
├── profile.jpg        (240x300px, < 150KB)
├── about.jpg          (800x900px, < 150KB)
└── resume.pdf         (1-2 pages, < 500KB)
```

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Find text | Ctrl+F |
| Find & Replace | Ctrl+H |
| Format code | Ctrl+Shift+P > Format |
| Save file | Ctrl+S |
| Open terminal | Ctrl+` |
| Go to file | Ctrl+P |
| Go to line | Ctrl+G |

---

## NPM Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Check for errors
npm update               # Update dependencies
npm list                 # List installed packages
```

---

## Testing Checklist

- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] Click through all sections
- [ ] Test dark mode toggle
- [ ] Test mobile view (F12)
- [ ] Check all links work
- [ ] Test contact form
- [ ] Test resume download
- [ ] Run `npm run build` (no errors)

---

## SEO Quick Wins

**File:** `index.html`

```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="I build scalable web applications" />
<meta property="og:title" content="Your Name - Developer" />
<meta property="og:description" content="Your short bio" />
```

---

## Performance Tips

1. **Optimize images**: Use TinyPNG.com (< 150KB)
2. **Use WebP format**: Better compression
3. **Lazy load images**: Already implemented ✅
4. **Minimize CSS**: Tailwind handles this ✅
5. **Minimize JS**: Vite handles this ✅

---

## Common Issues Quick Fixes

| Issue | Fix |
|-------|-----|
| Port 3000 in use | Add `-- --port 3001` |
| Styles not loading | Restart dev server |
| Images not showing | Check `/image.jpg` format |
| Links not working | Use `to="section"` not href |
| Build fails | `npm install` then `npm run build` |

---

## Git Commands

```bash
git init                                # Initialize git
git add .                               # Stage all files
git commit -m "Initial commit"          # Create commit
git branch -M main                      # Create main branch
git remote add origin <url>             # Add remote
git push -u origin main                 # Push to GitHub
```

---

## Deployment Links

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: yourname.github.io

---

## Learning Resources

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- TypeScript: https://typescriptlang.org

---

## Documentation Files

- **README.md** - Full documentation
- **QUICKSTART.md** - 15-min setup
- **DEPLOYMENT.md** - Deploy options
- **ASSETS.md** - Image guide
- **SEO.md** - SEO optimization
- **FILES.md** - File structure
- **TROUBLESHOOTING.md** - Issues & fixes
- **PROJECT-SUMMARY.md** - Project overview

---

## Next Steps

```
1. npm install              ← Install
2. npm run dev              ← Test
3. Edit data/*.ts           ← Customize
4. Add images               ← Assets
5. Update links             ← Social URLs
6. npm run build            ← Build
7. Deploy to Vercel         ← Deploy
8. Done! 🎉
```

---

## Support

**Need help?**
- Check TROUBLESHOOTING.md
- Check specific guide (DEPLOYMENT.md, etc.)
- Search error online
- Most issues: restart dev server or clear cache

---

**Remember:** You have a complete, production-ready portfolio website. Just customize it and deploy! 🚀
