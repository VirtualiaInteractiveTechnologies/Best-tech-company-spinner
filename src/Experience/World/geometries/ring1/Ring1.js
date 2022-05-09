import * as THREE from 'three'
import Experience from '../../../Experience'
import Ring2 from '../ring2/Ring2'
import Ring3 from '../ring3/Ring3'
import Ring4 from '../ring4/Ring4'

export default class Ring1
{
    constructor()
    {
        this.experience = new Experience()
        // this.icon1 = new Icon1()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.ring2 = new Ring2()
        this.ring3 = new Ring3()
        this.ring4 = new Ring4()
        this.setRing1()

        this.time.on('tick', () =>
        {
          this.firstRing.rotation.z += 0.003
        })
    }

    setRing1()
    {
        this.firstRing = new THREE.Group()
        const ring1 = new THREE.Mesh(
            new THREE.RingBufferGeometry(0.607, 0.61, 50),
            new THREE.MeshBasicMaterial({
                color: '#161928',
                side: THREE.DoubleSide
            })
        )
        this.firstRing.add(ring1)
        this.firstRing.rotation.x = 1.5
        this.firstRing.rotation.z = 0.05
        this.firstRing.position.y = -.038
        this.scene.add(this.firstRing)
    }
}

// z = 0