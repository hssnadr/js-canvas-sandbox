import Scene from "./js/canvas/Scene"

const scene = new Scene() // set id if != "canvas-scene" (default)
console.log(scene)
// const scene2 = new Scene("scene-2") // example

scene.context.fillStyle = 'red'
scene.context.fillRect(0,0, scene.width / 2, scene.height / 2)