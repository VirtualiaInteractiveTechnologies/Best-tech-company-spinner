import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring3 from './Ring3'

export default class Icon15
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
        const leicaTexture = textureLoader.load('companyLogo/Leica.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.065
        }
        else
        {
         this.radius = 0.055
        }

        this.icon23 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: leicaTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        
        this.icon23.position.set(0.527, 0.302, 0)
        this.icon23.rotation.set(-1.64, 1.189, -2.5)
        this.ring3.thirdRing.add(this.icon23)
    }
}