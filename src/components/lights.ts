import * as THREE from "three"

export default function createLights() {
  const aLight = new THREE.AmbientLight(0xffffff, 2)
  // const dLight = new THREE.DirectionalLight(0xffffff, 1)
  // dLight.position.set(-30, 50, 0)
  // dLight.castShadow = true
  // dLight.shadow.camera.bottom = -12
  // const sLight = new THREE.SpotLight(0xffffff, 2)
  // sLight.position.set(-100, 100, 0)
  // sLight.castShadow = true
  // const pLight = new THREE.PointLight(0xffffff, 10)
  // pLight.position.set(-30, 30, 0)
  // pLight.castShadow = true

  return { aLight}
}
