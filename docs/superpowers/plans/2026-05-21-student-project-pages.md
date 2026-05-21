# Student Project Detail Pages — Implementation Plan

> **For agentic workers:** Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement task-by-task.

**Goal:** Create 20 missing student project detail pages at `/project/*.html`, matching the existing site style, bilingual (EN/ZH), with all WordPress content and embedded videos.

**Architecture:** Static HTML files following the exact template of existing pages (e.g. `project/survival-skills.html`). All CSS/JS already loaded via `/portfolio/assets/`. Bilingual via `data-zh="..."` attributes on every text element, identical to existing pages.

**Tech Stack:** Plain HTML, existing CSS (`/portfolio/assets/cursor-trail-CYZb0a0Q.css`), existing JS (`/portfolio/assets/cursor-trail-Cv3zRzco.js`). No build step needed.

---

## Session Context (What Was Done Before)

This is a continuation. The portfolio site at `tannnfl.github.io/portfolio` was fixed and deployed:
- ✅ All internal links fixed with `/portfolio/` prefix
- ✅ GitHub Pages build fixed (removed node_modules submodule)
- ✅ Student project cards reordered, cover images synced with WordPress
- ✅ Editor tool cards placed after their GDDs
- ✅ Gap added between student project cards
- ❌ Nav/filter bar design: user said 配色和色块设计不好看 — **needs redesign** (separate task)
- ❌ 20 student project detail pages all return 404 — **this plan**

**Repo:** `/Users/fanglintan/WebstormProjects/Portfolio`
**Deploy:** `git push origin main` → GitHub Actions auto-deploys

---

## Template

Base every page on `project/survival-skills.html`. Key structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PAGE TITLE — Anna Tan</title>
  <script type="module" crossorigin src="/portfolio/assets/cursor-trail-Cv3zRzco.js"></script>
  <link rel="stylesheet" crossorigin href="/portfolio/assets/cursor-trail-CYZb0a0Q.css">
</head>
<body>
<nav class="nav">
  <div class="nav-inner">
    <span class="nav-name" data-zh="谈方琳">Anna Tan</span>
    <div class="nav-links">
      <a href="/portfolio/about.html" data-zh="关于">About</a>
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
    <a class="back-link" href="/portfolio/" data-zh="← 全部作品">← All Work</a>
    <div class="detail-num">NN</div>
    <h1 class="detail-title">TITLE</h1>
    <div class="detail-role" data-zh="中文角色描述">EN role description</div>
    <div class="detail-tags">
      <span class="tag" data-zh="标签中文">Tag EN</span>
      <!-- itch.io link tag if applicable: -->
      <a class="tag tag-black" href="ITCH_URL" target="_blank" data-zh="在 itch.io 上玩 ↗">Play on itch.io ↗</a>
    </div>

    <!-- Cover image -->
    <img class="detail-img" src="WORDPRESS_IMG_URL" alt="TITLE" />

    <!-- Sections -->
    <div class="detail-section">
      <h2 data-zh="总览">Overview</h2>
      <p data-zh="中文...">English...</p>
    </div>

    <div class="detail-section">
      <h2 data-zh="我的职责">My Role</h2>
      <ul>
        <li data-zh="中文">English</li>
      </ul>
    </div>

    <!-- For image galleries: -->
    <div class="detail-section">
      <h2 data-zh="截图">Screenshots</h2>
      <img class="detail-img" src="URL" alt="caption" />
      <img class="detail-img" src="URL" alt="caption" />
    </div>

    <!-- For Bilibili video: -->
    <div class="detail-section">
      <h2 data-zh="演示视频">Demo Video</h2>
      <div class="video-wrap" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
        <iframe src="https://player.bilibili.com/player.html?bvid=BVID&page=1&autoplay=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

    <div class="detail-links">
      <a class="play-badge" href="ITCH_URL" target="_blank" data-zh="在 itch.io 上玩 ↗">Play on itch.io ↗</a>
    </div>
  </div>
