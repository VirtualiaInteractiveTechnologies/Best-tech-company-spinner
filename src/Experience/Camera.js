import * as THREE from 'three'
import Experience from './Experience.js'
import Debug from './Utils/Debug.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time
        this.debug = new Debug()

        this.setInstance()
        this.update()

        this.time.on("tick", () =>
        {
            const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
            if(mediaQueryMedium.matches)
            {
                this.instance.position.set(0, 0, 3.8)
            }
            else
            {
                this.instance.position.set(0, 0, 2)
            }
        })
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height, 0.1, 100)
        this.scene.add(this.instance)
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
    }
}