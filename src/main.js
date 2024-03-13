import Scene from "./js/canvas/Scene"

const scene = new Scene() // set id if != "canvas-scene" (default)

scene.context.fillStyle = 'red'
scene.context.fillRect(0,0, scene.width / 2, scene.height / 2)
scene.context.fillStyle = 'blue'
scene.context.fillRect(scene.width / 2, scene.height / 2, scene.width / 2, scene.height / 2)