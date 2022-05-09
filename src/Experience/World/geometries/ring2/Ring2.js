import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Ring2
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.setRing2()

        this.time.on("tick", () =>
        {
          this.secondRing.rotation.z += 0.003
        })
    }

    setRing2()
    {
        this.secondRing = new THREE.Group()
        const ring2 = new THREE.Mesh(
            new THREE.RingBufferGeometry(0.607, 0.61, 50),
            new THREE.MeshBasicMaterial({
                color: '#161928',
                side: THREE.DoubleSide
            })
        )
        this.secondRing.add(ring2)
        this.secondRing.rotation.x = 1.56
        this.secondRing.rotation.y = 0.7
        this.secondRing.rotation.z = 0.88
        this.scene.add(this.secondRing)
    }
}