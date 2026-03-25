/**
 * 泽铠的博客 - 自定义特效
 * 打字机效果 + 星空粒子背景 + 滚动进度条
 */

(function () {
  'use strict';

  // ===== 打字机效果 =====
  function initTypewriter() {
    const subtitle = document.querySelector('.profile_inner h2');
    if (!subtitle) return;

    const texts = [
      '记录技术、生活与思考',
      'Hello World 🌍',
      '保持好奇，持续学习',
      'Keep Coding, Keep Growing'
    ];

    // 清空原始文本，添加光标
    subtitle.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    subtitle.appendChild(cursor);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let textNode = document.createTextNode('');
    subtitle.insertBefore(textNode, cursor);

    function type() {
      const current = texts[textIndex];

      if (!isDeleting) {
        textNode.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          setTimeout(function () { isDeleting = true; type(); }, 2000);
          return;
        }
        setTimeout(type, 80 + Math.random() * 40);
      } else {
        textNode.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 500);
          return;
        }
        setTimeout(type, 40);
      }
    }

    setTimeout(type, 800);
  }

  // ===== 星空粒子背景 =====
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'particles-canvas';
      document.body.prepend(canvas);
    }

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 80;
    var mouse = { x: null, y: null };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // 创建粒子
    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 判断主题
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches &&
          document.documentElement.getAttribute('data-theme') !== 'light');

      var dotColor = isDark ? '180, 180, 255' : '102, 126, 234';
      var lineColor = isDark ? '102, 126, 234' : '102, 126, 234';

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // 移动
        p.x += p.vx;
        p.y += p.vy;

        // 边界反弹
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + dotColor + ',' + p.opacity + ')';
        ctx.fill();

        // 连线（距离近的粒子之间）
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(' + lineColor + ',' + (0.08 * (1 - dist / 120)) + ')';
            ctx.stroke();
          }
        }

        // 鼠标交互
        if (mouse.x !== null) {
          var mdx = p.x - mouse.x;
          var mdy = p.y - mouse.y;
          var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(' + lineColor + ',' + (0.15 * (1 - mdist / 150)) + ')';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }

  // ===== 滚动进度条 =====
  function initProgressBar() {
    var bar = document.getElementById('reading-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'reading-progress';
      document.body.prepend(bar);
    }

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    });
  }

  // ===== 导航栏滚动效果 =====
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // ===== 初始化 =====
  document.addEventListener('DOMContentLoaded', function () {
    initTypewriter();
    initParticles();
    initProgressBar();
    initNavScroll();
  });
})();

