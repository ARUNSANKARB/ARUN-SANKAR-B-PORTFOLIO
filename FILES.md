# Complete File Structure Documentation

## 📂 Project Layout

```
arun-sankar-portfolio/
│
├── 📁 public/                          # Static assets
│   ├── profile.jpg                     # Hero profile photo (240x300px)
│   ├── about.jpg                       # About section photo (800x900px)
│   ├── resume.pdf                      # Resume file
│   ├── favicon.ico                     # Browser tab icon (optional)
│   └── robots.txt                      # SEO robots directive
│
├── 📁 src/                             # Source code
│   │
│   ├── 📁 components/                 # Reusable components
│   │   ├── Navbar.tsx                 # Navigation bar with theme toggle
│   │   ├── ScrollProgress.tsx         # Top scroll indicator bar
│   │   ├── SectionTitle.tsx           # Reusable section header
│   │   ├── SkillBadge.tsx             # Individual skill badge
│   │   ├── ProjectCard.tsx            # Project showcase card
│   │   └── ExperienceCard.tsx         # Experience/internship card
│   │
│   ├── 📁 sections/                   # Full page sections
│   │   ├── Hero.tsx                   # Welcome/intro section (100vh)
│   │   ├── About.tsx                  # About me section with stats
│   │   ├── Skills.tsx                 # Skills grid with filters
│   │   ├── Projects.tsx               # Featured projects showcase
│   │   ├── Experience.tsx             # Internships timeline
│   │   ├── Education.tsx              # Education & certifications
│   │   ├── Contact.tsx                # Contact form & info
│   │   └── Footer.tsx                 # Footer with links
│   │
│   ├── 📁 hooks/                      # Custom React hooks
│   │   ├── useScrollProgress.ts       # Tracks scroll position (0-100%)
│   │   ├── useTheme.ts                # Dark/light mode toggle
│   │   └── useActiveSection.ts        # Tracks active nav section
│   │
│   ├── 📁 data/                       # Static data files
│   │   ├── skills.ts                  # Skills array with categories
│   │   ├── projects.ts                # Featured projects
│   │   ├── experiences.ts             # Internship experiences
│   │   └── education.ts               # Education & certifications
│   │
│   ├── 📁 styles/                     # Stylesheets
│   │   └── globals.css                # Global styles & Tailwind imports
│   │
│   ├── App.tsx                        # Main app component
│   └── main.tsx                       # React DOM render entry
│
├── 📄 index.html                       # HTML entry point with SEO meta tags
├── 📄 package.json                     # Dependencies & scripts
├── 📄 tsconfig.json                    # TypeScript config
├── 📄 tsconfig.node.json               # TypeScript node config
├── 📄 vite.config.ts                   # Vite build config
├── 📄 tailwind.config.js               # Tailwind CSS config
├── 📄 postcss.config.js                # PostCSS config
├── 📄 .eslintrc.cjs                    # ESLint rules
├── 📄 .prettierrc                      # Code formatting rules
├── 📄 .gitignore                       # Git ignore rules
├── 📄 vercel.json                      # Vercel deployment config
│
├── 📄 README.md                        # Main documentation
├── 📄 QUICKSTART.md                    # 15-minute setup guide
├── 📄 DEPLOYMENT.md                    # Deployment instructions
├── 📄 ASSETS.md                        # Asset optimization guide
└── 📄 SEO.md                           # SEO & performance guide
```

---

## 📝 File Descriptions & Edit Guide

### Root Configuration Files

#### `package.json`
**Purpose:** Dependencies and npm scripts
**Edit for:** Adding packages, changing port
```bash
npm install new-package        # Add new dependency
npm run dev                    # Start dev server (port 3000)
npm run build                  # Build for production
```

#### `tailwind.config.js`
**Purpose:** Tailwind CSS customization
**Edit for:** Colors, fonts, spacing
```javascript
colors: {
  primary: '#2563EB',    // Change primary color
  accent: '#38BDF8'      // Change accent color
}
```

#### `vite.config.ts`
**Purpose:** Build tool configuration
**Edit for:** Port, base path, build options
```typescript
server: {
  port: 3000,           // Change development port
  open: true            // Auto-open browser
}
```

#### `index.html`
**Purpose:** HTML entry point with meta tags
**Edit for:** Page title, meta description, Google Analytics
```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Your bio here" />
```

