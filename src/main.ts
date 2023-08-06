import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import createCamera from "./components/camera"
import createRenderer from "./components/renderer"
import createScene from "./components/scene"
import handleWindowResize from "./services/resize"
// import createBox from "./objects/box"

import "./style.css"

import createSphere from "./objects/sphere"
import controls from "./services/controls"
import street from "./img/9-11-1.jpg"
import createLights from "./components/lights"

function main() {
  const renderer = createRenderer()
  const scene = createScene()
  const camera = createCamera(-10, 30, 30)
  window.addEventListener("resize", () => handleWindowResize(renderer, camera), false)

  
  const sphere = createSphere()
  scene.add(sphere)

  const texLoader = new THREE.TextureLoader()
  texLoader.load(street, (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture
    
    sphere.children.forEach(
      (mesh) => ((mesh as THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>).material.envMap = texture),
    )
  })

  const { aLight} = createLights()
  scene.add(aLight)
  
  const control = new OrbitControls(camera, renderer.domElement)
  control.update()

  let step = 0

  let options = {
    colorUp: "#0000ff",
    colorDown: "#ffff00",
    wireframe: false,
    speed: 0.02,
    angle: 0.1,
    penumbra: 0.9,
    intesity: 1,
    roughness: 0.1,
    metalness: 0.95,
  }
  options = controls(sphere, options)

  function animate() {
    
    step += options.speed
    
    sphere.position.y = 10 * Math.abs(Math.sin(step)) + 2
    sphere.rotation.z += options.speed
    sphere.rotation.y += options.speed

    renderer.render(scene, camera)
  }
  renderer.setAnimationLoop(animate)
}

window.addEventListener("load", main, false)
