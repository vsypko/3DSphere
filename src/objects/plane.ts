import * as THREE from "three"

export default function createPlane() {
  const geometry = new THREE.PlaneGeometry(30, 30)
  const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide })
  const plane = new THREE.Mesh(geometry, material)
  plane.rotation.x = -Math.PI / 2
  plane.receiveShadow = true
  return plane
}
