import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring4 from './Ring4'

export default class icon18
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
        const unrealTexture = textureLoader.load('companyLogo/Unreal.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.03
        }

        this.icon18 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: unrealTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon18.position.set(-0.53, -0.303, 0)
        this.icon18.rotation.set(1.56, 2.296, -1.64)
        this.ring4.fourthRing.add(this.icon18)
    }
}