const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

const size = 100
const red =  '#E83A4E'
const yellow = '#FFE800'
const blue = '#3B76F5'
const green = '#71E394'

const drawRectangle = (color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    // ctx.rect(0, 0, size, size)
    ctx.rect(-size/2, -size/2, size, size) // centrage de la géométrie
    ctx.fill()
    ctx.closePath()
}

const deg2rad = (deg) => {
    return deg * 2 * Math.PI / 360
}

// 0 - Graphique offset
ctx.translate(size / 2, size / 2)

// 1 - Translate
ctx.translate(200, 200)
drawRectangle(blue)
ctx.translate(-200, -200) // ! translate ne prend pas de valeurs absolues : il faut retrancher par rapport à la position existante
drawRectangle(yellow)

// 2 - Rotate
ctx.translate(400, 400)
ctx.rotate(deg2rad(45)) // !! order
drawRectangle(red)

// ------------------
ctx.resetTransform() // reset transform
// ------------------

// 3 - Save & Restore
ctx.save()
ctx.translate(600, size / 2) // offset = size/2 sur l'axe Y pour ne pas couper le carré
drawRectangle(green)
ctx.restore()

ctx.save()
ctx.translate(600, 600)
ctx.rotate(deg2rad(45)) // !! order
drawRectangle(green)
ctx.restore()