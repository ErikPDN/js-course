// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { return this.nome + ' ' + this.sobrenome; }

// instância
const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('Maria', 'Oliveira');

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(pessoa1.nomeCompleto());
