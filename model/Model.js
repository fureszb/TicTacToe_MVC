class Model {
  #id;
  #alapot;
  #lepes;
  lepes2;
  #lista;
  constructor() {
    this.#alapot = "O";
    this.#lepes = 0;
  }
  setAllapot() {
    if (this.#alapot === "X") {
      this.#alapot = "O";
    } else {
      this.#alapot = "X";
    }
    this.#lepes++;
  }
  getErtek() {
    return this.#alapot;
  }
  getVegeVanE() {
    if (this.#lepes >= 8) {
      return true;
    } else {
      return false;
    }
  }
  #vizszintesGyozelem() {
    let vEll = this.#lista[0];
   
      for (let j = 1; j <= 9; j++) {
        vEll += this.#lista[j];
        if(j%3 === 2)
        {
            vEll+="@";
        }
    }
    vEll+="@";
  }
}
export default Model;
