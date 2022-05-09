import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring4 from './Ring4'

export default class icon17
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
        const unityTexture = textureLoader.load('companyLogo/Unity.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.03
        }

        this.icon17 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: unityTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon17.position.set(-0.529, 0.299, 0)
        this.icon17.rotation.set(1.44, -1.4, 35)
        this.ring4.fourthRing.add(this.icon17)
    }
}