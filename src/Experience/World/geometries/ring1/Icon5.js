import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring1 from './Ring1'

export default class Icon5
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
        const textureLoader = new THREE.TextureLoader()
        const coronaTexture = textureLoader.load('companyLogo/Corona.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.06
        }
        else
        {
         this.radius = 0.04
        }

        this.icon5 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: coronaTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon5.position.set(0.531, -0.307, 0)
        this.icon5.rotation.set(-1.52, 2.54, -.04)
        this.ring1.firstRing.add(this.icon5)
    }
}