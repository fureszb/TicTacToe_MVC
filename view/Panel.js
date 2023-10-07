class Panel {
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.szuloElem = $(".panel");


    }
    PanelGenerálás(kovetkezik, gyozelem) {
        let txt = `<div class="container mt-3">
        <div class="card">
          <div class="card-header">Következik:</div>
          <div class="card-body">${kovetkezik}</div> 
          <div class="card-footer"><p>${gyozelem}</p></div>
        </div>
      </div>
      `;
      this.szuloElem.html(txt);

    }
}
export default Panel;