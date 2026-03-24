# 📝 碎碎念模块使用说明

## ✅ 已完成的功能

### 1. 新增内容分类
- **碎碎念** (`/diary/`) - 记录你和 OpenClaw 的日常对话
- 第一篇日记已发布：《Day 1 - 博客诞生记》

### 2. 自动化脚本
- `scripts/generate-diary.sh` - Bash 版本日记生成器
- `scripts/ai-diary-generator.js` - Node.js 版本 AI 日记生成器

### 3. GitHub Actions 定时任务
- **每日自动生成** - 北京时间每天凌晨 00:00
- **手动触发** - 可随时在 GitHub Actions 页面手动运行

### 4. 导航菜单
- 主页新增"碎碎念"菜单项
- 位置：文章 | **碎碎念** | 关于

---

## 🌐 访问地址

- **博客首页**: https://fzk888.github.io/
- **碎碎念列表**: https://fzk888.github.io/diary/
- **第一篇日记**: https://fzk888.github.io/diary/day1-blog-launch/

---

## 🤖 自动生成流程

### 每日自动生成（无需操作）

GitHub Actions 会：
1. 获取当天的 OpenClaw 会话历史
2. 用 AI 生成有趣的日记内容
3. 自动构建并发布到博客

### 手动生成（可选）

如果你想立即生成日记：

```bash
# 方法 1：使用 Bash 脚本
cd ~/my-blog
./scripts/generate-diary.sh

# 方法 2：使用 Node.js 脚本
node scripts/ai-diary-generator.js

# 方法 3：在 GitHub Actions 手动触发
# 访问：https://github.com/fzk888/fzk888.github.io/actions
# 选择 "Daily Diary - 每日碎碎念"
# 点击 "Run workflow"
```

---

## 📝 日记风格

碎碎念的特点：
- ✅ **像朋友聊天** - 轻松、自然、有趣
- ✅ **有吐槽有感悟** - 记录真实情感
- ✅ **AI 的内心独白** - 从 AI 视角看世界
- ✅ **每日金句** - 结尾的哲理句子
- ✅ **P.S. 彩蛋** - 额外的小惊喜

---

## 🎨 日记模板结构

```markdown
---
title: "Day X - 标题"
date: 2026-03-24T16:35:00+08:00
tags: ["碎碎念", "日常", "OpenClaw"]
categories: ["碎碎念"]
---

## 🎬 今天的剧情
记录今天的主要活动

## 💡 今天的感悟
一些思考和心得

## 🤔 碎碎念时间
- 今日最佳时刻
- 今日最囧时刻
- 今日学习

## 🎭 AI 的内心独白
AI 的视角和感受

## 📝 给未来的自己
经验总结

## 🌙 今天的最后一句话
金句结尾
```

---

## 🔧 自定义配置

### 修改生成时间

编辑 `.github/workflows/daily-diary.yml`：

```yaml
on:
  schedule:
    # 修改这里的 cron 表达式
    - cron: '0 16 * * *'  # 北京时间 00:00
```

### 修改日记风格

编辑 `scripts/ai-diary-generator.js` 中的 `generateAIDiary` 函数。

### 添加更多分类

在 `content/` 下创建新目录，如：
- `content/thoughts/` - 深度思考
- `content/tutorials/` - 教程
- `content/reviews/` - 评测

---

## 📊 统计信息

查看日记数量：

```bash
ls -1 ~/my-blog/content/diary/*.md | wc -l
```

---

## 🎯 最佳实践

1. **保持真实** - 记录真实的对话和感受
2. **有趣为主** - 不要写成工作报告
3. **适度吐槽** - 让日记更生动
4. **定期回顾** - 看看过去的成长

---

## 🆘 故障排除

### 日记没有自动生成

1. 检查 GitHub Actions 是否运行
2. 查看 workflow 日志
3. 手动触发一次

### 内容不满意

1. 手动编辑日记文件
2. 修改生成脚本的模板
3. 重新运行生成器

---

## 🌟 未来计划

- [ ] 添加对话录音转文字
- [ ] 集成更多 AI 模型
- [ ] 添加情感分析
- [ ] 生成月度总结
- [ ] 添加图片生成

---

**让每一天都值得记录！** ✨

*P.S. 如果有任何建议，欢迎在 GitHub 提 issue！*
