import { GUI } from "dat.gui"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

/**
 *  CONFIG
 */
const params = {
    rows: 4,
    cols: 4,
    scale: .5,
    angle: 45,
    chance: .7
}

const red = '#E83A4E'
const yellow = '#FFE800'
const blue = '#3B76F5'
const green = '#71E394'
const colors = [red, yellow, blue, green]

/**
 *  METHODS
 */
const drawRectangle = (cWidth, cHeight, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.rect(-cWidth / 2, -cHeight / 2, cWidth, cHeight)
    ctx.fill()
    ctx.closePath()
}

const deg2rad = (deg) => {
    return deg * 2 * Math.PI / 360
}

/**
 *  MAIN
 */
const generateMosaic = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height)

    // Get canvas dimensions
    console.log(canvas.getBoundingClientRect())
    const canvasWidth = canvas.getBoundingClientRect().width
    const canvasHeight = canvas.getBoundingClientRect().height
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Compute cells dimensions
    const cellWidth = canvasWidth / params.cols
    const cellHeight = canvasHeight / params.rows

    for (let i = 0; i < params.cols; i++) {
        for (let j = 0; j < params.rows; j++) {
            const x_ = i * cellWidth + cellWidth / 2
            const y_ = j * cellHeight + cellHeight / 2
            const colors_ = colors[(i + j) % colors.length]

            ctx.save()
            ctx.translate(x_, y_)
            if (Math.random() < params.chance) {
                ctx.rotate(deg2rad(params.angle))

                const scaleW_ = cellWidth > cellHeight ? params.scale * cellHeight / cellWidth : params.scale
                const scaleH_ = cellHeight > cellWidth ? params.scale * cellWidth / cellHeight : params.scale
                ctx.scale(scaleW_, scaleH_)
            }
            drawRectangle(cellWidth, cellHeight, colors_)

            ctx.restore()
        }
    }
}

// Debug
const debug = new GUI() // create a debug GUI and add it to the DOM
let folder = debug.addFolder("GRID")
folder.add(params, 'cols', 1, 10, 1).onFinishChange(generateMosaic) // onFinishChange plutôt que onChange pour éviter les glitchs et alléger les besoins de performances
folder.add(params, 'rows', 1, 10, 1).onFinishChange(generateMosaic)

folder = debug.addFolder("GENERATIVE")
folder.add(params, 'scale', .01, .5, .1).onFinishChange(generateMosaic)
folder.add(params, 'angle', 0, 360, 1).onFinishChange(generateMosaic)
folder.add(params, 'chance', .01, 1, .1).onFinishChange(generateMosaic)

// Start
generateMosaic()