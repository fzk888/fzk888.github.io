#!/bin/bash
# 博客快速启动脚本

BLOG_DIR="$HOME/my-blog"

case "$1" in
  start)
    echo "🚀 启动博客预览服务器..."
    cd "$BLOG_DIR" && hugo server --buildDrafts --bind 0.0.0.0 --port 1313
    ;;
  build)
    echo "🏗️  构建博客..."
    cd "$BLOG_DIR" && hugo --minify
    echo "✅ 构建完成！输出目录：$BLOG_DIR/public"
    ;;
  new)
    if [ -z "$2" ]; then
      echo "❌ 请指定文章标题"
      echo "用法：$0 new \"文章标题\""
      exit 1
    fi
    echo "📝 创建新文章：$2"
    cd "$BLOG_DIR" && hugo new content posts/$(echo "$2" | tr ' ' '-').md
    ;;
  deploy)
    echo "📤 部署到 GitHub Pages..."
    cd "$BLOG_DIR"
    hugo --minify
    git add .
    git commit -m "Deploy updates"
    git push origin main
    echo "✅ 部署完成！"
    ;;
  *)
    echo "📖 泽铠的博客管理脚本"
    echo ""
    echo "用法：$0 {start|build|new|deploy}"
    echo ""
    echo "  start   - 启动本地预览服务器"
    echo "  build   - 构建静态网站"
    echo "  new     - 创建新文章"
    echo "  deploy  - 部署到 GitHub Pages"
    echo ""
    echo "示例:"
    echo "  $0 start                    # 启动预览"
    echo "  $0 new \"我的第一篇文章\"     # 创建文章"
    echo "  $0 build                    # 构建网站"
    echo "  $0 deploy                   # 部署上线"
    ;;
esac
