# Quick Start Guide - Arun Sankar B Portfolio

Complete step-by-step guide to get your portfolio up and running in 15 minutes.

## ⚡15-Minute Quick Start

### Step 1: Install Dependencies (2 minutes)
```bash
# Navigate to project directory
cd arun-sankar-portfolio

# Install all dependencies
npm install
```

Wait for installation to complete (~50-60 seconds).

### Step 2: Add Your Assets (3 minutes)
These files are needed (placeholders exist if not present):

1. **Profile Photo**: `public/profile.jpg`
   - Size: 240px × 300px minimum
   - Format: JPG or PNG
   - Can use any professional photo

2. **Resume**: `public/resume.pdf`
   - Optional, but recommended
   - Any resume in PDF format works

3. **About Photo** (optional): `public/about.jpg`
   - Size: Any size, will be cropped

**Placeholder files already exist, so you can skip this or update later!**

### Step 3: Start Development Server (1 minute)
```bash
npm run dev
```

Your portfolio will automatically open at `http://localhost:3000`

### Step 4: Customize Content (5-10 minutes)

**Easy replacements using Find & Replace (Ctrl+H):**

1. **Replace all instances of:**
   - `yourusername` → your GitHub username
   - `your.email@example.com` → your actual email
   - `+919999999999` → your phone number

2. **Edit data files** (5 minutes total):
   - `src/data/skills.ts` - Your skills
   - `src/data/projects.ts` - Your projects
   - `src/data/experiences.ts` - Your internships
   - `src/data/education.ts` - Your education

3. **Update hero section text**:
   - Currently says "Arun Sankar B" and "Java Full Stack Developer"
   - Change to your name and role in `src/sections/Hero.tsx` (optional)

### Step 5: Build & Deploy (2-3 minutes)

**For Vercel (Recommended):**
```bash
npm run build
# Follow steps in DEPLOYMENT.md for Vercel
```

---

## 📁 Key Files to Understand

| File | Purpose | Edit for... |
|------|---------|-------------|
| `src/data/skills.ts` | Skills list | Adding/removing skills |
| `src/data/projects.ts` | Project cards | Adding projects |
| `src/data/experiences.ts` | Internships | Adding internships |
| `src/data/education.ts` | Education | Degrees & certs |
| `src/sections/Hero.tsx` | Welcome section | Profile intro text |
| `src/components/Navbar.tsx` | Navigation bar | Nav links & resume |
| `index.html` | Meta tags & SEO | Page title & meta |

---

## 🎨 Customization Examples

### Change Your Name in Hero
**File:** `src/sections/Hero.tsx`

Find:
```jsx
<h1>Hi, I'm <span className="gradient-text">Arun Sankar B</span></h1>
```

Replace with:
```jsx
<h1>Hi, I'm <span className="gradient-text">Your Name</span></h1>
```

### Add a New Skill
**File:** `src/data/skills.ts`

Add to the array:
```typescript
{ name: 'New Skill', category: 'Frontend' }
```

### Add a New Project
**File:** `src/data/projects.ts`

```typescript
{
  id: 3,
  title: 'My New Project',
  description: 'Short description',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/username/project',
  highlights: ['Feature 1', 'Feature 2']
}
```

---

## 🔗 Quick Links to Update

Use Find & Replace (Ctrl+H) to update:

| Replace | With |
|---------|------|
| `yourusername` | Your GitHub username |
| `your.email@example.com` | Your real email |
| `+919999999999` | Your phone +91XXXXXXXXXX |
| `Your University Name` | Your actual university |
| `Your School Name` | Your actual school |

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] All social links point to real profiles
- [ ] Email is correct (appears 2+ times)
- [ ] Phone number is correct
- [ ] Projects added (at least 2)
- [ ] Resume uploaded to `public/resume.pdf`
- [ ] Profile image looks good
- [ ] Skills updated
- [ ] No placeholder text remaining
- [ ] Run `npm run build` successfully
- [ ] Test on mobile (Ctrl+Shift+M in browser)
- [ ] All links work (click each link)
- [ ] Contact form works

---

## 🐛 Quick Troubleshooting

### Issue: "Port 3000 already in use"
```bash
# Use a different port
npm run dev -- --port 3001
```

### Issue: "Images not showing"
- Ensure images are in `/public` folder
- Use `/image.jpg` format (forward slash, not backslash)
- Check file extensions match

### Issue: "npm install fails"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Build fails"
```bash
npm run build -- --debug
# Check error messages carefully
```

---

## 📱 Testing

### Test on Your Phone
```bash
# Get your PC's IP address
ipconfig  # Windows
ifconfig  # Mac/Linux

# Visit: http://YOUR_IP:3000 on phone
```

### Test Responsive Design
- Press F12 in browser
- Click phone icon (top-left)
- Test on mobile, tablet, desktop

### Test Dark Mode
- Click moon icon in navbar
- Check if light mode works

### Test Links
- Click all navigation links
- Test social media links
- Try resume download
- Fill & submit contact form

---

## 🚀 Deployment Paths

### Path A: Easiest (Vercel)
```bash
1. npm run build
2. Go to vercel.com
3. Click "Import Git Repository"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! Live in 2 minutes
```

### Path B: GitHub Pages
```bash
1. npm run build
2. Push dist/ to gh-pages branch
3. Enable GitHub Pages in settings
4. Live at yourusername.github.io
```

### Path C: Netlify
```bash
1. npm run build
2. Drag dist/ folder to netlify.com
3. Live in 30 seconds
```

**Recommended: Path A (Vercel)** - Free, fast, automatic updates!

---

## 📚 Learning Resources

Need help with:
- **React**: [react.dev](https://react.dev)
- **Tailwind**: [tailwindcss.com](https://tailwindcss.com/docs)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org/docs/)
- **Vite**: [vitejs.dev](https://vitejs.dev/guide/)

---

## 📞 Need Help?

**Common Questions:**

Q: Can I use my own resume?
A: Yes! Replace `public/resume.pdf` with your resume

Q: How do I change colors?
A: Edit `tailwind.config.js` - look for the `colors` section

Q: Can I add more sections?
A: Yes! Copy a section file from `src/sections/` and modify

Q: How long to deploy?
A: 2-3 minutes with Vercel after creation

---

## 🎯 Next Steps After Launch

1. **Add to professional profiles:**
   - LinkedIn resume section
   - GitHub profile
   - Email signature

2. **Share link:**
   - Tweet about it
   - Share on LinkedIn
   - Send to recruiters

3. **Keep it updated:**
   - Add new projects weekly
   - Update skills monthly
   - Refresh resume quarterly

4. **Monitor:**
   - Check Google Analytics
   - Watch for broken links
   - Monitor form submissions

---

## 💡 Pro Tips

1. **Update Projects Often**: Add a project every month!
2. **Request Feedback**: Share with friends for feedback
3. **Fix Issues Early**: Check Lighthouse score (target: 95+)
4. **Monitor Visitors**: Add Google Analytics
5. **Keep It Fresh**: Update content every 3 months

---

## Video Walkthrough (Optional)

No video yet, but you can:
1. Record yourself building it
2. Upload to YouTube
3. Share the link

---

**Questions?** 
- Check README.md for detailed docs
- Check DEPLOYMENT.md for deployment help
- Check ASSETS.md for image optimization
- Check SEO.md for performance tips

**You've got this! 🚀 Deploy now and start getting opportunities!**
