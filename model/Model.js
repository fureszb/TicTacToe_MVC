class Model {
  #lista = [];
  #id;
  #alapot;
  #lepes;
  constructor() {
    this.#alapot = "O";
    this.#lepes = 0;
    this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];

  }
  setAllapot(id) {
    if (this.#alapot === "X") {
      this.#alapot = "O";
    } else {
      this.#alapot = "X";
    }
    this.#lista[id] = this.#alapot;
    this.#lepes++;
  }
  getErtek() {
    return this.#alapot;
  }
  getAllapot(){
    if(this.#alapot === "O")
      return "X";
    else
      return "O";
  }
  getVegeVanE() {
    let vEll = this.#vizszintesGyozelem();
    if (vEll.indexOf("OOO") > -1) {
      return "O nyert";
    } else if (vEll.indexOf("XXX") > -1) {
      return "X nyert";
    } else if (this.#lepes === 9) {
      return "Döntetlen!";
    }
    return "Tovább";
  }

  #vizszintesGyozelem() {
    let vEll = "";
    for (let i = 0; i < 9; i++) {
      vEll += this.#lista[i];
      if (i % 3 === 2) {
        vEll += "@";
      }
    }
    vEll += "@";
    console.log(vEll);
    console.log(vEll.indexOf("OOO"), vEll.indexOf("XXX"));
    return vEll;
  }
}
export default Model;
