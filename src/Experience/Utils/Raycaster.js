import * as THREE from 'three'
import Experience from '../Experience'
import Ring1 from "../World/geometries/ring1/Ring1";
import Ring2 from "../World/geometries/ring2/Ring2";
import Ring3 from "../World/geometries/ring3/Ring3";
import Ring4 from "../World/geometries/ring4/Ring4";
import Icon1 from "../World/geometries/ring1/Icon1";
import Icon2 from "../World/geometries/ring1/Icon2";
import Icon3 from "../World/geometries/ring1/Icon3";
import Icon4 from "../World/geometries/ring1/Icon4";
import Icon5 from "../World/geometries/ring1/Icon5";
import Icon6 from "../World/geometries/ring2/Icon6";
import Icon7 from "../World/geometries/ring2/Icon7";
import Icon8 from "../World/geometries/ring2/Icon8";
import Icon9 from "../World/geometries/ring2/Icon9";
import Icon10 from "../World/geometries/ring2/Icon10";
import Icon11 from "../World/geometries/ring3/Icon11";
import Icon12 from "../World/geometries/ring3/Icon12";
import Icon13 from "../World/geometries/ring3/Icon13";
import Icon14 from "../World/geometries/ring3/Icon14";
import Icon15 from '../World/geometries/ring3/Icon15';
import Icon16 from "../World/geometries/ring4/Icon16";
import Icon17 from '../World/geometries/ring4/Icon17';
import Icon18 from "../World/geometries/ring4/Icon18";
import Icon19 from '../World/geometries/ring4/Icon19';
import Icon20 from "../World/geometries/ring4/Icon20";
import Icon21 from "../World/geometries/ring1/Icon21";
import Icon22 from "../World/geometries/ring2/Icon22";
import Icon23 from "../World/geometries/ring3/Icon23";
import Icon24 from "../World/geometries/ring4/Icon24";

export default class Raycaster
{
    constructor()
    {
        this.experience = new Experience()
        this.renderer = this.experience.renderer
        this.time = this.experience.time
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        this.ring1 = new Ring1();
        this.ring2 = new Ring2();
        this.ring3 = new Ring3();
        this.ring4 = new Ring4();
        this.icon1 = new Icon1();
        this.icon2 = new Icon2();
        this.icon3 = new Icon3();
        this.icon4 = new Icon4();
        this.icon5 = new Icon5();
        this.icon6 = new Icon6();
        this.icon7 = new Icon7();
        this.icon8 = new Icon8();
        this.icon9 = new Icon9();
        this.icon10 = new Icon10();
        this.icon11 = new Icon11();
        this.icon12 = new Icon12();
        this.icon13 = new Icon13();
        this.icon14 = new Icon14();
        this.icon15 = new Icon15();
        this.icon16 = new Icon16();
        this.icon17 = new Icon17();
        this.icon18 = new Icon18();
        this.icon19 = new Icon19();
        this.icon20 = new Icon20();
        this.icon21 = new Icon21();
        this.icon22 = new Icon22();
        this.icon23 = new Icon23();
        this.icon24 = new Icon24();

        // Time tick event
        this.time.on('tick', () =>
        {
            this.setRaycaster()
        }) 

        this.raycaster = new THREE.Raycaster()
        this.currentIntersect = null

    }

