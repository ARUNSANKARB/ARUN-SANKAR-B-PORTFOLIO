# Troubleshooting Guide - Portfolio Issues & Solutions

## 🔧 Setup Issues

### Issue: `npm install` fails with package errors

**Error Message:** 
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solution:**
```bash
# Option 1: Force legacy dependency resolution
npm install --legacy-peer-deps

# Option 2: Delete and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Option 3: Use Node v18+ (check version)
node --version  # Should be v16+
```

---

### Issue: `Port 3000 already in use`

**Error:** 
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```bash
# Option 1: Use different port
npm run dev -- --port 3001

# Option 2: Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

---

### Issue: `TypeError: cannot find module`

**Error:** 
```
Module not found: Error: Can't resolve 'module-name'
```

**Solution:**
```bash
# Check if dependency is installed
npm list <package-name>

# Install missing package
npm install missing-package

# Reinstall all packages
npm install
```

---

## 🎨 Component & Styling Issues

### Issue: Styles not applying

**Symptoms:**
- Buttons look wrong
- Colors not showing
- Layout broken

**Solutions:**

1. **Clear Tailwind cache:**
   ```bash
   # Remove .next or dist folder
   rm -rf dist
   
   # Rebuild
   npm run build
   npm run dev
   ```

2. **Check tailwind.config.js:**
   ```javascript
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",  // Check this path
   ]
   ```

3. **Restart dev server:**
   ```bash
   # Ctrl+C to stop
   # Then:
   npm run dev
   ```

4. **Clear browser cache:**
   - Press Ctrl+Shift+Delete
   - Clear "images and files"

---

### Issue: Tailwind class not working

**Example:** `text-gradient` not working

**Solution:**
- Check class is defined in `src/styles/globals.css`
- Check `@apply` syntax is correct
- Restart dev server
- Use valid Tailwind classes

**Common invalid:**
```css
/* ❌ Wrong */
@apply text-gradient;

