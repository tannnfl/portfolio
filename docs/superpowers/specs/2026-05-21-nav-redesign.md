# Nav Redesign — Portfolio Top Section

**Date:** 2026-05-21  
**Status:** Approved

---

## Problem

The current top section has three elements the user dislikes:

- **A** — 顶部橙绿黑彩色条纹 (`body::before`, sticky, 5px): too visually noisy
- **D** — 全宽黑色筛选栏背景 (`.filter-bar` with `background: var(--ink)`): too heavy, breaks the page's beige palette
- **C (mild)** — 导航链接外框 (`.nav-links` bordered box): feels rigid

---

## Design Decision

**Direction: Compact merged layout, same width as content cards (680px).**

### What changes

| Element | Before | After |
|---|---|---|
| Top stripe | `body::before` — 5px repeating-linear-gradient | **Removed entirely** |
| Nav name row | Name left, tagline right (separate baseline row) | Name left, nav links + lang switch right — **single baseline row** |
| Nav tagline | Small italic right of name | **Removed** (role is implied; the about page covers it) |
| Nav links | Bordered box (`border: 1px solid var(--ink)`) with `overflow:hidden` | Plain text links, `gap: 1rem`, no border, `color: var(--mid)` |
| Lang switch | Separate flex element after nav-links | Stays inline, separated by a `border-left: 1px solid var(--tan)` hairline |
| Filter bar container | Full-width `background: var(--ink)` | **No background** — inherits `var(--bg)` |
| Filter buttons | White text on dark bg; active = orange bg | `color: var(--mid)`; active = `color: var(--accent)` + `border-bottom: 2px solid var(--accent)` |
| Filter bar width | Content constrained to `--col` but bg bleeds full width | Container has no background; visually contained to `--col` |

### What stays the same

- `--col: 680px` width for all content
- `font-family: var(--font-head)` (Anton) for the name
- `font-family: var(--font-mono)` (Space Mono) for all UI text
- `border-bottom: 2px solid var(--ink)` under the name row (double rule replaced by single solid)
- Orange accent (`var(--accent)`) on active filter
- All interactive behavior (filter logic, lang switch, hover states)

---

## CSS Changes (file: `assets/cursor-trail-CYZb0a0Q.css`)

### Remove

```css
/* DELETE — decorative top stripe */
body::before { ... }

/* DELETE — dark filter bar background */
.filter-bar { background: var(--ink); padding: .5rem 0; }
.filter-btn { background: var(--ink); border-right: 1px solid rgba(255,255,255,.12); color: rgba(255,255,255,.45); }
.filter-btn.active { background: var(--accent); color: #fff; }
.filter-btn:hover:not(.active) { color: rgba(255,255,255,.85); }
```

### Update `.nav-inner`

```css
.nav-inner {
  /* keep width, flex-direction:column, padding */
  /* remove gap — rows will handle their own spacing */
}
```

### Replace nav-top + nav-bottom rows with single row

```css
/* Single row: name left, links+lang right */
.nav-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--ink);
}

/* Nav links — plain text, no box */
.nav-links {
  display: flex;
  font-size: .58rem;
  text-transform: uppercase;
  letter-spacing: .09em;
  gap: 1rem;
  color: var(--mid);
  border: none;
  overflow: visible;
}
.nav-links a {
  padding: 0;
  border: none;
  color: var(--mid);
}
.nav-links a:hover { color: var(--ink); background: none; text-decoration: none; }

/* Lang switch — separated by hairline */
.lang-switch {
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid var(--tan);
}
```

### Update filter bar

```css
.filter-bar {
  display: flex;
  justify-content: center;
  /* no background, no padding override */
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: .55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  padding: .45rem .9rem;
  cursor: pointer;
  color: var(--mid);
  transition: color .1s;
}
.filter-btn:first-child { padding-left: 0; }
.filter-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
.filter-btn:hover:not(.active) { color: var(--ink); }

.filter-inner {
  width: var(--col);
  border-bottom: 1px solid var(--tan);
}
```

### HTML change in `index.html`

Merge `.nav-top` and `.nav-bottom` into one `.nav-row` div; move `.nav-tagline` removal; keep all links and lang-switch in place.

```html
<nav class="nav">
  <div class="nav-inner">
    <div class="nav-row">
      <span class="nav-name" data-zh="谈方琳">Anna Tan</span>
      <div class="nav-right">
        <div class="nav-links">
          <a href="/portfolio/about.html" data-zh="关于">About</a>
          <a href="https://www.linkedin.com/in/fanglin-tan-2b5745329/" target="_blank">LinkedIn ↗</a>
          <a href="https://geo404anna.itch.io/" target="_blank">itch.io ↗</a>
          <a href="https://github.com/tannnfl" target="_blank">GitHub ↗</a>
        </div>
        <div class="lang-switch">
          <button class="lang-btn active" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="zh">中</button>
        </div>
      </div>
    </div>
  </div>
</nav>
```

---

## Scope

- Changes apply to `index.html` and `assets/cursor-trail-CYZb0a0Q.css`
- The same nav appears on `about.html` and project pages — those need the same HTML change
- No JS changes required (filter logic, lang switch behavior unchanged)
- No changes to cards, feed, or detail pages
