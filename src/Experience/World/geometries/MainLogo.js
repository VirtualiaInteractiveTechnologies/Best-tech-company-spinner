import * as THREE from 'three'
import Experience from "../../Experience"

export default class MainLogo
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.setMainLogo()
    }

    setMainLogo()
    {
        const textureLoader = new THREE.TextureLoader()
        const logoTexture = textureLoader.load('companyLogo/v.png')

        const logo = new THREE.Mesh(
            new THREE.PlaneGeometry(0.2, 0.2),
            new THREE.MeshBasicMaterial(
                {
                    map: logoTexture,
                    transparent: true
                }
            )
        )
        logo.position.set(0, 0, -.5)
        this.scene.add(logo)
    }
}