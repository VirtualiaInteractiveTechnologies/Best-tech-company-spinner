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
        const facewareTexture = textureLoader.load('companyLogo/Faceware.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.04
        }

        this.icon24 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: facewareTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon24.position.set(0.527, 0.302, 0)
        this.icon24.rotation.set(3.77, 1.44, -0.65)
        this.ring4.fourthRing.add(this.icon24)
    }
}