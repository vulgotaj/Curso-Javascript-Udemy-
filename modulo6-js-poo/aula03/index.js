class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado!');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado!');
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

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    get ligar() {
        console.log('Olha, você alterou o método ligar!'); // Método já existente na classe mãe, porém, alterada na classe filha (tablet)
    }

    get falaOi() {
        console.log('Oi!'); // Método exclusivo do tablet
    }
}

const s1 = new Smartphone('iPhone', 'Preto', 'XR');
const t1 = new Tablet('SAMSUNG', true);
console.log(t1.ligar);