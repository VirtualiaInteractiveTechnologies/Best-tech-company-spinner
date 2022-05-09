import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring2 from './Ring2'

export default class Icon7
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
        const headshotTexture = textureLoader.load('companyLogo/headshot.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.043
        }
        else
        {
         this.radius = 0.027
        }

        this.icon7 = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: headshotTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon7.position.set(-0.529, 0.299, 0)
        this.icon7.rotation.set(-1.76, -1.146, -.7)
        this.ring2.secondRing.add(this.icon7)
    }
}