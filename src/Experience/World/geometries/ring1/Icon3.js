import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring1 from './Ring1'

export default class Icon3
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
        this.radius = 0.04
        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.04
        }

        const textureLoader = new THREE.TextureLoader()
        const characterTexture = textureLoader.load('companyLogo/character.png')
        this.icon3 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: characterTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon3.position.set(-0.53, -0.303, 0)
        this.icon3.rotation.set(-1.39, 0.821, -0.16)
        this.ring1.firstRing.add(this.icon3)
    }
}