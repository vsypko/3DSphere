import * as THREE from "three"
import * as dat from "dat.gui"

interface Options {
  colorUp: string
  colorDown: string
  wireframe: boolean
  speed: number
  angle: number
  penumbra: number
  intesity: number
  roughness: number
  metalness: number
}

export default function controls(sphere: THREE.Group, options: Options) {
  const gui = new dat.GUI()

  let sphereUp = sphere.children[0] as THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>
  let sphereDown = sphere.children[1] as THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>

  gui.addColor(options, "colorUp").onChange((v) => sphereUp.material.color.set(v))

  gui.addColor(options, "colorDown").onChange((v) => sphereDown.material.color.set(v))

  gui.add(options, "wireframe").onChange((v) => {
    sphereUp.material.wireframe = v
    sphereDown.material.wireframe = v
  })
  gui.add(options, "roughness", 0, 1).onChange((v) => {
    sphereUp.material.roughness = v
    sphereDown.material.roughness = v
  })
  gui.add(options, "metalness", 0, 1).onChange((v) => {
    sphereUp.material.metalness = v
    sphereDown.material.metalness = v
  })

  gui.add(options, "speed", 0, 0.1)
  gui.add(options, "angle", 0, 1)
  gui.add(options, "penumbra", 0, 1)
  gui.add(options, "intesity", 0, 2)

  return options
}
