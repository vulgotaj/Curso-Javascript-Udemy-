const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'Miranda',
    idade: 23,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,                            // FUNCTION FACTORY (CRIADORA DE "ITENS")
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Felipe', 'Tajima', 20);
const pessoa3 = criaPessoa('Beatriz', 'Busson', 20);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
*/






/*
const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'Tajima',
    idade: 20
};

const pessoa2 = {
    nome: 'Bia',
    sobrenome: 'Busson',
    idade: 20
}

console.log(pessoa1.nome)
*/
