// Polimorfismo -> Método se comportarem de maneira diferente em subclasses (classe = função construtora)

// Super Classe
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//-> Método 1 = Sacar
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo()
};

//-> Método 2 = Depositar
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo()
};

//-> Método 3 = Ver saldo
Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
    );
};

// --- REESCREVENDO O MÉTODO SACAR COMO CONTA CORRENTE ---

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.construtor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo()
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.construtor = ContaPoupanca

const corrente = new ContaCorrente(11, 22, 0, 100)
corrente.depositar(10)
corrente.sacar(110)
corrente.sacar(1)
console.log('')

const poupanca = new ContaPoupanca(12, 33, 0)
poupanca.depositar(10)
poupanca.sacar(110)
poupanca.sacar(1)