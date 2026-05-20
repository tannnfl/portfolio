# Student Projects Tab — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Student Projects" filter tab to the portfolio homepage and create 20 individual detail pages for student work migrated from fanglint.wordpress.com.

**Architecture:** New `student-project` tag on 20 project cards in `index.html` + new filter button in the filter bar. Each project gets a detail page at `project/<slug>.html` following the same template as existing pages (survival-skills.html pattern for no-video, timeplex.html pattern for video). Content is rewritten professionally from WordPress source material.

**Tech Stack:** Static HTML, vanilla CSS (existing style.css), vanilla JS (existing main.js filter logic — no changes needed)

---

## Project Data Reference

| # | Card Num | Slug | Title | itch.io | Video |
|---|----------|------|-------|---------|-------|
| 1 | 08 | blind-memory | Blind Memory | https://fanglin.itch.io/blind-memories | Bilibili BV1DZQ3YWEnV |
| 2 | 09 | hikers-paradise | Hiker's Paradise | — | — |
| 3 | 10 | flare-gun | Flare Gun: 3D Model | — | — |
| 4 | 11 | wandering-shibuya | Wandering Shibuya | — | — |
| 5 | 12 | ultrahot | Ultrahot Demo | — | Bilibili BV1GUQuYXEoc |
| 6 | 13 | rocket-3d | 3D Modeling: Rocket | — | — |
| 7 | 14 | blockdog-audio | Blockdog Audio Design | — | — |
| 8 | 15 | doom-level | Doom 2 Level Design | — | — |
| 9 | 16 | in-front-of-mirror | In Front of a Mirror | — | — |
| 10 | 17 | neko-ate-my-eyes | Oh No! Neko Ate My Eyes! | https://fanglin.itch.io/nekoatemyeyes | — |
| 11 | 18 | wasteland-recipe | Wasteland Recipe | — | — |
| 12 | 19 | audio-redesign | Audio Redesign: Cooking Scene | — | — |
| 13 | 20 | strangers-in-a-club | Strangers in a Club | https://fanglin.itch.io/strangers-in-a-club | — |
| 14 | 21 | her-path | Her Path of Falling in Love | https://fanglin.itch.io/her-path-of-falling-in-love | — |
| 15 | 22 | coffeeshop | Coffeeshop Demo | https://fanglin.itch.io/coffeeshopdemo | — |
| 16 | 23 | sketchbook | Sketchbook Collections | — | — |
| 17 | 24 | memories-behind | Memories Behind | https://fanglin.itch.io/memoriesbehind | — |
| 18 | 25 | neko-jump | Neko Jump | https://leolym.itch.io/nekojump | Bilibili BV1XUQuYQEb1 |
| 19 | 26 | forest-inn | Forest Inn | — | — |
| 20 | 27 | board-game-fantasy | Board Game: Fantasy World | — | — |

---

## HTML Page Template (no video)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{TITLE} — Anna Tan</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
<nav class="nav">
  <div class="nav-inner">
    <span class="nav-name" data-zh="谈方琳">Anna Tan</span>
    <div class="nav-links">
      <a href="/about.html" data-zh="关于">About</a>
      <a href="https://www.linkedin.com/in/fanglin-tan-2b5745329/" target="_blank">LinkedIn ↗</a>
      <a href="https://geo404anna.itch.io/" target="_blank">itch.io ↗</a>
      <a href="https://github.com/tannnfl" target="_blank">GitHub ↗</a>
      <div class="lang-switch">
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="zh">中</button>
      </div>
    </div>
  </div>
</nav>
<div class="detail-wrap">
  <div class="detail-inner">
    <a class="back-link" href="/">← All Work</a>
    <div class="detail-num">{NUM}</div>
    <h1 class="detail-title">{TITLE}</h1>
    <div class="detail-role">{ROLE}</div>
    <div class="detail-tags">
      {TAGS}
    </div>
    {COVER_IMG_OR_VIDEO}
    <div class="detail-section">
      <h2>Overview</h2>
      <p>{OVERVIEW}</p>
    </div>
    <div class="detail-section">
      <h2>My Role</h2>
      <ul>
        {ROLE_BULLETS}
      </ul>
    </div>
    {DESIGN_NOTES_OPTIONAL}
    {DETAIL_LINKS_OPTIONAL}
  </div>
