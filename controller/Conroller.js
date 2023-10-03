import Model from "../model/Model.js";
import JatekMezo from "../view/JatekMezo.js";
import PopUp from "../view/PopUp.js";
class Controller{
    constructor(){
        this.pop = $(".pop");
        this.szuloElem = $(".jatekter");
         this.MODEL = new Model();
        
         for (let index = 0; index < 9; index++) {
            this.JMezo = new JatekMezo(this.szuloElem, index); 
            
         }
        
         let i =0;
        $(window).on("EgyKockaKattint", (event)=>{
           
            if(this.MODEL.getVegeVanE())
            {
                new PopUp(this.pop);
                
            }
            else{
                i++;
                if(i==8)
                {
                    event.detail.attr("data-toggle", "modal");
                    event.detail.attr("data-target", "#myModal");
                }
                
                console.log(event.detail.getIndex())
                this.MODEL.setAllapot();
                event.detail.setErtek(this.MODEL.getErtek());
            }
        })
      
    }
}
export default Controller;
