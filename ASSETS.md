# Asset Configuration Guide

## 📸 Images

### Profile Image (Hero Section)
**File:** `public/profile.jpg`
**Recommended specs:**
- Size: 800 × 1000 pixels
- Format: JPG or WebP
- File size: 80-150 KB (optimized)
- Aspect ratio: 4:5
- Quality: 85% JPEG quality

**Tips:**
- Professional headshot recommended
- Good lighting, clean background
- Crop to show shoulders and head
- Use sites like:
  - TinyPNG for compression
  - CloudConvert for WebP conversion

### About Section Image
**File:** `public/about.jpg`
**Recommended specs:**
- Size: 800 × 900 pixels
- Format: JPG or WebP
- File size: 80-150 KB (optimized)
- Aspect ratio: 8:9
- Quality: 85% JPEG quality

**Tips:**
- Can be casual or professional
- Different from profile photo
- Show personality
- Good for connecting with visitors

### Optimizing Images Online

**Tools:**
1. **TinyPNG** (tinypng.com)
   - Drag and drop images
   - Reduces size 50-80%
   - WebP format available

2. **ImageOptim** (imageoptim.com)
   - Lossless compression
   - Batch processing

3. **Squoosh** (squoosh.app)
   - Advanced compression
   - Side-by-side comparison

4. **CloudConvert** (cloudconvert.com)
   - Convert to WebP
   - Batch convert

**Local Tools:**
```bash
# Using ImageMagick
convert profile.jpg -quality 85 profile-optimized.jpg

# Using FFMPEG
ffmpeg -i profile.jpg -q:v 6 profile-optimized.jpg
```

---

## 📄 Resume PDF

**File:** `public/resume.pdf`

**Recommended specs:**
- A4 size (210 × 297 mm)
- 1-2 pages maximum
- 150-300 KB file size
- Readable fonts (Arial, Calibri, etc.)
- Include:
  - Contact information
  - Professional summary
  - Experience
  - Education
  - Skills
  - Projects (optional)

**Resume Tools:**
- Canva (canva.com/resumes) - Free templates
- Overleaf (overleaf.com) - LaTeX resumes
- Google Docs - Easy sharing
- Microsoft Word - Professional templates

**Export tips:**
1. Use "Export as PDF" option
2. Set margins to 0.5-1 inch
3. Keep formatting consistent
4. Test on mobile view

**Resume Best Practices:**
- Keep it ATS-friendly (no images, clean formatting)
- Use standard fonts
- Include quantifiable achievements
- Match keywords from job descriptions
- Keep fonts 10-12pt
- Use clear section headers

---

## 🎨 Favicon & App Icons

### Favicon (Optional but recommended)

**File:** `public/favicon.ico`

**Steps:**
1. Design a 512×512 PNG
2. Go to [favicon-generator.org](https://www.favicon-generator.org)
3. Upload your image
4. Download generated files
5. Add to `public/` folder

**Update HTML:**
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### Social Media Image (OG Image)

**File:** `public/og-image.jpg`
**Specs:**
- Size: 1200 × 630 pixels
- Format: JPG
- File size: < 200 KB
- Include: Your photo + name + title

**Used for:**
- LinkedIn shares
- Twitter/X shares
- Facebook shares
- WhatsApp preview

**Tools:**
- Canva (free templates)
- Adobe Express
- Remove.bg background remover

Create a nice banner with:
- Your name prominently
- "Full Stack Developer" title
- Subtle background
- Your professional photo

---

## 🔗 Updating Links & Contact

### Important Files to Update

**1. Navbar Component** (`src/components/Navbar.tsx`)
- Resume PDF download link
- Navigation smooth scroll

**2. Hero Section** (`src/sections/Hero.tsx`)
- Resume download button
- Social media links:
  - GitHub
  - LinkedIn
  - LeetCode

**3. Contact Section** (`src/sections/Contact.tsx`)
- Email address (2 places)
- Phone number
- Location
- Social links in form section
- mailto: email

**4. Footer Section** (`src/sections/Footer.tsx`)
- GitHub URL
- LinkedIn URL
- LeetCode URL

**5. Data Files**

**Skills** (`src/data/skills.ts`):
```typescript
export const skills: Skill[] = [
  { name: 'Your Skill', category: 'Programming' },
  // ... more skills
];
```

**Projects** (`src/data/projects.ts`):
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    github: 'https://github.com/yourusername/project',
    // ... more details
  },
];
```

**Experience** (`src/data/experiences.ts`):
```typescript
export const experiences: Experience[] = [
  {
    role: 'Your Role',
    company: 'Company Name',
    duration: 'Date Range',
    // ... more details
  },
];
```

**Education** (`src/data/education.ts`):
```typescript
export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Your University',
    yearOfPassing: '2024',
    // ... more details
  },
];
```

### Find & Replace

Use VS Code Find (Ctrl+H) to replace:
- `yourusername` → your GitHub username
- `Your name` → Arun Sankar B
- `your.email@example.com` → your actual email
- `+919999999999` → your phone number

---

## 📝 Meta Tags & SEO

**File:** `index.html`

Update these meta tags:
```html
<meta name="description" content="Your unique description" />
<meta property="og:title" content="Your Name - Full Stack Developer" />
<meta property="og:description" content="Your description" />
<meta property="og:url" content="YOUR_DOMAIN_URL" />
<meta property="og:image" content="YOUR_DOMAIN_URL/og-image.jpg" />
<meta name="keywords" content="Java, React, Full Stack, Developer" />
<meta name="author" content="Arun Sankar B" />
```

---

## 🚀 Quick Checklist

Before deploying:

- [ ] Replace profile photo at `public/profile.jpg`
- [ ] Replace about photo at `public/about.jpg`
- [ ] Upload resume as `public/resume.pdf`
- [ ] Update all GitHub links
- [ ] Update LinkedIn URL
- [ ] Update email addresses
- [ ] Update phone number
- [ ] Add projects to `src/data/projects.ts`
- [ ] Update skills in `src/data/skills.ts`
- [ ] Update experience in `src/data/experiences.ts`
- [ ] Update education in `src/data/education.ts`
- [ ] Update meta tags in `index.html`
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Test resume download
- [ ] Test contact form
- [ ] Test all social links
- [ ] Check Lighthouse score > 90
- [ ] Set up custom domain
- [ ] Enable HTTPS

---

## 💾 Backup Originals

Keep originals of:
- Original photos (before compression)
- Original resume (Word/PDF)
- Color palette reference
- Font samples

This helps if you need to re-export or modify later.

---

## 📱 Image Size Reference

| Purpose | Width | Height | Aspect | Max Size |
|---------|-------|--------|--------|----------|
| Profile | 800px | 1000px | 4:5 | 150KB |
| About | 800px | 900px | 8:9 | 150KB |
| Project | 800px | 500px | 16:10 | 200KB |
| OG Image | 1200px | 630px | 1.91:1 | 200KB |
| Favicon | 512px | 512px | 1:1 | 50KB |

---

**Pro Tip:** Use a free tool like Cloudinary or Imgix to serve images with automatic optimization and WebP conversion! 🚀
