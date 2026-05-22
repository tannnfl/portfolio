# Portfolio — Claude 操作手册

## 基本信息
- 项目：Anna Tan 个人作品集网站（游戏设计师）
- 路径：`/Users/fanglintan/WebstormProjects/Portfolio/`
- 部署：GitHub Pages（tannnfl/portfolio）
- 构建：Vite（dist/ 为构建产物）
- 语言：英文/中文双语（data-zh 属性切换）

---

## 文件地图

```
Portfolio/
  index.html          主页（项目列表 + 分类过滤）
  about.html          关于页
  project/*.html      29 个项目详情页
  assets/             图片、视频、PDF、JS/CSS
  dist/               构建产物（GitHub Pages 实际读取此目录）
  docs/superpowers/   Claude 计划与规格文档
```

---

## 常见任务

- **新增项目页**：在 `project/` 下新建 `xxx.html`，参考现有页面格式；在 `index.html` 中加对应卡片
- **更新样式**：修改 `index.html` 内的 `<style>` 块或对应 HTML 文件
- **部署**：`git add + commit + push` → GitHub Pages 自动更新

---

## 规范

- commit 格式：`feat/fix/style/reorder: 描述`
- 双语文字：中文用 `data-zh="…"` 属性，英文用元素本体文字
- 默认语言：中文优先
