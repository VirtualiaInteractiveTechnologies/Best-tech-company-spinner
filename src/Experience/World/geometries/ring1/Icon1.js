import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring1 from './Ring1'

export default class Icon1
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
        })
    }

    setIcon()
    {
        this.radius = 0.03
        this.circumfrance = 20;

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.04
         this.circumfrance = 20
        }
        else
        {
         this.radius = 0.03
         this.circumfrance = 20;
        }

        const textureLoader = new THREE.TextureLoader()
        const blenderTexture = textureLoader.load('companyLogo/Blender.png')
        this.icon1 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
                new THREE.MeshBasicMaterial(
                    {
                        transparent: true,
                        side: THREE.DoubleSide,
                        map: blenderTexture,
                    }
                )
        )
        this.icon1.position.set(0, 0.609, 0)
        this.icon1.rotation.set(1.8, 0, 0.8)
        this.ring1.firstRing.add(this.icon1)
    }
}