</div>
<script type="module" src="/lang.js"></script>
<script type="module" src="/cursor-trail.js"></script>
</body>
</html>
```

## Card Template (for index.html)

```html
<div class="project-card" data-href="/project/{SLUG}.html" data-tags="student-project">
  <img class="card-img" src="{IMG_SRC}" alt="{TITLE}" onerror="this.style.display='none'" />
  <div class="card-meta">
    <div class="card-left">
      <div class="card-num">{NUM}</div>
      <div class="card-title">{TITLE}</div>
      <div class="card-desc">{DESC}</div>
    </div>
    <div class="card-right">
      {CARD_TAGS}
    </div>
  </div>
  {PLAY_BADGE_OPTIONAL}
</div>
```

---

## Task 1: Add Student Projects filter button

**Files:**
- Modify: `index.html` (filter-bar section)

- [ ] In `index.html`, add `<button class="filter-btn" data-filter="student-project">Student Projects</button>` as the last button in `.filter-inner` (before the closing `</div>`)
- [ ] Commit: `git commit -m "feat: add Student Projects filter button"`

---

## Task 2: Create detail pages — Game Prototypes (batch 1)

**Files:**
- Create: `project/blind-memory.html`
- Create: `project/hikers-paradise.html`
- Create: `project/ultrahot.html`
- Create: `project/neko-ate-my-eyes.html`
- Create: `project/strangers-in-a-club.html`

### blind-memory.html
```
Num: 08 | Role: Programmer · Technical Artist · Audio Engineer · 2024
Tags: Game Prototype, Audio Design, Unity, FMOD
Overview: A 2D game in which players move through an environment, frame photographs, and watch them auto-post to an in-game blog — part photography puzzle, part atmospheric narrative. Built in Unity with FMOD audio integration.
My Role:
- Led programming, technical art, audio engineering, and project management
- Designed and implemented the photography and blogging mechanics
- Created background art for the main scene and newspaper graphics for the ending sequence
- Collaborated with an artist and narrative designer
Design Notes: The photography-blog loop creates a passive record of the player's journey — every image is both action and artifact. The demo establishes the core mechanic; future iterations will expand into a 3D environment with richer world-building and a more refined visual feedback loop.
itch.io: https://fanglin.itch.io/blind-memories
Bilibili embed: https://www.bilibili.com/video/BV1DZQ3YWEnV/
```

### hikers-paradise.html
```
Num: 09 | Role: Solo Developer · Procedural Generation · 2025
Tags: Game Prototype, Procedural Generation, Unity, Solo Dev
Overview: A national-park management simulator in which players sculpt infinite procedurally generated mountains and maintain terrain in real time. Six tool modes — dig, raise, flatten, smooth, paint, and tree edit — give players direct authorship over the landscape.
My Role:
- Designed and implemented all six terrain-editing tools
- Built the procedural mesh system: vertex/triangle generation, Perlin-noise height shaping with edge falloff
- Authored an intersection shader for real-time brush feedback
- Implemented slope- and height-based vertex coloring with procedural tree placement
- Built the full UI flow
Design Notes: The challenge was keeping terrain editing tactile and immediate: each brush stroke had to feel responsive without causing frame drops. Future development targets trail placement and a lightweight economy layer.
```

### ultrahot.html
```
Num: 12 | Role: Solo Developer · Action Game · 2025
Tags: Game Prototype, Solo Dev, Unity
Overview: A top-down action prototype in which time scales with the player's movement speed — nearly freezing when stationary, accelerating when moving. Players navigate enemy encounters using this dilation to plan routes and eliminate threats with a sense of deliberate precision.
My Role:
- Designed the time-dilation mechanic and tuned the speed–time curve
- Implemented NavMesh-based enemy AI pathfinding
- Built the full gameplay loop: movement, shooting, enemy pursuit, and win/lose conditions
Design Notes: Inspired by Superhot, this prototype explores what the core mechanic feels like stripped of presentation. The goal was to validate whether the time-dilation tension holds up mechanically before adding art or narrative.
Bilibili: https://www.bilibili.com/video/BV1GUQuYXEoc/
```

### neko-ate-my-eyes.html
```
Num: 17 | Role: Solo Developer · Audio Design · 2024
Tags: Game Prototype, Audio Design, Unity, FMOD, Solo Dev
Overview: A spatial audio game in which the player has lost their sight and must locate five cats hidden in darkness using only 3D sound. Players whistle to elicit responses from nearby cats, navigate via audio proximity cues, and interact with objects — cat, radio, or window — to identify them.
My Role:
- Designed the full audio-navigation system using Unity 2D + FMOD
- Implemented 3D spatial sound for all interactive elements
- Created the beeping proximity indicators and text feedback system
- Built the level blockout and interaction framework
itch.io: https://fanglin.itch.io/nekoatemyeyes
```

### strangers-in-a-club.html
```
Num: 20 | Role: Solo Developer · Narrative Design · 2024
Tags: Game Prototype, Narrative, Solo Dev, Unity
Overview: A short observational game set in a nightclub. Players click on characters — a soft-hearted security guard, a dejected figure on a chair, an exuberant dancer — and catch glimpses of hidden inner lives that contrast with surface appearances.
My Role:
- Designed all character concepts and narrative beats
- Implemented the click-to-reveal interaction system in Unity
- Created original 2D artwork for all characters and environment
- Designed the audio atmosphere drawing on personal experience with Lower East Side nightlife
Design Notes: The game deliberately withholds context: players project meaning onto strangers rather than receiving a prescribed story. Future iterations will add more poetic interaction layers and the original audio and photographic assets produced but not included in the initial build.
itch.io: https://fanglin.itch.io/strangers-in-a-club
```

- [ ] Create all 5 files above following the HTML template
- [ ] Commit: `git commit -m "feat: add game prototype student project pages (batch 1)"`

---

## Task 3: Create detail pages — Game Prototypes (batch 2)

**Files:**
- Create: `project/her-path.html`
- Create: `project/coffeeshop.html`
- Create: `project/memories-behind.html`
- Create: `project/neko-jump.html`
- Create: `project/forest-inn.html`

### her-path.html
```
Num: 21 | Role: Solo Developer · Narrative Design · 2024
Tags: Game Prototype, Narrative, Solo Dev, Unity
Overview: A one-way platformer exploring the emotional arc of a toxic relationship. Inspired by the cover of The First Bad Man, the game uses its mechanics as metaphor: the player can only descend — there is no return. Roses become guns; affection becomes entrapment.
My Role:
- Designed the movement system (walk only, no jump) to enforce the narrative constraint of forward momentum with no escape
- Built the one-way platforming architecture in Unity
- Implemented trigger-volume dialogue system for narrative delivery
- Created all 2D visual assets
itch.io: https://fanglin.itch.io/her-path-of-falling-in-love
```

### coffeeshop.html
```
Num: 22 | Role: Solo Developer · Game Design · 2024
Tags: Game Prototype, Solo Dev, Unity
Overview: A cozy café management game. Players take orders, serve beverages and food, and keep the atmosphere warm. Bossa nova sets the tone: unhurried, aesthetic, and deliberately low-stakes. The game is a space to relax, not a test of speed.
My Role:
- Designed the full management loop: customer arrival, order intake, serving, and ambiance maintenance
- Built all gameplay systems in Unity
- Designed and created all 2D art assets and audio
Design Notes: The game's core argument is that relaxation is a legitimate design goal. The absence of a timer or penalty is a deliberate choice, not an omission. Future plans include a coffee-making mini-game, shop customization via earned currency, and varied customer personalities.
itch.io: https://fanglin.itch.io/coffeeshopdemo
```

### memories-behind.html
```
Num: 24 | Role: Solo Developer · Artist · 2024
Tags: Game Prototype, Narrative, Solo Dev, Unity
Overview: A flat game documenting Shanghai's 2020–2022 COVID lockdown through the lens of personal memory. Drawing on photographs taken with a secondhand camera on now-quiet streets, the game uses Photoshop collage and Unity to render an atmosphere of residual grief in spaces that have returned to normality.
My Role:
- Designed the flat-game narrative structure: a linear image-sequence as spatial memoir
- Photographed street documentation across Shanghai during and after restrictions
- Created all visual assets using Photoshop collage and original photography
- Implemented the full game in Unity
Design Notes: "A flat game is a book made of images, while the singular dimension of linear narrative is extended." The mechanics are minimal by intent: the work asks players to witness, not act.
itch.io: https://fanglin.itch.io/memoriesbehind
```

### neko-jump.html
```
Num: 25 | Role: Animator · Artist · Ludum Dare 52 · 2023
Tags: Game Prototype, Group Project, Unity
Overview: A puzzle-platformer in which players control a black cat with object-manipulation abilities. Each platform vanishes after the cat steps on it, demanding careful planning and precise timing across an escalating set of stages. Submitted to Ludum Dare 52 and ranked in the top 10% out of 1,597 entries.
My Role:
- Created all character animations and grid tile assets using Aseprite
- Delivered the complete animation pipeline for a 3-person team
Recognition:
- Top 10% finish at Ludum Dare 52 (1,597 submissions)
itch.io: https://leolym.itch.io/nekojump
Bilibili: https://www.bilibili.com/video/BV1XUQuYQEb1
```

### forest-inn.html
```
Num: 26 | Role: Solo Developer · 2022
Tags: Game Prototype, Solo Dev, Unity
Overview: An early game prototype exploring narrative atmosphere and environmental design. Developed as an independent project during early game design study.
My Role:
- Designed and implemented the full prototype independently
- Created all visual assets and gameplay systems
```

- [ ] Create all 5 files above following the HTML template
- [ ] Commit: `git commit -m "feat: add game prototype student project pages (batch 2)"`

---

## Task 4: Create detail pages — Level Design & Audio

**Files:**
- Create: `project/wandering-shibuya.html`
- Create: `project/doom-level.html`
- Create: `project/wasteland-recipe.html`
- Create: `project/blockdog-audio.html`
- Create: `project/audio-redesign.html`

### wandering-shibuya.html
```
Num: 11 | Role: Solo Level Designer · Unreal Engine · 2025
Tags: Level Design, Unreal Engine, Solo Dev
Overview: An open-world level recreation of Shibuya Station and its surrounding district, built in Unreal Engine. The project follows a structured iteration process — research, sketch, blockout, playtest — with documented feedback loops guiding each revision.
My Role:
- Conducted environmental research and produced reference documentation
- Sketched and iterated on layout plans before entering the engine
- Built and refined the full blockout across three playtest iterations
- Added encounter design, detail passes, and pedestrian flow logic
- Collected and implemented structured playtest feedback at each stage
```

### doom-level.html
```
Num: 15 | Role: Solo Level Designer · SLADE 3 · 2025
Tags: Level Design, Solo Dev
Overview: A fully realized Doom 2 level built over three weeks using SLADE 3. The project progresses from hand-drawn layout sketches through environmental construction to enemy placement and pacing refinement — a complete level design pipeline within a classic engine constraint set.
My Role:
- Sketched and iterated on level layouts by hand before entering SLADE 3
- Constructed the full environment geometry in SLADE 3
- Designed and playtested enemy placement for pacing and combat flow
- Iterated on encounter density and spatial rhythm based on playtest sessions
```

### wasteland-recipe.html
```
Num: 18 | Role: Solo Level Designer · Unreal Engine 5 · 2024
Tags: Level Design, Unreal Engine, Solo Dev
Overview: A themed level for a walking simulator, built in Unreal Engine 5. The project moves from design planning through blockout to full prop and detail implementation, with environmental storytelling driving prop placement and spatial narrative.
My Role:
- Produced the initial level design plan and layout diagram
- Executed a full blockout pass for spatial testing
- Sourced and placed props using Unreal Marketplace assets
- Implemented Blueprint interactions and environmental detail
- Iterated layout based on walkthrough testing
```

### blockdog-audio.html
```
Num: 14 | Role: Solo Audio Designer · FMOD · 2025
Tags: Audio Design, FMOD, Unity, Solo Dev
Overview: A complete audio design implementation for a block-stacking game. Sound effects layer bubble, jelly, and dog-bark samples to characterize each player action — pickup, throw, and death — with volume and pitch communicating effort and consequence. Background music adapts in real time via an FMOD danger-level parameter, escalating across three intensity phases as the stack height increases.
My Role:
- Designed and implemented all SFX using layered sample composition in FMOD
- Built the adaptive music system: FMOD parameter-driven stems sourced from freesound.org
- Applied random pitch automation to all looping SFX to prevent listener fatigue
- Tuned loudness relationships to maintain gameplay readability
Design Notes: The gentler pickup vs. louder throw relationship encodes relative effort; subdued death audio creates emotional weight without melodrama. The three-phase music escalation rewards spatial awareness — players who read the stack height also read the tension.
```

### audio-redesign.html
```
Num: 19 | Role: Solo Audio Designer · 2024
Tags: Audio Design, Solo Dev
Overview: An audio redesign of a cooking scene from the Japanese animated film In the Corner of the World. The original scene foregrounds dialogue; this version shifts focus to the kitchen itself — layering ambient cooking sounds to foreground the warmth and sensory richness of domestic routine.
My Role:
- Analyzed the original scene's audio mix and identified redesign intent
- Sourced, layered, and mixed kitchen and cooking sounds to build a cohesive ambient bed
- Balanced the redesigned track against the original animation's visual rhythm
Design Notes: "The sounds in the kitchen are one of people's most familiar sounds, like oxygen. They're beautiful and strong, yet hardly noticeable." The design goal was to make those unconscious sounds the primary focus.
```

- [ ] Create all 5 files above
- [ ] Commit: `git commit -m "feat: add level design and audio student project pages"`

---

## Task 5: Create detail pages — 3D Art & 2D Art

**Files:**
- Create: `project/flare-gun.html`
- Create: `project/rocket-3d.html`
- Create: `project/in-front-of-mirror.html`
- Create: `project/sketchbook.html`
- Create: `project/board-game-fantasy.html`

### flare-gun.html
```
Num: 10 | Role: Solo 3D Artist · Maya · 2025
Tags: 3D Art, Solo Dev
Overview: A hard-surface 3D model of a flare gun, created in Maya. An in-progress study in weapon modeling and surface detail.
My Role:
- Modeled the full asset from reference in Maya
- Applied UV mapping and initial surface materials
Cover image: https://fanglint.wordpress.com/wp-content/uploads/2025/03/screenshot-2025-03-23-at-6.17.45e280afpm.png
```

### rocket-3d.html
```
Num: 13 | Role: Solo 3D Artist · Maya · 2025
Tags: 3D Art, Solo Dev
Overview: A stylized rocket model built from a reference photograph. The project emphasizes cartoony proportions, clean UV mapping, and hand-painted texture work — including a checkered pattern applied via Photoshop.
My Role:
- Modeled the full asset in Maya with attention to silhouette and proportion
- UV-mapped the geometry and exported to Photoshop for texture authoring
- Created the checkered livery texture by hand in Photoshop
```

### in-front-of-mirror.html
```
Num: 16 | Role: Solo Artist · 2D Digital Illustration · 2025
Tags: 2D Art, Solo Dev
Overview: A standalone 2D digital illustration.
My Role:
- Conceived and executed the illustration digitally in Artstudio
Cover image: https://fanglint.wordpress.com/wp-content/uploads/2025/01/untitled-36.png
```

### sketchbook.html
```
Num: 23 | Role: Solo Artist · 2D · Ongoing
Tags: 2D Art, Solo Dev
Overview: A curated collection of digital sketches and concept drawings spanning character studies, environmental thumbnails, and exploratory illustration.
My Role:
- Produced all sketches and concept art independently
- Maintained an ongoing sketchbook practice across game design projects
```

### board-game-fantasy.html
```
Num: 27 | Role: Solo Game Designer · Board Game · 2022
Tags: Game Design, Solo Dev
Overview: A fantasy-themed tabletop board game designed as an independent project. The design covers core rules, component specifications, and thematic world-building. Full ruleset available as a PDF.
My Role:
- Designed all game mechanics, rules, and win conditions
- Created component artwork and the full rulebook
```

- [ ] Create all 5 files above
- [ ] Commit: `git commit -m "feat: add 3D art and 2D art student project pages"`

---

## Task 6: Add all 20 cards to index.html

**Files:**
- Modify: `index.html` (inside `.feed` div, after existing card 07)

Add 20 cards numbered 08–27, all with `data-tags="student-project"`. Use card-doc-header style for non-playable entries (art, audio redesign). Use card with `<img>` for entries with known cover images.

Cards with itch.io links get a `<div class="card-play">` with `<a class="play-badge ext-link">`.

- [ ] Add all 20 cards to `index.html`
- [ ] Open `http://localhost:5173` and verify:
  - "Student Projects" filter shows all 20 cards and nothing else
  - "All" shows all 27 cards
  - Each card click navigates to the correct detail page
- [ ] Commit: `git commit -m "feat: add 20 student project cards to homepage"`

---

## Self-Review

- **Spec coverage:** All 20 projects listed with detail pages and cards. Filter button added. ✓
- **Placeholder scan:** No TBDs. Forest Inn and Board Game have limited source content but honest, professional overviews. ✓
- **Type consistency:** All pages use same nav, detail-wrap, detail-inner, detail-section structure. Card tags all use `student-project` matching the filter button's `data-filter`. ✓