</div>
</body>
</html>
```

**Bilibili BV ID extraction:** from URL `https://www.bilibili.com/video/BV1DZQ3YWEnV/` → BV ID is `BV1DZQ3YWEnV`

---

## WordPress Content (Pre-fetched — No Need to Re-fetch)

### 1. blind-memory.html
- **Title:** Blind Memory (Demo)
- **Role:** Programmer, Technical Artist, Audio Engineer, Project Manager · Group Project
- **Tags:** Game Prototype, Audio Design, Unity 2D, FMOD
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/12/kapture-2024-12-11-at-17.30.01.gif`
- **itch.io:** https://fanglin.itch.io/blind-memories
- **Bilibili:** https://www.bilibili.com/video/BV1DZQ3YWEnV/ → BV: `BV1DZQ3YWEnV`
- **Overview:** 2D photography game (Unity + FMOD). Players move around and take pictures, automatically posted on an in-game blog. Demo for a larger concept; plans to expand to 3D with enhanced world-building.
- **Role details:** Background art for main scene and newspaper ending; collaborated with artist and narrative designer.
- **Images:** (use cover gif as main image)

---

### 2. hikers-paradise.html
- **Title:** Hiker's Paradise: Demo
- **Role:** Solo Developer · Procedural Terrain Generation
- **Tags:** Game Prototype, Procedural Generation, Unity
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-18-184011.png`
- **itch.io:** https://fanglin.itch.io/ (no specific page)
- **Overview:** Simulation game about managing a national park. Demo lets players generate infinite mountains and edit terrain with tools: dig, raise, flatten, smoothen, paint colors, edit trees.
- **Process:**
  1. Generate mesh with vertices and triangles
  2. Shape via vertex height modification (multiple Perlin noise layers + edge falloff)
  3. Intersection shader for brush tool
  4. Slope + height-based vertex color mapping; Perlin noise tree generation
  5. UI and terrain editing
  6. Future: Trail system and economy system
- **Images:**
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-09-235634.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-10-040815.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-10-232151.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/05/image.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-13-150044.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-18-184011.png`

---

### 3. flare-gun.html
- **Title:** Flare Gun: 3D Model (In Progress)
- **Role:** Solo 3D Artist
- **Tags:** 3D Art, Maya, In Progress
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/03/screenshot-2025-03-23-at-6.17.45e280afpm.png`
- **Overview:** Work-in-progress 3D model of a flare gun. Modeled in Maya.
- **Images:** (cover only — limited content on post)

---

### 4. wandering-shibuya.html
- **Title:** Wandering Shibuya: An Open World Attempt (In Progress)
- **Role:** Solo Developer · Level Designer
- **Tags:** Level Design, Unreal Engine, 3D, In Progress
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/03/screenshot-2025-03-19-031710-3.png`
- **Tools:** Unreal Engine
- **Overview:** Open-world level design project recreating Shibuya Station and surroundings. Iterative development through research, blockout, playtesting, and refinement.
- **Process sections:**
  1. Research — reference gathering
  2. Block out: The Crossing — initial 3D blockout
  3. Sketching: Full map — conceptual map design
  4. Iteration 1 — recreating the crossing
  5. Playtest 1 — feedback collection
  6. Iteration 2 — completing general blockout
  7. Playtest 2 — second round of feedback
  8. Iteration 3 — details and encounters
- **PDF:** https://fanglint.wordpress.com (Shibuya Station documentation PDF)

---

### 5. ultrahot.html
- **Title:** Ultrahot Demo
- **Role:** Solo Developer (Design + Programming)
- **Tags:** Game Prototype, Unity 3D, Solo Dev
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/03/screenshot-2025-03-03-025236.png`
- **Bilibili:** https://www.bilibili.com/video/BV1GUQuYXEoc/ → BV: `BV1GUQuYXEoc`
- **Overview:** Top-down action game inspired by Superhot. Players escape enemies and eliminate them. Core mechanic: time scales with player movement — faster when moving, nearly stopped when standing still.
- **Technical:** Unity 3D, Navmesh for navigation, `Time.timeScale` for time manipulation.

---

