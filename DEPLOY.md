# 🚀 博客部署指南

## ✅ 已完成

- [x] Hugo 安装 (v0.157.0)
- [x] 博客框架创建
- [x] PaperMod 主题安装
- [x] 配置文件设置
- [x] 示例文章创建
- [x] 本地预览服务器运行中

## 📍 博客位置

- **目录**: `~/my-blog`
- **本地预览**: http://localhost:1313
- **配置文件**: `~/my-blog/hugo.toml`

## 🎨 当前配置

| 项目 | 值 |
|------|-----|
| 博客标题 | 泽铠的博客 |
| 描述 | 记录技术、生活与思考 |
| 主题 | PaperMod |
| 语言 | 中文 (zh-cn) |
| GitHub | https://github.com/fzk888 |

## 📝 快速命令

### 启动本地预览
```bash
cd ~/my-blog
./blog.sh start
```
或直接运行：
```bash
hugo server --buildDrafts --bind 0.0.0.0 --port 1313
```

### 创建新文章
```bash
cd ~/my-blog
./blog.sh new "文章标题"
```

### 构建静态网站
```bash
cd ~/my-blog
./blog.sh build
```

### 部署到 GitHub Pages

1. **创建 GitHub 仓库**
   ```bash
   cd ~/my-blog
   git branch -m main
   git remote add origin https://github.com/fzk888/fzk888.github.io.git
   ```

2. **修改配置文件**
   编辑 `hugo.toml`，将：
   ```toml
   baseURL = 'https://fangzekai.github.io/'
   ```

3. **部署**
   ```bash
   ./blog.sh deploy
   ```

## 🎯 自定义建议

### 1. 修改个人信息
编辑 `hugo.toml`：
- 修改 `title` - 博客标题
- 修改 `author` - 作者名
- 修改 `description` - 博客描述
- 修改社交链接 URLs

### 2. 更换头像
在 `hugo.toml` 的 `params.profileMode.imageUrl` 中设置：
- 使用在线头像服务（如当前配置）
- 或放置本地图片到 `static/` 目录

### 3. 添加更多社交链接
在 `hugo.toml` 的 `params.socialIcons` 中添加：
```toml
[[params.socialIcons]]
  name = "twitter"
  url = "https://twitter.com/yourusername"

[[params.socialIcons]]
  name = "zhihu"
  url = "https://www.zhihu.com/people/yourname"
```

### 4. 添加更多页面
```bash
hugo new content gallery.md      # 相册
hugo new content projects.md     # 项目
hugo new content friends.md      # 友链
```

## 📚 写作格式

创建文章时使用 Front Matter：

```markdown
---
title: "文章标题"
date: 2026-03-24T16:10:00+08:00
draft: false
description: "文章描述"
tags: ["标签 1", "标签 2"]
categories: ["分类"]
---

文章正文内容...
```

## 🔧 高级配置

### 启用评论系统
在 `hugo.toml` 添加：
```toml
[params.comments]
  enabled = true
  provider = "giscus"  # 或 utterances, disqus
```

### 添加自定义 CSS
创建 `assets/css/extended/custom.css`

### 修改主题颜色
在 `hugo.toml` 添加：
```toml
[params.assets]
  favicon = "favicon.ico"
  favicon16x16 = "favicon-16x16.png"
  favicon32x32 = "favicon-32x32.png"
  apple_touch_icon = "apple-touch-icon.png"
```

## 🆘 常见问题

### Q: 如何停止预览服务器？
A: 在终端按 `Ctrl+C`

### Q: 文章不显示？
A: 确保 `draft: false`

### Q: 如何更新主题？
A: 
```bash
cd ~/my-blog/themes/PaperMod
git pull
```

### Q: 如何备份博客？
A: 整个 `~/my-blog` 目录就是全部代码，直接备份即可

## 📖 参考资源

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [PaperMod 主题文档](https://adityatelange.github.io/hugo-PaperMod/)
- [Hugo 中文文档](https://www.studygolang.com/doc/hugo)

---

**祝你写作愉快！** ✍️
