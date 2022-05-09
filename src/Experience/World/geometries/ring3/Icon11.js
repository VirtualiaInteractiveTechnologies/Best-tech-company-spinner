import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring3 from './Ring3'

export default class Icon11
{
    constructor()
    {
        this.experience = new Experience()
        this.ring3 = new Ring3()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const maxTexture = textureLoader.load('companyLogo/max.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.03
        }

        this.icon11 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: maxTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon11.position.set(0, 0.609, 0)
        this.icon11.rotation.set(-1.52, -.16, 3.77)
        this.ring3.thirdRing.add(this.icon11)
    }
}