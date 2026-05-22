# Nav Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 移除顶部彩色条纹和黑色筛选栏背景，导航链接改为纯文字，整体收进 680px 宽度，与内容卡片对齐。

**Architecture:** 所有样式集中在 `assets/cursor-trail-CYZb0a0Q.css`，HTML 分布在 `index.html`、`about.html`、`project/*.html`（29 个）。CSS 改动一次生效全站；HTML 需要统一调整 nav 结构（移出 lang-switch、加 nav-right 包裹层）。

**Tech Stack:** 纯 HTML/CSS，无构建工具，静态文件直接部署 GitHub Pages。

---

## 文件索引

| 文件 | 改动类型 |
|---|---|
| `assets/cursor-trail-CYZb0a0Q.css` | 删除 `body::before`，重写 `.nav-inner`、`.nav-links`、`.lang-switch`、`.filter-bar`、`.filter-btn`、`.filter-inner`；删除 `.nav-top`、`.nav-bottom`、`.nav-tagline` |
| `index.html` | 重构 nav HTML：删除 `nav-top/nav-bottom/nav-tagline`，加 `nav-right` 包裹层 |
| `about.html` | 调整 nav HTML：将 `lang-switch` 从 `nav-links` 内移出，加 `nav-right` |
| `project/*.html`（29 个） | 同 about.html，用脚本批量处理 |

---

## Task 1: 修改 CSS — 删除条纹、重写 nav 样式

**Files:**
- Modify: `assets/cursor-trail-CYZb0a0Q.css`

- [ ] **Step 1: 删除 `body::before`（顶部条纹）**

找到并删除整个规则块：

```css
/* DELETE THIS ENTIRE BLOCK */
body::before{
  content:'';
  display:block;
  height:5px;
  background:repeating-linear-gradient(
    90deg,
    var(--ink) 0,var(--ink) 3px,
    var(--accent) 3px,var(--accent) 6px,
    var(--accent2) 6px,var(--accent2) 9px,
    transparent 9px,transparent 12px
  );
  position:sticky;top:0;z-index:200;
}
```

- [ ] **Step 2: 重写 `.nav-inner`**

将：
```css
.nav-inner{
  width:var(--col);
  display:flex;flex-direction:column;gap:.4rem;
  padding:1.2rem 0 .6rem;
  border-bottom:3px double var(--ink);
}
```
改为：
```css
.nav-inner{
  width:var(--col);
  display:flex;justify-content:space-between;align-items:baseline;
  padding:1rem 0 .5rem;
  border-bottom:2px solid var(--ink);
}
```

- [ ] **Step 3: 删除 `.nav-top`、`.nav-bottom`、`.nav-tagline`**

删除以下三个规则：
```css
/* DELETE */
.nav-top{display:flex;justify-content:space-between;align-items:baseline}
/* DELETE */
.nav-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}
/* DELETE */
.nav-tagline{font-size:.58rem;color:var(--mid);letter-spacing:.05em;font-style:italic}
```

- [ ] **Step 4: 添加 `.nav-right`，重写 `.nav-links` 和 `.nav-links a`**

在 `.nav-name` 规则之后添加 `.nav-right`，然后用以下代码替换 `.nav-links`、`.nav-links a`、`.nav-links a:last-child`、`.nav-links a:hover`：

```css
.nav-right{display:flex;align-items:center}

.nav-links{
  display:flex;font-size:.58rem;
  text-transform:uppercase;letter-spacing:.09em;
  gap:1rem;color:var(--mid);
}
.nav-links a{
  color:var(--mid);transition:color .1s;
}
.nav-links a:hover{color:var(--ink);text-decoration:none}
```

- [ ] **Step 5: 重写 `.lang-switch` 和 `.lang-btn`**

将：
```css
.lang-switch{display:flex;margin-left:.5rem}
```
改为：
```css
.lang-switch{
  display:flex;margin-left:1rem;
  padding-left:1rem;border-left:1px solid var(--tan);
}
```
`.lang-btn` 样式保持不变。

- [ ] **Step 6: Commit CSS 改动**

```bash
cd /Users/fanglintan/WebstormProjects/Portfolio
git add assets/cursor-trail-CYZb0a0Q.css
git commit -m "style: remove top stripe, rework nav to single row"
```

---

## Task 2: 修改 CSS — 重写筛选栏

**Files:**
- Modify: `assets/cursor-trail-CYZb0a0Q.css`

- [ ] **Step 1: 重写 `.filter-bar`**

将：
```css
.filter-bar{display:flex;justify-content:center;background:var(--ink);padding:.5rem 0}
```
改为：
```css
.filter-bar{display:flex;justify-content:center}
```

- [ ] **Step 2: 重写 `.filter-inner`**

将：
```css
.filter-inner{width:var(--col);display:flex;gap:0}
```
改为：
```css
.filter-inner{width:var(--col);display:flex;gap:0;border-bottom:1px solid var(--tan)}
```

- [ ] **Step 3: 重写 `.filter-btn`、`.filter-btn.active`、`.filter-btn:last-child`、`.filter-btn:hover:not(.active)`**

用以下代码替换这四个规则：

```css
.filter-btn{
  font-family:var(--font-mono);font-size:.55rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.1em;
  background:none;border:none;
  border-bottom:2px solid transparent;
  margin-bottom:-1px;
  padding:.45rem .9rem;cursor:pointer;color:var(--mid);
  transition:color .1s;
}
.filter-btn:first-child{padding-left:0}
.filter-btn.active{color:var(--accent);border-bottom-color:var(--accent)}
.filter-btn:hover:not(.active){color:var(--ink)}
```

