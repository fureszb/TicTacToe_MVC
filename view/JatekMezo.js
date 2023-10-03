class JatekMezo {
  #index;
  constructor(szuloElem, index) {
    this.szuloElem = szuloElem;
    this.#index = index;
    this.kattinthato = true;
    this.EgyKocka(this.#index);
    this.egyEleme = $("div:last-child");
    this.pTag = this.egyEleme.children("p:last-child");
    this.pTag.on("click", () => {
        if(this.kattinthato){   
            this.#SajatEsemenyem("EgyKockaKattint");
        }   
        this.kattinthato = false;
      
    });

    console.log(szuloElem);
  }
  #SajatEsemenyem(nev) {
    const esemenyem = new CustomEvent(nev, { detail: this});
    window.dispatchEvent(esemenyem);
  }
  setErtek(jel) {
    this.pTag.html(jel);
  }
  EgyKocka(index) {
    let txt = `
        <div class = "elem" id = "${index}"><p>&nbsp;</p></div>`;
    this.szuloElem.append(txt);
  }
  getIndex(){
    return this.#index;
  }
}
export default JatekMezo;
