console.log("Hello Javascript")

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

// 1 - style principle and shape shortcut
ctx.fillStyle = 'blue'
ctx.strokeStyle = "red"
ctx.lineWidth = 4
ctx.fillRect(100, 100, 100, 100)
ctx.strokeRect(100, 100, 100, 100)

// 2 - rect path
ctx.fillStyle = '#ff0000'
ctx.strokeStyle = "#0000ff"
ctx.beginPath()
ctx.rect(300, 100, 100, 100) // order !!
ctx.fill() // order !!
ctx.stroke() // order !!
ctx.closePath()

// 3 - circle + arc path
const deg2rad = (deg) => {
    return deg * 2 * Math.PI / 360
}
ctx.strokeStyle = "#0000ff"
ctx.lineWidth = 10
ctx.lineCap = "round" // https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/lineCap
ctx.beginPath()
ctx.arc(150, 350, 50, 0, deg2rad(180))
ctx.stroke()
ctx.closePath()

// 4 - free path (lines)
ctx.beginPath()
ctx.moveTo(300, 300)
ctx.lineTo(400, 400)
ctx.lineTo(300, 400)
ctx.lineTo(400, 300)
ctx.lineTo(300, 300)
ctx.lineJoin = "round" // https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/lineJoin
ctx.stroke()
ctx.closePath()

// 5 - free path (beziers)
ctx.beginPath()
ctx.moveTo(100, 500)
ctx.bezierCurveTo(100, 550, 200, 450, 200, 500) // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo
ctx.bezierCurveTo(150, 500, 250, 600, 200, 600)
ctx.bezierCurveTo(200, 550, 100, 650, 100, 600)
ctx.bezierCurveTo(150, 600, 50, 500, 100, 500)
ctx.stroke()
ctx.closePath()