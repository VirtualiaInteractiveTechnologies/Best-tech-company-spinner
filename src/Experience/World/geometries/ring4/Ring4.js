import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Ring4
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.setRing4()

        this.time.on("tick", () =>
        {
          this.fourthRing.rotation.z += 0.003
        })
    }

    setRing4()
    {
        this.fourthRing = new THREE.Group()
        const ring4 = new THREE.Mesh(
            new THREE.RingBufferGeometry(0.607, 0.61, 50),
            new THREE.MeshBasicMaterial({
                color: '#161928',
                side: THREE.DoubleSide
            })
        )
        this.fourthRing.add(ring4)
        this.fourthRing.rotation.y = 1.56
        this.fourthRing.rotation.z = 0.85
        this.scene.add(this.fourthRing)
    }
}