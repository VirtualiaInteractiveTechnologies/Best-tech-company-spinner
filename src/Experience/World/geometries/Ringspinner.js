import * as THREE from 'three'
import Experience from "../../Experience";
//ring
import Ring1 from './ring1/Ring1'
import Ring2 from './ring2/Ring2'
import Ring3 from './ring3/Ring3'
import Ring4 from './ring4/Ring4'
//icon
import Icon1 from "./ring1/Icon1";
import Icon2 from "./ring1/Icon2";
import Icon3 from "./ring1/Icon3";
import Icon4 from "./ring1/Icon4";
import Icon5 from "./ring1/Icon5";
import Icon6 from "./ring2/Icon6";
import Icon7 from "./ring2/Icon7";
import Icon8 from "./ring2/Icon8";
import Icon9 from "./ring2/Icon9";
import Icon10 from "./ring2/Icon10";
import Icon11 from "./ring3/Icon11";
import Icon12 from "./ring3/Icon12";
import Icon13 from "./ring3/Icon13";
import Icon14 from "./ring3/Icon14";
import Icon15 from './ring3/Icon15';
import Icon16 from "./ring4/Icon16";
import Icon17 from './ring4/Icon17';
import Icon18 from "./ring4/Icon18";
import Icon19 from './ring4/Icon19';
import Icon20 from "./ring4/Icon20";
import Icon21 from "./ring1/Icon21";
import Icon22 from "./ring2/Icon22";
import Icon23 from "./ring3/Icon23";
import Icon24 from "./ring4/Icon24";



export default class Ringspinner
{
    constructor()
    {
        this.experience = new Experience();
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.raycaster = this.experience.raycaster
        // rings
        this.ring1 = new Ring1()
        //icon
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
        
        console.log(this.ring1.firstRing)
        this.time.on('tick', () =>
        {
            this.ring1.firstRing.rotation.z += 0.002
        })
    }
}
