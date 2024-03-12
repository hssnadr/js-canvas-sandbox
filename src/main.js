import { GUI } from "dat.gui"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

/**
 *  CONFIG
 */
const params = {
    nBubbles: 4,
    speed: 1
}
const debug = new GUI() // create a debug GUI and add it to the DOM
let guiFolder

/**
 * METHODS
 */
const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

/**
 *  CLASSES
 */
class Bubble {
    constructor(x, y, context) {
        this.x = x
        this.y = y
        this.lineWidth = 2
        this.radius = 10

        // animation
        this.vx = Math.random() * 2 - 1 // [-1 : 1]
        this.vy = Math.random() * 2 - 1 // [-1 : 1]
        this.context = context
    }

    draw(context) {
        // style
        context.lineWidth = this.lineWidth
        context.fillStyle = 'white'
        context.strokeStyle = 'black'

        // draw
        context.save()
        context.translate(this.x, this.y)
        context.beginPath()
        context.arc(0, 0, this.radius, 0, 2 * Math.PI)
        context.fill()
        context.stroke()
        context.closePath()
        context.restore()
    }

    update(canvas, speed = 1) {
        // position
        this.x += this.vx * speed
        this.y += this.vy * speed

        // bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
    }
}


/**
 *  MAIN
 */
const generateBubbles = () => {
    // Get canvas dimensions
    const canvasWidth = canvas.getBoundingClientRect().width
    const canvasHeight = canvas.getBoundingClientRect().height
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Setup
    const bubbles = []
    for (let i = 0; i < params.nBubbles; i++) {
        const x_ = canvasWidth * Math.random()
        const y_ = canvasHeight * Math.random()
        const bubble_ = new Bubble(x_, y_, ctx)
        bubbles.push(bubble_)
    }

    // Update
    const update = () => {
        clearCanvas()
        bubbles.forEach((b) => {
            b.update(canvas, params.speed)
            b.draw(ctx)
        })
        window.requestAnimationFrame(update)
    }
    update()
}

// Debug
guiFolder = debug.addFolder("SETUP")
guiFolder.add(params, 'nBubbles', 2, 100, 1).onChange(generateBubbles)
guiFolder = debug.addFolder("UPDATE")
guiFolder.add(params, 'speed', -10, 10, .1)

// Start
generateBubbles()