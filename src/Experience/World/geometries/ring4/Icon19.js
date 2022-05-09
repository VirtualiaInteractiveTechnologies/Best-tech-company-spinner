import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring4 from './Ring4'

export default class icon19
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
        const vectaryTexture = textureLoader.load('companyLogo/Vectary.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.055
        }
        else
        {
         this.radius = 0.035
        }

        this.icon19 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: vectaryTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon19.position.set(0.008, -0.606, 0)
        this.icon19.rotation.set(1.44, 0.57, 1.189)
        this.ring4.fourthRing.add(this.icon19)
    }
}