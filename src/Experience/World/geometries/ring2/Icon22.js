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
        const revitTexture = textureLoader.load('companyLogo/Revit.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.037
        }
        else
        {
         this.radius = 0.03
        }

        this.icon22 = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: revitTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        this.icon22.position.set(0.527, 0.302, 0)
        this.icon22.rotation.set(1.44, 2, 2.5)
        this.ring2.secondRing.add(this.icon22)
    }
}