#!/bin/bash
# 每日碎碎念生成脚本
# 功能：获取 OpenClaw 对话历史，生成日记文章

set -e

BLOG_DIR="$HOME/my-blog"
DIARY_DIR="$BLOG_DIR/content/diary"
DATE=$(date +%Y-%m-%d)
DAY_COUNT=$(ls -1 "$DIARY_DIR"/*.md 2>/dev/null | wc -l)
DAY_COUNT=$((DAY_COUNT + 1))

echo "📝 生成第 $DAY_COUNT 天的碎碎念..."

# 获取 OpenClaw 会话历史
get_session_history() {
    # 这里调用 OpenClaw API 获取当天的对话
    # 由于是示例，我们用占位符
    cat << 'HISTORY'
今天和泽铠一起做了这些事：
1. 搭建 Hugo 博客
2. 配置 PaperMod 主题
3. 部署到 GitHub Pages
4. 解决了一堆 404 问题
HISTORY
}

# 生成文章
generate_diary() {
    local day=$1
    local date=$2
    
    cat > "$DIARY_DIR/day${day}.md" << EOF
---
title: "Day $day - $(date -d "$date" +%Y年%m月%d日 2>/dev/null || echo "$date")"
date: ${date}T$(date +%H:%M:%S)+08:00
draft: false
tags: ["碎碎念", "日常", "OpenClaw"]
categories: ["碎碎念"]
---

## 🎬 今天的剧情

$(get_session_history)

---

## 💡 今天的感悟

> 技术就是这样，过程很痛苦，结果很美好。

---

## 🤔 碎碎念时间

今天又学到了什么？

- 新技能 +1
- 踩坑经验 +1
- 成就感 +100

---

## 📝 给未来的自己

如果以后遇到类似问题，记住：

1. 先查日志
2. 再查文档
3. 最后再问人

---

## 🌙 今天的最后一句话

> "保持好奇，持续学习"

晚安，世界。🌍

---

*P.S. 今天的碎碎念到此结束，明天见！*
EOF
}

# 生成日记
generate_diary "$DAY_COUNT" "$DATE"

echo "✅ 碎碎念生成完成：$DIARY_DIR/day${DAY_COUNT}.md"

# 构建并推送
cd "$BLOG_DIR"
git add -A
git commit -m "Add diary day $DAY_COUNT: $(date +%Y-%m-%d)"
git push origin main

echo "🚀 已推送到 GitHub，等待自动部署..."
