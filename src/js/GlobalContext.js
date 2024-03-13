import Debug from "./utils/Debug"
import Time from "./utils/Time"

let instance = null

export default class GlobalContext {
    constructor() {
        if (!!instance) return instance
        instance = this

        // Debug
        this.debug = new Debug()

        // Time
        this.time = new Time()
        this.time.on('update', () => { this.update() })

        // Scenes
        this.scenes = []
    }

    pushScene(scene) {
        this.scenes.push(scene)
    }

    update() {
        console.log(this.time.elapsed)
        this.scenes.forEach(s => {
            s.update()
        })
    }

    destroy() {
        this.time.off('update')

        this.scenes.forEach(s => {
            s.destroy()
        })

        if(this.debug.active) this.debug.ui.destroy()
    }
}