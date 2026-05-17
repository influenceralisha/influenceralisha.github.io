# 🌸 Alisha — Portfolio Website
## AI Agent Build Guide & Prompt Document

> **Live URL (after deploy):** `https://<your-github-username>.github.io/alisha/`
> **Instagram:** [@influencer.alisha](https://www.instagram.com/influencer.alisha/)
> **Stack:** Pure HTML + CSS + JavaScript — No frameworks, No build tools

---

## 📐 Website Blueprint

### Pages & Sections
```
index.html
├── 🔝 Hero          — Full-screen portrait with name & tagline
├── 🌸 About         — Short bio, personality, quick stats
├── 📸 Gallery       — Masonry/grid photo feed (Instagram style)
├── 💄 Aesthetic     — Mood board / vibe section
├── 📬 Contact       — Instagram link + collab CTA
└── 🔻 Footer        — Name, copyright, socials
```

### Design System
```
Palette:
  --cream:      #FDF6EC   (background)
  --blush:      #F2C4A0   (accent warm)
  --rose:       #D9826A   (buttons, highlights)
  --brown:      #5C3D2E   (text headings)
  --soft-black: #1A1A1A   (body text)
  --gold:       #C9A96E   (decorative accents)

Typography:
  Display font:  'Cormorant Garamond' (Google Fonts) — elegant serif
  Body font:     'DM Sans' (Google Fonts) — clean, modern
  Accent font:   'Playfair Display Italic' — quote styling

Animations:
  - Fade-in on scroll (Intersection Observer)
  - Soft parallax on hero image
  - Hover lift on gallery cards
  - Smooth anchor scroll
```

---

## 🧠 MASTER PROMPT
> Copy this into **any AI agent** as the base instruction

```
Build a personal portfolio website for Alisha, a 22-year-old Indian 
lifestyle and fashion content creator based in Bengaluru. 
Her Instagram is https://www.instagram.com/influencer.alisha/

TECH STACK:
- Pure HTML5, CSS3, Vanilla JavaScript only
- Single page (index.html) with smooth scroll sections
- Must deploy on GitHub Pages (no server-side code)
- Mobile-first, fully responsive (320px to 4K)
- All assets self-contained or from CDN (Google Fonts, Font Awesome)

DESIGN AESTHETIC:
- Warm, golden, soft-luxury editorial feel
- Color palette: cream (#FDF6EC), blush (#F2C4A0), rose (#D9826A), 
  brown (#5C3D2E), gold (#C9A96E)
- Fonts: 'Cormorant Garamond' for headings, 'DM Sans' for body
- Animations: fade-in on scroll, parallax hero, hover lifts
- NO generic templates, NO Bootstrap, NO purple gradients

SECTIONS TO BUILD:
1. HERO — Full-viewport section, her name "Alisha" in large serif, 
   tagline "soft girl. big dreams. good vibes ✨", floating particles 
   or bokeh CSS effect in background, Instagram button CTA

2. ABOUT — Two-column layout: left = photo placeholder (aspect-ratio 
   3:4), right = short bio paragraphs + 3 stat pills 
   (22 years | Bengaluru | Lifestyle & Fashion)

3. GALLERY — CSS masonry grid (3 col desktop, 2 col tablet, 1 col 
   mobile), 9 placeholder cards with hover overlay showing caption, 
   Instagram icon links to her profile

4. AESTHETIC / VIBE — Full-width mood section with quote overlay on 
   soft gradient background. Quote: "Beauty that feels like you, 
   not a filter."

5. COLLAB / CONTACT — Centered section with CTA heading, Instagram 
   button, and soft note about collabs

6. FOOTER — Name, tagline, socials row, copyright

ADDITIONAL REQUIREMENTS:
- Add Open Graph meta tags (og:title, og:description, og:image)
- Add favicon emoji 🌸
- Smooth scroll behavior
- Sticky nav with blur backdrop on scroll
- All images use placeholder URLs from picsum.photos or similar
- Add a subtle custom cursor (soft pink dot)
- GitHub Actions workflow file (.github/workflows/deploy.yml) 
  for auto-deploy to GitHub Pages on push to main
```

---

## 🤖 AGENT-SPECIFIC GUIDES

---

### 1. 🟣 Claude Code

**Best for:** Full project scaffolding, GitHub Actions, clean structured code

#### Setup
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Navigate to your project folder
mkdir alisha-portfolio && cd alisha-portfolio
git init

# Launch Claude Code
claude
```

#### Prompt Sequence

**Step 1 — Project scaffold:**
```
Create a GitHub Pages portfolio project for Alisha with this structure:
alisha-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── (placeholder folder)
└── .github/
    └── workflows/
        └── deploy.yml

Use the master prompt below as the design brief:
[PASTE MASTER PROMPT HERE]
```

**Step 2 — GitHub Actions workflow:**
```
Create .github/workflows/deploy.yml that:
- Triggers on push to main branch
- Uses actions/checkout@v4
- Uses actions/upload-pages-artifact@v3
- Deploys to GitHub Pages using actions/deploy-pages@v4
- No build step needed (static site)
```

**Step 3 — Refinements:**
```
In style.css:
1. Add CSS custom cursor — a soft blush pink circle that follows mouse
2. Add scroll-triggered fade-in animation using IntersectionObserver
3. Make the navigation sticky with backdrop-filter: blur(12px) on scroll
4. Add subtle grain texture overlay on hero using CSS pseudo-element
```

**Step 4 — SEO & Meta:**
```
Add to index.html <head>:
- Open Graph tags for Instagram/social sharing
- Twitter card meta tags
- Canonical URL tag
- Structured data (JSON-LD) for Person schema with Alisha's details
- Emoji favicon 🌸 using <link rel="icon">
```

#### Claude Code Tips
- Use `/init` to let Claude Code understand your project context first
- Use `/add css/style.css` to focus Claude on one file at a time
- Ask Claude Code to `review index.html for accessibility` before final push
- Claude Code handles multi-file edits natively — ideal for this project

---

### 2. 🔵 Gemini CLI

**Best for:** Quick iteration, Google ecosystem, real-time web context

#### Setup
```bash
# Install Gemini CLI
npm install -g @google/gemini-cli

# Authenticate
gemini auth login

# Start in project folder
cd alisha-portfolio
gemini
```

#### Prompt Sequence

**Step 1 — Generate full HTML:**
```
@gemini

I want to build a GitHub Pages site. Generate a complete, 
production-ready index.html file for a lifestyle influencer 
named Alisha. 

Requirements:
- Inline critical CSS in <style> tag inside <head>
- External CSS linked as css/style.css
- External JS linked as js/main.js  
- Google Fonts: Cormorant Garamond + DM Sans
- Font Awesome 6 CDN for icons
- Sections: hero, about, gallery (9 cards), vibe quote, 
  collab CTA, footer
- Her Instagram: https://www.instagram.com/influencer.alisha/
- Warm golden aesthetic: #FDF6EC #F2C4A0 #D9826A #C9A96E #5C3D2E
- Mobile responsive, no frameworks

Return ONLY the complete HTML. No explanation.
```

**Step 2 — CSS file:**
```
@gemini

Generate css/style.css for Alisha's portfolio site.

Include:
1. CSS reset + custom properties (all colors, fonts, spacing)
2. Custom cursor (blush pink soft circle, 20px)
3. Sticky navbar with backdrop-filter blur on .scrolled class
4. Hero section: full viewport, parallax background effect
5. Masonry gallery grid: 3-col desktop, 2-col tablet, 1-col mobile
6. Scroll-triggered .fade-in animation
7. Card hover: translateY(-8px) + warm shadow
8. All transitions: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s
9. Print media query that hides nav and animations

Warm soft-luxury editorial aesthetic. No Bootstrap. Return full CSS only.
```

**Step 3 — JavaScript:**
```
@gemini

Generate js/main.js for Alisha's portfolio.

Features to implement:
1. IntersectionObserver for .fade-in elements (threshold: 0.15)
2. Navbar gets .scrolled class after 80px scroll
3. Custom cursor: create div#cursor, track mousemove, add .hover 
   class on <a> and <button> hover
4. Smooth scroll for anchor links
5. Gallery lightbox: click any .gallery-card opens overlay with 
   larger image + close on click/ESC
6. Typing animation on hero subtitle (cycle through 3 phrases)

Clean vanilla JS, no libraries. Use ES6+ syntax. Return full JS only.
```

**Step 4 — GitHub Actions:**
```
@gemini

Create .github/workflows/deploy.yml for deploying a static HTML/CSS/JS 
site to GitHub Pages.

Requirements:
- Trigger: push to main, manual workflow_dispatch
- Permissions: pages: write, id-token: write, contents: read
- Use official GitHub Pages actions (v4)
- No build step needed
- Set source to root (/)
- Add concurrency group to cancel redundant deploys
```

#### Gemini CLI Tips
- Use `@gemini --model gemini-2.0-flash` for faster iteration
- Prefix with `@file:index.html` to reference existing files
- Use `gemini sandbox` to preview changes in browser
- Gemini has live web access — ask it to check Bootstrap-free CSS patterns

---

### 3. 🟠 Aider (AI Pair Programmer)

**Best for:** Iterative editing of existing code, git-integrated workflow

#### Setup
```bash
# Install Aider
pip install aider-install
aider-install

# Launch with Sonnet model
aider --model claude-sonnet-4-20250514 --no-auto-commits
```

#### Prompt Sequence

**Step 1 — Create base files:**
```
/add index.html css/style.css js/main.js

Create all three files together for Alisha's portfolio website.
[PASTE MASTER PROMPT]

Commit message: "feat: initial portfolio scaffold for Alisha"
```

**Step 2 — Targeted edits:**
```
/add css/style.css

In the gallery section CSS, change the grid from 3 equal columns 
to a Pinterest-style masonry layout. Use CSS columns: 3 approach 
with column-gap: 16px. Cards should have break-inside: avoid.
Preserve all existing styles.
```

**Step 3 — Bug fixes:**
```
/add js/main.js index.html

The custom cursor flickers on mobile devices. Fix main.js to:
1. Detect touch device using navigator.maxTouchPoints
2. Hide cursor element entirely on touch devices
3. Remove all mousemove listeners on touch devices
```

**Step 4 — GitHub Actions:**
```
/add .github/workflows/deploy.yml

Create the GitHub Pages deployment workflow. Trigger on push to 
main. Use actions/configure-pages, upload-pages-artifact, 
deploy-pages. No build step. Static files from root.
```

#### Aider Tips
- `aider --watch-files` auto-picks up file saves
- Use `/diff` to review changes before committing
- Use `/undo` to revert last AI change
- Aider tracks git history — easy to rollback broken states

---

### 4. 🟢 Continue.dev (VS Code Extension)

**Best for:** In-editor AI assistance while building the site

#### Setup
```
1. Install VS Code extension: Continue (continue.dev)
2. Open alisha-portfolio folder in VS Code
3. Press Cmd+L (Mac) / Ctrl+L (Win) to open Continue sidebar
4. Select model: Claude Sonnet or Gemini 1.5 Pro
```

#### Prompt Sequence

**Step 1 — From scratch in editor:**
```
@codebase

Create a full portfolio website for an Indian lifestyle influencer 
named Alisha (age 22, Bengaluru). 

Generate three files simultaneously:
- index.html (full page, all sections)
- css/style.css (complete stylesheet)  
- js/main.js (all interactions)

[PASTE MASTER PROMPT]
```

**Step 2 — Section by section:**
```
@index.html

I need to add a new section after the gallery called "Aesthetic".
It should be a full-width section with:
- A soft gradient background (#FDF6EC to #F2C4A0)
- A centered italic quote: "Beauty that feels like you, not a filter."
- Quote author line: "— Alisha"
- A subtle decorative line above and below the quote
- Class: section-aesthetic
Insert it between the gallery and collab sections.
```

**Step 3 — Debugging:**
```
@js/main.js

The IntersectionObserver fade-in animation triggers for ALL elements 
at once on mobile. Fix it to:
1. Use rootMargin: "0px 0px -50px 0px" to trigger slightly before 
   element enters viewport
2. Add staggered delay: each .fade-in element gets 
   animation-delay based on its index (0.1s increments)
3. Disconnect observer after element is visible (performance)
```

#### Continue.dev Tips
- Use `@docs` to reference MDN or any URL for latest CSS/JS specs
- Use `@diff` to review what changed in current file
- Works inline inside the editor — no context switching

---

### 5. 🔴 Antigravity (Agentic Browser + Code)

**Best for:** Agents that can browse, screenshot, and iterate on design

#### Setup
```bash
# Install Antigravity
pip install antigravity-agent

# Set API key
export ANTHROPIC_API_KEY=your_key_here

# Launch
antigravity run
```

#### Prompt for Antigravity

```
TASK: Build and deploy Alisha's portfolio website to GitHub Pages

AGENT INSTRUCTIONS:

Phase 1 — Research & Inspiration
1. Browse https://www.instagram.com/influencer.alisha/ and note her 
   aesthetic: colors, mood, content style
2. Screenshot the profile for color palette reference
3. Browse 2-3 reference portfolio sites for soft/fashion aesthetics
4. Document findings before writing any code

Phase 2 — Build
1. Create project folder: alisha-portfolio/
2. Generate index.html using the master prompt below
3. Generate css/style.css with extracted color palette from research
4. Generate js/main.js with all interactions
5. Create .github/workflows/deploy.yml

[PASTE MASTER PROMPT]

Phase 3 — Visual QA
1. Open index.html in browser using Python http.server
2. Screenshot the rendered page at 1440px, 768px, 375px widths
3. Check: hero text readable, gallery grid correct, nav visible
4. Fix any layout issues found in screenshots

Phase 4 — Deploy
1. Initialize git repo in project folder
2. Create GitHub repo named "alisha" via GitHub CLI
3. Push code to main branch
4. Enable GitHub Pages in repo settings (source: main branch, root)
5. Wait 60 seconds, then verify site is live at the GitHub Pages URL

COMPLETION CRITERIA:
✅ Site loads at GitHub Pages URL
✅ All 6 sections visible and responsive  
✅ Instagram link works (@influencer.alisha)
✅ No console errors
✅ Google Lighthouse score > 85
```

#### Antigravity Tips
- Give Antigravity a **clear done state** — it works best with defined success criteria
- The browser-screenshot loop lets it self-correct visual bugs
- Use `--max-steps 30` to control how long it runs
- Antigravity can commit and push to GitHub autonomously

---

## 🚀 GitHub Pages Deployment

### Manual Deploy (Any Agent Output)
```bash
# 1. Create repo on GitHub named "alisha"
# 2. Clone and add files
git init
git add .
git commit -m "feat: Alisha portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/alisha.git
git push -u origin main

# 3. Enable GitHub Pages
# GitHub → Repo Settings → Pages → Source: Deploy from branch → main → / root → Save
```

### Auto Deploy via GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## ✅ Quality Checklist

Before going live, verify:

```
VISUAL
□ Hero section fills full viewport on mobile
□ Gallery grid: 3 col (desktop) → 2 col (tablet) → 1 col (mobile)
□ All fonts loading (Cormorant Garamond + DM Sans)
□ Custom cursor visible on desktop, hidden on mobile
□ Hover effects working on gallery cards
□ Instagram link opens correctly

PERFORMANCE  
□ No images over 500KB (use optimized placeholders)
□ Google Fonts loaded with display=swap
□ JS deferred or at bottom of body
□ Lighthouse Performance score > 85

SEO & META
□ <title>Alisha — Lifestyle & Fashion</title>
□ og:title, og:description, og:image set
□ Canonical URL set to GitHub Pages URL
□ Favicon emoji 🌸 visible in browser tab

DEPLOY
□ GitHub Actions workflow runs green ✅
□ Site loads at https://username.github.io/alisha/
□ HTTPS enforced (GitHub Pages default)
□ All internal links relative (no localhost references)
```

---

## 📁 Final Project Structure

```
alisha-portfolio/
├── index.html              ← Main page
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← All interactions
├── assets/
│   └── images/             ← Add real photos here later
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto GitHub Pages deploy
└── README.md               ← Project info
```

---

## 🔗 Quick Reference

| Resource | Link |
|----------|------|
| Instagram | https://www.instagram.com/influencer.alisha/ |
| Google Fonts | https://fonts.google.com |
| Font Awesome | https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css |
| Placeholder Images | https://picsum.photos/400/600 |
| GitHub Pages Docs | https://docs.github.com/en/pages |
| Lighthouse | https://pagespeed.web.dev |

---

*Built for Alisha 🌸 — soft girl. big dreams. good vibes.*