---

### Source Code Structure

#### `src/App.tsx`
**Purpose:** Root React component
**Edit for:** Adding new sections
```tsx
<main>
  <Hero />
  <About />
  <Skills />
  {/* Add more sections here */}
</main>
```

#### `src/main.tsx`
**Purpose:** React DOM entry point
**Edit rarely** - handles React initialization

---

### Components (`src/components/`)

#### `Navbar.tsx`
**Features:**
- Fixed navigation at top
- Active section highlighting
- Dark/light mode toggle
- Mobile menu
- Resume download button

**Edit for:**
- Change nav links
- Add/remove menu items
- Update resume path

```tsx
const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  // Add more links here
];
```

#### `ScrollProgress.tsx`
**Features:**
- Top progress bar
- Shows scroll percentage
- Smooth animation

**Edit rarely** - works automatically

#### `SectionTitle.tsx`
**Purpose:** Reusable section heading
**Used in:** All major sections
**Edit for:** Title styling, colors

```tsx
<SectionTitle 
  title="My Section"
  subtitle="Optional subtitle here"
/>
```

#### `SkillBadge.tsx`
**Purpose:** Individual skill badge
**Used in:** Skills section
**Edit for:** Badge styling, colors

#### `ProjectCard.tsx`
**Purpose:** Project showcase card
**Features:**
- Project title and description
- Tech stack display
- GitHub link
- Live demo link
- Highlights list

**Edit for:** Card styling, button colors

#### `ExperienceCard.tsx`
**Purpose:** Internship/work experience card
**Features:**
- Company and role
- Duration
- Achievements
- Skills used

**Edit for:** Card styling, color scheme

---

### Sections (`src/sections/`)

#### `Hero.tsx` - Home/Welcome Section
**Features:**
- Full height welcome section
- Gradient background effect
- Profile image
- Introduction text
- CTA buttons
- Social media links
- Scroll indicator

**Edit for:**
- Change your name
- Update tagline
- Change role
- Update intro text
- Update social links
- Change profile image

**Key Code:**
```tsx
<h1>Hi, I'm <span className="gradient-text">Name</span></h1>
<p>Your tagline here</p>
```

#### `About.tsx` - About Me Section
**Features:**
- About image
- Bio text
- Statistics cards
- 3 highlight cards

**Edit for:**
- Update bio text
- Change statistics
- Modify highlight cards
- Update about image

```tsx
[
  { label: 'Projects', value: '10+' },
  { label: 'Experience', value: '2+ Yrs' },
  { label: 'Commits', value: '500+' },
]
```

#### `Skills.tsx` - Skills Section
**Features:**
- Categorized skill grid
- Filter by category
- Skill badges
- Statistics cards

**Edit for:**
- Add/remove skills (in `src/data/skills.ts`)
- Change statistics
- Add/remove categories

**Data file:** `src/data/skills.ts`
```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  // Add your skills here
];
```

#### `Projects.tsx` - Featured Projects
**Features:**
- Project cards grid
- Tech stack display
- GitHub links
- Live demo links
- Highlights

**Edit for:**
- Add/remove projects (in `src/data/projects.ts`)
- Change project information
- Update links

**Data file:** `src/data/projects.ts`
```typescript
{
  id: 1,
  title: 'Project Name',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
}
```

#### `Experience.tsx` - Internships
**Features:**
- Experience cards
- Timeline layout
- Achievements list
- Skills display

**Edit for:**
- Add/remove internships (in `src/data/experiences.ts`)
- Update achievements
- Change duration

**Data file:** `src/data/experiences.ts`
```typescript
{
  id: 1,
  role: 'Junior Developer',
  company: 'Company Name',
  duration: 'Jun 2023 - Aug 2023',
}
```

#### `Education.tsx` - Education & Certifications
**Features:**
- Education cards
- Certifications display
- GPA/scores
- Achievements

**Edit for:**
- Add degrees (in `src/data/education.ts`)
- Add certifications
- Change scores

**Data file:** `src/data/education.ts`
```typescript
{
  id: 1,
  degree: 'B.Tech in CS',
  institution: 'University Name',
  yearOfPassing: '2024',
  gpa: '8.2/10',
}
```

#### `Contact.tsx` - Contact Section
**Features:**
- Contact form
- Email input
- Message textarea
- Contact information
- Social links
- Form validation

