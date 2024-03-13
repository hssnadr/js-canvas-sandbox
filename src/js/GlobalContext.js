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
    }

    update() {
        console.log(this.time.elapsed)
    }

    destroy() {
        this.time.off('update')
        if(this.debug.active) this.debug.ui.destroy()
    }
}