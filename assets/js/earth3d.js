/**
 * 3D 地球特效 - 使用 Three.js
 * 显示在首页标题旁边
 */
(function () {
  'use strict';

  function initEarth() {
    // 只在首页运行
    var titleEl = document.querySelector('.profile_inner h1');
    if (!titleEl) return;

    // 创建容器
    var container = document.createElement('span');
    container.id = 'earth-container';
    titleEl.appendChild(container);

    var canvas = document.createElement('canvas');
    container.appendChild(canvas);

    var THREE = window.THREE;
    if (!THREE) return;

    // 场景
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 2.5;

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(90, 90);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 地球
    var geometry = new THREE.SphereGeometry(0.8, 32, 32);
    var textureLoader = new THREE.TextureLoader();

    var material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
      specularMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'),
      shininess: 15
    });

    var earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // 灯光
    scene.add(new THREE.AmbientLight(0x667eea, 0.4));
    var dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // 旋转速度
    var baseSpeed = 0.004;
    var speed = baseSpeed;

    // 鼠标悬浮加速
    container.addEventListener('mouseenter', function () { speed = 0.02; });
    container.addEventListener('mouseleave', function () { speed = baseSpeed; });

    // 动画循环
    function animate() {
      requestAnimationFrame(animate);
      earth.rotation.y += speed;
      renderer.render(scene, camera);
    }
    animate();
  }

  // 等待 Three.js 加载完成后初始化
  function waitForThree() {
    if (window.THREE) {
      initEarth();
    } else {
      setTimeout(waitForThree, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(waitForThree, 200);
    });
  } else {
    setTimeout(waitForThree, 200);
  }
})();
