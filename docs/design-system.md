# 设计规范 - 新疆高铁国际旅行社网站

## 设计理念

**地域文化融合 + 现代极简**：从新疆自然风光和维吾尔传统文化中提取元素，以现代设计语言呈现。

## 色彩系统

| 角色 | 色值 | Tailwind | 用途 |
|------|------|----------|------|
| 主文字色 | `#1a2a3a` | 自定义 | 标题、正文，替代纯黑 |
| 强调色 | `#0d9488` | teal-600 | 链接、按钮、重点标记 |
| 暖色点缀 | `#d4a574` | 自定义 | 分割线、图标、细节点缀 |
| 页面背景 | `#fafaf8` | 自定义 | 全站背景色 |
| 卡片背景 | `#ffffff` | white | 卡片、内容容器 |
| 浅灰文字 | `#6b7280` | gray-500 | 次要文字、日期、辅助信息 |

## 字体系统

| 层级 | 字体 | font-family | 用途 |
|------|------|-------------|------|
| 中文标题 | Noto Serif SC | `'Noto Serif SC', serif` | H1-H3 大标题 |
| 中文正文 | Noto Sans SC | `'Noto Sans SC', sans-serif` | 正文、导航、按钮 |
| 英文/数字 | Geist | `'Geist', sans-serif` | 英文标注、数字、日期 |

### 字号层级 (Tailwind)

| 标签 | 字号 | 行高 | 字间距 | 用途 |
|------|------|------|--------|------|
| `.h1` | `text-5xl md:text-7xl` | `leading-none` | `tracking-tighter` | Hero 标题 |
| `.h2` | `text-3xl md:text-5xl` | `leading-tight` | `tracking-tight` | 区域标题 |
| `.h3` | `text-2xl md:text-3xl` | `leading-snug` | `tracking-tight` | 卡片标题 |
| `.body` | `text-base` | `leading-relaxed` | normal | 正文 |
| `.caption` | `text-sm` | `leading-normal` | normal | 辅助文字 |

## 间距系统

- 区域间距: `py-24` ~ `py-32`
- 卡片内边距: `p-6` ~ `p-8`
- 卡片间距: `gap-6`
- 页面最大宽度: `max-w-7xl mx-auto`
- 移动端内边距: `px-4`

## 圆角系统（统一）

- 大容器（卡片、Hero内框）: `rounded-3xl` (24px)
- 中等元素（按钮、输入框）: `rounded-full` (pill) 或 `rounded-xl` (12px)
- 小标签: `rounded-full`

## 阴影系统

- 卡片: `shadow-sm` (微阴影，接近无)
- Hover 卡片: `shadow-md` + `-translate-y-1`
- 导航毛玻璃: `backdrop-blur-xl bg-white/80`

## 视觉元素

- 几何纹样：从维吾尔传统纹样抽象，用作分割装饰
- 图片驱动：大图为主，让新疆风光说话
- 图标库：Phosphor Icons (轻量线条风格)

## 禁止项

- AI 紫色渐变
- 荧光色
- 纯黑 (`#000`) 和纯白 (`#fff`)
- 三列等宽卡片排列
- 过于复杂的 CSS 动画
- em-dash (`—`)
