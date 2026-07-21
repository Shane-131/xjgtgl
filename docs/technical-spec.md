# 技术选型说明 - 新疆高铁国际旅行社网站

## 技术栈

| 层面 | 选型 | 说明 |
|------|------|------|
| 页面 | HTML5 | 纯静态，不依赖任何构建工具 |
| 样式 | Tailwind CSS v3 (CDN) + 自定义 CSS | 快速开发 + 项目级定制 |
| 脚本 | Vanilla JavaScript (ES6+) | 无框架，无 jQuery |
| 图标 | Phosphor Icons (CDN) | 轻量线条风格 |
| 字体 | Google Fonts (Noto Serif SC, Noto Sans SC, Geist) | 免费开源 |

## 为什么选纯静态？

1. 品牌展示网站内容更新频率低
2. 无需后端 CMS，部署简单（任意静态服务器/OSS）
3. 加载速度快，SEO 友好
4. 后续如需动态化，可渐进增强

## CDN 引用

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Phosphor Icons -->
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
```

## Tailwind Config

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            ink: '#1a2a3a',
            teal: '#0d9488',
            gold: '#d4a574',
            warm: '#fafaf8',
          }
        },
        fontFamily: {
          serif: ['Noto Serif SC', 'serif'],
          sans: ['Noto Sans SC', 'sans-serif'],
          display: ['Geist', 'sans-serif'],
        }
      }
    }
  }
</script>
```

## 浏览器兼容性

- Chrome 90+
- Safari 15+
- Firefox 90+
- 微信内置浏览器

## 部署方案

1. 本地开发：直接在浏览器打开 HTML 文件
2. 生产部署：上传至任意静态服务器 / OSS / CDN
3. 域名：待定
