# CLAUDE.md - 新疆高铁国际旅行社网站

## 项目概述

新疆高铁国际旅行社品牌展示网站。纯静态 HTML/CSS/JS，以地域文化融合风格展示旅行社形象、路线、资质，建立品牌信任感。

## 标准文件路径

开发前必读以下文件：

| 文件 | 内容 | 何时读 |
|------|------|--------|
| [docs/requirements.md](docs/requirements.md) | 产品需求文档 | 了解功能范围时 |
| [docs/design-system.md](docs/design-system.md) | 设计规范（颜色/字体/间距/圆角） | 写任何样式前 |
| [docs/technical-spec.md](docs/technical-spec.md) | 技术选型、CDN 引用、配置 | 了解技术约束时 |
| [docs/execution-steps.md](docs/execution-steps.md) | 分阶段执行步骤和验收标准 | 开始新阶段前 |

## 技术栈

- HTML5 纯静态页面
- [Tailwind CSS v3](https://cdn.tailwindcss.com) (CDN)
- [Phosphor Icons](https://unpkg.com/@phosphor-icons/web) (CDN)
- [Google Fonts](https://fonts.google.com) — Noto Serif SC, Noto Sans SC, Geist
- Vanilla JavaScript (ES6+)

## 设计系统速查

### 颜色
- 文字色: `#1a2a3a` (夜空蓝)
- 强调色: `#0d9488` (绿松石)
- 暖色点缀: `#d4a574` (沙漠金)
- 背景: `#fafaf8` (暖白)
- 卡片: `#ffffff`

### 字体
- 中文标题: `Noto Serif SC` (font-serif)
- 中文正文: `Noto Sans SC` (font-sans)
- 英文/数字: `Geist` (font-display)

### 设计调性
- 地域文化融合 + 现代极简
- 图片/视频为主视觉
- 留白慷慨 (区域间距 `py-24` ~ `py-32`)
- 圆角统一 (`rounded-3xl` 容器, `rounded-full` 按钮)
- 无 AI 紫、无荧光色、无 em-dash

## 开发工作流

每次开发遵循以下流程：

1. **开始前**: 阅读 `docs/execution-steps.md` 确认当前阶段
2. **开发中**: 遵循 `docs/design-system.md` 的设计规范
3. **完成后**: 
   - 在浏览器中打开页面预览
   - 在 `开发日志/` 下创建或更新当日日志
   - 在 `docs/execution-steps.md` 中更新任务状态
4. **下一步**: 确认当前阶段验收标准全部通过后再进入下一阶段

## 开发日志规范

日志文件命名: `开发日志/YYYY-MM-DD.md`

每篇日志包含:
- **今日完成**: 完成的具体事项
- **待办事项**: 尚未完成的事项
- **遇到的问题**: 技术或设计上的问题
- **明日计划**: 下一步要做的事

## 文件夹结构

```
├── index.html          # 首页
├── about.html          # 关于我们
├── routes.html         # 路线推荐
├── login.html          # 登录
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
├── docs/               # 项目文档
├── 开发日志/            # 每日开发日志
└── CLAUDE.md           # 本文件
```
