import GlobalContext from "../GlobalContext"
import DomElement from "../utils/DomElement"

export default class Scene {
    constructor(id = "canvas-scene") {
        this.id = id
        this.globalContext = new GlobalContext()
        this.globalContext.pushScene(this)
        
        // debug
        this.params = {
            isUpdate: false
        }
        this.debug = this.globalContext.debug
        this.debugFolder = this.debug.ui.addFolder(this.id)
        this.debugFolder.add(this.params, 'isUpdate')

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

    update() {
        if(!!callback) callback()
    }

    destroy() {}
}