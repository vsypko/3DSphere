import * as THREE from "three"

export default function createBox(x: number, y: number, z: number) {
  const geometry = new THREE.BoxGeometry(x, y, z)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const box = new THREE.Mesh(geometry, material)
  return box
}
