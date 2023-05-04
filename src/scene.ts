//import { createPlaneMarker } from "./objects/PlaneMarker";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import { handleXRHitTest } from "./utils/hitTest";


import {
  AmbientLight,
  BackSide,
  BoxBufferGeometry,
  BoxGeometry,
  Color,
  DoubleSide,
  Material,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  Sphere,
  SphereGeometry,
  Texture,
  TextureLoader,
  Vector3,
  WebGLRenderer,
  XRFrame,
} from "three";

export function createScene(renderer: WebGLRenderer) {
  ///// TODO: Create a scene and build a WebXR app!
  const scene = new Scene();

  // const camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 4000);
  // camera.position.set(0, 0, 10);
  
  // const controls = new OrbitControls(camera, renderer.domElement);

  const camera = new PerspectiveCamera(
    70,//70,
    window.innerWidth / window.innerHeight,
    0.01,//0.02,
    10,//20,
  );

  camera.position.set(0, 0, 0);
  scene.add(camera);

   const loader = new TextureLoader();
  // loader.load("../assets/panorama.jpg", 
  //           function (texture) {
  //             const sphereGeomentry = new SphereGeometry(5, 60, 40);//new SphereGeometry(5, 60, 40);
  //             const sphereMaterial = new MeshBasicMaterial({
  //               map: texture,
  //               //color: '0xffffff',
  //               visible: false,
  //               side: DoubleSide});
  //             sphereGeomentry.scale(-1, 1, 1);
  //             var mesh = new Mesh(sphereGeomentry, sphereMaterial);
  //             mesh.position.set(0,0,0);
  //             scene.add(mesh);
  // },
  // undefined, function (err){ console.log("error happened");});
  
  loader.load("../assets/panorama.jpg",
              function (texture) {
                const sphereGeometry = new SphereGeometry(9, 60, 40);
                const sphereMaterial = new MeshBasicMaterial({ 
                        map: texture,
                        color: 0xffffff, 
                        side: DoubleSide });
                const sphere = new Mesh(sphereGeometry, sphereMaterial);
                //sphere.position.z = -7;
                sphere.position.set(0,0,0);
                scene.add(sphere);});
  

  // Render loop
  function renderLoop(timestamp: number, frame?: XRFrame) {
    // Only render content if XR view is presenting.
    // Rotate box
    // box.rotation.y += 0.01;
    // box.rotation.x += 0.01;
    
    if (renderer.xr.isPresenting) {
      renderer.render(scene, camera);    
    }
  }
  
  renderer.setAnimationLoop(renderLoop);
}
