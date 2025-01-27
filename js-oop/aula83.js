class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já está ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já está desligado');
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
  constructor(nome, polegadas) {
    super(nome);
    this.polegadas = polegadas;
  }

  // Nao precisa de @override
  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }

  get tamTela() {
    console.log('Tamanho da tela: ' + this.polegadas + ' polegadas');
  }
}

const t1 = new Tablet('iPad', 10);
t1.ligar();
t1.tamTela;
console.log(t1);


