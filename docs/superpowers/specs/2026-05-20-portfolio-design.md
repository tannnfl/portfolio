# Portfolio Website — Design Spec
**Date:** 2026-05-20  
**Deadline:** 2026-05-31  
**Owner:** Fanglin Tan

---

## Context

Fanglin is a NYU BFA Game Design graduate (2022–2026) job hunting for Game Designer, Game Technical Designer, and Game QA roles. The portfolio site replaces the itch.io page as the primary professional touchpoint for game company recruiters and hiring managers.

---

## Visual Design

**Style:** Brutalism — no gradients, no rounded corners, no shadows. Pure black/white, thick borders, monospace font, uppercase labels.

**Layout:** 680px centered column, heavy whitespace on sides. Browser width doesn't matter — content stays narrow.

**Typography:** `Courier New` / monospace for UI chrome. System sans-serif acceptable for body text in project detail pages.

**Color:** Black `#000`, white `#fff`, mid-gray `#888` for secondary text. No other colors.

---

## Site Structure

```
/                          Homepage — filter + numbered feed
/project/poplife           POPLife detail page
/project/timeplex          Timeplex detail page
/project/beans-and-guns    Beans and Guns detail page
/project/survival-skills   The Survival Skills Game detail page
/project/[others...]       Additional itch.io projects as needed
/about                     Short bio + contact + resume link
```

---

## Homepage

### Nav (sticky, top)
```
FANGLIN TAN                    About  Resume ↗  itch.io ↗
─────────────────────────────────────────────────────────
```

### Filter bar (below nav)
```
[All] [Game] [Design Doc] [Tool Dev] [Board Game]
```
Buttons: monospace, uppercase, 1px solid black border, joined (no gaps). Active = black fill.

### Project Feed
Single column, 680px wide, centered. Each item:

```
┌─────────────────────────────────────────┐
│  [Full-width screenshot/image]          │
├─────────────────────────────────────────┤
│  01                         [Tag] [Tag] │
│  PROJECT TITLE                          │
│  One-line description · Role · Links   │
└─────────────────────────────────────────┘
```

- 2px solid black border on whole card
- 2px solid black border between image and meta row
- Image height: ~380px, object-fit: cover
- Title: 1.4rem, bold, uppercase
- Meta row padding: 1rem 1.2rem
- Margin between cards: 3rem (breathing room)

### Projects & Order

| # | Title | Tags | Links |
|---|-------|------|-------|
| 01 | POPLife | Featured, Systems Design, Narrative | Steam ↗, itch.io ↗ (if available) |
| 02 | Timeplex | Game Design, AI / Code | itch.io ↗ (if available) |
| 03 | Beans and Guns | Game Design, Tool Dev | itch.io ↗ (if available) |
| 04 | The Survival Skills Game | Solo Dev | itch.io ↗ |
| 05+ | Other itch.io projects | varies | itch.io ↗ |

Filter categories map to tags: `game`, `design-doc`, `tool-dev`, `board-game`. JS filters visibility client-side.

---

## Project Detail Page

Same 680px centered column. Structure:

```
← Back

01
PROJECT TITLE

[Role] · [Year] · [Platform]

[Full-width image or GIF]

Overview paragraph

[Full-width image 2 if available]

My Role / Contributions
- bullet
- bullet

[Links: Steam ↗  itch.io ↗  GitHub ↗]
```

- No sidebar, no fancy layout — clean reading experience
- Back link at top-left
- Images full-width within the 680px column
- Bold section headers, monospace

---

## Tech Stack

- **Bundler:** Vite (vanilla JS, no framework)
- **Routing:** Client-side via `history.pushState` or hash routing — or simply separate HTML files per project (simpler, no JS routing needed)
- **CSS:** Single `style.css`, CSS variables for the few values that repeat (`--border`, `--col-width: 680px`)
- **Deployment:** GitHub Pages (static export) or Netlify

**Recommendation:** Separate HTML files per project. Zero routing complexity, works on any static host, fast to build in 11 days.

---

## Content to Gather

- [ ] POPLife: Steam screenshots (available at store page), GDC photo if any
- [ ] Timeplex: screenshots / GIF from build
- [ ] Beans and Guns: screenshots
- [ ] The Survival Skills Game: itch.io screenshots
- [ ] All projects: confirm itch.io links
- [ ] Resume PDF (already exists at itch.io)

---

## Verification

1. `npm run dev` — site loads, all pages accessible
2. Filter buttons show/hide correct projects
3. Click any project → detail page loads, back link works
4. Steam / itch.io links open correct pages
5. Resume link opens PDF
6. Mobile: 680px column stays readable on smaller screens (min-width clamp)
7. Deploy to GitHub Pages — all links work on production URL
