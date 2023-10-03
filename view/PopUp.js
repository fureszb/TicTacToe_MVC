class PopUp{
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlPopUp();
    }
    #htmlPopUp(){
        this.szuloElem.html(`<div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Üzenet</h4>
            </div>
            <div class="modal-body text-center">
              <p>A játék véget ért!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Bezárás</button>
            </div>
          </div>`);
    }
}
export default PopUp;