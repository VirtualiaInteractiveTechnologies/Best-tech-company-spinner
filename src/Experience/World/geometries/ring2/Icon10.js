import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring2 from './Ring2'

export default class Icon2
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
        const matterportTexture = textureLoader.load('companyLogo/Matterport.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.03
        }

        this.icon10 = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: matterportTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon10.position.set(0.531, -0.307, 0)
        this.icon10.rotation.set(-1.7, 1.8, -0.6)
        this.ring2.secondRing.add(this.icon10)
    }
}