import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring3 from './Ring3'

export default class Icon14
{
    constructor()
    {
        this.experience = new Experience()
        this.ring3 = new Ring3()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const pix4DTexture = textureLoader.load('companyLogo/Pix4D.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.09
        }
        else
        {
         this.radius = 0.06
        }

        this.icon14 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: pix4DTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        
        this.icon14.position.set(0.008, -0.606, 0)
        this.icon14.rotation.set(-1.64, 2.58, 3.894)
        this.ring3.thirdRing.add(this.icon14)
    }
}