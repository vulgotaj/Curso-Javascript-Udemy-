function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

   // Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1);
const p2 = new Pessoa('Felipe', 'Tajima');

/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto)
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30
pessoa1.falarNome = () => {
    return (`${this.nome} está falando o seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
*/