/* ✅ Right */
.gradient-text {
  background: linear-gradient(...);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

### Issue: Component not rendering

**Symptoms:**
- Section blank
- Component missing
- No error message

**Solutions:**

1. **Check import statement:**
   ```tsx
   // ✅ Correct
   import { Hero } from './sections/Hero';
   
   // ❌ Wrong
   import Hero from './sections/Hero';  // If not default export
   ```

2. **Verify component exports:**
   ```tsx
   // In component file
   export const ComponentName = () => { ... }  // Named export
   
   // In parent
   import { ComponentName } from './Component';
   ```

3. **Check file exists:**
   - Look in file explorer
   - Check exact filename and path
   - Case-sensitive on Linux/Mac

---

## 📸 Image Issues

### Issue: Images not showing

**Symptoms:**
- Broken image icon
- Image path appears in console
- 404 error

**Solutions:**

1. **Check file location:**
   ```
   ✅ Correct: public/profile.jpg
   ❌ Wrong: src/public/profile.jpg
   ❌ Wrong: ./public/profile.jpg
   ```

2. **Check image reference:**
   ```jsx
   /* ✅ Correct */
   <img src="/profile.jpg" alt="Profile" />
   
   /* ❌ Wrong */
   <img src="profile.jpg" alt="Profile" />
   <img src="./profile.jpg" alt="Profile" />
   */

3. **Verify file exists:**
   - Open `public` folder
   - Check exact filename
   - Check file extension (lowercase .jpg preferred)

4. **Try clearing cache:**
   ```bash
   # Hard refresh browser
   Ctrl+Shift+R  # Windows/Linux
   Cmd+Shift+R   # Mac
   ```

---

### Issue: Image loading slowly

**Solutions:**

1. **Optimize image:**
   - Use TinyPNG (tinypng.com)
   - Target: < 150KB each
   - Format: JPG for photos, PNG for graphics

2. **Add lazy loading:**
   ```jsx
   <img src="/image.jpg" alt="Text" loading="lazy" />
   ```

3. **Use WebP format:**
   ```jsx
   <picture>
     <source srcSet="/image.webp" type="image/webp" />
     <img src="/image.jpg" alt="Text" />
   </picture>
   ```

4. **Check internet speed:**
   - Slow upload = slow page load
   - Use sites like SpeedTest.net

---

## 🔗 Link Issues

### Issue: Links don't work

**Symptoms:**
- Button doesn't navigate
- External link doesn't open
- Resume doesn't download

**Solutions:**

1. **Internal links (smooth scroll):**
   ```jsx
   /* ✅ Correct */
   <Link to="about" smooth duration={500}>
     About
   </Link>
   
   /* ❌ Wrong */
   <a href="#about">About</a>
   <a href="/about">About</a>
   ```

2. **External links:**
   ```jsx
   /* ✅ Correct */
   <a href="https://github.com/username" target="_blank">
     GitHub
   </a>
   
   /* ❌ Wrong */
   <a href="github.com/username">GitHub</a>
   ```

3. **File downloads:**
   ```jsx
   /* ✅ Correct */
   <a href="/resume.pdf" download>Download</a>
   
   /* File must be in public folder */
   ```

4. **Verify section IDs match:**
   - `<section id="about">` in component
   - `to="about"` in Link component
   - Must match exactly (case-sensitive on Linux/Mac)

---

## 📧 Contact Form Issues

### Issue: Form doesn't submit

**Symptoms:**
- Button doesn't respond
- No error message
- Page doesn't update

**Solutions:**

1. **Check form implementation:**
   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     // Your submission logic
   };
   ```

2. **For mailto: implementation (current):**
   - Works automatically
   - Opens default email client
   - Requires email client installed

3. **Setup EmailJS (optional):**
   - Create [emailjs.com](https://emailjs.com) account
   - Get Service ID, Template ID, Public Key
   - Update `.env.local`
   - Uncomment EmailJS code

4. **Check console for errors:**
   - Press F12
   - Go to Console tab
   - Look for red error messages

---

### Issue: Email client doesn't open

**Cause:**
- mailto: requires mail client
- Works on desktop, not always on mobile

**Solution:**
```jsx
// Add fallback instruction
{submitStatus === 'error' && (
  <p>Enable email client or copy: your.email@example.com</p>
)}
```

---

## 🎨 Theme Issues

### Issue: Dark mode toggle not working

**Symptoms:**
- Button doesn't change theme
- Colors stay same
- localStorage not updating

**Solutions:**

1. **Check hook implementation:**
   - `src/hooks/useTheme.ts` should handle toggling
   - Verify export statement

2. **Verify DOM updates:**
   ```jsx
   // Should add/remove 'dark' class
   document.documentElement.classList.add('dark');
   document.documentElement.classList.remove('dark');
   ```

3. **Check CSS:**
   - Tailwind configured with `darkMode: 'class'`
   - Classes use `dark:` prefix for dark mode

4. **Clear localStorage:**
   ```javascript
   // In browser console
   localStorage.clear();
   location.reload();
   ```

---

## ⚡ Performance Issues

### Issue: Website loads slowly

**Solutions:**

1. **Check image sizes:**
   - Use DevTools (F12 > Network tab)
   - Target: < 150KB per image
   - Optimize with TinyPNG

2. **Check bundle size:**
   ```bash
   npm run build
   # Check dist/ folder size
   # Target: < 500KB gzipped
   ```

3. **Enable caching:**
   - Already handled by Vite
   - Check dist/index.html for cache-busting

4. **Use lighthouse:**
   ```bash
   # Run performance audit
   Open DevTools > Lighthouse > Analyze
   ```

---

### Issue: Animations lag/stutter

**Symptoms:**
- Animations not smooth
- Elements flicker
- Scroll jumpy

**Solutions:**

1. **Reduce animation complexity:**
   - Stick to opacity and transform
   - Avoid layout-causing properties
   - Keep duration 0.3s-0.8s

2. **Profile animations:**
   ```tsx
   // Add performance profiler
   import { Profiler } from 'react';
   ```

3. **Check GPU acceleration:**
   ```css
   /* Use transform instead of position */
   transform: translateY(-10px);  /* ✅ Fast */
   top: -10px;                    /* ❌ Slow */
   ```

---

## 🚀 Build Issues

### Issue: `npm run build` fails

**Error Examples:**
```
error TS1234: Type error
error parsing:unexpected token
error minifying
```

**Solutions:**

1. **Clear cache and rebuild:**
   ```bash
   rm -rf dist node_modules
   npm install
   npm run build
   ```

2. **Fix TypeScript errors:**
   ```bash
   # Check types
   npx tsc --noEmit
   
   # Fix errors as shown
   ```

3. **Check for unused variables:**
   - ESLint may flag these
   - Either use or remove them

4. **Update dependencies:**
   ```bash
   npm update
   npm run build
   ```

---

### Issue: Build succeeds but broken on deploy

**Symptoms:**
- Works locally, broken on Vercel/Netlify
- 404 errors
- Styling missing

**Solutions:**

1. **Check case sensitivity:**
   - Windows: not case-sensitive
   - Linux/Mac: case-sensitive
   - Fix: `Profile.jsx` vs `profile.jsx`

2. **Verify imports:**
   ```tsx
   // Correct path case
   import { Hero } from './sections/Hero';  // Match exact file name
   ```

3. **Check public assets:**
   - Ensure files in `public/` folder
   - Use `/filename` not `./filename`

4. **Clear deploy cache:**
   - Vercel: Settings > Deployments > Clear cache
   - Netlify: Deploys > Clear cache and deploy site

---

## 🔐 Security Issues

### Issue: Warning about unsafe content

**Warning:**
```
Warning: Unsafe innerHTML / dangerouslySetInnerHTML
```

**Solution:**
```tsx
// ❌ Unsafe
<div dangerouslySetInnerHTML={{ __html: content }} />

// ✅ Safe
<div>{content}</div>  // Automatically escaped
```

---

### Issue: Console warnings about props

**Warning:**
```
Warning: Props did not match between server and client
```

**Solution:**
- Usually from date/random values
- Safe to ignore if not critical
- Wrap in useEffect to fix:
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
return mounted ? <Component /> : null;
```

---

## 📱 Mobile Issues

### Issue: Mobile layout broken

**Symptoms:**
- Text overflows
- Buttons too small
- Images cut off

**Solutions:**

1. **Test responsively:**
   - Press F12
   - Click phone icon (top-left)
   - Test at different widths

2. **Check mobile-first approach:**
   ```jsx
   /* Base styles for mobile */
   <div className="text-sm md:text-lg">
     /* Then add md: breakpoint */
   </div>
   ```

3. **Verify container widths:**
   ```css
   .container-custom {
     @apply max-w-container mx-auto px-6 md:px-8;
   }
   /* These values in tailwind.config.js */
   ```

4. **Test touch targets:**
   - Buttons: minimum 44x44px
   - Links: minimum 32x32px
   - Spacing between: 8px

---

### Issue: Touch interactions don't work

**Symptoms:**
- Can't scroll on mobile
- Buttons unresponsive
- Hover states don't apply

**Solutions:**

1. **Remove hover-only interactions:**
   ```jsx
   /* ❌ Wrong */
   <button className="hover:bg-blue">Click me</button>
   
   /* ✅ Right */
   <button className="active:bg-blue hover:bg-blue">
     Click me
   </button>
   ```

2. **Add touch-screen meta tag:**
   ```html
   <!-- Already in index.html -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

3. **Test on real device:**
   - Desktop DevTools mobile view is imperfect
   - Test on actual smartphone

---

## 🎯 Accessibility Issues

### Issue: Lighthouse accessibility score low

**White issues:**
- Missing alt text
- Low color contrast
- Missing ARIA labels
- Poor heading hierarchy

**Solutions:**

1. **Add alt text to images:**
   ```jsx
   <img src="profile.jpg" alt="Arun Sankar B - Profile" />
   ```

2. **Check color contrast:**
   - Text: minimum 4.5:1 ratio
   - Use WebAIM contrast checker
   - Already optimized in design system

3. **Add ARIA labels:**
   ```jsx
   <button aria-label="Toggle dark mode">
     <FaMoon />
   </button>
   ```

4. **Proper heading hierarchy:**
   ```jsx
   <h1>Main title</h1>      /* Only one per page */
   <h2>Section title</h2>
   <h3>Subsection</h3>
   ```

---

## 💾 Git & Version Control Issues

### Issue: Can't push to GitHub

**Error:**
```
fatal: remote origin already exists
fatal: not a git repository
```

**Solution:**

1. **Initialize git:**
   ```bash
   cd arun-sankar-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Add remote:**
   ```bash
   git remote add origin https://github.com/yourusername/arun-sankar-portfolio
   git branch -M main
   git push -u origin main
   ```

3. **Fix existing remote:**
   ```bash
   git remote remove origin
   git remote add origin https://github.com/yourusername/arun-sankar-portfolio
   git push -u origin main
   ```

---

### Issue: Large files can't push

**Error:**
```
fatal: The file is too large
```

**Solution:**
- Don't commit `node_modules/` (already in .gitignore)
- Don't commit `dist/` for GitHub pages
- Images should be < 5MB each

---

## 🆘 Still Having Issues?

### Debug Steps

1. **Check browser console (F12 > Console tab)**
   - Look for red error messages
   - Take note of exact error

2. **Check terminal output**
   - Stop dev server (Ctrl+C)
   - Look for build/compile errors
   - Full error message usually helps

3. **Search error online**
   - Copy exact error message
   - Add " React" or " TypeScript" at end
   - Search on Google or Stackoverflow

4. **Clear everything and restart:**
   ```bash
   rm -rf node_modules dist .next
   npm cache clean --force
   npm install
   npm run dev
   ```

5. **Check documentation:**
   - README.md - Main docs
   - FILES.md - File structure
   - DEPLOYMENT.md - Deploy issues

---

## 🐛 Reporting Bugs

If you find a bug:

1. **Describe:**
   - What you were doing?
   - What happened?
   - What should happen?

2. **Provide details:**
   - Error message (exact text)
   - Browser/OS
   - Steps to reproduce

3. **Provide files:**
   - Related code snippet
   - Console errors
   - Screenshots

---

**Remember:** Most issues are solved by restarting the dev server or clearing the build cache! 🚀
