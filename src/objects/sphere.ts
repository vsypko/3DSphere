import * as THREE from "three"

function sphereCreator(color: THREE.ColorRepresentation) {
  const geometry = new THREE.SphereGeometry(4, 36, 16, 0, Math.PI * 2, 0, Math.PI / 2)
  const material = new THREE.MeshStandardMaterial({
    color,
    wireframe: false,
    roughness: 0.1,
    metalness: 0.95,
  })
  const sphere = new THREE.Mesh(geometry, material)
  sphere.castShadow = true
  return sphere
}

export default function createSphere() {
  const sphere = new THREE.Group()
  const sphere1 = sphereCreator(0x0000ff)
  const sphere2 = sphereCreator(0xffff00)
  sphere2.rotateX(Math.PI)
  sphere.add(sphere1, sphere2)
  sphere.position.set(-10, 10, 0)
  return sphere
}
