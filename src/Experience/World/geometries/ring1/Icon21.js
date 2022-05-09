import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring1 from './Ring1'

export default class Icon21
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.ring1 = new Ring1()
        this.setIcon()

        this.time.on('tick', () =>
        {
           //this.ring1.firstRing.rotation.z += 0.002
        })
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const autocadTexture = textureLoader.load('companyLogo/AutoCAD.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.045
        }
        else
        {
         this.radius = 0.03
        }

        this.icon21 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
                new THREE.MeshBasicMaterial(
                    {
                        transparent: true,
                        side: THREE.DoubleSide,
                        map: autocadTexture,
                    }
                )
        )
        this.icon21.position.set(0.527, 0.302, 0)
        this.icon21.rotation.set(1.8, -0.778, 3.2)
        this.ring1.firstRing.add(this.icon21)
    }
}