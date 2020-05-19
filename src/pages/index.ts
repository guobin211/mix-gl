const THREE = (window as any).THREE;

const onProgress = () => { }
const onError = () => { }
export function init() {
  var scene = new THREE.Scene(); //场景构建
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  ); //相机构建
  var renderer = new THREE.WebGLRenderer(); //渲染器构建
  renderer.setClearColor(0xeeeeee);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true; //激活阴影
  //构建一个坐标轴
  var axes = new THREE.AxisHelper(20);
  scene.add(axes);
  var planeGeometry = new THREE.PlaneGeometry(40, 20);
  //var planeMaterial = new THREE.MeshBasicMaterial({color:0xcccccc});
  var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }); //转换对光源有渲染的材质
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.x = 0;
  scene.add(plane);
  plane.receiveShadow = true;
  //添加灯光
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-10, 20, 10);
  spotLight.castShadow = true;
  scene.add(spotLight);
  //渲染视图视角
  camera.position.x = -30;
  camera.position.y = 20;
  camera.position.z = 30;
  camera.lookAt(scene.position);
  document.getElementById('app').append(renderer.domElement);
  renderScene();
  function renderScene() {
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }
  const loader = new THREE.MTLLoader();
  loader.setPath('house_homework/');
  loader.load('model.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('house_homework/');
    objLoader.load('model.obj', function (object) {

      object.position.y = 0;
      object.rotation.y = 0.5;
      object.scale.set(0.05, 0.05, 0.05);
      scene.add(object);

    }, onProgress, onError);
  });
}