### 6. rocket-3d.html
- **Title:** 3D Modeling: Rocket
- **Role:** Solo 3D Artist · Class Assignment
- **Tags:** 3D Art, Maya
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/02/rocketlighted.jpg`
- **Overview:** Cartoonish rocket modeled from reference. Practice in UV mapping and texture work.
- **Tools:** Autodesk Maya (modeling + UV mapping), Adobe Photoshop (checkerboard texture)
- **Images:**
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/02/rocketlighted.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/02/screenshot-2025-02-20-153252.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/02/screenshot-2025-02-20-153654.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/02/screenshot-2025-02-20-153641.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2025/02/screenshot-2025-02-20-153330.png`

---

### 7. blockdog-audio.html
- **Title:** Blockdog Audio Design
- **Role:** Solo Audio Designer
- **Tags:** Audio Design, FMOD, Unity
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/02/screenshot-2025-02-08-000415.png`
- **Bilibili:** https://www.bilibili.com/video/BV1DZQ3YWEsT/ → BV: `BV1DZQ3YWEsT`
- **Overview:** Sound effects and dynamic background music for the game "Blockdog." Designed audio to match the game's jelly-like visual aesthetic.
- **SFX Design:**
  - Layered bubble/jelly sounds with dog barks for action audio
  - Pick-up sounds softer than throw sounds (convey effort)
  - Death audio: toned-down, melancholic
  - Block drop: subtle state indicator
  - All repeating SFX: randomized pitch automation
- **Dynamic Music:** Parameter "danger level" in FMOD tracks highest block position (1–11). Music density increases with added percussion as danger rises. Three music phases. Stems from freesound.org.

---

### 8. doom-level.html
- **Title:** Doom 2 Level with SLADE
- **Role:** Solo Level Designer
- **Tags:** Level Design, SLADE 3
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/02/screenshot-2025-02-18-015957.png`
- **Overview:** Doom 2 level created over three weeks using SLADE 3 editor. Iterative design from sketch to enemy placement.
- **Process:**
  - Week 1: Hand-sketched level layouts
  - Week 2: Built environments in SLADE 3
  - Week 3: Enemy placement, pacing and combat dynamics iteration
- **Playtest files:** https://drive.google.com/drive/folders/11XeFUNPtHxDGMdItSCm5sjhBeiPbORJr
- **Analysis post:** https://momomaothink.wordpress.com/2025/02/15/level-design-workshop-doom-dynamic-of-combat-and-backtracking-in-space/

---

### 9. in-front-of-mirror.html
- **Title:** In Front of a Mirror
- **Role:** Solo Artist · Digital Illustration
- **Tags:** 2D Art, Digital Illustration
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2025/01/untitled-36-1.png`
- **Overview:** Digital 2D illustration. (WordPress post had minimal text content — create a short but complete page.)

---

### 10. neko-ate-my-eyes.html
- **Title:** Oh No! Neko Ate My Eyes!
- **Role:** Solo Developer (Design + Programming)
- **Tags:** Game Prototype, Audio Design, Unity 2D, FMOD
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/12/audiogame.gif`
- **itch.io:** https://fanglin.itch.io/nekoatemyeyes
- **Overview:** Audio-focused experimental game. Players locate 5 cats in darkness using 3D spatial sound. Whistle to trigger cat responses; interact with environment through touch and audio feedback.
- **Mechanics:** Whistle input, keypress toggles, spatial sound detection. No visual gameplay — audio is the core.
- **Images:**
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/12/audiogame.gif`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/12/screenshot-2024-12-14-at-1.00.00am.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/12/screenshot-2024-12-14-at-12.09.09am-2.png`

---

