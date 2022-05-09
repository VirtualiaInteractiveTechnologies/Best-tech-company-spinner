import Experience from '../Experience.js'
import Environment from './Environment.js'
// main logo
import MainLogo from './geometries/MainLogo.js'
import Ringspinner from './geometries/Ringspinner.js'
//rings
/*
import Ring1 from './geometries/ring1/Ring1.js'
import Ring2 from './geometries/ring2/Ring2.js'
import Ring3 from './geometries/ring3/Ring3.js'
import Ring4 from './geometries/ring4/Ring4.js'
// ring1
import Icon1 from './geometries/ring1/Icon1'
import Icon2 from './geometries/ring1/Icon2'
import Icon3 from './geometries/ring1/Icon3'
import Icon4 from './geometries/ring1/Icon4'
import Icon5 from './geometries/ring1/Icon5'
//ring2
import Icon6 from './geometries/ring2/Icon6'
import Icon7 from './geometries/ring2/Icon7'
import Icon8 from './geometries/ring2/Icon8'
import Icon9 from './geometries/ring2/Icon9'
import Icon10 from './geometries/ring2/Icon10'
//ring3
import Icon11 from './geometries/ring3/Icon11'
import Icon12 from './geometries/ring3/Icon12'
import Icon13 from './geometries/ring3/Icon13'
import Icon14 from './geometries/ring3/Icon14'
import Icon15 from './geometries/ring3/Icon15'
//ring4
import Icon16 from './geometries/ring4/Icon16'
import Icon17 from './geometries/ring4/Icon17'
import Icon18 from './geometries/ring4/Icon18'
import Icon19 from './geometries/ring4/Icon19'
import Icon20 from './geometries/ring4/Icon20'
*/


export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        // Setup
        this.environment = new Environment()
        //main logo
        this.logo = new MainLogo()
        //rings
        this.ringspinner = new Ringspinner()
        /*
        this.ring1 = new Ring1()
        this.ring2 = new Ring2()
        this.ring3 = new Ring3()
        this.ring4 = new Ring4()
        //icons
        this.icon1 = new Icon1()
        this.icon2 = new Icon2()
        this.icon3 = new Icon3()
        this.icon4 = new Icon4()
        this.icon5 = new Icon5()
        this.icon6 = new Icon6()
        this.icon7 = new Icon7()
        this.icon8 = new Icon8()
        this.icon9 = new Icon9()
        this.icon10 = new Icon10()
        this.icon11 = new Icon11()
        this.icon12 = new Icon12()
        this.icon13 = new Icon13()
        this.icon14 = new Icon14()
        this.icon15 = new Icon15()
        this.icon16 = new Icon16()
        this.icon17 = new Icon17()
        this.icon18 = new Icon18()
        this.icon19 = new Icon19()
        this.icon20 = new Icon20()
        */
    }

    update()
    {
    }

}