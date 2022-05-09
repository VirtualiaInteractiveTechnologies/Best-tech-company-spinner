import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring1 from './Ring1'

export default class Icon2
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
        this.radius = 0.03
        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.04
        }
        else
        {
         this.radius = 0.03
        }

        const textureLoader = new THREE.TextureLoader()
        const chaosTexture = textureLoader.load('companyLogo/Chaos.png')
        this.icon2 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: chaosTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon2.position.set(-0.529, 0.299, 0)
        this.icon2.rotation.set(-1.39, -1.1, 0.206)
        this.ring1.firstRing.add(this.icon2)
    }
}