### 11. wasteland-recipe.html
- **Title:** Wasteland Recipe: Demo
- **Role:** Solo Developer · Level Designer
- **Tags:** Level Design, Unreal Engine 5, Game Prototype
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/screenshot_2024-12-09_085042.png`
- **Bilibili:** https://www.bilibili.com/video/BV1XUQuYQESy/ → BV: `BV1XUQuYQESy`
- **Overview:** Themed level for a walking simulator in Unreal Engine 5. Level blockout, Blueprint scripting for dialogue/audio triggers, environmental detailing with Marketplace assets.
- **Timeline:**
  - Nov 2: Level design planning
  - Dec 6: Blockout complete, props implemented
- **Images:**
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/image.webp`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/screenshot-2025-02-07-204826.png`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-19-at-7.38.34pm.png`

---

### 12. audio-redesign.html
- **Title:** Audio Redesign: Cooking Scene
- **Role:** Solo Audio Designer
- **Tags:** Audio Design
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/10/screenshot-2025-02-07-231209.png`
- **Overview:** Redesigned a cooking scene from Japanese anime *In the Corner of the World*. "The sounds in the kitchen are one of people's most familiar sounds, like oxygen. They're beautiful and strong, yet hardly noticeable." Layered food and cooking audio to create a warmer, cozier atmosphere than the original.
- **Approach:** Enhanced ambient kitchen soundscapes by adding multiple cooking/food sound layers to intensify the cozy, slice-of-life feeling.

---

### 13. strangers-in-a-club.html
- **Title:** Strangers in a Club
- **Role:** Solo Developer
- **Tags:** Game Prototype, Narrative, Unity 2D
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/kapture-2024-11-09-at-19.34.52.gif`
- **itch.io:** https://fanglin.itch.io/strangers-in-a-club
- **Overview:** Interactive game set in a nightclub. Players click on characters to observe them and gain insights into their personalities. Inspired by Lower East Side nightlife.
- **Mechanics:** Click on patrons to observe; interpret character personalities through visual cues (e.g., security guard who appears tough but is soft inside). Each player's interpretation creates a unique experience.
- **Future vision:** More poetic interaction, original audio, photos, GIFs.

---

### 14. her-path.html
- **Title:** Her Path of Falling in Love
- **Role:** Solo Developer
- **Tags:** Game Prototype, Narrative, Unity
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/kapture-2024-11-09-at-19.32.00.gif`
- **itch.io:** https://fanglin.itch.io/her-path-of-falling-in-love
- **Overview:** Inspired by the book cover of *The First Bad Man*. Explores toxic relationships — "drowning in a manipulative and toxic relationship, where the roses are just a disguise of guns." Final scene: a gun emerging from an angry mouth — metaphor for verbal abuse and gaslighting.
- **Mechanics:**
  - Players can only move (no jumping)
  - Stepping down platforms prevents going back up
  - One-way progression emphasizes irreversible commitment

---

### 15. coffeeshop.html
- **Title:** Coffeeshop Demo
- **Role:** Solo Developer (Art + Audio)
- **Tags:** Game Prototype, Solo Dev, Unity
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/kapture-2024-11-09-at-19.10.16-1.gif`
- **itch.io:** https://fanglin.itch.io/coffeeshopdemo
- **Overview:** Cozy coffee shop management game inspired by bossa nova music. Players serve customers food and beverages while maintaining a relaxed atmosphere. Emphasis on "vibe and aesthetic" over challenge.
- **Mechanics:** Serve food/coffee, ensure customer satisfaction, coffee mini-games (planned), shop customization with earned currency.
- **Future:** More scenes, elaborate coffee preparation, shop decoration, diverse customer types.

---

### 16. sketchbook.html
- **Title:** Sketchbook Collections
- **Role:** Artist · Ongoing
- **Tags:** 2D Art, Digital Illustration
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/kapture-2024-11-06-at-00.41.30.gif`
- **Overview:** Ongoing collection of digital 2D sketches — character studies and environmental thumbnails.
- **Images (gallery):**
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/2.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3736.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3739.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3738.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3737.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3735.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3734.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/4-2.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/1-2.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3741-1.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3742-1.jpg`
- **PDF:** https://fanglint.wordpress.com/wp-content/uploads/2024/11/sketchbook.pdf

---

