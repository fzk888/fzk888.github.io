/**
 * 泽铠的博客 — 自定义特效
 * 打字机效果 + 滚动进度条 + 导航栏效果
 */
(function () {
  'use strict';

  // ===== 打字机效果 =====
  function initTypewriter() {
    var subtitle = document.querySelector('.blog-hero__description');
    if (!subtitle) return;
    var original = subtitle.textContent.trim();
    var texts = [original, 'Hello World!', '保持好奇，持续学习', 'Keep Coding, Keep Growing'];
    subtitle.innerHTML = '';
    var textNode = document.createTextNode('');
    var cursor = document.createElement('span');
    cursor.style.cssText = 'display:inline-block;width:2px;height:1.1em;background:#667eea;margin-left:2px;vertical-align:text-bottom;animation:blink 1s step-end infinite';
    var style = document.createElement('style');
    style.textContent = '@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}';
    document.head.appendChild(style);
    subtitle.appendChild(textNode);
    subtitle.appendChild(cursor);

    var ti = 0, ci = 0, deleting = false;
    function type() {
      var cur = texts[ti];
      if (!deleting) {
        textNode.textContent = cur.substring(0, ci + 1);
        ci++;
        if (ci === cur.length) { setTimeout(function () { deleting = true; type(); }, 2000); return; }
        setTimeout(type, 80 + Math.random() * 40);
      } else {
        textNode.textContent = cur.substring(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; setTimeout(type, 500); return; }
        setTimeout(type, 40);
      }
    }
    setTimeout(type, 800);
  }

  // ===== 滚动进度条 =====
  function initProgressBar() {
    var bar = document.getElementById('reading-progress');
    if (!bar) { bar = document.createElement('div'); bar.id = 'reading-progress'; document.body.prepend(bar); }
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    });
  }

  // ===== 导航栏滚动效果 =====
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTypewriter();
    initProgressBar();
    initNavScroll();
  });
})();
