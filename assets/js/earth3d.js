/**
 * 3D 地球特效
 * 使用 Three.js 创建旋转的 3D 地球
 */

(function() {
  // 检查是否在首页
  if (!document.querySelector('.home-title')) return;
  
  const title = document.querySelector('.home-title');
  const earthEmoji = title.querySelector('.earth-3d-wrap');
  if (!earthEmoji) return;
  
  // 创建 canvas
  const canvas = document.createElement('canvas');
  canvas.className = 'earth-3d-canvas';
  canvas.style.cssText = 'width: 30px; height: 30px; display: inline-block; vertical-align: middle;';
  earthEmoji.appendChild(canvas);
  
  // 加载 Three.js
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/three@0.160.0/build/three.min.js';
  script.async = true;
  
  script.onload = function() {
    initEarth();
  };
  
  document.head.appendChild(script);
  
  function initEarth() {
    const THREE = window.THREE;
    if (!THREE) return;
    
    // 场景
    const scene = new THREE.Scene();
    
    // 相机
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;
    
    // 渲染器
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvas, 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(60, 60);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // 地球几何体
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    
    // 材质
    const textureLoader = new THREE.TextureLoader();
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
      specularMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'),
      normalMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_map_2048.jpg'),
      shininess: 15
    });
    
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);
    
    // 灯光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // 动画
    function animate() {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    
    animate();
    
    // 响应窗口大小变化
    window.addEventListener('resize', function() {
      const size = Math.min(60, Math.min(canvas.parentElement.offsetWidth, 60));
      renderer.setSize(size, size);
    });
  }
})();