### 17. memories-behind.html
- **Title:** Memories Behind
- **Role:** Solo Developer
- **Tags:** Game Prototype, Narrative, Flat Game, Unity
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/memoriesbehind.gif`
- **itch.io:** https://fanglin.itch.io/memoriesbehind
- **Overview:** A flat game about Shanghai's 2022 COVID lockdown. "A flat game is a book made of images, while the singular dimension of linear narrative is extended." Uses photography and light interaction to tell the story.
- **Story behind:** Inspired by returning to Shanghai after lockdown — walking familiar but changed streets, noticing lingering infrastructure, wondering about the protesters.
- **Concept:** Collage techniques in Photoshop for early conceptual development.
- **Images:**
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/memoriesbehind.gif`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3728-1.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3727-1.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3725-1.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/img_3724-1.jpg`
  - `https://fanglint.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-06-at-12.09.03am.png`

---

### 18. neko-jump.html
- **Title:** Neko Jump
- **Role:** Animator & Visual Artist · Group Project (3 members)
- **Tags:** Game Prototype, Ludum Dare 52, Top 10%
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/kapture-2024-11-09-at-20.26.01.gif`
- **itch.io:** https://leolym.itch.io/nekojump
- **Bilibili:** https://www.bilibili.com/video/BV1XUQuYQEb1/ → BV: `BV1XUQuYQEb1`
- **Overview:** Control a black cat with magical powers to manipulate objects. As the cat moves, each previous platform disappears — strategic, timing-based platformer.
- **Achievement:** Top 10% of 1,597 Ludum Dare 52 entries.
- **Role:** All animations and grid tile assets created in Aseprite.

---

### 19. forest-inn.html
- **Title:** Forest Inn (2022)
- **Role:** Solo Developer
- **Tags:** Game Prototype, Solo Dev, Unity, 2022
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2022/02/screenshot-2024-11-19-at-8.51.44e280afpm.png`
- **Overview:** Early game prototype from 2022. (WordPress post had minimal content — create a concise page.)
- **PDF concept doc:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/gameconcept.pdf`

---

### 20. board-game-fantasy.html
- **Title:** Board Game: Fantasy World (2022)
- **Role:** Solo Designer · Tabletop
- **Tags:** Game Design, Tabletop, 2022
- **Cover:** `https://fanglint.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-19-at-8.44.23e280afpm.png`
- **Overview:** Tabletop board game design with a fantasy theme. Rules and component design.
- **PDF rulebook:** https://fanglint.wordpress.com/wp-content/uploads/2024/11/boardgame.pdf

---

## Tasks

### Task 1: Batch A — Pages 1–5 (blind-memory, hikers-paradise, flare-gun, wandering-shibuya, ultrahot)

- [ ] Create `project/blind-memory.html` using content from section 1 above. Include Bilibili embed (BV: `BV1DZQ3YWEnV`). itch.io link: https://fanglin.itch.io/blind-memories
- [ ] Create `project/hikers-paradise.html` using content from section 2. Include all 6 screenshots as `<img class="detail-img">` in a Screenshots section.
- [ ] Create `project/flare-gun.html` using content from section 3. Minimal content — use cover image + brief overview.
- [ ] Create `project/wandering-shibuya.html` using content from section 4. Process sections as ordered list.
- [ ] Create `project/ultrahot.html` using content from section 5. Include Bilibili embed (BV: `BV1GUQuYXEoc`).
- [ ] `git add project/blind-memory.html project/hikers-paradise.html project/flare-gun.html project/wandering-shibuya.html project/ultrahot.html && git commit -m "feat: add student project pages batch A (1-5)"`

### Task 2: Batch B — Pages 6–10 (rocket-3d, blockdog-audio, doom-level, in-front-of-mirror, neko-ate-my-eyes)

- [ ] Create `project/rocket-3d.html` — include all 5 images as gallery.
- [ ] Create `project/blockdog-audio.html` — include Bilibili embed (BV: `BV1DZQ3YWEsT`). Sections: SFX Design, Dynamic Music System.
- [ ] Create `project/doom-level.html` — sections: Week 1 / Week 2 / Week 3. Link to playtest files.
- [ ] Create `project/in-front-of-mirror.html` — minimal, art piece, use cover image.
- [ ] Create `project/neko-ate-my-eyes.html` — include gif + 2 screenshots. itch.io: https://fanglin.itch.io/nekoatemyeyes
- [ ] `git add project/rocket-3d.html ... && git commit -m "feat: add student project pages batch B (6-10)"`

