import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring2 from './Ring2'

export default class Icon9
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.ring2 = new Ring2()
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const irayTexture = textureLoader.load('companyLogo/Iray.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.04
        }
        else
        {
         this.radius = 0.03
        }

        this.icon9 = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: irayTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon9.position.set(0.008, -0.606, 0)
        this.icon9.rotation.set(1.44, 0.3, -3.7)
        this.ring2.secondRing.add(this.icon9)
    }
}