注意：删除原来的 `.filter-btn:last-child{border-right:none}`，用 `.filter-btn:first-child{padding-left:0}` 替代。

- [ ] **Step 4: 在浏览器验证 index.html**

用任意静态服务器或直接在浏览器打开文件，检查：
- 顶部条纹不见了
- 筛选栏没有黑色背景，变成浅色下划线风格
- 导航链接变成纯文字（虽然 HTML 还没改，所以 nav 视觉上可能还是旧的）

- [ ] **Step 5: Commit**

```bash
git add assets/cursor-trail-CYZb0a0Q.css
git commit -m "style: rework filter bar to underline style, no dark bg"
```

---

## Task 3: 修改 index.html — 重构 nav HTML

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 替换 nav 结构**

找到整个 `<nav class="nav">...</nav>` 块，替换为：

```html
<nav class="nav">
  <div class="nav-inner">
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
</nav>
```

- [ ] **Step 2: 在浏览器验证**

打开 index.html，检查：
- 名字左，导航链接右，同一行
- 导航链接是纯文字，无外框
- EN/中 在链接右侧，有竖线分隔
- 筛选栏是浅色下划线，All 为橙色
- 宽度与卡片对齐（680px）

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "html: restructure index nav to single row with nav-right"
```

---

## Task 4: 修改 about.html

**Files:**
- Modify: `about.html`

当前结构（lang-switch 在 nav-links 内）：
```html
<nav class="nav">
  <div class="nav-inner">
    <span class="nav-name" data-zh="谈方琳">Anna Tan</span>
    <div class="nav-links">
      <a href="/portfolio/" data-zh="作品">Work</a>
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
```

- [ ] **Step 1: 替换 nav 结构**

替换为：
```html
<nav class="nav">
  <div class="nav-inner">
    <span class="nav-name" data-zh="谈方琳">Anna Tan</span>
    <div class="nav-right">
      <div class="nav-links">
        <a href="/portfolio/" data-zh="作品">Work</a>
        <a href="https://www.linkedin.com/in/fanglin-tan-2b5745329/" target="_blank">LinkedIn ↗</a>
        <a href="https://geo404anna.itch.io/" target="_blank">itch.io ↗</a>
        <a href="https://github.com/tannnfl" target="_blank">GitHub ↗</a>
      </div>
      <div class="lang-switch">
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="zh">中</button>
      </div>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: 在浏览器验证 about.html**

打开 about.html，确认 nav 样式与 index.html 一致。

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "html: update about page nav to match new structure"
```

---

## Task 5: 批量修改 project/*.html（29 个文件）

**Files:**
- Modify: `project/*.html` (全部 29 个)

所有 project 页面 nav 结构与 about.html 相同（lang-switch 在 nav-links 内，About 链接指向 `/portfolio/about.html`）。用 Python 脚本批量替换。

- [ ] **Step 1: 运行批量替换脚本**

```bash
python3 - << 'EOF'
import os, re

project_dir = "/Users/fanglintan/WebstormProjects/Portfolio/project"

OLD_NAV = '''<nav class="nav">
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
</nav>'''

NEW_NAV = '''<nav class="nav">
  <div class="nav-inner">
    <span class="nav-name" data-zh="谈方琳">Anna Tan</span>
    <div class="nav-right">
      <div class="nav-links">
        <a href="/portfolio/about.html" data-zh="关于">About</a>
        <a href="https://www.linkedin.com/in/fanglin-tan-2b5745329/" target="_blank">LinkedIn ↗</a>
        <a href="https://geo404anna.itch.io/" target="_blank">itch.io ↗</a>
        <a href="https://github.com/tannnfl" target="_blank">GitHub ↗</a>
      </div>
      <div class="lang-switch">
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="zh">中</button>
      </div>
    </div>
  </div>
</nav>'''

updated = []
skipped = []

for fname in sorted(os.listdir(project_dir)):
    if not fname.endswith(".html"):
        continue
    path = os.path.join(project_dir, fname)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if OLD_NAV in content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content.replace(OLD_NAV, NEW_NAV, 1))
        updated.append(fname)
    else:
        skipped.append(fname)

print(f"Updated: {len(updated)} files")
for f in updated: print(f"  ✓ {f}")
if skipped:
    print(f"Skipped (nav doesn't match exactly): {len(skipped)} files")
    for f in skipped: print(f"  ! {f}")
EOF
```

预期输出：`Updated: 29 files`。如果有 skipped，手动检查那些文件的 nav 结构并手动更新。

- [ ] **Step 2: 验证一个 project 页面**

打开 `project/poplife.html`，确认 nav 布局正确。

- [ ] **Step 3: Commit**

```bash
git add project/
git commit -m "html: batch update all project pages nav to new structure"
```

---

## Task 6: 最终全站验证

- [ ] **Step 1: 检查 index.html**

确认：
- 无顶部条纹
- 名字 + 链接同行，右侧 EN/中 有竖线
- 筛选栏贴近背景色，All 高亮为橙色文字 + 下划线
- 宽度与卡片一致

- [ ] **Step 2: 检查 about.html**

确认 nav 与 index.html 一致。

- [ ] **Step 3: 检查一个 project 页面**

确认 nav 与 index.html 一致。

- [ ] **Step 4: 检查筛选交互**

在 index.html 点击 Game / Design Doc / Tool Dev，确认：
- 高亮切换正常（橙色下划线跟随）
- 卡片筛选功能不受影响

- [ ] **Step 5: 检查语言切换**

点击 中，确认文字切换正常，lang-btn active 状态正确。