### Task 3: Batch C — Pages 11–15 (wasteland-recipe, audio-redesign, strangers-in-a-club, her-path, coffeeshop)

- [ ] Create `project/wasteland-recipe.html` — include Bilibili embed (BV: `BV1XUQuYQESy`). Timeline as process section.
- [ ] Create `project/audio-redesign.html` — no itch.io link. Include cover image.
- [ ] Create `project/strangers-in-a-club.html` — include gif. itch.io: https://fanglin.itch.io/strangers-in-a-club
- [ ] Create `project/her-path.html` — include gif. itch.io: https://fanglin.itch.io/her-path-of-falling-in-love
- [ ] Create `project/coffeeshop.html` — include gif. itch.io: https://fanglin.itch.io/coffeeshopdemo
- [ ] `git add project/wasteland-recipe.html ... && git commit -m "feat: add student project pages batch C (11-15)"`

### Task 4: Batch D — Pages 16–20 (sketchbook, memories-behind, neko-jump, forest-inn, board-game-fantasy)

- [ ] Create `project/sketchbook.html` — gallery of all 11 sketch images. PDF download link.
- [ ] Create `project/memories-behind.html` — include gif + 5 process images. itch.io: https://fanglin.itch.io/memoriesbehind
- [ ] Create `project/neko-jump.html` — include Bilibili embed (BV: `BV1XUQuYQEb1`). itch.io: https://leolym.itch.io/nekojump. Note Top 10% achievement.
- [ ] Create `project/forest-inn.html` — minimal content. PDF concept doc link.
- [ ] Create `project/board-game-fantasy.html` — PDF rulebook link.
- [ ] `git add project/sketchbook.html ... && git commit -m "feat: add student project pages batch D (16-20)"`

### Task 5: Final push and verification

- [ ] `git push origin main`
- [ ] Wait for GitHub Actions deploy (~1 min)
- [ ] Verify each page loads: `curl -s -o /dev/null -w "%{http_code}" https://tannnfl.github.io/portfolio/project/blind-memory.html` (should return 200)
- [ ] Click through each page on the live site to confirm layout, bilingual toggle, and images load

---

## Separate Pending Task: Nav/Filter Bar Redesign

User said: "这个title部分的配色和色块设计不好看"

Issues identified:
- Orange + black dotted stripe at top is too loud
- Full-width dark black filter bar is too heavy
- Bordered link buttons look clunky

**File to edit:** `/Users/fanglintan/WebstormProjects/Portfolio/assets/cursor-trail-CYZb0a0Q.css`

Relevant CSS sections to redesign:
- `.nav` / `.nav-inner` (top stripe comes from somewhere — check CSS)
- `.filter-bar` / `.filter-btn` (the dark background bar)
- Active state `.filter-btn.active` (orange)

Ask user for design direction before making changes.

---

## Bilingual Writing Guide

For every `data-zh` attribute, write natural Chinese — not literal translation. Reference existing pages for tone.

Examples from existing pages:
- "Solo Developer" → `data-zh="独立开发"`
- "Overview" → `data-zh="总览"`
- "My Role" → `data-zh="我的职责"`
- "Design Notes" → `data-zh="设计笔记"`
- "Screenshots" → `data-zh="截图"`
- "Demo Video" → `data-zh="演示视频"`
- "Play on itch.io ↗" → `data-zh="在 itch.io 上玩 ↗"`
- "← All Work" → `data-zh="← 全部作品"`
- "In Progress" → `data-zh="进行中"`
- "Group Project" → `data-zh="团队项目"`
- "Solo Dev" → `data-zh="独立开发"`
- "Top 10% Ludum Dare" → `data-zh="Ludum Dare 前 10%"`
