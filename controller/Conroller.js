import Model from "../model/Model.js";
import JatekMezo from "../view/JatekMezo.js";
import PopUp from "../view/PopUp.js";
import Panel from "../view/panel.js";
class Controller {
    constructor() {
        this.pop = $(".pop");
        this.szuloElem = $(".jatekter");
        this.MODEL = new Model();
        this.PANEL = new Panel();
        this.PANEL.PanelGenerálás("X", "");
        
        for (let index = 0; index < 9; index++) {
            this.JMezo = new JatekMezo(this.szuloElem, index);

        }

        $(window).on("EgyKockaKattint", (event) => {
               /* console.log(event.detail.getIndex())
                this.MODEL.setAllapot();
                event.detail.setErtek();*/


            
            if (this.MODEL.getVegeVanE() == "Tovább") {
                console.log(this.MODEL.getVegeVanE())
                this.MODEL.setAllapot(event.detail.getIndex());
                event.detail.setErtek(this.MODEL.getErtek());
                this.PANEL.PanelGenerálás(this.MODEL.getAllapot(), this.MODEL.getVegeVanE());
                console.log(this.getErtek)
               
            }
                $(".card-footer").css("color","green"); 
            


        })

    }
}
export default Controller;
