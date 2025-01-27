const _velocidade = Symbol('velocidade');

class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this[_velocidade] = 0;
  }

  acelarar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freia() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;
    this[_velocidade] = value;
  }


}

const c1 = new Carro('Ford', 'Ka');

for (let i = 0; i <= 200; i++) {
  c1.acelarar();
}

console.log(c1);
c1.velocidade = 90
console.log(c1);

