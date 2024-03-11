const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

const size = 100
const red =  '#E83A4E'
const yellow = '#FFE800'
const blue = '#3B76F5'
const green = '#71E394'

const deg2rad = (deg) => {
    return deg * 2 * Math.PI / 360
}