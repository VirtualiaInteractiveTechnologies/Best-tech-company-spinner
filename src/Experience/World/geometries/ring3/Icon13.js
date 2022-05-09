import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring3 from './Ring3'

export default class Icon13
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
        const neuronTexture = textureLoader.load('companyLogo/neuron.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.05
        }
        else
        {
         this.radius = 0.03
        }

        this.icon13 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: neuronTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon13.position.set(-0.53, -0.303, 0)
        this.icon13.rotation.set(-1.523, 0.8, -3.24)
        this.ring3.thirdRing.add(this.icon13)
    }
}