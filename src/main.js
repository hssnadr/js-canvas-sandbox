import { GUI } from "dat.gui"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

/**
 *  CONFIG
 */
const params = {
    nBubbles: 4,
}
const debug = new GUI() // create a debug GUI and add it to the DOM

/**
 *  CLASSES
 */
class Bubble {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = Math.random() * 2 - 1 // [-1 : 1]
        this.vy = Math.random() * 2 - 1 // [-1 : 1]
        this.lineWidth = 2
        this.radius = 10
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

    const bubbles = []
    for(let i = 0; i<params.nBubbles; i++) {
        const x_ = canvasWidth * Math.random()
        const y_ = canvasHeight * Math.random()
        const bubble_ = new Bubble(x_, y_)
        bubbles.push(bubble_)
    }

    bubbles.forEach((b) => {
        b.draw(ctx)
    })
}

// Debug
debug.add(params, 'nBubbles', 2, 100, 1).onChange(generateBubbles)

// Start
generateBubbles()