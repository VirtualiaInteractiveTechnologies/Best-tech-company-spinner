import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Ring3
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.setRing3()

        this.time.on("tick", () =>
        {
          this.thirdRing.rotation.z += 0.003
        })
    }

    setRing3()
    {
        this.thirdRing = new THREE.Group()
        const ring3 = new THREE.Mesh(
            new THREE.RingBufferGeometry(0.607, 0.61, 50),
            new THREE.MeshBasicMaterial({
                color: '#161928',
                side: THREE.DoubleSide
            })
        )
        this.thirdRing.add(ring3)
        this.thirdRing.rotation.x = 1.56
        this.thirdRing.rotation.y = 2.54
        this.thirdRing.rotation.z = 0.6
        this.scene.add(this.thirdRing)
    }
}