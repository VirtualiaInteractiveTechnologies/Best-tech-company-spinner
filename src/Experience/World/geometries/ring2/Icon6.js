import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring2 from './Ring2'

export default class Icon8
{
    constructor()
    {
        this.experience = new Experience()
        this.ring2 = new Ring2()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const daz3DTexture = textureLoader.load('companyLogo/Daz3D.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.09
        }
        else
        {
         this.radius = 0.06
        }

        this.icon6 = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: daz3DTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon6.position.set(0, 0.609, 0)
        this.icon6.rotation.set(1.56, 0, -2.62)
        this.ring2.secondRing.add(this.icon6)
    }
}