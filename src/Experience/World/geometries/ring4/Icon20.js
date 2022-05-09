import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring4 from './Ring4'

export default class icon20
{
    constructor()
    {
        this.experience = new Experience()
        this.ring4 = new Ring4()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const zephyrTexture = textureLoader.load('companyLogo/Zephyr.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.06
        }
        else
        {
         this.radius = 0.05
        }

        this.icon20 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: zephyrTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon20.position.set(0.531, -0.307, 0)
        this.icon20.rotation.set(3.77, -1.7, 0.698)
        this.ring4.fourthRing.add(this.icon20)
    }
}