import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring3 from './Ring3'

export default class Icon12
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
        const mayaTexture = textureLoader.load('companyLogo/Maya.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.03
        }

        this.icon12 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: mayaTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon12.position.set(-0.529, 0.299, 0)
        this.icon12.rotation.set(1.9, -2, 0.821)
        this.ring3.thirdRing.add(this.icon12)
    }
}