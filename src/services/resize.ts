import * as THREE from "three"
export default function handleWindowResize(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera): void {
  const HEIGHT = window.innerHeight
  const WIDTH = window.innerWidth
  renderer.setSize(WIDTH, HEIGHT)
  camera.aspect = WIDTH / HEIGHT
  camera.updateProjectionMatrix()
}
