import GlobalContext from "../GlobalContext"
import DomElement from "../utils/DomElement"

export default class Scene {
    constructor(id = "canvas-scene") {
        this.globalContext = new GlobalContext()

        // debug
        this.params = {
            isUpdate: false
        }
        this.debug = this.globalContext.debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder(id)
            this.debugFolder.add(this.params, 'isUpdate')
        }

        // canvas
        this.domElement = new DomElement(id)
        this.canvas = this.domElement.instance
        this.canvas.width = this.domElement.width // set dimensions
        this.canvas.height = this.domElement.height
        this.context = this.canvas.getContext('2d')
    }

    get width() { return this.domElement.width }
    get height() { return this.domElement.height }
    get postion() { return this.domElement.position }
}