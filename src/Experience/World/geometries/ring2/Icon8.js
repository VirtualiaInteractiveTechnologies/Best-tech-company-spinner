import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring2 from './Ring2'

export default class Icon8
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
        const icloneTexture = textureLoader.load('companyLogo/iclone.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.04
        }

        this.icon8 = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: icloneTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon8.position.set(-0.53, -0.303, 0)
        this.icon8.rotation.set(1.44, -1.2, -3.9)
        this.ring2.secondRing.add(this.icon8)
    }
}