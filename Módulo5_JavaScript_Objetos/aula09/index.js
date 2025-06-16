// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente!`)
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag./B: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente!`)
        
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const conta1 = new Conta(11, 22, 10);

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(90);
