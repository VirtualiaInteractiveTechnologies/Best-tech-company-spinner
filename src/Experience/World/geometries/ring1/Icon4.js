import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring1 from './Ring1'

export default class Icon4
{
    constructor()
    {
        this.experience = new Experience()
        this.ring1 = new Ring1()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const cinema4DTexture = textureLoader.load('companyLogo/Cinema4D.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.055
        }
        else
        {
         this.radius = 0.04
        }
        this.icon4 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: cinema4DTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon4.position.set(0.008, -0.606, 0)
        this.icon4.rotation.set(-1.64, -0.04, 0)
        this.ring1.firstRing.add(this.icon4)
    }
}