**Edit for:**
- Update email address
- Update phone number
- Update location
- Change form labels
- Add social links

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  // Form submission logic
  // Currently opens mailto:
};
```

#### `Footer.tsx` - Footer
**Features:**
- Quick links
- Resources section
- Social media icons
- Copyright info
- Back to top button

**Edit for:**
- Update social links
- Change footer links
- Update copyright year (automatic)

---

### Hooks (`src/hooks/`)

#### `useScrollProgress.ts`
**Purpose:** Tracks scroll position
**Returns:** Progress percentage (0-100)
**Edit rarely** - works automatically

```typescript
const progress = useScrollProgress();
// Returns: 25, 50, 75, etc.
```

#### `useTheme.ts`
**Purpose:** Dark/light mode toggle
**Features:**
- Reads localStorage
- Syncs with system preference
- Updates DOM class

**Edit for:** Default theme preference
```typescript
const [isDark, setIsDark] = useState(true);  // Change default
```

#### `useActiveSection.ts`
**Purpose:** Tracks active navigation section
**Returns:** Current section ID
**Edit rarely** - works automatically

```typescript
const activeSection = useActiveSection();
// Returns: 'hero', 'about', 'skills', etc.
```

---

### Data Files (`src/data/`)

#### `skills.ts`
**Purpose:** Skills array and categories
**Edit for:** Add/remove skills, change categories
```typescript
export const skills: Skill[] = [
  { name: 'Skill Name', category: 'Category' },
];
export const skillCategories = ['Frontend', 'Backend', ...];
```

#### `projects.ts`
**Purpose:** Featured projects data
**Edit for:** Add/remove projects
```typescript
{
  id: 1,
  title: 'Project Title',
  description: 'Short desc',
  tech: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  highlights: ['Feature 1', 'Feature 2'],
}
```

#### `experiences.ts`
**Purpose:** Work experience/internships
**Edit for:** Add/remove experiences
```typescript
{
  role: 'Developer',
  company: 'Company',
  duration: 'Jun 2023 - Aug 2023',
  achievements: ['Achievement 1', 'Achievement 2'],
}
```

#### `education.ts`
**Purpose:** Education and certifications
**Edit for:** Add degrees and certs
```typescript
export const education: Education[] = [...]
export const certifications = [...]
```

---

### Styles (`src/styles/`)

#### `globals.css`
**Purpose:** Global styles and Tailwind imports
**Edit for:** Global animations, utility classes
**Contains:**
- Tailwind directives (@tailwind)
- Font imports
- Scrollbar styling
- Glass morphism styles
- Gradient definitions
- Button styles
- Form styles

---

## 🔧 Common Edits Quick Reference

| Task | File | Where |
|------|------|-------|
| Change colors | `tailwind.config.js` | colors section |
| Add skill | `src/data/skills.ts` | skills array |
| Add project | `src/data/projects.ts` | projects array |
| Change hero text | `src/sections/Hero.tsx` | JSX content |
| Update nav | `src/components/Navbar.tsx` | navLinks array |
| Add social link | Multiple files | Look for social URLs |
| Change email | `src/sections/Contact.tsx` | Email links |
| Update resume path | `src/components/Navbar.tsx` | href="/resume.pdf" |

---

## 📊 File Dependencies

```
App.tsx
├── Navbar ← useActiveSection hook
├── ScrollProgress ← useScrollProgress hook
└── Sections (imported in App.tsx)
    ├── Hero
    ├── About ← SectionTitle
    ├── Skills ← SectionTitle, SkillBadge
    ├── Projects ← SectionTitle, ProjectCard
    ├── Experience ← SectionTitle, ExperienceCard
    ├── Education ← SectionTitle
    ├── Contact ← SectionTitle
    └── Footer

Data files:
├── skills.ts ← Skills section
├── projects.ts ← Projects section
├── experiences.ts ← Experience section
└── education.ts ← Education section
```

---

## 🚀 Edit Workflow

1. **Open file in VS Code**
2. **Find what to edit** (use Ctrl+F)
3. **Make changes**
4. **Save file** (Ctrl+S)
5. **Check in browser** (auto-refreshes)
6. **Commit changes** (git)

---

This documentation covers every file in the project. Edit according to your needs! 🎉
