class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentaVolume() {
    if (this.volume >= 101) return;
    this.volume++;
  }

  diminuiVolume() {
    if (this.volume === 0) return;
    this.volume--;
  }

  // metodo de classe
  static trocaPilha() {
    console.log('Trocar pilha');
  }
}

const c1 = new ControleRemoto('LG');
c1.aumentaVolume();
c1.aumentaVolume();
console.log(c1);
ControleRemoto.trocaPilha();