    setRaycaster()
    {

        const currentIcon = document.querySelector(".current__icon")
        const currentIconTitle = document.querySelector(".current__icon-title")
        const currentIconInfo = document.querySelector(".current__icon-info")
    
        
        this.objectsToIntersect =
        [
            this.icon1.icon1,
            this.icon2.icon2,
            this.icon3.icon3,
            this.icon4.icon4,
            this.icon5.icon5,
            this.icon6.icon6,
            this.icon7.icon7,
            this.icon8.icon8,
            this.icon9.icon9,
            this.icon10.icon10,
            this.icon11.icon11,
            this.icon12.icon12,
            this.icon13.icon13,
            this.icon14.icon14,
            this.icon15.icon15,
            this.icon16.icon16,
            this.icon17.icon17,
            this.icon18.icon18,
            this.icon19.icon19,
            this.icon20.icon20,
            this.icon21.icon21,
            this.icon22.icon22,
            this.icon23.icon23,
            this.icon24.icon24         
        ]

        this.rayOrigin = new THREE.Vector3(0, -0, 4)
        this.rayDirection = new THREE.Vector3(0, 0, -.5)
        this.rayDirection.normalize()
        this.scene.add(new THREE.ArrowHelper( this.raycaster.ray.direction, this.camera.instance, 1, 0xffffff ));
        this.raycaster.far = 3.9
        this.raycaster.set(this.rayOrigin, this.rayDirection)
        const intersects = this.raycaster.intersectObjects(this.objectsToIntersect)

      // console.log(intersects)
        if(intersects.length)
        {
            if(!this.currentIntersect)
            {         
                this.currentIntersect = intersects[0]
            }
            this.currentIntersect = intersects[0]
        }
        else
        {
        
            if(this.currentIntersect)
            {
                switch(this.currentIntersect.object)
                {
                    case this.icon1.icon1:
                        currentIconTitle.innerText = "Blender"
                        currentIconInfo.innerText = "3D software used for the 3D pipeline artwork from modeling, rigging, animation, simulation, rendering,motion-tracking to task automation with scripts."
                        break
                    case this.icon2.icon2:
                        currentIconTitle.innerText = "Chaos"
                        currentIconInfo.innerText = "Suite of products used for high-quality, physically based shading production rendering."
                        break
                    case this.icon3.icon3:
                        currentIconTitle.innerText = "Character"
                        currentIconInfo.innerText = "Software used for our full character creation pipeline to customize 3D human character genders and ethinicity."
                        break
                    case this.icon4.icon4:
                        currentIconTitle.innerText = "Cinema4D"
                        currentIconInfo.innerText = "Software used for our professional 3D modeling, animation, simulation and rendering solution."
                        break
                    case this.icon5.icon5:
                        currentIconTitle.innerText = "Corona"
                        currentIconInfo.innerText = "One the renderer engines deployed to deliver our high-quality photorealistic, physically based shading virtual worlds."
                        break
                    case this.icon6.icon6:
                        currentIconTitle.innerText = "Daz3D"
                        currentIconInfo.innerText = "Our main tool for 3D character and scene creation with our own poses, character transformation and animation."
                        break
                    case this.icon7.icon7:
                        currentIconTitle.innerText = "Headshot"
                        currentIconInfo.innerText = "Our main AI-powered Character Creator plugin from Reallusion to generate 3D realtime digital humans."
                        break
                    case this.icon8.icon8:
                        currentIconTitle.innerText = "Iclone"
                        currentIconInfo.innerText = "Our professional tool to create 3D animations and story telling in virtual environments with visual effects for our virtual worlds."
                        break
                    case this.icon9.icon9:
                        currentIconTitle.innerText = "Iray"
                        currentIconInfo.innerText = "Our main rendered cross software for high-quality photorealistic, physically based shading virtual worlds."
                        break
                    case this.icon10.icon10:
                        currentIconTitle.innerText = "Matterport"
                        currentIconInfo.innerText = "Our main professional 3D camera hardware provider for large-scale 3D scanning deployment and software integration development."
                        break
                    case this.icon11.icon11:
                        currentIconTitle.innerText = "Max"
                        currentIconInfo.innerText = "3D modeling and rendering software for 3D modeling, rendering, and animation."
                        break
                    case this.icon12.icon12:
                        currentIconTitle.innerText = "Maya"
                        currentIconInfo.innerText = "3D software used for 3D modeling, rendering and animation on specific use cases."
                        break
                    case this.icon13.icon13:
                        currentIconTitle.innerText = "Perception Neuron"
                        currentIconInfo.innerText = "Our main full body motion capture solution used for 3D live animation and VFX productions. "
                        break
                    case this.icon14.icon14:
                        currentIconTitle.innerText = "Pix4D"
                        currentIconInfo.innerText = "Main professional photogrammetry and drone mapping software used for exterior 3D mapping"
                        break
                    case this.icon15.icon15:
                        currentIconTitle.innerText = "Reallusion"
                        currentIconInfo.innerText = "Suite of software used for 3D character creation and animation projects."
                        break
                    case this.icon16.icon16:
                        currentIconTitle.innerText = "Sketchfab"
                        currentIconInfo.innerText = "Main platform used for 3D and AR asset management in combination with other 3D asset content providers."
                        break
                    case this.icon17.icon17:
                        currentIconTitle.innerText = "Unity"
                        currentIconInfo.innerText = "Real-time platform for 3D VRAR project integration on mobile and web."
                        break
                    case this.icon18.icon18:
                        currentIconTitle.innerText = "Unreal"
                        currentIconInfo.innerText = "Real-time platform for 3D VRAR project integration on mobile and web."
                        break
                    case this.icon19.icon19:
                        currentIconTitle.innerText = "Vectary"
                        currentIconInfo.innerText = "Browser-based software used for online AR projects in combination with other tools. "
                        break
                    case this.icon20.icon20:
                        currentIconTitle.innerText = "3DF Zephyr"
                        currentIconInfo.innerText = "Photogrammetry software used for image processing, photogrammetry analysis, editing and 3D reconstruction."
                        break
                    case this.icon21.icon21:
                        currentIconTitle.innerText = "AutoCAD"
                        currentIconInfo.innerText = "Software used for 3D drafting, design, and modeling with solids, surfaces, mesh objects"
                        break
                    case this.icon22.icon22:
                        currentIconTitle.innerText = "Revit"
                        currentIconInfo.innerText = "Main BIM software to design structure, document and deliver architecture based real estate projects including buildings and landscape."
                        break
                    case this.icon23.icon23:
                        currentIconTitle.innerText = "Leica"
                        currentIconInfo.innerText = "The main professional 3D camera hardware provider deployed for large 3D scanning project using very high precision laser-based photogrammetry."
                        break
                    case this.icon24.icon24:
                        currentIconTitle.innerText = "Faceware"
                        currentIconInfo.innerText = "Real-time facial tracking software used to track any face motion effects and deliver our 3D character on our live streams."
                        break
                }
            }
            this.currentIntersect = null
        }   
    }
}