import * as THREE from "three"

export default function createCamera(x: number, y: number, z: number) {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(x, y, z)

  return camera
}
