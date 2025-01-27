// Polimorfismo 

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor < this.saldo) {
    this.saldo -= valor;
    console.log(`Saque de R$${valor} efetuado com sucesso. Saldo atual R$${this.saldo}`);
    return;
  }

  console.log(`Saldo insuficiente. Saldo atual R$${this.saldo}`);
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  console.log(`Depósito de R$${valor} efetuado com sucesso. Saldo atual R$${this.saldo}`);
}

Conta.prototype.printSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Não é necessario um override
ContaCorrente.prototype.sacar = function (valor) {
  if (valor <= this.saldo + this.limite) {
    this.saldo -= valor;
    console.log(`Saque de R$${valor} efetuado com sucesso. Saldo atual R$${this.saldo}`);
    return;
  }

  console.log(`Limite insuficiente. Seu limite é de R$${this.saldo + this.limite}`);
}

const cc1 = new ContaCorrente(11, 22, 10, 100);
cc1.sacar(101);
cc1.printSaldo();
