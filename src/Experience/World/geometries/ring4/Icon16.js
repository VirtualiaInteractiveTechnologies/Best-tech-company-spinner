import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring4 from './Ring4'

export default class icon16
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
        const sketchfabTexture = textureLoader.load('companyLogo/Sketchfab.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.04
        }
        else
        {
         this.radius = 0.03
        }

        this.icon16 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: sketchfabTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon16.position.set(0, 0.609, 0)
        this.icon16.rotation.set(1.44, 0.08, -1.6)
        this.ring4.fourthRing.add(this.icon16)
    }
}